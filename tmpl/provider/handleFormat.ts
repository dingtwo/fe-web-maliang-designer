/*
 * @Description:
 * @Author: jiawei
 * @Date: 2021-09-24 11:13:31
 * @Last Modified by: jiawei
 * @Last Modified time: 2021-09-24 14:04:53
 */

import _ from './lodash.min.js';
import { calc, nzhCn } from './calc.js';

/**
 * @description
 * @class HandleFormat
 */
export default class HandleFormat {
  /**
   * Creates an instance of HandleFormat.
   * @param {string[]} formats
   * @param {string} val
   * @param {Record<string, any>} record
   * @memberof HandleFormat
   */
  constructor(formats: string[], val: string) {
    this.value = val;
    this.distribute(formats);
  }

  value: string;

  distribute = (formats: string[]) => {
    if (formats.length <= 0) {
      return;
    }

    const format = _.first(formats);

    if (format.includes('toFixed')) {
      this.value = this.toFixed(format, this.value);
    } else if (format.includes('nzh')) {
      this.value = this.nzh(format, this.value);
    }

    this.distribute(_.drop(formats));
  };

  // 小数
  toFixed = (format: string, val: string) => {
    const [formatText] = _.split(format, '#');
    const [, rm, num] = _.split(formatText);
    return calc(val).toFixed(num, rm);
  };

  // 数字中文转换
  nzh = (format: string, val: string) => {
    switch (format) {
      // 转中文小写
      case 'nzh.encodeS#':
        return nzhCn.encodeS(val);
      // 转中文大写
      case 'nzh.encodeB#':
        return nzhCn.encodeB(val);
      // 转中文金额
      case 'nzh.toMoney#':
        return nzhCn.toMoney(val);
    }
  };
}
