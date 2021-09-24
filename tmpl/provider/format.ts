import Magix from 'magix';
import _ from './lodash.min.js';
import moment from './moment/moment';
import HandleFormat from './handleFormat';
import { decimals, integer, date, time } from './formatConfig';

let groups = [
  {
    title: '数字',
    id: 'number',
    groups: [
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
    title: '自定义',
    id: 'custom',
    defaults: `/*
      data是根据根据当前绑定的字段取到的数据
      item是完整的单条数据对象
      可以把下面的console前的注释去掉查看相应的数据
    */

    function(data,item){
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
      } else if (prefix === 'transform' || prefix === 'number' || prefix == 'date') {
        const ruleList = _.filter(_.split(rest, '#'), item => item);
        const rules = _.map(ruleList, item => `${item}#`);

        return [prefix, ...rules];
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
          return fn(data, ...exts);
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

      const rulesText = _.join(
        _.filter(_.split(_.join(parts, ''), '#'), item => item),
        ' ',
      );

      return moment(data).format(rulesText);
    } else if (prefix === 'transform' || prefix === 'number') {
      const handleFormat = new HandleFormat(parts, data);
      return handleFormat.value;
    }

    return data;
  },
};
