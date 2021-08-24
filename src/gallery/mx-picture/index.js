/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6o/index",["51","../5n/index"],(require,exports,module)=>{
let $quick_gY_static_text;
let $quick_ii_0_static_attr={'class': 'rd-gS rd-hX rd-lJ',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../5n/index");
let { View, applyStyle, dispatch } = magix_1;
applyStyle("rd-gE",".rd-lI{border:1px solid #e6e6e6;border-radius:2px;margin:4px 0}.rd-lI:hover{border-color:#ccc}.rd-lJ{line-height:92px}.rd-lK{border:1px solid #e6e6e6;border-radius:2px;margin:4px;width:100px}.rd-lK:hover{border-color:#47b34e}.rd-lL{background-position:50%;background-repeat:no-repeat;background-size:contain}.rd-lM{height:25px;margin:0 5px;width:100px}.rd-lN{opacity:.2;right:3px;top:2px}.rd-lN:hover{opacity:.5}.rd-lO{background:#f5f5f5;cursor:not-allowed}.rd-lO .rd-lN,.rd-lO .rd-lN:hover{opacity:.1}.rd-lO:hover{border-color:#e6e6e6}.rd-lP{border-bottom:1px solid #47b34e;margin-bottom:10px}.rd-lQ{border:1px solid transparent;border-bottom:none;height:25px;line-height:25px;margin:0 5px -1px;min-width:50px;padding:0 4px}.rd-lR{background:#fff;border-color:#47b34e;border-radius:2px 2px 0 0;color:#47b34e}.rd-lS{margin:100px}");
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
$vnode_3=[$quick_gY_static_text||($quick_gY_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-gV rd-ge rd-lN','mx5-click': ((!disabled))&&($viewId+'1_nu()'),'title': (i18n('mN')),},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-gN rd-gO rd-lL','style': 'background-image:url(\''+(src)+'\')',},$vnode_2));
}else{
$vnode_2=[$createVNode(0,(i18n('mO')))];$vnode_1.push($createVNode('div',$quick_ii_0_static_attr,$vnode_2));
};$$_class='rd-lI rd-gM rd-hw rd-ir rd-gW rd-hm';if(disabled){;$$_class+=' rd-lO';};$vnode_0=[$createVNode('div',{'mx5-click': ((!disabled))&&($viewId+'_nt()'),'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_nt<click>'() {
        //debugger;
        let me = this;
        me.mxDialog("58/6o/list", {
            width: 1042,
            done(pic) {
                //me.digest(pic);
                me['_ns'](pic);
            }
        });
    },
    '_ns'(pic) {
        dispatch(this.root, 'change', pic);
    },
    '_nu<click>'(e) {
        this['_kt'](e);
        //debugger;
        // this.digest({
        //     src: ''
        // });
        this['_ns']({
            src: '',
            width: 0,
            height: 0
        });
    }
}).merge(index_1);

});