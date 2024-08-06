/*
 * @Description:
 * @Author: zhanghao
 * @Date: 2023-03-06 14:51:47
 * @LastEditTime: 2023-03-08 20:26:50
 * @LastEditors: zhanghao
 */
enum HOST {
  prodw = 'https://wapi.freshfood.cn',
  prew = 'https://prewapi.freshfood.cn',
  devw = 'http://localhost:9001',
  // devw = 'https://tapi.freshfood.cn',
  testw = 'https://tapi.freshfood.cn',
  sitw = 'https://sitwapi.freshfood.cn',
  prod = 'http://api.b2bcsx.com',
  pre = 'http://pre.api.b2bcsx.com',
  // dev = 'http://dev.api.b2bcsx.com:8000',
  dev = 'http://localhost:9001',
  sit = 'http://sit.api.b2bcsx.com',
  test = 'http://dev.api.b2bcsx.com:8000',
}

// 获取 host
export const getEnv = () => {
  var hostname = window.location.hostname;
  const win = window as any;

  if (win.RUN_CONFIG?.env) {
    return win.RUN_CONFIG?.env;
  }

  switch (hostname) {
    case 'prezt.freshfood.cn':
    case 'prezt.b2bcsx.com':
      return 'pre';
    case 'localhost':
      return 'dev';
    case '10.252.192.20':
    case 'dev.zt.b2bcsx.com':
    case 'devzt.b2bcsx.com':
      return 'test';
    case 'sitzt.freshfood.cn':
    case 'sitzt.b2bcsx.com':
      return 'sit';
    case 'zt.freshfood.cn':
      return 'prod';
    default:
      return 'test';
  }
};

export const getHost = () => HOST[getEnv()];
