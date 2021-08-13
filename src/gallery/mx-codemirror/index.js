/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6q/index",["5c","../../5r/codemirror"],(require,exports,module)=>{
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let codemirror_1 = require("../../5r/codemirror");
let { node, View, mark, dispatch, delay } = magix_1;
let types = {
    script: {
        '_rd': ['mode/javascript/javascript.min.js'],
        '_re': 'javascript'
    },
    html: {
        '_rd': ['mode/xml/xml.min.js',
            'mode/css/css.min.js',
            'mode/javascript/javascript.min.js',
            'mode/htmlmixed/htmlmixed.min.js'],
        '_re': 'htmlmixed'
    }
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	value,}=$dataFromView;
$vnode_0=[$createVNode('textarea',{'class': 'rd-l6 rd-mB rd-mC','id': '_mx_ta_'+$viewId,'value': (value),},0,$special_2)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.on('destroy', () => {
            if (this['_qR']) {
                this['_qR'].toTextArea();
            }
        });
    },
    assign(data) {
        this.set(data);
        if (this['_qR']) {
            this['_qR'].setValue(data.value);
        }
        return false;
    },
    async render() {
        let m = mark(this, '_mh');
        let type = this.get('type') || 'script';
        let tInfo = types[type];
        console.log(tInfo);
        await codemirror_1(tInfo['_rd']);
        await delay(200);
        await this.digest();
        if (m() && !this['_qR']) {
            let ta = node(`_mx_ta_${this.id}`);
            this['_qR'] = CodeMirror.fromTextArea(ta, {
                mode: tInfo['_re'],
                lineNumbers: true,
                lineWrapping: true
            });
            this['_qR'].setSize('100%', '100%');
            this['_qR'].on('blur', e => {
                dispatch(this.root, 'cmchange', {
                    value: e.getValue()
                });
            });
        }
    }
});

});