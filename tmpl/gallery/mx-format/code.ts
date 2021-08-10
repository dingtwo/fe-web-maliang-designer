'ref@:./share.less';
import './share';
import Magix from 'magix';
import FormatProvider from '../../provider/format';
let defaultFx = `/*
    item是完整的单条数据对象
    page是当前页面使用的数据列表
    all是所有数据列表
    可以把下面的console前的注释去掉查看相应的数据
    不同的场景下传递参数不一样，page和all在某些场景下不存在
*/
function(item,page,all){
    //console.log(item,page,all);
    return item;
}`;
export default Magix.View.extend({
    tmpl: '@:./code.html',
    init(data) {
        let me = this;
        me['@:{format}'] = data.format;
        me['@:{default.fx}'] = data.defaultFx;
        me['@:{dialog}'] = data.dialog;
        me['@:{done.callback}'] = data.done;
    },
    render() {
        let parts = FormatProvider["@:{get.parts}"](this['@:{format}']);
        if (!parts[1]) {
            parts[1] = this['@:{default.fx}'] || defaultFx;
        }
        console.log(parts);
        this.digest({
            parts
        });
    },
    '@:{update.format}<cmchange>'(e) {
        let parts = this.get('parts');
        parts[1] = e.value.trim();
    },
    '@:{apply}<click>'() {
        this['@:{dialog}'].close();
        let parts = this.get('parts');
        this['@:{done.callback}']('custom:' + parts[1]);
    },
    '@:{close}<click>'() {
        this['@:{dialog}'].close();
    }
});