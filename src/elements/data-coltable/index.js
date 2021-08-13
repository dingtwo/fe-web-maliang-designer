/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/data-coltable/index",["5c"],(require,exports,module)=>{
let $quick_ml_static_text;
let $quick_mm_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
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
for(let $q_a_oyavipfmm=props.bind.fields,$q_c_pzxydbgt=$q_a_oyavipfmm.length,$q_key_xcuvykil=0;$q_key_xcuvykil<$q_c_pzxydbgt;$q_key_xcuvykil+=1){
let field=$q_a_oyavipfmm[$q_key_xcuvykil];
$vnode_6=[$createVNode(0,(field.name))];$vnode_5=[$createVNode('div',{'class': 'rd-nr','style': 'height:'+(props.theadRowHeight)+(unit)+';line-height:'+(props.theadRowHeight)+(unit)+';font-size:'+(props.theadFontsize)+(unit)+';color:'+(props.theadForecolor),},$vnode_6)];;$$_style='width:'+(props.columns[field.id])+(unit)+';border-color:'+(props.bordercolor)+';text-align:'+(props.cellAlign)+';';if(props.theadRowBackground){;$$_style+='background:'+(props.theadRowBackground);};$vnode_4.push($createVNode('th',{'class': 'rd-nn rd-np','style': $$_style,},$vnode_5));
}$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2.push($createVNode('thead',0,$vnode_3));$vnode_3=[];
if(props.bind){

if(props.bind._tip){
$vnode_6=[$createVNode(0,(props.bind._tip))];$vnode_5=[$createVNode('div',{'class': 'rd-nr','style': 'height:'+(props.loadingHeight)+(unit)+';line-height:'+(props.loadingHeight)+(unit)+';font-size:'+(props.theadFontsize)+(unit),},$vnode_6)];$vnode_4=[$createVNode('td',{'class': 'rd-mG rd-nL rd-nU rd-nn rd-np','colspan': (props.bind.fields.length),'style': 'border-color:'+(props.bordercolor),},$vnode_5)];$vnode_3.push($createVNode('tr',0,$vnode_4));
}else{

for(let $q_a_qyjguefk=props.bind._data,$q_c_qrvryzpnp=$q_a_qyjguefk.length,i=0;i<$q_c_qrvryzpnp;i+=1){
let item=$q_a_qyjguefk[i];
$vnode_4=[];
for(let $q_a_stnwxgrb=props.bind.fields,$q_c_qpqvxzg=$q_a_stnwxgrb.length,$q_key_npzaub=0;$q_key_npzaub<$q_c_qpqvxzg;$q_key_npzaub+=1){
let field=$q_a_stnwxgrb[$q_key_npzaub];
$vnode_6=[$createVNode(0,(item[field.id]))];$vnode_5=[$createVNode('div',{'class': 'rd-nr','style': 'height:'+(props.tbodyRowHeight)+(unit)+';line-height:'+(props.tbodyRowHeight)+(unit)+';font-size:'+(props.tbodyFontsize)+(unit)+';color:'+(props.tbodyForecolor),},$vnode_6)];;$$_style='text-align:'+(props.cellAlign)+';border-color:'+(props.bordercolor)+';';if(i%2&&props.tbodyOddRowBackground){;$$_style+='background:'+(props.tbodyOddRowBackground);}else if((i%2)==0&&props.tbodyEvenRowBackground){;$$_style+='background:'+(props.tbodyEvenRowBackground);};$vnode_4.push($createVNode('td',{'class': 'rd-nn rd-np','style': $$_style,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
}
}$vnode_2.push($createVNode('tbody',0,$vnode_3));
}else{
$vnode_6=[$quick_ml_static_text||($quick_ml_static_text=$createVNode(0,'绑定数据'))];$vnode_5=[$createVNode('div',{'class': 'rd-nr','style': 'height:'+(props.theadRowHeight)+(unit)+';line-height:'+(props.theadRowHeight)+(unit)+';font-size:'+(props.theadFontsize)+(unit)+';color:'+(props.theadForecolor),},$vnode_6)];;$$_style='text-align:'+(props.cellAlign)+';border-color:'+(props.bordercolor)+';';if(props.theadRowBackground){;$$_style+='background:'+(props.theadRowBackground);};$vnode_4=[$createVNode('th',{'class': 'rd-nn rd-np','style': $$_style,},$vnode_5)];$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2.push($createVNode('thead',0,$vnode_3));$vnode_6=[$quick_mm_static_text||($quick_mm_static_text=$createVNode(0,'请先绑定数据'))];$vnode_5=[$createVNode('div',{'class': 'rd-nr','style': 'height:'+(props.tbodyRowHeight)+(unit)+';line-height:'+(props.tbodyRowHeight)+(unit)+';font-size:'+(props.tbodyFontsize)+(unit)+';color:'+(props.tbodyForecolor),},$vnode_6)];;$$_style='text-align:'+(props.cellAlign)+';border-color:'+(props.bordercolor)+';';if(props.tbodyOddRowBackground){;$$_style+='background:'+(props.tbodyOddRowBackground);};$vnode_4=[$createVNode('td',{'class': 'rd-nn rd-np','style': $$_style,},$vnode_5)];$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2.push($createVNode('tbody',0,$vnode_3));
}$vnode_1=[$createVNode('table',{'class': 'rd-mB rd-no','style': 'table-layout:fixed;border-color:'+(props.bordercolor),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});