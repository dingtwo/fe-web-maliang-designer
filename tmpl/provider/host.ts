enum HOST {
  prod = 'http://api.b2bcsx.com',
  pre = 'http://pre.api.b2bcsx.com',
  dev = 'http://dev.api.b2bcsx.com:8000',
  sit = 'http://sit.api.b2bcsx.com',
  test = 'http://dev.api.b2bcsx.com:8000',
}

// 获取 host
export const getEnv = () => {
  var hostname = window.location.hostname;

  switch (hostname) {
    case 'prezt.freshfood.cn':
    case 'prezt.b2bcsx.com':
      return 'pre';
    case 'localhost':
      return 'dev';
    case '10.252.192.20':
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
