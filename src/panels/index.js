/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/index",["5c"],(require,exports,module)=>{


let magix_1 = require("5c");
let { State, node, Vframe, guid, config, toMap } = magix_1;
let Panels = [];
let PanelsMap;
module.exports= {
    /**
     * 检测是否所有面板均已打开
     */
    '_nG'() {
        let result = true;
        for (let p of Panels) {
            let info = PanelsMap[p.id];
            if (!info['l2']) {
                result = false;
                break;
            }
        }
        return result;
    },
    /**
     * 一键关闭所有面板
     */
    '_nH'() {
        for (let p of Panels) {
            this['_t2'](p.id, true);
        }
        State.fire('mr');
    },
    /**
     * 一键打开所有面板
     */
    '_nI'() {
        for (let p of Panels) {
            this['_t3'](p.id, true);
        }
        State.fire('mr');
    },
    /**
     * 根据面板的初始条件打开相应面板
     */
    '_nQ'() {
        for (let p of Panels) {
            if (p.show) {
                this['_t3'](p.id, true);
            }
        }
        State.fire('mr');
    },
    /**
     * 销毁所有面板
     */
    '_nN'() {
        for (let p of Panels) {
            let info = PanelsMap[p.id];
            delete info['l2'];
            delete info['_t4'];
        }
    },
    /**
     * 根据id打开面板
     * @param id 面板id
     * @param prevent 是否阻止事件派发
     */
    '_t3'(id, prevent) {
        let info = PanelsMap[id];
        if (!info['l2']) {
            info['l2'] = 1;
            if (!info['_t4']) {
                info['_t4'] = guid('_rdp_');
                let app = node(config('rootId'));
                app.insertAdjacentHTML('beforeend', `<div id="${info['_t4']}"></div>`);
                let root = Vframe.byNode(app);
                info.close = () => {
                    this['_t2'](info.id);
                };
                root.mount(node(info['_t4']), "66/7h", info);
            }
            else {
                let panelRoot = node(info['_t4']);
                panelRoot.style.display = 'block';
                let vf = Vframe.byNode(panelRoot);
                vf.invoke('_mA');
            }
            if (!prevent) {
                State.fire('mr');
            }
        }
    },
    /**
     * 通过id关闭某个面板
     * @param id 面板id
     * @param pevent 是否阻止事件的派发
     */
    '_t2'(id, pevent) {
        let info = PanelsMap[id];
        if (info['l2']) {
            info['l2'] = 0;
            let n = node(info['_t4']);
            n.style.display = 'none';
            let vf = Vframe.byNode(n);
            vf.invoke('_mB');
            if (!pevent) {
                State.fire('mr');
            }
        }
    },
    /**
     * 展示或关闭面板
     * @param id 面板id
     */
    '_ny'(id) {
        let info = PanelsMap[id];
        if (info['l2']) {
            this['_t2'](id);
        }
        else {
            this['_t3'](id);
        }
    },
    /**
     * 通过id打开或折叠面板内容区域
     * @param id 面板id
     */
    '_nx'(id) {
        let info = PanelsMap[id];
        if (info['l2']) {
            let n = node(info['_t4']);
            let vf = Vframe.byNode(n);
            vf.invoke('_t5');
        }
    },
    /**
     * 获取当前环境所支持的面板，比如迷你模式下部分面板不展示以节省显示区域
     */
    '_nw'() {
        if (!Panels.length) {
            let mini = State.get('l9');
            let root = node(config('rootId'));
            let height = root.clientHeight;
            Panels.push({
                title: 'tx',
                icon: '&#xe7ef;',
                width: 180,
                height: mini ? height - 140 : 290,
                fixedSize: mini,
                left: 25,
                top: 90,
                key: 1,
                show: true,
                resizeY: !mini,
                id: 'l3',
                view: "66/tree/index"
            });
            //非迷你模式展示概览面板
            if (!mini) {
                Panels.push({
                    title: 'tC',
                    icon: '&#xe99a;',
                    width: 210,
                    height: 124,
                    key: 2,
                    show: true,
                    left: 25,
                    bottom: 30,
                    id: 'l4',
                    view: "66/7i/index",
                    fixedSize: true
                });
            }
            Panels.push({
                title: 'tD',
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
                id: 'l5',
                view: "66/6c/index"
            });
            //有数据源配置才显示数据源面板
            if (config('getFieldUrl')) {
                Panels.push({
                    title: 'tv',
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
                    id: 'l6',
                    view: "66/data/index"
                });
            }
            //非迷你模式展示历史记录面板
            if (!mini) {
                Panels.push({
                    title: 'tA',
                    icon: '&#xe720;',
                    width: 200,
                    height: 220,
                    fixedSize: true,
                    show: false,
                    right: 260,
                    bottom: 30,
                    key: Panels.length + 1,
                    id: 'l7',
                    view: "66/5o/index"
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
                    id: 'l8',
                    view: "66/perf/index"
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
                id: 'l9',
                view: "66/res/index"
            });
            PanelsMap = toMap(Panels, 'id');
        }
        return Panels;
    }
};

});