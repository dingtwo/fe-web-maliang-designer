/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-ftable/index",["magix5","../../designer/const","../../provider/format"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let format_1 = require("../../provider/format");
let format = format_1["@:{format~rs}"].bind(format_1);
let firstToUppercase = str => {
    str += '';
    if (str.length) {
        return str[0].toUpperCase() + str.substring(1);
    }
    return str;
};
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$text,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$text=($__line=2,$__art='{{set findLabelRow,findTotalRow}}','');$__ctrl='<%let findLabelRow,findTotalRow;%>';let findLabelRow,findTotalRow;;$text+=' '+($__line=3,$__art='{{set {borderwidth,bordertype,bordercolor,borderdeed,rows,bind}=props}}','');$__ctrl='<%let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,bind=props.bind;%>';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,bind=props.bind;;$text+=' '+($__line=4,$__art='{{set bwn=(borderdeed==\'collapse\'?1:2)*borderwidth}}','');$__ctrl='<%let bwn=(borderdeed==\'collapse\'?1:2)*borderwidth;%>';let bwn=(borderdeed=='collapse'?1:2)*borderwidth;;$vnode_3=[];$__line=7;$__art="{{each rows as row ri}}";$__ctrl="for(let $q_c_eifilqaxp=rows.length,ri=0;ri<$q_c_eifilqaxp;ri++){let row=rows[ri];";
for(let $q_c_eifilqaxp=rows.length,ri=0;ri<$q_c_eifilqaxp;ri+=1){
let row=rows[ri];
$__line=8;$__art="{{if (!row.label && !findLabelRow && bind._showHead) ||\n                (row.label && !props.hideLabel) ||\n                row.data || \n                (row.total && !props.hideTotal) ||\n                (findTotalRow && bind._showFoot) }}";$__ctrl="if((!row.label && !findLabelRow && bind._showHead) ||\n                (row.label && !props.hideLabel) ||\n                row.data || \n                (row.total && !props.hideTotal) ||\n                (findTotalRow && bind._showFoot)){";
if((!row.label && !findLabelRow && bind._showHead) ||
                (row.label && !props.hideLabel) ||
                row.data || 
                (row.total && !props.hideTotal) ||
                (findTotalRow && bind._showFoot)){
$vnode_4=[];$__line=14;$__art="{{each row.cols as col ci}}";$__ctrl="for(let $q_a_poeuaxig=row.cols,$q_c_clrkqh=$q_a_poeuaxig.length,ci=0;ci<$q_c_clrkqh;ci++){let col=$q_a_poeuaxig[ci];";
for(let $q_a_poeuaxig=row.cols,$q_c_clrkqh=$q_a_poeuaxig.length,ci=0;ci<$q_c_clrkqh;ci+=1){
let col=$q_a_poeuaxig[ci];
$vnode_5=[];$__line=16;$__art="{{if bind._tip}}";$__ctrl="if(bind._tip){";
if(bind._tip){
$vnode_5.push($createVNode(0,($__line=17,$__art='{{=bind._tip}}',$__ctrl='<%=bind._tip%>',(bind._tip))));
}else{
$__line=19;$__art="{{if col.elements&&col.elements.length}}";$__ctrl="if(col.elements&&col.elements.length){";
if(col.elements&&col.elements.length){
$__line=20;$__art="{{each col.elements as e}}";$__ctrl="for(let $q_a_empbcxv=col.elements,$q_c_awszclk=$q_a_empbcxv.length,$q_key_slcnktdgl=0;$q_key_slcnktdgl<$q_c_awszclk;$q_key_slcnktdgl++){let e=$q_a_empbcxv[$q_key_slcnktdgl];";
for(let $q_a_empbcxv=col.elements,$q_c_awszclk=$q_a_empbcxv.length,$q_key_slcnktdgl=0;$q_key_slcnktdgl<$q_c_awszclk;$q_key_slcnktdgl+=1){
let e=$q_a_empbcxv[$q_key_slcnktdgl];
$vnode_5.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props','mx5-view': 'elements/'+($__line=21,$__art='{{=e.type}}',$__ctrl='<%=e.type%>',(e.type))+'/index?props='+($__line=21,$__art='{{#e.props}}',$__ctrl='<%#e.props,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+($q_key_slcnktdgl)+\'.e.props\'%>',$keyOf($refData,e.props,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.elements.'+($q_key_slcnktdgl)+'.e.props'))+'&unit='+($__line=21,$__art='{{=unit}}',$__ctrl='<%=$encodeUrl(unit)%>',($encodeUrl(unit))),}));
}
}
}$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','colspan': (($__line=15,$__art='{{=col.colspan!=1}}',$__ctrl='<%=col.colspan!=1%>',col.colspan!=1))&&(($__line=15,$__art='{{=col.colspan}}',$__ctrl='<%=col.colspan%>',(col.colspan))),'rowspan': (($__line=15,$__art='{{=col.rowspan!=1}}',$__ctrl='<%=col.rowspan!=1%>',col.rowspan!=1))&&(($__line=15,$__art='{{=col.rowspan}}',$__ctrl='<%=col.rowspan%>',(col.rowspan))),'style': 'position:relative;width:'+($__line=15,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=15,$__art='{{=col.height}}',$__ctrl='<%=col.height%>',(col.height))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-left:'+($__line=15,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=15,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=15,$__art='{{=borderwidth&&col.bLeft?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bLeft?bordercolor:\'#0000\'%>',(borderwidth&&col.bLeft?bordercolor:'#0000'))+';border-top:'+($__line=15,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=15,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=15,$__art='{{=borderwidth&&col.bTop?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bTop?bordercolor:\'#0000\'%>',(borderwidth&&col.bTop?bordercolor:'#0000'))+';border-right:'+($__line=15,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=15,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=15,$__art='{{=borderwidth&&col.bRight?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bRight?bordercolor:\'#0000\'%>',(borderwidth&&col.bRight?bordercolor:'#0000'))+';border-bottom:'+($__line=15,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=15,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=15,$__art='{{=borderwidth&&col.bBottom?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bBottom?bordercolor:\'#0000\'%>',(borderwidth&&col.bBottom?bordercolor:'#0000')),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$__line=29;$__art="{{if row.total}}";$__ctrl="if(row.total){";
if(row.total){
($__line=30,$__art='{{findTotalRow=1}}','');$__ctrl='<%findTotalRow=1%>';findTotalRow=1;
}else if(($__line=31,$__art="{{else if row.label}}",$__ctrl="else if(row.label){"),row.label){
($__line=32,$__art='{{findLabelRow=1}}','');$__ctrl='<%findLabelRow=1%>';findLabelRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-_assets_index_less_-table rd-_assets_index_less_-wp100','style': 'border-collapse:'+($__line=5,$__art='{{=borderdeed}}',$__ctrl='<%=borderdeed%>',(borderdeed)),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/data-ftable/index.html'; throw msg; }  } ,
    init() {
        this.set({
            format,
            toPx: const_1['@:{const#to.px~rs}'],
            toUnit: const_1['@:{const#to.unit~rs}'],
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