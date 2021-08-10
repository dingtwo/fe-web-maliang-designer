/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/print",["magix5","../gallery/mx-runner/index","./tojson"],(require,exports,module)=>{


/**
 * author:kooboy_li@163.com
 * 使用自定义对话框打印预览
 */
let magix_1 = require("magix5");
let index_1 = require("../gallery/mx-runner/index");
let tojson_1 = require("./tojson");
let { View, node, config } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	src,}=$dataFromView;
$vnode_0=[$createVNode('iframe',{'id': '_rd_print_'+($__line=1,$__art='{{= $viewId}}','')+$viewId,'src': ($__line=1,$__art='{{=src}}',$__ctrl='<%=src%>',(src)),'frameborder': 'no','style': 'height:calc(100vh - 54px);width:100%;display:block;border:none',})]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/print.html'; throw msg; }  } ,
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
        let old = this['@:{printer.post.fn~rs}'];
        if (old) {
            index_1["@:{task.remove.background~rs}"](old);
        }
        this['@:{printer.try.send.message~rs}'] = 0;
        let w = node(`_rd_print_${this.id}`).contentWindow;
        let origin = location.protocol + '//' + location.host;
        let post = () => {
            w.postMessage(tojson_1(), origin);
            this['@:{printer.try.send.message~rs}']++;
            if (this['@:{printer.try.send.message~rs}'] > 20) {
                index_1["@:{task.remove.background~rs}"](post);
            }
        };
        index_1["@:{task.add.background~rs}"](400, this['@:{printer.post.fn~rs}'] = post);
    },
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.origin == origin &&
            e.data == '@:{printer.message.received~rs}') {
            console.log('received', e);
            index_1["@:{task.remove.background~rs}"](this['@:{printer.post.fn~rs}']);
        }
    },
});

});