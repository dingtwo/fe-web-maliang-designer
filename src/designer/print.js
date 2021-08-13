/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/print",["5c","../5j/5m/index","./5s"],(require,exports,module)=>{


/**
 * author:kooboy_li@163.com
 * 使用自定义对话框打印预览
 */
let magix_1 = require("5c");
let index_1 = require("../5j/5m/index");
let tojson_1 = require("./5s");
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
        let old = this['_nh'];
        if (old) {
            index_1["_ni"](old);
        }
        this['_nj'] = 0;
        let w = node(`_rd_print_${this.id}`).contentWindow;
        let origin = location.protocol + '//' + location.host;
        let post = () => {
            w.postMessage(tojson_1(), origin);
            this['_nj']++;
            if (this['_nj'] > 20) {
                index_1["_ni"](post);
            }
        };
        index_1["_nl"](400, this['_nh'] = post);
    },
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.origin == origin &&
            e.data == '_no') {
            console.log('received', e);
            index_1["_ni"](this['_nh']);
        }
    },
});

});