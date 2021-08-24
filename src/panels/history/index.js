/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/5d/index",["51","../../50/5d","../../50/5q"],(require,exports,module)=>{
let $quick_gd_static_text;
let $quick_ix_0_static_attr={'class': 'rd-ma',};
let $quick_ix_1_static_attr={'class': 'rd-ge rd-h6 rd-me',};
let $quick_ix_2_static_attr={'class': 'rd-g6',};

let magix_1 = require("51");
let history_1 = require("../../50/5d");
let stage_generic_1 = require("../../50/5q");
let { State, View, applyStyle, mark, node } = magix_1;
applyStyle("rd-gM",".rd-ma{padding:5px 4px}.rd-mb{border-radius:2px;color:#333;height:22px;line-height:22px;margin:1px 0}.rd-mb:hover{background:#f0f0f0}.rd-mc{opacity:.6}.rd-md,.rd-md:hover{background:#b2e1b5}.rd-me{margin:0 4px 0 2px;width:12px}.rd-mf{visibility:hidden}.rd-mb:hover .rd-mf{visibility:visible}.rd-mg{margin:0 4px 0 2px}");
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
title=i18n(h['gl'],h['gm']);$vnode_3=[$createVNode(0,(h['gk']),1)];$vnode_2=[$createVNode('i',{'class': 'rd-ge rd-h6 rd-me','mx5-click': ((i!=index))&&($viewId+'_oe({at:'+(i)+'})'),},$vnode_3)];$vnode_3=[$createVNode(0,(title))];$vnode_2.push($createVNode('div',{'class': 'rd-g6 rd-g8','mx5-click': ((i!=index))&&($viewId+'_oe({at:'+(i)+'})'),},$vnode_3));$vnode_3=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];$vnode_2.push($createVNode('i',{'class': 'rd-ge rd-h5 rd-hW rd-mf rd-mg','title': (i18n('oq')),'mx5-click': $viewId+'_of({at:'+(i)+'})',},$vnode_3));;$$_class='rd-mb rd-g9 rd-hw rd-ha';if(i==index){;$$_class+=' rd-md';};if(i>index){;$$_class+=' rd-mc';};$vnode_1.push($createVNode('div',{'id': 'h_'+$viewId+'_'+(i),'title': (i18n('nF',title)),'class': $$_class,},$vnode_2));
}title=i18n(bottom['gl'],bottom['gm']);$vnode_3=[$createVNode(0,(bottom['gk']),1)];$vnode_2=[$createVNode('i',$quick_ix_1_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(title))];$vnode_2.push($createVNode('div',$quick_ix_2_static_attr,$vnode_3));;$$_class='rd-mb rd-g9 rd-hw rd-ha';if(index==-1){;$$_class+=' rd-md';};$vnode_1.push($createVNode('div',{'id': 'h_'+$viewId+'_-1','mx5-click': ((-1!=index))&&($viewId+'_oe({at:-1})'),'title': (i18n('nF',title)),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_ix_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_gn'](this.render, 30);
        State.on('gi', update);
        State.on('gw', update);
        this.on('destroy', () => {
            State.off('gi', update);
            State.off('gw', update);
        });
    },
    async render() {
        let renderMark = mark(this, '_od');
        let { '_hF': list, '_hG': index, '_hH': bottom } = history_1['gS']();
        if (bottom) {
            await this.digest({
                list,
                index,
                bottom
            });
            if (renderMark()) {
                stage_generic_1['gr'](`h_${this.id}_${index}`, this.root);
            }
        }
    },
    '_oe<click>'(e) {
        if (!e['_g8']) {
            let { at } = e.params;
            history_1['gT'](at);
        }
    },
    '_of<click>'(e) {
        e['_g8'] = 1;
        let { at } = e.params;
        history_1['gX'](at);
    }
});

});