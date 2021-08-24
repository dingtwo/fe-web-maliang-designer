/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/data-coltable/index",["51"],(require,exports,module)=>{
let $quick_gx_static_text;
let $quick_gy_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$$_style,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];
if(props.bind&&
            props.bind.fields&&
            props.bind.fields.length){
$vnode_4=[];
for(let $q_a_oajhoip=props.bind.fields,$q_c_yypnvs=$q_a_oajhoip.length,$q_key_qtnnpvro=0;$q_key_qtnnpvro<$q_c_yypnvs;$q_key_qtnnpvro+=1){
let field=$q_a_oajhoip[$q_key_qtnnpvro];
$vnode_6=[$createVNode(0,(field.name))];$vnode_5=[$createVNode('div',{'class': 'rd-hD','style': 'height:'+(props.theadRowHeight)+(unit)+';line-height:'+(props.theadRowHeight)+(unit)+';font-size:'+(props.theadFontsize)+(unit)+';color:'+(props.theadForecolor),},$vnode_6)];;$$_style='width:'+(props.columns[field.id])+(unit)+';border-color:'+(props.bordercolor)+';text-align:'+(props.cellAlign)+';';if(props.theadRowBackground){;$$_style+='background:'+(props.theadRowBackground);};$vnode_4.push($createVNode('th',{'class': 'rd-hB rd-hz','style': $$_style,},$vnode_5));
}$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2.push($createVNode('thead',0,$vnode_3));$vnode_3=[];
if(props.bind){

if(props.bind._tip){
$vnode_6=[$createVNode(0,(props.bind._tip))];$vnode_5=[$createVNode('div',{'class': 'rd-hD','style': 'height:'+(props.loadingHeight)+(unit)+';line-height:'+(props.loadingHeight)+(unit)+';font-size:'+(props.theadFontsize)+(unit),},$vnode_6)];$vnode_4=[$createVNode('td',{'class': 'rd-gS rd-h6 rd-hB rd-hX rd-hz','colspan': (props.bind.fields.length),'style': 'border-color:'+(props.bordercolor),},$vnode_5)];$vnode_3.push($createVNode('tr',0,$vnode_4));
}else{

for(let $q_a_brcahjk=props.bind._data,$q_c_zjrgiytxq=$q_a_brcahjk.length,i=0;i<$q_c_zjrgiytxq;i+=1){
let item=$q_a_brcahjk[i];
$vnode_4=[];
for(let $q_a_kutgqmeflk=props.bind.fields,$q_c_vfyjdsmg=$q_a_kutgqmeflk.length,$q_key_pifzckvbzjd=0;$q_key_pifzckvbzjd<$q_c_vfyjdsmg;$q_key_pifzckvbzjd+=1){
let field=$q_a_kutgqmeflk[$q_key_pifzckvbzjd];
$vnode_6=[$createVNode(0,(item[field.id]))];$vnode_5=[$createVNode('div',{'class': 'rd-hD','style': 'height:'+(props.tbodyRowHeight)+(unit)+';line-height:'+(props.tbodyRowHeight)+(unit)+';font-size:'+(props.tbodyFontsize)+(unit)+';color:'+(props.tbodyForecolor),},$vnode_6)];;$$_style='text-align:'+(props.cellAlign)+';border-color:'+(props.bordercolor)+';';if(i%2&&props.tbodyOddRowBackground){;$$_style+='background:'+(props.tbodyOddRowBackground);}else if((i%2)==0&&props.tbodyEvenRowBackground){;$$_style+='background:'+(props.tbodyEvenRowBackground);};$vnode_4.push($createVNode('td',{'class': 'rd-hB rd-hz','style': $$_style,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
}
}$vnode_2.push($createVNode('tbody',0,$vnode_3));
}else{
$vnode_6=[$quick_gx_static_text||($quick_gx_static_text=$createVNode(0,'绑定数据'))];$vnode_5=[$createVNode('div',{'class': 'rd-hD','style': 'height:'+(props.theadRowHeight)+(unit)+';line-height:'+(props.theadRowHeight)+(unit)+';font-size:'+(props.theadFontsize)+(unit)+';color:'+(props.theadForecolor),},$vnode_6)];;$$_style='text-align:'+(props.cellAlign)+';border-color:'+(props.bordercolor)+';';if(props.theadRowBackground){;$$_style+='background:'+(props.theadRowBackground);};$vnode_4=[$createVNode('th',{'class': 'rd-hB rd-hz','style': $$_style,},$vnode_5)];$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2.push($createVNode('thead',0,$vnode_3));$vnode_6=[$quick_gy_static_text||($quick_gy_static_text=$createVNode(0,'请先绑定数据'))];$vnode_5=[$createVNode('div',{'class': 'rd-hD','style': 'height:'+(props.tbodyRowHeight)+(unit)+';line-height:'+(props.tbodyRowHeight)+(unit)+';font-size:'+(props.tbodyFontsize)+(unit)+';color:'+(props.tbodyForecolor),},$vnode_6)];;$$_style='text-align:'+(props.cellAlign)+';border-color:'+(props.bordercolor)+';';if(props.tbodyOddRowBackground){;$$_style+='background:'+(props.tbodyOddRowBackground);};$vnode_4=[$createVNode('td',{'class': 'rd-hB rd-hz','style': $$_style,},$vnode_5)];$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2.push($createVNode('tbody',0,$vnode_3));
}$vnode_1=[$createVNode('table',{'class': 'rd-gN rd-hA','style': 'table-layout:fixed;border-color:'+(props.bordercolor),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});