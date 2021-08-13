/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/index",["5c","../61/index","../5j/62/index","../5j/5m/index","../5j/5q/index","../5n/index","../66/index","./5e","./enum","./5u","./5o","./5p","./5v","./67","./68","./65","./69","./5s","./60","./6a","./5i","./6b"],(require,exports,module)=>{
require("./60");
require("./6a");
require("./5i");
require("./6b");
let $quick_l9_2_static_node;
let $quick_l9_3_static_node;
let $quick_l9_4_static_node;
let $quick_l9_7_static_node;
let $quick_l9_0_static_attr={'class': 'rd-nO rd-o2',};
let $quick_l9_1_static_attr={'class': 'rd-mX rd-o3',};
let $quick_l9_5_static_attr={'class': 'rd-mK rd-nL rd-nU rd-o8',};
let $quick_l9_6_static_attr={'class': 'rd-mH',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let index_1 = require("../61/index");
let index_2 = require("../5j/62/index");
let index_3 = require("../5j/5m/index");
let index_4 = require("../5j/5q/index");
let index_5 = require("../5n/index");
let index_6 = require("../66/index");
let const_1 = require("./5e");
let enum_1 = require("./enum");
let example_1 = require("./5u");
let history_1 = require("./5o");
let keyboard_1 = require("./5p");
let service_1 = require("./5v");
let shortcuts_1 = require("./67");
let stage_clipboard_1 = require("./68");
let stage_generic_1 = require("./65");
let stage_selection_1 = require("./69");
let tojson_1 = require("./5s");
let { State, applyStyle, View, node, config, mark, parseUrl, has, unboot, toMap, mix } = magix_1;
applyStyle("rd-l7",".rd-oZ{background:#47b34e;color:#fff;height:40px;line-height:40px;padding:0 10px}.rd-o0{background:#fafafa;border-bottom:1px solid #eee;color:#333;height:28px;margin-left:0;padding:0 4px 0 20px;z-index:201}.rd-o1{border-right:0 solid #ccc;height:20px;left:0;width:calc(100% + 1px)}.rd-o2{height:calc(100% - 88px)}.rd-o3{height:calc(100% - 20px)}.rd-o4{background-color:#edeef3;box-shadow:inset -2px -2px 6px 6px #dadada;margin-left:20px}.rd-o5{border-right:0 solid #eee;height:calc(100% + 48px);margin-top:-48px;width:0;z-index:300}.rd-o6{border-left:0 solid #ccc;border-top:0 solid #ccc;height:calc(100% + 1px);margin-top:-1px;width:0;z-index:300}.rd-o7{box-shadow:inset 0 0 0 20px rgba(71,179,78,.1);inset:86px 0 21px 20px;z-index:1000}.rd-o8{background:#fafafa;border-top:1px solid #ccc;height:20px;line-height:20px;padding-left:25px;z-index:200}.rd-o9 .rd-o3{height:100%}.rd-o9 .rd-o4{margin-left:0}.rd-o9 .rd-o7{left:0;top:66px}.rd-o9 .rd-o0{border-bottom-color:#ccc}.rd-o9 .rd-o5{height:calc(100% + 28px);margin-top:-28px;width:0;z-index:300}");
let CellAndHod = enum_1['l5'] | enum_1['l7'];
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
    let page = State.get('ma');
    let elements = State.get('m_');
    let select = State.get('l2');
    let xLines = State.get('l5');
    let yLines = State.get('l6');
    let { page: jsonPage, elements: jsonElements, xLines: jsonXLines, yLines: jsonYLines, clipboard: jsonClipboard, select: jsonSelect } = json;
    mix(page, jsonPage);
    let { 'l2': lElements, 'l3': map } = index_1["l3"](jsonElements, page);
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
    stage_selection_1['l2']();
    ResetBoxFocus(elements, sMap);
    if (jsonClipboard.c) {
        index_1['l3'](jsonClipboard.c, page);
    }
    State.set({
        'l4': json.unit || const_1['mF'],
        'l3': json.scale || 1,
        'md': jsonClipboard,
        'mc': json.groups
    });
};
/**
 * 根据快捷键处理相应的面板行为
 * @param index 待响应的面板下标索引
 * @param toggleHeight 是否打开或关闭内容
 */
let TogglePanel = (index, toggleHeight) => {
    let panels = index_6["_nw"]();
    let dest = panels[index];
    if (dest) {
        if (toggleHeight) { //仅展示可折叠内容
            index_6["_nx"](dest.id);
        }
        else { //展示可隐藏面板
            index_6["_ny"](dest.id);
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
        ns.innerHTML = e.busy ? index_5('np') : '';
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
        if (df['_nz']) { //属性有unit.convert方法，表明这个属性单位转换比较复杂，交与提供的方法进行转换
            changed = 1;
            df['_nz'](dest, toUnit);
        }
        else if (df['_nA']) { //表明这个属性需要单位转换，那就使用我们默认的单位转换进行计算
            changed = 1;
            v = const_1['mO'](dest[df.key], toUnit);
            if (fixed) {
                v = const_1['l4'](v, null, toUnit);
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
    let flowProvider = State.get('me');
    for (let m of elements) {
        let { props, ctrl } = m;
        //转换属性列表中需要单位转换的属性，并不是所有的都需要转换，因此这里只对有转换的进行后续的属性更新
        if (convertUnitOfProps(props, ctrl, toUnit)) {
            if (ctrl['_m3']) {
                if (flowProvider &&
                    flowProvider['l2'](m)) {
                    refFlowConnectorProps.push([ctrl['_m3'], props]);
                }
                else {
                    refNormalPorps.push([ctrl['_m3'], props]);
                }
            }
        }
        //容器元素需要进行深层遍历
        if (ctrl.as & enum_1['l5']) {
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
            'l4': toUnit
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
            index_3['_mq'](task);
            unboot();
        }
    };
    index_3["_mr"](2000, task);
}
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/60','id': 'hd','class': 'rd-mK rd-mR rd-oZ','mx5-contextmenu': $viewId+'_nT()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6a','class': 'rd-mK rd-mR rd-o0','mx5-contextmenu': $viewId+'_nT()',})];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/5i','id': '_rd_axis','class': 'rd-mK rd-mR rd-o1','mx5-contextmenu': $viewId+'_nT()',})];
if($quick_l9_2_static_node){
$vnode_2=[$quick_l9_2_static_node];
}else{
$vnode_2=[$quick_l9_2_static_node=$createVNode('div',{'_': 'i!','class': 'rd-mA rd-mS rd-nR rd-o5',})];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6b','id': '_rd_stage','class': 'rd-mK rd-mR rd-mS rd-mW rd-nR rd-o4',}));
if($quick_l9_3_static_node){
$vnode_2.push($quick_l9_3_static_node);
}else{
$vnode_2.push($quick_l9_3_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mA rd-mS rd-nR rd-o6',}));
}
$vnode_1.push($createVNode('div',$quick_l9_1_static_attr,$vnode_2));
if($quick_l9_4_static_node){
$vnode_1.push($quick_l9_4_static_node);
}else{
$vnode_1.push($quick_l9_4_static_node=$createVNode('div',{'_': 'i$','class': 'rd-mJ rd-mL rd-mO rd-mR rd-o7','id': '_rd_sdsz',}));
}
$vnode_0.push($createVNode('div',$quick_l9_0_static_attr,$vnode_1));$vnode_2=[$createVNode(0,(i18n('nt')),1)];$vnode_1=[$createVNode('div',$quick_l9_6_static_attr,$vnode_2)];
if($quick_l9_7_static_node){
$vnode_1.push($quick_l9_7_static_node);
}else{
$vnode_1.push($quick_l9_7_static_node=$createVNode('div',{'_': 'i^','class': 'rd-mI rd-mR rd-mw','id': '_rd_ss',}));
}
$vnode_0.push($createVNode('div',$quick_l9_5_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        //设置全局数据
        State.set({
            'l4': const_1['mF'],
        });
        let pageCtrl = State.get('mf');
        State.set({
            'ma': pageCtrl['_m2'](),
            'l3': const_1['mf'],
            'm_': [],
            'l2': [],
            'mc': {},
            'mg': false,
            'l5': [],
            'l6': [],
            'md': {}
        });
        let clearStageElements = (e) => {
            let xLines = State.get('l5');
            let yLines = State.get('l6');
            let elements = State.get('m_');
            this.confirm(index_5(e['l2'] == 'l3' ? 'nq' : 'nr'), () => {
                xLines.length = 0;
                yLines.length = 0;
                if (e['l2'] !== 'l3' &&
                    const_1['my']) {
                    let page = State.get('ma');
                    page.readonly = false;
                    stage_generic_1['l5'](elements, 1);
                }
                else {
                    stage_clipboard_1['_mc']();
                    State.set({
                        'l4': const_1['mF']
                    });
                    elements = [];
                    let pageCtrl = State.get('mf');
                    let page = pageCtrl['_m2']();
                    State.set({
                        'ma': page
                    });
                }
                State.set({
                    'm_': elements,
                    'mc': {}
                });
                stage_selection_1["l3"]();
                State.fire('m_');
                history_1["l2"](history_1[e['l2'] == 'l3' ? 'me' : 'md']);
            });
        };
        /**
         * 切换示例
         * @param e 切换示例事件对象
         */
        let changeExample = (e) => {
            let xLines = State.get('l5');
            let yLines = State.get('l6');
            xLines.length = 0;
            yLines.length = 0;
            let stageNode = node('_rd_stage');
            if (stageNode) { //滚动到设计区域的左上角
                stageNode.scrollLeft = 0;
                stageNode.scrollTop = 0;
            }
            let { page, groups, elements, unit } = e['l2'];
            State.set({
                'l4': unit || const_1['mF']
            });
            let pageCtrl = State.get('mf');
            let newPage = pageCtrl["_m2"]();
            mix(newPage, page); //更新设计区属性
            let { 'l2': lElements, 'l4': delayUpdateProps, 'l5': idMap } = index_1["l3"](elements, newPage, 1);
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
                'ma': newPage,
                'm_': lElements || [],
                'mc': newGroups
            });
            stage_selection_1["l3"](); //取消选择元素
            stage_clipboard_1['_mc']();
            State.fire('m_');
            if (delayUpdateProps) { //更新所有元素的动态计算属性
                for (let [ctrl, ps] of delayUpdateProps) {
                    ctrl['_m3'](ps);
                }
            }
            //保存历史记录
            history_1["l2"](e['l3'], e['l4']);
        };
        /**
         * 保存内容
         * @param e 保存内容事件对象
         */
        let saveContent = (e) => {
            let url = config('saveContentUrl');
            if (url && !e['l2']) {
                if (!this['_nB']) {
                    index_4.show('正在保存...');
                    this['_nB'] = 1;
                    let { params } = parseUrl(location.href);
                    try {
                        if (!params.id &&
                            this['_nC']) {
                            let copied = { ...params };
                            copied.id = this['_nC'];
                            params = copied;
                        }
                        let s = new service_1();
                        s.save({
                            name: '_nD',
                            // '@:{body}': `stage=${ToJSON()}`,
                            '_nE': JSON.stringify({ templateJSON: tojson_1(), name: '测试模板' }),
                            '_nF': params
                        }, (ex, bag) => {
                            if (ex) {
                                index_4.hide();
                                this.alert(ex.message, null, '保存失败');
                            }
                            else {
                                index_4.show('保存成功～', 2e3);
                                this['_nC'] = bag.get('data.id', '');
                            }
                            delete this['_nB'];
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
                        delete this['_nB'];
                    }
                }
            }
            else if (const_1['mc']) {
                this.mxDialog("5b/content", {
                    width: Math.max(1000, screen.width - 200)
                });
            }
        };
        /**
         * 监听键盘按下抬起
         * @param e 按键事件
         */
        let watchKeypress = (e) => {
            if (e['l2'] ||
                !e['l3'] ||
                e['l4'])
                return;
            let { 'l5': code, 'l6': shiftKey, 'l7': ctrlKey, 'l8': altKey } = e;
            if (code == keyboard_1["mb"] &&
                shiftKey &&
                !ctrlKey) { //shift+z，打开或关闭所有面板
                let allOpen = index_6["_nG"]();
                if (allOpen) {
                    index_6["_nH"]();
                }
                else {
                    index_6["_nI"]();
                }
            }
            else if (!ctrlKey &&
                has(CodesMap, code)) { //单纯按下数字1-5
                TogglePanel(CodesMap[code], shiftKey);
            }
            else if (shiftKey &&
                code == keyboard_1["ma"]) { // shift+/ 显示快捷键
                if (const_1['md']) {
                    shortcuts_1["_mA"](this);
                }
            }
            else if (ctrlKey &&
                code == keyboard_1["mc"]) {
                //如果是ctrl+s或cmd+s，显示保存
                e['l9']();
                State.fire('md', {
                    'l2': shiftKey
                });
            }
            else if (ctrlKey &&
                !shiftKey &&
                !altKey &&
                code == keyboard_1['l2']) {
                let axisNode = node('_rd_axis');
                if (axisNode) {
                    let rootClassList = this.root.classList;
                    let axisClassList = axisNode.classList;
                    let hidden = axisClassList.contains('rd-mO');
                    if (hidden) {
                        axisClassList.remove('rd-mO');
                        rootClassList.remove('rd-o9');
                    }
                    else {
                        axisClassList.add('rd-mO');
                        rootClassList.add('rd-o9');
                    }
                }
            }
            else if (!(ctrlKey || altKey || shiftKey)) {
                if (code == keyboard_1['md']) { //单纯的按c
                    if (stage_generic_1['l6']()) {
                        State.fire('ml');
                    }
                }
                else if (code == keyboard_1['me']) {
                    if (stage_generic_1['l7']()) {
                        State.fire('ml', {
                            'l2': 'l3'
                        });
                    }
                }
            }
        };
        let changeUnit = (e) => {
            let elements = State.get('m_');
            let toUnit = e['_nJ'];
            let page = State.get('ma');
            page.unit = toUnit;
            let pageCtrl = State.get('mf');
            convertUnitOfProps(page, pageCtrl, toUnit, 1);
            convertToUnit(elements, toUnit);
            let selectElements = State.get('l2');
            if (selectElements.length == 1) {
                let single = selectElements[0];
                State.fire('l4', {
                    '_nK': { [single.id]: 1 },
                    '_nL': {
                        [single.type]: 1
                    },
                    '_l3': {
                        '_nM': 1
                    }
                });
            }
            State.fire('m_');
        };
        //保存初始状态的历史记录
        //DHistory["@:{history#save.default}"]();
        //监听历史记录事件
        State.on('l7', ApplyState);
        //框架内部繁忙
        State.on('mm', MagixBusyTip);
        //清空
        State.on('ml', clearStageElements);
        //更换模板
        State.on('mc', changeExample);
        //保存
        State.on('md', saveContent);
        //按键
        State.on('ma', watchKeypress);
        //单位转换
        State.on('mn', changeUnit);
        //安装全局数据缓存监控
        stage_generic_1['l8']();
        //流程图监控元素之间的连线插件
        let flowProvider = State.get('me');
        if (flowProvider) {
            flowProvider['l3']();
        }
        //安装键盘监视
        keyboard_1['mf']();
        this.on('destroy', () => {
            history_1['mI']();
            index_6['_nN']();
            stage_clipboard_1['_mc']();
            stage_selection_1['l2']();
            keyboard_1['mg']();
            if (flowProvider) {
                flowProvider['l4']();
            }
            stage_generic_1['l9']();
            State.off('l7', ApplyState);
            State.off('mm', MagixBusyTip);
            State.off('ml', clearStageElements);
            State.off('mc', changeExample);
            State.off('md', saveContent);
            State.off('ma', watchKeypress);
            State.off('mn', changeUnit);
        });
    },
    /**
     * 获取数据源数据，数据源在项目中多处使用，这里进行统一请求，并放置在State中，供其它view使用
     */
    async '_nP'() {
        return new Promise(resolve => {
            if (config('getFieldUrl')) {
                let s = new service_1();
                s.all('_nO', (err, bag) => {
                    let dataSourceList = bag.get('data', []);
                    let list = [{
                            name: index_5('ns'),
                            id: ''
                        }].concat(dataSourceList);
                    State.set({
                        'mh': err,
                        'mi': list,
                        'mj': toMap(list, 'id')
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
        index_6["_nw"]();
        let m = mark(this, '_mh');
        await this['_nP']();
        await this.digest();
        if (m()) {
            index_6["_nQ"]();
            /**
             * 如果地址栏有id且配置了获取内容的url，则从接口读取内容
             * 否则如果配置了模板接口，则从模板列表中随机选择一个
             */
            let templateUrl = config('getTemplateUrl');
            let contentUrl = config('getContentUrl');
            let { params } = parseUrl(location.href);
            console.log('______', params, contentUrl);
            if (params.id &&
                contentUrl) {
                index_4.show('正在读取内容...');
                let s = new service_1();
                s.all({
                    name: '_nR',
                    '_nF': params
                }, (ex, bag) => {
                    index_4.hide();
                    if (!ex) {
                        let stage = bag.get('data.templateJson');
                        if (stage) {
                            State.fire('mc', {
                                'l3': history_1['mD'],
                                'l4': params.id,
                                'l2': stage
                            });
                        }
                    }
                });
            }
            else if (templateUrl &&
                const_1['ma']) { //如果有示例配置,且允许显示随机示例
                index_4.show('正在加载示例...');
                await example_1["_mT"]();
                index_4.hide();
            }
            else {
                history_1['mE']();
            }
        }
    },
    '$doc<dragover,drop>'(e) {
        this['_nS'](e);
    }
}).merge(index_2);

});