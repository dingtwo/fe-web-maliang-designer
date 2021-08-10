/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/print",["4e","../4l/4o/index","./4u"],(require,exports,module)=>{


/**
 * author:kooboy_li@163.com
 * 使用自定义对话框打印预览
 */
let magix_1 = require("4e");
let index_1 = require("../4l/4o/index");
let tojson_1 = require("./4u");
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
        let old = this['_eU'];
        if (old) {
            index_1["_eV"](old);
        }
        this['_eW'] = 0;
        let w = node(`_rd_print_${this.id}`).contentWindow;
        let origin = location.protocol + '//' + location.host;
        let post = () => {
            w.postMessage(tojson_1(), origin);
            this['_eW']++;
            if (this['_eW'] > 20) {
                index_1["_eV"](post);
            }
        };
        index_1["_eY"](400, this['_eU'] = post);
    },
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.origin == origin &&
            e.data == '_e1') {
            console.log('received', e);
            index_1["_eV"](this['_eU']);
        }
    },
});

});