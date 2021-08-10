/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/res/index",["4e","../../4d/4g","../../4d/enum","../../4d/4q","../../4d/5a","../../4d/57","../../53/index","../../4l/54/index"],(require,exports,module)=>{
let $quick_f5_1_static_node;
let $quick_f5_3_static_node;
let $quick_f5_4_static_node;
let $quick_eT_static_text;
let $quick_eU_static_text;
let $quick_eV_static_text;
let $quick_eW_static_text;
let $quick_eX_static_text;
let $quick_eY_static_text;
let $quick_eZ_static_text;
let $quick_e0_static_text;
let $quick_e1_static_text;
let $quick_e2_static_text;
let $quick_f5_0_static_attr={'class': 'rd-j5',};
let $quick_f5_5_static_attr={'class': 'rd-j6',};

let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let history_1 = require("../../4d/4q");
let stage_clipboard_1 = require("../../4d/5a");
let stage_generic_1 = require("../../4d/57");
let index_1 = require("../../53/index");
let index_2 = require("../../4l/54/index");
let randomRange = (min, max) => min + ((Math.random() * (max - min + 1)) | 0);
let { View, applyStyle, State, Vframe, type, isFunction } = magix_1;
applyStyle("rd-eh",".rd-j5{padding:5px 4px}.rd-j6{margin-top:5px}");
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
if($quick_f5_1_static_node){
$vnode_1.push($quick_f5_1_static_node);
}else{
$vnode_2=[$createVNode(0,'<a href="https://space.bilibili.com/1699691485" class="rd-d1" target="_blank" rel="noopener noreferrer">B站源码讲解视频</a><a href="https://github.com/xinglie/report-designer/issues/36" class="rd-d1 rd-e_" target="_blank" rel="noopener noreferrer">源码讲解文字版</a><a href="https://github.com/xinglie/report-designer/issues/44" class="rd-d1 rd-e_" target="_blank" rel="noopener noreferrer">开发新的元素</a>',1)];$vnode_1.push($quick_f5_1_static_node=$createVNode('div',{'_': 'cH','class': 'rd-ez',},$vnode_2));
}

if(d){

if($quick_f5_3_static_node){
$vnode_1.push($quick_f5_3_static_node);
}else{
$vnode_1.push($quick_f5_3_static_node=$createVNode('div',{'_': 'cI','class': 'rd-ex',}));
}

if($quick_f5_4_static_node){
$vnode_1.push($quick_f5_4_static_node);
}else{
$vnode_2=[$createVNode(0,'以下采用console.log输出，需要打开浏览器的调试工具，在console面板查看')];$vnode_1.push($quick_f5_4_static_node=$createVNode('div',{'_': 'cJ','class': 'rd-fn rd-fw',},$vnode_2));
}
$vnode_3=[$quick_eT_static_text||($quick_eT_static_text=$createVNode(0,'查看State对象'))];$vnode_2=[$createVNode('button',{'class': 'rd-dL rd-dN rd-eX','mx5-click': $viewId+'_mf()',},$vnode_3)];$vnode_3=[$quick_eU_static_text||($quick_eU_static_text=$createVNode(0,'查看State中的数据'))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-e_','mx5-click': $viewId+'_mg()',},$vnode_3));$vnode_3=[$quick_eV_static_text||($quick_eV_static_text=$createVNode(0,'查看历史记录'))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-e_','mx5-click': $viewId+'_mh()',},$vnode_3));$vnode_3=[$quick_eW_static_text||($quick_eW_static_text=$createVNode(0,'查看组件结构'))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-j6','mx5-click': $viewId+'_mi()',},$vnode_3));$vnode_3=[$quick_eX_static_text||($quick_eX_static_text=$createVNode(0,'查看设计区元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-e_ rd-j6','mx5-click': $viewId+'_mj()',},$vnode_3));$vnode_3=[$quick_eY_static_text||($quick_eY_static_text=$createVNode(0,'查看设选中元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-e_ rd-j6','mx5-click': $viewId+'_mk()',},$vnode_3));$vnode_3=[$quick_eZ_static_text||($quick_eZ_static_text=$createVNode(0,'查看剪切板'))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-j6','mx5-click': $viewId+'_ml()',},$vnode_3));$vnode_3=[$quick_e0_static_text||($quick_e0_static_text=$createVNode(0,'清空剪切板'))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-e_ rd-j6','mx5-click': $viewId+'_mm()',},$vnode_3));$vnode_3=[$quick_e1_static_text||($quick_e1_static_text=$createVNode(0,'向格子内添加文本元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-e_ rd-j6','mx5-click': $viewId+'_mn()',},$vnode_3));$vnode_3=[$quick_e2_static_text||($quick_e2_static_text=$createVNode(0,'添加到设计区'))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-j6','mx5-click': $viewId+'_mo()',},$vnode_3));$vnode_1.push($createVNode('div',$quick_f5_5_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',$quick_f5_0_static_attr,$vnode_1)]; 

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
    '_mf<click>'() {
        c.log(State);
    },
    '_mg<click>'() {
        c.log(State.get());
    },
    '_mh<click>'() {
        c.log(history_1['ei']());
    },
    '_mi<click>'() {
        c.log(Vframe.all());
    },
    '_mj<click>'() {
        c.log(State.get('dM'));
    },
    '_mk<click>'() {
        c.log(State.get('dE'));
    },
    '_ml<click>'() {
        let list = stage_clipboard_1['_f2']();
        if (list &&
            list.length) {
            let isCut = stage_clipboard_1['_f3']();
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
    '_mm<click>'() {
        stage_clipboard_1['_dP']();
    },
    '_mn<click>'() {
        let selectElements = State.get('dE');
        let find;
        if (selectElements &&
            selectElements.length == 1) {
            let { ctrl, props } = selectElements[0];
            if (ctrl.as & enum_1['dH']) {
                let { focusRow, focusCol, rows } = props;
                if (focusRow > -1 &&
                    focusCol > -1) {
                    find = 1;
                    let page = State.get('dN');
                    let addText = {
                        id: magix_1.guid('text_'),
                        type: 'text',
                        props: {
                            x: const_1['dF'](randomRange(0, 30)),
                            y: const_1['dF'](randomRange(0, 20)),
                            text: '测试内容'
                        }
                    };
                    let { 'dE': translatedElements } = index_1['dF']([addText], page, true);
                    let cell = rows[focusRow].cols[focusCol];
                    if (cell.elements) {
                        let historyTitle = stage_generic_1['dQ'](translatedElements);
                        cell.elements.push(...translatedElements);
                        //以下事件必须派发，通知其它view元素有变化
                        State.fire('d2');
                        //历史记录可根据情况可存可不存
                        history_1['dE'](history_1['dZ'], historyTitle);
                    }
                }
            }
        }
        if (!find) {
            this.alert('请选中一个容器的格子查看效果');
        }
    },
    '_mo<click>'() {
        let stageElements = State.get('dM');
        let scale = State.get('dF');
        let page = State.get('dN');
        let elementsMap = State.get('dZ');
        let textCtrl = elementsMap.text;
        let addText = {
            id: magix_1.guid('text_'),
            ctrl: textCtrl,
            type: 'text',
            props: textCtrl['_eE'](0, 0)
        };
        addText.props.x = const_1['dF'](randomRange(0, 30));
        addText.props.y = const_1['dF'](randomRange(0, 20));
        addText.props.text = '测试内容';
        addText.props.ename = '测试文本';
        if (page.readonly) { //如果整个设计区只读，则元素只读
            addText.props.readonly = true;
        }
        for (let s of textCtrl.props) {
            if (isFunction(s['_ga'])) {
                s['_ga'](addText.props, scale);
            }
            else if (s['_fc']) {
                addText.props[s.key] *= scale;
            }
        }
        if (textCtrl['_eF']) {
            textCtrl['_eF'](addText.props);
        }
        stageElements.push(addText);
        let historyTitle = stage_generic_1['dQ']([addText]);
        //以下事件必须派发，通知其它view元素有变化
        State.fire('d2');
        //历史记录根据情况可存可不存
        history_1['dE'](history_1['dZ'], historyTitle);
    }
}).merge(index_2);

});