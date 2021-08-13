/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/data-ftable/index",["5c","../../5b/5e","../../5r/format"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let format_1 = require("../../5r/format");
let format = format_1["_pM"].bind(format_1);
let firstToUppercase = str => {
    str += '';
    if (str.length) {
        return str[0].toUpperCase() + str.substring(1);
    }
    return str;
};
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$text,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$text='';let findLabelRow,findTotalRow;;$text+=' ';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,bind=props.bind;;$text+=' ';let bwn=(borderdeed=='collapse'?1:2)*borderwidth;;$vnode_3=[];
for(let $q_c_lgfuysn=rows.length,ri=0;ri<$q_c_lgfuysn;ri+=1){
let row=rows[ri];

if((!row.label && !findLabelRow && bind._showHead) ||
                (row.label && !props.hideLabel) ||
                row.data || 
                (row.total && !props.hideTotal) ||
                (findTotalRow && bind._showFoot)){
$vnode_4=[];
for(let $q_a_evskdh=row.cols,$q_c_fxaorhfimj=$q_a_evskdh.length,ci=0;ci<$q_c_fxaorhfimj;ci+=1){
let col=$q_a_evskdh[ci];
$vnode_5=[];
if(bind._tip){
$vnode_5.push($createVNode(0,(bind._tip)));
}else{

if(col.elements&&col.elements.length){

for(let $q_a_lznhyk=col.elements,$q_c_itmxjtz=$q_a_lznhyk.length,$q_key_thuyiibbq=0;$q_key_thuyiibbq<$q_c_itmxjtz;$q_key_thuyiibbq+=1){
let e=$q_a_lznhyk[$q_key_thuyiibbq];
$vnode_5.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props','mx5-view': '61/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_thuyiibbq)+'.i^')+'&unit='+($encodeUrl(unit)),}));
}
}
}$vnode_4.push($createVNode('td',{'class': 'rd-nO rd-nn rd-np','colspan': ((col.colspan!=1))&&((col.colspan)),'rowspan': ((col.rowspan!=1))&&((col.rowspan)),'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#0000')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#0000')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#0000')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#0000'),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
if(row.total){
findTotalRow=1;
}else if(row.label){
findLabelRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-mB rd-no','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            format,
            toPx: const_1['mM'],
            toUnit: const_1['l3'],
            ftu: firstToUppercase,
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});