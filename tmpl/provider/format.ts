import Magix from 'magix';
import _ from './lodash.min.js';
import { calc, nzhCn } from './calc.js';
import dayjs from './dayjs/dayjs.min.js';
import customParseFormat from './dayjs/plugin/customParseFormat.js';
import HandleFormat from './handleFormat';
import {
  ratioList,
  decimals,
  integer,
  date,
  time,
  conversion,
  unitTransform,
  testReplace,
  calcDate,
} from './formatConfig';

window.aa = { lodash: _, calc, nzhCn, dayjs };
dayjs.extend(customParseFormat);

let groups = [
  {
    title: '数字',
    id: 'number',
    groups: [
      {
        title: '倍数',
        list: ratioList,
      },
      {
        title: '小数',
        list: decimals,
      },
      {
        title: '整数',
        list: integer,
      },
    ],
  },
  {
    title: '日期',
    id: 'date',
    groups: [
      {
        title: '日期增减',
        list: calcDate,
      },
      {
        title: '日期',
        list: date,
      },
      {
        title: '时间',
        list: time,
      },
    ],
  },
  {
    title: '转换',
    id: 'transform',
    groups: [
      {
        title: '小数',
        list: decimals,
      },
      {
        title: '数字转换',
        list: [
          {
            title: '转中文小写',
            format: 'nzh.encodeS#',
            example: '十万零一百一十一',
          },
          {
            title: '转中文大写',
            format: 'nzh.encodeB#',
            example: '壹拾万零壹佰壹拾壹',
          },
          {
            title: '转中文金额',
            format: 'nzh.toMoney#',
            example: '人民币壹佰壹拾壹元壹角壹分',
          },
        ],
      },
    ],
  },
  {
    title: '换算',
    id: 'conversion',
    groups: [
      {
        title: '换算',
        list: conversion,
      },
      {
        title: '小数',
        list: decimals,
      },
    ],
  },
  {
    title: '单位转换',
    id: 'unitTransform',
    groups: [
      {
        title: '单位',
        list: unitTransform,
      },
    ],
  },
  {
    title: '文案',
    id: 'testReplace',
    groups: [
      {
        title: '文案替换',
        list: testReplace,
      },
    ],
  },
  {
    title: '自定义',
    id: 'custom',
    defaults: `/*
      data是根据根据当前绑定的字段取到的数据
      item是完整的单条数据对象
      可以把下面的console前的注释去掉查看相应的数据
    */

    function(data, item, { lodash, calc, nzhCn }){
      //console.log(data,item);
      //return data+item.name;
      return data;
    }`,
  },
];

let fnCache = new Magix.Cache();
let fnReg = /\bfunction\s*\(([\s\S]*?)\)\s*\{([\s\S]*?)\}\s*;?\s*$/i;

export default {
  '@:{get.groups}'() {
    return groups;
  },
  '@:{get.parts}'(format) {
    if (format == null) {
      format = '';
    }

    let colonIndex = format.indexOf(':');

    if (colonIndex > -1) {
      let prefix = format.substring(0, colonIndex);
      let rest = format.substring(colonIndex + 1);

      if (prefix == 'custom') {
        return [prefix, rest];
      } else {
        const ruleList = _.filter(_.split(rest, '#'), item => item);
        const rules = _.map(ruleList, item => `${item}#`);

        if (_.size(rules) > 0) {
          return [prefix, ...rules];
        }
      }
    }

    return [];
  },

  /**
   * @description 通过遍历显示格式的配置数据来获取显示遍历的title
   * @param {*} format
   * @return {string} title
   */
  '@:{translate}'(format) {
    let parts = this['@:{get.parts}'](format);
    const [groupId, ...rules] = parts;

    if (!groupId) {
      return '';
    }

    const group = _.find(groups, item => item.id === groupId);

    if (groupId === 'custom') {
      return `${group.title}:函数`;
    }

    const titles = _.reduce(
      rules,
      (prev, item) => {
        for (let sub of group.groups) {
          const isElm = _.find(sub.list, i => i.format === item);

          if (isElm) {
            return [...prev, isElm.title];
          }
        }

        return prev;
      },
      [group.title],
    );

    return _.join(titles, ':');
  },
  '@:{format}'(format, data, ...exts) {
    format += '';
    let parts = this['@:{get.parts}'](format);
    let prefix = parts.shift();

    if (prefix == 'custom') {
      let fn = parts.join('');
      let params, body;

      fn.replace(fnReg, (_, p, b) => {
        params = p;
        body = b;
      });

      if (params || body) {
        let key = [params, '\x00', body].join('');
        let fn = fnCache.get(key);
        if (!fn) {
          fn = Function(params, body);
          fnCache.set(key, fn);
        }
        try {
          return fn(data, ...exts, { lodash: _, calc, nzhCn, dayjs });
        } catch (ex) {
          return ex.message;
        }
      } else {
        return data;
      }
    } else if (prefix == 'date') {
      if (!data) {
        return '';
      }

      let newParts = parts;
      let dateData = data;
      const [firstFormat] = newParts;

      // 增减
      if (_.includes(firstFormat, 'date')) {
        newParts = _.drop(newParts);

        const [, type, num, unit] = _.split(_.first(_.split(firstFormat, '#')), '_');

        if (type === 'sub') {
          dateData = dayjs(dateData).subtract(num, unit);
        }
      }

      const rulesText = _.join(
        _.filter(_.split(_.join(newParts, ''), '#'), item => item),
        ' ',
      );

      if(dateData.includes(',')) {
        const dateDataList = _.split(dateData, ',');

        const dateDataListFormat = _.map(dateDataList, item => dayjs(item, rulesText).format(rulesText));
        const noRepeatDateDataListFormat = _.uniq(dateDataListFormat);
        return _.join(noRepeatDateDataListFormat, ',');
      }

      return dayjs(dateData, rulesText).format(rulesText);
    } else if (prefix) {
      const [itemData] = exts;
      const handleFormat = new HandleFormat(parts, data, itemData);

      return handleFormat.value;
    }

    return data;
  },
};
