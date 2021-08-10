/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/5u/style",["4e","../../4p/index","../../4d/4g","../../4d/4h","../61/index","../60/index","../62/index"],(require,exports,module)=>{
require("../61/index");
require("../60/index");
require("../62/index");
let $quick_fg_2_static_node;
let $quick_fg_0_static_attr={'class': 'rd-eB rd-eH rd-ez',};
let $quick_fg_1_static_attr={'class': 'rd-eh rd-fc',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let index_1 = require("../../4p/index");
let const_1 = require("../../4d/4g");
let transform_1 = require("../../4d/4h");
let { View, dispatch } = magix_1;
let BorderTypeList = const_1['eg'];
let Borders = ['Top', 'Right', 'Bottom', 'Left'];
let BorderRadius = ['LeftTop', 'RightTop', 'LeftBottom', 'RightBottom'];
let BordersText = [index_1('je'),
    index_1('jf'),
    index_1('jg'),
    index_1('jh')];
let BorderRadiusText = [index_1('ji'),
    index_1('jj'),
    index_1('jk'),
    index_1('jl')];
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

for(let $q_c_cvwqhuxr=borders.length,$q_lc_jxarwji=$q_c_cvwqhuxr-1,i=0;i<$q_c_cvwqhuxr;i+=1){
let b=borders[i];let last=i===$q_lc_jxarwji;
$vnode_2=[$createVNode(0,(bt[i])+(i18n('jm')))];$vnode_1=[$createVNode('span',$quick_fg_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,borderTypes','class': 'rd-eK rd-ez','mx5-change': $viewId+'_iM({key:\''+($encodeQuote(b))+'\'})','mx5-view': '4l/61/index?disabled='+$keyOf($refData,disabled,'cH')+'&list='+$keyOf($refData,borderTypes,'cI')+'&textKey=text&valueKey=value&selected='+($encodeUrl(cell['border'+b+'Style'])),})];$vnode_0.push($createVNode('div',$quick_fg_0_static_attr,$vnode_1));
if($quick_fg_2_static_node){
$vnode_1=[$quick_fg_2_static_node];
}else{
$vnode_1=[$quick_fg_2_static_node=$createVNode('span',{'_': 'cH','class': 'rd-eh rd-fc',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'max,step,fixed,cell,borders','class': 'rd-d8 rd-dH rd-eL rd-em','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_iK({key:\''+($encodeQuote(b))+'\'})','mx5-view': '4l/60/index?min=0&max='+$keyOf($refData,max,'cJ')+'&step='+$keyOf($refData,step,'cK')+'&fixed='+$keyOf($refData,fixed,'cL')+'&value='+$keyOf($refData,read(cell['border'+b+'Width']),'cM.'+(i)+'.cN'),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell,borders','mx5-input': $viewId+'_iN({key:\''+($encodeQuote(b))+'\'})','mx5-view': '4l/62/index?disabled='+$keyOf($refData,disabled,'cH')+'&align=right&alpha=true&color='+$keyOf($refData,cell['border'+b+'Color'],'cO.'+(i)+'.cP'),}));$vnode_0.push($createVNode('div',$quick_fg_0_static_attr,$vnode_1));
}
for(let $q_c_kvalnh=brs.length,$q_lc_dxhshhpu=$q_c_kvalnh-1,i=0;i<$q_c_kvalnh;i+=1){
let b=brs[i];let last=i===$q_lc_dxhshhpu;
$vnode_2=[$createVNode(0,(brt[i])+(i18n('iH')))];$vnode_1=[$createVNode('span',$quick_fg_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,cell,brs','class': 'rd-dH rd-eK rd-em','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_iL({key:\''+($encodeQuote(b))+'\'})','mx5-view': '4l/60/index?min=0&step='+$keyOf($refData,step,'cK')+'&fixed='+$keyOf($refData,fixed,'cL')+'&value='+$keyOf($refData,read(cell['border'+b+'Radius']),'cQ.'+(i)+'.cR'),})];;$$_class='rd-ez rd-eB';if(!last){;$$_class+=' rd-eH';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            step: const_1["ej"],
            fixed: const_1["ek"],
            max: () => const_1["dF"](10),
            read: transform_1["dH"],
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
    '_iK<input>'(e) {
        this['_hR'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Width`] = transform_1["dM"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_iL<input>'(e) {
        this['_hR'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Radius`] = const_1['dG'](transform_1["dM"](e.value));
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_iM<change>'(e) {
        this['_hR'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Style`] = e.value;
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_iN<input>'(e) {
        this['_hR'](e);
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