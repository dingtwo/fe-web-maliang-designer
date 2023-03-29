/**
 * author:kooboy_li@163.com
 * 使用自定义对话框打印预览
 */
import Magix from 'magix';
import Runner from '../gallery/mx-runner/index';
import ToJSON from './tojson';
import { getPreviewUrl } from './preview';

let { View, node } = Magix;

export default View.extend({
  tmpl: '@:./print.html',
  async render() {
    const src = getPreviewUrl();
    console.log('src', src);
    try {
      await this.digest({
        src,
      });
    } catch (error) {
      alert(error);
    }

    let old = this['@:{printer.post.fn}'];
    if (old) {
      Runner['@:{task.remove.background}'](old);
    }
    this['@:{printer.try.send.message}'] = 0;
    let w = node<HTMLIFrameElement>(`_rd_print_${this.id}`).contentWindow;
    let origin = location.protocol + '//' + location.host;
    let post = () => {
      console.log('开始循环尝试');

      w.postMessage(ToJSON(), origin);
      this['@:{printer.try.send.message}']++;
      if (this['@:{printer.try.send.message}'] > 20) {
        Runner['@:{task.remove.background}'](post);
      }
    };
    Runner['@:{task.add.background}'](600, (this['@:{printer.post.fn}'] = post));
  },
  '$win<message>'(e: MessageEvent) {
    let origin = location.protocol + '//' + location.host;
    if (e.origin == origin && e.data == '@:{printer.message.received}') {
      console.log('received', e);
      Runner['@:{task.remove.background}'](this['@:{printer.post.fn}']);
    }
  },
});
