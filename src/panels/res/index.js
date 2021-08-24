/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/res/index",["51","../../50/53","../../50/enum","../../50/5d","../../50/5t","../../50/5q","../../5m/index","../../58/5n/index"],(require,exports,module)=>{
let $quick_iE_1_static_node;
let $quick_iE_3_static_node;
let $quick_iE_4_static_node;
let $quick_hs_static_text;
let $quick_ht_static_text;
let $quick_hu_static_text;
let $quick_hv_static_text;
let $quick_hw_static_text;
let $quick_hx_static_text;
let $quick_hy_static_text;
let $quick_hz_static_text;
let $quick_hA_static_text;
let $quick_hB_static_text;
let $quick_iE_0_static_attr={'class': 'rd-mE',};
let $quick_iE_5_static_attr={'class': 'rd-mF',};

let magix_1 = require("51");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let history_1 = require("../../50/5d");
let stage_clipboard_1 = require("../../50/5t");
let stage_generic_1 = require("../../50/5q");
let index_1 = require("../../5m/index");
let index_2 = require("../../58/5n/index");
let randomRange = (min, max) => min + ((Math.random() * (max - min + 1)) | 0);
let { View, applyStyle, State, Vframe, type, isFunction } = magix_1;
applyStyle("rd-gR",".rd-mE{padding:5px 4px}.rd-mF{margin-top:5px}");
let c = window.console;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	d,}=$dataFromView,
$vnode_2,
$vnode_3,
$vnode_1;
$vnode_1=[];
if($quick_iE_1_static_node){
$vnode_1.push($quick_iE_1_static_node);
}else{
$vnode_2=[$createVNode(0,'<a href="https://space.bilibili.com/1699691485" class="rd-gA" target="_blank" rel="noopener noreferrer">B站源码讲解视频</a><a href="https://github.com/xinglie/report-designer/issues/36" class="rd-gA rd-gJ" target="_blank" rel="noopener noreferrer">源码讲解文字版</a><a href="https://github.com/xinglie/report-designer/issues/44" class="rd-gA rd-gJ" target="_blank" rel="noopener noreferrer">开发新的元素</a>',1)];$vnode_1.push($quick_iE_1_static_node=$createVNode('div',{'_': 'eD','class': 'rd-g9',},$vnode_2));
}

if(d){

if($quick_iE_3_static_node){
$vnode_1.push($quick_iE_3_static_node);
}else{
$vnode_1.push($quick_iE_3_static_node=$createVNode('div',{'_': 'eE','class': 'rd-g7',}));
}

if($quick_iE_4_static_node){
$vnode_1.push($quick_iE_4_static_node);
}else{
$vnode_2=[$createVNode(0,'以下采用console.log输出，需要打开浏览器的调试工具，在console面板查看')];$vnode_1.push($quick_iE_4_static_node=$createVNode('div',{'_': 'eF','class': 'rd-h6 rd-hX',},$vnode_2));
}
$vnode_3=[$quick_hs_static_text||($quick_hs_static_text=$createVNode(0,'查看State对象'))];$vnode_2=[$createVNode('button',{'class': 'rd-gk rd-gm rd-hw','mx5-click': $viewId+'_oS()',},$vnode_3)];$vnode_3=[$quick_ht_static_text||($quick_ht_static_text=$createVNode(0,'查看State中的数据'))];$vnode_2.push($createVNode('button',{'class': 'rd-gJ rd-gk rd-gm rd-hw','mx5-click': $viewId+'_oT()',},$vnode_3));$vnode_3=[$quick_hu_static_text||($quick_hu_static_text=$createVNode(0,'查看历史记录'))];$vnode_2.push($createVNode('button',{'class': 'rd-gJ rd-gk rd-gm rd-hw','mx5-click': $viewId+'_oU()',},$vnode_3));$vnode_3=[$quick_hv_static_text||($quick_hv_static_text=$createVNode(0,'查看组件结构'))];$vnode_2.push($createVNode('button',{'class': 'rd-gk rd-gm rd-hw rd-mF','mx5-click': $viewId+'_oV()',},$vnode_3));$vnode_3=[$quick_hw_static_text||($quick_hw_static_text=$createVNode(0,'查看设计区元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-gJ rd-gk rd-gm rd-hw rd-mF','mx5-click': $viewId+'_oW()',},$vnode_3));$vnode_3=[$quick_hx_static_text||($quick_hx_static_text=$createVNode(0,'查看设选中元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-gJ rd-gk rd-gm rd-hw rd-mF','mx5-click': $viewId+'_oX()',},$vnode_3));$vnode_3=[$quick_hy_static_text||($quick_hy_static_text=$createVNode(0,'查看剪切板'))];$vnode_2.push($createVNode('button',{'class': 'rd-gk rd-gm rd-hw rd-mF','mx5-click': $viewId+'_oY()',},$vnode_3));$vnode_3=[$quick_hz_static_text||($quick_hz_static_text=$createVNode(0,'清空剪切板'))];$vnode_2.push($createVNode('button',{'class': 'rd-gJ rd-gk rd-gm rd-hw rd-mF','mx5-click': $viewId+'_oZ()',},$vnode_3));$vnode_3=[$quick_hA_static_text||($quick_hA_static_text=$createVNode(0,'向格子内添加文本元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-gJ rd-gk rd-gm rd-hw rd-mF','mx5-click': $viewId+'_o0()',},$vnode_3));$vnode_3=[$quick_hB_static_text||($quick_hB_static_text=$createVNode(0,'添加到设计区'))];$vnode_2.push($createVNode('button',{'class': 'rd-gk rd-gm rd-hw rd-mF','mx5-click': $viewId+'_o1()',},$vnode_3));$vnode_1.push($createVNode('div',$quick_iE_5_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',$quick_iE_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    render() {
        if (DEBUG) {
            this.digest({
                d: 1
            });
        }
        else {
            this.digest();
        }
    },
    '_oS<click>'() {
        c.log(State);
    },
    '_oT<click>'() {
        c.log(State.get());
    },
    '_oU<click>'() {
        c.log(history_1['gS']());
    },
    '_oV<click>'() {
        c.log(Vframe.all());
    },
    '_oW<click>'() {
        c.log(State.get('gl'));
    },
    '_oX<click>'() {
        c.log(State.get('gd'));
    },
    '_oY<click>'() {
        let list = stage_clipboard_1['_iE']();
        if (list &&
            list.length) {
            let isCut = stage_clipboard_1['_iF']();
            if (isCut) {
                c.log('剪切的元素', list);
            }
            else {
                c.log('复制的元素', list);
            }
        }
        else {
            c.log('剪切板无内容');
        }
    },
    '_oZ<click>'() {
        stage_clipboard_1['_go']();
    },
    '_o0<click>'() {
        let selectElements = State.get('gd');
        let find;
        if (selectElements &&
            selectElements.length == 1) {
            let { ctrl, props } = selectElements[0];
            if (ctrl.as & enum_1['gg']) {
                let { focusRow, focusCol, rows } = props;
                if (focusRow > -1 &&
                    focusCol > -1) {
                    find = 1;
                    let page = State.get('gm');
                    let addText = {
                        id: magix_1.guid('text_'),
                        type: 'text',
                        props: {
                            x: const_1['ge'](randomRange(0, 30)),
                            y: const_1['ge'](randomRange(0, 20)),
                            text: '测试内容'
                        }
                    };
                    let { 'gd': translatedElements } = index_1['ge']([addText], page, true);
                    let cell = rows[focusRow].cols[focusCol];
                    if (cell.elements) {
                        let historyTitle = stage_generic_1['gp'](translatedElements);
                        cell.elements.push(...translatedElements);
                        //以下事件必须派发，通知其它view元素有变化
                        State.fire('gB');
                        //历史记录可根据情况可存可不存
                        history_1['gd'](history_1['gy'], historyTitle);
                    }
                }
            }
        }
        if (!find) {
            this.alert('请选中一个容器的格子查看效果');
        }
    },
    '_o1<click>'() {
        let stageElements = State.get('gl');
        let scale = State.get('ge');
        let page = State.get('gm');
        let elementsMap = State.get('gy');
        let textCtrl = elementsMap.text;
        let addText = {
            id: magix_1.guid('text_'),
            ctrl: textCtrl,
            type: 'text',
            props: textCtrl['_hd'](0, 0)
        };
        addText.props.x = const_1['ge'](randomRange(0, 30));
        addText.props.y = const_1['ge'](randomRange(0, 20));
        addText.props.text = '测试内容';
        addText.props.ename = '测试文本';
        if (page.readonly) { //如果整个设计区只读，则元素只读
            addText.props.readonly = true;
        }
        for (let s of textCtrl.props) {
            if (isFunction(s['_iN'])) {
                s['_iN'](addText.props, scale);
            }
            else if (s['_hM']) {
                addText.props[s.key] *= scale;
            }
        }
        if (textCtrl['_he']) {
            textCtrl['_he'](addText.props);
        }
        stageElements.push(addText);
        let historyTitle = stage_generic_1['gp']([addText]);
        //以下事件必须派发，通知其它view元素有变化
        State.fire('gB');
        //历史记录根据情况可存可不存
        history_1['gd'](history_1['gy'], historyTitle);
    }
}).merge(index_2);

});