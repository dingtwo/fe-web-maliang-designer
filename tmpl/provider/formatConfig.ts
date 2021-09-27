// 小数
export const decimals = [
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
  {
    title: '二位小数，向上',
    format: 'toFixed_3_2#',
    example: '1.0001 => 1.01',
  },
  {
    title: '二位小数，向下',
    format: 'toFixed_0_2#',
    example: '1.9999 => 1.99',
  },
  {
    title: '二位小数，四舍五入',
    format: 'toFixed_1_2#',
    example: '1.4999 => 1.50; 1.424 => 1.42',
  },
  {
    title: '三位小数，向上',
    format: 'toFixed_3_3#',
    example: '1.0001 => 1.001',
  },
  {
    title: '三位小数，向下',
    format: 'toFixed_0_3#',
    example: '1.9999 => 1.999',
  },
  {
    title: '三位小数，四舍五入',
    format: 'toFixed_1_3#',
    example: '1.43599 => 1.436; 1.4244 => 1.424',
  },
];

export const integer = [
  {
    title: '千分位',
    format: 'separator_3#',
    example: '1,000',
  },
  {
    title: '万分位',
    format: 'separator_4#',
    example: '1,0000',
  },
  {
    title: '百分比',
    format: 'ratio_100_%#',
    example: '100%',
  },
  {
    title: '千分比',
    format: 'ratio_1000_‰#',
    example: '1000‰',
  },
];

export const date = [
  {
    title: '年月日',
    format: 'YYYYMMDD#',
    example: '20200908',
  },
  {
    title: '年月日',
    format: 'YYYYMD#',
    example: '202098',
  },
  {
    title: '年-月-日',
    format: 'YYYY-MM-DD#',
    example: '2020-09-08',
  },
  {
    title: '年-月-日',
    format: 'YYYY-M-D#',
    example: '2020-9-8',
  },
  {
    title: '年/月/日',
    format: 'YYYY/MM/DD#',
    example: '2020/09/08',
  },
  {
    title: '年/月/日',
    format: 'YYYY/M/D#',
    example: '2020/9/8',
  },
  {
    title: '日-月-年',
    format: 'DD-MM-YYYY#',
    example: '08-09-2020',
  },
  {
    title: '日-月-年',
    format: 'D-M-YYYY#',
    example: '8-9-2020',
  },
  {
    title: '日/月/年',
    format: 'DD/MM/YYYY#',
    example: '08/09/2020',
  },
  {
    title: '日/月/年',
    format: 'D/M/YYYY#',
    example: '8/9/2020',
  },
  {
    title: '月日',
    format: 'MMDD#',
    example: '0908',
  },
  {
    title: '月日',
    format: 'MD#',
    example: '98',
  },
  {
    title: '月-日',
    format: 'MM-DD#',
    example: '09-08',
  },
  {
    title: '月-日',
    format: 'M-D#',
    example: '9-8',
  },
  {
    title: '月/日',
    format: 'MM/DD#',
    example: '09/08',
  },
  {
    title: '月/日',
    format: 'M/D#',
    example: '9/8',
  },
];

export const time = [
  {
    title: ' 小时',
    format: 'H#',
    example: '9',
  },
  {
    title: ' 小时',
    format: 'HH#',
    example: '09',
  },
  {
    title: ' 小时:分钟',
    format: 'H:m#',
    example: '9:2',
  },
  {
    title: ' 小时:分钟',
    format: 'HH:mm#',
    example: '09:02',
  },
  {
    title: ' 小时:分钟:秒',
    format: 'H:m:s#',
    example: '9:2:8',
  },
  {
    title: ' 小时:分钟:秒',
    format: 'HH:mm:ss#',
    example: '09:02:08',
  },
];
