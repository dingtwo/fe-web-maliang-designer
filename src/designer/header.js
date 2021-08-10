/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/header",["magix5","../elements/index","../gallery/mx-dialog/index","../gallery/mx-dragdrop/index","../gallery/mx-pointer/cursor","../gallery/mx-pointer/select","../gallery/mx-runner/index","../provider/fs","./const","./content","./example","./keyboard","./stage-align","./stage-elements","./stage-generic","./tojson"],(require,exports,module)=>{
let $quick_dG_1_static_node;
let $quick_dG_2_static_node;
let $quick_dG_6_static_node;
let $quick_dG_9_static_node;
let $quick_dG_10_static_node;
let $quick_dG_11_static_node;
let $quick_dG_12_static_node;
let $quick_dG_13_static_node;
let $quick_dG_14_static_node;
let $quick_dG_15_static_node;
let $quick_dG_16_static_node;
let $quick_dG_17_static_node;
let $quick_dG_18_static_node;
let $quick_dG_19_static_node;
let $quick_dG_20_static_node;
let $quick_dG_21_static_node;
let $quick_dG_22_static_node;
let $quick_dG_23_static_node;
let $quick_dG_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-fl rd-_assets_index_less_-flex rd-_assets_index_less_-fontsize-16',};
let $quick_dG_3_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-pr rd-_designer_header_less_-header-item rd-_designer_header_less_-header-item-has-subs rd-_designer_header_less_-header-item-z-index',};
let $quick_dG_4_static_attr={'class': 'rd-_assets_index_less_-iconfont rd-_designer_header_less_-header-item-icon',};
let $quick_dG_5_static_attr={'class': 'rd-_assets_index_less_-fontsize-12 rd-_designer_header_less_-header-item-text',};
let $quick_dG_7_static_attr={'class': 'rd-_assets_index_less_-cursor-default rd-_assets_index_less_-none rd-_assets_index_less_-pa rd-_assets_index_less_-padding-4 rd-_designer_header_less_-header-item-more',};
let $quick_dG_8_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-fr rd-_assets_index_less_-unselectable',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../elements/index");
let index_2 = require("../gallery/mx-dialog/index");
let index_3 = require("../gallery/mx-dragdrop/index");
let cursor_1 = require("../gallery/mx-pointer/cursor");
let select_1 = require("../gallery/mx-pointer/select");
let index_4 = require("../gallery/mx-runner/index");
let fs_1 = require("../provider/fs");
let const_1 = require("./const");
let content_1 = require("./content");
let example_1 = require("./example");
let keyboard_1 = require("./keyboard");
let stage_align_1 = require("./stage-align");
let stage_elements_1 = require("./stage-elements");
let stage_generic_1 = require("./stage-generic");
let tojson_1 = require("./tojson");
let { node, State, applyStyle, config, View, inside, mix, isFunction } = magix_1;
let Stage_Line = 1;
let { random, max, round } = Math;
let StagePadding = const_1['@:{const#stage.padding~rs}'];
applyStyle("rd-_designer_header_less_","\n.rd-_designer_header_less_-header-item,\n.rd-_designer_header_less_-sub-item {\nwidth:50px;\nheight:40px;\ndisplay:grid;\ngrid-template-rows:20px 20px;\nmargin:0 2px;\njustify-items:center;\n}\n.rd-_designer_header_less_-header-upon-select {\nz-index:400;\n}\n.rd-_designer_header_less_-header-item-has-subs {\ngrid-template-columns:50px 10px;\nwidth:60px;\n}\n.rd-_designer_header_less_-sub-item {\nborder-radius:2px;\n}\n.rd-_designer_header_less_-sub-item:hover {\nbackground:#398e3e;\n}\n.rd-_designer_header_less_-item-image {\nmax-width:90%;\nmax-height:90%;\n}\n.rd-_designer_header_less_-header-item-more {\ntop:100%;\nleft:0;\nbackground:#40a146;\nwidth:278px;\nborder-radius:0 0 2px 2px;\n}\n.rd-_designer_header_less_-header-item-more-menu {\ntop:100%;\nmin-width:160px;\nborder-radius:0 0 2px 2px;\nbackground:#40a146;\n}\n.rd-_designer_header_less_-header-item:hover {\nbackground:#40a146;\n}\n.rd-_designer_header_less_-header-item:hover .rd-_designer_header_less_-header-item-more {\ndisplay:block;\n}\n.rd-_designer_header_less_-header-item:hover .rd-_designer_header_less_-header-item-more-menu {\ndisplay:block;\n}\n.rd-_designer_header_less_-header-item-z-index:hover {\nz-index:700;\n}\n.rd-_designer_header_less_-header-item-icon {\ngrid-column:1/2;\ngrid-row:1/2;\nalign-self:flex-end;\n}\n.rd-_designer_header_less_-header-item-text {\nfont-weight:400;\nline-height:12px;\ngrid-column:1/2;\ngrid-row:2/3;\n}\n.rd-_designer_header_less_-header-item-arrow {\nmargin-left:-10px;\ngrid-row:1/3;\ngrid-column:2/3;\ntransition:all 0.25s;\nopacity:0.6;\n}\n.rd-_designer_header_less_-header-item:hover .rd-_designer_header_less_-header-item-arrow {\ntransform:rotate(180deg);\n}\n.rd-_designer_header_less_-header-item-spliter {\nheight:30px;\nbackground:linear-gradient(rgba(255, 255, 255, 0.25), #ffffff 30%, #ffffff 70%, rgba(255, 255, 255, 0.25));\nmargin:2px 12px;\n}\n.rd-_designer_header_less_-menu-text {\nword-break:keep-all;\nwhite-space:nowrap;\n}\n.rd-_designer_header_less_-menu-item {\nheight:28px;\nborder-radius:2px;\npadding:0 8px;\nmargin:2px;\nline-height:1.5;\n}\n.rd-_designer_header_less_-menu-item:hover {\nbackground:#398e3e;\n}\n.rd-_designer_header_less_-short {\ncolor:rgba(255, 255, 255, 0.6);\nmargin-left:20px;\n}\n.rd-_designer_header_less_-menu-icon {\nmargin-right:5px;\n}\n");
//不同浏览器对全屏的处理方式不一样，这里进行统一尝试
let Fullscreens = ['requestFullscreen',
    'webkitRequestFullScreen',
    'webkitRequestFullscreen',
    'mozRequestFullScreen',
    'msRequestFullscreen'];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	mini,
	i18n,
	elements,
	template,
	su,
	cssc,
	cunf,
	dd,
	native,
	help,}=$dataFromView,
$vnode_2,
$vnode_1,
$$_class,
$vnode_3,
$vnode_5,
$vnode_4,
$$_title,
$text;
$__line=1;$__art="{{if !mini}}";$__ctrl="if(!mini){";
if(!mini){

if($quick_dG_1_static_node){
$vnode_1=[$quick_dG_1_static_node];
}else{
$vnode_2=[$createVNode(0,'')];$vnode_1=[$quick_dG_1_static_node=$createVNode('i',{'_': 'cD','class': 'rd-_assets_index_less_-iconfont rd-_assets_index_less_-mr10',},$vnode_2)];
}
$vnode_1.push($createVNode(0,($__line=4,$__art='{{=i18n(\'@:{lang#site.name~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#site.name~rs}\')%>',(i18n('@:{lang#site.name~rs}')))));$vnode_0.push($createVNode('div',$quick_dG_0_static_attr,$vnode_1));
}$vnode_1=[];$__line=8;$__art="{{each elements as e}}";$__ctrl="for(let $q_c_ylcuzjtk=elements.length,$q_key_ujjsbbh=0;$q_key_ujjsbbh<$q_c_ylcuzjtk;$q_key_ujjsbbh++){let e=elements[$q_key_ujjsbbh];";
for(let $q_c_ylcuzjtk=elements.length,$q_key_ujjsbbh=0;$q_key_ujjsbbh<$q_c_ylcuzjtk;$q_key_ujjsbbh+=1){
let e=elements[$q_key_ujjsbbh];
$__line=9;$__art="{{if e.spliter}}";$__ctrl="if(e.spliter){";
if(e.spliter){

if($quick_dG_2_static_node){
$vnode_1.push($quick_dG_2_static_node);
}else{
$vnode_1.push($quick_dG_2_static_node=$createVNode('div',{'_': 'cE','class': 'rd-_assets_index_less_-fl rd-_assets_index_less_-width-1 rd-_designer_header_less_-header-item-spliter',}));
}

}else{
$__line=12;$__art="{{if e.subs}}";$__ctrl="if(e.subs){";
if(e.subs){
$vnode_3=[$createVNode(0,($__line=14,$__art='{{=e.icon}}',$__ctrl='<%=e.icon%>',(e.icon)),1)];$vnode_2=[$createVNode('i',$quick_dG_4_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,($__line=15,$__art='{{=i18n(e.title)}}',$__ctrl='<%=i18n(e.title)%>',(i18n(e.title))))];$vnode_2.push($createVNode('b',$quick_dG_5_static_attr,$vnode_3));
if($quick_dG_6_static_node){
$vnode_2.push($quick_dG_6_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_dG_6_static_node=$createVNode('i',{'_': 'cF','class': 'rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-iconfont rd-_designer_header_less_-header-item-arrow',},$vnode_3));
}
$vnode_3=[];$__line=18;$__art="{{each e.subs as es}}";$__ctrl="for(let $q_a_wdktz=e.subs,$q_c_xbfpbx=$q_a_wdktz.length,$q_key_xhzcsyr=0;$q_key_xhzcsyr<$q_c_xbfpbx;$q_key_xhzcsyr++){let es=$q_a_wdktz[$q_key_xhzcsyr];";
for(let $q_a_wdktz=e.subs,$q_c_xbfpbx=$q_a_wdktz.length,$q_key_xhzcsyr=0;$q_key_xhzcsyr<$q_c_xbfpbx;$q_key_xhzcsyr+=1){
let es=$q_a_wdktz[$q_key_xhzcsyr];
$vnode_4=[];$__line=20;$__art="{{if e.image}}";$__ctrl="if(e.image){";
if(e.image){
$vnode_4.push($createVNode('img',{'class': 'rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-img rd-_designer_header_less_-item-image','src': ($__line=21,$__art='{{=es.image}}',$__ctrl='<%=es.image%>',(es.image)),},1));
}else{
$vnode_5=[$createVNode(0,($__line=23,$__art='{{=es.icon||es.ctrl.icon}}',$__ctrl='<%=es.icon||es.ctrl.icon%>',(es.icon||es.ctrl.icon)),1)];$vnode_4.push($createVNode('i',$quick_dG_4_static_attr,$vnode_5));
}$vnode_5=[$createVNode(0,($__line=25,$__art='{{=i18n(es.title||es.ctrl.title)}}',$__ctrl='<%=i18n(es.title||es.ctrl.title)%>',(i18n(es.title||es.ctrl.title))))];$vnode_4.push($createVNode('b',$quick_dG_5_static_attr,$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fl rd-_assets_index_less_-touch-action-none rd-_designer_header_less_-sub-item','mx5-pointerdown': $viewId+'@:{add.element~rs}({src:\''+($__line=19,$__art='{{#es}}',$__ctrl='<%#es,\'auto_key_elements.\'+($q_key_ujjsbbh)+\'.subs.\'+($q_key_xhzcsyr)+\'.es\'%>',$keyOf($refData,es,'auto_key_elements.'+($q_key_ujjsbbh)+'.subs.'+($q_key_xhzcsyr)+'.es'))+'\',hide:true})',},$vnode_4));
}$vnode_2.push($createVNode('div',$quick_dG_7_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_dG_3_static_attr,$vnode_2));
}else{
$vnode_3=[$createVNode(0,($__line=32,$__art='{{=e.icon||e.ctrl.icon}}',$__ctrl='<%=e.icon||e.ctrl.icon%>',(e.icon||e.ctrl.icon)),1)];$vnode_2=[$createVNode('i',$quick_dG_4_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,($__line=33,$__art='{{=i18n(e.title||e.ctrl.title)}}',$__ctrl='<%=i18n(e.title||e.ctrl.title)%>',(i18n(e.title||e.ctrl.title))))];$vnode_2.push($createVNode('b',$quick_dG_5_static_attr,$vnode_3));$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-pr rd-_assets_index_less_-touch-action-none rd-_designer_header_less_-header-item','mx5-pointerdown': $viewId+'@:{add.element~rs}({src:\''+($__line=31,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_elements.\'+($q_key_ujjsbbh)+\'.e\'%>',$keyOf($refData,e,'auto_key_elements.'+($q_key_ujjsbbh)+'.e'))+'\'})',},$vnode_2));
}
}
};$$_class='rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center rd-_assets_index_less_-fl rd-_assets_index_less_-unselectable'+($__line=7,$__art='{{if !mini}}','');$__ctrl='<%if(!mini){%>';if(!mini){;$$_class+=' rd-_assets_index_less_-ml80'+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));$vnode_1=[];$__line=40;$__art="{{if template}}";$__ctrl="if(template){";
if(template){

if($quick_dG_9_static_node){
$vnode_2=[$quick_dG_9_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_dG_9_static_node=$createVNode('i',{'_': 'cG','class': 'rd-_assets_index_less_-iconfont',},$vnode_3)];
}

if($quick_dG_10_static_node){
$vnode_2.push($quick_dG_10_static_node);
}else{
$vnode_3=[$createVNode(0,'示例')];$vnode_2.push($quick_dG_10_static_node=$createVNode('b',{'_': 'cH','class': 'rd-_assets_index_less_-fontsize-12 rd-_designer_header_less_-header-item-text',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_designer_header_less_-header-item','mx5-click': $viewId+'@:{show.examples~rs}()',},$vnode_2));
}$__line=46;$__art="{{if su||cssc||cunf}}";$__ctrl="if(su||cssc||cunf){";
if(su||cssc||cunf){
$vnode_2=[];
if($quick_dG_11_static_node){
$vnode_2.push($quick_dG_11_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_dG_11_static_node=$createVNode('i',{'_': 'cI','class': 'rd-_assets_index_less_-iconfont',},$vnode_3));
}

if($quick_dG_12_static_node){
$vnode_2.push($quick_dG_12_static_node);
}else{
$vnode_3=[$createVNode(0,'保存')];$vnode_2.push($quick_dG_12_static_node=$createVNode('b',{'_': 'cJ','class': 'rd-_assets_index_less_-fontsize-12 rd-_designer_header_less_-header-item-text',},$vnode_3));
}
$__line=50;$__art="{{if dd}}";$__ctrl="if(dd){";
if(dd){

if($quick_dG_6_static_node){
$vnode_2.push($quick_dG_6_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_dG_6_static_node=$createVNode('i',{'_': 'cF','class': 'rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-iconfont rd-_designer_header_less_-header-item-arrow',},$vnode_3));
}
$vnode_3=[];$__line=53;$__art="{{if su}}";$__ctrl="if(su){";
if(su){

if($quick_dG_13_static_node){
$vnode_4=[$quick_dG_13_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_dG_13_static_node=$createVNode('i',{'_': 'cK','class': 'rd-_assets_index_less_-fontsize-14 rd-_assets_index_less_-iconfont rd-_designer_header_less_-menu-icon',},$vnode_5)];
}
$vnode_5=[$createVNode(0,($__line=57,$__art='{{=i18n(\'@:{lang#menu.save.to.remote~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.save.to.remote~rs}\')%>',(i18n('@:{lang#menu.save.to.remote~rs}'))))];$vnode_4.push($createVNode('span',{'class': 'rd-_assets_index_less_-flex-fill-rest rd-_designer_header_less_-menu-text','title': ($__line=56,$__art='{{=i18n(\'@:{lang#menu.save.to.remote~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.save.to.remote~rs}\')%>',(i18n('@:{lang#menu.save.to.remote~rs}'))),},$vnode_5));
if($quick_dG_14_static_node){
$vnode_4.push($quick_dG_14_static_node);
}else{
$vnode_5=[$createVNode(0,'Ctrl+S')];$vnode_4.push($quick_dG_14_static_node=$createVNode('code',{'_': 'cL','class': 'rd-_assets_index_less_-fontsize-12 rd-_designer_header_less_-short','title': '快捷键:Ctrl+S',},$vnode_5));
}
$vnode_3.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_designer_header_less_-menu-item','mx5-click': $viewId+'@:{save~rs}()',},$vnode_4));
}$__line=62;$__art="{{if cssc}}";$__ctrl="if(cssc){";
if(cssc){

if($quick_dG_15_static_node){
$vnode_4=[$quick_dG_15_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_dG_15_static_node=$createVNode('i',{'_': 'cM','class': 'rd-_assets_index_less_-fontsize-14 rd-_assets_index_less_-iconfont rd-_designer_header_less_-menu-icon',},$vnode_5)];
}
$vnode_5=[$createVNode(0,($__line=66,$__art='{{=i18n(\'@:{lang#save.content.title~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#save.content.title~rs}\')%>',(i18n('@:{lang#save.content.title~rs}'))))];$vnode_4.push($createVNode('span',{'class': 'rd-_assets_index_less_-flex-fill-rest rd-_designer_header_less_-menu-text','title': ($__line=65,$__art='{{=i18n(\'@:{lang#save.content.title~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#save.content.title~rs}\')%>',(i18n('@:{lang#save.content.title~rs}'))),},$vnode_5));$text='Ctrl+'+($__line=68,$__art='{{if su}}','');$__ctrl='<%if(su){%>';if(su){;$text+='Shift+'+($__line=68,$__art='{{/if}}','');$__ctrl='<%}%>';};$text+='S';$vnode_5=[$createVNode(0,$text)];;$$_title='快捷键:Ctrl+'+($__line=68,$__art='{{if su}}','');$__ctrl='<%if(su){%>';if(su){;$$_title+='Shift+'+($__line=68,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_title+='S';$vnode_4.push($createVNode('code',{'class': 'rd-_designer_header_less_-short','title': $$_title,},$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_designer_header_less_-menu-item','mx5-click': $viewId+'@:{show.stage.content~rs}()',},$vnode_4));
}$__line=71;$__art="{{if cunf}}";$__ctrl="if(cunf){";
if(cunf){

if($quick_dG_16_static_node){
$vnode_4=[$quick_dG_16_static_node];
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4=[$quick_dG_16_static_node=$createVNode('i',{'_': 'cN','class': 'rd-_assets_index_less_-fontsize-14 rd-_assets_index_less_-iconfont rd-_designer_header_less_-menu-icon',},$vnode_5)];
}
$vnode_5=[$createVNode(0,($__line=75,$__art='{{=i18n(\'@:{lang#menu.save.to.local~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.save.to.local~rs}\')%>',(i18n('@:{lang#menu.save.to.local~rs}'))))];$vnode_4.push($createVNode('span',{'class': 'rd-_assets_index_less_-flex-fill-rest rd-_designer_header_less_-menu-text','title': ($__line=74,$__art='{{=i18n(\'@:{lang#menu.save.to.local~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.save.to.local~rs}\')%>',(i18n('@:{lang#menu.save.to.local~rs}'))),},$vnode_5));$vnode_3.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_designer_header_less_-menu-item','mx5-click': $viewId+'@:{save.to.local~rs}()',},$vnode_4));$vnode_4=[];
if($quick_dG_17_static_node){
$vnode_4.push($quick_dG_17_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_dG_17_static_node=$createVNode('i',{'_': 'cO','class': 'rd-_assets_index_less_-fontsize-14 rd-_assets_index_less_-iconfont rd-_designer_header_less_-menu-icon',},$vnode_5));
}
$vnode_5=[$createVNode(0,($__line=81,$__art='{{=i18n(\'@:{lang#menu.import.from.local~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.import.from.local~rs}\')%>',(i18n('@:{lang#menu.import.from.local~rs}'))))];$vnode_4.push($createVNode('span',{'class': 'rd-_assets_index_less_-flex-fill-rest rd-_designer_header_less_-menu-text','title': ($__line=80,$__art='{{=i18n(\'@:{lang#menu.import.from.local~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.import.from.local~rs}\')%>',(i18n('@:{lang#menu.import.from.local~rs}'))),},$vnode_5));$__line=83;$__art="{{if native}}";$__ctrl="if(native){";
if(native){
$vnode_4.push($createVNode('input',{'type': 'file','accept': '.rd','class': 'rd-_assets_index_less_-full-fill rd-_assets_index_less_-opacity-0 rd-_assets_index_less_-pa','mx5-change': $viewId+'@:{read.file.from.input~rs}()',},1));
}$vnode_3.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-pr rd-_designer_header_less_-menu-item','mx5-click': $viewId+'@:{read.from.local~rs}()',},$vnode_4));
}$vnode_2.push($createVNode('div',{'class': 'rd-_assets_index_less_-cursor-default rd-_assets_index_less_-none rd-_assets_index_less_-pa rd-_assets_index_less_-padding-2 rd-_assets_index_less_-right-0 rd-_designer_header_less_-header-item-more-menu','mx5-click': $viewId+'@:{stop.event~rs}()',},$vnode_3));
};$$_class='rd-_designer_header_less_-header-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center'+($__line=47,$__art='{{if dd}}','');$__ctrl='<%if(dd){%>';if(dd){;$$_class+=' rd-_designer_header_less_-header-item-z-index rd-_designer_header_less_-header-item-has-subs rd-_assets_index_less_-pr'+($__line=47,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'mx5-click': $viewId+'@:{save~rs}()','class': $$_class,},$vnode_2));
}$__line=92;$__art="{{if !mini}}";$__ctrl="if(!mini){";
if(!mini){

if($quick_dG_2_static_node){
$vnode_1.push($quick_dG_2_static_node);
}else{
$vnode_1.push($quick_dG_2_static_node=$createVNode('div',{'_': 'cE','class': 'rd-_assets_index_less_-fl rd-_assets_index_less_-width-1 rd-_designer_header_less_-header-item-spliter',}));
}

if($quick_dG_18_static_node){
$vnode_2=[$quick_dG_18_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_dG_18_static_node=$createVNode('i',{'_': 'cP','class': 'rd-_assets_index_less_-iconfont',},$vnode_3)];
}

if($quick_dG_19_static_node){
$vnode_2.push($quick_dG_19_static_node);
}else{
$vnode_3=[$createVNode(0,'大屏预览')];$vnode_2.push($quick_dG_19_static_node=$createVNode('b',{'_': 'cQ','class': 'rd-_assets_index_less_-fontsize-12 rd-_designer_header_less_-header-item-text',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_designer_header_less_-header-item','mx5-click': $viewId+'@:{preview~rs}()',},$vnode_2));
}
if($quick_dG_20_static_node){
$vnode_2=[$quick_dG_20_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_dG_20_static_node=$createVNode('i',{'_': 'cR','class': 'rd-_assets_index_less_-iconfont',},$vnode_3)];
}

if($quick_dG_21_static_node){
$vnode_2.push($quick_dG_21_static_node);
}else{
$vnode_3=[$createVNode(0,'打印')];$vnode_2.push($quick_dG_21_static_node=$createVNode('b',{'_': 'cS','class': 'rd-_assets_index_less_-fontsize-12 rd-_designer_header_less_-header-item-text',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_designer_header_less_-header-item','mx5-click': $viewId+'@:{print~rs}()',},$vnode_2));$__line=103;$__art="{{if help}}";$__ctrl="if(help){";
if(help){

if($quick_dG_2_static_node){
$vnode_1.push($quick_dG_2_static_node);
}else{
$vnode_1.push($quick_dG_2_static_node=$createVNode('div',{'_': 'cE','class': 'rd-_assets_index_less_-fl rd-_assets_index_less_-width-1 rd-_designer_header_less_-header-item-spliter',}));
}

if($quick_dG_22_static_node){
$vnode_2=[$quick_dG_22_static_node];
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2=[$quick_dG_22_static_node=$createVNode('i',{'_': 'cT','class': 'rd-_assets_index_less_-iconfont',},$vnode_3)];
}

if($quick_dG_23_static_node){
$vnode_2.push($quick_dG_23_static_node);
}else{
$vnode_3=[$createVNode(0,'帮助')];$vnode_2.push($quick_dG_23_static_node=$createVNode('b',{'_': 'cU','class': 'rd-_assets_index_less_-fontsize-12 rd-_designer_header_less_-header-item-text',},$vnode_3));
}
$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_designer_header_less_-header-item','mx5-click': $viewId+'@:{help~rs}()',},$vnode_2));
}$vnode_0.push($createVNode('div',$quick_dG_8_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/header.html'; throw msg; }  } ,
    init() {
        this.set({
            help: const_1['@:{const#shortcuts.dialog.and.help.icon~rs}'],
            mini: State.get('@:{global#provider.of.use.mini~rs}'),
            template: config('getTemplateUrl')
        });
        let watchKeypress = (e) => {
            let { '@:{keypress#code~rs}': keyCode, '@:{keypress#ctrl.key~rs}': ctrlKey, '@:{keypress#alt.key~rs}': altKey, '@:{keypress#shift.key~rs}': shiftKey } = e;
            if (keyCode == keyboard_1['@:{key#p~rs}'] &&
                ctrlKey &&
                !shiftKey &&
                !altKey) {
                e['@:{keypress#prevent.default~rs}']();
                this['@:{print~rs}<click>']();
            }
        };
        State.on('@:{event#stage.key.press~rs}', watchKeypress);
        this.on('destroy', () => {
            State.off('@:{event#stage.key.press~rs}', watchKeypress);
        });
    },
    render() {
        let elements = index_1["@:{element.manager#element.list~rs}"]();
        let saveUrl = config('saveContentUrl');
        let canShowStageContent = const_1['@:{const#save.show.stage.content~rs}'];
        let canUseNativeFile = const_1['@:{const#save.native.file~rs}'];
        /**
         * 如果要对项目中可使用的设计元素控制，则在这里对elements数组进行控制即可
         * 比如在这里发送请求，根据服务端返回的数据进行控制
         */
        this.digest({
            native: fs_1['@:{native.file.element~rs}'](),
            dd: canUseNativeFile || (saveUrl && canShowStageContent),
            su: saveUrl,
            cssc: canShowStageContent,
            cunf: canUseNativeFile,
            elements
        });
    },
    '@:{stop.event~rs}<click>'(e) {
        e['@:{halt~rs}'] = 1;
    },
    '@:{show.stage.content~rs}<click>'() {
        State.fire('@:{event#stage.save.content~rs}', {
            '@:{save.content.event#shift.key~rs}': 1
        });
    },
    '@:{save.to.local~rs}<click>'() {
        content_1['@:{save~rs}']();
    },
    '@:{read.from.local~rs}<click>'(e) {
        let native = this.get('native');
        if (!native) {
            content_1['@:{read.file~rs}'](e.eventTarget);
        }
    },
    '@:{read.file.from.input~rs}<change>'(e) {
        content_1['@:{read.file~rs}'](e.eventTarget);
    },
    /**
     * 当鼠标在设计元素上按下时，可能是拖动或点击动作
     * @param e 鼠标事件
     */
    '@:{add.element~rs}<pointerdown>'(e) {
        let { params, eventTarget, altKey, pageX: beginX, pageY: beginY } = e;
        beginY -= window.scrollY;
        beginX -= window.screenX;
        let { classList: rootClassList } = this.root;
        rootClassList.add('rd-_designer_header_less_-header-upon-select'); //让header在拖动的虚线框之上
        let { src, hide } = params;
        let { props: definedProps, ctrl } = src; //获取鼠标下的元素控制对象和预设属性
        let moreNode = eventTarget.parentNode; //有可能是更多面板里的元素
        //Follower["@:{update}"](ctrl.icon);
        let moved;
        let stage = node('_rd_stage');
        //以下props仅为了拿到尺寸，鼠标松开添加时，会在stage-elements.ts的add.element里重新生成一份新的props，因此不要在这里对props做修改，否则会不生效
        let props = ctrl['@:{get.props~rs}'](0, 0); //获取元素的属性，主要是为了拿到尺寸，生成相应的鼠标跟随矩形
        //如果有预设属性，则需要合并进去
        if (isFunction(definedProps)) {
            definedProps = definedProps();
        }
        mix(props, definedProps);
        if (ctrl['@:{update.props~rs}']) { //如果元素需要动态确定属性，则调用
            ctrl['@:{update.props~rs}'](props);
        }
        let { width, height } = props; //拿到元素的尺寸
        width = round(const_1['@:{const#to.px~rs}'](width));
        height = round(const_1['@:{const#to.px~rs}'](height));
        let scale = State.get('@:{global#stage.scale~rs}');
        width *= scale; //根据当前缩放，生成相应的尺寸
        height *= scale;
        select_1["@:{init~rs}"](); //准备显示矩形
        cursor_1["@:{root.show.by.type~rs}"]('move'); //全局显示可移动的鼠标样式
        let allowedTotalCount = ctrl['@:{allowed.total.count~rs}'], //获取当前元素一共能添加多少个
        allowedStageCount = ctrl['@:{allowed.stage.count~rs}'], //获取当前元素允许向设计区添加多少个
        allCount = 0, stageCount = 0;
        if (allowedTotalCount || allowedStageCount) {
            let { '@:{generic.all#elements~rs}': allElements } = stage_generic_1["@:{generic#get.all.elements.and.map~rs}"]();
            allCount = stage_generic_1["@:{generic#filter.elements~rs}"](allElements, ctrl.type).length; //获取当前一共添加了多少个
            stageCount = stage_generic_1["@:{generic#filter.elements~rs}"](State.get('@:{global#stage.elements~rs}'), ctrl.type).length; //获取当前设计区添加了多少个
        }
        let nearestElements = []; //吸附对齐的其它元素
        let page = State.get('@:{global#stage.page~rs}'), isSpecialHod = ctrl.type == 'hod-header' ||
            ctrl.type == 'hod-footer', supportSnapElement = const_1['@:{const#page.enable.snap.align.elements~rs}'] &&
            !isSpecialHod && !page.readonly, //头尾元素手动时，不需要使用吸附对齐到其它元素，只读模式关闭对齐功能
        snapElement = page.snapElement; //
        let pos = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, snapOffset = const_1['@:{const#drag.snap.to.other.element.offset~rs}'] * scale;
        let startX = beginX, startY = beginY, testX, testY, sizesMap, aberration;
        //元素吸附
        if (supportSnapElement) {
            aberration = const_1['@:{const#unit.px.aberration~rs}']();
            //先计算出其它元素的可对齐坐标
            let { '@:{generic.all#elements~rs}': allElements } = stage_generic_1['@:{generic#get.all.elements.and.map~rs}']();
            let alignElements = stage_align_1['@:{align#query.align.elements~rs}'](allElements);
            nearestElements = alignElements['@:{align.queried#align.elements.sizes~rs}'];
            pos = alignElements['@:{align.queried#root.bound~rs}'];
            let sInfo = stage_generic_1['@:{generic#query.test.position.and.sizes~rs}'](0, 0, [{
                    '@:{align.queried#left~rs}': 0,
                    '@:{align.queried#top~rs}': 0,
                    '@:{align.queried#ctrl~rs}': ctrl,
                    '@:{align.queried#width~rs}': width,
                    '@:{align.queried#height~rs}': height,
                }]);
            testX = sInfo['@:{test.x~rs}'];
            testY = sInfo['@:{test.y~rs}'];
            sizesMap = sInfo['@:{sizes.map~rs}'];
        }
        //开始坐标，拖动时以元素中心为移动点
        startX -= width / 2 + pos.x;
        startY -= height / 2 + pos.y;
        let offsetX = 0, offsetY = 0, moveInfo, altPressed = snapElement ? altKey : !altKey, lastHoverNode, lastHod, 
        //0 => top 1 => right 2 => bottom 3 => left 
        maxWidth = stage.scrollWidth - StagePadding[3], maxHeight = stage.scrollHeight - StagePadding[0], scrollOffsetX = 0, scrollOffsetY = 0;
        let moveCallback = (magixEvent) => {
            if (!moveInfo)
                return;
            if (magixEvent) {
                scrollOffsetY = -magixEvent['@:{interval.move.event#y~rs}'];
                scrollOffsetX - magixEvent['@:{interval.move.event#x~rs}'];
            }
            if (!moved) { //在移动时，如果是首次回调，则更多面板需要隐藏
                if (hide) {
                    moreNode.style.display = 'none';
                }
                moved = 1;
            }
            //Follower["@:{show}"](ex);
            //触发工具栏拖动事件，并把相关的信息传递出去
            //console.log(nearestElements);
            let { pageX, pageY } = moveInfo;
            pageY -= window.scrollY;
            pageX -= window.scrollX;
            offsetX = pageX - beginX;
            offsetY = pageY - beginY;
            let hoverNode = index_3["@:{from.point~rs}"](moveInfo.clientX, moveInfo.clientY), insideStageZone = inside(hoverNode, stage);
            let lastElement = nearestElements[nearestElements.length - 1];
            if (hoverNode != lastHoverNode) {
                lastHod = stage_elements_1['@:{elements#get.best.hod~rs}'](hoverNode, ctrl);
                lastHoverNode = hoverNode;
                //新容器装入，旧容器移除
                if (lastElement && (!lastHod ||
                    lastElement['@:{align.queried#mask.id~rs}'] != lastHod['@:{mask.id~rs}'])) {
                    if (lastElement['@:{align.queried#mask.id~rs}']) {
                        nearestElements.pop();
                    }
                }
            }
            if (supportSnapElement) { //启用元素吸附
                if (insideStageZone) { //在设计区才判断
                    if (!altPressed && //未按alt键
                        lastHod &&
                        lastElement['@:{align.queried#mask.id~rs}'] != lastHod['@:{mask.id~rs}']) {
                        let maskNode = node(lastHod['@:{mask.id~rs}']);
                        if (maskNode) {
                            let db = maskNode.getBoundingClientRect();
                            nearestElements.push({
                                '@:{align.queried#type~rs}': Stage_Line,
                                '@:{align.queried#mask.id~rs}': lastHod['@:{mask.id~rs}'],
                                '@:{align.queried#left~rs}': db.x - pos.x - scrollOffsetX,
                                '@:{align.queried#top~rs}': db.y - pos.y - scrollOffsetY,
                                '@:{align.queried#width~rs}': db.width,
                                '@:{align.queried#height~rs}': db.height
                            });
                        }
                    }
                    //console.log(nearestElements);
                    let snapInfo = stage_align_1['@:{align#find.and.fire.align.position~rs}'](nearestElements, startX, offsetX, startY, offsetY, sizesMap, testX, testY, 0, 0, altPressed, snapOffset, aberration, scrollOffsetX, scrollOffsetY, maxWidth, maxHeight);
                    offsetX = snapInfo['@:{align#new.offset.x~rs}'];
                    offsetY = snapInfo['@:{align#new.offset.y~rs}'];
                }
                else {
                    stage_align_1['@:{align#reset.snap.lines~rs}']();
                }
            }
            State.fire('@:{event#toolbox.drag.element.move~rs}', {
                width,
                height,
                ctrl,
                stage: insideStageZone,
                hod: lastHod,
                allowedTotal: allowedTotalCount,
                total: allCount,
                allowedStage: allowedStageCount,
                count: stageCount,
                node: hoverNode,
                pageX: startX + offsetX + pos.x,
                pageY: startY + offsetY + pos.y
            });
            //触发鼠标移动事件，用于贴边滚动
            State.fire('@:{event#drag.element.move~rs}', moveInfo);
            if (magixEvent && !magixEvent['@:{interval.move.event#called~rs}']) {
                magixEvent['@:{interval.move.event#called~rs}'] = 1;
                magixEvent['@:{interval.move.event#ready~rs}']();
            }
        };
        let watchKeypress = e => {
            altPressed = snapElement ? e['@:{keypress#alt.key~rs}'] : !e['@:{keypress#alt.key~rs}'];
            moveCallback();
        };
        //如果按alt键，则需要实时响应界面，即拖动过程中停下来，未松开鼠标，而此时按alt键，则界面需要实时显示或隐藏吸附线，同时元素做偏移
        State.on('@:{event#stage.key.press~rs}', watchKeypress);
        //如果设计区滚动，鼠标未动，则辅助线也需要实时更新
        State.on('@:{event#stage.interval.move~rs}', moveCallback);
        this['@:{drag.drop~rs}'](e, ex => {
            moveInfo = ex;
            moveCallback();
        }, (ex) => {
            State.off('@:{event#stage.key.press~rs}', watchKeypress);
            State.off('@:{event#stage.interval.move~rs}', moveCallback);
            if (hide) {
                moreNode.style.display = '';
            }
            rootClassList.remove('rd-_designer_header_less_-header-upon-select');
            //拖动结束，隐藏矩形
            select_1["@:{hide~rs}"]();
            //恢复鼠标形状
            cursor_1["@:{root.hide~rs}"]();
            State.set({
                '@:{global#memory.cache.element~rs}': [src] //一次性添加多个，只需要向这个数组添加其它元素即可
            });
            if (!moved) { //如果未移动过，则是点击添加
                //位置随机到左上角
                State.fire('@:{event#toolbox.add.element~rs}', {
                    // width,
                    // height,
                    pageX: stage.scrollLeft + ((random() * 50) | 0),
                    pageY: stage.scrollTop + ((random() * 50) | 0)
                });
                return;
            }
            if (ex) {
                //获取当前鼠标下的节点，并
                let hoverNode = index_3["@:{from.point~rs}"](ex.clientX, ex.clientY);
                State.fire('@:{event#toolbox.add.element~rs}', {
                    node: hoverNode,
                    // width,
                    // height,
                    pageX: startX + offsetX + pos.x,
                    pageY: startY + offsetY + pos.y, // + (list.length - i) * 20
                });
                State.fire('@:{event#drag.element.stop~rs}');
                if (supportSnapElement) {
                    State.fire('@:{event#stage.find.snap.element~rs}');
                }
            }
        });
    },
    '@:{preview~rs}<click>'() {
        let cavans = node('_rd_so');
        this['@:{cached.screen.size.width~rs}'] = screen.width;
        this['@:{cached.screen.size.height~rs}'] = screen.height;
        for (let fs of Fullscreens) {
            if (cavans[fs]) {
                cavans[fs]();
                break;
            }
        }
    },
    '@:{save~rs}<click>'(e) {
        if (!e['@:{halt~rs}']) {
            State.fire('@:{event#stage.save.content~rs}');
        }
    },
    // '@:{display}<click>'() {
    //     let old = this['@:{display.post.fn}'];
    //     if (old) {
    //         Runner["@:{task.remove.background}"](old);
    //     }
    //     this['@:{display.try.send.message}'] = 0;
    //     let w = window.open(DEBUG ? './display-debug.html' : './display.html', '@:{display}');
    //     w.focus();
    //     let post = () => {
    //         console.log(w);
    //         w.postMessage(ToJSON(), '*');
    //         this['@:{display.try.send.message}']++;
    //         if (this['@:{display.try.send.message}'] > 20) {
    //             Runner["@:{task.remove.background}"](post);
    //         }
    //     };
    //     Runner["@:{task.add.background}"](400, this['@:{display.post.fn}'] = post);
    // },
    '@:{print~rs}<click>'() {
        if (const_1['@:{const#new.page.print~rs}']) {
            //this.alert('打印功能正开发中...');
            let old = this['@:{printer.post.fn~rs}'];
            if (old) {
                index_4["@:{task.remove.background~rs}"](old);
            }
            this['@:{printer.try.send.message~rs}'] = 0;
            let w = window.open(DEBUG ? './print-debug.html' : './print.html', '@:{printer~rs}');
            w.focus();
            let origin = location.protocol + '//' + location.host;
            let post = () => {
                w.postMessage(tojson_1(), origin);
                this['@:{printer.try.send.message~rs}']++;
                if (this['@:{printer.try.send.message~rs}'] > 20) {
                    index_4["@:{task.remove.background~rs}"](post);
                }
            };
            index_4["@:{task.add.background~rs}"](400, this['@:{printer.post.fn~rs}'] = post);
        }
        else {
            this.mxDialog("designer/print", {
                width: max(1200, screen.width - 100)
            });
        }
    },
    '@:{help~rs}<click>'() {
        State.fire('@:{event#stage.key.press~rs}', {
            '@:{keypress#is.key.down~rs}': 1,
            '@:{keypress#shift.key~rs}': 1,
            '@:{keypress#code~rs}': keyboard_1['@:{key#slash~rs}']
        });
    },
    '@:{show.examples~rs}<click>'() {
        example_1["@:{show~rs}"](this);
    },
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.origin == origin &&
            e.data == '@:{printer.message.received~rs}') {
            index_4["@:{task.remove.background~rs}"](this['@:{printer.post.fn~rs}']);
        } /* else if (e.data == '@:{display.message.received}') {
            Runner["@:{task.remove.background}"](this['@:{display.post.fn}']);
        }*/
    },
    '$doc<fullscreenchange,webkitfullscreenchange>'() {
        let doc = document;
        let element = doc.fullscreenElement ||
            doc.webkitCurrentFullScreenElement ||
            doc.mozFullScreenElement || null;
        State.fire('@:{event#preview~rs}', {
            '@:{fullscreen~rs}': 1,
            '@:{width~rs}': this['@:{cached.screen.size.width~rs}'],
            '@:{height~rs}': this['@:{cached.screen.size.height~rs}'],
            '@:{is.full.screen~rs}': !!element
        });
    }
}).merge(index_3, index_2);

});