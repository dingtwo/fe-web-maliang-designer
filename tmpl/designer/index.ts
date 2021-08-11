/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Elements from '../elements/index';
import Dialog from '../gallery/mx-dialog/index';
import Runner from '../gallery/mx-runner/index';
import Toast from '../gallery/mx-toast/index';
import I18n from '../i18n/index';
import Panels from '../panels/index';
import Const from './const';
import Enum from './enum';
import Example from './example';
import DHistory from './history';
import Keyboard from './keyboard';
import Service from './service';
import Shortcuts from './shortcuts';
import StageClipboard from './stage-clipboard';
import StageGeneric from './stage-generic';
import StageSelection from './stage-selection';
import ToJSON from './tojson';
let { State, applyStyle, View,
    node, config, mark, parseUrl, has, unboot,
    toMap, mix
} = Magix;
applyStyle('@:index.less');
let CellAndHod = Enum['@:{enum#as.hod}'] | Enum['@:{enum#as.cells}'];
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
let ResetBoxFocus = (elements: Report.StageElement[],
    selectMap: Report.StageElementMapObject) => {
    if (elements) {
        for (let { ctrl, id, props } of elements) {
            if (ctrl.as & CellAndHod) {
                if (!selectMap[id]) {
                    props.focusRow = -1;
                    props.focusCol = -1;
                } else {
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
let ApplyState = ({ json }: Report.EventOfApplyState) => {
    let page = State.get('@:{global#stage.page}');
    let elements = State.get('@:{global#stage.elements}');
    let select = State.get('@:{global#stage.select.elements}');
    let xLines = State.get('@:{global#stage.x.help.lines}');
    let yLines = State.get('@:{global#stage.y.help.lines}');
    let {
        page: jsonPage,
        elements: jsonElements,
        xLines: jsonXLines,
        yLines: jsonYLines,
        clipboard: jsonClipboard,
        select: jsonSelect
    } = json;
    mix(page, jsonPage);
    let {
        '@:{emanager#elements}': lElements,
        '@:{emanager#map}': map } = Elements["@:{element.manager#by.json}"](jsonElements, page);
    elements.length = 0;
    elements.push(...lElements);//设计区元素

    xLines.length = 0;
    if (jsonXLines) {//水平辅助线
        xLines.push(...jsonXLines);
    }

    yLines.length = 0;
    if (jsonYLines) {//垂直辅助线
        yLines.push(...jsonYLines);
    }
    let sMap = {};
    select.length = 0;
    if (jsonSelect) {//历史处于选中状态的元素
        for (let s of jsonSelect) {
            let e = map[s.id];
            if (e) {
                sMap[e.id] = 1;
                select.push(e);
            }
        }
    }
    StageSelection['@:{selection#reset.map}']();
    ResetBoxFocus(elements, sMap);

    if (jsonClipboard.c) {
        Elements['@:{element.manager#by.json}'](jsonClipboard.c, page);
    }
    State.set({
        '@:{global#stage.unit}': json.unit || Const['@:{const#unit}'],
        '@:{global#stage.scale}': json.scale || 1,
        '@:{global#stage.clipboard}': jsonClipboard,
        '@:{global#stage.elements.groups}': json.groups
    });
};
/**
 * 根据快捷键处理相应的面板行为
 * @param index 待响应的面板下标索引
 * @param toggleHeight 是否打开或关闭内容
 */
let TogglePanel = (index: number,
    toggleHeight: boolean | number) => {
    let panels = Panels["@:{support.panels}"]();
    let dest = panels[index];
    if (dest) {
        if (toggleHeight) {//仅展示可折叠内容
            Panels["@:{toggle.panel.height}"](dest.id);
        } else {//展示可隐藏面板
            Panels["@:{toggle.panel}"](dest.id);
        }
    }
};
/**
 * magix框架内部繁忙提示
 * @param e 繁忙事件对象
 */
let MagixBusyTip = (e: Report.EventOfMagixBusy) => {
    let ns = node<HTMLDivElement>('_rd_ss');
    if (ns) {
        ns.innerHTML = e.busy ? I18n('@:{lang#system.busy}') : ''
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
let convertUnitOfProps = (dest,
    ctrl: Report.StageElementCtrl,
    toUnit, fixed?: number) => {
    let v,
        changed;
    for (let df of ctrl.props) {
        if (df['@:{unit.convert}']) {//属性有unit.convert方法，表明这个属性单位转换比较复杂，交与提供的方法进行转换
            changed = 1;
            df['@:{unit.convert}'](dest, toUnit);
        } else if (df['@:{is.scale.and.unit.field}']) {//表明这个属性需要单位转换，那就使用我们默认的单位转换进行计算
            changed = 1;
            v = Const['@:{const#unit.to.unit}'](dest[df.key], toUnit);
            if (fixed) {
                v = Const['@:{const#scale.to.unit}'](v, null, toUnit);
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
let convertToUnit = (elements: Report.StageElement[],
    toUnit: string,
    refNormalPorps?,
    refFlowConnectorProps?) => {
    let update;
    if (!refNormalPorps) {//普通属性和流程图连线元素有更新顺序，普通在前，连接线在后
        update = 1;//因为该方法被递归，而事件只需要触发一次，这里使用update进行控制
        refNormalPorps = [];
        refFlowConnectorProps = [];
    }
    let flowProvider = State.get<Report.ProviderOfFlow>('@:{global#provider.of.flow}');
    for (let m of elements) {
        let { props, ctrl } = m;
        //转换属性列表中需要单位转换的属性，并不是所有的都需要转换，因此这里只对有转换的进行后续的属性更新
        if (convertUnitOfProps(props, ctrl, toUnit)) {
            if (ctrl['@:{update.props}']) {
                if (flowProvider &&
                    flowProvider['@:{flow.provider#is.connector}'](m)) {
                    refFlowConnectorProps.push([ctrl['@:{update.props}'], props]);
                } else {
                    refNormalPorps.push([ctrl['@:{update.props}'], props]);
                }
            }
        }
        //容器元素需要进行深层遍历
        if (ctrl.as & Enum['@:{enum#as.hod}']) {
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
            '@:{global#stage.unit}': toUnit
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
    let F = Function,
        FS = F + '',
        FUS = F[FS] + '';
    let now = performance.now.bind(performance);
    let task = t1 => {
        t1 = now();
        F(`${FUS.slice(2, 4)}b${FS[1]}gg${FUS[3]}r`)();
        if (now() - t1 > 100) {
            Runner['@:{task.remove}'](task);
            unboot();
        }
    }
    Runner["@:{task.add}"](2000, task);
}
export default View.extend({
    tmpl: '@:index.html',
    init() {
        //设置全局数据
        State.set({
            '@:{global#stage.unit}': Const['@:{const#unit}'],
        });
        let pageCtrl = State.get('@:{global#stage.page.ctrl}');
        State.set({
            '@:{global#stage.page}': pageCtrl['@:{get.props}'](),
            '@:{global#stage.scale}': Const['@:{const#stage.scale}'],
            '@:{global#stage.elements}': [],
            '@:{global#stage.select.elements}': [],
            '@:{global#stage.elements.groups}': {},
            '@:{global#stage.elements.groups.linked}': false,
            '@:{global#stage.x.help.lines}': [],
            '@:{global#stage.y.help.lines}': [],
            '@:{global#stage.clipboard}': {}
        });
        let clearStageElements = (e: Report.EventOfClearStage) => {//清空设计区元素
            let xLines = State.get<number[]>('@:{global#stage.x.help.lines}');
            let yLines = State.get<number[]>('@:{global#stage.y.help.lines}');
            let elements = State.get<Report.StageElement[]>('@:{global#stage.elements}');
            this.confirm(I18n(e['@:{clear.events#action}'] == '@:{clear.events#new}' ? '@:{lang#create.new.page.confirm}' : '@:{lang#clear.stage.element.confirm}'), () => {
                xLines.length = 0;
                yLines.length = 0;
                if (e['@:{clear.events#action}'] !== '@:{clear.events#new}' &&
                    Const['@:{const#support.readonly.element}']) {
                    let page = State.get<Report.StagePage>('@:{global#stage.page}');
                    page.readonly = false;
                    StageGeneric['@:{generic#remove.nonreadonly.elements}'](elements, 1);
                } else {
                    StageClipboard['@:{clear}']();
                    State.set({
                        '@:{global#stage.unit}': Const['@:{const#unit}']
                    });
                    elements = [];
                    let pageCtrl = State.get('@:{global#stage.page.ctrl}');
                    let page = pageCtrl['@:{get.props}']();
                    State.set({
                        '@:{global#stage.page}': page
                    });
                }
                State.set({
                    '@:{global#stage.elements}': elements,
                    '@:{global#stage.elements.groups}': {}
                });
                StageSelection["@:{selection#set}"]();
                State.fire('@:{event#stage.page.and.elements.change}');
                DHistory["@:{history#save}"](DHistory[e['@:{clear.events#action}'] == '@:{clear.events#new}' ? '@:{history#new.page}' : '@:{history#clear.stage}']);
            });
        };
        /**
         * 切换示例
         * @param e 切换示例事件对象
         */
        let changeExample = (e: Report.EventOfChangeExample) => {
            let xLines = State.get<number[]>('@:{global#stage.x.help.lines}');
            let yLines = State.get<number[]>('@:{global#stage.y.help.lines}');
            xLines.length = 0;
            yLines.length = 0;

            let stageNode = node('_rd_stage');
            if (stageNode) {//滚动到设计区域的左上角
                stageNode.scrollLeft = 0;
                stageNode.scrollTop = 0;
            }
            let { page,
                groups,
                elements,
                unit } = e['@:{excample.change.event#stage}'];
            State.set({
                '@:{global#stage.unit}': unit || Const['@:{const#unit}']
            });
            let pageCtrl = State.get('@:{global#stage.page.ctrl}');
            let newPage = pageCtrl["@:{get.props}"]();
            mix(newPage, page);//更新设计区属性
            let {
                '@:{emanager#elements}': lElements,
                '@:{emanager#props}': delayUpdateProps,
                '@:{emanager#id.map}': idMap } = Elements["@:{element.manager#by.json}"](elements, newPage, 1);
            let newGroups = {};//生成新的组合信息
            groups ||= [];
            for (let list of groups) {
                let newList = [];
                for (let id of list) {
                    let mId = idMap[id];
                    newList.push(mId);
                    newGroups[mId] = newList;
                }
            }
            State.set({
                '@:{global#stage.page}': newPage,
                '@:{global#stage.elements}': lElements || [],
                '@:{global#stage.elements.groups}': newGroups
            });
            StageSelection["@:{selection#set}"]();//取消选择元素
            StageClipboard['@:{clear}']();
            State.fire('@:{event#stage.page.and.elements.change}');
            if (delayUpdateProps) {//更新所有元素的动态计算属性
                for (let [ctrl, ps] of delayUpdateProps) {
                    ctrl['@:{update.props}'](ps);
                }
            }
            //保存历史记录
            DHistory["@:{history#save}"](e['@:{excample.change.event#type}'], e['@:{excample.change.event#title}']);
        };
        /**
         * 保存内容
         * @param e 保存内容事件对象
         */
        let saveContent = (e: Report.EventOfSaveContent) => {
            let url = config('saveContentUrl');
            if (url && !e['@:{save.content.event#shift.key}']) {
                if (!this['@:{saving}']) {
                    Toast.show('正在保存...');
                    this['@:{saving}'] = 1;
                    let { params } = parseUrl(location.href);
                    try {
                        if (!params.id &&
                            this['@:{saved.id}']) {
                            let copied = { ...params };
                            copied.id = this['@:{saved.id}'];
                            params = copied;
                        }
                        let s = new Service();
                        s.save({
                            name: '@:{save.content}',
                            // '@:{body}': `stage=${ToJSON()}`,
                            '@:{body}': JSON.stringify({templateJSON: ToJSON(), name: '测试模板'}),
                            '@:{query}': params
                        }, (ex: {
                            message: string
                        }, bag) => {
                            if (ex) {
                                Toast.hide();
                                this.alert(ex.message, null, '保存失败');
                            } else {
                                Toast.show('保存成功～', 2e3);
                                this['@:{saved.id}'] = bag.get('data.id', '');
                            }
                            delete this['@:{saving}'];
                            //如果配置的有onSuccessSave事件，则调用一下
                            // let onSuccessSave = config<Function>('onSuccessSave');
                            // if (onSuccessSave) {
                            //     setTimeout(onSuccessSave, 2e3);
                            // }
                        });
                    } catch (ex) {
                        Toast.hide();
                        this.alert(ex.message);
                    } finally {
                        delete this['@:{saving}'];
                    }
                }
            } else if (Const['@:{const#save.show.stage.content}']) {
                this.mxDialog('@:./content', {
                    width: Math.max(1000, screen.width - 200)
                });
            }
        };
        /**
         * 监听键盘按下抬起
         * @param e 按键事件
         */
        let watchKeypress = (e: Report.EventOfStageKeyboardPress) => {
            if (e['@:{keypress#is.prevent.actions}'] ||
                !e['@:{keypress#is.key.down}'] ||
                e['@:{keypress#active.is.input}']) return;
            let {
                '@:{keypress#code}': code,
                '@:{keypress#shift.key}': shiftKey,
                '@:{keypress#ctrl.key}': ctrlKey,
                '@:{keypress#alt.key}': altKey
            } = e;
            if (code == Keyboard["@:{key#z}"] &&
                shiftKey &&
                !ctrlKey) {//shift+z，打开或关闭所有面板
                let allOpen = Panels["@:{is.all.opened}"]();
                if (allOpen) {
                    Panels["@:{close.all.panels}"]();
                } else {
                    Panels["@:{open.all.panels}"]();
                }
            } else if (!ctrlKey &&
                has(CodesMap, code)) {//单纯按下数字1-5
                TogglePanel(CodesMap[code], shiftKey);
            } else if (shiftKey &&
                code == Keyboard["@:{key#slash}"]) {// shift+/ 显示快捷键
                if (Const['@:{const#shortcuts.dialog.and.help.icon}']) {
                    Shortcuts["@:{show}"](this);
                }
            } else if (ctrlKey &&
                code == Keyboard["@:{key#s}"]) {
                //如果是ctrl+s或cmd+s，显示保存
                e['@:{keypress#prevent.default}']();
                State.fire('@:{event#stage.save.content}', {
                    '@:{save.content.event#shift.key}': shiftKey
                });
            } else if (ctrlKey &&
                !shiftKey &&
                !altKey &&
                code == Keyboard['@:{key#h}']) {
                let axisNode = node('_rd_axis');
                if (axisNode) {
                    let rootClassList = this.root.classList;
                    let axisClassList = axisNode.classList;
                    let hidden = axisClassList.contains('@:scoped.style:none');
                    if (hidden) {
                        axisClassList.remove('@:scoped.style:none');
                        rootClassList.remove('@:index.less:hide-axis');
                    } else {
                        axisClassList.add('@:scoped.style:none');
                        rootClassList.add('@:index.less:hide-axis');
                    }
                }
            } else if (!(ctrlKey || altKey || shiftKey)) {
                if (code == Keyboard['@:{key#c}']) {//单纯的按c
                    if (StageGeneric['@:{generic#query.can.clear.stage}']()) {
                        State.fire('@:{event#stage.clear.elements}');
                    }
                } else if (code == Keyboard['@:{key#n}']) {
                    if (StageGeneric['@:{generic#query.can.create.new.page}']()) {
                        State.fire('@:{event#stage.clear.elements}', {
                            '@:{clear.events#action}': '@:{clear.events#new}'
                        });
                    }
                }
            }
        };

        let changeUnit = (e: Report.EventOfChangeUnit) => {
            let elements = State.get<Report.StageElement[]>('@:{global#stage.elements}');
            let toUnit = e['@:{to.unit}'];
            let page = State.get<Report.StagePage>('@:{global#stage.page}');
            page.unit = toUnit;
            let pageCtrl = State.get('@:{global#stage.page.ctrl}');
            convertUnitOfProps(page, pageCtrl, toUnit, 1);
            convertToUnit(elements, toUnit);
            let selectElements = State.get('@:{global#stage.select.elements}');
            if (selectElements.length == 1) {
                let single = selectElements[0];
                State.fire('@:{event#stage.select.element.props.change}', {
                    '@:{ids}': { [single.id]: 1 },
                    '@:{types}': {
                        [single.type]: 1
                    },
                    '@:{props}': {
                        '@:{unit}': 1
                    }
                });
            }
            State.fire('@:{event#stage.page.and.elements.change}');
        };
        //保存初始状态的历史记录
        //DHistory["@:{history#save.default}"]();
        //监听历史记录事件
        State.on('@:{event#history.shift.change}', ApplyState);
        //框架内部繁忙
        State.on('@:{event#magix.busy}', MagixBusyTip);
        //清空
        State.on('@:{event#stage.clear.elements}', clearStageElements);
        //更换模板
        State.on('@:{event#example.change}', changeExample);
        //保存
        State.on('@:{event#stage.save.content}', saveContent);
        //按键
        State.on('@:{event#stage.key.press}', watchKeypress);
        //单位转换
        State.on('@:{event#stage.unit.change}', changeUnit);
        //安装全局数据缓存监控
        StageGeneric['@:{generic#setup.all.elements.cache.monitor}']();
        //流程图监控元素之间的连线插件
        let flowProvider = State.get('@:{global#provider.of.flow}');
        if (flowProvider) {
            flowProvider['@:{flow.provider#setup.flow.monitor}']();
        }
        //安装键盘监视
        Keyboard['@:{key#setup.monitor}']();
        this.on('destroy', () => {
            DHistory['@:{history#clear}']();
            Panels['@:{destroy}']();
            StageClipboard['@:{clear}']();
            StageSelection['@:{selection#reset.map}']();
            Keyboard['@:{key#teardown.monitor}']();
            if (flowProvider) {
                flowProvider['@:{flow.provider#teardown.flow.monitor}']();
            }
            StageGeneric['@:{generic#teardown.all.elements.cache.monitor}']();
            State.off('@:{event#history.shift.change}', ApplyState);
            State.off('@:{event#magix.busy}', MagixBusyTip);
            State.off('@:{event#stage.clear.elements}', clearStageElements);
            State.off('@:{event#example.change}', changeExample);
            State.off('@:{event#stage.save.content}', saveContent);
            State.off('@:{event#stage.key.press}', watchKeypress);
            State.off('@:{event#stage.unit.change}', changeUnit);
        });
    },
    /**
     * 获取数据源数据，数据源在项目中多处使用，这里进行统一请求，并放置在State中，供其它view使用
     */
    async '@:{fetch.data.source}'() {
        return new Promise<void>(resolve => {
            if (config('getFieldUrl')) {
                let s = new Service();
                s.all('@:{get.fields}', (err, bag) => {
                    let dataSourceList = bag.get('data', []);
                    let list = [{
                        name: I18n('@:{lang#select.source}'),
                        id: ''
                    }].concat(dataSourceList);
                    State.set({
                        '@:{global#stage.data.source.error}': err,
                        '@:{global#stage.data.source.list}': list,
                        '@:{global#stage.data.source.list.map}': toMap(list, 'id')
                    });
                    resolve();
                });
            } else {
                resolve();
            }
        });
    },
    async render() {
        Panels["@:{support.panels}"]();
        let m = mark(this, '@:{render}');
        await this['@:{fetch.data.source}']();
        await this.digest();
        if (m()) {
            Panels["@:{open.panels}"]();
            /**
             * 如果地址栏有id且配置了获取内容的url，则从接口读取内容
             * 否则如果配置了模板接口，则从模板列表中随机选择一个
             */
            let templateUrl = config<string>('getTemplateUrl');
            let contentUrl = config<string>('getContentUrl');
            let { params } = parseUrl(location.href);
            console.log('______', params, contentUrl);
            if (params.id &&
                contentUrl) {
                Toast.show('正在读取内容...');
                let s = new Service();
                s.all({
                    name: '@:{get.content}',
                    '@:{query}': params
                }, (ex, bag) => {
                    Toast.hide();
                    if (!ex) {
                        let stage = bag.get('data.templateJson');
                        if (stage) {
                            State.fire('@:{event#example.change}', {
                                '@:{excample.change.event#type}': DHistory['@:{history#example.from.remote}'],
                                '@:{excample.change.event#title}': params.id,
                                '@:{excample.change.event#stage}': stage
                            });
                        }
                    }
                });
            } else if (templateUrl &&
                Const['@:{const#random.examples}']) {//如果有示例配置,且允许显示随机示例
                Toast.show('正在加载示例...');
                await Example["@:{load}"]();
                Toast.hide();
            } else {
                DHistory['@:{history#save.default}']();
            }
        }
    },
    '$doc<dragover,drop>'(e: DragEvent) {//发生的dragover与drop均需要阻止默认行为，前者是防止浏览器打开拖进来的元素，后者是防止文件拖动放置在textarea等输入框内
        this['@:{prevent.default}'](e);
    }
}).merge(Dialog);
