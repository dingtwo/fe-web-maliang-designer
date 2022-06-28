import Magix from 'magix';
let { State, node, Vframe, guid, config, toMap } = Magix;
let Panels: Report.StagePanelProps[] = [];
let PanelsMap;
export default {
    /**
     * 检测是否所有面板均已打开　
     */
    '@:{is.all.opened}'() {
        let result = true;
        for (let p of Panels) {
            let info = PanelsMap[p.id];
            if (!info['@:{panel#opened}']) {
                result = false;
                break;
            }
        }
        return result;
    },
    /**
     * 一键关闭所有面板
     */
    '@:{close.all.panels}'() {
        for (let p of Panels) {
            this['@:{close.panel}'](p.id, true);
        }
        State.fire('@:{event#panel.change}');
    },
    /**
     * 一键打开所有面板
     */
    '@:{open.all.panels}'() {
        for (let p of Panels) {
            this['@:{open.panel}'](p.id, true);
        }
        State.fire('@:{event#panel.change}');
    },
    /**
     * 根据面板的初始条件打开相应面板
     */
    '@:{open.panels}'() {
        for (let p of Panels) {
            if (p.show) {
                this['@:{open.panel}'](p.id, true);
            }
        }
        State.fire('@:{event#panel.change}');
    },
    /**
     * 销毁所有面板
     */
    '@:{destroy}'() {
        for (let p of Panels) {
            let info = PanelsMap[p.id];
            delete info['@:{panel#opened}'];
            delete info['@:{node.id}'];
        }
    },
    /**
     * 根据id打开面板
     * @param id 面板id
     * @param prevent 是否阻止事件派发
     */
    '@:{open.panel}'(id: string, prevent: boolean) {
        let info = PanelsMap[id];
        if (!info['@:{panel#opened}']) {
            info['@:{panel#opened}'] = 1;
            if (!info['@:{node.id}']) {
                info['@:{node.id}'] = guid('_rdp_');
                let app = node(config('rootId'));
                app.insertAdjacentHTML('beforeend', `<div id="${info['@:{node.id}']}"></div>`);
                let root = Vframe.byNode(app);
                info.close = () => {
                    this['@:{close.panel}'](info.id);
                };
                root.mount(node(info['@:{node.id}']), '@:./panel', info);
            } else {
                let panelRoot = node(info['@:{node.id}']);
                panelRoot.style.display = 'block';
                let vf = Vframe.byNode(panelRoot);
                vf.invoke('@:{show}');
            }
            if (!prevent) {
                State.fire('@:{event#panel.change}');
            }
        }
    },
    /**
     * 通过id关闭某个面板
     * @param id 面板id
     * @param pevent 是否阻止事件的派发
     */
    '@:{close.panel}'(id, pevent) {
        let info = PanelsMap[id];
        if (info['@:{panel#opened}']) {
            info['@:{panel#opened}'] = 0;
            let n = node(info['@:{node.id}']);
            n.style.display = 'none';
            let vf = Vframe.byNode(n);
            vf.invoke('@:{hide}');
            if (!pevent) {
                State.fire('@:{event#panel.change}');
            }
        }
    },
    /**
     * 展示或关闭面板
     * @param id 面板id
     */
    '@:{toggle.panel}'(id) {
        let info = PanelsMap[id];
        if (info['@:{panel#opened}']) {
            this['@:{close.panel}'](id);
        } else {
            this['@:{open.panel}'](id);
        }
    },
    /**
     * 通过id打开或折叠面板内容区域
     * @param id 面板id
     */
    '@:{toggle.panel.height}'(id) {
        let info = PanelsMap[id];
        if (info['@:{panel#opened}']) {
            let n = node(info['@:{node.id}']);
            let vf = Vframe.byNode(n);
            vf.invoke('@:{toggle.height}');
        }
    },
    /**
     * 获取当前环境所支持的面板，比如迷你模式下部分面板不展示以节省显示区域
     */
    '@:{support.panels}'() {
        if (!Panels.length) {
            let mini = State.get('@:{global#provider.of.use.mini}');
            let root = node(config('rootId'));
            let height = root.clientHeight;
            Panels.push({
                title: '@:{lang#panel.elements}',
                icon: '&#xe7ef;',
                width: 180,
                height: mini ? height - 140 : 290,
                fixedSize: mini,
                left: 25,
                top: 90,
                key: 1,
                show: true,
                resizeY: !mini,
                id: '@:{panel#tree}',
                view: '@:./tree/index'
            });
            //非迷你模式展示概览面板
            if (!mini) {
                Panels.push({
                    title: '@:{lang#panel.outline}',
                    icon: '&#xe99a;',
                    width: 210,
                    height: 124,
                    key: 2,
                    show: true,
                    left: 25,
                    bottom: 30,
                    id: '@:{panel#outline}',
                    view: '@:./outline/index',
                    fixedSize: true
                });
            }
            Panels.push({
                title: '@:{lang#panel.props}',
                icon: '&#xe7a1;',
                width: 242,
                fixedSize: mini,
                cm: 1,
                height: mini ? height - 140 : 140,
                right: 10,
                top: 90,
                key: Panels.length + 1,
                show: true,
                resizeY: !mini,
                id: '@:{panel#props}',
                view: '@:./props/index'
            });
            //有数据源配置才显示数据源面板
            if (config('getFieldUrl')) {
                Panels.push({
                    title: '@:{lang#panel.data}',
                    icon: '&#xe609;',
                    width: 230,
                    cm: 1,
                    height: mini ? height - 140 : 385,
                    fixedSize: mini,
                    show: false,//mini ? false : true,
                    resizeY: !mini,
                    right: 260,
                    top: 90,
                    key: Panels.length + 1,
                    id: '@:{panel#data}',
                    view: '@:./data/index'
                });
            }
            //非迷你模式展示历史记录面板
            if (!mini) {
                Panels.push({
                    title: '@:{lang#panel.history}',
                    icon: '&#xe720;',
                    width: 200,
                    height: 220,
                    fixedSize: true,
                    show: false,
                    right: 260,
                    bottom: 30,
                    key: Panels.length + 1,
                    id: '@:{panel#history}',
                    view: '@:./history/index'
                });
            }
            //以下2个面板如果不需要，可以直接删除或注释相应代码即可
            if (!mini) {
                Panels.push({
                    title: '性能',
                    width: 200,
                    height: 160,
                    icon: '&#xe608;',
                    fixedSize: true,
                    show: false,
                    left: 210,
                    top: 90,
                    key: Panels.length + 1,
                    id: '@:{panel#performance}',
                    view: '@:./perf/index'
                });
            }
            // NOTICE: 给开发者看的
            // Panels.push({
            //     title: '资源',
            //     width: 420,
            //     height: 180,
            //     icon: '&#xe605;',
            //     fixedSize: true,
            //     show: false,
            //     left: mini ? 215 : 245,
            //     bottom: 30,
            //     key: Panels.length + 1,
            //     id: '@:{panel#resource}',
            //     view: '@:./res/index'
            // });
            PanelsMap = toMap(Panels, 'id');
        }
        return Panels;
    }
};
