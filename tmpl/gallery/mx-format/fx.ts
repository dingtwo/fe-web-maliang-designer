/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Dialog from '../mx-dialog/index';
import './share';
'ref@:./share.less';
let { View, dispatch } = Magix;
export default View.extend({
    tmpl: '@:fx.html',
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{choose.format}<click>'() {
        let me = this;
        me.mxDialog('@:./code', {
            width: 900,
            format: me.get('format'),
            defaultFx: me.get('defaultFx'),
            done(format) {
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