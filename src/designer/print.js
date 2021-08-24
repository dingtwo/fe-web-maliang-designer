/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/print",["51","../58/5b/index","./5h"],(require,exports,module)=>{


/**
 * author:kooboy_li@163.com
 * 使用自定义对话框打印预览
 */
let magix_1 = require("51");
let index_1 = require("../58/5b/index");
let tojson_1 = require("./5h");
let { View, node, config } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	src,}=$dataFromView;
$vnode_0=[$createVNode('iframe',{'id': '_rd_print_'+$viewId,'src': (src),'frameborder': 'no','style': 'height:calc(100vh - 54px);width:100%;display:block;border:none',})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    async render() {
        if (DEBUG) {
            await this.digest({
                src: './print-debug.html'
            });
        }
        else {
            await this.digest({
                src: `./print.html?v=${config('version')}`
            });
        }
        let old = this['_ht'];
        if (old) {
            index_1["_hu"](old);
        }
        this['_hv'] = 0;
        let w = node(`_rd_print_${this.id}`).contentWindow;
        let origin = location.protocol + '//' + location.host;
        let post = () => {
            w.postMessage(tojson_1(), origin);
            this['_hv']++;
            if (this['_hv'] > 20) {
                index_1["_hu"](post);
            }
        };
        index_1["_hx"](400, this['_ht'] = post);
    },
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.origin == origin &&
            e.data == '_hA') {
            console.log('received', e);
            index_1["_hu"](this['_ht']);
        }
    },
});

});