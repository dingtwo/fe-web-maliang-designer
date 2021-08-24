/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6h/style",["51","../../5c/index","../../50/53","../../50/54","../6k/index","../6j/index","../6l/index"],(require,exports,module)=>{
require("../6k/index");
require("../6j/index");
require("../6l/index");
let $quick_hQ_2_static_node;
let $quick_hQ_0_static_attr={'class': 'rd-g9 rd-ha rd-hg',};
let $quick_hQ_1_static_attr={'class': 'rd-gR rd-hM',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../../5c/index");
let const_1 = require("../../50/53");
let transform_1 = require("../../50/54");
let { View, dispatch } = magix_1;
let BorderTypeList = const_1['gQ'];
let Borders = ['Top', 'Right', 'Bottom', 'Left'];
let BorderRadius = ['LeftTop', 'RightTop', 'LeftBottom', 'RightBottom'];
let BordersText = [index_1('lN'),
    index_1('lO'),
    index_1('lP'),
    index_1('lQ')];
let BorderRadiusText = [index_1('lR'),
    index_1('lS'),
    index_1('lT'),
    index_1('lU')];
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

for(let $q_c_zgrviebfjn=borders.length,$q_lc_wszaozqrt=$q_c_zgrviebfjn-1,i=0;i<$q_c_zgrviebfjn;i+=1){
let b=borders[i];let last=i===$q_lc_wszaozqrt;
$vnode_2=[$createVNode(0,(bt[i])+(i18n('lV')))];$vnode_1=[$createVNode('span',$quick_hQ_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,borderTypes','class': 'rd-g9 rd-hj','mx5-change': $viewId+'_lo({key:\''+($encodeQuote(b))+'\'})','mx5-view': '58/6k/index?disabled='+$keyOf($refData,disabled,'eD')+'&list='+$keyOf($refData,borderTypes,'eE')+'&textKey=text&valueKey=value&selected='+($encodeUrl(cell['border'+b+'Style'])),})];$vnode_0.push($createVNode('div',$quick_hQ_0_static_attr,$vnode_1));
if($quick_hQ_2_static_node){
$vnode_1=[$quick_hQ_2_static_node];
}else{
$vnode_1=[$quick_hQ_2_static_node=$createVNode('span',{'_': 'eD','class': 'rd-gR rd-hM',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'max,step,fixed,cell,borders','class': 'rd-gH rd-gW rd-gg rd-hk','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_lm({key:\''+($encodeQuote(b))+'\'})','mx5-view': '58/6j/index?min=0&max='+$keyOf($refData,max,'eF')+'&step='+$keyOf($refData,step,'eG')+'&fixed='+$keyOf($refData,fixed,'eH')+'&value='+$keyOf($refData,read(cell['border'+b+'Width']),'eI.'+(i)+'.eJ'),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell,borders','mx5-input': $viewId+'_lp({key:\''+($encodeQuote(b))+'\'})','mx5-view': '58/6l/index?disabled='+$keyOf($refData,disabled,'eD')+'&align=right&alpha=true&color='+$keyOf($refData,cell['border'+b+'Color'],'eK.'+(i)+'.eL'),}));$vnode_0.push($createVNode('div',$quick_hQ_0_static_attr,$vnode_1));
}
for(let $q_c_oeryzoii=brs.length,$q_lc_xodmyogi=$q_c_oeryzoii-1,i=0;i<$q_c_oeryzoii;i+=1){
let b=brs[i];let last=i===$q_lc_xodmyogi;
$vnode_2=[$createVNode(0,(brt[i])+(i18n('lf')))];$vnode_1=[$createVNode('span',$quick_hQ_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,cell,brs','class': 'rd-gW rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_ln({key:\''+($encodeQuote(b))+'\'})','mx5-view': '58/6j/index?min=0&step='+$keyOf($refData,step,'eG')+'&fixed='+$keyOf($refData,fixed,'eH')+'&value='+$keyOf($refData,read(cell['border'+b+'Radius']),'eM.'+(i)+'.eN'),})];;$$_class='rd-g9 rd-ha';if(!last){;$$_class+=' rd-hg';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            step: const_1["gT"],
            fixed: const_1["gU"],
            max: () => const_1["ge"](10),
            read: transform_1["gg"],
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
    '_lm<input>'(e) {
        this['_kt'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Width`] = transform_1["gl"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_ln<input>'(e) {
        this['_kt'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Radius`] = const_1['gf'](transform_1["gl"](e.value));
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_lo<change>'(e) {
        this['_kt'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Style`] = e.value;
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_lp<input>'(e) {
        this['_kt'](e);
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