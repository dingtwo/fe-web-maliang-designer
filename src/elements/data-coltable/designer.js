/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/data-coltable/designer",["51","../../50/53","../../50/enum","../../50/61","../../50/5k","../../50/54","../6e","./consts"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let service_1 = require("../../50/5k");
let transform_1 = require("../../50/54");
let normal_1 = require("../6e");
let consts_1 = require("./consts");
let BaseDesigner = normal_1.prototype;
let { State, Cache, mark, config, mix } = magix_1;
let { floor } = Math;
let calcTableSize = (props, list, err) => {
    let { bind, columns } = props;
    let scale = State.get('ge');
    //console.log('calc');
    if (bind.fields && bind.fields.length) {
        let footerHeight = 0;
        let stageElements = State.get('gl');
        for (let e of stageElements) {
            if (e.type == 'hod-footer') {
                footerHeight = e.props.height;
            }
        }
        let width = 0;
        for (let field of bind.fields) {
            width += columns[field.id] || consts_1['_ki'] * scale;
        }
        let oneBorder = const_1['ge'](1);
        props.width = width + oneBorder;
        if (err || !list) {
            props.loadingHeight = consts_1['_kk'] * scale;
            props.height =
                consts_1['_kk'] * scale +
                    props.theadRowHeight +
                    const_1['ge'](3) +
                    props.tfootSpacing;
            props.bind._tip = (err === null || err === void 0 ? void 0 : err.message) || '正在加载数据...';
        }
        else {
            let page = State.get('gm');
            let y = props.y;
            let rh = page.height * scale;
            let pn = y / rh;
            let pageNumber = pn | 0;
            let rest = pn - pageNumber;
            if (rest > 0.9999) {
                //类似这种在设计区动态高度的组件后续不再维护，也不再修正bug
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
            props.height =
                props.theadRowHeight +
                    props.tbodyRowHeight * list.length +
                    (list.length + 2) * oneBorder +
                    props.tfootSpacing;
            props.bind._data = list;
            props.bind._tip = '';
        }
        //props.height = 365;
    }
    else {
        props.height =
            props.theadRowHeight +
                props.tbodyRowHeight +
                const_1['ge'](3) +
                props.tfootSpacing;
        props.width = const_1['ge'](consts_1['_kj']) * scale;
    }
};
let apiDataCache = new Cache();
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/data-coltable/dshow",
        });
        let updateSize = this['_gn'](e => {
            //console.log(e);
            if (!e['_hX'] || e['_hX']['hod-footer']) {
                let element = this.get('element');
                this['_iA'](element);
            }
        }, 20);
        State.on('gj', updateSize);
        State.on('gf', updateSize);
        // State.on('@:{event#stage.scale.change}', updateSize);
        this.on('destroy', () => {
            State.off('gj', updateSize);
            State.off('gf', updateSize);
        });
    },
    '_kl'(element) {
        let { props } = element;
        let { bind } = props;
        if (bind.url) {
            let data = apiDataCache.get(bind.url);
            if (data) {
                calcTableSize(props, data.list, data.error);
            }
            else {
                calcTableSize(props);
                let m = mark(this, '_kl');
                let s = new service_1();
                s.all({
                    name: '_ib',
                    url: bind.url,
                }, (err, bag) => {
                    let list = bag.get('data', []);
                    apiDataCache.set(bind.url, {
                        list,
                        error: err,
                    });
                    calcTableSize(props, list, err);
                    let element = this.get('element');
                    if (m()) {
                        if (element.ctrl['_he']) {
                            element.ctrl['_he'](props);
                        }
                        this.digest({
                            element,
                        });
                        State.fire('gf', {
                            '_hW': {
                                [element.id]: 1,
                            },
                            '_hX': {
                                [element.type]: 1,
                            },
                            '_ge': {
                                '_kd': 1,
                            },
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
        this['_kl'](data.element);
        BaseDesigner.assign.call(this, data);
    },
    '_iA'(element) {
        this['_kl'](element);
        BaseDesigner['_iA'].call(this, element);
    },
}).static({
    type: 'data-coltable',
    title: 'i4',
    icon: '&#xeb47;',
    '_iy': [
        {
            key: 'x',
            use: 'x',
        },
        {
            key: 'y',
            use: 'y',
        },
    ],
    '_iV': enum_1['gu'],
    '_ix': {
        root: 1,
    },
    '_hd'(x, y) {
        return {
            alpha: 1,
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            //rotate: 0,
            width: const_1['ge'](200),
            height: const_1['ge'](93),
            locked: false,
            cellAlign: 'center',
            tfootSpacing: const_1['ge'](20),
            theadFontsize: const_1['ge'](16),
            theadRowHeight: const_1['ge'](40),
            theadForecolor: '#000000',
            tbodyRowHeight: const_1['ge'](30),
            tbodyFontsize: const_1['ge'](14),
            tbodyForecolor: '#000000',
            theadRowBackground: '#ffda95',
            tbodyEvenRowBackground: '#dde09d',
            tbodyOddRowBackground: '#f2f5cc',
            bordercolor: '#000000',
            bind: {
                url: '',
                id: '',
                fields: [],
            },
            help: 'github.com/xinglie/report-designer/issues/24',
            columns: {},
        };
    },
    props: [
        {
            tip: 'h1',
            type: props_1['gd'],
            key: 'x',
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            json: 1,
        },
        {
            tip: 'h2',
            type: props_1['gd'],
            key: 'y',
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            json: 1,
        } /*, {
            tip: '@:{lang#props.width}',
            type: Props["@:{eprops#label}"],
            key: 'width'
        }*/,
        {
            type: props_1['gE'],
        },
        {
            tip: 'h8',
            key: 'bind',
            type: props_1['gn'],
            json: 1,
            max: -1,
            //'@:{dock.top}': 1,
            '_jN'() {
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
                    columns[p.id] =
                        (_a = old[p.id]) !== null && _a !== void 0 ? _a : const_1['ge'](consts_1['_ki']);
                }
                return v;
            },
        },
        {
            tip: 'i5',
            key: 'columns',
            type: props_1['go'],
            min: () => const_1['ge'](20),
            max: () => const_1['ge'](300),
            '_hL'(props, toUnit) {
                let { columns } = props;
                for (let e in columns) {
                    columns[e] = const_1['g0'](columns[e], toUnit);
                }
            },
            '_iN'(props, step, dest) {
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
                    newColumns[p] = transform_1['gg'](values[p]);
                }
                return newColumns;
            },
            write(values) {
                let newColumns = {};
                for (let p in values) {
                    newColumns[p] = transform_1['gl'](values[p]);
                }
                return newColumns;
            },
            json: 1,
            //'@:{dock.top}': 1
        },
        {
            tip: 'i6',
            min: 0,
            key: 'tfootSpacing',
            type: props_1['gd'],
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            json: 1,
        },
        {
            type: props_1['gE'],
        },
        {
            tip: 'i7',
            type: props_1['gq'],
            //'@:{dock.top}': 1,
            write(skin, props) {
                mix(props, skin);
            },
        },
        {
            tip: 'iy',
            key: 'bordercolor',
            type: props_1['ge'],
            json: 1,
        },
        {
            tip: 'i8',
            key: 'cellAlign',
            type: props_1['gk'],
            items: [
                {
                    text: 'i9',
                    value: 'left',
                },
                {
                    text: 'j_',
                    value: 'center',
                },
                {
                    text: 'ja',
                    value: 'right',
                },
            ],
            json: 1,
        },
        {
            tip: 'jb',
            min: () => const_1['ge'](25),
            max: () => const_1['ge'](100),
            step: const_1['gT'],
            fixed: const_1['gU'],
            key: 'theadRowHeight',
            type: props_1['gd'],
            '_hM': 1,
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'jc',
            min: () => const_1['ge'](25),
            max: () => const_1['ge'](100),
            '_hM': 1,
            key: 'tbodyRowHeight',
            type: props_1['gd'],
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'iB',
            min: () => const_1['ge'](12),
            max: () => const_1['ge'](100),
            '_hM': 1,
            key: 'theadFontsize',
            type: props_1['gd'],
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'it',
            key: 'theadForecolor',
            type: props_1['ge'],
            json: 1,
        },
        {
            tip: 'iC',
            key: 'theadRowBackground',
            type: props_1['ge'],
            clear: true,
            alpha: true,
            json: 1,
        },
        {
            tip: 'iD',
            min: () => const_1['ge'](12),
            max: () => const_1['ge'](100),
            '_hM': 1,
            step: const_1['gT'],
            fixed: const_1['gU'],
            key: 'tbodyFontsize',
            type: props_1['gd'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'it',
            key: 'tbodyForecolor',
            type: props_1['ge'],
            json: 1,
        },
        {
            tip: 'jd',
            key: 'tbodyEvenRowBackground',
            type: props_1['ge'],
            clear: true,
            alpha: true,
            json: 1,
        },
        {
            tip: 'je',
            key: 'tbodyOddRowBackground',
            type: props_1['ge'],
            clear: true,
            alpha: true,
            json: 1,
        },
        {
            tip: 'h6',
            key: 'alpha',
            type: props_1['gd'],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1,
        },
        /*{
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360
        },*/ {
            type: props_1['gE'],
        },
        // {
        //   tip: '@:{lang#props.help}',
        //   type: Props['@:{eprops#link}'],
        //   key: 'help',
        // },
        {
            tip: 'id',
            key: 'ename',
            type: props_1['gm'],
            json: 1,
        },
        {
            tip: 'ie',
            key: 'locked',
            type: props_1['gf'],
            free: true,
            json: 1,
        },
    ],
});

});