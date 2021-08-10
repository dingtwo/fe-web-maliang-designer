/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/stage",["magix5","../gallery/mx-dragdrop/index","../gallery/mx-pointer/cursor","../gallery/mx-pointer/select","../provider/pole","../provider/scroll","../provider/sdrag","../provider/sdrop","../provider/wsize","./const","./contextmenu","./enum","./history","./keyboard","./stage-clipboard","./stage-elements","./stage-generic","./stage-selection","./transform","elements/hod-header/stage","elements/hod-footer/stage","./align"],(require,exports,module)=>{
require("elements/hod-header/stage");
require("elements/hod-footer/stage");
require("./align");
let $quick_dK_0_static_node;
let $quick_dK_1_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../gallery/mx-dragdrop/index");
let cursor_1 = require("../gallery/mx-pointer/cursor");
let select_1 = require("../gallery/mx-pointer/select");
let pole_1 = require("../provider/pole");
let scroll_1 = require("../provider/scroll");
let sdrag_1 = require("../provider/sdrag");
let sdrop_1 = require("../provider/sdrop");
let wsize_1 = require("../provider/wsize");
let const_1 = require("./const");
let contextmenu_1 = require("./contextmenu");
let enum_1 = require("./enum");
let history_1 = require("./history");
let keyboard_1 = require("./keyboard");
let stage_clipboard_1 = require("./stage-clipboard");
let stage_elements_1 = require("./stage-elements");
let stage_generic_1 = require("./stage-generic");
let stage_selection_1 = require("./stage-selection");
let transform_1 = require("./transform");
let emptyObject = {};
let { State, Vframe, node, applyStyle, View, inside, isFunction, lowTaskFinale } = magix_1;
let { min, abs } = Math;
//缩放元素
let ScaleElement = (m, step) => {
    let { props, ctrl } = m;
    for (let s of ctrl.props) {
        if (isFunction(s['@:{stage.scale~rs}'])) {
            s['@:{stage.scale~rs}'](props, step);
        }
        else if (s['@:{is.scale.and.unit.field~rs}']) {
            props[s.key] *= step;
        }
    }
    if (ctrl['@:{update.props~rs}']) {
        ctrl['@:{update.props~rs}'](props);
    }
};
let FindHeaderAndFooterElements = elements => {
    let ff = [];
    if (elements) {
        for (let e of elements) {
            if (e.type == 'hod-header' ||
                e.type == 'hod-footer') {
                ff.push(e);
            }
        }
    }
    return ff;
};
//调整z轴快捷键映射
let KeysToMenuId = {
    [keyboard_1["@:{key#u~rs}"]]: 5,
    [keyboard_1["@:{key#d~rs}"]]: 6,
    [keyboard_1["@:{key#t~rs}"]]: 3,
    [keyboard_1["@:{key#b~rs}"]]: 4
};
applyStyle("rd-_designer_stage_less_",".rd-_designer_stage_less_-stage-canvas {\nbackground-color:#fff;\nbox-shadow:0 3px 6px 0 rgba(0, 0, 0, 0.3);\n}\n.rd-_designer_stage_less_-page-top-line {\nborder-top:dotted 1px #7b7b7b;\n}\n.rd-_designer_stage_less_-page-break-left-icon {\nleft:-16px;\ntop:-9px;\ncolor:#7b7b7b;\n}\n.rd-_designer_stage_less_-page-break-right-icon {\nright:-16px;\ntop:-9px;\ncolor:#7b7b7b;\n}\n.rd-_designer_stage_less_-stage-offset {\noutline:dotted 1px #7b7b7b;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	fs,
	rx,
	ry,
	marginTop,
	marginLeft,
	spad,
	page,
	scale,
	unit,
	fhf,
	elements,}=$dataFromView,
$$_style,
$$_class,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_3=[];($__line=5,$__art='{{set count=page.pages,headAndFooter=count?fhf(elements):0}}','');$__ctrl='<%let count=page.pages,headAndFooter=count?fhf(elements):0;%>';let count=page.pages,headAndFooter=count?fhf(elements):0;;$__line=6;$__art="{{for (let i=0;i<count;i++)}}";$__ctrl="for(let i=0;i<count;i++){";
for(let i=0;i<count;i++){
$vnode_4=[];$__line=8;$__art="{{if page.xOffset!=0||page.yOffset!=0}}";$__ctrl="if(page.xOffset!=0||page.yOffset!=0){";
if(page.xOffset!=0||page.yOffset!=0){
$vnode_5=[];$__line=10;$__art="{{if i}}";$__ctrl="if(i){";
if(i){

if($quick_dK_0_static_node){
$vnode_5.push($quick_dK_0_static_node);
}else{
$vnode_6=[$createVNode(0,'')];$vnode_5.push($quick_dK_0_static_node=$createVNode('i',{'_': 'cD','class': 'rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_designer_stage_less_-page-break-left-icon',},$vnode_6));
}

if($quick_dK_1_static_node){
$vnode_5.push($quick_dK_1_static_node);
}else{
$vnode_6=[$createVNode(0,'')];$vnode_5.push($quick_dK_1_static_node=$createVNode('i',{'_': 'cE','class': 'rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_designer_stage_less_-page-break-right-icon',},$vnode_6));
}

}$vnode_4.push($createVNode('div',{'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-pa rd-_assets_index_less_-wp100 rd-_designer_stage_less_-stage-offset','style': 'transform:translate('+($__line=9,$__art='{{=-page.xOffset}}',$__ctrl='<%=-page.xOffset%>',(-page.xOffset))+($__line=9,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+','+($__line=9,$__art='{{=-page.yOffset}}',$__ctrl='<%=-page.yOffset%>',(-page.yOffset))+($__line=9,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+')',},$vnode_5));
}$__line=16;$__art="{{if i}}";$__ctrl="if(i){";
if(i){

if($quick_dK_0_static_node){
$vnode_4.push($quick_dK_0_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_dK_0_static_node=$createVNode('i',{'_': 'cD','class': 'rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_designer_stage_less_-page-break-left-icon',},$vnode_5));
}

if($quick_dK_1_static_node){
$vnode_4.push($quick_dK_1_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_dK_1_static_node=$createVNode('i',{'_': 'cE','class': 'rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_designer_stage_less_-page-break-right-icon',},$vnode_5));
}

}$__line=32;$__art="{{each headAndFooter as e}}";$__ctrl="for(let $q_c_gvqcxmlik=headAndFooter.length,$q_key_ztmnfa=0;$q_key_ztmnfa<$q_c_gvqcxmlik;$q_key_ztmnfa++){let e=headAndFooter[$q_key_ztmnfa];";
for(let $q_c_gvqcxmlik=headAndFooter.length,$q_key_ztmnfa=0;$q_key_ztmnfa<$q_c_gvqcxmlik;$q_key_ztmnfa+=1){
let e=headAndFooter[$q_key_ztmnfa];
$__line=33;$__art="{{if i&&e.type==\\'hod-header\\'}}";$__ctrl="if(i&&e.type=='hod-header'){";
if(i&&e.type=='hod-header'){
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'unit','mx5-view': 'elements/hod-header/stage?props='+($__line=34,$__art='{{# e.props}}',$__ctrl='<%#e.props%>',$keyOf($refData,e.props))+'&unit='+($__line=34,$__art='{{#unit}}',$__ctrl='<%#unit,\'auto_key_unit\'%>',$keyOf($refData,unit,'auto_key_unit')),}));
}else if(($__line=35,$__art="{{else if i<count-1 && e.type==\\'hod-footer\\'}}",$__ctrl="else if(i<count-1 && e.type=='hod-footer'){"),i<count-1 && e.type=='hod-footer'){
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'unit','mx5-view': 'elements/hod-footer/stage?props='+($__line=36,$__art='{{# e.props}}',$__ctrl='<%#e.props%>',$keyOf($refData,e.props))+'&unit='+($__line=36,$__art='{{#unit}}',$__ctrl='<%#unit,\'auto_key_unit\'%>',$keyOf($refData,unit,'auto_key_unit')),}));
}
};$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none'+($__line=7,$__art='{{if i}}','');$__ctrl='<%if(i){%>';if(i){;$$_class+=' rd-_designer_stage_less_-page-top-line'+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style='top:'+($__line=7,$__art='{{=page.height*scale*i}}',$__ctrl='<%=page.height*scale*i%>',(page.height*scale*i))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=7,$__art='{{=page.width*scale}}',$__ctrl='<%=page.width*scale%>',(page.width*scale))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=7,$__art='{{=page.height*scale}}',$__ctrl='<%=page.height*scale%>',(page.height*scale))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=7,$__art='{{if page.backgroundImage}}','');$__ctrl='<%if(page.backgroundImage){%>';if(page.backgroundImage){;$$_style+='background-image:url('+($__line=7,$__art='{{=page.backgroundImage}}',$__ctrl='<%=page.backgroundImage%>',(page.backgroundImage))+');background-repeat:'+($__line=7,$__art='{{=page.backgroundRepeat==\'full\'?\'no-repeat\':page.backgroundRepeat}}',$__ctrl='<%=page.backgroundRepeat==\'full\'?\'no-repeat\':page.backgroundRepeat%>',(page.backgroundRepeat=='full'?'no-repeat':page.backgroundRepeat))+';background-size:'+($__line=7,$__art='{{if page.backgroundRepeat==\'full\'}}','');$__ctrl='<%if(page.backgroundRepeat==\'full\'){%>';if(page.backgroundRepeat=='full'){;$$_style+='100% 100%'+($__line=7,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+=''+($__line=7,$__art='{{=page.backgroundWidth*scale}}',$__ctrl='<%=page.backgroundWidth*scale%>',(page.backgroundWidth*scale))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=7,$__art='{{=page.backgroundHeight*scale}}',$__ctrl='<%=page.backgroundHeight*scale%>',(page.backgroundHeight*scale))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';background-position:'+($__line=7,$__art='{{=page.backgroundXOffset}}',$__ctrl='<%=page.backgroundXOffset%>',(page.backgroundXOffset))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=7,$__art='{{=page.backgroundYOffset}}',$__ctrl='<%=page.backgroundYOffset%>',(page.backgroundYOffset))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_3.push($createVNode('div',{'class': $$_class,'style': $$_style,},$vnode_4));
}$__line=54;$__art="{{each elements as e}}";$__ctrl="for(let $q_c_oojfkkw=elements.length,$q_key_agkypjvqsa=0;$q_key_agkypjvqsa<$q_c_oojfkkw;$q_key_agkypjvqsa++){let e=elements[$q_key_agkypjvqsa];";
for(let $q_c_oojfkkw=elements.length,$q_key_agkypjvqsa=0;$q_key_agkypjvqsa<$q_c_oojfkkw;$q_key_agkypjvqsa+=1){
let e=elements[$q_key_agkypjvqsa];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'elements,fs,unit','id': ($__line=55,$__art='{{=e.id}}',$__ctrl='<%=e.id%>',(e.id)),'mx5-view': 'elements/'+($__line=55,$__art='{{=e.type}}',$__ctrl='<%=e.type%>',(e.type))+'/designer?element='+($__line=55,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_elements.\'+($q_key_agkypjvqsa)+\'.e\'%>',$keyOf($refData,e,'auto_key_elements.'+($q_key_agkypjvqsa)+'.e'))+'&ownerId=s&fs='+($__line=55,$__art='{{#fs}}',$__ctrl='<%#fs,\'auto_key_fs\'%>',$keyOf($refData,fs,'auto_key_fs'))+'&unit='+($__line=55,$__art='{{#unit}}',$__ctrl='<%#unit,\'auto_key_unit\'%>',$keyOf($refData,unit,'auto_key_unit')),'class': 'rd-_assets_index_less_-touch-action-none','mx5-pointerdown': $viewId+'2@:{element.start.drag~rs}({element:\''+($__line=55,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_elements.\'+($q_key_agkypjvqsa)+\'.e\'%>',$keyOf($refData,e,'auto_key_elements.'+($q_key_agkypjvqsa)+'.e'))+'\'})',}));
}$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-_assets_index_less_-pointer-events-none','mx5-view': 'designer/align',}));$vnode_2=[$createVNode('div',{'class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-touch-action-none rd-_designer_stage_less_-stage-canvas','style': 'width:'+($__line=4,$__art='{{=page.width*scale}}',$__ctrl='<%=page.width*scale%>',(page.width*scale))+($__line=4,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=4,$__art='{{=page.height*scale*page.pages}}',$__ctrl='<%=page.height*scale*page.pages%>',(page.height*scale*page.pages))+($__line=4,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';background:'+($__line=4,$__art='{{=page.background}}',$__ctrl='<%=page.background%>',(page.background)),'data-as': 'hod','id': '_rd_sc',},$vnode_3)];;$$_style=($__line=2,$__art='{{if fs}}','');$__ctrl='<%if(fs){%>';if(fs){;$$_style+='transform:scaleX('+($__line=2,$__art='{{=rx}}',$__ctrl='<%=rx%>',(rx))+') scaleY('+($__line=2,$__art='{{=ry}}',$__ctrl='<%=ry%>',(ry))+');transform-origin:0 0;margin:'+($__line=2,$__art='{{=marginTop}}',$__ctrl='<%=marginTop%>',(marginTop))+'px 0 0 '+($__line=2,$__art='{{=marginLeft}}',$__ctrl='<%=marginLeft%>',(marginLeft))+'px'+($__line=2,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='padding:'+($__line=2,$__art='{{=spad.join(\'px \')}}',$__ctrl='<%=spad.join(\'px \')%>',(spad.join('px ')))+'px'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('div',{'style': $$_style,},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-pr','mx5-pointerdown': $viewId+'@:{stage~rs}()','mx5-contextmenu': $viewId+'@:{stage~rs}()','id': '_rd_so',},$vnode_1),$createVNode('div',{'id': '_rd_pole_'+($__line=61,$__art='{{=$viewId}}','')+$viewId,'style': 'margin-top:calc(-160px - '+($__line=61,$__art='{{=page.height*scale*page.pages}}',$__ctrl='<%=page.height*scale*page.pages%>',(page.height*scale*page.pages))+($__line=61,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+');display:none',})]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/stage.html'; throw msg; }  } ,
    init() {
        /**
         * 编辑区滚动节点
         */
        let bakScale = 0;
        this.set({
            fs: 0,
            unit: State.get('@:{global#stage.unit~rs}'),
            spad: const_1['@:{const#stage.padding~rs}'],
            fhf: FindHeaderAndFooterElements
        });
        let update = this['@:{debounce~rs}'](this.render, 10);
        //添加元素
        let addElements = e => {
            //fromToolbxSize = null;
            //拖动添加后，解锁快捷键操作
            State.set({
                '@:{global#stage.prevent.actions~rs}': 0
            });
            if (e.node) {
                let lastHod = sdrag_1['@:{sdrag#get.last.hod~rs}']();
                if (lastHod) {
                    let { classList } = lastHod;
                    //, '@:scoped.style:full-fill'
                    classList.remove('rd-_assets_index_less_-hod-drop-tip');
                }
                //鼠标下的节点不在设计区
                if (!inside(e.node, this.root)) {
                    return;
                }
            }
            sdrag_1['@:{sdrag#clear~rs}']();
            //添加元素
            let { '@:{add.elements~rs}': addElements, '@:{select.elements~rs}': selectElements } = stage_elements_1["@:{elements#add.element~rs}"](e);
            if (addElements.length) { //成功添加后更新界面并记录历史记录
                State.fire('@:{event#stage.elements.change~rs}');
                if (selectElements.length) {
                    stage_selection_1['@:{selection#set.all~rs}'](selectElements);
                    stage_generic_1['@:{generic#scroll.into.view~rs}'](selectElements[selectElements.length - 1].id);
                }
                history_1["@:{history#save~rs}"](history_1['@:{history#element.added~rs}'], stage_generic_1['@:{generic#query.element.name~rs}'](addElements));
            }
        };
        let updateStage = async (e) => {
            console.log(e);
            let elements = State.get('@:{global#stage.elements~rs}');
            let { step, '@:{fullscreen~rs}': fs } = e;
            console.log(e);
            if (step ||
                fs) {
                if (e['@:{fullscreen~rs}']) {
                    let page = State.get('@:{global#stage.page~rs}');
                    if (e['@:{is.full.screen~rs}']) {
                        let pxWidth = const_1['@:{const#to.px~rs}'](page.width);
                        let pxHeight = const_1['@:{const#to.px~rs}'](page.height);
                        let rh = pxHeight * page.pages;
                        let rwidth = e['@:{width~rs}'] / pxWidth;
                        let rheight = e['@:{height~rs}'] / rh;
                        let rbest = min(rwidth, rheight);
                        let rx = 0, ry = 0;
                        if (page.scaleType == 'auto') {
                            rx = rbest;
                            ry = rbest;
                        }
                        else {
                            rx = rwidth;
                            ry = rheight;
                        }
                        //console.log(e.width,e.height);
                        let marginTop = (e['@:{height~rs}'] - ry * rh) / 2, marginLeft = (e['@:{width~rs}'] - rx * pxWidth) / 2;
                        let current = State.get('@:{global#stage.scale~rs}');
                        if (current != 1) {
                            e.step = 1 / current;
                            bakScale = current;
                        }
                        else {
                            bakScale = 0;
                        }
                        console.log(rx, ry, marginTop, marginLeft);
                        State.set({
                            '@:{global#stage.scale~rs}': 1
                        });
                        this.set({
                            rx,
                            ry,
                            marginTop,
                            marginLeft
                        });
                    }
                    else {
                        if (bakScale != 0) {
                            e.step = bakScale;
                            State.set({
                                '@:{global#stage.scale~rs}': bakScale
                            });
                        }
                    }
                    this.set({
                        fs: e['@:{is.full.screen~rs}']
                    });
                }
                if (step) {
                    let flowConnector = [];
                    let flowProvider = State.get('@:{global#provider.of.flow~rs}');
                    let walk = es => {
                        for (let m of es) {
                            if (flowProvider &&
                                flowProvider['@:{flow.provider#is.connector~rs}'](m)) {
                                flowConnector.push(m);
                            }
                            else {
                                ScaleElement(m, step);
                                let { props, ctrl } = m;
                                if (ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                                    for (let row of props.rows) {
                                        for (let col of row.cols) {
                                            if (col.elements) {
                                                walk(col.elements);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                    walk(elements);
                    for (let m of flowConnector) {
                        ScaleElement(m, step);
                    }
                }
            }
            update();
            wsize_1['@:{wsize#update~rs}']();
            let updateMark = magix_1.mark(this, '@:{scroll.to.selected~rs}');
            if (e.type == '@:{event#history.shift.change~rs}') {
                await magix_1.delay(20);
                await lowTaskFinale();
                if (updateMark()) {
                    let selectedElements = State.get('@:{global#stage.select.elements~rs}');
                    if (selectedElements.length == 1) {
                        stage_generic_1['@:{generic#scroll.into.view~rs}'](selectedElements[0].id);
                    }
                }
            }
        };
        /**
         * 监听键盘事件
         * @param e 事件
         * @returns
         */
        let watchKeypress = (e) => {
            let fs = this.get('fs');
            let active = document.activeElement;
            let { '@:{keypress#code~rs}': code, '@:{keypress#is.key.down~rs}': isKeydown, '@:{keypress#shift.key~rs}': shiftKey, '@:{keypress#ctrl.key~rs}': ctrlKey, '@:{keypress#alt.key~rs}': altKey, '@:{keypress#active.is.input~rs}': activeIsInput, '@:{keypress#is.prevent.actions~rs}': prevent } = e;
            //全屏、事件被阻止、激活的是输入元素且不是指定的动作均不处理
            if (fs ||
                prevent ||
                !isKeydown ||
                (activeIsInput &&
                    (active.dataset.as != 'da' ||
                        code != keyboard_1["@:{key#tab~rs}"])))
                return;
            //console.log(ctrlKey, altKey, shiftKey);
            //键盘按键需要考虑精确匹配，比如ctrl+c需要排除ctrl+shift+c或ctrl+alt+c等情况
            if (!altKey) {
                if (ctrlKey) { //按下ctrl未按alt键
                    if (code == keyboard_1["@:{key#z~rs}"]) { //ctrl+z或ctrl+shift+z
                        e['@:{keypress#prevent.default~rs}']();
                        if (shiftKey) {
                            history_1["@:{history#redo~rs}"]();
                        }
                        else {
                            history_1["@:{history#undo~rs}"]();
                        }
                    }
                    else if (code == keyboard_1["@:{key#y~rs}"] &&
                        !shiftKey) { //仅ctrl+y
                        e['@:{keypress#prevent.default~rs}']();
                        history_1["@:{history#redo~rs}"]();
                    }
                    else if (code == keyboard_1["@:{key#a~rs}"] &&
                        !shiftKey) { //仅ctrl+a
                        e['@:{keypress#prevent.default~rs}']();
                        let stage = stage_generic_1['@:{generic#query.nearest.stage~rs}'](1);
                        let coll = stage["@:{collection~rs}"];
                        stage_generic_1['@:{generic#select.all.collection.elements~rs}'](coll);
                    }
                    else if (code == keyboard_1['@:{key#i~rs}'] &&
                        shiftKey) { //ctrl+shift+i
                        e['@:{keypress#prevent.default~rs}']();
                        let stage = stage_generic_1['@:{generic#query.nearest.stage~rs}'](1, null, -1, -1);
                        let coll = stage["@:{collection~rs}"];
                        stage_generic_1['@:{generic#select.all.collection.elements~rs}'](coll, shiftKey);
                    }
                    else if (code == keyboard_1["@:{key#x~rs}"] &&
                        !shiftKey) { //仅ctrl+x
                        e['@:{keypress#prevent.default~rs}']();
                        stage_clipboard_1["@:{cut.elements~rs}"]();
                    }
                    else if (code == keyboard_1["@:{key#c~rs}"] &&
                        !shiftKey) { //仅ctrl+c
                        e['@:{keypress#prevent.default~rs}']();
                        stage_clipboard_1["@:{copy.elements~rs}"]();
                    }
                    else if (code == keyboard_1["@:{key#v~rs}"] &&
                        !shiftKey) { //ctrl+v
                        e['@:{keypress#prevent.default~rs}']();
                        let stage = stage_generic_1['@:{generic#query.nearest.stage~rs}']();
                        stage_clipboard_1["@:{paste.elements~rs}"](stage);
                    }
                    else if (code == keyboard_1['@:{key#d~rs}'] &&
                        !shiftKey) { //ctrl+d
                        e['@:{keypress#prevent.default~rs}']();
                        let selectElementsMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
                        if (stage_generic_1['@:{generic#query.in.enable.hod~rs}'](selectElementsMap)) {
                            let stages = stage_generic_1['@:{generic#query.select.elements.stage~rs}']();
                            stage_clipboard_1['@:{duplicate.elements~rs}'](stages);
                        }
                    }
                    else if (code == keyboard_1["@:{key#g~rs}"]) { //ctrl+g或ctrl+shift+g
                        e['@:{keypress#prevent.default~rs}']();
                        let { '@:{can.group~rs}': canGroup, '@:{can.ungroup~rs}': canUngroup } = stage_generic_1["@:{generic#query.group.state~rs}"]();
                        if (canGroup || canUngroup) {
                            stage_generic_1["@:{generic#group.select.elements~rs}"](!canGroup);
                        }
                    }
                    else if (code == keyboard_1["@:{key#l~rs}"]) { //ctrl+l或ctrl+shift+l
                        e['@:{keypress#prevent.default~rs}']();
                        stage_generic_1["@:{generic#lock.select.elements~rs}"](0, 1);
                    }
                    else if (code == keyboard_1["@:{key#up~rs}"] ||
                        code == keyboard_1["@:{key#left~rs}"] ||
                        code == keyboard_1["@:{key#right~rs}"] ||
                        code == keyboard_1["@:{key#down~rs}"]) {
                        e['@:{keypress#prevent.default~rs}']();
                        let selectElements = State.get('@:{global#stage.select.elements~rs}');
                        if (selectElements.length == 1) {
                            let element = selectElements[0];
                            let { props, id, type, ctrl } = element;
                            if (!props.locked &&
                                (ctrl['@:{modifier~rs}'] & enum_1['@:{enum#modifier.rotate~rs}'])) {
                                let step = code == keyboard_1["@:{key#up~rs}"] ||
                                    code == keyboard_1["@:{key#left~rs}"] ? -1 : 1;
                                if (shiftKey) {
                                    step *= const_1['@:{const#keyboard.with.shift.rotate.step~rs}'];
                                }
                                else {
                                    step *= const_1['@:{const#keyboard.rotate.step~rs}'];
                                }
                                let r = props.rotate;
                                r += step;
                                r = (r + 360) % 360;
                                if (r != props.rotate) {
                                    props.rotate = r;
                                    let elementNode = node(id);
                                    let vf;
                                    if (elementNode) {
                                        vf = Vframe.byNode(elementNode);
                                    }
                                    if (vf) {
                                        if (ctrl['@:{update.props~rs}']) {
                                            ctrl['@:{update.props~rs}'](props);
                                        }
                                        vf.invoke('assign', [{ element }]).then(r => {
                                            if (r !== false) {
                                                vf.invoke('render');
                                            }
                                        });
                                    }
                                    State.fire('@:{event#stage.select.element.props.change~rs}', {
                                        '@:{ids~rs}': {
                                            [id]: 1
                                        },
                                        '@:{types~rs}': {
                                            [type]: 1
                                        },
                                        '@:{props~rs}': {
                                            rotate: 1
                                        }
                                    });
                                    let ename = stage_generic_1['@:{generic#query.element.name~rs}'](selectElements);
                                    history_1["@:{history#save~rs}"](history_1['@:{history#element.rotated~rs}'], ename, '@:{history#rotate.element.by.keyboard~rs}', 500);
                                }
                            }
                        }
                    }
                }
                else {
                    if (!shiftKey &&
                        code == keyboard_1['@:{key#escape~rs}']) {
                        let oldSelected = stage_selection_1["@:{selection#set~rs}"]();
                        if (oldSelected) {
                            history_1["@:{history#save~rs}"](history_1['@:{history#element.lost.focus~rs}'], stage_generic_1['@:{generic#query.element.name~rs}'](oldSelected));
                        }
                    }
                    else if (!shiftKey &&
                        code == keyboard_1["@:{key#space~rs}"]) { //space
                        let currentSelected = State.get('@:{global#stage.select.elements~rs}');
                        if (currentSelected.length == 1) {
                            let m = currentSelected[0];
                            stage_elements_1['@:{elements#space.or.double.click.action~rs}'](m, e);
                        }
                    }
                    else if (code == keyboard_1["@:{key#g~rs}"] &&
                        shiftKey) { //shift+g
                        e['@:{keypress#prevent.default~rs}']();
                        let { '@:{can.group~rs}': canGroup, '@:{can.ungroup~rs}': canUngroup } = stage_generic_1["@:{generic#query.group.state~rs}"]();
                        if (canGroup || canUngroup) {
                            stage_generic_1["@:{generic#group.select.elements~rs}"](canUngroup);
                        }
                    }
                    else if (code == keyboard_1["@:{key#l~rs}"] &&
                        shiftKey) { //shift+l
                        e['@:{keypress#prevent.default~rs}']();
                        stage_generic_1["@:{generic#lock.select.elements~rs}"](1, 1);
                    }
                    else if (code == keyboard_1["@:{key#tab~rs}"]) { //tab或shift+tab
                        e['@:{keypress#prevent.default~rs}']();
                        stage_elements_1["@:{elements#handle.key.tab~rs}"](shiftKey);
                    }
                    else if (!shiftKey && (code == keyboard_1["@:{key#delete~rs}"] ||
                        code == keyboard_1["@:{key#backspace~rs}"])) { //delete 或 backspace
                        e['@:{keypress#prevent.default~rs}']();
                        let selectElementsMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
                        let selectElements = State.get('@:{global#stage.select.elements~rs}');
                        let enable = stage_generic_1['@:{generic#query.in.enable.hod~rs}'](selectElementsMap);
                        let disabled = stage_generic_1['@:{generic#query.has.disabled~rs}'](selectElements);
                        if (enable && !disabled) {
                            stage_generic_1["@:{generic#delete.select.elements~rs}"]();
                        }
                    }
                    else if (!shiftKey && (code == keyboard_1["@:{key#d~rs}"] ||
                        code == keyboard_1["@:{key#u~rs}"] ||
                        code == keyboard_1["@:{key#t~rs}"] ||
                        code == keyboard_1["@:{key#b~rs}"])) {
                        e['@:{keypress#prevent.default~rs}']();
                        let selectElements = State.get('@:{global#stage.select.elements~rs}');
                        if (selectElements.length == 1) {
                            stage_elements_1["@:{elements#modify.element.z.index~rs}"](KeysToMenuId[code], selectElements[0]);
                        }
                    }
                    else if (!shiftKey && code == keyboard_1["@:{key#f~rs}"]) {
                        stage_elements_1["@:{elements#focus.select.element.hod~rs}"]();
                    }
                    else if (code == keyboard_1["@:{key#up~rs}"] ||
                        code == keyboard_1["@:{key#left~rs}"] ||
                        code == keyboard_1["@:{key#right~rs}"] ||
                        code == keyboard_1["@:{key#down~rs}"]) {
                        e['@:{keypress#prevent.default~rs}']();
                        /**
                         * 吸附网格我们只在拖动时做，因为拖动相对来讲不精确
                         * 通过属性面板或键盘时，我们支持微调
                         */
                        let scale = State.get('@:{global#stage.scale~rs}');
                        let stepX = const_1["@:{const#keyboard.move.step~rs}"], stepY = const_1["@:{const#keyboard.move.step~rs}"];
                        if (shiftKey) {
                            stepX = const_1["@:{const#keyboard.with.shift.move.step~rs}"];
                            stepY = const_1["@:{const#keyboard.with.shift.move.step~rs}"];
                        }
                        stepX *= scale;
                        stepY *= scale;
                        let selectElements = State.get('@:{global#stage.select.elements~rs}');
                        if (selectElements.length) {
                            let offset, use;
                            let newMap = {};
                            let groups = State.get('@:{global#stage.elements.groups~rs}');
                            let { '@:{generic.all#map~rs}': elementsMap, } = stage_generic_1["@:{generic#get.all.elements.and.map~rs}"]();
                            let newElements = [];
                            let ids = {}, types = {};
                            let flowProvider = State.get('@:{global#provider.of.flow~rs}');
                            let addElementToNewList = e => {
                                let { props, id, type } = e;
                                if (!newMap[id] &&
                                    (!flowProvider ||
                                        !flowProvider['@:{flow.provider#is.connector~rs}'](e))) {
                                    types[type] = 1;
                                    newMap[id] = 1;
                                    let { locked, pinX, pinY } = props;
                                    if (locked) {
                                        pinX = pinY = 1;
                                    }
                                    if (pinX) {
                                        stepX = 0;
                                    }
                                    if (pinY) {
                                        stepY = 0;
                                    }
                                    newElements.push(e);
                                }
                            };
                            for (let e of selectElements) {
                                addElementToNewList(e);
                                let list = groups[e.id];
                                if (list) {
                                    for (let n of list) {
                                        e = elementsMap[n];
                                        addElementToNewList(e);
                                    }
                                }
                            }
                            if (code == keyboard_1["@:{key#up~rs}"]) {
                                offset = -stepY;
                                use = 'y';
                            }
                            else if (code == keyboard_1["@:{key#down~rs}"]) {
                                offset = stepY;
                                use = 'y';
                            }
                            else if (code == keyboard_1["@:{key#left~rs}"]) {
                                offset = -stepX;
                                use = 'x';
                            }
                            else if (code == keyboard_1["@:{key#right~rs}"]) {
                                offset = stepX;
                                use = 'x';
                            }
                            if (offset) {
                                stage_elements_1['@:{elements#move.elements.by.ids~rs}'](newElements, use, const_1['@:{const#to.unit~rs}'](offset), ids, 1);
                                State.fire('@:{event#stage.select.element.props.change~rs}', {
                                    '@:{ids~rs}': ids,
                                    '@:{types~rs}': types,
                                    '@:{props~rs}': {
                                        '@:{position~rs}': 1
                                    }
                                });
                                let ename = stage_generic_1['@:{generic#query.element.name~rs}'](newElements);
                                history_1["@:{history#save~rs}"](history_1['@:{history#element.moved~rs}'], ename, '@:{history#move.element.by.keyboard~rs}', 500);
                            }
                        }
                    }
                }
            }
        };
        State.on('@:{event#preview~rs}', updateStage);
        State.on('@:{event#history.shift.change~rs}', updateStage);
        State.on('@:{event#stage.scale.change~rs}', updateStage);
        State.on('@:{event#stage.page.change~rs}', updateStage);
        State.on('@:{event#toolbox.add.element~rs}', addElements);
        State.on('@:{event#stage.elements.change~rs}', update);
        State.on('@:{event#stage.select.elements.change~rs}', update);
        State.on('@:{event#stage.key.press~rs}', watchKeypress);
        State.on('@:{event#stage.page.and.elements.change~rs}', update);
        wsize_1['@:{wsize#setup~rs}']();
        sdrop_1['@:{sdrop#setup~rs}']();
        pole_1['@:{pole#setup~rs}'](this);
        scroll_1['@:{scroll#setup~rs}']();
        sdrag_1['@:{sdrag#setup~rs}']();
        this.on('destroy', () => {
            State.off('@:{event#preview~rs}', updateStage);
            State.off('@:{event#history.shift.change~rs}', updateStage);
            State.off('@:{event#stage.scale.change~rs}', updateStage);
            State.off('@:{event#stage.page.change~rs}', updateStage);
            State.off('@:{event#toolbox.add.element~rs}', addElements);
            State.off('@:{event#stage.elements.change~rs}', update);
            State.off('@:{event#stage.select.elements.change~rs}', update);
            State.off('@:{event#stage.key.press~rs}', watchKeypress);
            State.off('@:{event#stage.page.and.elements.change~rs}', update);
            sdrop_1['@:{sdrop#teardown~rs}']();
            wsize_1['@:{wsize#teardown~rs}']();
            pole_1['@:{pole#teardown~rs}']();
            scroll_1['@:{scroll#teardown~rs}']();
            sdrag_1['@:{sdrag#clear~rs}']();
            sdrag_1['@:{sdrag#teardown~rs}']();
        });
    },
    render() {
        this.digest({
            unit: State.get('@:{global#stage.unit~rs}'),
            scale: State.get('@:{global#stage.scale~rs}'),
            page: State.get('@:{global#stage.page~rs}'),
            elements: State.get('@:{global#stage.elements~rs}')
        });
    },
    '@:{element.start.drag~rs}<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['@:{halt~rs}'])
            return;
        stage_elements_1["@:{elements#select.or.move.elements~rs}"](e, this);
    },
    '@:{stage~rs}<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['@:{halt~rs}'])
            return;
        let { target, shiftKey, ctrlKey, metaKey, pageX, pageY } = e;
        if (inside(node('_rd_sc'), target)) {
            let last = stage_selection_1['@:{selection#get.selected.map~rs}']();
            let hodElements, currentSelected;
            let initSelectedElements = [...State.get('@:{global#stage.select.elements~rs}')];
            let initIds = [], initIdsMap = {};
            for (let ise of initSelectedElements) {
                initIds.push(ise.id);
                initIdsMap[ise.id] = 1;
            }
            currentSelected = initIds.join(',');
            let stageElements = State.get('@:{global#stage.elements~rs}');
            let isShiftKeyStillPressed;
            if (shiftKey || ctrlKey || metaKey) {
                isShiftKeyStillPressed = 1;
                hodElements = stage_generic_1["@:{generic#find.hod.sub.elements.map~rs}"](stageElements);
            }
            else {
                stage_selection_1["@:{selection#set~rs}"]();
                initIdsMap = emptyObject;
            }
            select_1["@:{init~rs}"]();
            State.set({
                '@:{global#stage.prevent.actions~rs}': 1
            });
            let showedCursor;
            let elementLocations = stage_generic_1["@:{generic#get.elements.location~rs}"](stageElements);
            let moveEvent;
            let dragSelect = () => {
                if (!moveEvent)
                    return;
                if (!showedCursor) {
                    showedCursor = 1;
                    cursor_1["@:{show.by.type~rs}"]('default');
                }
                let { pageX: moveX, pageY: moveY } = moveEvent;
                let width = abs(pageX - moveX);
                let height = abs(pageY - moveY);
                let left = min(pageX, moveX);
                let top = min(pageY, moveY);
                select_1["@:{update~rs}"](left, top, width, height);
                let rect = transform_1["@:{transform#real.to.stage.coord~rs}"]({
                    x: left,
                    y: top
                });
                rect.width = width;
                rect.height = height;
                if (elementLocations.length) {
                    let intersect = stage_generic_1["@:{generic#get.intersect.elements~rs}"](elementLocations, rect, initSelectedElements, isShiftKeyStillPressed && hodElements, isShiftKeyStillPressed ? initIdsMap : emptyObject);
                    if (intersect["@:{ids~rs}"] != currentSelected) {
                        currentSelected = intersect["@:{ids~rs}"];
                        stage_selection_1["@:{selection#set.all~rs}"](intersect["@:{selected~rs}"]);
                    }
                }
            };
            //需要监听在拉框选择过程中，用户松开或再次按下shift键
            /**
             * 如果在按下鼠标拖动时，未按shift键，则后续再按shift键无效果
             * 如果在按下鼠标拖动时，按了shift键，而鼠标未松开的情况下，松开shift键，则需要立即同步未按shift键的效果，如果又再次按下shift键，则需要再次处理
             */
            let watchKeypress = e => {
                isShiftKeyStillPressed = e['@:{keypress#shift.key~rs}'] || e['@:{keypress#ctrl.key~rs}'];
                dragSelect();
            };
            State.on('@:{event#stage.key.press~rs}', watchKeypress);
            this['@:{drag.drop~rs}'](e, ex => {
                moveEvent = ex;
                dragSelect();
            }, () => {
                State.set({
                    '@:{global#stage.prevent.actions~rs}': 0
                });
                State.off('@:{event#stage.key.press~rs}', watchKeypress);
                if (showedCursor) {
                    select_1["@:{hide~rs}"]();
                    cursor_1["@:{hide~rs}"]();
                }
                let diff = stage_selection_1["@:{selection#has.changed~rs}"](last);
                if (diff['@:{selection.changed#has.diffed~rs}']) {
                    let { '@:{generic.diff.info#type~rs}': type, '@:{generic.diff.info#ename~rs}': ename } = stage_generic_1['@:{generic#query.history.info.by.diff~rs}'](diff);
                    history_1["@:{history#save~rs}"](type, ename);
                }
            });
        }
    },
    '@:{stage~rs}<contextmenu>'(e) {
        /**
         * 如果事件被处理过或者当前活动节点是可输入节点，则退出
         */
        if (e['@:{halt~rs}'] ||
            keyboard_1['@:{key#is.input.element~rs}'](e.target))
            return;
        //阻止系统的右键
        this['@:{prevent.default~rs}'](e);
        let collection = State.get('@:{global#stage.elements~rs}');
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let element = selectElements[0];
        //展示菜单
        stage_elements_1["@:{elements#show.contextmenu~rs}"](this, e, collection, 0, async (menu) => {
            //全选按钮
            if (menu.id == contextmenu_1["@:{cm#all.id~rs}"] ||
                menu.id == contextmenu_1['@:{cm#reverse.id~rs}']) {
                stage_generic_1['@:{generic#select.all.collection.elements~rs}'](collection, menu.id == contextmenu_1['@:{cm#reverse.id~rs}']);
                //复制
            }
            else if (menu.id == contextmenu_1["@:{cm#copy.id~rs}"]) {
                stage_clipboard_1["@:{copy.elements~rs}"](e);
                //粘贴
            }
            else if (menu.id == contextmenu_1["@:{cm#paste.id~rs}"]) {
                let p = transform_1["@:{transform#real.to.stage.coord~rs}"]({
                    x: e.pageX,
                    y: e.pageY
                });
                let stage = stage_generic_1['@:{generic#query.nearest.stage~rs}']();
                stage_clipboard_1["@:{paste.elements~rs}"](stage, p);
                //剪切
            }
            else if (menu.id == contextmenu_1['@:{cm#duplicate.id~rs}']) {
                let stages = stage_generic_1['@:{generic#query.select.elements.stage~rs}']();
                stage_clipboard_1['@:{duplicate.elements~rs}'](stages);
            }
            else if (menu.id == contextmenu_1["@:{cm#cut.id~rs}"]) {
                stage_clipboard_1["@:{cut.elements~rs}"](e);
                //删除
            }
            else if (menu.id == contextmenu_1["@:{cm#delete.id~rs}"]) {
                stage_generic_1["@:{generic#delete.select.elements~rs}"]();
                //清空设计区
            }
            else if (menu.id == contextmenu_1['@:{cm#clear.id~rs}']) {
                State.fire('@:{event#stage.clear.elements~rs}');
                //3~6进行z轴的调整
            }
            else if (menu.id == contextmenu_1['@:{cm#new.id~rs}']) {
                State.fire('@:{event#stage.clear.elements~rs}', {
                    '@:{clear.events#action~rs}': '@:{clear.events#new~rs}'
                });
            }
            else if (menu.id >= 3 && menu.id <= 6) {
                stage_elements_1["@:{elements#modify.element.z.index~rs}"](menu.id, element);
                //20~29 表示对齐
            }
            else if (menu.id > 19 && menu.id < 30) {
                stage_elements_1["@:{elements#align.elements~rs}"](menu.to);
                //31~39表示组合
            }
            else if (menu.id > 30 && menu.id < 40) {
                let ungroup = menu.id == 32;
                stage_generic_1["@:{generic#group.select.elements~rs}"](ungroup);
                //41~49表示同步尺寸
            }
            else if (menu.id > 40 && menu.id < 50) {
                let from = (menu.id == contextmenu_1["@:{cm#sync.width.as.height.id~rs}"] || menu.id == contextmenu_1["@:{cm#sync.width.id~rs}"]) ? 1 : 0;
                let to = (menu.id == contextmenu_1["@:{cm#sync.height.id~rs}"] ||
                    menu.id == contextmenu_1["@:{cm#sync.width.as.height.id~rs}"]) ? 0 : 1;
                let [result, id, element] = await stage_elements_1["@:{elements#sync.or.reverse.size.elements~rs}"](from, to);
                if (result) {
                    State.fire('@:{event#stage.select.element.props.change~rs}', {
                        '@:{ids~rs}': {
                            [id]: 1
                        },
                        '@:{types~rs}': {
                            [element.type]: 1
                        },
                        '@:{props~rs}': {
                            '@:{size~rs}': 1
                        }
                    });
                    history_1["@:{history#save~rs}"](history_1['@:{history#element.sync.size~rs}']);
                }
            }
        });
    },
    '$root<drop>'(e) {
        sdrop_1['@:{sdrop#drop~rs}'](e);
    },
    '$root<dragenter>'(e) {
        sdrop_1['@:{sdrop#drag.enter~rs}'](e);
    }
}).merge(index_1);

});