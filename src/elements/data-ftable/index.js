/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/data-ftable/index",["51","../../50/53","../../5g/format"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let format_1 = require("../../5g/format");
let format = format_1["_j1"].bind(format_1);
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
for(let $q_c_mymmtdpf=rows.length,ri=0;ri<$q_c_mymmtdpf;ri+=1){
let row=rows[ri];

if((!row.label && !findLabelRow && bind._showHead) ||
                (row.label && !props.hideLabel) ||
                row.data || 
                (row.total && !props.hideTotal) ||
                (findTotalRow && bind._showFoot)){
$vnode_4=[];
for(let $q_a_fguicica=row.cols,$q_c_dpqpobvfi=$q_a_fguicica.length,ci=0;ci<$q_c_dpqpobvfi;ci+=1){
let col=$q_a_fguicica[ci];
$vnode_5=[];
if(bind._tip){
$vnode_5.push($createVNode(0,(bind._tip)));
}else{

if(col.elements&&col.elements.length){

for(let $q_a_yxjekdd=col.elements,$q_c_weofyng=$q_a_yxjekdd.length,$q_key_ihbexkiam=0;$q_key_ihbexkiam<$q_c_weofyng;$q_key_ihbexkiam+=1){
let e=$q_a_yxjekdd[$q_key_ihbexkiam];
$vnode_5.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props','mx5-view': '5m/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_ihbexkiam)+'.eG')+'&unit='+($encodeUrl(unit)),}));
}
}
}$vnode_4.push($createVNode('td',{'class': 'rd-h0 rd-hB rd-hz','colspan': ((col.colspan!=1))&&((col.colspan)),'rowspan': ((col.rowspan!=1))&&((col.rowspan)),'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#0000')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#0000')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#0000')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#0000'),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
if(row.total){
findTotalRow=1;
}else if(row.label){
findLabelRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-gN rd-hA','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            format,
            toPx: const_1['gY'],
            toUnit: const_1['ge'],
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