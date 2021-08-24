/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/index",["51","../5m/index","../58/5n/index","../58/5b/index","../58/5f/index","../5c/index","../5r/index","./53","./enum","./5j","./5d","./5e","./5k","./5s","./5t","./5q","./5u","./5h","./5l","./5v","./57","./60"],(require,exports,module)=>{
require("./5l");
require("./5v");
require("./57");
require("./60");
let $quick_gk_2_static_node;
let $quick_gk_3_static_node;
let $quick_gk_4_static_node;
let $quick_gk_7_static_node;
let $quick_gk_0_static_attr={'class': 'rd-h0 rd-jd',};
let $quick_gk_1_static_attr={'class': 'rd-g9 rd-je',};
let $quick_gk_5_static_attr={'class': 'rd-gW rd-h6 rd-hX rd-jj',};
let $quick_gk_6_static_attr={'class': 'rd-gT',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../5m/index");
let index_2 = require("../58/5n/index");
let index_3 = require("../58/5b/index");
let index_4 = require("../58/5f/index");
let index_5 = require("../5c/index");
let index_6 = require("../5r/index");
let const_1 = require("./53");
let enum_1 = require("./enum");
let example_1 = require("./5j");
let history_1 = require("./5d");
let keyboard_1 = require("./5e");
let service_1 = require("./5k");
let shortcuts_1 = require("./5s");
let stage_clipboard_1 = require("./5t");
let stage_generic_1 = require("./5q");
let stage_selection_1 = require("./5u");
let tojson_1 = require("./5h");
let { State, applyStyle, View, node, config, mark, parseUrl, has, unboot, toMap, mix } = magix_1;
applyStyle("rd-gi",".rd-ja{background:#47b34e;color:#fff;height:40px;line-height:40px;padding:0 10px}.rd-jb{background:#fafafa;border-bottom:1px solid #eee;color:#333;height:28px;margin-left:0;padding:0 4px 0 20px;z-index:201}.rd-jc{border-right:0 solid #ccc;height:20px;left:0;width:calc(100% + 1px)}.rd-jd{height:calc(100% - 88px)}.rd-je{height:calc(100% - 20px)}.rd-jf{background-color:#edeef3;box-shadow:inset -2px -2px 6px 6px #dadada;margin-left:20px}.rd-jg{border-right:0 solid #eee;height:calc(100% + 48px);margin-top:-48px;width:0;z-index:300}.rd-jh{border-left:0 solid #ccc;border-top:0 solid #ccc;height:calc(100% + 1px);margin-top:-1px;width:0;z-index:300}.rd-ji{box-shadow:inset 0 0 0 20px rgba(71,179,78,.1);inset:86px 0 21px 20px;z-index:1000}.rd-jj{background:#fafafa;border-top:1px solid #ccc;height:20px;line-height:20px;padding-left:25px;z-index:200}.rd-jk .rd-je{height:100%}.rd-jk .rd-jf{margin-left:0}.rd-jk .rd-ji{left:0;top:66px}.rd-jk .rd-jb{border-bottom-color:#ccc}.rd-jk .rd-jg{height:calc(100% + 28px);margin-top:-28px;width:0;z-index:300}");
let CellAndHod = enum_1['gg'] | enum_1['gi'];
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
    let page = State.get('gm');
    let elements = State.get('gl');
    let select = State.get('gd');
    let xLines = State.get('gg');
    let yLines = State.get('gh');
    let { page: jsonPage, elements: jsonElements, xLines: jsonXLines, yLines: jsonYLines, clipboard: jsonClipboard, select: jsonSelect, } = json;
    mix(page, jsonPage);
    let { 'gd': lElements, 'ge': map } = index_1['ge'](jsonElements, page);
    elements.length = 0;
    elements.push(...lElements); //设计区元素
    xLines.length = 0;
    if (jsonXLines) {
        //水平辅助线
        xLines.push(...jsonXLines);
    }
    yLines.length = 0;
    if (jsonYLines) {
        //垂直辅助线
        yLines.push(...jsonYLines);
    }
    let sMap = {};
    select.length = 0;
    if (jsonSelect) {
        //历史处于选中状态的元素
        for (let s of jsonSelect) {
            let e = map[s.id];
            if (e) {
                sMap[e.id] = 1;
                select.push(e);
            }
        }
    }
    stage_selection_1['gd']();
    ResetBoxFocus(elements, sMap);
    if (jsonClipboard.c) {
        index_1['ge'](jsonClipboard.c, page);
    }
    State.set({
        'gf': json.unit || const_1['gR'],
        'ge': json.scale || 1,
        'gp': jsonClipboard,
        'go': json.groups,
    });
};
/**
 * 根据快捷键处理相应的面板行为
 * @param index 待响应的面板下标索引
 * @param toggleHeight 是否打开或关闭内容
 */
let TogglePanel = (index, toggleHeight) => {
    let panels = index_6['_hI']();
    let dest = panels[index];
    if (dest) {
        if (toggleHeight) {
            //仅展示可折叠内容
            index_6['_hJ'](dest.id);
        }
        else {
            //展示可隐藏面板
            index_6['_hK'](dest.id);
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
        ns.innerHTML = e.busy ? index_5('hB') : '';
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
        if (df['_hL']) {
            //属性有unit.convert方法，表明这个属性单位转换比较复杂，交与提供的方法进行转换
            changed = 1;
            df['_hL'](dest, toUnit);
        }
        else if (df['_hM']) {
            //表明这个属性需要单位转换，那就使用我们默认的单位转换进行计算
            changed = 1;
            v = const_1['g0'](dest[df.key], toUnit);
            if (fixed) {
                v = const_1['gf'](v, null, toUnit);
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
    if (!refNormalPorps) {
        //普通属性和流程图连线元素有更新顺序，普通在前，连接线在后
        update = 1; //因为该方法被递归，而事件只需要触发一次，这里使用update进行控制
        refNormalPorps = [];
        refFlowConnectorProps = [];
    }
    let flowProvider = State.get('gq');
    for (let m of elements) {
        let { props, ctrl } = m;
        //转换属性列表中需要单位转换的属性，并不是所有的都需要转换，因此这里只对有转换的进行后续的属性更新
        if (convertUnitOfProps(props, ctrl, toUnit)) {
            if (ctrl['_he']) {
                if (flowProvider && flowProvider['gd'](m)) {
                    refFlowConnectorProps.push([ctrl['_he'], props]);
                }
                else {
                    refNormalPorps.push([ctrl['_he'], props]);
                }
            }
        }
        //容器元素需要进行深层遍历
        if (ctrl.as & enum_1['gg']) {
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
            'gf': toUnit,
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
            index_3['_gC'](task);
            unboot();
        }
    };
    index_3['_gD'](2000, task);
}
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/5l','id': 'hd','class': 'rd-g3 rd-gW rd-ja','mx5-contextmenu': $viewId+'_h6()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/5v','class': 'rd-g3 rd-gW rd-jb','mx5-contextmenu': $viewId+'_h6()',})];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/57','id': '_rd_axis','class': 'rd-g3 rd-gW rd-jc','mx5-contextmenu': $viewId+'_h6()',})];
if($quick_gk_2_static_node){
$vnode_2=[$quick_gk_2_static_node];
}else{
$vnode_2=[$quick_gk_2_static_node=$createVNode('div',{'_': 'eD','class': 'rd-g4 rd-gM rd-h3 rd-jg',})];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/60','id': '_rd_stage','class': 'rd-g3 rd-g4 rd-g8 rd-gW rd-h3 rd-jf',}));
if($quick_gk_3_static_node){
$vnode_2.push($quick_gk_3_static_node);
}else{
$vnode_2.push($quick_gk_3_static_node=$createVNode('div',{'_': 'eE','class': 'rd-g4 rd-gM rd-h3 rd-jh',}));
}
$vnode_1.push($createVNode('div',$quick_gk_1_static_attr,$vnode_2));
if($quick_gk_4_static_node){
$vnode_1.push($quick_gk_4_static_node);
}else{
$vnode_1.push($quick_gk_4_static_node=$createVNode('div',{'_': 'eF','class': 'rd-g0 rd-g3 rd-gV rd-gX rd-ji','id': '_rd_sdsz',}));
}
$vnode_0.push($createVNode('div',$quick_gk_0_static_attr,$vnode_1));$vnode_2=[$createVNode(0,(i18n('hF')),1)];$vnode_1=[$createVNode('div',$quick_gk_6_static_attr,$vnode_2)];
if($quick_gk_7_static_node){
$vnode_1.push($quick_gk_7_static_node);
}else{
$vnode_1.push($quick_gk_7_static_node=$createVNode('div',{'_': 'eG','class': 'rd-g3 rd-gI rd-gU','id': '_rd_ss',}));
}
$vnode_0.push($createVNode('div',$quick_gk_5_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        //设置全局数据
        State.set({
            'gf': const_1['gR'],
        });
        let pageCtrl = State.get('gr');
        State.set({
            'gm': pageCtrl['_hd'](),
            'ge': const_1['gr'],
            'gl': [],
            'gd': [],
            'go': {},
            'gs': false,
            'gg': [],
            'gh': [],
            'gp': {},
        });
        let clearStageElements = (e) => {
            //清空设计区元素
            let xLines = State.get('gg');
            let yLines = State.get('gh');
            let elements = State.get('gl');
            this.confirm(index_5(e['gd'] == 'ge'
                ? 'hC'
                : 'hD'), () => {
                xLines.length = 0;
                yLines.length = 0;
                if (e['gd'] !== 'ge' &&
                    const_1['gK']) {
                    let page = State.get('gm');
                    page.readonly = false;
                    stage_generic_1['gg'](elements, 1);
                }
                else {
                    stage_clipboard_1['_go']();
                    State.set({
                        'gf': const_1['gR'],
                    });
                    elements = [];
                    let pageCtrl = State.get('gr');
                    let page = pageCtrl['_hd']();
                    State.set({
                        'gm': page,
                    });
                }
                State.set({
                    'gl': elements,
                    'go': {},
                });
                stage_selection_1['ge']();
                State.fire('gl');
                history_1['gd'](history_1[e['gd'] == 'ge'
                    ? 'gq'
                    : 'gp']);
            });
        };
        /**
         * 切换示例
         * @param e 切换示例事件对象
         */
        let changeExample = (e) => {
            let xLines = State.get('gg');
            let yLines = State.get('gh');
            xLines.length = 0;
            yLines.length = 0;
            let stageNode = node('_rd_stage');
            if (stageNode) {
                //滚动到设计区域的左上角
                stageNode.scrollLeft = 0;
                stageNode.scrollTop = 0;
            }
            let { page, groups, elements, unit } = e['gd'];
            State.set({
                'gf': unit || const_1['gR'],
            });
            let pageCtrl = State.get('gr');
            let newPage = pageCtrl['_hd']();
            mix(newPage, page); //更新设计区属性
            let { 'gd': lElements, 'gf': delayUpdateProps, 'gg': idMap, } = index_1['ge'](elements, newPage, 1);
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
                'gm': newPage,
                'gl': lElements || [],
                'go': newGroups,
            });
            stage_selection_1['ge'](); //取消选择元素
            stage_clipboard_1['_go']();
            State.fire('gl');
            if (delayUpdateProps) {
                //更新所有元素的动态计算属性
                for (let [ctrl, ps] of delayUpdateProps) {
                    ctrl['_he'](ps);
                }
            }
            //保存历史记录
            history_1['gd'](e['ge'], e['gf']);
        };
        /**
         * 保存内容
         * @param e 保存内容事件对象
         */
        let saveContent = (e) => {
            let url = config('saveContentUrl');
            if (url && !e['gd']) {
                if (!this['_hN']) {
                    index_4.show('正在保存...');
                    this['_hN'] = 1;
                    let { params } = parseUrl(location.href);
                    try {
                        if (!params.id && this['_hO']) {
                            let copied = { ...params };
                            copied.id = this['_hO'];
                            params = copied;
                        }
                        let s = new service_1();
                        s.save({
                            name: '_hP',
                            // '@:{body}': `stage=${ToJSON()}`,
                            '_hQ': JSON.stringify({ templateJSON: tojson_1() }),
                            '_hR': params,
                        }, (ex, bag) => {
                            if (ex) {
                                index_4.hide();
                                this.alert(ex.message, null, '保存失败');
                            }
                            else {
                                index_4.show('保存成功～', 2e3);
                                this['_hO'] = bag.get('data.id', '');
                            }
                            delete this['_hN'];
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
                        delete this['_hN'];
                    }
                }
            }
            else if (const_1['go']) {
                this.mxDialog("50/content", {
                    width: Math.max(1000, screen.width - 200),
                });
            }
        };
        /**
         * 监听键盘按下抬起
         * @param e 按键事件
         */
        let watchKeypress = (e) => {
            if (e['gd'] ||
                !e['ge'] ||
                e['gf'])
                return;
            let { 'gg': code, 'gh': shiftKey, 'gi': ctrlKey, 'gj': altKey, } = e;
            if (code == keyboard_1['gn'] && shiftKey && !ctrlKey) {
                //shift+z，打开或关闭所有面板
                let allOpen = index_6['_hS']();
                if (allOpen) {
                    index_6['_hT']();
                }
                else {
                    index_6['_hU']();
                }
            }
            else if (!ctrlKey && has(CodesMap, code)) {
                //单纯按下数字1-5
                TogglePanel(CodesMap[code], shiftKey);
            }
            else if (shiftKey && code == keyboard_1['gm']) {
                // shift+/ 显示快捷键
                if (const_1['gp']) {
                    shortcuts_1['_gM'](this);
                }
            }
            else if (ctrlKey && code == keyboard_1['go']) {
                //如果是ctrl+s或cmd+s，显示保存
                e['gk']();
                State.fire('gp', {
                    'gd': shiftKey,
                });
            }
            else if (ctrlKey && !shiftKey && !altKey && code == keyboard_1['gd']) {
                let axisNode = node('_rd_axis');
                if (axisNode) {
                    let rootClassList = this.root.classList;
                    let axisClassList = axisNode.classList;
                    let hidden = axisClassList.contains('rd-g0');
                    if (hidden) {
                        axisClassList.remove('rd-g0');
                        rootClassList.remove('rd-jk');
                    }
                    else {
                        axisClassList.add('rd-g0');
                        rootClassList.add('rd-jk');
                    }
                }
            }
            else if (!(ctrlKey || altKey || shiftKey)) {
                if (code == keyboard_1['gp']) {
                    //单纯的按c
                    if (stage_generic_1['gh']()) {
                        State.fire('gx');
                    }
                }
                else if (code == keyboard_1['gq']) {
                    if (stage_generic_1['gi']()) {
                        State.fire('gx', {
                            'gd': 'ge',
                        });
                    }
                }
            }
        };
        let changeUnit = (e) => {
            let elements = State.get('gl');
            let toUnit = e['_hV'];
            let page = State.get('gm');
            page.unit = toUnit;
            let pageCtrl = State.get('gr');
            convertUnitOfProps(page, pageCtrl, toUnit, 1);
            convertToUnit(elements, toUnit);
            let selectElements = State.get('gd');
            if (selectElements.length == 1) {
                let single = selectElements[0];
                State.fire('gf', {
                    '_hW': { [single.id]: 1 },
                    '_hX': {
                        [single.type]: 1,
                    },
                    '_ge': {
                        '_hY': 1,
                    },
                });
            }
            State.fire('gl');
        };
        //保存初始状态的历史记录
        //DHistory["@:{history#save.default}"]();
        //监听历史记录事件
        State.on('gi', ApplyState);
        //框架内部繁忙
        State.on('gy', MagixBusyTip);
        //清空
        State.on('gx', clearStageElements);
        //更换模板
        State.on('go', changeExample);
        //保存
        State.on('gp', saveContent);
        //按键
        State.on('gm', watchKeypress);
        //单位转换
        State.on('gz', changeUnit);
        //安装全局数据缓存监控
        stage_generic_1['gj']();
        //流程图监控元素之间的连线插件
        let flowProvider = State.get('gq');
        if (flowProvider) {
            flowProvider['ge']();
        }
        //安装键盘监视
        keyboard_1['gr']();
        this.on('destroy', () => {
            history_1['gU']();
            index_6['_hZ']();
            stage_clipboard_1['_go']();
            stage_selection_1['gd']();
            keyboard_1['gs']();
            if (flowProvider) {
                flowProvider['gf']();
            }
            stage_generic_1['gk']();
            State.off('gi', ApplyState);
            State.off('gy', MagixBusyTip);
            State.off('gx', clearStageElements);
            State.off('go', changeExample);
            State.off('gp', saveContent);
            State.off('gm', watchKeypress);
            State.off('gz', changeUnit);
        });
    },
    /**
     * 获取数据源数据，数据源在项目中多处使用，这里进行统一请求，并放置在State中，供其它view使用
     */
    async '_h2'() {
        return new Promise(resolve => {
            if (config('getFieldUrl')) {
                let s = new service_1();
                s.all('_h0', (err, bag) => {
                    if (err === null || err === void 0 ? void 0 : err.message) {
                        console.log('有错误', err.message);
                        /* 重新登陆 */
                        if (!DEBUG) {
                            window.location.href = `/?from=${encodeURIComponent(location.href)}`;
                        }
                        else {
                            let s = new service_1();
                            this.confirm('登录过期,请重新登录,本地点击确定模拟登录', () => {
                                s.all({
                                    name: '_h1',
                                    '_hQ': JSON.stringify({
                                        password: 'wRhP6Bb6a8Zn',
                                        username: '13998684950',
                                    }),
                                }, (err, bag) => {
                                    if (err) {
                                        console.error(err);
                                        return;
                                    }
                                    try {
                                        window.localStorage.setItem('login-token', JSON.stringify(bag.get('token')));
                                        window.location.reload();
                                    }
                                    catch (error) { }
                                    console.log('登录结果', bag.get('data'), bag.get('token'));
                                });
                            }, console.log, '提示');
                        }
                    }
                    let dataSourceList = bag.get('data', []);
                    let list = [
                        {
                            name: index_5('hE'),
                            id: '',
                        },
                    ].concat(dataSourceList);
                    State.set({
                        'gt': err,
                        'gu': list,
                        'gv': toMap(list, 'id'),
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
        index_6['_hI']();
        let m = mark(this, '_gt');
        await this['_h2']();
        await this.digest();
        if (m()) {
            index_6['_h3']();
            /**
             * 如果地址栏有id且配置了获取内容的url，则从接口读取内容
             * 否则如果配置了模板接口，则从模板列表中随机选择一个
             */
            let templateUrl = config('getTemplateUrl');
            let contentUrl = config('getContentUrl');
            let { params } = parseUrl(location.href);
            console.log('______', params, contentUrl, parent);
            if (params.id && contentUrl) {
                index_4.show('正在读取内容...');
                let s = new service_1();
                s.all({
                    name: '_h4',
                    '_hR': params,
                }, (ex, bag) => {
                    index_4.hide();
                    if (!ex) {
                        let stage = bag.get('data.templateJson');
                        if (stage) {
                            State.fire('go', {
                                'ge': history_1['gP'],
                                'gf': params.id,
                                'gd': stage,
                            });
                        }
                    }
                });
            }
            else if (templateUrl && const_1['gm']) {
                //如果有示例配置,且允许显示随机示例
                index_4.show('正在加载示例...');
                await example_1['_g5']();
                index_4.hide();
            }
            else {
                history_1['gQ']();
            }
        }
    },
    '$doc<dragover,drop>'(e) {
        //发生的dragover与drop均需要阻止默认行为，前者是防止浏览器打开拖进来的元素，后者是防止文件拖动放置在textarea等输入框内
        this['_h5'](e);
    },
}).merge(index_2);

});