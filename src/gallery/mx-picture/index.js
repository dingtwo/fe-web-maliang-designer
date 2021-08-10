/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/65/index",["4e","../54/index"],(require,exports,module)=>{
let $quick_eo_static_text;
let $quick_fJ_0_static_attr={'class': 'rd-ei rd-fn rd-j_',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let index_1 = require("../54/index");
let { View, applyStyle, dispatch } = magix_1;
applyStyle("rd-d5",".rd-i9{border:1px solid #e6e6e6;border-radius:2px;margin:4px 0}.rd-i9:hover{border-color:#ccc}.rd-j_{line-height:92px}.rd-ja{border:1px solid #e6e6e6;border-radius:2px;margin:4px;width:100px}.rd-ja:hover{border-color:#fa742b}.rd-jb{background-position:50%;background-repeat:no-repeat;background-size:contain}.rd-jc{height:25px;margin:0 5px;width:100px}.rd-jd{opacity:.2;right:3px;top:2px}.rd-jd:hover{opacity:.5}.rd-je{background:#f5f5f5;cursor:not-allowed}.rd-je .rd-jd,.rd-je .rd-jd:hover{opacity:.1}.rd-je:hover{border-color:#e6e6e6}.rd-jf{border-bottom:1px solid #fa742b;margin-bottom:10px}.rd-jg{border:1px solid transparent;border-bottom:none;height:25px;line-height:25px;margin:0 5px -1px;min-width:50px;padding:0 4px}.rd-jh{background:#fff;border-color:#fa742b;border-radius:2px 2px 0 0;color:#fa742b}.rd-ji{margin:100px}");
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
$vnode_3=[$quick_eo_static_text||($quick_eo_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-dF rd-el rd-jd','mx5-click': ((!disabled))&&($viewId+'1_kS()'),'title': (i18n('ke')),},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-ed rd-ee rd-jb','style': 'background-image:url(\''+(src)+'\')',},$vnode_2));
}else{
$vnode_2=[$createVNode(0,(i18n('kf')))];$vnode_1.push($createVNode('div',$quick_fJ_0_static_attr,$vnode_2));
};$$_class='rd-i9 rd-ec rd-eX rd-fS rd-em rd-eN';if(disabled){;$$_class+=' rd-je';};$vnode_0=[$createVNode('div',{'mx5-click': ((!disabled))&&($viewId+'_kR()'),'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_kR<click>'() {
        //debugger;
        let me = this;
        me.mxDialog("4l/65/list", {
            width: 1042,
            done(pic) {
                //me.digest(pic);
                me['_kQ'](pic);
            }
        });
    },
    '_kQ'(pic) {
        dispatch(this.root, 'change', pic);
    },
    '_kS<click>'(e) {
        this['_hR'](e);
        //debugger;
        // this.digest({
        //     src: ''
        // });
        this['_kQ']({
            src: '',
            width: 0,
            height: 0
        });
    }
}).merge(index_1);

});