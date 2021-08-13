/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6b",["5c","../5j/5k/index","../5j/5l/cursor","../5j/5l/select","../5r/pole","../5r/scroll","../5r/sdrag","../5r/sdrop","../5r/wsize","./5e","./5t","./enum","./5o","./5p","./68","./64","./65","./69","./5f","61/hod-header/stage","61/hod-footer/stage","./align"],(require,exports,module)=>{
require("61/hod-header/stage");
require("61/hod-footer/stage");
require("./align");
let $quick_mb_0_static_node;
let $quick_mb_1_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let index_1 = require("../5j/5k/index");
let cursor_1 = require("../5j/5l/cursor");
let select_1 = require("../5j/5l/select");
let pole_1 = require("../5r/pole");
let scroll_1 = require("../5r/scroll");
let sdrag_1 = require("../5r/sdrag");
let sdrop_1 = require("../5r/sdrop");
let wsize_1 = require("../5r/wsize");
let const_1 = require("./5e");
let contextmenu_1 = require("./5t");
let enum_1 = require("./enum");
let history_1 = require("./5o");
let keyboard_1 = require("./5p");
let stage_clipboard_1 = require("./68");
let stage_elements_1 = require("./64");
let stage_generic_1 = require("./65");
let stage_selection_1 = require("./69");
let transform_1 = require("./5f");
let emptyObject = {};
let { State, Vframe, node, applyStyle, View, inside, isFunction, lowTaskFinale } = magix_1;
let { min, abs } = Math;
//缩放元素
let ScaleElement = (m, step) => {
    let { props, ctrl } = m;
    for (let s of ctrl.props) {
        if (isFunction(s['_oy'])) {
            s['_oy'](props, step);
        }
        else if (s['_nA']) {
            props[s.key] *= step;
        }
    }
    if (ctrl['_m3']) {
        ctrl['_m3'](props);
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
    [keyboard_1["mq"]]: 5,
    [keyboard_1["mk"]]: 6,
    [keyboard_1["mp"]]: 3,
    [keyboard_1["mj"]]: 4
};
applyStyle("rd-l9",".rd-pe{background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,.3)}.rd-pf{border-top:1px dotted #7b7b7b}.rd-pg{color:#7b7b7b;left:-16px;top:-9px}.rd-ph{color:#7b7b7b;right:-16px;top:-9px}.rd-pi{outline:1px dotted #7b7b7b}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
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
$vnode_3=[];let count=page.pages,headAndFooter=count?fhf(elements):0;;
for(let i=0;i<count;i++){
$vnode_4=[];
if(page.xOffset!=0||page.yOffset!=0){
$vnode_5=[];
if(i){

if($quick_mb_0_static_node){
$vnode_5.push($quick_mb_0_static_node);
}else{
$vnode_6=[$createVNode(0,'')];$vnode_5.push($quick_mb_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-l3 rd-mJ rd-pg',},$vnode_6));
}

if($quick_mb_1_static_node){
$vnode_5.push($quick_mb_1_static_node);
}else{
$vnode_6=[$createVNode(0,'')];$vnode_5.push($quick_mb_1_static_node=$createVNode('i',{'_': 'i@','class': 'rd-l3 rd-mJ rd-ph',},$vnode_6));
}

}$vnode_4.push($createVNode('div',{'class': 'rd-mB rd-mC rd-mJ rd-pi','style': 'transform:translate('+(-page.xOffset)+(unit)+','+(-page.yOffset)+(unit)+')',},$vnode_5));
}
if(i){

if($quick_mb_0_static_node){
$vnode_4.push($quick_mb_0_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_mb_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-l3 rd-mJ rd-pg',},$vnode_5));
}

if($quick_mb_1_static_node){
$vnode_4.push($quick_mb_1_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_mb_1_static_node=$createVNode('i',{'_': 'i@','class': 'rd-l3 rd-mJ rd-ph',},$vnode_5));
}

}
for(let $q_c_bonctsm=headAndFooter.length,$q_key_sphlfvqngli=0;$q_key_sphlfvqngli<$q_c_bonctsm;$q_key_sphlfvqngli+=1){
let e=headAndFooter[$q_key_sphlfvqngli];

if(i&&e.type=='hod-header'){
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'unit','mx5-view': '61/hod-header/stage?props='+$keyOf($refData,e.props)+'&unit='+$keyOf($refData,unit,'i!'),}));
}else if(i<count-1 && e.type=='hod-footer'){
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'unit','mx5-view': '61/hod-footer/stage?props='+$keyOf($refData,e.props)+'&unit='+$keyOf($refData,unit,'i!'),}));
}
};$$_class='rd-mJ rd-mL';if(i){;$$_class+=' rd-pf';};$$_style='top:'+(page.height*scale*i)+(unit)+';width:'+(page.width*scale)+(unit)+';height:'+(page.height*scale)+(unit)+';';if(page.backgroundImage){;$$_style+='background-image:url('+(page.backgroundImage)+');background-repeat:'+(page.backgroundRepeat=='full'?'no-repeat':page.backgroundRepeat)+';background-size:';if(page.backgroundRepeat=='full'){;$$_style+='100% 100%';}else{;$$_style+=''+(page.backgroundWidth*scale)+(unit)+' '+(page.backgroundHeight*scale)+(unit)+';background-position:'+(page.backgroundXOffset)+(unit)+' '+(page.backgroundYOffset)+(unit);};};$vnode_3.push($createVNode('div',{'class': $$_class,'style': $$_style,},$vnode_4));
}
for(let $q_c_pinpnldch=elements.length,$q_key_comhztob=0;$q_key_comhztob<$q_c_pinpnldch;$q_key_comhztob+=1){
let e=elements[$q_key_comhztob];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'elements,fs,unit','id': (e.id),'mx5-view': '61/'+(e.type)+'/designer?element='+$keyOf($refData,e,'i@.'+($q_key_comhztob)+'.i$')+'&ownerId=s&fs='+$keyOf($refData,fs,'i^')+'&unit='+$keyOf($refData,unit,'i!'),'class': 'rd-on','mx5-pointerdown': $viewId+'2_ph({element:\''+$keyOf($refData,e,'i@.'+($q_key_comhztob)+'.i$')+'\'})',}));
}$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-mL','mx5-view': '5b/align',}));$vnode_2=[$createVNode('div',{'class': 'rd-mK rd-on rd-pe','style': 'width:'+(page.width*scale)+(unit)+';height:'+(page.height*scale*page.pages)+(unit)+';background:'+(page.background),'data-as': 'hod','id': '_rd_sc',},$vnode_3)];;$$_style='';if(fs){;$$_style+='transform:scaleX('+(rx)+') scaleY('+(ry)+');transform-origin:0 0;margin:'+(marginTop)+'px 0 0 '+(marginLeft)+'px';}else{;$$_style+='padding:'+(spad.join('px '))+'px';};$vnode_1=[$createVNode('div',{'style': $$_style,},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-mK rd-mX','mx5-pointerdown': $viewId+'_oY()','mx5-contextmenu': $viewId+'_oY()','id': '_rd_so',},$vnode_1),$createVNode('div',{'id': '_rd_pole_'+$viewId,'style': 'margin-top:calc(-160px - '+(page.height*scale*page.pages)+(unit)+');display:none',})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        /**
         * 编辑区滚动节点
         */
        let bakScale = 0;
        this.set({
            fs: 0,
            unit: State.get('l4'),
            spad: const_1['mg'],
            fhf: FindHeaderAndFooterElements
        });
        let update = this['_mb'](this.render, 10);
        //添加元素
        let addElements = e => {
            //fromToolbxSize = null;
            //拖动添加后，解锁快捷键操作
            State.set({
                'l8': 0
            });
            if (e.node) {
                let lastHod = sdrag_1['l2']();
                if (lastHod) {
                    let { classList } = lastHod;
                    //, '@:scoped.style:full-fill'
                    classList.remove('rd-nz');
                }
                //鼠标下的节点不在设计区
                if (!inside(e.node, this.root)) {
                    return;
                }
            }
            sdrag_1['l3']();
            //添加元素
            let { '_oE': addElements, '_oF': selectElements } = stage_elements_1["l4"](e);
            if (addElements.length) { //成功添加后更新界面并记录历史记录
                State.fire('mp');
                if (selectElements.length) {
                    stage_selection_1['l4'](selectElements);
                    stage_generic_1['mf'](selectElements[selectElements.length - 1].id);
                }
                history_1["l2"](history_1['mm'], stage_generic_1['md'](addElements));
            }
        };
        let updateStage = async (e) => {
            console.log(e);
            let elements = State.get('m_');
            let { step, '_np': fs } = e;
            console.log(e);
            if (step ||
                fs) {
                if (e['_np']) {
                    let page = State.get('ma');
                    if (e['_ns']) {
                        let pxWidth = const_1['mM'](page.width);
                        let pxHeight = const_1['mM'](page.height);
                        let rh = pxHeight * page.pages;
                        let rwidth = e['_nq'] / pxWidth;
                        let rheight = e['_nr'] / rh;
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
                        let marginTop = (e['_nr'] - ry * rh) / 2, marginLeft = (e['_nq'] - rx * pxWidth) / 2;
                        let current = State.get('l3');
                        if (current != 1) {
                            e.step = 1 / current;
                            bakScale = current;
                        }
                        else {
                            bakScale = 0;
                        }
                        console.log(rx, ry, marginTop, marginLeft);
                        State.set({
                            'l3': 1
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
                                'l3': bakScale
                            });
                        }
                    }
                    this.set({
                        fs: e['_ns']
                    });
                }
                if (step) {
                    let flowConnector = [];
                    let flowProvider = State.get('me');
                    let walk = es => {
                        for (let m of es) {
                            if (flowProvider &&
                                flowProvider['l2'](m)) {
                                flowConnector.push(m);
                            }
                            else {
                                ScaleElement(m, step);
                                let { props, ctrl } = m;
                                if (ctrl.as & enum_1['l5']) {
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
            wsize_1['l2']();
            let updateMark = magix_1.mark(this, '_pg');
            if (e.type == 'l7') {
                await magix_1.delay(20);
                await lowTaskFinale();
                if (updateMark()) {
                    let selectedElements = State.get('l2');
                    if (selectedElements.length == 1) {
                        stage_generic_1['mf'](selectedElements[0].id);
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
            let { 'l5': code, 'l3': isKeydown, 'l6': shiftKey, 'l7': ctrlKey, 'l8': altKey, 'l4': activeIsInput, 'l2': prevent } = e;
            //全屏、事件被阻止、激活的是输入元素且不是指定的动作均不处理
            if (fs ||
                prevent ||
                !isKeydown ||
                (activeIsInput &&
                    (active.dataset.as != 'da' ||
                        code != keyboard_1["l3"])))
                return;
            //console.log(ctrlKey, altKey, shiftKey);
            //键盘按键需要考虑精确匹配，比如ctrl+c需要排除ctrl+shift+c或ctrl+alt+c等情况
            if (!altKey) {
                if (ctrlKey) { //按下ctrl未按alt键
                    if (code == keyboard_1["mb"]) { //ctrl+z或ctrl+shift+z
                        e['l9']();
                        if (shiftKey) {
                            history_1["mK"]();
                        }
                        else {
                            history_1["mJ"]();
                        }
                    }
                    else if (code == keyboard_1["mt"] &&
                        !shiftKey) { //仅ctrl+y
                        e['l9']();
                        history_1["mK"]();
                    }
                    else if (code == keyboard_1["mi"] &&
                        !shiftKey) { //仅ctrl+a
                        e['l9']();
                        let stage = stage_generic_1['mx'](1);
                        let coll = stage["_oe"];
                        stage_generic_1['my'](coll);
                    }
                    else if (code == keyboard_1['mo'] &&
                        shiftKey) { //ctrl+shift+i
                        e['l9']();
                        let stage = stage_generic_1['mx'](1, null, -1, -1);
                        let coll = stage["_oe"];
                        stage_generic_1['my'](coll, shiftKey);
                    }
                    else if (code == keyboard_1["ms"] &&
                        !shiftKey) { //仅ctrl+x
                        e['l9']();
                        stage_clipboard_1["_ot"]();
                    }
                    else if (code == keyboard_1["md"] &&
                        !shiftKey) { //仅ctrl+c
                        e['l9']();
                        stage_clipboard_1["_os"]();
                    }
                    else if (code == keyboard_1["mr"] &&
                        !shiftKey) { //ctrl+v
                        e['l9']();
                        let stage = stage_generic_1['mx']();
                        stage_clipboard_1["_ow"](stage);
                    }
                    else if (code == keyboard_1['mk'] &&
                        !shiftKey) { //ctrl+d
                        e['l9']();
                        let selectElementsMap = stage_selection_1['l7']();
                        if (stage_generic_1['mj'](selectElementsMap)) {
                            let stages = stage_generic_1['mg']();
                            stage_clipboard_1['_ov'](stages);
                        }
                    }
                    else if (code == keyboard_1["mm"]) { //ctrl+g或ctrl+shift+g
                        e['l9']();
                        let { '_o5': canGroup, '_o4': canUngroup } = stage_generic_1["mm"]();
                        if (canGroup || canUngroup) {
                            stage_generic_1["ms"](!canGroup);
                        }
                    }
                    else if (code == keyboard_1["mn"]) { //ctrl+l或ctrl+shift+l
                        e['l9']();
                        stage_generic_1["mr"](0, 1);
                    }
                    else if (code == keyboard_1["l8"] ||
                        code == keyboard_1["l6"] ||
                        code == keyboard_1["l7"] ||
                        code == keyboard_1["l9"]) {
                        e['l9']();
                        let selectElements = State.get('l2');
                        if (selectElements.length == 1) {
                            let element = selectElements[0];
                            let { props, id, type, ctrl } = element;
                            if (!props.locked &&
                                (ctrl['_oG'] & enum_1['me'])) {
                                let step = code == keyboard_1["l8"] ||
                                    code == keyboard_1["l6"] ? -1 : 1;
                                if (shiftKey) {
                                    step *= const_1['mw'];
                                }
                                else {
                                    step *= const_1['mv'];
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
                                        if (ctrl['_m3']) {
                                            ctrl['_m3'](props);
                                        }
                                        vf.invoke('assign', [{ element }]).then(r => {
                                            if (r !== false) {
                                                vf.invoke('render');
                                            }
                                        });
                                    }
                                    State.fire('l4', {
                                        '_nK': {
                                            [id]: 1
                                        },
                                        '_nL': {
                                            [type]: 1
                                        },
                                        '_l3': {
                                            rotate: 1
                                        }
                                    });
                                    let ename = stage_generic_1['md'](selectElements);
                                    history_1["l2"](history_1['mu'], ename, 'mN', 500);
                                }
                            }
                        }
                    }
                }
                else {
                    if (!shiftKey &&
                        code == keyboard_1['mh']) {
                        let oldSelected = stage_selection_1["l3"]();
                        if (oldSelected) {
                            history_1["l2"](history_1['mh'], stage_generic_1['md'](oldSelected));
                        }
                    }
                    else if (!shiftKey &&
                        code == keyboard_1["mu"]) { //space
                        let currentSelected = State.get('l2');
                        if (currentSelected.length == 1) {
                            let m = currentSelected[0];
                            stage_elements_1['l6'](m, e);
                        }
                    }
                    else if (code == keyboard_1["mm"] &&
                        shiftKey) { //shift+g
                        e['l9']();
                        let { '_o5': canGroup, '_o4': canUngroup } = stage_generic_1["mm"]();
                        if (canGroup || canUngroup) {
                            stage_generic_1["ms"](canUngroup);
                        }
                    }
                    else if (code == keyboard_1["mn"] &&
                        shiftKey) { //shift+l
                        e['l9']();
                        stage_generic_1["mr"](1, 1);
                    }
                    else if (code == keyboard_1["l3"]) { //tab或shift+tab
                        e['l9']();
                        stage_elements_1["mb"](shiftKey);
                    }
                    else if (!shiftKey && (code == keyboard_1["l4"] ||
                        code == keyboard_1["l5"])) { //delete 或 backspace
                        e['l9']();
                        let selectElementsMap = stage_selection_1['l7']();
                        let selectElements = State.get('l2');
                        let enable = stage_generic_1['mj'](selectElementsMap);
                        let disabled = stage_generic_1['ml'](selectElements);
                        if (enable && !disabled) {
                            stage_generic_1["mu"]();
                        }
                    }
                    else if (!shiftKey && (code == keyboard_1["mk"] ||
                        code == keyboard_1["mq"] ||
                        code == keyboard_1["mp"] ||
                        code == keyboard_1["mj"])) {
                        e['l9']();
                        let selectElements = State.get('l2');
                        if (selectElements.length == 1) {
                            stage_elements_1["ma"](KeysToMenuId[code], selectElements[0]);
                        }
                    }
                    else if (!shiftKey && code == keyboard_1["ml"]) {
                        stage_elements_1["m_"]();
                    }
                    else if (code == keyboard_1["l8"] ||
                        code == keyboard_1["l6"] ||
                        code == keyboard_1["l7"] ||
                        code == keyboard_1["l9"]) {
                        e['l9']();
                        /**
                         * 吸附网格我们只在拖动时做，因为拖动相对来讲不精确
                         * 通过属性面板或键盘时，我们支持微调
                         */
                        let scale = State.get('l3');
                        let stepX = const_1["l9"], stepY = const_1["l9"];
                        if (shiftKey) {
                            stepX = const_1["l8"];
                            stepY = const_1["l8"];
                        }
                        stepX *= scale;
                        stepY *= scale;
                        let selectElements = State.get('l2');
                        if (selectElements.length) {
                            let offset, use;
                            let newMap = {};
                            let groups = State.get('mc');
                            let { 'l3': elementsMap, } = stage_generic_1["l2"]();
                            let newElements = [];
                            let ids = {}, types = {};
                            let flowProvider = State.get('me');
                            let addElementToNewList = e => {
                                let { props, id, type } = e;
                                if (!newMap[id] &&
                                    (!flowProvider ||
                                        !flowProvider['l2'](e))) {
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
                            if (code == keyboard_1["l8"]) {
                                offset = -stepY;
                                use = 'y';
                            }
                            else if (code == keyboard_1["l9"]) {
                                offset = stepY;
                                use = 'y';
                            }
                            else if (code == keyboard_1["l6"]) {
                                offset = -stepX;
                                use = 'x';
                            }
                            else if (code == keyboard_1["l7"]) {
                                offset = stepX;
                                use = 'x';
                            }
                            if (offset) {
                                stage_elements_1['mc'](newElements, use, const_1['l3'](offset), ids, 1);
                                State.fire('l4', {
                                    '_nK': ids,
                                    '_nL': types,
                                    '_l3': {
                                        '_l4': 1
                                    }
                                });
                                let ename = stage_generic_1['md'](newElements);
                                history_1["l2"](history_1['mj'], ename, 'mO', 500);
                            }
                        }
                    }
                }
            }
        };
        State.on('mj', updateStage);
        State.on('l7', updateStage);
        State.on('l6', updateStage);
        State.on('l8', updateStage);
        State.on('mh', addElements);
        State.on('mp', update);
        State.on('l5', update);
        State.on('ma', watchKeypress);
        State.on('m_', update);
        wsize_1['l3']();
        sdrop_1['l2']();
        pole_1['l2'](this);
        scroll_1['l2']();
        sdrag_1['l4']();
        this.on('destroy', () => {
            State.off('mj', updateStage);
            State.off('l7', updateStage);
            State.off('l6', updateStage);
            State.off('l8', updateStage);
            State.off('mh', addElements);
            State.off('mp', update);
            State.off('l5', update);
            State.off('ma', watchKeypress);
            State.off('m_', update);
            sdrop_1['l3']();
            wsize_1['l4']();
            pole_1['l3']();
            scroll_1['l3']();
            sdrag_1['l3']();
            sdrag_1['l5']();
        });
    },
    render() {
        this.digest({
            unit: State.get('l4'),
            scale: State.get('l3'),
            page: State.get('ma'),
            elements: State.get('m_')
        });
    },
    '_ph<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['_mW'])
            return;
        stage_elements_1["l9"](e, this);
    },
    '_oY<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['_mW'])
            return;
        let { target, shiftKey, ctrlKey, metaKey, pageX, pageY } = e;
        if (inside(node('_rd_sc'), target)) {
            let last = stage_selection_1['l7']();
            let hodElements, currentSelected;
            let initSelectedElements = [...State.get('l2')];
            let initIds = [], initIdsMap = {};
            for (let ise of initSelectedElements) {
                initIds.push(ise.id);
                initIdsMap[ise.id] = 1;
            }
            currentSelected = initIds.join(',');
            let stageElements = State.get('m_');
            let isShiftKeyStillPressed;
            if (shiftKey || ctrlKey || metaKey) {
                isShiftKeyStillPressed = 1;
                hodElements = stage_generic_1["mt"](stageElements);
            }
            else {
                stage_selection_1["l3"]();
                initIdsMap = emptyObject;
            }
            select_1["_m4"]();
            State.set({
                'l8': 1
            });
            let showedCursor;
            let elementLocations = stage_generic_1["mo"](stageElements);
            let moveEvent;
            let dragSelect = () => {
                if (!moveEvent)
                    return;
                if (!showedCursor) {
                    showedCursor = 1;
                    cursor_1["_oL"]('default');
                }
                let { pageX: moveX, pageY: moveY } = moveEvent;
                let width = abs(pageX - moveX);
                let height = abs(pageY - moveY);
                let left = min(pageX, moveX);
                let top = min(pageY, moveY);
                select_1["_ol"](left, top, width, height);
                let rect = transform_1["l6"]({
                    x: left,
                    y: top
                });
                rect.width = width;
                rect.height = height;
                if (elementLocations.length) {
                    let intersect = stage_generic_1["mp"](elementLocations, rect, initSelectedElements, isShiftKeyStillPressed && hodElements, isShiftKeyStillPressed ? initIdsMap : emptyObject);
                    if (intersect["_nK"] != currentSelected) {
                        currentSelected = intersect["_nK"];
                        stage_selection_1["l4"](intersect["_ou"]);
                    }
                }
            };
            //需要监听在拉框选择过程中，用户松开或再次按下shift键
            /**
             * 如果在按下鼠标拖动时，未按shift键，则后续再按shift键无效果
             * 如果在按下鼠标拖动时，按了shift键，而鼠标未松开的情况下，松开shift键，则需要立即同步未按shift键的效果，如果又再次按下shift键，则需要再次处理
             */
            let watchKeypress = e => {
                isShiftKeyStillPressed = e['l6'] || e['l7'];
                dragSelect();
            };
            State.on('ma', watchKeypress);
            this['_mz'](e, ex => {
                moveEvent = ex;
                dragSelect();
            }, () => {
                State.set({
                    'l8': 0
                });
                State.off('ma', watchKeypress);
                if (showedCursor) {
                    select_1["_mB"]();
                    cursor_1["_mB"]();
                }
                let diff = stage_selection_1["l8"](last);
                if (diff['l5']) {
                    let { 'l2': type, 'l3': ename } = stage_generic_1['mv'](diff);
                    history_1["l2"](type, ename);
                }
            });
        }
    },
    '_oY<contextmenu>'(e) {
        /**
         * 如果事件被处理过或者当前活动节点是可输入节点，则退出
         */
        if (e['_mW'] ||
            keyboard_1['my'](e.target))
            return;
        //阻止系统的右键
        this['_nS'](e);
        let collection = State.get('m_');
        let selectElements = State.get('l2');
        let element = selectElements[0];
        //展示菜单
        stage_elements_1["mh"](this, e, collection, 0, async (menu) => {
            //全选按钮
            if (menu.id == contextmenu_1["l2"] ||
                menu.id == contextmenu_1['mq']) {
                stage_generic_1['my'](collection, menu.id == contextmenu_1['mq']);
                //复制
            }
            else if (menu.id == contextmenu_1["l9"]) {
                stage_clipboard_1["_os"](e);
                //粘贴
            }
            else if (menu.id == contextmenu_1["l3"]) {
                let p = transform_1["l6"]({
                    x: e.pageX,
                    y: e.pageY
                });
                let stage = stage_generic_1['mx']();
                stage_clipboard_1["_ow"](stage, p);
                //剪切
            }
            else if (menu.id == contextmenu_1['m_']) {
                let stages = stage_generic_1['mg']();
                stage_clipboard_1['_ov'](stages);
            }
            else if (menu.id == contextmenu_1["l8"]) {
                stage_clipboard_1["_ot"](e);
                //删除
            }
            else if (menu.id == contextmenu_1["ma"]) {
                stage_generic_1["mu"]();
                //清空设计区
            }
            else if (menu.id == contextmenu_1['mb']) {
                State.fire('ml');
                //3~6进行z轴的调整
            }
            else if (menu.id == contextmenu_1['mc']) {
                State.fire('ml', {
                    'l2': 'l3'
                });
            }
            else if (menu.id >= 3 && menu.id <= 6) {
                stage_elements_1["ma"](menu.id, element);
                //20~29 表示对齐
            }
            else if (menu.id > 19 && menu.id < 30) {
                stage_elements_1["md"](menu.to);
                //31~39表示组合
            }
            else if (menu.id > 30 && menu.id < 40) {
                let ungroup = menu.id == 32;
                stage_generic_1["ms"](ungroup);
                //41~49表示同步尺寸
            }
            else if (menu.id > 40 && menu.id < 50) {
                let from = (menu.id == contextmenu_1["mf"] || menu.id == contextmenu_1["mh"]) ? 1 : 0;
                let to = (menu.id == contextmenu_1["mi"] ||
                    menu.id == contextmenu_1["mf"]) ? 0 : 1;
                let [result, id, element] = await stage_elements_1["me"](from, to);
                if (result) {
                    State.fire('l4', {
                        '_nK': {
                            [id]: 1
                        },
                        '_nL': {
                            [element.type]: 1
                        },
                        '_l3': {
                            '_l5': 1
                        }
                    });
                    history_1["l2"](history_1['ml']);
                }
            }
        });
    },
    '$root<drop>'(e) {
        sdrop_1['l4'](e);
    },
    '$root<dragenter>'(e) {
        sdrop_1['l5'](e);
    }
}).merge(index_1);

});