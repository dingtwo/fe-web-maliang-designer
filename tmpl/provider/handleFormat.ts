/*
 * @Description:
 * @Author: jiawei
 * @Date: 2021-09-24 11:13:31
 * @Last Modified by: jiawei
 * @Last Modified time: 2021-09-24 17:26:33
 */

import _ from './lodash.min.js';
import { calc, nzhCn } from './calc.js';

const unitRatioMap = new Map([
  ['ratio_2#', 'kg'],
  ['ratio_1000#', 'kg'],
  ['ratio_0.5#', '斤'],
  ['ratio_0.001#', 'g'],
  ['ratio_price_0.5#', 'kg'],
  ['ratio_price_0.001#', 'kg'],
  ['ratio_price_2#', '斤'],
  ['ratio_price_1000#', 'g'],
]);

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
  constructor(formats: string[], val: string, itemData: Record<string, any>) {
    this.value = val;
    this.itemData = itemData;
    this.distribute(formats);
  }

  value: string;
  itemData: Record<string, any>;

  getRules = (format: string) => {
    const [formatText] = _.split(format, '#');
    return _.split(formatText, '_');
  };

  distribute = (formats: string[]) => {
    if (formats.length <= 0) {
      return;
    }

    const format = _.first(formats);

    // 小数
    if (format.includes('toFixed')) {
      this.value = this.toFixed(format, this.value);
    }
    // 转汉字
    else if (format.includes('nzh')) {
      this.value = this.nzh(format, this.value);
    }
    // 整数分隔
    else if (format.includes('separator')) {
      this.value = this.separator(format, this.value);
    }
    // 判断转换规则是否存在于单位比例转换
    else if (unitRatioMap.has(format)) {
      this.value = this.unitRatio(format, this.value, this.itemData);
    }
    // 比例
    else if (format.includes('ratio')) {
      this.value = this.ratio(format, this.value);
    }
    // 替换单位
    else if (format.includes('unit')) {
      this.value = this.unitTransform(format, this.value);
    }
    // 文案
    else if (format.includes('textReplace')) {
      this.value = this.textReplace(format, this.value);
    }

    this.distribute(_.drop(formats));
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

  // 小数
  toFixed = (format: string, val: string) => {
    const [, rm, num] = this.getRules(format);
    const rmN = calc(rm).toNumber();
    const numN = calc(num).toNumber();

    return calc(val).toFixed(numN, rmN);
  };

  // 整数分隔
  separator = (format: string, val: string) => {
    const [, size] = this.getRules(format);

    return calc(val).toFormat(undefined, undefined, { groupSize: size });
  };

  // 比例
  ratio = (format: string, val: string) => {
    const [, ratio, sym] = this.getRules(format);

    return calc(val).mul(ratio).valueOf() + (sym || '');
  };

  // 单位比例转换
  unitRatio = (format: string, val: string, itemData: Record<string, any>) => {
    const itemUnit = _.get(itemData, 'unit');
    const orgUnit = unitRatioMap.get(format);

    // 这里有两种配置
    // 总量 ratio_0.5
    // 金额 ratio_price_0.001

    let [, ratio, ratio2] = this.getRules(format);

    if (ratio === 'price') {
      ratio = ratio2;
    }

    if (_.toLower(itemUnit) === orgUnit) {
      return calc(val).mul(ratio).valueOf();
    }

    return val;
  };

  // 单位替换
  unitTransform = (format: string, val: string) => {
    const [, orgUnit, unit] = this.getRules(format);

    if (_.toLower(val) === orgUnit) {
      return unit;
    }

    return val;
  };
  // 文字替换，这里需要单独写了
  textReplace = (format: string, val: string) => {
    if (format === 'textReplace_n#') {
      return _.replace(val, /\n/g, ' ');
    }
  };
}
