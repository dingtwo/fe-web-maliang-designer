/*
    author:https://github.com/xinglie
*/
'ref@:./share.less';
import './share';
import Magix from 'magix';
import FormatProvider from '../../provider/format';
export default Magix.View.extend({
  tmpl: '@:list.html',
  init(data) {
    let me = this;
    me['@:{format}'] = data.format;
    me['@:{dialog}'] = data.dialog;
    me['@:{done.callback}'] = data.done;
  },
  render() {
    let list = FormatProvider['@:{get.groups}'](),
      parts = FormatProvider['@:{get.parts}'](this['@:{format}']);

    if (!parts[0]) parts[0] = list[0].id;
    this.digest({
      list,
      parts,
    });
  },
  '@:{use.format}<click>'(e) {
    let { format, to } = e.params;
    let parts = this.get('parts');

    if (parts[to] == format) {
      parts[to] = '';
    } else {
      parts[to] = format;
    }

    this.digest({
      parts,
    });
  },
  '@:{update.format}<cmchange>'(e) {
    let parts = this.get('parts');
    parts[1] = e.value.trim();
  },
  '@:{change.tab}<click>'(e: Magix5.MagixMouseEvent) {
    let { to } = e.params;
    this.digest({
      parts: [to],
    });
  },
  '@:{apply}<click>'() {
    this['@:{dialog}'].close();
    let parts = this.get('parts');
    let [prefix, ...rest] = parts;
    for (let i = rest.length; i--; ) {
      if (rest[i] == null) {
        rest[i] = '';
      }
    }
    this['@:{done.callback}'](prefix + ':' + rest.join(''));
  },
  '@:{close}<click>'() {
    this['@:{dialog}'].close();
  },
});
