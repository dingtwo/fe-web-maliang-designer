/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-color/index",["magix5","../mx-dragdrop/index","../mx-monitor/index"],(require,exports,module)=>{
let $quick_ce_static_text;
let $quick_cf_static_text;
let $quick_dd_2_static_node;
let $quick_dd_3_static_node;
let $quick_dd_4_static_node;
let $quick_dd_5_static_node;
let $quick_dd_6_static_node;
let $quick_dd_7_static_node;
let $quick_dd_8_static_node;
let $quick_dd_9_static_node;
let $quick_dd_10_static_node;
let $quick_dd_11_static_node;
let $quick_dd_12_static_node;
let $quick_dd_13_static_node;
let $quick_dd_0_static_attr={'class': 'rd-_gallery_mx-color_index_less_-body',};
let $quick_dd_1_static_attr={'xmlns': 'http://www.w3.org/2000/svg','version': 1.1,'width': '100%','height': '100%',};
let $quick_dd_14_static_attr={'class': 'rd-_assets_index_less_-pr rd-_gallery_mx-color_index_less_-alpha',};
let $quick_dd_15_static_attr={'class': 'rd-_gallery_mx-color_index_less_-foot',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../mx-dragdrop/index");
let index_2 = require("../mx-monitor/index");
let { node, View, applyStyle, dispatch, inside } = magix_1;
let { abs, min, max, round } = Math;
applyStyle("rd-_gallery_mx-color_index_less_","\n.rd-_gallery_mx-color_index_less_-color {\nheight:22px;\nborder:solid 1px #e6e6e6;\nborder-radius:2px;\npadding:1px;\n}\n.rd-_gallery_mx-color_index_less_-color:hover {\nborder-color:#ccc;\n}\n.rd-_gallery_mx-color_index_less_-color-focus,\n.rd-_gallery_mx-color_index_less_-color-focus:hover {\nborder-color:#47B34E;\n}\n.rd-_gallery_mx-color_index_less_-picker,\n.rd-_gallery_mx-color_index_less_-alpha {\nbackground:#fff;\nbackground-image:linear-gradient(45deg, #eee 25%, #0000 0, #0000 75%, #eee 0), linear-gradient(45deg, #eee 25%, #0000 0, #0000 75%, #eee 0);\nbackground-position:0px 0, 6px 6px;\nbackground-size:12px 12px;\n}\n.rd-_gallery_mx-color_index_less_-picker {\nmin-width:18px;\nheight:18px;\ntext-indent:-100000em;\nborder:solid 1px #ccc;\n}\n.rd-_gallery_mx-color_index_less_-text {\npadding:3px 4px;\n}\n.rd-_gallery_mx-color_index_less_-picker::after {\ncontent:' ';\ndisplay:block;\nright:0;\nbottom:0;\nposition:absolute;\nborder-width:6px 6px 0 0;\nborder-style:solid;\nborder-color:#0000 #ccc;\n}\n.rd-_gallery_mx-color_index_less_-color-zone {\nborder-radius:2px;\nz-index:300;\nborder:1px solid #ccc;\nbackground-color:#fff;\npadding:2px;\n}\n.rd-_gallery_mx-color_index_less_-placement--bottom {\ntop:100%;\nmargin-top:4px;\n}\n.rd-_gallery_mx-color_index_less_-placement--top {\nbottom:100%;\nmargin-bottom:4px;\n}\n.rd-_gallery_mx-color_index_less_-shortcuts {\nwidth:176px;\n}\n.rd-_gallery_mx-color_index_less_-shortcuts-item {\nborder:1px solid #000;\nwidth:12px;\nheight:12px;\nmargin:-1px 0px 0 -1px;\n}\n.rd-_gallery_mx-color_index_less_-selected::before {\ncontent:' ';\nposition:absolute;\nleft:2px;\ntop:2px;\nborder:solid 1px #e8e8e8;\nborder-style:inset;\nwidth:6px;\nheight:6px;\n}\n.rd-_gallery_mx-color_index_less_-body {\nmargin:5px 0;\nheight:150px;\n}\n.rd-_gallery_mx-color_index_less_-cpicker {\nwidth:148px;\nheight:148px;\n}\n.rd-_gallery_mx-color_index_less_-cpicker-indicator {\nwidth:8px;\nheight:8px;\nbox-shadow:0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\nborder-radius:50%;\nleft:-4px;\ntop:-4px;\n}\n.rd-_gallery_mx-color_index_less_-slide {\nwidth:18px;\nheight:148px;\nmargin-left:10px;\n}\n.rd-_gallery_mx-color_index_less_-slide-indicator {\ntop:-2px;\nheight:4px;\nwidth:14px;\nbox-shadow:0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\nbackground:#fff;\n}\n.rd-_gallery_mx-color_index_less_-foot {\nheight:25px;\n}\n.rd-_gallery_mx-color_index_less_-color-value {\nwidth:80px;\nmargin-right:5px;\nvertical-align:middle;\n}\n.rd-_gallery_mx-color_index_less_-bgcolor {\nwidth:30px;\nborder-radius:2px;\nheight:22px;\nmargin-right:5px;\nvertical-align:middle;\nborder:1px solid #ddd;\n}\n.rd-_gallery_mx-color_index_less_-remove {\nright:5px;\ntop:4px;\nopacity:0.2;\n}\n.rd-_gallery_mx-color_index_less_-remove:hover {\nopacity:0.5;\n}\n.rd-_gallery_mx-color_index_less_-alpha {\nwidth:174px;\nheight:12px;\nmargin-bottom:5px;\n}\n.rd-_gallery_mx-color_index_less_-alpha-indicator {\nleft:-2px;\ntop:2px;\nheight:8px;\nwidth:4px;\nbox-shadow:0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\nbackground:#fff;\n}\n.rd-_gallery_mx-color_index_less_-notallowed {\ncursor:not-allowed;\nbackground-color:#f5f5f5;\n}\n.rd-_gallery_mx-color_index_less_-notallowed:hover {\nborder-color:#e6e6e6;\n}\n.rd-_gallery_mx-color_index_less_-notallowed:hover .rd-_gallery_mx-color_index_less_-remove {\nopacity:0.1;\n}\n.rd-_gallery_mx-color_index_less_-notallowed .rd-_gallery_mx-color_index_less_-picker {\nopacity:0.4;\n}\n.rd-_gallery_mx-color_index_less_-notallowed .rd-_gallery_mx-color_index_less_-remove {\nopacity:0.1;\n}\n.rd-_gallery_mx-color_index_less_-width-56 {\nwidth:56px;\n}\n");
let ShortCuts = ['d81e06', 'f4ea2a', '1afa29', '1296db', '13227a', 'd4237a', 'ffffff', 'e6e6e6', 'dbdbdb', 'cdcdcd', 'bfbfbf', '8a8a8a', '707070', '515151', '2c2c2c', '000000', 'ea986c', 'eeb174', 'f3ca7e', 'f9f28b', 'c8db8c', 'aad08f', '87c38f', '83c6c2', '7dc5eb', '87a7d6', '8992c8', 'a686ba', 'bd8cbb', 'be8dbd', 'e89abe', 'e8989a', 'e16632', 'e98f36', 'efb336', 'f6ef37', 'afcd51', '7cba59', '36ab60', '1baba8', '17ace3', '3f81c1', '4f68b0', '594d9c', '82529d', 'a4579d', 'db649b', 'dd6572', 'd84e06', 'e0620d', 'ea9518', 'f4ea2a', '8cbb1a', '2ba515', '0e932e', '0c9890', '1295db', '0061b2', '0061b0', '004198', '122179', '88147f', 'd3227b', 'd6204b'];
let HSV2RGB = (h, s, v) => {
    let R, G, B, X, C;
    h = (h % 360) / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;
    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    let r = R * 255, g = G * 255, b = B * 255;
    return {
        r: r,
        g: g,
        b: b,
        hex: '#' + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1)
    };
};
let RGB2HSV = (r, g, b) => {
    //if (r > 0 || g > 0 || b > 0) {
    r /= 255;
    g /= 255;
    b /= 255;
    //}
    let H, S, V, C;
    V = max(r, g, b);
    C = V - min(r, g, b);
    H = (C === 0 ? null : V == r ? (g - b) / C + (g < b ? 6 : 0) : V == g ? (b - r) / C + 2 : (r - g) / C + 4);
    H = (H % 6) * 60;
    S = C === 0 ? 0 : C / V;
    return {
        h: H,
        s: S,
        v: V
    };
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	text,
	textWidth,
	color,
	clear,
	i18n,
	placement,
	align,
	renderUI,
	shortcuts,
	alpha,
	current,}=$dataFromView,
$$_class,
$$_style,
$vnode_2,
$vnode_3,
$vnode_7,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{if text}}";$__ctrl="if(text){";
if(text){
$vnode_2=[$createVNode(0,($__line=3,$__art='{{=text}}',$__ctrl='<%=text%>',(text)))];;$$_class='rd-_gallery_mx-color_index_less_-text rd-_assets_index_less_-unselectable'+($__line=3,$__art='{{if !disabled}}','');$__ctrl='<%if(!disabled){%>';if(!disabled){;$$_class+=' rd-_assets_index_less_-cursor-pointer'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style=($__line=3,$__art='{{if textWidth}}','');$__ctrl='<%if(textWidth){%>';if(textWidth){;$$_style+='width:'+($__line=3,$__art='{{=textWidth}}',$__ctrl='<%=textWidth%>',(textWidth))+'px'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'mx5-click': $viewId+'@:{toggle~rs}()','class': $$_class,'style': $$_style,},$vnode_2));
}$vnode_2=[$quick_ce_static_text||($quick_ce_static_text=$createVNode(0,'p'))];;$$_class='rd-_gallery_mx-color_index_less_-picker rd-_assets_index_less_-pr rd-_assets_index_less_-unselectable'+($__line=5,$__art='{{if !disabled}}','');$__ctrl='<%if(!disabled){%>';if(!disabled){;$$_class+=' rd-_assets_index_less_-cursor-pointer'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=5,$__art='{{if !text}}','');$__ctrl='<%if(!text){%>';if(!text){;$$_class+=' rd-_assets_index_less_-wp100'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style=($__line=5,$__art='{{if color}}','');$__ctrl='<%if(color){%>';if(color){;$$_style+='background:'+($__line=5,$__art='{{=color}}',$__ctrl='<%=color%>',(color))+';'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'mx5-click': $viewId+'@:{toggle~rs}()','class': $$_class,'style': $$_style,},$vnode_2));$__line=6;$__art="{{if clear&&color}}";$__ctrl="if(clear&&color){";
if(clear&&color){
$vnode_2=[$quick_cf_static_text||($quick_cf_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_gallery_mx-color_index_less_-remove rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-pa'+($__line=7,$__art='{{if !disabled}}','');$__ctrl='<%if(!disabled){%>';if(!disabled){;$$_class+=' rd-_assets_index_less_-cursor-pointer'+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'mx5-click': $viewId+'@:{clear.color~rs}()','title': ($__line=7,$__art='{{=i18n(\'@:{lang#remove.color~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#remove.color~rs}\')%>',(i18n('@:{lang#remove.color~rs}'))),'class': $$_class,},$vnode_2));
}$vnode_2=[];$__line=10;$__art="{{if renderUI}}";$__ctrl="if(renderUI){";
if(renderUI){
$vnode_3=[];$__line=12;$__art="{{each shortcuts as sc}}";$__ctrl="for(let $q_c_ffeqzf=shortcuts.length,$q_key_ewpmwjwfy=0;$q_key_ewpmwjwfy<$q_c_ffeqzf;$q_key_ewpmwjwfy++){let sc=shortcuts[$q_key_ewpmwjwfy];";
for(let $q_c_ffeqzf=shortcuts.length,$q_key_ewpmwjwfy=0;$q_key_ewpmwjwfy<$q_c_ffeqzf;$q_key_ewpmwjwfy+=1){
let sc=shortcuts[$q_key_ewpmwjwfy];
$vnode_3.push($createVNode('li',{'class': 'rd-_assets_index_less_-fl rd-_assets_index_less_-pr rd-_gallery_mx-color_index_less_-shortcuts-item','id': '_mx_sc_'+($__line=13,$__art='{{=sc}}',$__ctrl='<%=sc%>',(sc))+'_'+($__line=13,$__art='{{=$viewId}}','')+$viewId,'style': 'background:#'+($__line=13,$__art='{{=sc}}',$__ctrl='<%=sc%>',(sc)),'mx5-click': $viewId+'@:{shortcuts.picked~rs}({color:\'#'+($__line=13,$__art='{{=sc}}',$__ctrl='<%=$encodeQuote(sc)%>',($encodeQuote(sc)))+'\'})',}));
}$vnode_2.push($createVNode('ul',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-flex-wrap-wrap rd-_assets_index_less_-tag-ul rd-_gallery_mx-color_index_less_-shortcuts','id': '_mx_scs_'+($__line=11,$__art='{{=$viewId}}','')+$viewId,},$vnode_3));
if($quick_dd_2_static_node){
$vnode_7=[$quick_dd_2_static_node];
}else{
$vnode_7=[$quick_dd_2_static_node=$createVNode('stop',{'_': 'a@','offset': '0%','stop-color': '#000000','stop-opacity': 1,})];
}

if($quick_dd_3_static_node){
$vnode_7.push($quick_dd_3_static_node);
}else{
$vnode_7.push($quick_dd_3_static_node=$createVNode('stop',{'_': 'a$','offset': '100%','stop-color': '#CC9A81','stop-opacity': 0,}));
}
$vnode_6=[$createVNode('lineargradient',{'id': '_mx_gb_'+($__line=20,$__art='{{=$viewId}}','')+$viewId,'x1': '0%','y1': '100%','x2': '0%','y2': '0%',},$vnode_7)];
if($quick_dd_4_static_node){
$vnode_7=[$quick_dd_4_static_node];
}else{
$vnode_7=[$quick_dd_4_static_node=$createVNode('stop',{'_': 'a^','offset': '0%','stop-color': '#FFFFFF','stop-opacity': 1,})];
}

if($quick_dd_3_static_node){
$vnode_7.push($quick_dd_3_static_node);
}else{
$vnode_7.push($quick_dd_3_static_node=$createVNode('stop',{'_': 'a$','offset': '100%','stop-color': '#CC9A81','stop-opacity': 0,}));
}
$vnode_6.push($createVNode('lineargradient',{'id': '_mx_gw_'+($__line=24,$__art='{{=$viewId}}','')+$viewId,'x1': '0%','y1': '100%','x2': '100%','y2': '100%',},$vnode_7));$vnode_5=[$createVNode('defs',0,$vnode_6),$createVNode('rect',{'x': 0,'y': 0,'width': '100%','height': '100%','fill': 'url(#_mx_gw_'+($__line=29,$__art='{{=$viewId}}','')+$viewId+')',}),$createVNode('rect',{'x': 0,'y': 0,'width': '100%','height': '100%','fill': 'url(#_mx_gb_'+($__line=30,$__art='{{=$viewId}}','')+$viewId+')',})];$vnode_4=[$createVNode('svg',$quick_dd_1_static_attr,$vnode_5),$createVNode('div',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-pa rd-_gallery_mx-color_index_less_-cpicker-indicator','id': '_mx_ci_'+($__line=32,$__art='{{=$viewId}}','')+$viewId,})];$vnode_3=[$createVNode('div',{'class': 'rd-_assets_index_less_-fl rd-_assets_index_less_-pr rd-_assets_index_less_-touch-action-none rd-_gallery_mx-color_index_less_-cpicker','id': '_mx_cz_'+($__line=17,$__art='{{=$viewId}}','')+$viewId,'mx5-pointerdown': $viewId+'@:{color.zone.drag~rs}()',},$vnode_4)];
if($quick_dd_5_static_node){
$vnode_7=[$quick_dd_5_static_node];
}else{
$vnode_7=[$quick_dd_5_static_node=$createVNode('stop',{'_': 'a*','offset': '0%','stop-color': '#FF0000','stop-opacity': 1,})];
}

if($quick_dd_6_static_node){
$vnode_7.push($quick_dd_6_static_node);
}else{
$vnode_7.push($quick_dd_6_static_node=$createVNode('stop',{'_': 'a{','offset': '13%','stop-color': '#FF00FF','stop-opacity': 1,}));
}

if($quick_dd_7_static_node){
$vnode_7.push($quick_dd_7_static_node);
}else{
$vnode_7.push($quick_dd_7_static_node=$createVNode('stop',{'_': 'a}','offset': '25%','stop-color': '#8000FF','stop-opacity': 1,}));
}

if($quick_dd_8_static_node){
$vnode_7.push($quick_dd_8_static_node);
}else{
$vnode_7.push($quick_dd_8_static_node=$createVNode('stop',{'_': 'a[','offset': '38%','stop-color': '#0040FF','stop-opacity': 1,}));
}

if($quick_dd_9_static_node){
$vnode_7.push($quick_dd_9_static_node);
}else{
$vnode_7.push($quick_dd_9_static_node=$createVNode('stop',{'_': 'a]','offset': '50%','stop-color': '#00FFFF','stop-opacity': 1,}));
}

if($quick_dd_10_static_node){
$vnode_7.push($quick_dd_10_static_node);
}else{
$vnode_7.push($quick_dd_10_static_node=$createVNode('stop',{'_': 'a|','offset': '63%','stop-color': '#00FF40','stop-opacity': 1,}));
}

if($quick_dd_11_static_node){
$vnode_7.push($quick_dd_11_static_node);
}else{
$vnode_7.push($quick_dd_11_static_node=$createVNode('stop',{'_': 'a,','offset': '75%','stop-color': '#0BED00','stop-opacity': 1,}));
}

if($quick_dd_12_static_node){
$vnode_7.push($quick_dd_12_static_node);
}else{
$vnode_7.push($quick_dd_12_static_node=$createVNode('stop',{'_': 'a.','offset': '88%','stop-color': '#FFFF00','stop-opacity': 1,}));
}

if($quick_dd_13_static_node){
$vnode_7.push($quick_dd_13_static_node);
}else{
$vnode_7.push($quick_dd_13_static_node=$createVNode('stop',{'_': 'a`','offset': '100%','stop-color': '#FF0000','stop-opacity': 1,}));
}
$vnode_6=[$createVNode('lineargradient',{'id': '_mx_ghsv_'+($__line=37,$__art='{{=$viewId}}','')+$viewId,'x1': '0%','y1': '100%','x2': '0%','y2': '0%',},$vnode_7)];$vnode_5=[$createVNode('defs',0,$vnode_6),$createVNode('rect',{'x': 0,'y': 0,'width': '100%','height': '100%','fill': 'url(#_mx_ghsv_'+($__line=49,$__art='{{=$viewId}}','')+$viewId+')',})];$vnode_4=[$createVNode('svg',$quick_dd_1_static_attr,$vnode_5),$createVNode('div',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-left-2 rd-_assets_index_less_-pa rd-_gallery_mx-color_index_less_-slide-indicator','id': '_mx_si_'+($__line=51,$__art='{{=$viewId}}','')+$viewId,})];$vnode_3.push($createVNode('div',{'class': 'rd-_assets_index_less_-fl rd-_assets_index_less_-pr rd-_assets_index_less_-touch-action-none rd-_gallery_mx-color_index_less_-slide','mx5-pointerdown': $viewId+'@:{slide.drag~rs}()',},$vnode_4));$vnode_2.push($createVNode('div',$quick_dd_0_static_attr,$vnode_3));$__line=54;$__art="{{if alpha}}";$__ctrl="if(alpha){";
if(alpha){
$vnode_4=[$createVNode('div',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-pa rd-_gallery_mx-color_index_less_-alpha-indicator','id': '_mx_ai_'+($__line=57,$__art='{{=$viewId}}','')+$viewId,})];$vnode_3=[$createVNode('div',{'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-pr rd-_assets_index_less_-touch-action-none','id': '_mx_at_'+($__line=56,$__art='{{=$viewId}}','')+$viewId,'mx5-pointerdown': $viewId+'@:{alpha.drag~rs}()',},$vnode_4)];$vnode_2.push($createVNode('div',$quick_dd_14_static_attr,$vnode_3));
}$vnode_3=[$createVNode('span',{'class': 'rd-_assets_index_less_-display-inline-block rd-_gallery_mx-color_index_less_-bgcolor','id': '_mx_bc_'+($__line=62,$__art='{{=$viewId}}','')+$viewId,}),$createVNode('input',{'class': 'rd-_assets_index_less_-input rd-_gallery_mx-color_index_less_-color-value','readonly': true,'id': '_mx_v_'+($__line=63,$__art='{{=$viewId}}','')+$viewId,'value': ($__line=63,$__art='{{=current}}',$__ctrl='<%=current%>',(current)),},1,$special_2)];$vnode_4=[$createVNode(0,($__line=64,$__art='{{=i18n(\'@:{lang#mx-gallery.enter~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.enter~rs}\')%>',(i18n('@:{lang#mx-gallery.enter~rs}'))))];$vnode_3.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc rd-_gallery_mx-color_index_less_-width-56','type': 'button','mx5-click': $viewId+'@:{enter~rs}()',},$vnode_4));$vnode_2.push($createVNode('div',$quick_dd_15_static_attr,$vnode_3));
}$vnode_1.push($createVNode('div',{'id': '_mx_bd_'+($__line=9,$__art='{{=$viewId}}','')+$viewId,'class': 'rd-_gallery_mx-color_index_less_-color-zone rd-_assets_index_less_-unselectable rd-_assets_index_less_-none rd-_assets_index_less_-pa rd-_gallery_mx-color_index_less_-placement--'+($__line=9,$__art='{{=placement}}',$__ctrl='<%=placement%>',(placement)),'style': ($__line=9,$__art='{{=align}}',$__ctrl='<%=align%>',(align))+':-1px',},$vnode_2));;$$_class='rd-_gallery_mx-color_index_less_-color rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center rd-_assets_index_less_-pr'+($__line=1,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-color_index_less_-notallowed'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'mx5-contextmenu': $viewId+'@:{prevent~rs}()','id': '_mx_root_'+($__line=1,$__art='{{=$viewId}}','')+$viewId,'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-color/index.html'; throw msg; }  } ,
    init() {
        this.set({
            shortcuts: ShortCuts
        });
        index_2["@:{setup~rs}"]();
        this.on('destroy', () => {
            index_2['@:{remove~rs}'](this);
            index_2['@:{teardown~rs}']();
        });
    },
    assign(data) {
        let me = this;
        me['@:{color~rs}'] = data.color || '';
        me['@:{show.alpha~rs}'] = (data.alpha + '') == 'true';
        me['@:{hsv.info~rs}'] = {
            h: 0,
            s: 1,
            v: 1
        };
        me.set({
            clear: (data.clear + '') == 'true',
            text: data.text || '',
            disabled: (data.disabled + '') == 'true',
            align: data.align || 'left',
            textWidth: data.textWidth || 0,
            placement: data.placement || 'bottom'
        });
    },
    render() {
        this.digest({
            alpha: this['@:{show.alpha~rs}'],
            color: this['@:{color~rs}'],
            current: this['@:{color~rs}']
        });
    },
    '@:{set.hsv~rs}'(hsv, hex, ignoreSyncUI) {
        let me = this;
        let selfHSV = me['@:{hsv.info~rs}'];
        selfHSV.h = hsv.h;
        selfHSV.s = hsv.s;
        selfHSV.v = hsv.v;
        let rgb = HSV2RGB(hsv.h, hsv.s, hsv.v);
        hex = rgb.hex;
        let cpickerNode = node('_mx_cz_' + me.id);
        let pickerZone = cpickerNode.clientWidth;
        let colorZone = HSV2RGB(hsv.h, 1, 1);
        cpickerNode.style.background = colorZone.hex;
        me['@:{hex.color~rs}'] = hex;
        me['@:{sync.color~rs}']();
        if (!ignoreSyncUI) {
            let selected = node('_mx_scs_' + me.id).querySelector('li[class$="rd-_gallery_mx-color_index_less_-selected"]');
            //debugger;
            if (selected) {
                selected.classList.remove('rd-_gallery_mx-color_index_less_-selected');
            }
            let snode = node('_mx_si_' + me.id);
            let slider = snode.clientHeight / 2;
            let top = round(selfHSV.h * pickerZone / 360 - slider);
            let cnode = node('_mx_ci_' + me.id);
            let pickerIndicator = cnode.clientWidth / 2;
            snode.style.top = top + 'px';
            top = round((1 - selfHSV.v) * pickerZone - pickerIndicator);
            let left = round(selfHSV.s * pickerZone - pickerIndicator);
            cnode.style.left = left + 'px';
            cnode.style.top = top + 'px';
        }
        let sc = node('_mx_sc_' + hex.substr(1, 6) + '_' + me.id);
        if (sc) {
            sc.classList.add('rd-_gallery_mx-color_index_less_-selected');
        }
    },
    '@:{set.color~rs}'(hex) {
        let me = this;
        let r = parseInt(hex.substr(1, 2), 16);
        if (isNaN(r))
            r = 255;
        let g = parseInt(hex.substr(3, 2), 16);
        if (isNaN(g))
            g = 255;
        let b = parseInt(hex.substr(5, 2), 16);
        if (isNaN(b))
            b = 255;
        let hsv = RGB2HSV(r, g, b);
        let a = parseInt(hex.substr(7, 2), 16);
        if (isNaN(a)) {
            a = 255;
        }
        me['@:{hex.alpha~rs}'] = ('0' + a.toString(16)).slice(-2);
        me['@:{set.hsv~rs}'](hsv, hex);
        if (me['@:{show.alpha~rs}']) {
            me['@:{set.alpha~rs}'](a);
        }
    },
    '@:{set.alpha~rs}'(a) {
        let me = this;
        let ai = node('_mx_ai_' + me.id);
        let alphaWidth = node('_mx_at_' + me.id).clientWidth;
        let slider = ai.clientWidth / 2;
        a /= 255;
        a *= alphaWidth;
        a -= slider;
        ai.style.left = a + 'px';
    },
    '@:{sync.color~rs}'() {
        let me = this;
        let n = node('_mx_bc_' + me.id);
        let hex = me['@:{hex.color~rs}'];
        if (me['@:{show.alpha~rs}']) {
            node('_mx_at_' + me.id).style.background = 'linear-gradient(to right, ' + hex + '00 0%,' + hex + ' 100%)';
            hex += me['@:{hex.alpha~rs}'];
        }
        n.style.background = hex;
        let n1 = node('_mx_v_' + me.id);
        n1.value = hex;
    },
    '@:{color.zone.drag~rs}<pointerdown>'(e) {
        let me = this, pickerZone = node('_mx_cz_' + me.id).clientWidth, pickerIndicator = node('_mx_ci_' + me.id).clientWidth / 2, offset = e.eventTarget.getBoundingClientRect(), left = e.pageX - offset.x - window.pageXOffset, top = e.pageY - offset.y - window.pageYOffset, s = left / pickerZone, v = (pickerZone - top) / pickerZone;
        me['@:{set.hsv~rs}']({
            h: me['@:{hsv.info~rs}'].h,
            s: s,
            v: v
        });
        let current = node('_mx_ci_' + me.id);
        let styles = getComputedStyle(current);
        let sleft = styles.left;
        let stop = styles.top;
        let startX = parseInt(sleft, 10);
        let startY = parseInt(stop, 10);
        let pos = e;
        me['@:{drag.drop~rs}'](e, (event) => {
            let offsetY = event.pageY - pos.pageY;
            let offsetX = event.pageX - pos.pageX;
            offsetY += startY;
            if (offsetY <= -pickerIndicator)
                offsetY = -pickerIndicator;
            else if (offsetY >= (pickerZone - pickerIndicator))
                offsetY = pickerZone - pickerIndicator;
            offsetX += startX;
            if (offsetX <= -pickerIndicator)
                offsetX = -pickerIndicator;
            else if (offsetX >= (pickerZone - pickerIndicator))
                offsetX = pickerZone - pickerIndicator;
            current.style.left = offsetX + 'px';
            current.style.top = offsetY + 'px';
            let s = (offsetX + pickerIndicator) / pickerZone;
            let v = (pickerZone - (offsetY + pickerIndicator)) / pickerZone;
            me['@:{set.hsv~rs}']({
                h: me['@:{hsv.info~rs}'].h,
                s: s,
                v: v
            });
        });
    },
    '@:{slide.drag~rs}<pointerdown>'(e) {
        let me = this;
        let current = e.eventTarget;
        let indicator = node('_mx_si_' + me.id);
        let pickerZone = node('_mx_cz_' + me.id).clientWidth;
        let slider = indicator.clientHeight / 2;
        let offset = current.getBoundingClientRect(), top = e.pageY - offset.y - window.scrollY, h = top / pickerZone * 360;
        me['@:{set.hsv~rs}']({
            h: h,
            s: me['@:{hsv.info~rs}'].s,
            v: me['@:{hsv.info~rs}'].v
        });
        let startY = parseInt(getComputedStyle(indicator).top, 10);
        me['@:{drag.drop~rs}'](e, event => {
            let offsetY = event.pageY - e.pageY;
            offsetY += startY;
            if (offsetY <= -slider)
                offsetY = -slider;
            else if (offsetY >= (pickerZone - slider))
                offsetY = pickerZone - slider;
            indicator.style.top = offsetY + 'px';
            let h = (offsetY + slider) / pickerZone * 360;
            me['@:{set.hsv~rs}']({
                h: h,
                s: me['@:{hsv.info~rs}'].s,
                v: me['@:{hsv.info~rs}'].v
            }, null, true);
        });
    },
    '@:{alpha.drag~rs}<pointerdown>'(e) {
        let current = e.eventTarget;
        let me = this;
        let indicator = node('_mx_ai_' + me.id);
        let alphaWidth = node('_mx_at_' + me.id).clientWidth;
        let slider = indicator.clientWidth / 2;
        let offset = current.getBoundingClientRect(), left = e.pageX - offset.x, a = (left / alphaWidth * 255) | 0;
        me['@:{hex.alpha~rs}'] = ('0' + a.toString(16)).slice(-2);
        me['@:{set.alpha~rs}'](a);
        me['@:{sync.color~rs}']();
        let styles = getComputedStyle(indicator);
        let startX = parseInt(styles.left, 10);
        me['@:{drag.drop~rs}'](e, (event) => {
            let offsetX = event.pageX - e.pageX;
            offsetX += startX;
            if (offsetX <= -slider)
                offsetX = -slider;
            else if (offsetX >= (alphaWidth - slider))
                offsetX = alphaWidth - slider;
            indicator.style.left = offsetX + 'px';
            let a = round((offsetX + slider) / alphaWidth * 255);
            me['@:{hex.alpha~rs}'] = ('0' + a.toString(16)).slice(-2);
            me['@:{sync.color~rs}']();
        });
    },
    '@:{enter~rs}<click>'() {
        let me = this;
        me['@:{hide~rs}']();
        let n = node('_mx_v_' + me.id);
        let c = n.value;
        if (c != me['@:{color~rs}']) {
            me.digest({
                color: c,
                current: c
            });
            dispatch(me.root, 'input', {
                color: me['@:{color~rs}'] = c
            });
        }
    },
    '@:{shortcuts.picked~rs}<click>'(e) {
        this['@:{set.color~rs}'](e.params.color);
        e.eventTarget.classList.add('rd-_gallery_mx-color_index_less_-selected');
    },
    '@:{inside~rs}'(node) {
        return inside(node, this.root);
    },
    async '@:{show~rs}'() {
        let n = node('_mx_bd_' + this.id);
        let d = getComputedStyle(n).display;
        if (d == 'none') {
            n.style.display = 'block';
            index_2["@:{add~rs}"](this);
            node('_mx_root_' + this.id).classList.add('rd-_gallery_mx-color_index_less_-color-focus');
            if (!this['@:{init.sync.color~rs}']) {
                await this.digest({
                    renderUI: true
                });
                this['@:{init.sync.color~rs}'] = 1;
            }
            this['@:{set.color~rs}'](this['@:{color~rs}']);
        }
    },
    '@:{hide~rs}'() {
        let n = node('_mx_bd_' + this.id);
        let d = getComputedStyle(n).display;
        if (d != 'none') {
            node('_mx_root_' + this.id).classList.remove('rd-_gallery_mx-color_index_less_-color-focus');
            n.style.display = 'none';
            index_2["@:{remove~rs}"](this);
        }
    },
    '@:{toggle~rs}<click>'() {
        if (this.get('disabled'))
            return;
        let n = node('_mx_bd_' + this.id);
        let d = getComputedStyle(n).display;
        if (d == 'none') {
            this['@:{show~rs}']();
        }
        else {
            this['@:{hide~rs}']();
        }
    },
    '@:{clear.color~rs}<click>'() {
        if (this.get('disabled'))
            return;
        let me = this, c = '';
        if (me['@:{init.sync.color~rs}']) {
            let cr = node('_mx_v_' + me.id).value;
            me['@:{hide~rs}']();
            me.digest({
                color: '',
                current: cr
            });
        }
        else {
            me.digest({
                color: ''
            });
        }
        dispatch(me.root, 'input', {
            color: me['@:{color~rs}'] = c
        });
    }
}).merge(index_1);

});