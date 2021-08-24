/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6f/index",["51","../../5g/codemirror"],(require,exports,module)=>{
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let codemirror_1 = require("../../5g/codemirror");
let { node, View, mark, dispatch, delay } = magix_1;
let types = {
    script: {
        '_ls': ['mode/javascript/javascript.min.js'],
        '_lt': 'javascript'
    },
    html: {
        '_ls': ['mode/xml/xml.min.js',
            'mode/css/css.min.js',
            'mode/javascript/javascript.min.js',
            'mode/htmlmixed/htmlmixed.min.js'],
        '_lt': 'htmlmixed'
    }
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	value,}=$dataFromView;
$vnode_0=[$createVNode('textarea',{'class': 'rd-gN rd-gO rd-gh','id': '_mx_ta_'+$viewId,'value': (value),},0,$special_2)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.on('destroy', () => {
            if (this['_k6']) {
                this['_k6'].toTextArea();
            }
        });
    },
    assign(data) {
        this.set(data);
        if (this['_k6']) {
            this['_k6'].setValue(data.value);
        }
        return false;
    },
    async render() {
        let m = mark(this, '_gt');
        let type = this.get('type') || 'script';
        let tInfo = types[type];
        console.log(tInfo);
        await codemirror_1(tInfo['_ls']);
        await delay(200);
        await this.digest();
        if (m() && !this['_k6']) {
            let ta = node(`_mx_ta_${this.id}`);
            this['_k6'] = CodeMirror.fromTextArea(ta, {
                mode: tInfo['_lt'],
                lineNumbers: true,
                lineWrapping: true
            });
            this['_k6'].setSize('100%', '100%');
            this['_k6'].on('blur', e => {
                dispatch(this.root, 'cmchange', {
                    value: e.getValue()
                });
            });
        }
    }
});

});