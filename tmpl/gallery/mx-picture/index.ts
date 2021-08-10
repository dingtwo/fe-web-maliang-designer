/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Dialog from '../mx-dialog/index';
let { View, applyStyle, dispatch } = Magix;
applyStyle('@:index.less');
export default View.extend({
    tmpl: '@:index.html',
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{choose.picture}<click>'() {
        //debugger;
        let me = this;
        me.mxDialog('@:./list', {
            width: 1042,
            done(pic) {
                //me.digest(pic);
                me['@:{fire.event}'](pic);
            }
        });
    },
    '@:{fire.event}'(pic) {
        dispatch(this.root, 'change', pic);
    },
    '@:{clear.image}<click>'(e: Magix5.MagixMouseEvent) {
        this['@:{stop.propagation}'](e);
        //debugger;
        // this.digest({
        //     src: ''
        // });
        this['@:{fire.event}']({
            src: '',
            width: 0,
            height: 0
        });
    }
}).merge(Dialog);