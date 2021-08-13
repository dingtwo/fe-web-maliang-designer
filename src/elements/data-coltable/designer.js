/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/data-coltable/designer",["5c","../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5v","../../5b/5f","../6p","./consts"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let service_1 = require("../../5b/5v");
let transform_1 = require("../../5b/5f");
let normal_1 = require("../6p");
let consts_1 = require("./consts");
let BaseDesigner = normal_1.prototype;
let { State, Cache, mark, config, mix } = magix_1;
let { floor } = Math;
let calcTableSize = (props, list, err) => {
    let { bind, columns } = props;
    let scale = State.get('l3');
    //console.log('calc');
    if (bind.fields &&
        bind.fields.length) {
        let footerHeight = 0;
        let stageElements = State.get('m_');
        for (let e of stageElements) {
            if (e.type == 'hod-footer') {
                footerHeight = e.props.height;
            }
        }
        let width = 0;
        for (let field of bind.fields) {
            width += (columns[field.id] || consts_1["_p4"] * scale);
        }
        let oneBorder = const_1['l3'](1);
        props.width = width + oneBorder;
        if (err || !list) {
            props.loadingHeight = consts_1["_p6"] * scale;
            props.height = consts_1["_p6"] * scale + props.theadRowHeight + const_1['l3'](3) + props.tfootSpacing;
            props.bind._tip = (err === null || err === void 0 ? void 0 : err.message) || '正在加载数据...';
        }
        else {
            let page = State.get('ma');
            let y = props.y;
            let rh = page.height * scale;
            let pn = y / rh;
            let pageNumber = pn | 0;
            let rest = pn - pageNumber;
            if (rest > 0.9999) { //类似这种在设计区动态高度的组件后续不再维护，也不再修正bug
                pageNumber++;
            }
            if (pageNumber < 0) {
                pageNumber = 0;
            }
            y -= pageNumber * rh;
            let restHeight = rh - y - props.theadRowHeight - oneBorder - props.tfootSpacing - footerHeight;
            let rows = floor(restHeight / (props.tbodyRowHeight + oneBorder));
            if (rows < 1)
                rows = 1;
            if (list.length > rows) {
                list = list.slice(0, rows);
            }
            props.height = props.theadRowHeight + props.tbodyRowHeight * list.length + (list.length + 2) * oneBorder + props.tfootSpacing;
            props.bind._data = list;
            props.bind._tip = '';
        }
        //props.height = 365;
    }
    else {
        props.height = props.theadRowHeight + props.tbodyRowHeight + const_1['l3'](3) + props.tfootSpacing;
        props.width = const_1['l3'](consts_1["_p5"]) * scale;
    }
};
let apiDataCache = new Cache();
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/data-coltable/dshow"
        });
        let updateSize = this['_mb'](e => {
            //console.log(e);
            if (!e['_nL'] ||
                e['_nL']['hod-footer']) {
                let element = this.get('element');
                this['_ol'](element);
            }
        }, 20);
        State.on('l8', updateSize);
        State.on('l4', updateSize);
        // State.on('@:{event#stage.scale.change}', updateSize);
        this.on('destroy', () => {
            State.off('l8', updateSize);
            State.off('l4', updateSize);
        });
    },
    '_p7'(element) {
        let { props } = element;
        let { bind } = props;
        if (bind.url) {
            let data = apiDataCache.get(bind.url);
            if (data) {
                calcTableSize(props, data.list, data.error);
            }
            else {
                calcTableSize(props);
                let m = mark(this, '_p7');
                let s = new service_1();
                s.all({
                    name: '_nY',
                    url: bind.url
                }, (err, bag) => {
                    let list = bag.get('data', []);
                    apiDataCache.set(bind.url, {
                        list,
                        error: err
                    });
                    calcTableSize(props, list, err);
                    let element = this.get('element');
                    if (m()) {
                        if (element.ctrl['_m3']) {
                            element.ctrl['_m3'](props);
                        }
                        this.digest({
                            element
                        });
                        State.fire('l4', {
                            '_nK': {
                                [element.id]: 1
                            },
                            '_nL': {
                                [element.type]: 1
                            },
                            '_l3': {
                                '_pZ': 1
                            }
                        });
                    }
                });
            }
        }
        else {
            calcTableSize(props);
        }
    },
    assign(data) {
        this['_p7'](data.element);
        BaseDesigner.assign.call(this, data);
    },
    '_ol'(element) {
        this['_p7'](element);
        BaseDesigner['_ol'].call(this, element);
    }
}).static({
    type: 'data-coltable',
    title: 'oT',
    icon: '&#xeb47;',
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_oG': enum_1['mi'],
    '_oi': {
        root: 1
    },
    '_m2'(x, y) {
        return {
            alpha: 1,
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            //rotate: 0,
            width: const_1['l3'](200),
            height: const_1['l3'](93),
            locked: false,
            cellAlign: 'center',
            tfootSpacing: const_1['l3'](20),
            theadFontsize: const_1['l3'](16),
            theadRowHeight: const_1['l3'](40),
            theadForecolor: '#000000',
            tbodyRowHeight: const_1['l3'](30),
            tbodyFontsize: const_1['l3'](14),
            tbodyForecolor: '#000000',
            theadRowBackground: '#ffda95',
            tbodyEvenRowBackground: '#dde09d',
            tbodyOddRowBackground: '#f2f5cc',
            bordercolor: '#000000',
            bind: {
                url: '',
                id: '',
                fields: []
            },
            help: 'github.com/xinglie/report-designer/issues/24',
            columns: {}
        };
    },
    props: [{
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        } /*, {
            tip: '@:{lang#props.width}',
            type: Props["@:{eprops#label}"],
            key: 'width'
        }*/,
        {
            type: props_1["ms"]
        }, {
            tip: 'nW',
            key: 'bind',
            type: props_1["mb"],
            json: 1,
            max: -1,
            //'@:{dock.top}': 1,
            '_py'() {
                return config('getFieldUrl');
            },
            write(v, props) {
                var _a;
                let columns = props.columns || {};
                let old = { ...columns };
                for (let p in columns) {
                    delete columns[p];
                }
                for (let p of v.fields) {
                    columns[p.id] = (_a = old[p.id]) !== null && _a !== void 0 ? _a : const_1['l3'](consts_1["_p4"]);
                }
                return v;
            }
        }, {
            tip: 'oU',
            key: 'columns',
            type: props_1["mc"],
            min: () => const_1["l3"](20),
            max: () => const_1["l3"](300),
            '_nz'(props, toUnit) {
                let { columns } = props;
                for (let e in columns) {
                    columns[e] = const_1['mO'](columns[e], toUnit);
                }
            },
            '_oy'(props, step, dest) {
                let { columns } = props;
                for (let e in columns) {
                    columns[e] *= step;
                }
                if (dest) {
                    dest.columns = columns;
                }
            },
            read(values) {
                let newColumns = {};
                for (let p in values) {
                    newColumns[p] = transform_1["l5"](values[p]);
                }
                return newColumns;
            },
            write(values) {
                let newColumns = {};
                for (let p in values) {
                    newColumns[p] = transform_1["m_"](values[p]);
                }
                return newColumns;
            },
            json: 1,
            //'@:{dock.top}': 1
        }, {
            tip: 'oV',
            min: 0,
            key: 'tfootSpacing',
            type: props_1["l2"],
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            type: props_1["ms"]
        }, {
            tip: 'oW',
            type: props_1["me"],
            //'@:{dock.top}': 1,
            write(skin, props) {
                mix(props, skin);
            }
        }, {
            tip: 'on',
            key: 'bordercolor',
            type: props_1["l3"],
            json: 1
        }, {
            tip: 'oX',
            key: 'cellAlign',
            type: props_1["l9"],
            items: [{
                    text: 'oY',
                    value: 'left'
                }, {
                    text: 'oZ',
                    value: 'center'
                }, {
                    text: 'o0',
                    value: 'right'
                }],
            json: 1
        }, {
            tip: 'o1',
            min: () => const_1["l3"](25),
            max: () => const_1["l3"](100),
            step: const_1["mH"],
            fixed: const_1["mI"],
            key: 'theadRowHeight',
            type: props_1["l2"],
            '_nA': 1,
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'o2',
            min: () => const_1["l3"](25),
            max: () => const_1["l3"](100),
            '_nA': 1,
            key: 'tbodyRowHeight',
            type: props_1["l2"],
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'oq',
            min: () => const_1["l3"](12),
            max: () => const_1["l3"](100),
            '_nA': 1,
            key: 'theadFontsize',
            type: props_1["l2"],
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'oi',
            key: 'theadForecolor',
            type: props_1["l3"],
            json: 1
        }, {
            tip: 'or',
            key: 'theadRowBackground',
            type: props_1["l3"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: 'os',
            min: () => const_1["l3"](12),
            max: () => const_1["l3"](100),
            '_nA': 1,
            step: const_1["mH"],
            fixed: const_1["mI"],
            key: 'tbodyFontsize',
            type: props_1["l2"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'oi',
            key: 'tbodyForecolor',
            type: props_1["l3"],
            json: 1
        }, {
            tip: 'o3',
            key: 'tbodyEvenRowBackground',
            type: props_1["l3"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: 'o4',
            key: 'tbodyOddRowBackground',
            type: props_1["l3"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: 'nU',
            key: 'alpha',
            type: props_1["l2"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        },
        {
            type: props_1["ms"]
        }, {
            tip: 'n2',
            type: props_1["mm"],
            key: 'help'
        }, {
            tip: 'n3',
            key: 'ename',
            type: props_1["ma"],
            json: 1
        }, {
            tip: 'n4',
            key: 'locked',
            type: props_1["l4"],
            free: true,
            json: 1
        }]
});

});