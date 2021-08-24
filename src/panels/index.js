/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/index",["51"],(require,exports,module)=>{


let magix_1 = require("51");
let { State, node, Vframe, guid, config, toMap } = magix_1;
let Panels = [];
let PanelsMap;
module.exports= {
    /**
     * 检测是否所有面板均已打开
     */
    '_hS'() {
        let result = true;
        for (let p of Panels) {
            let info = PanelsMap[p.id];
            if (!info['gd']) {
                result = false;
                break;
            }
        }
        return result;
    },
    /**
     * 一键关闭所有面板
     */
    '_hT'() {
        for (let p of Panels) {
            this['_og'](p.id, true);
        }
        State.fire('gD');
    },
    /**
     * 一键打开所有面板
     */
    '_hU'() {
        for (let p of Panels) {
            this['_oh'](p.id, true);
        }
        State.fire('gD');
    },
    /**
     * 根据面板的初始条件打开相应面板
     */
    '_h3'() {
        for (let p of Panels) {
            if (p.show) {
                this['_oh'](p.id, true);
            }
        }
        State.fire('gD');
    },
    /**
     * 销毁所有面板
     */
    '_hZ'() {
        for (let p of Panels) {
            let info = PanelsMap[p.id];
            delete info['gd'];
            delete info['_oi'];
        }
    },
    /**
     * 根据id打开面板
     * @param id 面板id
     * @param prevent 是否阻止事件派发
     */
    '_oh'(id, prevent) {
        let info = PanelsMap[id];
        if (!info['gd']) {
            info['gd'] = 1;
            if (!info['_oi']) {
                info['_oi'] = guid('_rdp_');
                let app = node(config('rootId'));
                app.insertAdjacentHTML('beforeend', `<div id="${info['_oi']}"></div>`);
                let root = Vframe.byNode(app);
                info.close = () => {
                    this['_og'](info.id);
                };
                root.mount(node(info['_oi']), "5r/76", info);
            }
            else {
                let panelRoot = node(info['_oi']);
                panelRoot.style.display = 'block';
                let vf = Vframe.byNode(panelRoot);
                vf.invoke('_gM');
            }
            if (!prevent) {
                State.fire('gD');
            }
        }
    },
    /**
     * 通过id关闭某个面板
     * @param id 面板id
     * @param pevent 是否阻止事件的派发
     */
    '_og'(id, pevent) {
        let info = PanelsMap[id];
        if (info['gd']) {
            info['gd'] = 0;
            let n = node(info['_oi']);
            n.style.display = 'none';
            let vf = Vframe.byNode(n);
            vf.invoke('_gN');
            if (!pevent) {
                State.fire('gD');
            }
        }
    },
    /**
     * 展示或关闭面板
     * @param id 面板id
     */
    '_hK'(id) {
        let info = PanelsMap[id];
        if (info['gd']) {
            this['_og'](id);
        }
        else {
            this['_oh'](id);
        }
    },
    /**
     * 通过id打开或折叠面板内容区域
     * @param id 面板id
     */
    '_hJ'(id) {
        let info = PanelsMap[id];
        if (info['gd']) {
            let n = node(info['_oi']);
            let vf = Vframe.byNode(n);
            vf.invoke('_oj');
        }
    },
    /**
     * 获取当前环境所支持的面板，比如迷你模式下部分面板不展示以节省显示区域
     */
    '_hI'() {
        if (!Panels.length) {
            let mini = State.get('gk');
            let root = node(config('rootId'));
            let height = root.clientHeight;
            Panels.push({
                title: 'nI',
                icon: '&#xe7ef;',
                width: 180,
                height: mini ? height - 140 : 290,
                fixedSize: mini,
                left: 25,
                top: 90,
                key: 1,
                show: true,
                resizeY: !mini,
                id: 'ge',
                view: "5r/tree/index"
            });
            //非迷你模式展示概览面板
            if (!mini) {
                Panels.push({
                    title: 'nN',
                    icon: '&#xe99a;',
                    width: 210,
                    height: 124,
                    key: 2,
                    show: true,
                    left: 25,
                    bottom: 30,
                    id: 'gf',
                    view: "5r/77/index",
                    fixedSize: true
                });
            }
            Panels.push({
                title: 'nO',
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
                id: 'gg',
                view: "5r/61/index"
            });
            //有数据源配置才显示数据源面板
            if (config('getFieldUrl')) {
                Panels.push({
                    title: 'nG',
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
                    id: 'gh',
                    view: "5r/data/index"
                });
            }
            //非迷你模式展示历史记录面板
            if (!mini) {
                Panels.push({
                    title: 'nL',
                    icon: '&#xe720;',
                    width: 200,
                    height: 220,
                    fixedSize: true,
                    show: false,
                    right: 260,
                    bottom: 30,
                    key: Panels.length + 1,
                    id: 'gi',
                    view: "5r/5d/index"
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
                    id: 'gj',
                    view: "5r/perf/index"
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

});