/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import FormatProvider from '../../provider/format';
import Dialog from '../mx-dialog/index';
import './share';
'ref@:./share.less';
let { View, dispatch } = Magix;
export default View.extend({
    tmpl: '@:index.html',
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            text: FormatProvider["@:{translate}"](this.get('format'))
        });
    },
    '@:{choose.format}<click>'() {
        let me = this;
        me.mxDialog('@:./list', {
            width: 900,
            format: me.get('format'),
            done(format: string) {
                dispatch(me.root, 'change', {
                    format
                });
            }
        });
    },
    '@:{clear.format}<click>'(e: Magix5.MagixMouseEvent) {
        dispatch(this.root, 'change', {
            format: ''
        });
    }
}).merge(Dialog);