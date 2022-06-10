/**
 * author:kooboy_li@163.com
 * 使用自定义对话框打印预览
 */
import Magix from 'magix';
import Runner from '../gallery/mx-runner/index';
import ToJSON from './tojson';
import { getEnv } from '../provider/host';

let { View, node, config, parseUrl } = Magix;
const env = getEnv();
const testOrderCode = env === 'prod' ? 'OM22060900004508PS' : 'OM21082600000129';

export default View.extend({
  tmpl: '@:./print.html',
  async render() {
    let { params } = parseUrl(location.href);

    if (DEBUG) {
      await this.digest({
        src: `./print-debug.html?orders=${testOrderCode}&scene=1&preview=1&templateId=${params.id}`,
      });
    } else {
      await this.digest({
        src: `./print.html?orders=${testOrderCode}&scene=1&preview=1&v=${config(
          'version',
        )}&templateId=${params.id}`,
      });
    }
    let old = this['@:{printer.post.fn}'];
    if (old) {
      Runner['@:{task.remove.background}'](old);
    }
    this['@:{printer.try.send.message}'] = 0;
    let w = node<HTMLIFrameElement>(`_rd_print_${this.id}`).contentWindow;
    let origin = location.protocol + '//' + location.host;
    let post = () => {
      w.postMessage(ToJSON(), origin);
      this['@:{printer.try.send.message}']++;
      if (this['@:{printer.try.send.message}'] > 20) {
        Runner['@:{task.remove.background}'](post);
      }
    };
    Runner['@:{task.add.background}'](400, (this['@:{printer.post.fn}'] = post));
  },
  '$win<message>'(e: MessageEvent) {
    let origin = location.protocol + '//' + location.host;
    if (e.origin == origin && e.data == '@:{printer.message.received}') {
      console.log('received', e);
      Runner['@:{task.remove.background}'](this['@:{printer.post.fn}']);
    }
  },
});
