/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/index",["magix5"],(require,exports,module)=>{


let magix_1 = require("magix5");
let { State, node, Vframe, guid, config, toMap } = magix_1;
let Panels = [];
let PanelsMap;
module.exports= {
    /**
     * 检测是否所有面板均已打开
     */
    '@:{is.all.opened~rs}'() {
        let result = true;
        for (let p of Panels) {
            let info = PanelsMap[p.id];
            if (!info['@:{panel#opened~rs}']) {
                result = false;
                break;
            }
        }
        return result;
    },
    /**
     * 一键关闭所有面板
     */
    '@:{close.all.panels~rs}'() {
        for (let p of Panels) {
            this['@:{close.panel~rs}'](p.id, true);
        }
        State.fire('@:{event#panel.change~rs}');
    },
    /**
     * 一键打开所有面板
     */
    '@:{open.all.panels~rs}'() {
        for (let p of Panels) {
            this['@:{open.panel~rs}'](p.id, true);
        }
        State.fire('@:{event#panel.change~rs}');
    },
    /**
     * 根据面板的初始条件打开相应面板
     */
    '@:{open.panels~rs}'() {
        for (let p of Panels) {
            if (p.show) {
                this['@:{open.panel~rs}'](p.id, true);
            }
        }
        State.fire('@:{event#panel.change~rs}');
    },
    /**
     * 销毁所有面板
     */
    '@:{destroy~rs}'() {
        for (let p of Panels) {
            let info = PanelsMap[p.id];
            delete info['@:{panel#opened~rs}'];
            delete info['@:{node.id~rs}'];
        }
    },
    /**
     * 根据id打开面板
     * @param id 面板id
     * @param prevent 是否阻止事件派发
     */
    '@:{open.panel~rs}'(id, prevent) {
        let info = PanelsMap[id];
        if (!info['@:{panel#opened~rs}']) {
            info['@:{panel#opened~rs}'] = 1;
            if (!info['@:{node.id~rs}']) {
                info['@:{node.id~rs}'] = guid('_rdp_');
                let app = node(config('rootId'));
                app.insertAdjacentHTML('beforeend', `<div id="${info['@:{node.id~rs}']}"></div>`);
                let root = Vframe.byNode(app);
                info.close = () => {
                    this['@:{close.panel~rs}'](info.id);
                };
                root.mount(node(info['@:{node.id~rs}']), "panels/panel", info);
            }
            else {
                let panelRoot = node(info['@:{node.id~rs}']);
                panelRoot.style.display = 'block';
                let vf = Vframe.byNode(panelRoot);
                vf.invoke('@:{show~rs}');
            }
            if (!prevent) {
                State.fire('@:{event#panel.change~rs}');
            }
        }
    },
    /**
     * 通过id关闭某个面板
     * @param id 面板id
     * @param pevent 是否阻止事件的派发
     */
    '@:{close.panel~rs}'(id, pevent) {
        let info = PanelsMap[id];
        if (info['@:{panel#opened~rs}']) {
            info['@:{panel#opened~rs}'] = 0;
            let n = node(info['@:{node.id~rs}']);
            n.style.display = 'none';
            let vf = Vframe.byNode(n);
            vf.invoke('@:{hide~rs}');
            if (!pevent) {
                State.fire('@:{event#panel.change~rs}');
            }
        }
    },
    /**
     * 展示或关闭面板
     * @param id 面板id
     */
    '@:{toggle.panel~rs}'(id) {
        let info = PanelsMap[id];
        if (info['@:{panel#opened~rs}']) {
            this['@:{close.panel~rs}'](id);
        }
        else {
            this['@:{open.panel~rs}'](id);
        }
    },
    /**
     * 通过id打开或折叠面板内容区域
     * @param id 面板id
     */
    '@:{toggle.panel.height~rs}'(id) {
        let info = PanelsMap[id];
        if (info['@:{panel#opened~rs}']) {
            let n = node(info['@:{node.id~rs}']);
            let vf = Vframe.byNode(n);
            vf.invoke('@:{toggle.height~rs}');
        }
    },
    /**
     * 获取当前环境所支持的面板，比如迷你模式下部分面板不展示以节省显示区域
     */
    '@:{support.panels~rs}'() {
        if (!Panels.length) {
            let mini = State.get('@:{global#provider.of.use.mini~rs}');
            let root = node(config('rootId'));
            let height = root.clientHeight;
            Panels.push({
                title: '@:{lang#panel.elements~rs}',
                icon: '&#xe7ef;',
                width: 180,
                height: mini ? height - 140 : 290,
                fixedSize: mini,
                left: 25,
                top: 90,
                key: 1,
                show: true,
                resizeY: !mini,
                id: '@:{panel#tree~rs}',
                view: "panels/tree/index"
            });
            //非迷你模式展示概览面板
            if (!mini) {
                Panels.push({
                    title: '@:{lang#panel.outline~rs}',
                    icon: '&#xe99a;',
                    width: 210,
                    height: 124,
                    key: 2,
                    show: true,
                    left: 25,
                    bottom: 30,
                    id: '@:{panel#outline~rs}',
                    view: "panels/outline/index",
                    fixedSize: true
                });
            }
            Panels.push({
                title: '@:{lang#panel.props~rs}',
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
                id: '@:{panel#props~rs}',
                view: "panels/props/index"
            });
            //有数据源配置才显示数据源面板
            if (config('getFieldUrl')) {
                Panels.push({
                    title: '@:{lang#panel.data~rs}',
                    icon: '&#xe609;',
                    width: 200,
                    cm: 1,
                    height: mini ? height - 140 : 385,
                    fixedSize: mini,
                    show: false,
                    resizeY: !mini,
                    right: 260,
                    top: 90,
                    key: Panels.length + 1,
                    id: '@:{panel#data~rs}',
                    view: "panels/data/index"
                });
            }
            //非迷你模式展示历史记录面板
            if (!mini) {
                Panels.push({
                    title: '@:{lang#panel.history~rs}',
                    icon: '&#xe720;',
                    width: 200,
                    height: 220,
                    fixedSize: true,
                    show: false,
                    right: 260,
                    bottom: 30,
                    key: Panels.length + 1,
                    id: '@:{panel#history~rs}',
                    view: "panels/history/index"
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
                    id: '@:{panel#performance~rs}',
                    view: "panels/perf/index"
                });
            }
            Panels.push({
                title: '资源',
                width: 420,
                height: 180,
                icon: '&#xe605;',
                fixedSize: true,
                show: false,
                left: mini ? 215 : 245,
                bottom: 30,
                key: Panels.length + 1,
                id: '@:{panel#resource~rs}',
                view: "panels/res/index"
            });
            PanelsMap = toMap(Panels, 'id');
        }
        return Panels;
    }
};

});