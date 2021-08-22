/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/res/index",["magix5","../../designer/const","../../designer/enum","../../designer/history","../../designer/stage-clipboard","../../designer/stage-generic","../../elements/index","../../gallery/mx-dialog/index"],(require,exports,module)=>{
let $quick_dY_1_static_node;
let $quick_dY_3_static_node;
let $quick_dY_4_static_node;
let $quick_cM_static_text;
let $quick_cN_static_text;
let $quick_cO_static_text;
let $quick_cP_static_text;
let $quick_cQ_static_text;
let $quick_cR_static_text;
let $quick_cS_static_text;
let $quick_cT_static_text;
let $quick_cU_static_text;
let $quick_cV_static_text;
let $quick_dY_0_static_attr={'class': 'rd-_panels_res_index_less_-debug-wrap',};
let $quick_dY_5_static_attr={'class': 'rd-_panels_res_index_less_-mt5',};

let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let history_1 = require("../../designer/history");
let stage_clipboard_1 = require("../../designer/stage-clipboard");
let stage_generic_1 = require("../../designer/stage-generic");
let index_1 = require("../../elements/index");
let index_2 = require("../../gallery/mx-dialog/index");
let randomRange = (min, max) => min + ((Math.random() * (max - min + 1)) | 0);
let { View, applyStyle, State, Vframe, type, isFunction } = magix_1;
applyStyle("rd-_panels_res_index_less_","\n.rd-_panels_res_index_less_-debug-wrap {\npadding:5px 4px;\n}\n.rd-_panels_res_index_less_-mt5 {\nmargin-top:5px;\n}\n");
let c = window.console;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	d,}=$dataFromView,
$vnode_2,
$vnode_3,
$vnode_1;
$vnode_1=[];
if($quick_dY_1_static_node){
$vnode_1.push($quick_dY_1_static_node);
}else{
$vnode_2=[$createVNode(0,'<a href="https://space.bilibili.com/1699691485" class="rd-_assets_index_less_-tag-a" target="_blank" rel="noopener noreferrer">B站源码讲解视频</a><a href="https://github.com/xinglie/report-designer/issues/36" class="rd-_assets_index_less_-ml10 rd-_assets_index_less_-tag-a" target="_blank" rel="noopener noreferrer">源码讲解文字版</a><a href="https://github.com/xinglie/report-designer/issues/44" class="rd-_assets_index_less_-ml10 rd-_assets_index_less_-tag-a" target="_blank" rel="noopener noreferrer">开发新的元素</a>',1)];$vnode_1.push($quick_dY_1_static_node=$createVNode('div',{'_': 'a^','class': 'rd-_assets_index_less_-flex',},$vnode_2));
}
$__line=13;$__art="{{if d}}";$__ctrl="if(d){";
if(d){

if($quick_dY_3_static_node){
$vnode_1.push($quick_dY_3_static_node);
}else{
$vnode_1.push($quick_dY_3_static_node=$createVNode('div',{'_': 'a*','class': 'rd-_assets_index_less_-item-spliter',}));
}

if($quick_dY_4_static_node){
$vnode_1.push($quick_dY_4_static_node);
}else{
$vnode_2=[$createVNode(0,'以下采用console.log输出，需要打开浏览器的调试工具，在console面板查看')];$vnode_1.push($quick_dY_4_static_node=$createVNode('div',{'_': 'a{','class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-fontsize-12',},$vnode_2));
}
$vnode_3=[$quick_cM_static_text||($quick_cM_static_text=$createVNode(0,'查看State对象'))];$vnode_2=[$createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer','mx5-click': $viewId+'@:{log.state~rs}()',},$vnode_3)];$vnode_3=[$quick_cN_static_text||($quick_cN_static_text=$createVNode(0,'查看State中的数据'))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10','mx5-click': $viewId+'@:{log.state.data~rs}()',},$vnode_3));$vnode_3=[$quick_cO_static_text||($quick_cO_static_text=$createVNode(0,'查看历史记录'))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10','mx5-click': $viewId+'@:{log.history.data~rs}()',},$vnode_3));$vnode_3=[$quick_cP_static_text||($quick_cP_static_text=$createVNode(0,'查看组件结构'))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_panels_res_index_less_-mt5','mx5-click': $viewId+'@:{log.vom~rs}()',},$vnode_3));$vnode_3=[$quick_cQ_static_text||($quick_cQ_static_text=$createVNode(0,'查看设计区元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10 rd-_panels_res_index_less_-mt5','mx5-click': $viewId+'@:{log.stage.elements~rs}()',},$vnode_3));$vnode_3=[$quick_cR_static_text||($quick_cR_static_text=$createVNode(0,'查看设选中元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10 rd-_panels_res_index_less_-mt5','mx5-click': $viewId+'@:{log.select.elements~rs}()',},$vnode_3));$vnode_3=[$quick_cS_static_text||($quick_cS_static_text=$createVNode(0,'查看剪切板'))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_panels_res_index_less_-mt5','mx5-click': $viewId+'@:{log.clipboard~rs}()',},$vnode_3));$vnode_3=[$quick_cT_static_text||($quick_cT_static_text=$createVNode(0,'清空剪切板'))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10 rd-_panels_res_index_less_-mt5','mx5-click': $viewId+'@:{clear.clipboard~rs}()',},$vnode_3));$vnode_3=[$quick_cU_static_text||($quick_cU_static_text=$createVNode(0,'向格子内添加文本元素'))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10 rd-_panels_res_index_less_-mt5','mx5-click': $viewId+'@:{add.text.to.cell~rs}()',},$vnode_3));$vnode_3=[$quick_cV_static_text||($quick_cV_static_text=$createVNode(0,'添加到设计区'))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_panels_res_index_less_-mt5','mx5-click': $viewId+'@:{add.text.to.stage~rs}()',},$vnode_3));$vnode_1.push($createVNode('div',$quick_dY_5_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',$quick_dY_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/res/index.html'; throw msg; }  } ,
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
    '@:{log.state~rs}<click>'() {
        c.log(State);
    },
    '@:{log.state.data~rs}<click>'() {
        c.log(State.get());
    },
    '@:{log.history.data~rs}<click>'() {
        c.log(history_1['@:{history#get.history.info~rs}']());
    },
    '@:{log.vom~rs}<click>'() {
        c.log(Vframe.all());
    },
    '@:{log.stage.elements~rs}<click>'() {
        c.log(State.get('@:{global#stage.elements~rs}'));
    },
    '@:{log.select.elements~rs}<click>'() {
        c.log(State.get('@:{global#stage.select.elements~rs}'));
    },
    '@:{log.clipboard~rs}<click>'() {
        let list = stage_clipboard_1['@:{get.copy.list~rs}']();
        if (list &&
            list.length) {
            let isCut = stage_clipboard_1['@:{is.cut~rs}']();
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
    '@:{clear.clipboard~rs}<click>'() {
        stage_clipboard_1['@:{clear~rs}']();
    },
    '@:{add.text.to.cell~rs}<click>'() {
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let find;
        if (selectElements &&
            selectElements.length == 1) {
            let { ctrl, props } = selectElements[0];
            if (ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                let { focusRow, focusCol, rows } = props;
                if (focusRow > -1 &&
                    focusCol > -1) {
                    find = 1;
                    let page = State.get('@:{global#stage.page~rs}');
                    let addText = {
                        id: magix_1.guid('text_'),
                        type: 'text',
                        props: {
                            x: const_1['@:{const#to.unit~rs}'](randomRange(0, 30)),
                            y: const_1['@:{const#to.unit~rs}'](randomRange(0, 20)),
                            text: '测试内容'
                        }
                    };
                    let { '@:{emanager#elements~rs}': translatedElements } = index_1['@:{element.manager#by.json~rs}']([addText], page, true);
                    let cell = rows[focusRow].cols[focusCol];
                    if (cell.elements) {
                        let historyTitle = stage_generic_1['@:{generic#query.element.name~rs}'](translatedElements);
                        cell.elements.push(...translatedElements);
                        //以下事件必须派发，通知其它view元素有变化
                        State.fire('@:{event#stage.elements.change~rs}');
                        //历史记录可根据情况可存可不存
                        history_1['@:{history#save~rs}'](history_1['@:{history#element.added~rs}'], historyTitle);
                    }
                }
            }
        }
        if (!find) {
            this.alert('请选中一个容器的格子查看效果');
        }
    },
    '@:{add.text.to.stage~rs}<click>'() {
        let stageElements = State.get('@:{global#stage.elements~rs}');
        let scale = State.get('@:{global#stage.scale~rs}');
        let page = State.get('@:{global#stage.page~rs}');
        let elementsMap = State.get('@:{global#stage.elements.map~rs}');
        let textCtrl = elementsMap.text;
        let addText = {
            id: magix_1.guid('text_'),
            ctrl: textCtrl,
            type: 'text',
            props: textCtrl['@:{get.props~rs}'](0, 0)
        };
        addText.props.x = const_1['@:{const#to.unit~rs}'](randomRange(0, 30));
        addText.props.y = const_1['@:{const#to.unit~rs}'](randomRange(0, 20));
        addText.props.text = '测试内容';
        addText.props.ename = '测试文本';
        if (page.readonly) { //如果整个设计区只读，则元素只读
            addText.props.readonly = true;
        }
        for (let s of textCtrl.props) {
            if (isFunction(s['@:{stage.scale~rs}'])) {
                s['@:{stage.scale~rs}'](addText.props, scale);
            }
            else if (s['@:{is.scale.and.unit.field~rs}']) {
                addText.props[s.key] *= scale;
            }
        }
        if (textCtrl['@:{update.props~rs}']) {
            textCtrl['@:{update.props~rs}'](addText.props);
        }
        stageElements.push(addText);
        let historyTitle = stage_generic_1['@:{generic#query.element.name~rs}']([addText]);
        //以下事件必须派发，通知其它view元素有变化
        State.fire('@:{event#stage.elements.change~rs}');
        //历史记录根据情况可存可不存
        history_1['@:{history#save~rs}'](history_1['@:{history#element.added~rs}'], historyTitle);
    }
}).merge(index_2);

});