/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/4q/index",["4e","../../4d/4q","../../4d/57"],(require,exports,module)=>{
let $quick_dE_static_text;
let $quick_fY_0_static_attr={'class': 'rd-jB',};
let $quick_fY_1_static_attr={'class': 'rd-dF rd-fw rd-jF',};
let $quick_fY_2_static_attr={'class': 'rd-ew',};

let magix_1 = require("4e");
let history_1 = require("../../4d/4q");
let stage_generic_1 = require("../../4d/57");
let { State, View, applyStyle, mark, node } = magix_1;
applyStyle("rd-ec",".rd-jB{padding:5px 4px}.rd-jC{border-radius:2px;color:#333;height:22px;line-height:22px;margin:1px 0}.rd-jC:hover{background:#f0f0f0}.rd-jD{opacity:.6}.rd-jE,.rd-jE:hover{background:#fed6c0}.rd-jF{margin:0 4px 0 2px;width:12px}.rd-jG{visibility:hidden}.rd-jC:hover .rd-jG{visibility:visible}.rd-jH{margin:0 4px 0 2px}");
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
title=i18n(h['dM'],h['dN']);$vnode_3=[$createVNode(0,(h['dL']),1)];$vnode_2=[$createVNode('i',{'class': 'rd-dF rd-fw rd-jF','mx5-click': ((i!=index))&&($viewId+'_lC({at:'+(i)+'})'),},$vnode_3)];$vnode_3=[$createVNode(0,(title))];$vnode_2.push($createVNode('div',{'class': 'rd-ew rd-ey','mx5-click': ((i!=index))&&($viewId+'_lC({at:'+(i)+'})'),},$vnode_3));$vnode_3=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];$vnode_2.push($createVNode('i',{'class': 'rd-dF rd-fm rd-fv rd-jG rd-jH','title': (i18n('lR')),'mx5-click': $viewId+'_lD({at:'+(i)+'})',},$vnode_3));;$$_class='rd-jC rd-ez rd-eX rd-eB';if(i==index){;$$_class+=' rd-jE';};if(i>index){;$$_class+=' rd-jD';};$vnode_1.push($createVNode('div',{'id': 'h_'+$viewId+'_'+(i),'title': (i18n('k7',title)),'class': $$_class,},$vnode_2));
}title=i18n(bottom['dM'],bottom['dN']);$vnode_3=[$createVNode(0,(bottom['dL']),1)];$vnode_2=[$createVNode('i',$quick_fY_1_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(title))];$vnode_2.push($createVNode('div',$quick_fY_2_static_attr,$vnode_3));;$$_class='rd-jC rd-ez rd-eX rd-eB';if(index==-1){;$$_class+=' rd-jE';};$vnode_1.push($createVNode('div',{'id': 'h_'+$viewId+'_-1','mx5-click': ((-1!=index))&&($viewId+'_lC({at:-1})'),'title': (i18n('k7',title)),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_fY_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_dO'](this.render, 30);
        State.on('dJ', update);
        State.on('dX', update);
        this.on('destroy', () => {
            State.off('dJ', update);
            State.off('dX', update);
        });
    },
    async render() {
        let renderMark = mark(this, '_lB');
        let { '_e6': list, '_e7': index, '_e8': bottom } = history_1['ei']();
        if (bottom) {
            await this.digest({
                list,
                index,
                bottom
            });
            if (renderMark()) {
                stage_generic_1['dS'](`h_${this.id}_${index}`, this.root);
            }
        }
    },
    '_lC<click>'(e) {
        if (!e['_ey']) {
            let { at } = e.params;
            history_1['ej'](at);
        }
    },
    '_lD<click>'(e) {
        e['_ey'] = 1;
        let { at } = e.params;
        history_1['en'](at);
    }
});

});