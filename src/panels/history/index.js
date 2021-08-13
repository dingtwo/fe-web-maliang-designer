/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/5o/index",["5c","../../5b/5o","../../5b/65"],(require,exports,module)=>{
let $quick_l2_static_text;
let $quick_ol_0_static_attr={'class': 'rd-rZ',};
let $quick_ol_1_static_attr={'class': 'rd-l3 rd-nU rd-r3',};
let $quick_ol_2_static_attr={'class': 'rd-mU',};

let magix_1 = require("5c");
let history_1 = require("../../5b/5o");
let stage_generic_1 = require("../../5b/65");
let { State, View, applyStyle, mark, node } = magix_1;
applyStyle("rd-mA",".rd-rZ{padding:5px 4px}.rd-r0{border-radius:2px;color:#333;height:22px;line-height:22px;margin:1px 0}.rd-r0:hover{background:#f0f0f0}.rd-r1{opacity:.6}.rd-r2,.rd-r2:hover{background:#b2e1b5}.rd-r3{margin:0 4px 0 2px;width:12px}.rd-r4{visibility:hidden}.rd-r0:hover .rd-r4{visibility:visible}.rd-r5{margin:0 4px 0 2px}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	list,
	i18n,
	index,
	bottom,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];let title;;
for(let i=list.length;i--;){
let h=list[i];
title=i18n(h['m_'],h['ma']);$vnode_3=[$createVNode(0,(h['l9']),1)];$vnode_2=[$createVNode('i',{'class': 'rd-l3 rd-nU rd-r3','mx5-click': ((i!=index))&&($viewId+'_t0({at:'+(i)+'})'),},$vnode_3)];$vnode_3=[$createVNode(0,(title))];$vnode_2.push($createVNode('div',{'class': 'rd-mU rd-mW','mx5-click': ((i!=index))&&($viewId+'_t0({at:'+(i)+'})'),},$vnode_3));$vnode_3=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];$vnode_2.push($createVNode('i',{'class': 'rd-l3 rd-nK rd-nT rd-r4 rd-r5','title': (i18n('ue')),'mx5-click': $viewId+'_t1({at:'+(i)+'})',},$vnode_3));;$$_class='rd-r0 rd-mX rd-nk rd-mZ';if(i==index){;$$_class+=' rd-r2';};if(i>index){;$$_class+=' rd-r1';};$vnode_1.push($createVNode('div',{'id': 'h_'+$viewId+'_'+(i),'title': (i18n('tu',title)),'class': $$_class,},$vnode_2));
}title=i18n(bottom['m_'],bottom['ma']);$vnode_3=[$createVNode(0,(bottom['l9']),1)];$vnode_2=[$createVNode('i',$quick_ol_1_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(title))];$vnode_2.push($createVNode('div',$quick_ol_2_static_attr,$vnode_3));;$$_class='rd-r0 rd-mX rd-nk rd-mZ';if(index==-1){;$$_class+=' rd-r2';};$vnode_1.push($createVNode('div',{'id': 'h_'+$viewId+'_-1','mx5-click': ((-1!=index))&&($viewId+'_t0({at:-1})'),'title': (i18n('tu',title)),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_ol_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_mb'](this.render, 30);
        State.on('l7', update);
        State.on('mk', update);
        this.on('destroy', () => {
            State.off('l7', update);
            State.off('mk', update);
        });
    },
    async render() {
        let renderMark = mark(this, '_tZ');
        let { '_nt': list, '_nu': index, '_nv': bottom } = history_1['mG']();
        if (bottom) {
            await this.digest({
                list,
                index,
                bottom
            });
            if (renderMark()) {
                stage_generic_1['mf'](`h_${this.id}_${index}`, this.root);
            }
        }
    },
    '_t0<click>'(e) {
        if (!e['_mW']) {
            let { at } = e.params;
            history_1['mH'](at);
        }
    },
    '_t1<click>'(e) {
        e['_mW'] = 1;
        let { at } = e.params;
        history_1['mL'](at);
    }
});

});