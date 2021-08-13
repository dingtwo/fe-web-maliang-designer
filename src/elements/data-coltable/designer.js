/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-coltable/designer",["magix5","../../designer/const","../../designer/enum","../../designer/props","../../designer/service","../../designer/transform","../normal","./consts"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let service_1 = require("../../designer/service");
let transform_1 = require("../../designer/transform");
let normal_1 = require("../normal");
let consts_1 = require("./consts");
let BaseDesigner = normal_1.prototype;
let { State, Cache, mark, config, mix } = magix_1;
let { floor } = Math;
let calcTableSize = (props, list, err) => {
    let { bind, columns } = props;
    let scale = State.get('@:{global#stage.scale~rs}');
    //console.log('calc');
    if (bind.fields &&
        bind.fields.length) {
        let footerHeight = 0;
        let stageElements = State.get('@:{global#stage.elements~rs}');
        for (let e of stageElements) {
            if (e.type == 'hod-footer') {
                footerHeight = e.props.height;
            }
        }
        let width = 0;
        for (let field of bind.fields) {
            width += (columns[field.id] || consts_1["@:{default.cell.width~rs}"] * scale);
        }
        let oneBorder = const_1['@:{const#to.unit~rs}'](1);
        props.width = width + oneBorder;
        if (err || !list) {
            props.loadingHeight = consts_1["@:{loading.tip.height~rs}"] * scale;
            props.height = consts_1["@:{loading.tip.height~rs}"] * scale + props.theadRowHeight + const_1['@:{const#to.unit~rs}'](3) + props.tfootSpacing;
            props.bind._tip = (err === null || err === void 0 ? void 0 : err.message) || '正在加载数据...';
        }
        else {
            let page = State.get('@:{global#stage.page~rs}');
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
        props.height = props.theadRowHeight + props.tbodyRowHeight + const_1['@:{const#to.unit~rs}'](3) + props.tfootSpacing;
        props.width = const_1['@:{const#to.unit~rs}'](consts_1["@:{default.empty.width~rs}"]) * scale;
    }
};
let apiDataCache = new Cache();
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/data-coltable/dshow"
        });
        let updateSize = this['@:{debounce~rs}'](e => {
            //console.log(e);
            if (!e['@:{types~rs}'] ||
                e['@:{types~rs}']['hod-footer']) {
                let element = this.get('element');
                this['@:{update~rs}'](element);
            }
        }, 20);
        State.on('@:{event#stage.page.change~rs}', updateSize);
        State.on('@:{event#stage.select.element.props.change~rs}', updateSize);
        // State.on('@:{event#stage.scale.change}', updateSize);
        this.on('destroy', () => {
            State.off('@:{event#stage.page.change~rs}', updateSize);
            State.off('@:{event#stage.select.element.props.change~rs}', updateSize);
        });
    },
    '@:{attach.data~rs}'(element) {
        let { props } = element;
        let { bind } = props;
        if (bind.url) {
            let data = apiDataCache.get(bind.url);
            if (data) {
                calcTableSize(props, data.list, data.error);
            }
            else {
                calcTableSize(props);
                let m = mark(this, '@:{attach.data~rs}');
                let s = new service_1();
                s.all({
                    name: '@:{get.by.url~rs}',
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
                        if (element.ctrl['@:{update.props~rs}']) {
                            element.ctrl['@:{update.props~rs}'](props);
                        }
                        this.digest({
                            element
                        });
                        State.fire('@:{event#stage.select.element.props.change~rs}', {
                            '@:{ids~rs}': {
                                [element.id]: 1
                            },
                            '@:{types~rs}': {
                                [element.type]: 1
                            },
                            '@:{props~rs}': {
                                '@:{bind~rs}': 1
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
        this['@:{attach.data~rs}'](data.element);
        BaseDesigner.assign.call(this, data);
    },
    '@:{update~rs}'(element) {
        this['@:{attach.data~rs}'](element);
        BaseDesigner['@:{update~rs}'].call(this, element);
    }
}).static({
    type: 'data-coltable',
    title: '@:{lang#elements.data.coltable~rs}',
    icon: '&#xeb47;',
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '@:{modifier~rs}': enum_1['@:{enum#modifier.dheight~rs}'],
    '@:{allowed.to.hod~rs}': {
        root: 1
    },
    '@:{get.props~rs}'(x, y) {
        return {
            alpha: 1,
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            //rotate: 0,
            width: const_1['@:{const#to.unit~rs}'](200),
            height: const_1['@:{const#to.unit~rs}'](93),
            locked: false,
            cellAlign: 'center',
            tfootSpacing: const_1['@:{const#to.unit~rs}'](20),
            theadFontsize: const_1['@:{const#to.unit~rs}'](16),
            theadRowHeight: const_1['@:{const#to.unit~rs}'](40),
            theadForecolor: '#000000',
            tbodyRowHeight: const_1['@:{const#to.unit~rs}'](30),
            tbodyFontsize: const_1['@:{const#to.unit~rs}'](14),
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
            tip: '@:{lang#props.x~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'x',
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.y~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'y',
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        } /*, {
            tip: '@:{lang#props.width}',
            type: Props["@:{eprops#label}"],
            key: 'width'
        }*/,
        {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.bind.fields~rs}',
            key: 'bind',
            type: props_1["@:{eprops#bind.field~rs}"],
            json: 1,
            max: -1,
            //'@:{dock.top}': 1,
            '@:{if.show~rs}'() {
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
                    columns[p.id] = (_a = old[p.id]) !== null && _a !== void 0 ? _a : const_1['@:{const#to.unit~rs}'](consts_1["@:{default.cell.width~rs}"]);
                }
                return v;
            }
        }, {
            tip: '@:{lang#props.table.columns.width~rs}',
            key: 'columns',
            type: props_1["@:{eprops#column.width~rs}"],
            min: () => const_1["@:{const#to.unit~rs}"](20),
            max: () => const_1["@:{const#to.unit~rs}"](300),
            '@:{unit.convert~rs}'(props, toUnit) {
                let { columns } = props;
                for (let e in columns) {
                    columns[e] = const_1['@:{const#unit.to.unit~rs}'](columns[e], toUnit);
                }
            },
            '@:{stage.scale~rs}'(props, step, dest) {
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
                    newColumns[p] = transform_1["@:{transform#to.show.value~rs}"](values[p]);
                }
                return newColumns;
            },
            write(values) {
                let newColumns = {};
                for (let p in values) {
                    newColumns[p] = transform_1["@:{transform#to.real.value~rs}"](values[p]);
                }
                return newColumns;
            },
            json: 1,
            //'@:{dock.top}': 1
        }, {
            tip: '@:{lang#props.table.foot.spacing~rs}',
            min: 0,
            key: 'tfootSpacing',
            type: props_1["@:{eprops#number~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.table.style~rs}',
            type: props_1["@:{eprops#table.style~rs}"],
            //'@:{dock.top}': 1,
            write(skin, props) {
                mix(props, skin);
            }
        }, {
            tip: '@:{lang#props.border.color~rs}',
            key: 'bordercolor',
            type: props_1["@:{eprops#color~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.table.cell.align~rs}',
            key: 'cellAlign',
            type: props_1["@:{eprops#dropdown~rs}"],
            items: [{
                    text: '@:{lang#props.table.cell.align.left~rs}',
                    value: 'left'
                }, {
                    text: '@:{lang#props.table.cell.align.center~rs}',
                    value: 'center'
                }, {
                    text: '@:{lang#props.table.cell.align.right~rs}',
                    value: 'right'
                }],
            json: 1
        }, {
            tip: '@:{lang#props.table.head.row.height~rs}',
            min: () => const_1["@:{const#to.unit~rs}"](25),
            max: () => const_1["@:{const#to.unit~rs}"](100),
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            key: 'theadRowHeight',
            type: props_1["@:{eprops#number~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.table.body.row.height~rs}',
            min: () => const_1["@:{const#to.unit~rs}"](25),
            max: () => const_1["@:{const#to.unit~rs}"](100),
            '@:{is.scale.and.unit.field~rs}': 1,
            key: 'tbodyRowHeight',
            type: props_1["@:{eprops#number~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.table.head.font.size~rs}',
            min: () => const_1["@:{const#to.unit~rs}"](12),
            max: () => const_1["@:{const#to.unit~rs}"](100),
            '@:{is.scale.and.unit.field~rs}': 1,
            key: 'theadFontsize',
            type: props_1["@:{eprops#number~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.forecolor~rs}',
            key: 'theadForecolor',
            type: props_1["@:{eprops#color~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.table.head.row.background~rs}',
            key: 'theadRowBackground',
            type: props_1["@:{eprops#color~rs}"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: '@:{lang#props.table.body.font.size~rs}',
            min: () => const_1["@:{const#to.unit~rs}"](12),
            max: () => const_1["@:{const#to.unit~rs}"](100),
            '@:{is.scale.and.unit.field~rs}': 1,
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            key: 'tbodyFontsize',
            type: props_1["@:{eprops#number~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.forecolor~rs}',
            key: 'tbodyForecolor',
            type: props_1["@:{eprops#color~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.table.body.even.row.background~rs}',
            key: 'tbodyEvenRowBackground',
            type: props_1["@:{eprops#color~rs}"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: '@:{lang#props.table.body.odd.row.background~rs}',
            key: 'tbodyOddRowBackground',
            type: props_1["@:{eprops#color~rs}"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: '@:{lang#props.alpha~rs}',
            key: 'alpha',
            type: props_1["@:{eprops#number~rs}"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        },
        {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.help~rs}',
            type: props_1["@:{eprops#link~rs}"],
            key: 'help'
        }, {
            tip: '@:{lang#props.title~rs}',
            key: 'ename',
            type: props_1["@:{eprops#text.input~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.locked~rs}',
            key: 'locked',
            type: props_1["@:{eprops#boolean~rs}"],
            free: true,
            json: 1
        }]
});

});