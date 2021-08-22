/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-coltable/index",["magix5"],(require,exports,module)=>{
let $quick_bR_static_text;
let $quick_bS_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
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
$vnode_2=[];$__line=3;$__art="{{if props.bind&&\n            props.bind.fields&&\n            props.bind.fields.length}}";$__ctrl="if(props.bind&&\n            props.bind.fields&&\n            props.bind.fields.length){";
if(props.bind&&
            props.bind.fields&&
            props.bind.fields.length){
$vnode_4=[];$__line=8;$__art="{{each props.bind.fields as field}}";$__ctrl="for(let $q_a_otufe=props.bind.fields,$q_c_hywmiu=$q_a_otufe.length,$q_key_qvjttvgt=0;$q_key_qvjttvgt<$q_c_hywmiu;$q_key_qvjttvgt++){let field=$q_a_otufe[$q_key_qvjttvgt];";
for(let $q_a_otufe=props.bind.fields,$q_c_hywmiu=$q_a_otufe.length,$q_key_qvjttvgt=0;$q_key_qvjttvgt<$q_c_hywmiu;$q_key_qvjttvgt+=1){
let field=$q_a_otufe[$q_key_qvjttvgt];
$vnode_6=[$createVNode(0,($__line=11,$__art='{{=field.name}}',$__ctrl='<%=field.name%>',(field.name)))];$vnode_5=[$createVNode('div',{'class': 'rd-_assets_index_less_-text-pre-hidden','style': 'height:'+($__line=10,$__art='{{=props.theadRowHeight}}',$__ctrl='<%=props.theadRowHeight%>',(props.theadRowHeight))+($__line=10,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';line-height:'+($__line=10,$__art='{{=props.theadRowHeight}}',$__ctrl='<%=props.theadRowHeight%>',(props.theadRowHeight))+($__line=10,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-size:'+($__line=10,$__art='{{=props.theadFontsize}}',$__ctrl='<%=props.theadFontsize%>',(props.theadFontsize))+($__line=10,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';color:'+($__line=10,$__art='{{=props.theadForecolor}}',$__ctrl='<%=props.theadForecolor%>',(props.theadForecolor)),},$vnode_6)];;$$_style='width:'+($__line=9,$__art='{{=props.columns[field.id]}}',$__ctrl='<%=props.columns[field.id]%>',(props.columns[field.id]))+($__line=9,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-color:'+($__line=9,$__art='{{=props.bordercolor}}',$__ctrl='<%=props.bordercolor%>',(props.bordercolor))+';text-align:'+($__line=9,$__art='{{=props.cellAlign}}',$__ctrl='<%=props.cellAlign%>',(props.cellAlign))+';'+($__line=9,$__art='{{if props.theadRowBackground}}','');$__ctrl='<%if(props.theadRowBackground){%>';if(props.theadRowBackground){;$$_style+='background:'+($__line=9,$__art='{{=props.theadRowBackground}}',$__ctrl='<%=props.theadRowBackground%>',(props.theadRowBackground))+($__line=9,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_4.push($createVNode('th',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': $$_style,},$vnode_5));
}$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2.push($createVNode('thead',0,$vnode_3));$vnode_3=[];$__line=18;$__art="{{if props.bind}}";$__ctrl="if(props.bind){";
if(props.bind){
$__line=19;$__art="{{if props.bind._tip}}";$__ctrl="if(props.bind._tip){";
if(props.bind._tip){
$vnode_6=[$createVNode(0,($__line=23,$__art='{{=props.bind._tip}}',$__ctrl='<%=props.bind._tip%>',(props.bind._tip)))];$vnode_5=[$createVNode('div',{'class': 'rd-_assets_index_less_-text-pre-hidden','style': 'height:'+($__line=22,$__art='{{=props.loadingHeight}}',$__ctrl='<%=props.loadingHeight%>',(props.loadingHeight))+($__line=22,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';line-height:'+($__line=22,$__art='{{=props.loadingHeight}}',$__ctrl='<%=props.loadingHeight%>',(props.loadingHeight))+($__line=22,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-size:'+($__line=22,$__art='{{=props.theadFontsize}}',$__ctrl='<%=props.theadFontsize%>',(props.theadFontsize))+($__line=22,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_6)];$vnode_4=[$createVNode('td',{'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-table-cell rd-_assets_index_less_-tc rd-_assets_index_less_-word-break-break-all','colspan': ($__line=21,$__art='{{=props.bind.fields.length}}',$__ctrl='<%=props.bind.fields.length%>',(props.bind.fields.length)),'style': 'border-color:'+($__line=21,$__art='{{=props.bordercolor}}',$__ctrl='<%=props.bordercolor%>',(props.bordercolor)),},$vnode_5)];$vnode_3.push($createVNode('tr',0,$vnode_4));
}else{
$__line=28;$__art="{{each props.bind._data as item i}}";$__ctrl="for(let $q_a_yngeiav=props.bind._data,$q_c_ezomu=$q_a_yngeiav.length,i=0;i<$q_c_ezomu;i++){let item=$q_a_yngeiav[i];";
for(let $q_a_yngeiav=props.bind._data,$q_c_ezomu=$q_a_yngeiav.length,i=0;i<$q_c_ezomu;i+=1){
let item=$q_a_yngeiav[i];
$vnode_4=[];$__line=30;$__art="{{each props.bind.fields as field}}";$__ctrl="for(let $q_a_qefognh=props.bind.fields,$q_c_inllpl=$q_a_qefognh.length,$q_key_mwaangki=0;$q_key_mwaangki<$q_c_inllpl;$q_key_mwaangki++){let field=$q_a_qefognh[$q_key_mwaangki];";
for(let $q_a_qefognh=props.bind.fields,$q_c_inllpl=$q_a_qefognh.length,$q_key_mwaangki=0;$q_key_mwaangki<$q_c_inllpl;$q_key_mwaangki+=1){
let field=$q_a_qefognh[$q_key_mwaangki];
$vnode_6=[$createVNode(0,($__line=33,$__art='{{=item[field.id]}}',$__ctrl='<%=item[field.id]%>',(item[field.id])))];$vnode_5=[$createVNode('div',{'class': 'rd-_assets_index_less_-text-pre-hidden','style': 'height:'+($__line=32,$__art='{{=props.tbodyRowHeight}}',$__ctrl='<%=props.tbodyRowHeight%>',(props.tbodyRowHeight))+($__line=32,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';line-height:'+($__line=32,$__art='{{=props.tbodyRowHeight}}',$__ctrl='<%=props.tbodyRowHeight%>',(props.tbodyRowHeight))+($__line=32,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-size:'+($__line=32,$__art='{{=props.tbodyFontsize}}',$__ctrl='<%=props.tbodyFontsize%>',(props.tbodyFontsize))+($__line=32,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';color:'+($__line=32,$__art='{{=props.tbodyForecolor}}',$__ctrl='<%=props.tbodyForecolor%>',(props.tbodyForecolor)),},$vnode_6)];;$$_style='text-align:'+($__line=31,$__art='{{=props.cellAlign}}',$__ctrl='<%=props.cellAlign%>',(props.cellAlign))+';border-color:'+($__line=31,$__art='{{=props.bordercolor}}',$__ctrl='<%=props.bordercolor%>',(props.bordercolor))+';'+($__line=31,$__art='{{if i%2&&props.tbodyOddRowBackground}}','');$__ctrl='<%if(i%2&&props.tbodyOddRowBackground){%>';if(i%2&&props.tbodyOddRowBackground){;$$_style+='background:'+($__line=31,$__art='{{=props.tbodyOddRowBackground}}',$__ctrl='<%=props.tbodyOddRowBackground%>',(props.tbodyOddRowBackground))+($__line=31,$__art='{{else if (i%2)==0&&props.tbodyEvenRowBackground}}','');$__ctrl='<%}else if((i%2)==0&&props.tbodyEvenRowBackground){%>';}else if((i%2)==0&&props.tbodyEvenRowBackground){;$$_style+='background:'+($__line=31,$__art='{{=props.tbodyEvenRowBackground}}',$__ctrl='<%=props.tbodyEvenRowBackground%>',(props.tbodyEvenRowBackground))+($__line=31,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': $$_style,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
}
}$vnode_2.push($createVNode('tbody',0,$vnode_3));
}else{
$vnode_6=[$quick_bR_static_text||($quick_bR_static_text=$createVNode(0,'绑定数据'))];$vnode_5=[$createVNode('div',{'class': 'rd-_assets_index_less_-text-pre-hidden','style': 'height:'+($__line=46,$__art='{{=props.theadRowHeight}}',$__ctrl='<%=props.theadRowHeight%>',(props.theadRowHeight))+($__line=46,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';line-height:'+($__line=46,$__art='{{=props.theadRowHeight}}',$__ctrl='<%=props.theadRowHeight%>',(props.theadRowHeight))+($__line=46,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-size:'+($__line=46,$__art='{{=props.theadFontsize}}',$__ctrl='<%=props.theadFontsize%>',(props.theadFontsize))+($__line=46,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';color:'+($__line=46,$__art='{{=props.theadForecolor}}',$__ctrl='<%=props.theadForecolor%>',(props.theadForecolor)),},$vnode_6)];;$$_style='text-align:'+($__line=45,$__art='{{=props.cellAlign}}',$__ctrl='<%=props.cellAlign%>',(props.cellAlign))+';border-color:'+($__line=45,$__art='{{=props.bordercolor}}',$__ctrl='<%=props.bordercolor%>',(props.bordercolor))+';'+($__line=45,$__art='{{if props.theadRowBackground}}','');$__ctrl='<%if(props.theadRowBackground){%>';if(props.theadRowBackground){;$$_style+='background:'+($__line=45,$__art='{{=props.theadRowBackground}}',$__ctrl='<%=props.theadRowBackground%>',(props.theadRowBackground))+($__line=45,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_4=[$createVNode('th',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': $$_style,},$vnode_5)];$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2.push($createVNode('thead',0,$vnode_3));$vnode_6=[$quick_bS_static_text||($quick_bS_static_text=$createVNode(0,'请先绑定数据'))];$vnode_5=[$createVNode('div',{'class': 'rd-_assets_index_less_-text-pre-hidden','style': 'height:'+($__line=55,$__art='{{=props.tbodyRowHeight}}',$__ctrl='<%=props.tbodyRowHeight%>',(props.tbodyRowHeight))+($__line=55,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';line-height:'+($__line=55,$__art='{{=props.tbodyRowHeight}}',$__ctrl='<%=props.tbodyRowHeight%>',(props.tbodyRowHeight))+($__line=55,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-size:'+($__line=55,$__art='{{=props.tbodyFontsize}}',$__ctrl='<%=props.tbodyFontsize%>',(props.tbodyFontsize))+($__line=55,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';color:'+($__line=55,$__art='{{=props.tbodyForecolor}}',$__ctrl='<%=props.tbodyForecolor%>',(props.tbodyForecolor)),},$vnode_6)];;$$_style='text-align:'+($__line=54,$__art='{{=props.cellAlign}}',$__ctrl='<%=props.cellAlign%>',(props.cellAlign))+';border-color:'+($__line=54,$__art='{{=props.bordercolor}}',$__ctrl='<%=props.bordercolor%>',(props.bordercolor))+';'+($__line=54,$__art='{{if props.tbodyOddRowBackground}}','');$__ctrl='<%if(props.tbodyOddRowBackground){%>';if(props.tbodyOddRowBackground){;$$_style+='background:'+($__line=54,$__art='{{=props.tbodyOddRowBackground}}',$__ctrl='<%=props.tbodyOddRowBackground%>',(props.tbodyOddRowBackground))+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_4=[$createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': $$_style,},$vnode_5)];$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2.push($createVNode('tbody',0,$vnode_3));
}$vnode_1=[$createVNode('table',{'class': 'rd-_assets_index_less_-table rd-_assets_index_less_-wp100','style': 'table-layout:fixed;border-color:'+($__line=2,$__art='{{=props.bordercolor}}',$__ctrl='<%=props.bordercolor%>',(props.bordercolor)),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/data-coltable/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});