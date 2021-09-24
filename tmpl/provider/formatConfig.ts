// 小数
export const myDecimals = [
  {
    title: '无小数，向上',
    format: 'toFixed_3_0#',
    example: '1.0001 => 2',
  },
  {
    title: '无小数，向下',
    format: 'toFixed_0_0#',
    example: '1.9999 => 1',
  },
  {
    title: '无小数，四舍五入',
    format: 'toFixed_1_0#',
    example: '1.9999 => 2; 1.424 => 1',
  },
  {
    title: '一位小数，向上',
    format: 'toFixed_3_1#',
    example: '1.0001 => 1.1',
  },
  {
    title: '一位小数，向下',
    format: 'toFixed_0_1#',
    example: '1.9999 => 1.9',
  },
  {
    title: '一位小数，四舍五入',
    format: 'toFixed_1_1#',
    example: '1.4999 => 1.5; 1.424 => 1.4',
  },
];

export const integer = [
  {
    title: '千分位',
    format: 'separator_1000#',
    example: '1,000',
  },
  {
    title: '万分位',
    format: 'separator_10000#',
    example: '1,0000',
  },
  {
    title: '百分比',
    format: 'ratio_100#',
    example: '100%',
  },
  {
    title: '千分比',
    format: 'ratio_1000#',
    example: '1000‰',
  },
];
