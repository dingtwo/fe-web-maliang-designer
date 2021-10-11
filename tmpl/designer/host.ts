// 获取 host
function getEnv() {
  var hostname = window.location.hostname;

  switch (hostname) {
    case 'prezt.freshfood.cn':
      return 'pre';
    case 'localhost':
      return 'dev';
    case '10.252.192.20':
    case 'devzt.b2bcsx.com':
      return 'test';
    case 'zt.freshfood.cn':
    default:
      return 'prod';
  }
}

var host = {
  prod: 'http://api.freshfood.cn',
  test: 'http://10.252.192.35:8000',
  dev: 'http://10.252.192.35:8000',
  pre: 'http://pre.kong.b2bcsx.cn:8000',
};

export const getHost = () => host[getEnv()];
