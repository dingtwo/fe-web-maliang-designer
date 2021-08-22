/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/axis",["magix5","../gallery/mx-dragdrop/index","../gallery/mx-pointer/cursor","../gallery/mx-runner/index","../i18n/index","./axis-shadow","./const","./history","./keyboard","./transform","./axis-xrod","./axis-yrod"],(require,exports,module)=>{
require("./axis-xrod");
require("./axis-yrod");
let $quick_bx_static_text;
let $quick_by_static_text;
let $quick_bA_0_static_attr={'class': 'rd-_assets_index_less_-color-666 rd-_assets_index_less_-cursor-default rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-pa rd-_designer_axis_less_-y-help-line-text',};
let $quick_bA_1_static_attr={'class': 'rd-_assets_index_less_-color-666 rd-_assets_index_less_-cursor-default rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-pa rd-_designer_axis_less_-x-help-line-text',};
let $quick_bA_2_static_attr={'class': 'rd-_assets_index_less_-fontsize-14 rd-_assets_index_less_-iconfont',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../gallery/mx-dragdrop/index");
let cursor_1 = require("../gallery/mx-pointer/cursor");
let index_2 = require("../gallery/mx-runner/index");
let index_3 = require("../i18n/index");
let axis_shadow_1 = require("./axis-shadow");
let const_1 = require("./const");
let history_1 = require("./history");
let keyboard_1 = require("./keyboard");
let transform_1 = require("./transform");
let { abs, max, round } = Math;
let { State, node, applyStyle, mark, View, inside, attach, detach } = magix_1;
applyStyle("rd-_designer_axis_less_","\n.rd-_designer_axis_less_-z-index-200 {\nz-index:200;\n}\n.rd-_designer_axis_less_-axis-x {\nheight:20px;\nborder-bottom:1px solid #ccc;\n}\n.rd-_designer_axis_less_-axis-x-line {\ntop:0;\nbackground:#47B34E;\n}\n.rd-_designer_axis_less_-axis-y-line {\nleft:0;\nbackground:#47B34E;\nheight:1px;\n}\n.rd-_designer_axis_less_-axis-y {\nwidth:20px;\nborder-right:solid 1px #ccc;\n}\n.rd-_designer_axis_less_-axis-corner {\nleft:0;\ntop:0;\nwidth:20px;\nheight:20px;\nborder-bottom:solid 1px #ccc;\nborder-right:solid 1px #ccc;\nz-index:201;\n}\n.rd-_designer_axis_less_-axis-x-tip {\nleft:5px;\ntop:22px;\n}\n.rd-_designer_axis_less_-axis-y-tip {\ntop:2px;\nleft:24px;\n}\n.rd-_designer_axis_less_-y-axis-help,\n.rd-_designer_axis_less_-x-axis-help {\nz-index:100;\n}\n.rd-_designer_axis_less_-x-axis-help {\ntop:20px;\n}\n.rd-_designer_axis_less_-y-axis-help {\nleft:20px;\n}\n.rd-_designer_axis_less_-x-axis-help-line {\nwidth:1px;\nborder-left:solid 1px #47B34E;\n}\n.rd-_designer_axis_less_-y-axis-help-line {\nheight:1px;\nbackground:#47B34E;\n}\n.rd-_designer_axis_less_-x-help-line-icon {\nleft:-15px;\ntop:4px;\nopacity:0.7;\n}\n.rd-_designer_axis_less_-x-help-line-text {\nleft:4px;\ntop:2px;\n}\n.rd-_designer_axis_less_-y-help-line-icon {\nleft:4px;\ntop:-15px;\nopacity:0.7;\n}\n.rd-_designer_axis_less_-x-help-line-icon:hover,\n.rd-_designer_axis_less_-y-help-line-icon:hover {\nopacity:1;\n}\n.rd-_designer_axis_less_-y-help-line-text {\nleft:4px;\ntop:2px;\n}\n.rd-_designer_axis_less_-y-help-line-move {\nwidth:20px;\ntop:-1px;\nheight:3px;\nleft:30px;\nbackground:#47B34E;\ncursor:ns-resize;\n}\n.rd-_designer_axis_less_-x-help-line-move {\nwidth:3px;\nleft:-2px;\nheight:20px;\ntop:20px;\nbackground:#47B34E;\ncursor:ew-resize;\n}\n.rd-_designer_axis_less_-y-help-line-move:focus,\n.rd-_designer_axis_less_-x-help-line-move:focus {\noutline:solid 1px #47B34E;\nbackground:#fff;\n}\n.rd-_designer_axis_less_-shadow {\nbackground:rgba(71, 179, 78, 0.3);\n}\n");
let passiveOptions = {
    passive: true
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	show,
	sTop,
	yHelpers,
	abs,
	yStart,
	scale,
	vWidth,
	i18n,
	toUnit,
	sLeft,
	xHelpers,
	xStart,
	vHeight,
	width,
	decimals,
	unit,
	xEnd,
	step,
	space,
	hbar,
	bar,
	barColor,
	height,
	yEnd,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1,
$$_title,
$text;
($__line=1,$__art='{{let current}}','');$__ctrl='<%let current%>';let current;$vnode_1=[];$__line=3;$__art="{{each yHelpers as yHelp yi}}";$__ctrl="for(let $q_c_acziyohh=yHelpers.length,yi=0;yi<$q_c_acziyohh;yi++){let yHelp=yHelpers[yi];";
for(let $q_c_acziyohh=yHelpers.length,yi=0;yi<$q_c_acziyohh;yi+=1){
let yHelp=yHelpers[yi];
($__line=4,$__art='{{current=abs(yStart)+yHelp*scale+20}}','');$__ctrl='<%current=abs(yStart)+yHelp*scale+20%>';current=abs(yStart)+yHelp*scale+20;$vnode_3=[$quick_bx_static_text||($quick_bx_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_designer_axis_less_-y-help-line-icon','title': ($__line=6,$__art='{{=i18n(\'@:{lang#axis.delete.line~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#axis.delete.line~rs}\')%>',(i18n('@:{lang#axis.delete.line~rs}'))),'mx5-click': $viewId+'@:{delete.help.line~rs}({type:\'y\',i:'+($__line=6,$__art='{{=yi}}',$__ctrl='<%=yi%>',(yi))+'})',},$vnode_3)];$vnode_3=[$createVNode(0,($__line=7,$__art='{{=toUnit(yHelp)}}',$__ctrl='<%=toUnit(yHelp)%>',(toUnit(yHelp))))];$vnode_2.push($createVNode('span',$quick_bA_0_static_attr,$vnode_3),$createVNode('span',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none rd-_designer_axis_less_-y-help-line-move','mx5-pointerdown': $viewId+'@:{drag.help.line~rs}({type:\'y\',i:'+($__line=8,$__art='{{=yi}}',$__ctrl='<%=yi%>',(yi))+',c:'+($__line=8,$__art='{{=current}}',$__ctrl='<%=current%>',(current))+'})','title': ($__line=8,$__art='{{=i18n(\'@:{lang#axis.move.line~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#axis.move.line~rs}\')%>',(i18n('@:{lang#axis.move.line~rs}'))),'tabindex': 0,'mx5-keydown': $viewId+'@:{move.help.line~rs}({type:\'y\',i:'+($__line=8,$__art='{{=yi}}',$__ctrl='<%=yi%>',(yi))+'})',}));$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-transform-y-n50 rd-_designer_axis_less_-y-axis-help-line','style': 'width:'+($__line=5,$__art='{{=vWidth}}',$__ctrl='<%=vWidth%>',(vWidth))+'px;top:'+($__line=5,$__art='{{=current}}',$__ctrl='<%=current%>',(current))+'px',},$vnode_2));
};$$_class='rd-_designer_axis_less_-y-axis-help rd-_assets_index_less_-pr'+($__line=2,$__art='{{if !show}}','');$__ctrl='<%if(!show){%>';if(!show){;$$_class+=' rd-_assets_index_less_-none'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'style': 'transform:translateY(-'+($__line=2,$__art='{{=sTop}}',$__ctrl='<%=sTop%>',(sTop))+'px)','id': '_rd_'+($__line=2,$__art='{{=$viewId}}','')+$viewId+'_y_help','class': $$_class,},$vnode_1)];$vnode_1=[];$__line=13;$__art="{{each xHelpers as xHelp xi}}";$__ctrl="for(let $q_c_drvqqgw=xHelpers.length,xi=0;xi<$q_c_drvqqgw;xi++){let xHelp=xHelpers[xi];";
for(let $q_c_drvqqgw=xHelpers.length,xi=0;xi<$q_c_drvqqgw;xi+=1){
let xHelp=xHelpers[xi];
($__line=14,$__art='{{current=abs(xStart)+xHelp*scale}}','');$__ctrl='<%current=abs(xStart)+xHelp*scale%>';current=abs(xStart)+xHelp*scale;$vnode_3=[$quick_bx_static_text||($quick_bx_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_designer_axis_less_-x-help-line-icon','title': ($__line=16,$__art='{{=i18n(\'@:{lang#axis.delete.line~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#axis.delete.line~rs}\')%>',(i18n('@:{lang#axis.delete.line~rs}'))),'mx5-click': $viewId+'@:{delete.help.line~rs}({type:\'x\',i:'+($__line=16,$__art='{{=xi}}',$__ctrl='<%=xi%>',(xi))+'})',},$vnode_3)];$vnode_3=[$createVNode(0,($__line=17,$__art='{{=toUnit(xHelp)}}',$__ctrl='<%=toUnit(xHelp)%>',(toUnit(xHelp))))];$vnode_2.push($createVNode('span',$quick_bA_1_static_attr,$vnode_3),$createVNode('span',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none rd-_designer_axis_less_-x-help-line-move','mx5-pointerdown': $viewId+'@:{drag.help.line~rs}({type:\'x\',i:'+($__line=18,$__art='{{=xi}}',$__ctrl='<%=xi%>',(xi))+',c:'+($__line=18,$__art='{{=current}}',$__ctrl='<%=current%>',(current))+'})','title': ($__line=18,$__art='{{=i18n(\'@:{lang#axis.move.line~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#axis.move.line~rs}\')%>',(i18n('@:{lang#axis.move.line~rs}'))),'tabindex': 0,'mx5-keydown': $viewId+'@:{move.help.line~rs}({type:\'x\',i:'+($__line=18,$__art='{{=xi}}',$__ctrl='<%=xi%>',(xi))+'})',}));$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-transform-x-n50 rd-_designer_axis_less_-x-axis-help-line','style': 'height:'+($__line=15,$__art='{{=vHeight}}',$__ctrl='<%=vHeight%>',(vHeight))+'px;left:'+($__line=15,$__art='{{=current}}',$__ctrl='<%=current%>',(current))+'px',},$vnode_2));
};$$_class='rd-_designer_axis_less_-x-axis-help rd-_assets_index_less_-pr'+($__line=12,$__art='{{if !show}}','');$__ctrl='<%if(!show){%>';if(!show){;$$_class+=' rd-_assets_index_less_-none'+($__line=12,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('div',{'style': 'transform:translateX(-'+($__line=12,$__art='{{=sLeft}}',$__ctrl='<%=sLeft%>',(sLeft))+'px)','id': '_rd_'+($__line=12,$__art='{{=$viewId}}','')+$viewId+'_x_help','class': $$_class,},$vnode_1));$vnode_2=[$createVNode('div',{'mx5-owner': $viewId,'$': 'decimals,width,xStart,xEnd,step,space,scale,hbar,bar,barColor','mx5-view': 'designer/axis-xrod?decimals='+($__line=25,$__art='{{#decimals}}',$__ctrl='<%#decimals,\'auto_key_decimals\'%>',$keyOf($refData,decimals,'auto_key_decimals'))+'&unit='+($__line=26,$__art='{{=unit}}',$__ctrl='<%=$encodeUrl(unit)%>',($encodeUrl(unit)))+'&width='+($__line=27,$__art='{{#width}}',$__ctrl='<%#width,\'auto_key_width\'%>',$keyOf($refData,width,'auto_key_width'))+'&xStart='+($__line=28,$__art='{{#xStart}}',$__ctrl='<%#xStart,\'auto_key_xStart\'%>',$keyOf($refData,xStart,'auto_key_xStart'))+'&xEnd='+($__line=29,$__art='{{#xEnd}}',$__ctrl='<%#xEnd,\'auto_key_xEnd\'%>',$keyOf($refData,xEnd,'auto_key_xEnd'))+'&step='+($__line=30,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&space='+($__line=31,$__art='{{#space}}',$__ctrl='<%#space,\'auto_key_space\'%>',$keyOf($refData,space,'auto_key_space'))+'&scale='+($__line=32,$__art='{{#scale}}',$__ctrl='<%#scale,\'auto_key_scale\'%>',$keyOf($refData,scale,'auto_key_scale'))+'&hbar='+($__line=33,$__art='{{#hbar}}',$__ctrl='<%#hbar,\'auto_key_hbar\'%>',$keyOf($refData,hbar,'auto_key_hbar'))+'&bar='+($__line=34,$__art='{{#bar}}',$__ctrl='<%#bar,\'auto_key_bar\'%>',$keyOf($refData,bar,'auto_key_bar'))+'&barColor='+($__line=35,$__art='{{#barColor}}',$__ctrl='<%#barColor,\'auto_key_barColor\'%>',$keyOf($refData,barColor,'auto_key_barColor')),'class': 'rd-_assets_index_less_-hp100','style': 'width:'+($__line=24,$__art='{{=width}}',$__ctrl='<%=width%>',(width))+'px',})];$vnode_1=[$createVNode('div',{'class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pr rd-_assets_index_less_-wp100 rd-_designer_axis_less_-axis-x rd-_designer_axis_less_-z-index-200','id': '_rd_'+($__line=23,$__art='{{=$viewId}}','')+$viewId+'_x',},$vnode_2)];$vnode_3=[$quick_by_static_text||($quick_by_static_text=$createVNode(0,'-'))];$vnode_2=[$createVNode('span',{'class': 'rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-pa rd-_designer_axis_less_-axis-x-tip','id': '_rd_'+($__line=38,$__art='{{=$viewId}}','')+$viewId+'_x_tip',},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-none rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-transform-x-n50 rd-_assets_index_less_-width-1 rd-_designer_axis_less_-axis-x-line rd-_designer_axis_less_-z-index-200','id': '_rd_'+($__line=37,$__art='{{=$viewId}}','')+$viewId+'_x_line','style': 'height:'+($__line=37,$__art='{{=vHeight+20}}',$__ctrl='<%=vHeight+20%>',(vHeight+20))+'px',},$vnode_2));$vnode_0.push($createVNode('div',{'mx5-pointermove': $viewId+'@:{show.x.line~rs}()','mx5-pointerout': $viewId+'@:{hide.x.line~rs}()','mx5-click': $viewId+'@:{add.x.help.line~rs}()',},$vnode_1));$vnode_2=[$createVNode('div',{'mx5-owner': $viewId,'$': 'decimals,height,yStart,yEnd,step,space,scale,hbar,bar,barColor','mx5-view': 'designer/axis-yrod?decimals='+($__line=44,$__art='{{#decimals}}',$__ctrl='<%#decimals,\'auto_key_decimals\'%>',$keyOf($refData,decimals,'auto_key_decimals'))+'&unit='+($__line=45,$__art='{{=unit}}',$__ctrl='<%=$encodeUrl(unit)%>',($encodeUrl(unit)))+'&height='+($__line=46,$__art='{{#height}}',$__ctrl='<%#height,\'auto_key_height\'%>',$keyOf($refData,height,'auto_key_height'))+'&yStart='+($__line=47,$__art='{{#yStart}}',$__ctrl='<%#yStart,\'auto_key_yStart\'%>',$keyOf($refData,yStart,'auto_key_yStart'))+'&yEnd='+($__line=48,$__art='{{#yEnd}}',$__ctrl='<%#yEnd,\'auto_key_yEnd\'%>',$keyOf($refData,yEnd,'auto_key_yEnd'))+'&step='+($__line=49,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&space='+($__line=50,$__art='{{#space}}',$__ctrl='<%#space,\'auto_key_space\'%>',$keyOf($refData,space,'auto_key_space'))+'&scale='+($__line=51,$__art='{{#scale}}',$__ctrl='<%#scale,\'auto_key_scale\'%>',$keyOf($refData,scale,'auto_key_scale'))+'&hbar='+($__line=52,$__art='{{#hbar}}',$__ctrl='<%#hbar,\'auto_key_hbar\'%>',$keyOf($refData,hbar,'auto_key_hbar'))+'&bar='+($__line=53,$__art='{{#bar}}',$__ctrl='<%#bar,\'auto_key_bar\'%>',$keyOf($refData,bar,'auto_key_bar'))+'&barColor='+($__line=54,$__art='{{#barColor}}',$__ctrl='<%#barColor,\'auto_key_barColor\'%>',$keyOf($refData,barColor,'auto_key_barColor')),'style': 'height:'+($__line=43,$__art='{{=height}}',$__ctrl='<%=height%>',(height))+'px',})];$vnode_1=[$createVNode('div',{'class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pr rd-_designer_axis_less_-axis-y rd-_designer_axis_less_-z-index-200','style': 'height:'+($__line=42,$__art='{{=vHeight}}',$__ctrl='<%=vHeight%>',(vHeight))+'px','id': '_rd_'+($__line=42,$__art='{{=$viewId}}','')+$viewId+'_y',},$vnode_2)];$vnode_3=[$quick_by_static_text||($quick_by_static_text=$createVNode(0,'-'))];$vnode_2=[$createVNode('span',{'class': 'rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-pa rd-_designer_axis_less_-axis-y-tip','id': '_rd_'+($__line=57,$__art='{{=$viewId}}','')+$viewId+'_y_tip',},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-none rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-transform-y-n50 rd-_designer_axis_less_-axis-y-line rd-_designer_axis_less_-z-index-200','id': '_rd_'+($__line=56,$__art='{{=$viewId}}','')+$viewId+'_y_line','style': 'width:'+($__line=56,$__art='{{=vWidth+20}}',$__ctrl='<%=vWidth+20%>',(vWidth+20))+'px',},$vnode_2));$vnode_0.push($createVNode('div',{'mx5-pointermove': $viewId+'@:{show.y.line~rs}()','mx5-pointerout': $viewId+'@:{hide.y.line~rs}()','mx5-click': $viewId+'@:{add.y.help.line~rs}()',},$vnode_1));($__line=60,$__art='{{set lines=xHelpers.length+yHelpers.length}}','');$__ctrl='<%let lines=xHelpers.length+yHelpers.length;%>';let lines=xHelpers.length+yHelpers.length;;$vnode_1=[];$__line=62;$__art="{{if lines}}";$__ctrl="if(lines){";
if(lines){
$text=($__line=63,$__art='{{if show}}','');$__ctrl='<%if(show){%>';if(show){;$text+=''+($__line=63,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$text+=''+($__line=63,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2=[$createVNode(0,$text)];$vnode_1.push($createVNode('i',$quick_bA_2_static_attr,$vnode_2));
};$$_class='rd-_designer_axis_less_-axis-corner rd-_assets_index_less_-pa rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-gray'+($__line=61,$__art='{{if lines}}','');$__ctrl='<%if(lines){%>';if(lines){;$$_class+=' rd-_assets_index_less_-cursor-pointer'+($__line=61,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_title=($__line=61,$__art='{{if lines}}','');$__ctrl='<%if(lines){%>';if(lines){;$$_title+=''+($__line=61,$__art='{{=i18n(show?\'@:{lang#axis.hide.all.lines~rs}\':\'@:{lang#axis.show.all.lines}\')}}',$__ctrl='<%=i18n(show?\'@:{lang#axis.hide.all.lines~rs}\':\'@:{lang#axis.show.all.lines~rs}\')%>',(i18n(show?'@:{lang#axis.hide.all.lines~rs}':'@:{lang#axis.show.all.lines~rs}')))+'(H)'+($__line=61,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('div',{'mx5-click': $viewId+'@:{toggle.help.lines~rs}({lines:'+($__line=61,$__art='{{=lines}}',$__ctrl='<%=lines%>',(lines))+'})','class': $$_class,'title': $$_title,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/axis.html'; throw msg; }  } ,
    init() {
        //监听设计区域的滚动事件，来同步标尺的位置
        let n = node('_rd_stage');
        let scrollCallback = this['@:{sync.scroll~rs}'].bind(this);
        attach(n, 'scroll', scrollCallback, passiveOptions);
        this['@:{scroll.node~rs}'] = n;
        this.set({
            abs,
            toUnit(v) {
                return const_1['@:{const#scale.to.unit~rs}'](const_1['@:{const#to.unit~rs}'](v));
            },
            bar: 4,
            hbar: 12,
            barColor: '#aaa' //颜色
        });
        let update = this['@:{debounce~rs}'](this.render, 30);
        let toggleHelpLine = e => {
            if (e['@:{keypress#is.prevent.actions~rs}'] ||
                !e['@:{keypress#is.key.down~rs}'] ||
                e['@:{keypress#active.is.input~rs}'])
                return;
            let { '@:{keypress#code~rs}': code, '@:{keypress#shift.key~rs}': shiftKey, '@:{keypress#ctrl.key~rs}': ctrlKey, '@:{keypress#alt.key~rs}': altKey } = e;
            if (code == keyboard_1['@:{key#h~rs}']) {
                e['@:{keypress#prevent.default~rs}']();
                if (altKey) {
                    this.render({ '@:{clear~rs}': 1 });
                }
                else if (!(shiftKey || ctrlKey)) {
                    this.render({ '@:{toggle~rs}': 1 });
                }
            }
        };
        this['@:{cached.rerender~rs}'] = this['@:{debounce~rs}'](this['@:{rerender~rs}'], 20);
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.scale.change~rs}', update);
        State.on('@:{event#stage.page.change~rs}', update);
        State.on('@:{event#stage.size.change~rs}', update);
        State.on('@:{event#stage.page.and.elements.change~rs}', update);
        State.on('@:{event#stage.key.press~rs}', toggleHelpLine);
        axis_shadow_1['@:{axis.shadow#setup~rs}']();
        this.on('destroy', () => {
            detach(n, 'scroll', scrollCallback);
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.scale.change~rs}', update);
            State.off('@:{event#stage.size.change~rs}', update);
            State.off('@:{event#stage.page.change~rs}', update);
            State.off('@:{event#stage.page.and.elements.change~rs}', update);
            State.off('@:{event#stage.key.press~rs}', toggleHelpLine);
            axis_shadow_1['@:{axis.shadow#teardown~rs}']();
        });
    },
    async '@:{rerender~rs}'() {
        if (this['@:{can.render~rs}']) {
            let n = this['@:{scroll.node~rs}'];
            let sa = State.get('@:{global#stage.scale~rs}');
            //以下计算滚动区域的宽和高，当区域小于电脑屏幕时，则使用电脑屏幕的尺寸
            //多加的padding是在屏幕外依然画上标尺，防止缩放瞬间显示空白
            let width = max(n.scrollWidth, window.innerWidth) + const_1["@:{const#axis.padding~rs}"];
            let height = max(n.scrollHeight, window.innerHeight) + const_1["@:{const#axis.padding~rs}"];
            let xStart = 0; //水平标尺的起始值
            let xEnd = 0; //水平结束值
            let axisWidth = const_1["@:{const#axis.size~rs}"]; //标尺尺寸
            let yStart = 0; //垂直标尺的起始值
            let yEnd = 0; //结束值
            let outer = node('_rd_so');
            let offset = transform_1['@:{transform#get.stage.dom.rect~rs}']();
            let outerOffset = outer.getBoundingClientRect();
            //计算设计区的左上角坐标
            let left = round(offset.x - outerOffset.x);
            //水平开始位置设计区左上角坐标加标尺宽度
            xStart = left + axisWidth;
            //结束
            xEnd = width - xStart;
            //y同理
            yStart = round(offset.y - outerOffset.y);
            yEnd = height - yStart;
            let vHeight = n.offsetHeight; //设计区的可视尺寸
            let vWidth = n.offsetWidth;
            let unit = State.get('@:{global#stage.unit~rs}');
            let map = const_1['@:{const#axis.unit.map~rs}'][unit] || const_1['@:{const#axis.unit.map~rs}']['px'];
            let si = map[sa];
            let m = mark(this, '@:{render~rs}');
            await this.digest({
                unit: State.get('@:{global#stage.unit~rs}'),
                decimals: map['@:{decimals~rs}'],
                sTop: n.scrollTop,
                sLeft: n.scrollLeft,
                width,
                scale: sa,
                space: si.space,
                step: si.step,
                height,
                xStart,
                xEnd,
                yStart,
                vHeight,
                vWidth,
                yEnd
            });
            if (m() &&
                !this['@:{x.axis~rs}']) {
                //缓存节点对象，防止反复读取
                this['@:{x.axis~rs}'] = node('_rd_' + this.id + '_x');
                this['@:{y.axis~rs}'] = node('_rd_' + this.id + '_y');
                this['@:{x.line~rs}'] = node('_rd_' + this.id + '_x_line');
                this['@:{y.line~rs}'] = node('_rd_' + this.id + '_y_line');
                this['@:{x.line.tip~rs}'] = node('_rd_' + this.id + '_x_tip');
                this['@:{y.line.tip~rs}'] = node('_rd_' + this.id + '_y_tip');
                this['@:{x.axis.help~rs}'] = node('_rd_' + this.id + '_x_help');
                this['@:{y.axis.help~rs}'] = node('_rd_' + this.id + '_y_help');
            }
        }
    },
    '@:{sync.scroll~rs}'() {
        let xNode = this['@:{x.axis~rs}'];
        let yNode = this['@:{y.axis~rs}'];
        let yHelpNode = this['@:{y.axis.help~rs}'];
        let xHelpNode = this['@:{x.axis.help~rs}'];
        let scroll = this['@:{scroll.node~rs}'];
        let top = scroll.scrollTop;
        let left = scroll.scrollLeft;
        if (xNode) { //水平标尺
            xNode.scrollLeft = left;
        }
        if (yNode) { //垂直标尺
            yNode.scrollTop = top;
        }
        if (xHelpNode) { //水平辅助线
            xHelpNode.style.transform = `translateX(-${left}px)`;
        }
        if (yHelpNode) { //垂直辅助线
            yHelpNode.style.transform = `translateY(-${top}px)`;
        }
        this.set({
            sLeft: left,
            sTop: top
        });
    },
    render(e) {
        let m = mark(this, '@:{render~rs}');
        let xHelpers = State.get('@:{global#stage.x.help.lines~rs}');
        let yHelpers = State.get('@:{global#stage.y.help.lines~rs}');
        let show = this.get('show');
        if (xHelpers.length ||
            yHelpers.length) {
            if (e) {
                if (e.type == '@:{event#history.shift.change~rs}') {
                    show = 1;
                }
                else if (e['@:{toggle~rs}']) {
                    show = !show;
                }
                else if (e['@:{clear~rs}']) {
                    xHelpers.length = 0;
                    yHelpers.length = 0;
                    history_1["@:{history#save~rs}"](history_1['@:{history#clear.help.line~rs}']);
                }
            }
        }
        else {
            show = 1;
        }
        State.set({
            '@:{global#stage.axis.show.help.lines~rs}': show
        });
        this.set({
            xHelpers,
            yHelpers,
            show
        });
        //因为设计区和标尺并不在一起，所以以下尝试在设计区就绪后再初始化标尺
        let test = () => {
            if (node('_rd_sc')) {
                index_2["@:{task.remove~rs}"](test);
                if (m()) {
                    this['@:{can.render~rs}'] = 1;
                    this['@:{rerender~rs}']();
                }
            }
        };
        index_2["@:{task.add~rs}"](20, test);
    },
    '@:{show.x.line~rs}<pointermove>'(e) {
        let preventKeypress = State.get('@:{global#stage.prevent.actions~rs}');
        let xNode = this['@:{x.axis~rs}'];
        if (preventKeypress || !xNode)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageX - offset.x; //实际坐标需要鼠标坐标减去节点的左上角坐标
        let start = this.get('xStart');
        let styles = this['@:{x.line~rs}'].style;
        styles.display = 'block';
        styles.left = v + 'px';
        let mm = v - start + xNode.scrollLeft;
        let scale = this.get('scale'); //根据缩放转化成需要显示的值
        let toUnit = this.get('toUnit');
        this['@:{x.line.tip~rs}'].innerText = toUnit(mm / scale);
    },
    '@:{hide.x.line~rs}<pointerout>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget) &&
            this['@:{x.line~rs}']) {
            this['@:{x.line~rs}'].style.display = 'none';
        }
    },
    '@:{show.y.line~rs}<pointermove>'(e) {
        let preventKeypress = State.get('@:{global#stage.prevent.actions~rs}');
        let yNode = this['@:{y.axis~rs}'];
        if (preventKeypress || !yNode)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageY - offset.y;
        let start = this.get('yStart');
        let styles = this['@:{y.line~rs}'].style;
        styles.display = 'block';
        styles.top = v + 'px';
        let mm = v - start - const_1["@:{const#axis.size~rs}"] + yNode.scrollTop;
        let scale = this.get('scale');
        let toUnit = this.get('toUnit');
        this['@:{y.line.tip~rs}'].innerText = toUnit(mm / scale);
    },
    '@:{hide.y.line~rs}<pointerout>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget) &&
            this['@:{y.line~rs}']) {
            this['@:{y.line~rs}'].style.display = 'none';
        }
    },
    '@:{add.x.help.line~rs}<click>'(e) {
        let xLine = this['@:{x.line~rs}'];
        if (!xLine)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageX - offset.x;
        xLine.style.display = 'none';
        let start = this.get('xStart');
        let xNode = this['@:{x.axis~rs}'];
        //计算需要显示的px单位的值
        let mm = ((v - start + xNode.scrollLeft) / this.get('scale')) | 0;
        let xHelpers = this.get('xHelpers');
        xHelpers.push(mm);
        State.set({
            '@:{global#stage.axis.show.help.lines~rs}': 1
        });
        this.digest({
            show: 1,
            xHelpers
        });
        State.fire('@:{event#stage.axis.help.lines.change~rs}');
        history_1["@:{history#save~rs}"](history_1['@:{history#add.help.line~rs}'], index_3('@:{lang#help.line.v~rs}'));
    },
    '@:{add.y.help.line~rs}<click>'(e) {
        let yLine = this['@:{y.line~rs}'];
        if (!yLine)
            return;
        yLine.style.display = 'none';
        let offset = this.root.getBoundingClientRect();
        let v = e.pageY - offset.y;
        let start = this.get('yStart');
        let yNode = this['@:{y.axis~rs}'];
        let mm = ((v - start - const_1["@:{const#axis.size~rs}"] + yNode.scrollTop) / this.get('scale')) | 0;
        let yHelpers = this.get('yHelpers');
        yHelpers.push(mm);
        State.set({
            '@:{global#stage.axis.show.help.lines~rs}': 1
        });
        this.digest({
            show: 1,
            yHelpers
        });
        State.fire('@:{event#stage.axis.help.lines.change~rs}');
        history_1["@:{history#save~rs}"](history_1['@:{history#add.help.line~rs}'], index_3('@:{lang#help.line.h~rs}'));
    },
    '@:{delete.help.line~rs}<click>'(e) {
        let { type, i } = e.params;
        let key = type + 'Helpers';
        let list = this.get(key);
        list.splice(i, 1);
        this.digest({
            [key]: list
        });
        State.fire('@:{event#stage.axis.help.lines.change~rs}');
        history_1["@:{history#save~rs}"](history_1['@:{history#delete.help.line~rs}'], index_3(type == 'x' ? '@:{lang#help.line.v~rs}' : '@:{lang#help.line.h~rs}'));
    },
    '@:{drag.help.line~rs}<pointerdown>'(e) {
        if (e.target != e.eventTarget) {
            return;
        }
        // let oldSelected = StageSelection["@:{selection#set}"]();
        // if (oldSelected) {//辅助线按下拖动时，清除编辑区元素的选中状态
        //     DHistory["@:{history#save}"](DHistory['@:{history#element.lost.focus}'], StageGeneric['@:{generic#query.element.name}'](oldSelected));
        // }
        let { type, i, c: current } = e.params;
        let key = type + 'Helpers';
        let list = this.get(key);
        let start = this.get(type + 'Start');
        let showedCursor = 0;
        State.set({
            '@:{global#stage.prevent.actions~rs}': 1
        });
        this['@:{drag.drop~rs}'](e, (evt) => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["@:{show~rs}"](e.eventTarget);
            }
            let oft;
            if (type == 'x') {
                oft = evt.pageX - e.pageX + current;
            }
            else {
                oft = evt.pageY - e.pageY + current - const_1["@:{const#axis.size~rs}"];
            }
            list[i] = ((oft - start) / this.get('scale')) | 0;
            this.digest({
                [key]: list
            });
        }, () => {
            State.set({
                '@:{global#stage.prevent.actions~rs}': 0
            });
            if (showedCursor) {
                cursor_1["@:{hide~rs}"]();
                history_1["@:{history#save~rs}"](history_1['@:{history#move.help.line~rs}'], index_3(type == 'x' ? '@:{lang#help.line.v~rs}' : '@:{lang#help.line.h~rs}'));
            }
        });
    },
    //通过键盘按键来移动辅助线
    '@:{move.help.line~rs}<keydown>'(e) {
        let step = e.shiftKey ? const_1["@:{const#keyboard.with.shift.move.step~rs}"] : const_1["@:{const#keyboard.move.step~rs}"];
        let { type, i } = e.params;
        let key = `${type}Helpers`;
        let list = this.get(key);
        let { code } = e;
        if (code == keyboard_1["@:{key#tab~rs}"]) { //按tab键时，需要把焦点移走
            e.eventTarget.blur();
            return;
        }
        else if (code == keyboard_1["@:{key#delete~rs}"] ||
            code == keyboard_1["@:{key#backspace~rs}"]) { //按删除键时，删除辅助线
            e.eventTarget.blur();
            list.splice(i, 1);
            this.digest({
                [key]: list
            });
            history_1["@:{history#save~rs}"](history_1['@:{history#delete.help.line~rs}'], index_3(type == 'x' ? '@:{lang#help.line.v~rs}' : '@:{lang#help.line.h~rs}'));
            return;
        }
        //不同方向的辅助线，键盘移动的方向键不同
        if (type == 'x' &&
            (code == keyboard_1["@:{key#left~rs}"] ||
                code == keyboard_1["@:{key#right~rs}"])) {
            if (code == keyboard_1["@:{key#left~rs}"]) {
                step *= -1;
            }
            list[i] += step;
            this.digest({
                [key]: list
            });
            history_1["@:{history#save~rs}"](history_1['@:{history#move.help.line~rs}'], index_3('@:{lang#help.line.v~rs}'), '@:{x.help.lines.keyboard.move~rs}', 500);
        }
        else if (type == 'y' &&
            (code == keyboard_1["@:{key#up~rs}"] ||
                code == keyboard_1["@:{key#down~rs}"])) {
            if (code == keyboard_1["@:{key#up~rs}"]) {
                step *= -1;
            }
            list[i] += step;
            this.digest({
                [key]: list
            });
            history_1["@:{history#save~rs}"](history_1['@:{history#move.help.line~rs}'], index_3('@:{lang#help.line.h~rs}'), '@:{y.help.lines.keyboard.move~rs}', 500);
        }
    },
    '@:{toggle.help.lines~rs}<click>'(e) {
        let { lines } = e.params;
        if (lines) {
            let show = !this.get('show');
            State.set({
                '@:{global#stage.axis.show.help.lines~rs}': show
            });
            this.digest({
                show
            });
        }
    },
    '$win<resize>'() {
        //窗口变化后，延时20ms更新界面
        this['@:{cached.rerender~rs}']();
    }
}).merge(index_1);

});