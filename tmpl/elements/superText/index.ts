/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import FormatProvider from '../../provider/format';
import _ from '../../provider/lodash.min.js';

let { min } = Math;
let { isArray, View } = Magix;

export default View.extend({
  tmpl: '@:index.html',
  assign(data) {
    this.set(data);
    let { props } = data;
    let { text, bind, format, borderwidth: bw, width, height } = props;
    if (bind.url) {
      const bindFields = bind.fields;

      if (bind._tip) {
        text = bind._tip;
      } else if (bind._data) {
        let src = bind._data;

        if (isArray(src)) {
          src = src[0];
        }

        const values = _.map(bindFields, item => _.get(src, item.id, ''));
        text = values.filter(item => item).join(' ');
        text = FormatProvider['@:{format}'](format, text, src);
      } else {
        const names = _.map(bindFields, item => _.get(item, name, ''));
        text = `[绑定:${names.filter(item => item).join(' ')}]`;
      }
    }

    let minSize = min(width, height);
    let half = minSize / 2;

    if (bw > half) {
      bw = half;
    }

    this.set({
      bw,
      text,
    });
  },
  render() {
    this.digest();
  },
});
