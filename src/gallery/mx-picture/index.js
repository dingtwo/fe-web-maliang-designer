/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/73/index",["5c","../62/index"],(require,exports,module)=>{
let $quick_mM_static_text;
let $quick_n7_0_static_attr={'class': 'rd-mG rd-nL rd-rx',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let index_1 = require("../62/index");
let { View, applyStyle, dispatch } = magix_1;
applyStyle("rd-ms",".rd-rw{border:1px solid #e6e6e6;border-radius:2px;margin:4px 0}.rd-rw:hover{border-color:#ccc}.rd-rx{line-height:92px}.rd-ry{border:1px solid #e6e6e6;border-radius:2px;margin:4px;width:100px}.rd-ry:hover{border-color:#47b34e}.rd-rz{background-position:50%;background-repeat:no-repeat;background-size:contain}.rd-rA{height:25px;margin:0 5px;width:100px}.rd-rB{opacity:.2;right:3px;top:2px}.rd-rB:hover{opacity:.5}.rd-rC{background:#f5f5f5;cursor:not-allowed}.rd-rC .rd-rB,.rd-rC .rd-rB:hover{opacity:.1}.rd-rC:hover{border-color:#e6e6e6}.rd-rD{border-bottom:1px solid #47b34e;margin-bottom:10px}.rd-rE{border:1px solid transparent;border-bottom:none;height:25px;line-height:25px;margin:0 5px -1px;min-width:50px;padding:0 4px}.rd-rF{background:#fff;border-color:#47b34e;border-radius:2px 2px 0 0;color:#47b34e}.rd-rG{margin:100px}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	src,
	i18n,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];
if(src){
$vnode_3=[$quick_mM_static_text||($quick_mM_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-l3 rd-mJ rd-rB','mx5-click': ((!disabled))&&($viewId+'1_tf()'),'title': (i18n('sC')),},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-mB rd-mC rd-rz','style': 'background-image:url(\''+(src)+'\')',},$vnode_2));
}else{
$vnode_2=[$createVNode(0,(i18n('sD')))];$vnode_1.push($createVNode('div',$quick_n7_0_static_attr,$vnode_2));
};$$_class='rd-rw rd-mA rd-nk rd-of rd-mK rd-na';if(disabled){;$$_class+=' rd-rC';};$vnode_0=[$createVNode('div',{'mx5-click': ((!disabled))&&($viewId+'_te()'),'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_te<click>'() {
        //debugger;
        let me = this;
        me.mxDialog("5j/73/list", {
            width: 1042,
            done(pic) {
                //me.digest(pic);
                me['_td'](pic);
            }
        });
    },
    '_td'(pic) {
        dispatch(this.root, 'change', pic);
    },
    '_tf<click>'(e) {
        this['_qe'](e);
        //debugger;
        // this.digest({
        //     src: ''
        // });
        this['_td']({
            src: '',
            width: 0,
            height: 0
        });
    }
}).merge(index_1);

});