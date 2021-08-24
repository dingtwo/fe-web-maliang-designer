/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/60",["51","../58/59/index","../58/5a/cursor","../58/5a/select","../5g/pole","../5g/scroll","../5g/sdrag","../5g/sdrop","../5g/wsize","./53","./5i","./enum","./5d","./5e","./5t","./5p","./5q","./5u","./54","5m/hod-header/stage","5m/hod-footer/stage","./align"],(require,exports,module)=>{
require("5m/hod-header/stage");
require("5m/hod-footer/stage");
require("./align");
let $quick_gn_0_static_node;
let $quick_gn_1_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../58/59/index");
let cursor_1 = require("../58/5a/cursor");
let select_1 = require("../58/5a/select");
let pole_1 = require("../5g/pole");
let scroll_1 = require("../5g/scroll");
let sdrag_1 = require("../5g/sdrag");
let sdrop_1 = require("../5g/sdrop");
let wsize_1 = require("../5g/wsize");
let const_1 = require("./53");
let contextmenu_1 = require("./5i");
let enum_1 = require("./enum");
let history_1 = require("./5d");
let keyboard_1 = require("./5e");
let stage_clipboard_1 = require("./5t");
let stage_elements_1 = require("./5p");
let stage_generic_1 = require("./5q");
let stage_selection_1 = require("./5u");
let transform_1 = require("./54");
let emptyObject = {};
let { State, Vframe, node, applyStyle, View, inside, isFunction, lowTaskFinale } = magix_1;
let { min, abs } = Math;
//缩放元素
let ScaleElement = (m, step) => {
    let { props, ctrl } = m;
    for (let s of ctrl.props) {
        if (isFunction(s['_iN'])) {
            s['_iN'](props, step);
        }
        else if (s['_hM']) {
            props[s.key] *= step;
        }
    }
    if (ctrl['_he']) {
        ctrl['_he'](props);
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
    [keyboard_1["gC"]]: 5,
    [keyboard_1["gw"]]: 6,
    [keyboard_1["gB"]]: 3,
    [keyboard_1["gv"]]: 4
};
applyStyle("rd-gk",".rd-jq{background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,.3)}.rd-jr{border-top:1px dotted #7b7b7b}.rd-js{color:#7b7b7b;left:-16px;top:-9px}.rd-jt{color:#7b7b7b;right:-16px;top:-9px}.rd-ju{outline:1px dotted #7b7b7b}");
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

if($quick_gn_0_static_node){
$vnode_5.push($quick_gn_0_static_node);
}else{
$vnode_6=[$createVNode(0,'')];$vnode_5.push($quick_gn_0_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gV rd-ge rd-js',},$vnode_6));
}

if($quick_gn_1_static_node){
$vnode_5.push($quick_gn_1_static_node);
}else{
$vnode_6=[$createVNode(0,'')];$vnode_5.push($quick_gn_1_static_node=$createVNode('i',{'_': 'eE','class': 'rd-gV rd-ge rd-jt',},$vnode_6));
}

}$vnode_4.push($createVNode('div',{'class': 'rd-gN rd-gO rd-gV rd-ju','style': 'transform:translate('+(-page.xOffset)+(unit)+','+(-page.yOffset)+(unit)+')',},$vnode_5));
}
if(i){

if($quick_gn_0_static_node){
$vnode_4.push($quick_gn_0_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_gn_0_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gV rd-ge rd-js',},$vnode_5));
}

if($quick_gn_1_static_node){
$vnode_4.push($quick_gn_1_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_gn_1_static_node=$createVNode('i',{'_': 'eE','class': 'rd-gV rd-ge rd-jt',},$vnode_5));
}

}
for(let $q_c_fasggmj=headAndFooter.length,$q_key_rkiagimi=0;$q_key_rkiagimi<$q_c_fasggmj;$q_key_rkiagimi+=1){
let e=headAndFooter[$q_key_rkiagimi];

if(i&&e.type=='hod-header'){
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'unit','mx5-view': '5m/hod-header/stage?props='+$keyOf($refData,e.props)+'&unit='+$keyOf($refData,unit,'eD'),}));
}else if(i<count-1 && e.type=='hod-footer'){
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'unit','mx5-view': '5m/hod-footer/stage?props='+$keyOf($refData,e.props)+'&unit='+$keyOf($refData,unit,'eD'),}));
}
};$$_class='rd-gV rd-gX';if(i){;$$_class+=' rd-jr';};$$_style='top:'+(page.height*scale*i)+(unit)+';width:'+(page.width*scale)+(unit)+';height:'+(page.height*scale)+(unit)+';';if(page.backgroundImage){;$$_style+='background-image:url('+(page.backgroundImage)+');background-repeat:'+(page.backgroundRepeat=='full'?'no-repeat':page.backgroundRepeat)+';background-size:';if(page.backgroundRepeat=='full'){;$$_style+='100% 100%';}else{;$$_style+=''+(page.backgroundWidth*scale)+(unit)+' '+(page.backgroundHeight*scale)+(unit)+';background-position:'+(page.backgroundXOffset)+(unit)+' '+(page.backgroundYOffset)+(unit);};};$vnode_3.push($createVNode('div',{'class': $$_class,'style': $$_style,},$vnode_4));
}
for(let $q_c_cknpcu=elements.length,$q_key_xrbljxtsrk=0;$q_key_xrbljxtsrk<$q_c_cknpcu;$q_key_xrbljxtsrk+=1){
let e=elements[$q_key_xrbljxtsrk];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'elements,fs,unit','id': (e.id),'mx5-view': '5m/'+(e.type)+'/designer?element='+$keyOf($refData,e,'eE.'+($q_key_xrbljxtsrk)+'.eF')+'&ownerId=s&fs='+$keyOf($refData,fs,'eG')+'&unit='+$keyOf($refData,unit,'eD'),'class': 'rd-iz','mx5-pointerdown': $viewId+'2_jw({element:\''+$keyOf($refData,e,'eE.'+($q_key_xrbljxtsrk)+'.eF')+'\'})',}));
}$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-gX','mx5-view': '50/align',}));$vnode_2=[$createVNode('div',{'class': 'rd-gW rd-iz rd-jq','style': 'width:'+(page.width*scale)+(unit)+';height:'+(page.height*scale*page.pages)+(unit)+';background:'+(page.background),'data-as': 'hod','id': '_rd_sc',},$vnode_3)];;$$_style='';if(fs){;$$_style+='transform:scaleX('+(rx)+') scaleY('+(ry)+');transform-origin:0 0;margin:'+(marginTop)+'px 0 0 '+(marginLeft)+'px';}else{;$$_style+='padding:'+(spad.join('px '))+'px';};$vnode_1=[$createVNode('div',{'style': $$_style,},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-g9 rd-gW','mx5-pointerdown': $viewId+'_jc()','mx5-contextmenu': $viewId+'_jc()','id': '_rd_so',},$vnode_1),$createVNode('div',{'id': '_rd_pole_'+$viewId,'style': 'margin-top:calc(-160px - '+(page.height*scale*page.pages)+(unit)+');display:none',})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        /**
         * 编辑区滚动节点
         */
        let bakScale = 0;
        this.set({
            fs: 0,
            unit: State.get('gf'),
            spad: const_1['gs'],
            fhf: FindHeaderAndFooterElements
        });
        let update = this['_gn'](this.render, 10);
        //添加元素
        let addElements = e => {
            //fromToolbxSize = null;
            //拖动添加后，解锁快捷键操作
            State.set({
                'gj': 0
            });
            if (e.node) {
                let lastHod = sdrag_1['gd']();
                if (lastHod) {
                    let { classList } = lastHod;
                    //, '@:scoped.style:full-fill'
                    classList.remove('rd-hL');
                }
                //鼠标下的节点不在设计区
                if (!inside(e.node, this.root)) {
                    return;
                }
            }
            sdrag_1['ge']();
            //添加元素
            let { '_iT': addElements, '_iU': selectElements } = stage_elements_1["gf"](e);
            if (addElements.length) { //成功添加后更新界面并记录历史记录
                State.fire('gB');
                if (selectElements.length) {
                    stage_selection_1['gf'](selectElements);
                    stage_generic_1['gr'](selectElements[selectElements.length - 1].id);
                }
                history_1["gd"](history_1['gy'], stage_generic_1['gp'](addElements));
            }
        };
        let updateStage = async (e) => {
            console.log(e);
            let elements = State.get('gl');
            let { step, '_hB': fs } = e;
            console.log(e);
            if (step ||
                fs) {
                if (e['_hB']) {
                    let page = State.get('gm');
                    if (e['_hE']) {
                        let pxWidth = const_1['gY'](page.width);
                        let pxHeight = const_1['gY'](page.height);
                        let rh = pxHeight * page.pages;
                        let rwidth = e['_hC'] / pxWidth;
                        let rheight = e['_hD'] / rh;
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
                        let marginTop = (e['_hD'] - ry * rh) / 2, marginLeft = (e['_hC'] - rx * pxWidth) / 2;
                        let current = State.get('ge');
                        if (current != 1) {
                            e.step = 1 / current;
                            bakScale = current;
                        }
                        else {
                            bakScale = 0;
                        }
                        console.log(rx, ry, marginTop, marginLeft);
                        State.set({
                            'ge': 1
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
                                'ge': bakScale
                            });
                        }
                    }
                    this.set({
                        fs: e['_hE']
                    });
                }
                if (step) {
                    let flowConnector = [];
                    let flowProvider = State.get('gq');
                    let walk = es => {
                        for (let m of es) {
                            if (flowProvider &&
                                flowProvider['gd'](m)) {
                                flowConnector.push(m);
                            }
                            else {
                                ScaleElement(m, step);
                                let { props, ctrl } = m;
                                if (ctrl.as & enum_1['gg']) {
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
            wsize_1['gd']();
            let updateMark = magix_1.mark(this, '_jv');
            if (e.type == 'gi') {
                await magix_1.delay(20);
                await lowTaskFinale();
                if (updateMark()) {
                    let selectedElements = State.get('gd');
                    if (selectedElements.length == 1) {
                        stage_generic_1['gr'](selectedElements[0].id);
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
            let { 'gg': code, 'ge': isKeydown, 'gh': shiftKey, 'gi': ctrlKey, 'gj': altKey, 'gf': activeIsInput, 'gd': prevent } = e;
            //全屏、事件被阻止、激活的是输入元素且不是指定的动作均不处理
            if (fs ||
                prevent ||
                !isKeydown ||
                (activeIsInput &&
                    (active.dataset.as != 'da' ||
                        code != keyboard_1["ge"])))
                return;
            //console.log(ctrlKey, altKey, shiftKey);
            //键盘按键需要考虑精确匹配，比如ctrl+c需要排除ctrl+shift+c或ctrl+alt+c等情况
            if (!altKey) {
                if (ctrlKey) { //按下ctrl未按alt键
                    if (code == keyboard_1["gn"]) { //ctrl+z或ctrl+shift+z
                        e['gk']();
                        if (shiftKey) {
                            history_1["gW"]();
                        }
                        else {
                            history_1["gV"]();
                        }
                    }
                    else if (code == keyboard_1["gF"] &&
                        !shiftKey) { //仅ctrl+y
                        e['gk']();
                        history_1["gW"]();
                    }
                    else if (code == keyboard_1["gu"] &&
                        !shiftKey) { //仅ctrl+a
                        e['gk']();
                        let stage = stage_generic_1['gJ'](1);
                        let coll = stage["_it"];
                        stage_generic_1['gK'](coll);
                    }
                    else if (code == keyboard_1['gA'] &&
                        shiftKey) { //ctrl+shift+i
                        e['gk']();
                        let stage = stage_generic_1['gJ'](1, null, -1, -1);
                        let coll = stage["_it"];
                        stage_generic_1['gK'](coll, shiftKey);
                    }
                    else if (code == keyboard_1["gE"] &&
                        !shiftKey) { //仅ctrl+x
                        e['gk']();
                        stage_clipboard_1["_iI"]();
                    }
                    else if (code == keyboard_1["gp"] &&
                        !shiftKey) { //仅ctrl+c
                        e['gk']();
                        stage_clipboard_1["_iH"]();
                    }
                    else if (code == keyboard_1["gD"] &&
                        !shiftKey) { //ctrl+v
                        e['gk']();
                        let stage = stage_generic_1['gJ']();
                        stage_clipboard_1["_iL"](stage);
                    }
                    else if (code == keyboard_1['gw'] &&
                        !shiftKey) { //ctrl+d
                        e['gk']();
                        let selectElementsMap = stage_selection_1['gi']();
                        if (stage_generic_1['gv'](selectElementsMap)) {
                            let stages = stage_generic_1['gs']();
                            stage_clipboard_1['_iK'](stages);
                        }
                    }
                    else if (code == keyboard_1["gy"]) { //ctrl+g或ctrl+shift+g
                        e['gk']();
                        let { '_jj': canGroup, '_ji': canUngroup } = stage_generic_1["gy"]();
                        if (canGroup || canUngroup) {
                            stage_generic_1["gE"](!canGroup);
                        }
                    }
                    else if (code == keyboard_1["gz"]) { //ctrl+l或ctrl+shift+l
                        e['gk']();
                        stage_generic_1["gD"](0, 1);
                    }
                    else if (code == keyboard_1["gj"] ||
                        code == keyboard_1["gh"] ||
                        code == keyboard_1["gi"] ||
                        code == keyboard_1["gk"]) {
                        e['gk']();
                        let selectElements = State.get('gd');
                        if (selectElements.length == 1) {
                            let element = selectElements[0];
                            let { props, id, type, ctrl } = element;
                            if (!props.locked &&
                                (ctrl['_iV'] & enum_1['gq'])) {
                                let step = code == keyboard_1["gj"] ||
                                    code == keyboard_1["gh"] ? -1 : 1;
                                if (shiftKey) {
                                    step *= const_1['gI'];
                                }
                                else {
                                    step *= const_1['gH'];
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
                                        if (ctrl['_he']) {
                                            ctrl['_he'](props);
                                        }
                                        vf.invoke('assign', [{ element }]).then(r => {
                                            if (r !== false) {
                                                vf.invoke('render');
                                            }
                                        });
                                    }
                                    State.fire('gf', {
                                        '_hW': {
                                            [id]: 1
                                        },
                                        '_hX': {
                                            [type]: 1
                                        },
                                        '_ge': {
                                            rotate: 1
                                        }
                                    });
                                    let ename = stage_generic_1['gp'](selectElements);
                                    history_1["gd"](history_1['gG'], ename, 'gZ', 500);
                                }
                            }
                        }
                    }
                }
                else {
                    if (!shiftKey &&
                        code == keyboard_1['gt']) {
                        let oldSelected = stage_selection_1["ge"]();
                        if (oldSelected) {
                            history_1["gd"](history_1['gt'], stage_generic_1['gp'](oldSelected));
                        }
                    }
                    else if (!shiftKey &&
                        code == keyboard_1["gG"]) { //space
                        let currentSelected = State.get('gd');
                        if (currentSelected.length == 1) {
                            let m = currentSelected[0];
                            stage_elements_1['gh'](m, e);
                        }
                    }
                    else if (code == keyboard_1["gy"] &&
                        shiftKey) { //shift+g
                        e['gk']();
                        let { '_jj': canGroup, '_ji': canUngroup } = stage_generic_1["gy"]();
                        if (canGroup || canUngroup) {
                            stage_generic_1["gE"](canUngroup);
                        }
                    }
                    else if (code == keyboard_1["gz"] &&
                        shiftKey) { //shift+l
                        e['gk']();
                        stage_generic_1["gD"](1, 1);
                    }
                    else if (code == keyboard_1["ge"]) { //tab或shift+tab
                        e['gk']();
                        stage_elements_1["gn"](shiftKey);
                    }
                    else if (!shiftKey && (code == keyboard_1["gf"] ||
                        code == keyboard_1["gg"])) { //delete 或 backspace
                        e['gk']();
                        let selectElementsMap = stage_selection_1['gi']();
                        let selectElements = State.get('gd');
                        let enable = stage_generic_1['gv'](selectElementsMap);
                        let disabled = stage_generic_1['gx'](selectElements);
                        if (enable && !disabled) {
                            stage_generic_1["gG"]();
                        }
                    }
                    else if (!shiftKey && (code == keyboard_1["gw"] ||
                        code == keyboard_1["gC"] ||
                        code == keyboard_1["gB"] ||
                        code == keyboard_1["gv"])) {
                        e['gk']();
                        let selectElements = State.get('gd');
                        if (selectElements.length == 1) {
                            stage_elements_1["gm"](KeysToMenuId[code], selectElements[0]);
                        }
                    }
                    else if (!shiftKey && code == keyboard_1["gx"]) {
                        stage_elements_1["gl"]();
                    }
                    else if (code == keyboard_1["gj"] ||
                        code == keyboard_1["gh"] ||
                        code == keyboard_1["gi"] ||
                        code == keyboard_1["gk"]) {
                        e['gk']();
                        /**
                         * 吸附网格我们只在拖动时做，因为拖动相对来讲不精确
                         * 通过属性面板或键盘时，我们支持微调
                         */
                        let scale = State.get('ge');
                        let stepX = const_1["gk"], stepY = const_1["gk"];
                        if (shiftKey) {
                            stepX = const_1["gj"];
                            stepY = const_1["gj"];
                        }
                        stepX *= scale;
                        stepY *= scale;
                        let selectElements = State.get('gd');
                        if (selectElements.length) {
                            let offset, use;
                            let newMap = {};
                            let groups = State.get('go');
                            let { 'ge': elementsMap, } = stage_generic_1["gd"]();
                            let newElements = [];
                            let ids = {}, types = {};
                            let flowProvider = State.get('gq');
                            let addElementToNewList = e => {
                                let { props, id, type } = e;
                                if (!newMap[id] &&
                                    (!flowProvider ||
                                        !flowProvider['gd'](e))) {
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
                            if (code == keyboard_1["gj"]) {
                                offset = -stepY;
                                use = 'y';
                            }
                            else if (code == keyboard_1["gk"]) {
                                offset = stepY;
                                use = 'y';
                            }
                            else if (code == keyboard_1["gh"]) {
                                offset = -stepX;
                                use = 'x';
                            }
                            else if (code == keyboard_1["gi"]) {
                                offset = stepX;
                                use = 'x';
                            }
                            if (offset) {
                                stage_elements_1['go'](newElements, use, const_1['ge'](offset), ids, 1);
                                State.fire('gf', {
                                    '_hW': ids,
                                    '_hX': types,
                                    '_ge': {
                                        '_gf': 1
                                    }
                                });
                                let ename = stage_generic_1['gp'](newElements);
                                history_1["gd"](history_1['gv'], ename, 'g0', 500);
                            }
                        }
                    }
                }
            }
        };
        State.on('gv', updateStage);
        State.on('gi', updateStage);
        State.on('gh', updateStage);
        State.on('gj', updateStage);
        State.on('gt', addElements);
        State.on('gB', update);
        State.on('gg', update);
        State.on('gm', watchKeypress);
        State.on('gl', update);
        wsize_1['ge']();
        sdrop_1['gd']();
        pole_1['gd'](this);
        scroll_1['gd']();
        sdrag_1['gf']();
        this.on('destroy', () => {
            State.off('gv', updateStage);
            State.off('gi', updateStage);
            State.off('gh', updateStage);
            State.off('gj', updateStage);
            State.off('gt', addElements);
            State.off('gB', update);
            State.off('gg', update);
            State.off('gm', watchKeypress);
            State.off('gl', update);
            sdrop_1['ge']();
            wsize_1['gf']();
            pole_1['ge']();
            scroll_1['ge']();
            sdrag_1['ge']();
            sdrag_1['gg']();
        });
    },
    render() {
        this.digest({
            unit: State.get('gf'),
            scale: State.get('ge'),
            page: State.get('gm'),
            elements: State.get('gl')
        });
    },
    '_jw<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['_g8'])
            return;
        stage_elements_1["gk"](e, this);
    },
    '_jc<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['_g8'])
            return;
        let { target, shiftKey, ctrlKey, metaKey, pageX, pageY } = e;
        if (inside(node('_rd_sc'), target)) {
            let last = stage_selection_1['gi']();
            let hodElements, currentSelected;
            let initSelectedElements = [...State.get('gd')];
            let initIds = [], initIdsMap = {};
            for (let ise of initSelectedElements) {
                initIds.push(ise.id);
                initIdsMap[ise.id] = 1;
            }
            currentSelected = initIds.join(',');
            let stageElements = State.get('gl');
            let isShiftKeyStillPressed;
            if (shiftKey || ctrlKey || metaKey) {
                isShiftKeyStillPressed = 1;
                hodElements = stage_generic_1["gF"](stageElements);
            }
            else {
                stage_selection_1["ge"]();
                initIdsMap = emptyObject;
            }
            select_1["_hf"]();
            State.set({
                'gj': 1
            });
            let showedCursor;
            let elementLocations = stage_generic_1["gA"](stageElements);
            let moveEvent;
            let dragSelect = () => {
                if (!moveEvent)
                    return;
                if (!showedCursor) {
                    showedCursor = 1;
                    cursor_1["_i0"]('default');
                }
                let { pageX: moveX, pageY: moveY } = moveEvent;
                let width = abs(pageX - moveX);
                let height = abs(pageY - moveY);
                let left = min(pageX, moveX);
                let top = min(pageY, moveY);
                select_1["_iA"](left, top, width, height);
                let rect = transform_1["gh"]({
                    x: left,
                    y: top
                });
                rect.width = width;
                rect.height = height;
                if (elementLocations.length) {
                    let intersect = stage_generic_1["gB"](elementLocations, rect, initSelectedElements, isShiftKeyStillPressed && hodElements, isShiftKeyStillPressed ? initIdsMap : emptyObject);
                    if (intersect["_hW"] != currentSelected) {
                        currentSelected = intersect["_hW"];
                        stage_selection_1["gf"](intersect["_iJ"]);
                    }
                }
            };
            //需要监听在拉框选择过程中，用户松开或再次按下shift键
            /**
             * 如果在按下鼠标拖动时，未按shift键，则后续再按shift键无效果
             * 如果在按下鼠标拖动时，按了shift键，而鼠标未松开的情况下，松开shift键，则需要立即同步未按shift键的效果，如果又再次按下shift键，则需要再次处理
             */
            let watchKeypress = e => {
                isShiftKeyStillPressed = e['gh'] || e['gi'];
                dragSelect();
            };
            State.on('gm', watchKeypress);
            this['_gL'](e, ex => {
                moveEvent = ex;
                dragSelect();
            }, () => {
                State.set({
                    'gj': 0
                });
                State.off('gm', watchKeypress);
                if (showedCursor) {
                    select_1["_gN"]();
                    cursor_1["_gN"]();
                }
                let diff = stage_selection_1["gj"](last);
                if (diff['gg']) {
                    let { 'gd': type, 'ge': ename } = stage_generic_1['gH'](diff);
                    history_1["gd"](type, ename);
                }
            });
        }
    },
    '_jc<contextmenu>'(e) {
        /**
         * 如果事件被处理过或者当前活动节点是可输入节点，则退出
         */
        if (e['_g8'] ||
            keyboard_1['gK'](e.target))
            return;
        //阻止系统的右键
        this['_h5'](e);
        let collection = State.get('gl');
        let selectElements = State.get('gd');
        let element = selectElements[0];
        //展示菜单
        stage_elements_1["gt"](this, e, collection, 0, async (menu) => {
            //全选按钮
            if (menu.id == contextmenu_1["gd"] ||
                menu.id == contextmenu_1['gC']) {
                stage_generic_1['gK'](collection, menu.id == contextmenu_1['gC']);
                //复制
            }
            else if (menu.id == contextmenu_1["gk"]) {
                stage_clipboard_1["_iH"](e);
                //粘贴
            }
            else if (menu.id == contextmenu_1["ge"]) {
                let p = transform_1["gh"]({
                    x: e.pageX,
                    y: e.pageY
                });
                let stage = stage_generic_1['gJ']();
                stage_clipboard_1["_iL"](stage, p);
                //剪切
            }
            else if (menu.id == contextmenu_1['gl']) {
                let stages = stage_generic_1['gs']();
                stage_clipboard_1['_iK'](stages);
            }
            else if (menu.id == contextmenu_1["gj"]) {
                stage_clipboard_1["_iI"](e);
                //删除
            }
            else if (menu.id == contextmenu_1["gm"]) {
                stage_generic_1["gG"]();
                //清空设计区
            }
            else if (menu.id == contextmenu_1['gn']) {
                State.fire('gx');
                //3~6进行z轴的调整
            }
            else if (menu.id == contextmenu_1['go']) {
                State.fire('gx', {
                    'gd': 'ge'
                });
            }
            else if (menu.id >= 3 && menu.id <= 6) {
                stage_elements_1["gm"](menu.id, element);
                //20~29 表示对齐
            }
            else if (menu.id > 19 && menu.id < 30) {
                stage_elements_1["gp"](menu.to);
                //31~39表示组合
            }
            else if (menu.id > 30 && menu.id < 40) {
                let ungroup = menu.id == 32;
                stage_generic_1["gE"](ungroup);
                //41~49表示同步尺寸
            }
            else if (menu.id > 40 && menu.id < 50) {
                let from = (menu.id == contextmenu_1["gr"] || menu.id == contextmenu_1["gt"]) ? 1 : 0;
                let to = (menu.id == contextmenu_1["gu"] ||
                    menu.id == contextmenu_1["gr"]) ? 0 : 1;
                let [result, id, element] = await stage_elements_1["gq"](from, to);
                if (result) {
                    State.fire('gf', {
                        '_hW': {
                            [id]: 1
                        },
                        '_hX': {
                            [element.type]: 1
                        },
                        '_ge': {
                            '_gg': 1
                        }
                    });
                    history_1["gd"](history_1['gx']);
                }
            }
        });
    },
    '$root<drop>'(e) {
        sdrop_1['gf'](e);
    },
    '$root<dragenter>'(e) {
        sdrop_1['gg'](e);
    }
}).merge(index_1);

});