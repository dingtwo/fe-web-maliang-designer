/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-codemirror/index",["magix5","../../provider/codemirror"],(require,exports,module)=>{
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let codemirror_1 = require("../../provider/codemirror");
let { node, View, mark, dispatch, delay } = magix_1;
let types = {
    script: {
        '@:{provides~rs}': ['mode/javascript/javascript.min.js'],
        '@:{mode~rs}': 'javascript'
    },
    html: {
        '@:{provides~rs}': ['mode/xml/xml.min.js',
            'mode/css/css.min.js',
            'mode/javascript/javascript.min.js',
            'mode/htmlmixed/htmlmixed.min.js'],
        '@:{mode~rs}': 'htmlmixed'
    }
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	value,}=$dataFromView;
$vnode_0=[$createVNode('textarea',{'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-textarea rd-_assets_index_less_-wp100','id': '_mx_ta_'+($__line=1,$__art='{{=$viewId}}','')+$viewId,'value': ($__line=1,$__art='{{=value}}',$__ctrl='<%=value%>',(value)),},0,$special_2)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-codemirror/index.html'; throw msg; }  } ,
    init() {
        this.on('destroy', () => {
            if (this['@:{editor~rs}']) {
                this['@:{editor~rs}'].toTextArea();
            }
        });
    },
    assign(data) {
        this.set(data);
        if (this['@:{editor~rs}']) {
            this['@:{editor~rs}'].setValue(data.value);
        }
        return false;
    },
    async render() {
        let m = mark(this, '@:{render~rs}');
        let type = this.get('type') || 'script';
        let tInfo = types[type];
        console.log(tInfo);
        await codemirror_1(tInfo['@:{provides~rs}']);
        await delay(200);
        await this.digest();
        if (m() && !this['@:{editor~rs}']) {
            let ta = node(`_mx_ta_${this.id}`);
            this['@:{editor~rs}'] = CodeMirror.fromTextArea(ta, {
                mode: tInfo['@:{mode~rs}'],
                lineNumbers: true,
                lineWrapping: true
            });
            this['@:{editor~rs}'].setSize('100%', '100%');
            this['@:{editor~rs}'].on('blur', e => {
                dispatch(this.root, 'cmchange', {
                    value: e.getValue()
                });
            });
        }
    }
});

});