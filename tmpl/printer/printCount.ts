/*
 * @Description: wms 打印计数
 * @Author: jiawei
 * @Date: 2021-10-11 18:30:12
 * @Last Modified by: jiawei
 * @Last Modified time: 2021-10-11 18:33:17
 */
import Magix from 'magix';
import Service from '../designer/service';

let { parseUrl } = Magix;

export const printCount = () => {
  let { params } = parseUrl(location.href);

  console.log('params', params);

  let service = new Service();

  service.all(
    {
      name: '@:{print.count}',
      '@:{body}': { orderCodes: [1], entryType: '3' },
    },
    (err: { message: string }, bag) => {
      let data = bag.get('data', []);

      console.log('data', data);
    },
  );
};
