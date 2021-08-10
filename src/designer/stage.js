/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5d",["4e","../4l/4m/index","../4l/4n/cursor","../4l/4n/select","../4t/pole","../4t/scroll","../4t/sdrag","../4t/sdrop","../4t/wsize","./4g","./4v","./enum","./4q","./4r","./5a","./56","./57","./5b","./4h","53/hod-header/stage","53/hod-footer/stage","./align"],(require,exports,module)=>{
require("53/hod-header/stage");
require("53/hod-footer/stage");
require("./align");
let $quick_dO_0_static_node;
let $quick_dO_1_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let index_1 = require("../4l/4m/index");
let cursor_1 = require("../4l/4n/cursor");
let select_1 = require("../4l/4n/select");
let pole_1 = require("../4t/pole");
let scroll_1 = require("../4t/scroll");
let sdrag_1 = require("../4t/sdrag");
let sdrop_1 = require("../4t/sdrop");
let wsize_1 = require("../4t/wsize");
let const_1 = require("./4g");
let contextmenu_1 = require("./4v");
let enum_1 = require("./enum");
let history_1 = require("./4q");
let keyboard_1 = require("./4r");
let stage_clipboard_1 = require("./5a");
let stage_elements_1 = require("./56");
let stage_generic_1 = require("./57");
let stage_selection_1 = require("./5b");
let transform_1 = require("./4h");
let emptyObject = {};
let { State, Vframe, node, applyStyle, View, inside, isFunction, lowTaskFinale } = magix_1;
let { min, abs } = Math;
//缩放元素
let ScaleElement = (m, step) => {
    let { props, ctrl } = m;
    for (let s of ctrl.props) {
        if (isFunction(s['_ga'])) {
            s['_ga'](props, step);
        }
        else if (s['_fc']) {
            props[s.key] *= step;
        }
    }
    if (ctrl['_eF']) {
        ctrl['_eF'](props);
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
    [keyboard_1["d3"]]: 5,
    [keyboard_1["dX"]]: 6,
    [keyboard_1["d2"]]: 3,
    [keyboard_1["dW"]]: 4
};
applyStyle("rd-dL",".rd-gR{background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,.3)}.rd-gS{border-top:1px dotted #7b7b7b}.rd-gT{color:#7b7b7b;left:-16px;top:-9px}.rd-gU{color:#7b7b7b;right:-16px;top:-9px}.rd-gV{outline:1px dotted #7b7b7b}");
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

if($quick_dO_0_static_node){
$vnode_5.push($quick_dO_0_static_node);
}else{
$vnode_6=[$createVNode(0,'')];$vnode_5.push($quick_dO_0_static_node=$createVNode('i',{'_': 'cH','class': 'rd-dF rd-el rd-gT',},$vnode_6));
}

if($quick_dO_1_static_node){
$vnode_5.push($quick_dO_1_static_node);
}else{
$vnode_6=[$createVNode(0,'')];$vnode_5.push($quick_dO_1_static_node=$createVNode('i',{'_': 'cI','class': 'rd-dF rd-el rd-gU',},$vnode_6));
}

}$vnode_4.push($createVNode('div',{'class': 'rd-ed rd-ee rd-el rd-gV','style': 'transform:translate('+(-page.xOffset)+(unit)+','+(-page.yOffset)+(unit)+')',},$vnode_5));
}
if(i){

if($quick_dO_0_static_node){
$vnode_4.push($quick_dO_0_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_dO_0_static_node=$createVNode('i',{'_': 'cH','class': 'rd-dF rd-el rd-gT',},$vnode_5));
}

if($quick_dO_1_static_node){
$vnode_4.push($quick_dO_1_static_node);
}else{
$vnode_5=[$createVNode(0,'')];$vnode_4.push($quick_dO_1_static_node=$createVNode('i',{'_': 'cI','class': 'rd-dF rd-el rd-gU',},$vnode_5));
}

}
for(let $q_c_oqrqeoa=headAndFooter.length,$q_key_nfklmwg=0;$q_key_nfklmwg<$q_c_oqrqeoa;$q_key_nfklmwg+=1){
let e=headAndFooter[$q_key_nfklmwg];

if(i&&e.type=='hod-header'){
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'unit','mx5-view': '53/hod-header/stage?props='+$keyOf($refData,e.props)+'&unit='+$keyOf($refData,unit,'cH'),}));
}else if(i<count-1 && e.type=='hod-footer'){
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'unit','mx5-view': '53/hod-footer/stage?props='+$keyOf($refData,e.props)+'&unit='+$keyOf($refData,unit,'cH'),}));
}
};$$_class='rd-el rd-en';if(i){;$$_class+=' rd-gS';};$$_style='top:'+(page.height*scale*i)+(unit)+';width:'+(page.width*scale)+(unit)+';height:'+(page.height*scale)+(unit)+';';if(page.backgroundImage){;$$_style+='background-image:url('+(page.backgroundImage)+');background-repeat:'+(page.backgroundRepeat=='full'?'no-repeat':page.backgroundRepeat)+';background-size:';if(page.backgroundRepeat=='full'){;$$_style+='100% 100%';}else{;$$_style+=''+(page.backgroundWidth*scale)+(unit)+' '+(page.backgroundHeight*scale)+(unit)+';background-position:'+(page.backgroundXOffset)+(unit)+' '+(page.backgroundYOffset)+(unit);};};$vnode_3.push($createVNode('div',{'class': $$_class,'style': $$_style,},$vnode_4));
}
for(let $q_c_wjegmipki=elements.length,$q_key_ucpiegwovd=0;$q_key_ucpiegwovd<$q_c_wjegmipki;$q_key_ucpiegwovd+=1){
let e=elements[$q_key_ucpiegwovd];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'elements,fs,unit','id': (e.id),'mx5-view': '53/'+(e.type)+'/designer?element='+$keyOf($refData,e,'cI.'+($q_key_ucpiegwovd)+'.cJ')+'&ownerId=s&fs='+$keyOf($refData,fs,'cK')+'&unit='+$keyOf($refData,unit,'cH'),'class': 'rd-f0','mx5-pointerdown': $viewId+'2_gU({element:\''+$keyOf($refData,e,'cI.'+($q_key_ucpiegwovd)+'.cJ')+'\'})',}));
}$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-en','mx5-view': '4d/align',}));$vnode_2=[$createVNode('div',{'class': 'rd-em rd-f0 rd-gR','style': 'width:'+(page.width*scale)+(unit)+';height:'+(page.height*scale*page.pages)+(unit)+';background:'+(page.background),'data-as': 'hod','id': '_rd_sc',},$vnode_3)];;$$_style='';if(fs){;$$_style+='transform:scaleX('+(rx)+') scaleY('+(ry)+');transform-origin:0 0;margin:'+(marginTop)+'px 0 0 '+(marginLeft)+'px';}else{;$$_style+='padding:'+(spad.join('px '))+'px';};$vnode_1=[$createVNode('div',{'style': $$_style,},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-em rd-ez','mx5-pointerdown': $viewId+'_gA()','mx5-contextmenu': $viewId+'_gA()','id': '_rd_so',},$vnode_1),$createVNode('div',{'id': '_rd_pole_'+$viewId,'style': 'margin-top:calc(-160px - '+(page.height*scale*page.pages)+(unit)+');display:none',})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        /**
         * 编辑区滚动节点
         */
        let bakScale = 0;
        this.set({
            fs: 0,
            unit: State.get('dG'),
            spad: const_1['dT'],
            fhf: FindHeaderAndFooterElements
        });
        let update = this['_dO'](this.render, 10);
        //添加元素
        let addElements = e => {
            //fromToolbxSize = null;
            //拖动添加后，解锁快捷键操作
            State.set({
                'dK': 0
            });
            if (e.node) {
                let lastHod = sdrag_1['dE']();
                if (lastHod) {
                    let { classList } = lastHod;
                    //, '@:scoped.style:full-fill'
                    classList.remove('rd-fb');
                }
                //鼠标下的节点不在设计区
                if (!inside(e.node, this.root)) {
                    return;
                }
            }
            sdrag_1['dF']();
            //添加元素
            let { '_gg': addElements, '_gh': selectElements } = stage_elements_1["dG"](e);
            if (addElements.length) { //成功添加后更新界面并记录历史记录
                State.fire('d2');
                if (selectElements.length) {
                    stage_selection_1['dG'](selectElements);
                    stage_generic_1['dS'](selectElements[selectElements.length - 1].id);
                }
                history_1["dE"](history_1['dZ'], stage_generic_1['dQ'](addElements));
            }
        };
        let updateStage = async (e) => {
            console.log(e);
            let elements = State.get('dM');
            let { step, '_e2': fs } = e;
            console.log(e);
            if (step ||
                fs) {
                if (e['_e2']) {
                    let page = State.get('dN');
                    if (e['_e5']) {
                        let pxWidth = const_1['eo'](page.width);
                        let pxHeight = const_1['eo'](page.height);
                        let rh = pxHeight * page.pages;
                        let rwidth = e['_e3'] / pxWidth;
                        let rheight = e['_e4'] / rh;
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
                        let marginTop = (e['_e4'] - ry * rh) / 2, marginLeft = (e['_e3'] - rx * pxWidth) / 2;
                        let current = State.get('dF');
                        if (current != 1) {
                            e.step = 1 / current;
                            bakScale = current;
                        }
                        else {
                            bakScale = 0;
                        }
                        console.log(rx, ry, marginTop, marginLeft);
                        State.set({
                            'dF': 1
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
                                'dF': bakScale
                            });
                        }
                    }
                    this.set({
                        fs: e['_e5']
                    });
                }
                if (step) {
                    let flowConnector = [];
                    let flowProvider = State.get('dR');
                    let walk = es => {
                        for (let m of es) {
                            if (flowProvider &&
                                flowProvider['dE'](m)) {
                                flowConnector.push(m);
                            }
                            else {
                                ScaleElement(m, step);
                                let { props, ctrl } = m;
                                if (ctrl.as & enum_1['dH']) {
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
            wsize_1['dE']();
            let updateMark = magix_1.mark(this, '_gT');
            if (e.type == 'dJ') {
                await magix_1.delay(20);
                await lowTaskFinale();
                if (updateMark()) {
                    let selectedElements = State.get('dE');
                    if (selectedElements.length == 1) {
                        stage_generic_1['dS'](selectedElements[0].id);
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
            let { 'dH': code, 'dF': isKeydown, 'dI': shiftKey, 'dJ': ctrlKey, 'dK': altKey, 'dG': activeIsInput, 'dE': prevent } = e;
            //全屏、事件被阻止、激活的是输入元素且不是指定的动作均不处理
            if (fs ||
                prevent ||
                !isKeydown ||
                (activeIsInput &&
                    (active.dataset.as != 'da' ||
                        code != keyboard_1["dF"])))
                return;
            //console.log(ctrlKey, altKey, shiftKey);
            //键盘按键需要考虑精确匹配，比如ctrl+c需要排除ctrl+shift+c或ctrl+alt+c等情况
            if (!altKey) {
                if (ctrlKey) { //按下ctrl未按alt键
                    if (code == keyboard_1["dO"]) { //ctrl+z或ctrl+shift+z
                        e['dL']();
                        if (shiftKey) {
                            history_1["em"]();
                        }
                        else {
                            history_1["el"]();
                        }
                    }
                    else if (code == keyboard_1["d6"] &&
                        !shiftKey) { //仅ctrl+y
                        e['dL']();
                        history_1["em"]();
                    }
                    else if (code == keyboard_1["dV"] &&
                        !shiftKey) { //仅ctrl+a
                        e['dL']();
                        let stage = stage_generic_1['e_'](1);
                        let coll = stage["_fR"];
                        stage_generic_1['ea'](coll);
                    }
                    else if (code == keyboard_1['d1'] &&
                        shiftKey) { //ctrl+shift+i
                        e['dL']();
                        let stage = stage_generic_1['e_'](1, null, -1, -1);
                        let coll = stage["_fR"];
                        stage_generic_1['ea'](coll, shiftKey);
                    }
                    else if (code == keyboard_1["d5"] &&
                        !shiftKey) { //仅ctrl+x
                        e['dL']();
                        stage_clipboard_1["_f6"]();
                    }
                    else if (code == keyboard_1["dQ"] &&
                        !shiftKey) { //仅ctrl+c
                        e['dL']();
                        stage_clipboard_1["_f5"]();
                    }
                    else if (code == keyboard_1["d4"] &&
                        !shiftKey) { //ctrl+v
                        e['dL']();
                        let stage = stage_generic_1['e_']();
                        stage_clipboard_1["_f9"](stage);
                    }
                    else if (code == keyboard_1['dX'] &&
                        !shiftKey) { //ctrl+d
                        e['dL']();
                        let selectElementsMap = stage_selection_1['dJ']();
                        if (stage_generic_1['dW'](selectElementsMap)) {
                            let stages = stage_generic_1['dT']();
                            stage_clipboard_1['_f8'](stages);
                        }
                    }
                    else if (code == keyboard_1["dZ"]) { //ctrl+g或ctrl+shift+g
                        e['dL']();
                        let { '_gH': canGroup, '_gG': canUngroup } = stage_generic_1["dZ"]();
                        if (canGroup || canUngroup) {
                            stage_generic_1["d5"](!canGroup);
                        }
                    }
                    else if (code == keyboard_1["d0"]) { //ctrl+l或ctrl+shift+l
                        e['dL']();
                        stage_generic_1["d4"](0, 1);
                    }
                    else if (code == keyboard_1["dK"] ||
                        code == keyboard_1["dI"] ||
                        code == keyboard_1["dJ"] ||
                        code == keyboard_1["dL"]) {
                        e['dL']();
                        let selectElements = State.get('dE');
                        if (selectElements.length == 1) {
                            let element = selectElements[0];
                            let { props, id, type, ctrl } = element;
                            if (!props.locked &&
                                (ctrl['_gi'] & enum_1['dR'])) {
                                let step = code == keyboard_1["dK"] ||
                                    code == keyboard_1["dI"] ? -1 : 1;
                                if (shiftKey) {
                                    step *= const_1['d9'];
                                }
                                else {
                                    step *= const_1['d8'];
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
                                        if (ctrl['_eF']) {
                                            ctrl['_eF'](props);
                                        }
                                        vf.invoke('assign', [{ element }]).then(r => {
                                            if (r !== false) {
                                                vf.invoke('render');
                                            }
                                        });
                                    }
                                    State.fire('dG', {
                                        '_fm': {
                                            [id]: 1
                                        },
                                        '_fn': {
                                            [type]: 1
                                        },
                                        '_dF': {
                                            rotate: 1
                                        }
                                    });
                                    let ename = stage_generic_1['dQ'](selectElements);
                                    history_1["dE"](history_1['d7'], ename, 'ep', 500);
                                }
                            }
                        }
                    }
                }
                else {
                    if (!shiftKey &&
                        code == keyboard_1['dU']) {
                        let oldSelected = stage_selection_1["dF"]();
                        if (oldSelected) {
                            history_1["dE"](history_1['dU'], stage_generic_1['dQ'](oldSelected));
                        }
                    }
                    else if (!shiftKey &&
                        code == keyboard_1["d7"]) { //space
                        let currentSelected = State.get('dE');
                        if (currentSelected.length == 1) {
                            let m = currentSelected[0];
                            stage_elements_1['dI'](m, e);
                        }
                    }
                    else if (code == keyboard_1["dZ"] &&
                        shiftKey) { //shift+g
                        e['dL']();
                        let { '_gH': canGroup, '_gG': canUngroup } = stage_generic_1["dZ"]();
                        if (canGroup || canUngroup) {
                            stage_generic_1["d5"](canUngroup);
                        }
                    }
                    else if (code == keyboard_1["d0"] &&
                        shiftKey) { //shift+l
                        e['dL']();
                        stage_generic_1["d4"](1, 1);
                    }
                    else if (code == keyboard_1["dF"]) { //tab或shift+tab
                        e['dL']();
                        stage_elements_1["dO"](shiftKey);
                    }
                    else if (!shiftKey && (code == keyboard_1["dG"] ||
                        code == keyboard_1["dH"])) { //delete 或 backspace
                        e['dL']();
                        let selectElementsMap = stage_selection_1['dJ']();
                        let selectElements = State.get('dE');
                        let enable = stage_generic_1['dW'](selectElementsMap);
                        let disabled = stage_generic_1['dY'](selectElements);
                        if (enable && !disabled) {
                            stage_generic_1["d7"]();
                        }
                    }
                    else if (!shiftKey && (code == keyboard_1["dX"] ||
                        code == keyboard_1["d3"] ||
                        code == keyboard_1["d2"] ||
                        code == keyboard_1["dW"])) {
                        e['dL']();
                        let selectElements = State.get('dE');
                        if (selectElements.length == 1) {
                            stage_elements_1["dN"](KeysToMenuId[code], selectElements[0]);
                        }
                    }
                    else if (!shiftKey && code == keyboard_1["dY"]) {
                        stage_elements_1["dM"]();
                    }
                    else if (code == keyboard_1["dK"] ||
                        code == keyboard_1["dI"] ||
                        code == keyboard_1["dJ"] ||
                        code == keyboard_1["dL"]) {
                        e['dL']();
                        /**
                         * 吸附网格我们只在拖动时做，因为拖动相对来讲不精确
                         * 通过属性面板或键盘时，我们支持微调
                         */
                        let scale = State.get('dF');
                        let stepX = const_1["dL"], stepY = const_1["dL"];
                        if (shiftKey) {
                            stepX = const_1["dK"];
                            stepY = const_1["dK"];
                        }
                        stepX *= scale;
                        stepY *= scale;
                        let selectElements = State.get('dE');
                        if (selectElements.length) {
                            let offset, use;
                            let newMap = {};
                            let groups = State.get('dP');
                            let { 'dF': elementsMap, } = stage_generic_1["dE"]();
                            let newElements = [];
                            let ids = {}, types = {};
                            let flowProvider = State.get('dR');
                            let addElementToNewList = e => {
                                let { props, id, type } = e;
                                if (!newMap[id] &&
                                    (!flowProvider ||
                                        !flowProvider['dE'](e))) {
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
                            if (code == keyboard_1["dK"]) {
                                offset = -stepY;
                                use = 'y';
                            }
                            else if (code == keyboard_1["dL"]) {
                                offset = stepY;
                                use = 'y';
                            }
                            else if (code == keyboard_1["dI"]) {
                                offset = -stepX;
                                use = 'x';
                            }
                            else if (code == keyboard_1["dJ"]) {
                                offset = stepX;
                                use = 'x';
                            }
                            if (offset) {
                                stage_elements_1['dP'](newElements, use, const_1['dF'](offset), ids, 1);
                                State.fire('dG', {
                                    '_fm': ids,
                                    '_fn': types,
                                    '_dF': {
                                        '_dG': 1
                                    }
                                });
                                let ename = stage_generic_1['dQ'](newElements);
                                history_1["dE"](history_1['dW'], ename, 'eq', 500);
                            }
                        }
                    }
                }
            }
        };
        State.on('dW', updateStage);
        State.on('dJ', updateStage);
        State.on('dI', updateStage);
        State.on('dK', updateStage);
        State.on('dU', addElements);
        State.on('d2', update);
        State.on('dH', update);
        State.on('dN', watchKeypress);
        State.on('dM', update);
        wsize_1['dF']();
        sdrop_1['dE']();
        pole_1['dE'](this);
        scroll_1['dE']();
        sdrag_1['dG']();
        this.on('destroy', () => {
            State.off('dW', updateStage);
            State.off('dJ', updateStage);
            State.off('dI', updateStage);
            State.off('dK', updateStage);
            State.off('dU', addElements);
            State.off('d2', update);
            State.off('dH', update);
            State.off('dN', watchKeypress);
            State.off('dM', update);
            sdrop_1['dF']();
            wsize_1['dG']();
            pole_1['dF']();
            scroll_1['dF']();
            sdrag_1['dF']();
            sdrag_1['dH']();
        });
    },
    render() {
        this.digest({
            unit: State.get('dG'),
            scale: State.get('dF'),
            page: State.get('dN'),
            elements: State.get('dM')
        });
    },
    '_gU<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['_ey'])
            return;
        stage_elements_1["dL"](e, this);
    },
    '_gA<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['_ey'])
            return;
        let { target, shiftKey, ctrlKey, metaKey, pageX, pageY } = e;
        if (inside(node('_rd_sc'), target)) {
            let last = stage_selection_1['dJ']();
            let hodElements, currentSelected;
            let initSelectedElements = [...State.get('dE')];
            let initIds = [], initIdsMap = {};
            for (let ise of initSelectedElements) {
                initIds.push(ise.id);
                initIdsMap[ise.id] = 1;
            }
            currentSelected = initIds.join(',');
            let stageElements = State.get('dM');
            let isShiftKeyStillPressed;
            if (shiftKey || ctrlKey || metaKey) {
                isShiftKeyStillPressed = 1;
                hodElements = stage_generic_1["d6"](stageElements);
            }
            else {
                stage_selection_1["dF"]();
                initIdsMap = emptyObject;
            }
            select_1["_eG"]();
            State.set({
                'dK': 1
            });
            let showedCursor;
            let elementLocations = stage_generic_1["d1"](stageElements);
            let moveEvent;
            let dragSelect = () => {
                if (!moveEvent)
                    return;
                if (!showedCursor) {
                    showedCursor = 1;
                    cursor_1["_gn"]('default');
                }
                let { pageX: moveX, pageY: moveY } = moveEvent;
                let width = abs(pageX - moveX);
                let height = abs(pageY - moveY);
                let left = min(pageX, moveX);
                let top = min(pageY, moveY);
                select_1["_fY"](left, top, width, height);
                let rect = transform_1["dI"]({
                    x: left,
                    y: top
                });
                rect.width = width;
                rect.height = height;
                if (elementLocations.length) {
                    let intersect = stage_generic_1["d2"](elementLocations, rect, initSelectedElements, isShiftKeyStillPressed && hodElements, isShiftKeyStillPressed ? initIdsMap : emptyObject);
                    if (intersect["_fm"] != currentSelected) {
                        currentSelected = intersect["_fm"];
                        stage_selection_1["dG"](intersect["_f7"]);
                    }
                }
            };
            //需要监听在拉框选择过程中，用户松开或再次按下shift键
            /**
             * 如果在按下鼠标拖动时，未按shift键，则后续再按shift键无效果
             * 如果在按下鼠标拖动时，按了shift键，而鼠标未松开的情况下，松开shift键，则需要立即同步未按shift键的效果，如果又再次按下shift键，则需要再次处理
             */
            let watchKeypress = e => {
                isShiftKeyStillPressed = e['dI'] || e['dJ'];
                dragSelect();
            };
            State.on('dN', watchKeypress);
            this['_eb'](e, ex => {
                moveEvent = ex;
                dragSelect();
            }, () => {
                State.set({
                    'dK': 0
                });
                State.off('dN', watchKeypress);
                if (showedCursor) {
                    select_1["_ed"]();
                    cursor_1["_ed"]();
                }
                let diff = stage_selection_1["dK"](last);
                if (diff['dH']) {
                    let { 'dE': type, 'dF': ename } = stage_generic_1['d8'](diff);
                    history_1["dE"](type, ename);
                }
            });
        }
    },
    '_gA<contextmenu>'(e) {
        /**
         * 如果事件被处理过或者当前活动节点是可输入节点，则退出
         */
        if (e['_ey'] ||
            keyboard_1['ea'](e.target))
            return;
        //阻止系统的右键
        this['_fu'](e);
        let collection = State.get('dM');
        let selectElements = State.get('dE');
        let element = selectElements[0];
        //展示菜单
        stage_elements_1["dU"](this, e, collection, 0, async (menu) => {
            //全选按钮
            if (menu.id == contextmenu_1["dE"] ||
                menu.id == contextmenu_1['d3']) {
                stage_generic_1['ea'](collection, menu.id == contextmenu_1['d3']);
                //复制
            }
            else if (menu.id == contextmenu_1["dL"]) {
                stage_clipboard_1["_f5"](e);
                //粘贴
            }
            else if (menu.id == contextmenu_1["dF"]) {
                let p = transform_1["dI"]({
                    x: e.pageX,
                    y: e.pageY
                });
                let stage = stage_generic_1['e_']();
                stage_clipboard_1["_f9"](stage, p);
                //剪切
            }
            else if (menu.id == contextmenu_1['dM']) {
                let stages = stage_generic_1['dT']();
                stage_clipboard_1['_f8'](stages);
            }
            else if (menu.id == contextmenu_1["dK"]) {
                stage_clipboard_1["_f6"](e);
                //删除
            }
            else if (menu.id == contextmenu_1["dN"]) {
                stage_generic_1["d7"]();
                //清空设计区
            }
            else if (menu.id == contextmenu_1['dO']) {
                State.fire('dY');
                //3~6进行z轴的调整
            }
            else if (menu.id == contextmenu_1['dP']) {
                State.fire('dY', {
                    'dE': 'dF'
                });
            }
            else if (menu.id >= 3 && menu.id <= 6) {
                stage_elements_1["dN"](menu.id, element);
                //20~29 表示对齐
            }
            else if (menu.id > 19 && menu.id < 30) {
                stage_elements_1["dQ"](menu.to);
                //31~39表示组合
            }
            else if (menu.id > 30 && menu.id < 40) {
                let ungroup = menu.id == 32;
                stage_generic_1["d5"](ungroup);
                //41~49表示同步尺寸
            }
            else if (menu.id > 40 && menu.id < 50) {
                let from = (menu.id == contextmenu_1["dS"] || menu.id == contextmenu_1["dU"]) ? 1 : 0;
                let to = (menu.id == contextmenu_1["dV"] ||
                    menu.id == contextmenu_1["dS"]) ? 0 : 1;
                let [result, id, element] = await stage_elements_1["dR"](from, to);
                if (result) {
                    State.fire('dG', {
                        '_fm': {
                            [id]: 1
                        },
                        '_fn': {
                            [element.type]: 1
                        },
                        '_dF': {
                            '_dH': 1
                        }
                    });
                    history_1["dE"](history_1['dY']);
                }
            }
        });
    },
    '$root<drop>'(e) {
        sdrop_1['dG'](e);
    },
    '$root<dragenter>'(e) {
        sdrop_1['dH'](e);
    }
}).merge(index_1);

});