import Magix from 'magix';
import Service from '../designer/service';
import _ from '../provider/lodash.min.js';
import { printCount } from './printCount';

export const getExcel = (params) => {
  const service = new Service();
  service.all(
    {
      name: '@:{print.excel}',
      '@:{query}': params,
    },
    (err: { message: string }, bag) => {
      if (err) {
        console.log('excel 异常', `${err.message}`);
      }

      console.log('excel err is', err);
      console.log('excel bag is', bag);
      console.log(bag.get('data'));
      window.location.href = bag.get('data');
      printCount();
    },
  );
};


export const generateExcel = (templates)=>{
  console.log('excel 模板数据',templates)
  _.map(templates,({id, orderCode})=>getExcel({templateId: id, orderCode}))
}
