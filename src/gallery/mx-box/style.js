/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6s/style",["5c","../../5n/index","../../5b/5e","../../5b/5f","../6v/index","../6u/index","../70/index"],(require,exports,module)=>{
require("../6v/index");
require("../6u/index");
require("../70/index");
let $quick_nE_2_static_node;
let $quick_nE_0_static_attr={'class': 'rd-m5 rd-mX rd-mZ',};
let $quick_nE_1_static_attr={'class': 'rd-mF rd-nA',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let index_1 = require("../../5n/index");
let const_1 = require("../../5b/5e");
let transform_1 = require("../../5b/5f");
let { View, dispatch } = magix_1;
let BorderTypeList = const_1['mE'];
let Borders = ['Top', 'Right', 'Bottom', 'Left'];
let BorderRadius = ['LeftTop', 'RightTop', 'LeftBottom', 'RightBottom'];
let BordersText = [index_1('rC'),
    index_1('rD'),
    index_1('rE'),
    index_1('rF')];
let BorderRadiusText = [index_1('rG'),
    index_1('rH'),
    index_1('rI'),
    index_1('rJ')];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	borders,
	bt,
	i18n,
	disabled,
	borderTypes,
	cell,
	max,
	step,
	fixed,
	read,
	brs,
	brt,}=$dataFromView,
$vnode_2,
$vnode_1,
$$_class;

for(let $q_c_grlrunidj=borders.length,$q_lc_tdhaoenrlbf=$q_c_grlrunidj-1,i=0;i<$q_c_grlrunidj;i+=1){
let b=borders[i];let last=i===$q_lc_tdhaoenrlbf;
$vnode_2=[$createVNode(0,(bt[i])+(i18n('rK')))];$vnode_1=[$createVNode('span',$quick_nE_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,borderTypes','class': 'rd-m8 rd-mX','mx5-change': $viewId+'_r_({key:\''+($encodeQuote(b))+'\'})','mx5-view': '5j/6v/index?disabled='+$keyOf($refData,disabled,'i!')+'&list='+$keyOf($refData,borderTypes,'i@')+'&textKey=text&valueKey=value&selected='+($encodeUrl(cell['border'+b+'Style'])),})];$vnode_0.push($createVNode('div',$quick_nE_0_static_attr,$vnode_1));
if($quick_nE_2_static_node){
$vnode_1=[$quick_nE_2_static_node];
}else{
$vnode_1=[$quick_nE_2_static_node=$createVNode('span',{'_': 'i!','class': 'rd-mF rd-nA',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'max,step,fixed,cell,borders','class': 'rd-l5 rd-m9 rd-mK rd-mv','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_q8({key:\''+($encodeQuote(b))+'\'})','mx5-view': '5j/6u/index?min=0&max='+$keyOf($refData,max,'i$')+'&step='+$keyOf($refData,step,'i^')+'&fixed='+$keyOf($refData,fixed,'i*')+'&value='+$keyOf($refData,read(cell['border'+b+'Width']),'i{.'+(i)+'.i}'),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell,borders','mx5-input': $viewId+'_ra({key:\''+($encodeQuote(b))+'\'})','mx5-view': '5j/70/index?disabled='+$keyOf($refData,disabled,'i!')+'&align=right&alpha=true&color='+$keyOf($refData,cell['border'+b+'Color'],'i[.'+(i)+'.i]'),}));$vnode_0.push($createVNode('div',$quick_nE_0_static_attr,$vnode_1));
}
for(let $q_c_rhwij=brs.length,$q_lc_qimydaqvea=$q_c_rhwij-1,i=0;i<$q_c_rhwij;i+=1){
let b=brs[i];let last=i===$q_lc_qimydaqvea;
$vnode_2=[$createVNode(0,(brt[i])+(i18n('q5')))];$vnode_1=[$createVNode('span',$quick_nE_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,cell,brs','class': 'rd-l5 rd-m8 rd-mK','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_q9({key:\''+($encodeQuote(b))+'\'})','mx5-view': '5j/6u/index?min=0&step='+$keyOf($refData,step,'i^')+'&fixed='+$keyOf($refData,fixed,'i*')+'&value='+$keyOf($refData,read(cell['border'+b+'Radius']),'i|.'+(i)+'.i,'),})];;$$_class='rd-mX rd-mZ';if(!last){;$$_class+=' rd-m5';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            step: const_1["mH"],
            fixed: const_1["mI"],
            max: () => const_1["l3"](10),
            read: transform_1["l5"],
            bt: BordersText,
            brt: BorderRadiusText,
            brs: BorderRadius,
            borders: Borders,
            borderTypes: BorderTypeList
        });
    },
    assign(data) {
        let { props, disabled } = data;
        let { rows, focusRow, focusCol } = props;
        if (focusRow == -1) {
            focusRow = 0;
        }
        if (focusCol == -1) {
            focusCol = 0;
        }
        let cell = rows[focusRow].cols[focusCol];
        this.set({
            disabled,
            cell,
            rows,
            focusRow,
            focusCol
        });
    },
    render() {
        this.digest();
    },
    '_q8<input>'(e) {
        this['_qe'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Width`] = transform_1["m_"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_q9<input>'(e) {
        this['_qe'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Radius`] = const_1['l4'](transform_1["m_"](e.value));
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_r_<change>'(e) {
        this['_qe'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Style`] = e.value;
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_ra<input>'(e) {
        this['_qe'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Color`] = e.color;
        dispatch(this.root, 'change', {
            rows
        });
    }
});

});