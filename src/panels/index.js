/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/index",["4e"],(require,exports,module)=>{


let magix_1 = require("4e");
let { State, node, Vframe, guid, config, toMap } = magix_1;
let Panels = [];
let PanelsMap;
module.exports= {
    /**
     * 检测是否所有面板均已打开
     */
    '_fi'() {
        let result = true;
        for (let p of Panels) {
            let info = PanelsMap[p.id];
            if (!info['dE']) {
                result = false;
                break;
            }
        }
        return result;
    },
    /**
     * 一键关闭所有面板
     */
    '_fj'() {
        for (let p of Panels) {
            this['_lE'](p.id, true);
        }
        State.fire('d4');
    },
    /**
     * 一键打开所有面板
     */
    '_fk'() {
        for (let p of Panels) {
            this['_lF'](p.id, true);
        }
        State.fire('d4');
    },
    /**
     * 根据面板的初始条件打开相应面板
     */
    '_fs'() {
        for (let p of Panels) {
            if (p.show) {
                this['_lF'](p.id, true);
            }
        }
        State.fire('d4');
    },
    /**
     * 销毁所有面板
     */
    '_fp'() {
        for (let p of Panels) {
            let info = PanelsMap[p.id];
            delete info['dE'];
            delete info['_lG'];
        }
    },
    /**
     * 根据id打开面板
     * @param id 面板id
     * @param prevent 是否阻止事件派发
     */
    '_lF'(id, prevent) {
        let info = PanelsMap[id];
        if (!info['dE']) {
            info['dE'] = 1;
            if (!info['_lG']) {
                info['_lG'] = guid('_rdp_');
                let app = node(config('rootId'));
                app.insertAdjacentHTML('beforeend', `<div id="${info['_lG']}"></div>`);
                let root = Vframe.byNode(app);
                info.close = () => {
                    this['_lE'](info.id);
                };
                root.mount(node(info['_lG']), "58/6j", info);
            }
            else {
                let panelRoot = node(info['_lG']);
                panelRoot.style.display = 'block';
                let vf = Vframe.byNode(panelRoot);
                vf.invoke('_ec');
            }
            if (!prevent) {
                State.fire('d4');
            }
        }
    },
    /**
     * 通过id关闭某个面板
     * @param id 面板id
     * @param pevent 是否阻止事件的派发
     */
    '_lE'(id, pevent) {
        let info = PanelsMap[id];
        if (info['dE']) {
            info['dE'] = 0;
            let n = node(info['_lG']);
            n.style.display = 'none';
            let vf = Vframe.byNode(n);
            vf.invoke('_ed');
            if (!pevent) {
                State.fire('d4');
            }
        }
    },
    /**
     * 展示或关闭面板
     * @param id 面板id
     */
    '_fa'(id) {
        let info = PanelsMap[id];
        if (info['dE']) {
            this['_lE'](id);
        }
        else {
            this['_lF'](id);
        }
    },
    /**
     * 通过id打开或折叠面板内容区域
     * @param id 面板id
     */
    '_f_'(id) {
        let info = PanelsMap[id];
        if (info['dE']) {
            let n = node(info['_lG']);
            let vf = Vframe.byNode(n);
            vf.invoke('_lH');
        }
    },
    /**
     * 获取当前环境所支持的面板，比如迷你模式下部分面板不展示以节省显示区域
     */
    '_e9'() {
        if (!Panels.length) {
            let mini = State.get('dL');
            let root = node(config('rootId'));
            let height = root.clientHeight;
            Panels.push({
                title: 'l_',
                icon: '&#xe7ef;',
                width: 180,
                height: mini ? height - 140 : 290,
                fixedSize: mini,
                left: 25,
                top: 90,
                key: 1,
                show: true,
                resizeY: !mini,
                id: 'dF',
                view: "58/tree/index"
            });
            //非迷你模式展示概览面板
            if (!mini) {
                Panels.push({
                    title: 'le',
                    icon: '&#xe99a;',
                    width: 210,
                    height: 124,
                    key: 2,
                    show: true,
                    left: 25,
                    bottom: 30,
                    id: 'dG',
                    view: "58/6k/index",
                    fixedSize: true
                });
            }
            Panels.push({
                title: 'lf',
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
                id: 'dH',
                view: "58/5e/index"
            });
            //有数据源配置才显示数据源面板
            if (config('getFieldUrl')) {
                Panels.push({
                    title: 'k8',
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
                    id: 'dI',
                    view: "58/data/index"
                });
            }
            //非迷你模式展示历史记录面板
            if (!mini) {
                Panels.push({
                    title: 'lc',
                    icon: '&#xe720;',
                    width: 200,
                    height: 220,
                    fixedSize: true,
                    show: false,
                    right: 260,
                    bottom: 30,
                    key: Panels.length + 1,
                    id: 'dJ',
                    view: "58/4q/index"
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
                    id: 'dK',
                    view: "58/perf/index"
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
                id: 'dL',
                view: "58/res/index"
            });
            PanelsMap = toMap(Panels, 'id');
        }
        return Panels;
    }
};

});