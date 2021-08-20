/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/index",["magix5","../elements/index","../gallery/mx-dialog/index","../gallery/mx-runner/index","../gallery/mx-toast/index","../i18n/index","../panels/index","./const","./enum","./example","./history","./keyboard","./service","./shortcuts","./stage-clipboard","./stage-generic","./stage-selection","./tojson","./header","./toolbar","./axis","./stage"],(require,exports,module)=>{
require("./header");
require("./toolbar");
require("./axis");
require("./stage");
let $quick_cY_2_static_node;
let $quick_cY_3_static_node;
let $quick_cY_4_static_node;
let $quick_cY_7_static_node;
let $quick_cY_0_static_attr={'class': 'rd-_assets_index_less_-overflow-hidden rd-_designer_index_less_-axis-stage-wrapper',};
let $quick_cY_1_static_attr={'class': 'rd-_assets_index_less_-flex rd-_designer_index_less_-stage-wrapper',};
let $quick_cY_5_static_attr={'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-pr rd-_designer_index_less_-foot',};
let $quick_cY_6_static_attr={'class': 'rd-_assets_index_less_-fl',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../elements/index");
let index_2 = require("../gallery/mx-dialog/index");
let index_3 = require("../gallery/mx-runner/index");
let index_4 = require("../gallery/mx-toast/index");
let index_5 = require("../i18n/index");
let index_6 = require("../panels/index");
let const_1 = require("./const");
let enum_1 = require("./enum");
let example_1 = require("./example");
let history_1 = require("./history");
let keyboard_1 = require("./keyboard");
let service_1 = require("./service");
let shortcuts_1 = require("./shortcuts");
let stage_clipboard_1 = require("./stage-clipboard");
let stage_generic_1 = require("./stage-generic");
let stage_selection_1 = require("./stage-selection");
let tojson_1 = require("./tojson");
let { State, applyStyle, View, node, config, mark, parseUrl, has, unboot, toMap, mix } = magix_1;
applyStyle("rd-_designer_index_less_","\n.rd-_designer_index_less_-header {\nbackground:#47B34E;\nheight:40px;\nline-height:40px;\npadding:0 10px;\ncolor:#ffffff;\n}\n.rd-_designer_index_less_-toolbar {\npadding:0 4px 0 20px;\nbackground:#fafafa;\ncolor:#333;\nheight:28px;\nz-index:201;\nborder-bottom:solid 1px #eee;\nmargin-left:0px;\n}\n.rd-_designer_index_less_-axis {\nheight:20px;\nleft:0px;\nwidth:calc(100% - -1px);\nborder-right:solid 0 #ccc;\n}\n.rd-_designer_index_less_-axis-stage-wrapper {\nheight:calc(100% - 88px);\n}\n.rd-_designer_index_less_-stage-wrapper {\nheight:calc(100% - 20px);\n}\n.rd-_designer_index_less_-stage {\nbackground-color:#edeef3;\nmargin-left:20px;\nbox-shadow:inset -2px -2px 6px 6px #dadada;\n}\n.rd-_designer_index_less_-stage-left {\nmargin-top:-48px;\nwidth:0px;\nz-index:300;\nheight:calc(100% + 48px);\nborder-right:solid 0 #eee;\n}\n.rd-_designer_index_less_-stage-right {\nwidth:0px;\nmargin-top:-1px;\nz-index:300;\nheight:calc(100% + 1px);\nborder-left:solid 0 #ccc;\nborder-top:solid 0 #ccc;\n}\n.rd-_designer_index_less_-stage-drag-scroll-zone {\ninset:86px 0px 21px 20px;\nbox-shadow:inset 0 0 0 20px rgba(71, 179, 78, 0.1);\nz-index:1000;\n}\n.rd-_designer_index_less_-foot {\nheight:20px;\nbackground:#fafafa;\nz-index:200;\nborder-top:1px solid #ccc;\npadding-left:25px;\nline-height:20px;\n}\n.rd-_designer_index_less_-hide-axis .rd-_designer_index_less_-stage-wrapper {\nheight:100%;\n}\n.rd-_designer_index_less_-hide-axis .rd-_designer_index_less_-stage {\nmargin-left:0;\n}\n.rd-_designer_index_less_-hide-axis .rd-_designer_index_less_-stage-drag-scroll-zone {\nleft:0;\ntop:66px;\n}\n.rd-_designer_index_less_-hide-axis .rd-_designer_index_less_-toolbar {\nborder-bottom-color:#ccc;\n}\n.rd-_designer_index_less_-hide-axis .rd-_designer_index_less_-stage-left {\nmargin-top:-28px;\nwidth:0px;\nz-index:300;\nheight:calc(100% + 28px);\n}\n");
let CellAndHod = enum_1['@:{enum#as.hod~rs}'] | enum_1['@:{enum#as.cells~rs}'];
//快捷键数字到面板索引的映射
let CodesMap = {};
for (let i = 0; i < 9; i++) {
    CodesMap[`Digit${i + 1}`] = i;
}
/**
 * 历史记录还原时，需要清除未选中状态下的容器元素的格子聚焦状态
 * @param elements 当前设计区内的所有元素
 * @param selectMap 选中对象的id集合对象
 */
let ResetBoxFocus = (elements, selectMap) => {
    if (elements) {
        for (let { ctrl, id, props } of elements) {
            if (ctrl.as & CellAndHod) {
                if (!selectMap[id]) {
                    props.focusRow = -1;
                    props.focusCol = -1;
                }
                else {
                    for (let row of props.rows) {
                        for (let col of row.cols) {
                            let elements = col.elements;
                            ResetBoxFocus(elements, selectMap);
                        }
                    }
                }
            }
        }
    }
};
/**
 * 更新设计区到某个状态
 * @param param0 应用的状态对象
 */
let ApplyState = ({ json }) => {
    let page = State.get('@:{global#stage.page~rs}');
    let elements = State.get('@:{global#stage.elements~rs}');
    let select = State.get('@:{global#stage.select.elements~rs}');
    let xLines = State.get('@:{global#stage.x.help.lines~rs}');
    let yLines = State.get('@:{global#stage.y.help.lines~rs}');
    let { page: jsonPage, elements: jsonElements, xLines: jsonXLines, yLines: jsonYLines, clipboard: jsonClipboard, select: jsonSelect } = json;
    mix(page, jsonPage);
    let { '@:{emanager#elements~rs}': lElements, '@:{emanager#map~rs}': map } = index_1["@:{element.manager#by.json~rs}"](jsonElements, page);
    elements.length = 0;
    elements.push(...lElements); //设计区元素
    xLines.length = 0;
    if (jsonXLines) { //水平辅助线
        xLines.push(...jsonXLines);
    }
    yLines.length = 0;
    if (jsonYLines) { //垂直辅助线
        yLines.push(...jsonYLines);
    }
    let sMap = {};
    select.length = 0;
    if (jsonSelect) { //历史处于选中状态的元素
        for (let s of jsonSelect) {
            let e = map[s.id];
            if (e) {
                sMap[e.id] = 1;
                select.push(e);
            }
        }
    }
    stage_selection_1['@:{selection#reset.map~rs}']();
    ResetBoxFocus(elements, sMap);
    if (jsonClipboard.c) {
        index_1['@:{element.manager#by.json~rs}'](jsonClipboard.c, page);
    }
    State.set({
        '@:{global#stage.unit~rs}': json.unit || const_1['@:{const#unit~rs}'],
        '@:{global#stage.scale~rs}': json.scale || 1,
        '@:{global#stage.clipboard~rs}': jsonClipboard,
        '@:{global#stage.elements.groups~rs}': json.groups
    });
};
/**
 * 根据快捷键处理相应的面板行为
 * @param index 待响应的面板下标索引
 * @param toggleHeight 是否打开或关闭内容
 */
let TogglePanel = (index, toggleHeight) => {
    let panels = index_6["@:{support.panels~rs}"]();
    let dest = panels[index];
    if (dest) {
        if (toggleHeight) { //仅展示可折叠内容
            index_6["@:{toggle.panel.height~rs}"](dest.id);
        }
        else { //展示可隐藏面板
            index_6["@:{toggle.panel~rs}"](dest.id);
        }
    }
};
/**
 * magix框架内部繁忙提示
 * @param e 繁忙事件对象
 */
let MagixBusyTip = (e) => {
    let ns = node('_rd_ss');
    if (ns) {
        ns.innerHTML = e.busy ? index_5('@:{lang#system.busy~rs}') : '';
    }
    //document.documentElement.classList.add('@:scoped.style:pointer-events-none');
};
/**
 * 转换单位
 * @param dest 目标属性
 * @param ctrl 控制对象
 * @param toUnit 转换后的单位
 * @param fixed 是否修正小数位
 */
let convertUnitOfProps = (dest, ctrl, toUnit, fixed) => {
    let v, changed;
    for (let df of ctrl.props) {
        if (df['@:{unit.convert~rs}']) { //属性有unit.convert方法，表明这个属性单位转换比较复杂，交与提供的方法进行转换
            changed = 1;
            df['@:{unit.convert~rs}'](dest, toUnit);
        }
        else if (df['@:{is.scale.and.unit.field~rs}']) { //表明这个属性需要单位转换，那就使用我们默认的单位转换进行计算
            changed = 1;
            v = const_1['@:{const#unit.to.unit~rs}'](dest[df.key], toUnit);
            if (fixed) {
                v = const_1['@:{const#scale.to.unit~rs}'](v, null, toUnit);
            }
            dest[df.key] = v;
        }
    }
    return changed;
};
/**
 * 转换到目标单位
 * @param elements 待转换的元素
 * @param toUnit 目标单位
 */
let convertToUnit = (elements, toUnit, refNormalPorps, refFlowConnectorProps) => {
    let update;
    if (!refNormalPorps) { //普通属性和流程图连线元素有更新顺序，普通在前，连接线在后
        update = 1; //因为该方法被递归，而事件只需要触发一次，这里使用update进行控制
        refNormalPorps = [];
        refFlowConnectorProps = [];
    }
    let flowProvider = State.get('@:{global#provider.of.flow~rs}');
    for (let m of elements) {
        let { props, ctrl } = m;
        //转换属性列表中需要单位转换的属性，并不是所有的都需要转换，因此这里只对有转换的进行后续的属性更新
        if (convertUnitOfProps(props, ctrl, toUnit)) {
            if (ctrl['@:{update.props~rs}']) {
                if (flowProvider &&
                    flowProvider['@:{flow.provider#is.connector~rs}'](m)) {
                    refFlowConnectorProps.push([ctrl['@:{update.props~rs}'], props]);
                }
                else {
                    refNormalPorps.push([ctrl['@:{update.props~rs}'], props]);
                }
            }
        }
        //容器元素需要进行深层遍历
        if (ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
            for (let row of props.rows) {
                for (let col of row.cols) {
                    if (col.elements) {
                        convertToUnit(col.elements, toUnit, refNormalPorps, refFlowConnectorProps);
                    }
                }
            }
        }
    }
    if (update) {
        //先设置目标单位，再更新元素的其它属性
        State.set({
            '@:{global#stage.unit~rs}': toUnit
        });
        let allProps = refNormalPorps.concat(refFlowConnectorProps);
        for (let [update, p] of allProps) {
            update(p);
        }
    }
};
//反调试
//rd#need-register-code
//以下这个if语句完成在发布模式下的反调试功能，如果需要发布调试，可删除这个if语句
if (!DEBUG && false) {
    let F = Function, FS = F + '', FUS = F[FS] + '';
    let now = performance.now.bind(performance);
    let task = t1 => {
        t1 = now();
        F(`${FUS.slice(2, 4)}b${FS[1]}gg${FUS[3]}r`)();
        if (now() - t1 > 100) {
            index_3['@:{task.remove~rs}'](task);
            unboot();
        }
    };
    index_3["@:{task.add~rs}"](2000, task);
}
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/header','id': 'hd','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-unselectable rd-_designer_index_less_-header','mx5-contextmenu': $viewId+'@:{prevent~rs}()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-unselectable rd-_designer_index_less_-toolbar','mx5-contextmenu': $viewId+'@:{prevent~rs}()',})];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/axis','id': '_rd_axis','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-unselectable rd-_designer_index_less_-axis','mx5-contextmenu': $viewId+'@:{prevent~rs}()',})];
if($quick_cY_2_static_node){
$vnode_2=[$quick_cY_2_static_node];
}else{
$vnode_2=[$quick_cY_2_static_node=$createVNode('div',{'_': 'b^','class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-overflow-scroll rd-_assets_index_less_-scrollable rd-_designer_index_less_-stage-left',})];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/stage','id': '_rd_stage','class': 'rd-_assets_index_less_-flex-fill-rest rd-_assets_index_less_-overflow-scroll rd-_assets_index_less_-pr rd-_assets_index_less_-scrollable rd-_assets_index_less_-unselectable rd-_designer_index_less_-stage',}));
if($quick_cY_3_static_node){
$vnode_2.push($quick_cY_3_static_node);
}else{
$vnode_2.push($quick_cY_3_static_node=$createVNode('div',{'_': 'b*','class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-overflow-scroll rd-_assets_index_less_-scrollable rd-_designer_index_less_-stage-right',}));
}
$vnode_1.push($createVNode('div',$quick_cY_1_static_attr,$vnode_2));
if($quick_cY_4_static_node){
$vnode_1.push($quick_cY_4_static_node);
}else{
$vnode_1.push($quick_cY_4_static_node=$createVNode('div',{'_': 'b{','class': 'rd-_assets_index_less_-none rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-unselectable rd-_designer_index_less_-stage-drag-scroll-zone','id': '_rd_sdsz',}));
}
$vnode_0.push($createVNode('div',$quick_cY_0_static_attr,$vnode_1));$vnode_2=[$createVNode(0,($__line=16,$__art='{{=i18n(\'@:{lang#site.copy.right~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#site.copy.right~rs}\')%>',(i18n('@:{lang#site.copy.right~rs}'))),1)];$vnode_1=[$createVNode('div',$quick_cY_6_static_attr,$vnode_2)];
if($quick_cY_7_static_node){
$vnode_1.push($quick_cY_7_static_node);
}else{
$vnode_1.push($quick_cY_7_static_node=$createVNode('div',{'_': 'b}','class': 'rd-_assets_index_less_-fr rd-_assets_index_less_-mr10 rd-_assets_index_less_-unselectable','id': '_rd_ss',}));
}
$vnode_0.push($createVNode('div',$quick_cY_5_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/index.html'; throw msg; }  } ,
    init() {
        //设置全局数据
        State.set({
            '@:{global#stage.unit~rs}': const_1['@:{const#unit~rs}'],
        });
        let pageCtrl = State.get('@:{global#stage.page.ctrl~rs}');
        State.set({
            '@:{global#stage.page~rs}': pageCtrl['@:{get.props~rs}'](),
            '@:{global#stage.scale~rs}': const_1['@:{const#stage.scale~rs}'],
            '@:{global#stage.elements~rs}': [],
            '@:{global#stage.select.elements~rs}': [],
            '@:{global#stage.elements.groups~rs}': {},
            '@:{global#stage.elements.groups.linked~rs}': false,
            '@:{global#stage.x.help.lines~rs}': [],
            '@:{global#stage.y.help.lines~rs}': [],
            '@:{global#stage.clipboard~rs}': {}
        });
        let clearStageElements = (e) => {
            let xLines = State.get('@:{global#stage.x.help.lines~rs}');
            let yLines = State.get('@:{global#stage.y.help.lines~rs}');
            let elements = State.get('@:{global#stage.elements~rs}');
            this.confirm(index_5(e['@:{clear.events#action~rs}'] == '@:{clear.events#new~rs}' ? '@:{lang#create.new.page.confirm~rs}' : '@:{lang#clear.stage.element.confirm~rs}'), () => {
                xLines.length = 0;
                yLines.length = 0;
                if (e['@:{clear.events#action~rs}'] !== '@:{clear.events#new~rs}' &&
                    const_1['@:{const#support.readonly.element~rs}']) {
                    let page = State.get('@:{global#stage.page~rs}');
                    page.readonly = false;
                    stage_generic_1['@:{generic#remove.nonreadonly.elements~rs}'](elements, 1);
                }
                else {
                    stage_clipboard_1['@:{clear~rs}']();
                    State.set({
                        '@:{global#stage.unit~rs}': const_1['@:{const#unit~rs}']
                    });
                    elements = [];
                    let pageCtrl = State.get('@:{global#stage.page.ctrl~rs}');
                    let page = pageCtrl['@:{get.props~rs}']();
                    State.set({
                        '@:{global#stage.page~rs}': page
                    });
                }
                State.set({
                    '@:{global#stage.elements~rs}': elements,
                    '@:{global#stage.elements.groups~rs}': {}
                });
                stage_selection_1["@:{selection#set~rs}"]();
                State.fire('@:{event#stage.page.and.elements.change~rs}');
                history_1["@:{history#save~rs}"](history_1[e['@:{clear.events#action~rs}'] == '@:{clear.events#new~rs}' ? '@:{history#new.page~rs}' : '@:{history#clear.stage~rs}']);
            });
        };
        /**
         * 切换示例
         * @param e 切换示例事件对象
         */
        let changeExample = (e) => {
            let xLines = State.get('@:{global#stage.x.help.lines~rs}');
            let yLines = State.get('@:{global#stage.y.help.lines~rs}');
            xLines.length = 0;
            yLines.length = 0;
            let stageNode = node('_rd_stage');
            if (stageNode) { //滚动到设计区域的左上角
                stageNode.scrollLeft = 0;
                stageNode.scrollTop = 0;
            }
            let { page, groups, elements, unit } = e['@:{excample.change.event#stage~rs}'];
            State.set({
                '@:{global#stage.unit~rs}': unit || const_1['@:{const#unit~rs}']
            });
            let pageCtrl = State.get('@:{global#stage.page.ctrl~rs}');
            let newPage = pageCtrl["@:{get.props~rs}"]();
            mix(newPage, page); //更新设计区属性
            let { '@:{emanager#elements~rs}': lElements, '@:{emanager#props~rs}': delayUpdateProps, '@:{emanager#id.map~rs}': idMap } = index_1["@:{element.manager#by.json~rs}"](elements, newPage, 1);
            let newGroups = {}; //生成新的组合信息
            groups || (groups = []);
            for (let list of groups) {
                let newList = [];
                for (let id of list) {
                    let mId = idMap[id];
                    newList.push(mId);
                    newGroups[mId] = newList;
                }
            }
            State.set({
                '@:{global#stage.page~rs}': newPage,
                '@:{global#stage.elements~rs}': lElements || [],
                '@:{global#stage.elements.groups~rs}': newGroups
            });
            stage_selection_1["@:{selection#set~rs}"](); //取消选择元素
            stage_clipboard_1['@:{clear~rs}']();
            State.fire('@:{event#stage.page.and.elements.change~rs}');
            if (delayUpdateProps) { //更新所有元素的动态计算属性
                for (let [ctrl, ps] of delayUpdateProps) {
                    ctrl['@:{update.props~rs}'](ps);
                }
            }
            //保存历史记录
            history_1["@:{history#save~rs}"](e['@:{excample.change.event#type~rs}'], e['@:{excample.change.event#title~rs}']);
        };
        /**
         * 保存内容
         * @param e 保存内容事件对象
         */
        let saveContent = (e) => {
            let url = config('saveContentUrl');
            if (url && !e['@:{save.content.event#shift.key~rs}']) {
                if (!this['@:{saving~rs}']) {
                    index_4.show('正在保存...');
                    this['@:{saving~rs}'] = 1;
                    let { params } = parseUrl(location.href);
                    try {
                        if (!params.id &&
                            this['@:{saved.id~rs}']) {
                            let copied = { ...params };
                            copied.id = this['@:{saved.id~rs}'];
                            params = copied;
                        }
                        let s = new service_1();
                        s.save({
                            name: '@:{save.content~rs}',
                            // '@:{body}': `stage=${ToJSON()}`,
                            '@:{body~rs}': JSON.stringify({ templateJSON: tojson_1() }),
                            '@:{query~rs}': params
                        }, (ex, bag) => {
                            if (ex) {
                                index_4.hide();
                                this.alert(ex.message, null, '保存失败');
                            }
                            else {
                                index_4.show('保存成功～', 2e3);
                                this['@:{saved.id~rs}'] = bag.get('data.id', '');
                            }
                            delete this['@:{saving~rs}'];
                            //如果配置的有onSuccessSave事件，则调用一下
                            // let onSuccessSave = config<Function>('onSuccessSave');
                            // if (onSuccessSave) {
                            //     setTimeout(onSuccessSave, 2e3);
                            // }
                        });
                    }
                    catch (ex) {
                        index_4.hide();
                        this.alert(ex.message);
                    }
                    finally {
                        delete this['@:{saving~rs}'];
                    }
                }
            }
            else if (const_1['@:{const#save.show.stage.content~rs}']) {
                this.mxDialog("designer/content", {
                    width: Math.max(1000, screen.width - 200)
                });
            }
        };
        /**
         * 监听键盘按下抬起
         * @param e 按键事件
         */
        let watchKeypress = (e) => {
            if (e['@:{keypress#is.prevent.actions~rs}'] ||
                !e['@:{keypress#is.key.down~rs}'] ||
                e['@:{keypress#active.is.input~rs}'])
                return;
            let { '@:{keypress#code~rs}': code, '@:{keypress#shift.key~rs}': shiftKey, '@:{keypress#ctrl.key~rs}': ctrlKey, '@:{keypress#alt.key~rs}': altKey } = e;
            if (code == keyboard_1["@:{key#z~rs}"] &&
                shiftKey &&
                !ctrlKey) { //shift+z，打开或关闭所有面板
                let allOpen = index_6["@:{is.all.opened~rs}"]();
                if (allOpen) {
                    index_6["@:{close.all.panels~rs}"]();
                }
                else {
                    index_6["@:{open.all.panels~rs}"]();
                }
            }
            else if (!ctrlKey &&
                has(CodesMap, code)) { //单纯按下数字1-5
                TogglePanel(CodesMap[code], shiftKey);
            }
            else if (shiftKey &&
                code == keyboard_1["@:{key#slash~rs}"]) { // shift+/ 显示快捷键
                if (const_1['@:{const#shortcuts.dialog.and.help.icon~rs}']) {
                    shortcuts_1["@:{show~rs}"](this);
                }
            }
            else if (ctrlKey &&
                code == keyboard_1["@:{key#s~rs}"]) {
                //如果是ctrl+s或cmd+s，显示保存
                e['@:{keypress#prevent.default~rs}']();
                State.fire('@:{event#stage.save.content~rs}', {
                    '@:{save.content.event#shift.key~rs}': shiftKey
                });
            }
            else if (ctrlKey &&
                !shiftKey &&
                !altKey &&
                code == keyboard_1['@:{key#h~rs}']) {
                let axisNode = node('_rd_axis');
                if (axisNode) {
                    let rootClassList = this.root.classList;
                    let axisClassList = axisNode.classList;
                    let hidden = axisClassList.contains('rd-_assets_index_less_-none');
                    if (hidden) {
                        axisClassList.remove('rd-_assets_index_less_-none');
                        rootClassList.remove('rd-_designer_index_less_-hide-axis');
                    }
                    else {
                        axisClassList.add('rd-_assets_index_less_-none');
                        rootClassList.add('rd-_designer_index_less_-hide-axis');
                    }
                }
            }
            else if (!(ctrlKey || altKey || shiftKey)) {
                if (code == keyboard_1['@:{key#c~rs}']) { //单纯的按c
                    if (stage_generic_1['@:{generic#query.can.clear.stage~rs}']()) {
                        State.fire('@:{event#stage.clear.elements~rs}');
                    }
                }
                else if (code == keyboard_1['@:{key#n~rs}']) {
                    if (stage_generic_1['@:{generic#query.can.create.new.page~rs}']()) {
                        State.fire('@:{event#stage.clear.elements~rs}', {
                            '@:{clear.events#action~rs}': '@:{clear.events#new~rs}'
                        });
                    }
                }
            }
        };
        let changeUnit = (e) => {
            let elements = State.get('@:{global#stage.elements~rs}');
            let toUnit = e['@:{to.unit~rs}'];
            let page = State.get('@:{global#stage.page~rs}');
            page.unit = toUnit;
            let pageCtrl = State.get('@:{global#stage.page.ctrl~rs}');
            convertUnitOfProps(page, pageCtrl, toUnit, 1);
            convertToUnit(elements, toUnit);
            let selectElements = State.get('@:{global#stage.select.elements~rs}');
            if (selectElements.length == 1) {
                let single = selectElements[0];
                State.fire('@:{event#stage.select.element.props.change~rs}', {
                    '@:{ids~rs}': { [single.id]: 1 },
                    '@:{types~rs}': {
                        [single.type]: 1
                    },
                    '@:{props~rs}': {
                        '@:{unit~rs}': 1
                    }
                });
            }
            State.fire('@:{event#stage.page.and.elements.change~rs}');
        };
        //保存初始状态的历史记录
        //DHistory["@:{history#save.default}"]();
        //监听历史记录事件
        State.on('@:{event#history.shift.change~rs}', ApplyState);
        //框架内部繁忙
        State.on('@:{event#magix.busy~rs}', MagixBusyTip);
        //清空
        State.on('@:{event#stage.clear.elements~rs}', clearStageElements);
        //更换模板
        State.on('@:{event#example.change~rs}', changeExample);
        //保存
        State.on('@:{event#stage.save.content~rs}', saveContent);
        //按键
        State.on('@:{event#stage.key.press~rs}', watchKeypress);
        //单位转换
        State.on('@:{event#stage.unit.change~rs}', changeUnit);
        //安装全局数据缓存监控
        stage_generic_1['@:{generic#setup.all.elements.cache.monitor~rs}']();
        //流程图监控元素之间的连线插件
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        if (flowProvider) {
            flowProvider['@:{flow.provider#setup.flow.monitor~rs}']();
        }
        //安装键盘监视
        keyboard_1['@:{key#setup.monitor~rs}']();
        this.on('destroy', () => {
            history_1['@:{history#clear~rs}']();
            index_6['@:{destroy~rs}']();
            stage_clipboard_1['@:{clear~rs}']();
            stage_selection_1['@:{selection#reset.map~rs}']();
            keyboard_1['@:{key#teardown.monitor~rs}']();
            if (flowProvider) {
                flowProvider['@:{flow.provider#teardown.flow.monitor~rs}']();
            }
            stage_generic_1['@:{generic#teardown.all.elements.cache.monitor~rs}']();
            State.off('@:{event#history.shift.change~rs}', ApplyState);
            State.off('@:{event#magix.busy~rs}', MagixBusyTip);
            State.off('@:{event#stage.clear.elements~rs}', clearStageElements);
            State.off('@:{event#example.change~rs}', changeExample);
            State.off('@:{event#stage.save.content~rs}', saveContent);
            State.off('@:{event#stage.key.press~rs}', watchKeypress);
            State.off('@:{event#stage.unit.change~rs}', changeUnit);
        });
    },
    /**
     * 获取数据源数据，数据源在项目中多处使用，这里进行统一请求，并放置在State中，供其它view使用
     */
    async '@:{fetch.data.source~rs}'() {
        return new Promise(resolve => {
            if (config('getFieldUrl')) {
                let s = new service_1();
                s.all('@:{get.fields~rs}', (err, bag) => {
                    if (err === null || err === void 0 ? void 0 : err.message) {
                        console.log('有错误', err.message);
                        this.confirm('登录过期,请重新登录,本地点击确定模拟登录', () => {
                            s.all({ name: '@:{post.login~rs}', '@:{body~rs}': JSON.stringify({
                                    password: "Aa123456",
                                    username: "13823349075"
                                }) }, (err, bag) => {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                try {
                                    window.localStorage.setItem('login-token', JSON.stringify(bag.get('token')));
                                    window.location.reload();
                                }
                                catch (error) {
                                }
                                console.log('登录结果', bag.get('data'), bag.get('token'));
                            });
                        }, console.log, '提示');
                    }
                    let dataSourceList = bag.get('data', []);
                    let list = [{
                            name: index_5('@:{lang#select.source~rs}'),
                            id: ''
                        }].concat(dataSourceList);
                    State.set({
                        '@:{global#stage.data.source.error~rs}': err,
                        '@:{global#stage.data.source.list~rs}': list,
                        '@:{global#stage.data.source.list.map~rs}': toMap(list, 'id')
                    });
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    },
    async render() {
        index_6["@:{support.panels~rs}"]();
        let m = mark(this, '@:{render~rs}');
        await this['@:{fetch.data.source~rs}']();
        await this.digest();
        if (m()) {
            index_6["@:{open.panels~rs}"]();
            /**
             * 如果地址栏有id且配置了获取内容的url，则从接口读取内容
             * 否则如果配置了模板接口，则从模板列表中随机选择一个
             */
            let templateUrl = config('getTemplateUrl');
            let contentUrl = config('getContentUrl');
            let { params } = parseUrl(location.href);
            console.log('______', params, contentUrl, parent);
            if (params.id &&
                contentUrl) {
                index_4.show('正在读取内容...');
                let s = new service_1();
                s.all({
                    name: '@:{get.content~rs}',
                    '@:{query~rs}': params
                }, (ex, bag) => {
                    index_4.hide();
                    if (!ex) {
                        let stage = bag.get('data.templateJson');
                        if (stage) {
                            State.fire('@:{event#example.change~rs}', {
                                '@:{excample.change.event#type~rs}': history_1['@:{history#example.from.remote~rs}'],
                                '@:{excample.change.event#title~rs}': params.id,
                                '@:{excample.change.event#stage~rs}': stage
                            });
                        }
                    }
                });
            }
            else if (templateUrl &&
                const_1['@:{const#random.examples~rs}']) { //如果有示例配置,且允许显示随机示例
                index_4.show('正在加载示例...');
                await example_1["@:{load~rs}"]();
                index_4.hide();
            }
            else {
                history_1['@:{history#save.default~rs}']();
            }
        }
    },
    '$doc<dragover,drop>'(e) {
        this['@:{prevent.default~rs}'](e);
    }
}).merge(index_2);

});