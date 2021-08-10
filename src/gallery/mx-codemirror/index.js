/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/5s/index",["4e","../../4t/codemirror"],(require,exports,module)=>{
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let codemirror_1 = require("../../4t/codemirror");
let { node, View, mark, dispatch, delay } = magix_1;
let types = {
    script: {
        '_iQ': ['mode/javascript/javascript.min.js'],
        '_iR': 'javascript'
    },
    html: {
        '_iQ': ['mode/xml/xml.min.js',
            'mode/css/css.min.js',
            'mode/javascript/javascript.min.js',
            'mode/htmlmixed/htmlmixed.min.js'],
        '_iR': 'htmlmixed'
    }
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	value,}=$dataFromView;
$vnode_0=[$createVNode('textarea',{'class': 'rd-dI rd-ed rd-ee','id': '_mx_ta_'+$viewId,'value': (value),},0,$special_2)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.on('destroy', () => {
            if (this['_it']) {
                this['_it'].toTextArea();
            }
        });
    },
    assign(data) {
        this.set(data);
        if (this['_it']) {
            this['_it'].setValue(data.value);
        }
        return false;
    },
    async render() {
        let m = mark(this, '_dU');
        let type = this.get('type') || 'script';
        let tInfo = types[type];
        console.log(tInfo);
        await codemirror_1(tInfo['_iQ']);
        await delay(200);
        await this.digest();
        if (m() && !this['_it']) {
            let ta = node(`_mx_ta_${this.id}`);
            this['_it'] = CodeMirror.fromTextArea(ta, {
                mode: tInfo['_iR'],
                lineNumbers: true,
                lineWrapping: true
            });
            this['_it'].setSize('100%', '100%');
            this['_it'].on('blur', e => {
                dispatch(this.root, 'cmchange', {
                    value: e.getValue()
                });
            });
        }
    }
});

});