/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/res/index",["5c","../../5b/5e","../../5b/enum","../../5b/5o","../../5b/68","../../5b/65","../../61/index","../../5j/62/index"],(require,exports,module)=>{
let $quick_os_1_static_node;
let $quick_os_3_static_node;
let $quick_os_4_static_node;
let $quick_ng_static_text;
let $quick_nh_static_text;
let $quick_ni_static_text;
let $quick_nj_static_text;
let $quick_nk_static_text;
let $quick_nl_static_text;
let $quick_nm_static_text;
let $quick_nn_static_text;
let $quick_no_static_text;
let $quick_np_static_text;
let $quick_os_0_static_attr={'class': 'rd-ss',};
let $quick_os_5_static_attr={'class': 'rd-st',};

let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let history_1 = require("../../5b/5o");
let stage_clipboard_1 = require("../../5b/68");
let stage_generic_1 = require("../../5b/65");
let index_1 = require("../../61/index");
let index_2 = require("../../5j/62/index");
let randomRange = (min, max) => min + ((Math.random() * (max - min + 1)) | 0);
let { View, applyStyle, State, Vframe, type, isFunction } = magix_1;
applyStyle("rd-mF",".rd-ss{padding:5px 4px}.rd-st{margin-top:5px}");
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
if($quick_os_1_static_node){
$vnode_1.push($quick_os_1_static_node);
}else{
$vnode_2=[$createVNode(0,'<a href="https://space.bilibili.com/1699691485" class="rd-mo" target="_blank" rel="noopener noreferrer">B站源码讲解视频</a><a href="https://github.com/xinglie/report-designer/issues/36" class="rd-mo rd-mx" target="_blank" rel="noopener noreferrer">源码讲解文字版</a><a href="https://github.com/xinglie/report-designer/issues/44" class="rd-mo rd-mx" target="_blank" rel="noopener noreferrer">开发新的元素</a>',1)];$vnode_1.push($quick_os_1_static_node=$createVNode('div',{'_': 'i!','class': 'rd-mX',},$vnode_2));
}

if(d){

if($quick_os_3_static_node){
$vnode_1.push($quick_os_3_static_node);
}else{
$vnode_1.push($quick_os_3_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mV',}));
}

if($quick_os_4_static_node){
$vnode_1.push($quick_os_4_static_node);
}else{
$vnode_2=[$createVNode(0,'以下采用console.log输出，需要打开浏览器的调试工具，在console面板查看')];$vnode_1.push($quick_os_4_static_node=$createVNode('div',{'_': 'i$','class': 'rd-nL rd-nU',},$vnode_2));
}
$vnode_3=[$quick_ng_static_text||($quick_ng_static_text=$createVNode(0,'查看State对象'))];$vnode_2=[$createVNode('button',{'class': 'rd-l9 rd-ma rd-nk','mx5-click': $viewId+'_uD()',},$vnode_3)];$vnode_3=[$quick_nh_static_text||($quick_nh_static_text=$createVNode(0,'查看State中的数据'))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-ma rd-mx rd-nk','mx5-click': $viewId+'_uE()',},$vnode_3));$vnode_3=[$quick_ni_static_text||($quick_ni_static_text=$createVNode(0,'查看历史记录'))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-ma rd-mx rd-nk','mx5-click': $viewId+'_uF()',},$vnode_3));$vnode_3=[$quick_nj_static_text||($quick_nj_static_text=$createVNode(0,'查看组件结构'))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-ma rd-nk rd-st','mx5-click': $viewId+'_uG()',},$vnode_3));$vnode_3=[$quick_nk_static_text||($quick_nk_static_text=$createVNode(0,'查看设计区元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-ma rd-mx rd-nk rd-st','mx5-click': $viewId+'_uH()',},$vnode_3));$vnode_3=[$quick_nl_static_text||($quick_nl_static_text=$createVNode(0,'查看设选中元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-ma rd-mx rd-nk rd-st','mx5-click': $viewId+'_uI()',},$vnode_3));$vnode_3=[$quick_nm_static_text||($quick_nm_static_text=$createVNode(0,'查看剪切板'))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-ma rd-nk rd-st','mx5-click': $viewId+'_uJ()',},$vnode_3));$vnode_3=[$quick_nn_static_text||($quick_nn_static_text=$createVNode(0,'清空剪切板'))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-ma rd-mx rd-nk rd-st','mx5-click': $viewId+'_uK()',},$vnode_3));$vnode_3=[$quick_no_static_text||($quick_no_static_text=$createVNode(0,'向格子内添加文本元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-ma rd-mx rd-nk rd-st','mx5-click': $viewId+'_uL()',},$vnode_3));$vnode_3=[$quick_np_static_text||($quick_np_static_text=$createVNode(0,'添加到设计区'))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-ma rd-nk rd-st','mx5-click': $viewId+'_uM()',},$vnode_3));$vnode_1.push($createVNode('div',$quick_os_5_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',$quick_os_0_static_attr,$vnode_1)]; 

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
    '_uD<click>'() {
        c.log(State);
    },
    '_uE<click>'() {
        c.log(State.get());
    },
    '_uF<click>'() {
        c.log(history_1['mG']());
    },
    '_uG<click>'() {
        c.log(Vframe.all());
    },
    '_uH<click>'() {
        c.log(State.get('m_'));
    },
    '_uI<click>'() {
        c.log(State.get('l2'));
    },
    '_uJ<click>'() {
        let list = stage_clipboard_1['_op']();
        if (list &&
            list.length) {
            let isCut = stage_clipboard_1['_oq']();
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
    '_uK<click>'() {
        stage_clipboard_1['_mc']();
    },
    '_uL<click>'() {
        let selectElements = State.get('l2');
        let find;
        if (selectElements &&
            selectElements.length == 1) {
            let { ctrl, props } = selectElements[0];
            if (ctrl.as & enum_1['l5']) {
                let { focusRow, focusCol, rows } = props;
                if (focusRow > -1 &&
                    focusCol > -1) {
                    find = 1;
                    let page = State.get('ma');
                    let addText = {
                        id: magix_1.guid('text_'),
                        type: 'text',
                        props: {
                            x: const_1['l3'](randomRange(0, 30)),
                            y: const_1['l3'](randomRange(0, 20)),
                            text: '测试内容'
                        }
                    };
                    let { 'l2': translatedElements } = index_1['l3']([addText], page, true);
                    let cell = rows[focusRow].cols[focusCol];
                    if (cell.elements) {
                        let historyTitle = stage_generic_1['md'](translatedElements);
                        cell.elements.push(...translatedElements);
                        //以下事件必须派发，通知其它view元素有变化
                        State.fire('mp');
                        //历史记录可根据情况可存可不存
                        history_1['l2'](history_1['mm'], historyTitle);
                    }
                }
            }
        }
        if (!find) {
            this.alert('请选中一个容器的格子查看效果');
        }
    },
    '_uM<click>'() {
        let stageElements = State.get('m_');
        let scale = State.get('l3');
        let page = State.get('ma');
        let elementsMap = State.get('mm');
        let textCtrl = elementsMap.text;
        let addText = {
            id: magix_1.guid('text_'),
            ctrl: textCtrl,
            type: 'text',
            props: textCtrl['_m2'](0, 0)
        };
        addText.props.x = const_1['l3'](randomRange(0, 30));
        addText.props.y = const_1['l3'](randomRange(0, 20));
        addText.props.text = '测试内容';
        addText.props.ename = '测试文本';
        if (page.readonly) { //如果整个设计区只读，则元素只读
            addText.props.readonly = true;
        }
        for (let s of textCtrl.props) {
            if (isFunction(s['_oy'])) {
                s['_oy'](addText.props, scale);
            }
            else if (s['_nA']) {
                addText.props[s.key] *= scale;
            }
        }
        if (textCtrl['_m3']) {
            textCtrl['_m3'](addText.props);
        }
        stageElements.push(addText);
        let historyTitle = stage_generic_1['md']([addText]);
        //以下事件必须派发，通知其它view元素有变化
        State.fire('mp');
        //历史记录根据情况可存可不存
        history_1['l2'](history_1['mm'], historyTitle);
    }
}).merge(index_2);

});