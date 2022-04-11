import Magix from 'magix';
import Service from '../designer/service';
import { printCount } from './printCount';

let { parseUrl } = Magix;
export const getExcel = errcb => {
  const { params } = parseUrl(location.href);

  const { orders } = params;

  const service = new Service();
  service.all(
    {
      name: '@:{print.excel}',
      '@:{query}': { orderCode: orders },
    },
    (err: { message: string }, bag) => {
      if (err) {
        console.log('excel 异常', `${err.message}`);
        errcb();
        return;
      }

      console.log('excel err is', err);
      console.log('excel bag is', bag);
      console.log(bag.get('data'));
      window.location.href = bag.get('data');
      printCount();
    },
  );
};
