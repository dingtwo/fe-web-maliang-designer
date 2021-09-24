import Magix from 'magix';
import _ from './lodash.min.js';
import HandleFormat from './handleFormat';
import { myDecimals } from './formatConfig';

let decimals = [
  {
    title: '无小数',
    format: '.',
    example: '0',
  },
  {
    title: '一位小数',
    format: '.#',
    example: '0.1',
  },
  {
    title: '两位小数',
    format: '.##',
    example: '0.01',
  },
  {
    title: '三位小数',
    format: '.###',
    example: '0.001',
  },
  {
    title: '四位小数',
    format: '.####',
    example: '0.0001',
  },
];

let groups = [
  {
    title: '数字',
    id: 'number',
    groups: [
      {
        title: '整数',
        list: [
          {
            title: '千分位',
            format: '#,###',
            example: '1,000',
          },
          {
            title: '万分位',
            format: '#,####',
            example: '1,0000',
          },
          {
            title: '万分位',
            format: "#'####",
            example: "1'0000",
          },
          {
            title: '百分比',
            format: '#%',
            example: '100%',
          },
          {
            title: '千分比',
            format: '#‰',
            example: '1000‰',
          },
        ],
      },
      {
        title: '小数',
        list: decimals,
      },
    ],
  },
  {
    title: '货币',
    id: 'currency',
    groups: [
      {
        title: '前缀',
        list: [
          {
            title: '¥人民币',
            format: '^¥',
          },
          {
            title: '$美元',
            format: '^$',
          },
          {
            title: '€欧元',
            format: '^€',
          },
          {
            title: '￡英磅',
            format: '^￡',
          },
          {
            title: '฿泰铢',
            format: '^฿',
          },
        ],
      },
      {
        title: '整数',
        list: [
          {
            title: '千分位',
            format: '#,###',
            example: '1,000',
          },
          {
            title: '万分位',
            format: '#,####',
            example: '1,0000',
          },
          {
            title: '万分位',
            format: "#'####",
            example: "1'0000",
          },
        ],
      },
      {
        title: '小数',
        list: decimals,
      },
      {
        title: '后缀',
        list: [
          {
            title: '人民币¥',
            format: '¥',
          },
          {
            title: '美元$',
            format: '$',
          },
          {
            title: '欧元€',
            format: '€',
          },
          {
            title: '英磅￡',
            format: '￡',
          },
          {
            title: '泰铢฿',
            format: '฿',
          },
        ],
      },
    ],
  },
  {
    title: '日期',
    id: 'date',
    groups: [
      {
        title: '日期',
        list: [
          {
            title: '年月日',
            format: 'yyyyMMdd',
            example: '20200908',
          },
          {
            title: '年月日',
            format: 'yyyyMd',
            example: '202098',
          },
          {
            title: '年-月-日',
            format: 'yyyy-MM-dd',
            example: '2020-09-08',
          },
          {
            title: '年-月-日',
            format: 'yyyy-M-d',
            example: '2020-9-8',
          },
          {
            title: '年/月/日',
            format: 'yyyy/MM/dd',
            example: '2020/09/08',
          },
          {
            title: '年/月/日',
            format: 'yyyy/M/d',
            example: '2020/9/8',
          },
          {
            title: '日-月-年',
            format: 'dd-MM-yyyy',
            example: '08-09-2020',
          },
          {
            title: '日-月-年',
            format: 'd-M-yyyy',
            example: '8-9-2020',
          },
          {
            title: '日/月/年',
            format: 'dd/MM/yyyy',
            example: '08/09/2020',
          },
          {
            title: '日/月/年',
            format: 'd/M/yyyy',
            example: '8/9/2020',
          },
          {
            title: '月日',
            format: 'MMdd',
            example: '0908',
          },
          {
            title: '月日',
            format: 'Md',
            example: '98',
          },
          {
            title: '月-日',
            format: 'MM-dd',
            example: '09-08',
          },
          {
            title: '月-日',
            format: 'M-d',
            example: '9-8',
          },
          {
            title: '月/日',
            format: 'MM/dd',
            example: '09/08',
          },
          {
            title: '月/日',
            format: 'M/d',
            example: '9/8',
          },
        ],
      },
      {
        title: '时间',
        list: [
          {
            title: ' 小时',
            format: ' h',
            example: '9',
          },
          {
            title: ' 小时',
            format: ' hh',
            example: '09',
          },
          {
            title: ' 小时:分钟',
            format: ' h:m',
            example: '9:2',
          },
          {
            title: ' 小时:分钟',
            format: ' hh:mm',
            example: '09:02',
          },
          {
            title: ' 小时:分钟:秒',
            format: ' h:m:s',
            example: '9:2:8',
          },
          {
            title: ' 小时:分钟:秒',
            format: ' hh:mm:ss',
            example: '09:02:08',
          },
        ],
      },
    ],
  },
  {
    title: '转换',
    id: 'transform',
    groups: [
      {
        title: '小数',
        list: myDecimals,
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

let dateReg = [
  {
    reg: /y+/gi,
    fn(m, d) {
      return (d.getFullYear() + '').slice(-m.length);
    },
  },
  {
    reg: /M+/g,
    fn(m, d) {
      return ('0' + (d.getMonth() + 1)).slice(-m.length);
    },
  },
  {
    reg: /d+/gi,
    fn(m, d) {
      return ('0' + d.getDate()).slice(-m.length);
    },
  },
  {
    reg: /h+/gi,
    fn(m, d) {
      return ('0' + d.getHours()).slice(-m.length);
    },
  },
  {
    reg: /m+/g,
    fn(m, d) {
      return ('0' + d.getMinutes()).slice(-m.length);
    },
  },
  {
    reg: /s+/g,
    fn(m, d) {
      return ('0' + d.getSeconds()).slice(-m.length);
    },
  },
];

let dateParse = date => {
  if (date instanceof Date) {
    return date;
  } else {
    date = new Date(Date.parse(String(date).replace(/-/g, '/')));
  }
  if (date instanceof Date && date.toString() != 'Invalid Date') {
    return date;
  }
  return null;
};

let numberGroup = (snum, len, spliter) => {
  let result = '';
  while (snum.length > len) {
    result = spliter + snum.slice(-len) + result;
    snum = snum.substring(0, snum.length - len);
  }
  if (snum) {
    result = snum + result;
  }
  return result;
};

let fnCache = new Magix.Cache();
let fnReg = /\bfunction\s*\(([\s\S]*?)\)\s*\{([\s\S]*?)\}\s*;?\s*$/i;
let numberExtractReg = /^(\^[\s\S]+?)?(?:#([,'%‰]))?(#{3,4})?(\.#{0,4})?([\s\S]*?)$/;

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
      let money = prefix == 'currency';
      if (prefix == 'number' || money) {
        let result = [prefix];
        rest.replace(numberExtractReg, (_, pfx, spliter, int, decimal, postfix) => {
          if (money) {
            result.push(pfx || '');
          }
          if (spliter == '%' || spliter == '‰') {
            result.push('#' + spliter);
          } else if (spliter) {
            result.push('#' + spliter + int);
          } else {
            result.push('');
          }
          result.push(decimal || '');
          if (money) {
            result.push(postfix || '');
          }
        });
        return result;
      } else if (prefix == 'date') {
        let dotIndex = rest.indexOf(' ');
        if (dotIndex > -1) {
          return [prefix, rest.substring(0, dotIndex), rest.substring(dotIndex)];
        } else {
          return [prefix, rest, ''];
        }
      } else if (prefix == 'custom') {
        return [prefix, rest];
      } else if (prefix === 'transform') {
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
    if (prefix == 'number' || prefix == 'currency') {
      let num = Number(data);
      if (isNaN(num)) {
        return data;
      }
      let pfx = '',
        postfix = '',
        integer,
        decimal;
      if (prefix == 'number') {
        [integer, decimal] = parts;
      } else {
        [pfx, integer, decimal, postfix] = parts;
        if (pfx) {
          pfx = pfx.substring(1);
        }
      }
      if (integer == '#%') {
        num *= 100;
        integer = '';
        postfix = '%';
      } else if (integer == '#‰') {
        num *= 1000;
        integer = '';
        postfix = '‰';
      }
      let snum;
      if (decimal) {
        snum = num.toFixed(decimal.length - 1);
      } else {
        snum = num + '';
      }
      let dotIndex = snum.indexOf('.');
      let rest = '';
      if (dotIndex > 0) {
        rest = snum.substring(dotIndex);
        snum = snum.substring(0, dotIndex);
      }
      if (integer) {
        let len,
          char = ',';
        let commaIndex = integer.lastIndexOf(char);
        if (commaIndex == -1) {
          char = "'";
          commaIndex = integer.lastIndexOf(char);
        }
        if (commaIndex != -1) {
          let last = integer.substring(commaIndex + 1);
          len = last.length;
          snum = numberGroup(snum, len, char);
        }
      }
      return pfx + snum + rest + postfix;
    } else if (prefix == 'date') {
      let date = dateParse(data);
      if (!date) {
        return data;
      }
      let f = parts.join(' ').trim();
      for (let p of dateReg) {
        f = f.replace(p.reg, match => p.fn(match, date));
      }
      return f;
    } else if (prefix == 'custom') {
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
    } else if (prefix === 'transform') {
      const handleFormat = new HandleFormat(parts, data);
      return handleFormat.value;
    }

    return data;
  },
};
