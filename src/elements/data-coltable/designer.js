/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/data-coltable/designer",["4e","../../4d/4g","../../4d/enum","../../4d/5e","../../4d/51","../../4d/4h","../5r","./consts"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let service_1 = require("../../4d/51");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
let consts_1 = require("./consts");
let BaseDesigner = normal_1.prototype;
let { State, Cache, mark, config, mix } = magix_1;
let { floor } = Math;
let calcTableSize = (props, list, err) => {
    let { bind, columns } = props;
    let scale = State.get('dF');
    //console.log('calc');
    if (bind.fields &&
        bind.fields.length) {
        let footerHeight = 0;
        let stageElements = State.get('dM');
        for (let e of stageElements) {
            if (e.type == 'hod-footer') {
                footerHeight = e.props.height;
            }
        }
        let width = 0;
        for (let field of bind.fields) {
            width += (columns[field.id] || consts_1["_hG"] * scale);
        }
        let oneBorder = const_1['dF'](1);
        props.width = width + oneBorder;
        if (err || !list) {
            props.loadingHeight = consts_1["_hI"] * scale;
            props.height = consts_1["_hI"] * scale + props.theadRowHeight + const_1['dF'](3) + props.tfootSpacing;
            props.bind._tip = (err === null || err === void 0 ? void 0 : err.message) || '正在加载数据...';
        }
        else {
            let page = State.get('dN');
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
        props.height = props.theadRowHeight + props.tbodyRowHeight + const_1['dF'](3) + props.tfootSpacing;
        props.width = const_1['dF'](consts_1["_hH"]) * scale;
    }
};
let apiDataCache = new Cache();
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/data-coltable/dshow"
        });
        let updateSize = this['_dO'](e => {
            //console.log(e);
            if (!e['_fn'] ||
                e['_fn']['hod-footer']) {
                let element = this.get('element');
                this['_fY'](element);
            }
        }, 20);
        State.on('dK', updateSize);
        State.on('dG', updateSize);
        // State.on('@:{event#stage.scale.change}', updateSize);
        this.on('destroy', () => {
            State.off('dK', updateSize);
            State.off('dG', updateSize);
        });
    },
    '_hJ'(element) {
        let { props } = element;
        let { bind } = props;
        if (bind.url) {
            let data = apiDataCache.get(bind.url);
            if (data) {
                calcTableSize(props, data.list, data.error);
            }
            else {
                calcTableSize(props);
                let m = mark(this, '_hJ');
                let s = new service_1();
                s.all({
                    name: '_fA',
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
                        if (element.ctrl['_eF']) {
                            element.ctrl['_eF'](props);
                        }
                        this.digest({
                            element
                        });
                        State.fire('dG', {
                            '_fm': {
                                [element.id]: 1
                            },
                            '_fn': {
                                [element.type]: 1
                            },
                            '_dF': {
                                '_hB': 1
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
        this['_hJ'](data.element);
        BaseDesigner.assign.call(this, data);
    },
    '_fY'(element) {
        this['_hJ'](element);
        BaseDesigner['_fY'].call(this, element);
    }
}).static({
    type: 'data-coltable',
    title: 'gv',
    icon: '&#xeb47;',
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_gi': enum_1['dV'],
    '_fV': {
        root: 1
    },
    '_eE'(x, y) {
        return {
            alpha: 1,
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            //rotate: 0,
            width: const_1['dF'](200),
            height: const_1['dF'](93),
            locked: false,
            cellAlign: 'center',
            tfootSpacing: const_1['dF'](20),
            theadFontsize: const_1['dF'](16),
            theadRowHeight: const_1['dF'](40),
            theadForecolor: '#000000',
            tbodyRowHeight: const_1['dF'](30),
            tbodyFontsize: const_1['dF'](14),
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
            tip: 'fr',
            type: props_1["dE"],
            key: 'x',
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        } /*, {
            tip: '@:{lang#props.width}',
            type: Props["@:{eprops#label}"],
            key: 'width'
        }*/,
        {
            type: props_1["d5"]
        }, {
            tip: 'fy',
            key: 'bind',
            type: props_1["dO"],
            json: 1,
            max: -1,
            //'@:{dock.top}': 1,
            '_ha'() {
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
                    columns[p.id] = (_a = old[p.id]) !== null && _a !== void 0 ? _a : const_1['dF'](consts_1["_hG"]);
                }
                return v;
            }
        }, {
            tip: 'gw',
            key: 'columns',
            type: props_1["dP"],
            min: () => const_1["dF"](20),
            max: () => const_1["dF"](300),
            '_fb'(props, toUnit) {
                let { columns } = props;
                for (let e in columns) {
                    columns[e] = const_1['eq'](columns[e], toUnit);
                }
            },
            '_ga'(props, step, dest) {
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
                    newColumns[p] = transform_1["dH"](values[p]);
                }
                return newColumns;
            },
            write(values) {
                let newColumns = {};
                for (let p in values) {
                    newColumns[p] = transform_1["dM"](values[p]);
                }
                return newColumns;
            },
            json: 1,
            //'@:{dock.top}': 1
        }, {
            tip: 'gx',
            min: 0,
            key: 'tfootSpacing',
            type: props_1["dE"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            type: props_1["d5"]
        }, {
            tip: 'gy',
            type: props_1["dR"],
            //'@:{dock.top}': 1,
            write(skin, props) {
                mix(props, skin);
            }
        }, {
            tip: 'f0',
            key: 'bordercolor',
            type: props_1["dF"],
            json: 1
        }, {
            tip: 'gz',
            key: 'cellAlign',
            type: props_1["dL"],
            items: [{
                    text: 'gA',
                    value: 'left'
                }, {
                    text: 'gB',
                    value: 'center'
                }, {
                    text: 'gC',
                    value: 'right'
                }],
            json: 1
        }, {
            tip: 'gD',
            min: () => const_1["dF"](25),
            max: () => const_1["dF"](100),
            step: const_1["ej"],
            fixed: const_1["ek"],
            key: 'theadRowHeight',
            type: props_1["dE"],
            '_fc': 1,
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'gE',
            min: () => const_1["dF"](25),
            max: () => const_1["dF"](100),
            '_fc': 1,
            key: 'tbodyRowHeight',
            type: props_1["dE"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'f3',
            min: () => const_1["dF"](12),
            max: () => const_1["dF"](100),
            '_fc': 1,
            key: 'theadFontsize',
            type: props_1["dE"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fV',
            key: 'theadForecolor',
            type: props_1["dF"],
            json: 1
        }, {
            tip: 'f4',
            key: 'theadRowBackground',
            type: props_1["dF"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: 'f5',
            min: () => const_1["dF"](12),
            max: () => const_1["dF"](100),
            '_fc': 1,
            step: const_1["ej"],
            fixed: const_1["ek"],
            key: 'tbodyFontsize',
            type: props_1["dE"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fV',
            key: 'tbodyForecolor',
            type: props_1["dF"],
            json: 1
        }, {
            tip: 'gF',
            key: 'tbodyEvenRowBackground',
            type: props_1["dF"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: 'gG',
            key: 'tbodyOddRowBackground',
            type: props_1["dF"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: 'fw',
            key: 'alpha',
            type: props_1["dE"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        },
        {
            type: props_1["d5"]
        }, {
            tip: 'fE',
            type: props_1["dZ"],
            key: 'help'
        }, {
            tip: 'fF',
            key: 'ename',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'fG',
            key: 'locked',
            type: props_1["dG"],
            free: true,
            json: 1
        }]
});

});