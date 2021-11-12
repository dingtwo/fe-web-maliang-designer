enum HOST {
  prod = 'http://api.freshfood.cn',
  pre = 'http://pre.kong.b2bcsx.cn:8000',
  dev = 'http://10.252.192.35:8000',
  test = 'http://10.252.192.35:8000',
}

// 获取 host
export const getEnv = () => {
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
      return 'prod';
    default:
      return 'test';
  }
};

const getHost = () => HOST[getEnv()];

export default getHost;
