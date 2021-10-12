/*
 * @Description: wms 打印计数
 * @Author: jiawei
 * @Date: 2021-10-11 18:30:12
 * @Last Modified by: jiawei
 * @Last Modified time: 2021-10-12 10:26:34
 */
import Magix from 'magix';
import Service from '../designer/service';

let { parseUrl } = Magix;

export const printCount = () => {
  let { params } = parseUrl(location.href);
  const { scene, order } = params;

  if (scene !== '1') {
    return;
  }

  let service = new Service();

  service.all(
    {
      name: '@:{print.count}',
      '@:{body}': JSON.stringify({ orderCodes: [order], entryType: '3' }),
    },
    (err: { message: string }, bag) => {
      console.log('打印计数 err is', err);
      console.log('打印计数 bag is', bag);

      if (err) {
        console.log('打印计数接口调用失败', `${err.message}`);
      }
    },
  );
};
