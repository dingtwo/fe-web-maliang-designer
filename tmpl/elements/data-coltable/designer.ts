/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Service from '../../designer/service';
import Transform from '../../designer/transform';
import Designer from '../normal';
import TableConsts from './consts';
let BaseDesigner = Designer.prototype;
let { State, Cache, mark, config, mix } = Magix;
let { floor } = Math;
let calcTableSize = (props, list?: object[], err?: { message: string }) => {
    let { bind, columns } = props;
    let scale = State.get('@:{global#stage.scale}');
    //console.log('calc');
    if (bind.fields &&
        bind.fields.length) {
        let footerHeight = 0;
        let stageElements = State.get('@:{global#stage.elements}');
        for (let e of stageElements) {
            if (e.type == 'hod-footer') {
                footerHeight = e.props.height;
            }
        }
        let width = 0;
        for (let field of bind.fields) {
            width += (columns[field.id] || TableConsts["@:{default.cell.width}"] * scale);
        }
        let oneBorder = Const['@:{const#to.unit}'](1);
        props.width = width + oneBorder;
        if (err || !list) {
            props.loadingHeight = TableConsts["@:{loading.tip.height}"] * scale;
            props.height = TableConsts["@:{loading.tip.height}"] * scale + props.theadRowHeight + Const['@:{const#to.unit}'](3) + props.tfootSpacing;
            props.bind._tip = err?.message || '正在加载数据...';
        } else {
            let page = State.get('@:{global#stage.page}');
            let y = props.y;
            let rh = page.height * scale;
            let pn = y / rh;
            let pageNumber = pn | 0;
            let rest = pn - pageNumber;
            if (rest > 0.9999) {//类似这种在设计区动态高度的组件后续不再维护，也不再修正bug
                pageNumber++;
            }
            if (pageNumber < 0) {
                pageNumber = 0;
            }
            y -= pageNumber * rh;
            let restHeight = rh - y - props.theadRowHeight - oneBorder - props.tfootSpacing - footerHeight;
            let rows = floor(restHeight / (props.tbodyRowHeight + oneBorder));
            if (rows < 1) rows = 1;
            if (list.length > rows) {
                list = list.slice(0, rows);
            }
            props.height = props.theadRowHeight + props.tbodyRowHeight * list.length + (list.length + 2) * oneBorder + props.tfootSpacing;
            props.bind._data = list;
            props.bind._tip = '';
        }
        //props.height = 365;
    } else {
        props.height = props.theadRowHeight + props.tbodyRowHeight + Const['@:{const#to.unit}'](3) + props.tfootSpacing;
        props.width = Const['@:{const#to.unit}'](TableConsts["@:{default.empty.width}"]) * scale;
    }
};
let apiDataCache = new Cache();
export default Designer.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
        let updateSize = this['@:{debounce}'](e => {
            //console.log(e);
            if (!e['@:{types}'] ||
                e['@:{types}']['hod-footer']) {
                let element = this.get('element');
                this['@:{update}'](element);
            }
        }, 20);
        State.on('@:{event#stage.page.change}', updateSize);
        State.on('@:{event#stage.select.element.props.change}', updateSize);
        // State.on('@:{event#stage.scale.change}', updateSize);
        this.on('destroy', () => {
            State.off('@:{event#stage.page.change}', updateSize);
            State.off('@:{event#stage.select.element.props.change}', updateSize);
        });
    },
    '@:{attach.data}'(element) {
        let { props } = element;
        let { bind } = props;
        if (bind.url) {
            let data = apiDataCache.get(bind.url);
            if (data) {
                calcTableSize(props, data.list, data.error);
            } else {
                calcTableSize(props);
                let m = mark(this, '@:{attach.data}');
                let s = new Service();
                s.all({
                    name: '@:{get.by.url}',
                    url: bind.url
                }, (err: { message: string }, bag) => {
                    let list = bag.get('data', []);
                    apiDataCache.set(bind.url, {
                        list,
                        error: err
                    });
                    calcTableSize(props, list, err);
                    let element = this.get('element');
                    if (m()) {
                        if (element.ctrl['@:{update.props}']) {
                            element.ctrl['@:{update.props}'](props);
                        }
                        this.digest({
                            element
                        });
                        State.fire('@:{event#stage.select.element.props.change}', {
                            '@:{ids}': {
                                [element.id]: 1
                            },
                            '@:{types}': {
                                [element.type]: 1
                            },
                            '@:{props}': {
                                '@:{bind}': 1
                            }
                        });
                    }
                });
            }
        } else {
            calcTableSize(props);
        }
    },
    assign(data) {
        this['@:{attach.data}'](data.element);
        BaseDesigner.assign.call(this, data);
    },
    '@:{update}'(element) {
        this['@:{attach.data}'](element);
        BaseDesigner['@:{update}'].call(this, element);
    }
}).static({
    type: 'data-coltable',
    title: '@:{lang#elements.data.coltable}',
    icon: '&#xeb47;',
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{modifier}': Enum['@:{enum#modifier.dheight}'],
    '@:{allowed.to.hod}': {
        root: 1
    },
    '@:{get.props}'(x, y) {
        return {
            alpha: 1,
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            //rotate: 0,
            width: Const['@:{const#to.unit}'](200),
            height: Const['@:{const#to.unit}'](93),
            locked: false,
            cellAlign: 'center',
            tfootSpacing: Const['@:{const#to.unit}'](20),
            theadFontsize: Const['@:{const#to.unit}'](16),
            theadRowHeight: Const['@:{const#to.unit}'](40),
            theadForecolor: '#000000',
            tbodyRowHeight: Const['@:{const#to.unit}'](30),
            tbodyFontsize: Const['@:{const#to.unit}'](14),
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
            columns: {

            }
        }
    },
    props: [{
        tip: '@:{lang#props.x}',
        type: Props["@:{eprops#number}"],
        key: 'x',
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.y}',
        type: Props["@:{eprops#number}"],
        key: 'y',
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }/*, {
        tip: '@:{lang#props.width}',
        type: Props["@:{eprops#label}"],
        key: 'width'
    }*/, {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.bind.fields}',
        key: 'bind',
        type: Props["@:{eprops#bind.field}"],
        json: 1,
        max: -1,
        //'@:{dock.top}': 1,
        '@:{if.show}'() {
            return config('getFieldUrl');
        },
        write(v, props) {
            let columns = props.columns || {};
            let old = { ...columns };
            for (let p in columns) {
                delete columns[p];
            }
            for (let p of v.fields) {
                columns[p.id] = old[p.id] ?? Const['@:{const#to.unit}'](TableConsts["@:{default.cell.width}"]);
            }
            return v;
        }
    }, {
        tip: '@:{lang#props.table.columns.width}',
        key: 'columns',
        type: Props["@:{eprops#column.width}"],
        min: () => Const["@:{const#to.unit}"](20),
        max: () => Const["@:{const#to.unit}"](300),
        '@:{unit.convert}'(props, toUnit) {
            let { columns } = props;
            for (let e in columns) {
                columns[e] = Const['@:{const#unit.to.unit}'](columns[e], toUnit);
            }
        },
        '@:{stage.scale}'(props, step, dest) {
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
                newColumns[p] = Transform["@:{transform#to.show.value}"](values[p]);
            }
            return newColumns;
        },
        write(values) {
            let newColumns = {};
            for (let p in values) {
                newColumns[p] = Transform["@:{transform#to.real.value}"](values[p]);
            }
            return newColumns;
        },
        json: 1,
        //'@:{dock.top}': 1
    }, {
        tip: '@:{lang#props.table.foot.spacing}',
        min: 0,
        key: 'tfootSpacing',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.table.style}',
        type: Props["@:{eprops#table.style}"],
        //'@:{dock.top}': 1,
        write(skin, props) {
            mix(props, skin);
        }
    }, {
        tip: '@:{lang#props.border.color}',
        key: 'bordercolor',
        type: Props["@:{eprops#color}"],
        json: 1
    }, {
        tip: '@:{lang#props.table.cell.align}',
        key: 'cellAlign',
        type: Props["@:{eprops#dropdown}"],
        items: [{
            text: '@:{lang#props.table.cell.align.left}',
            value: 'left'
        }, {
            text: '@:{lang#props.table.cell.align.center}',
            value: 'center'
        }, {
            text: '@:{lang#props.table.cell.align.right}',
            value: 'right'
        }],
        json: 1
    }, {
        tip: '@:{lang#props.table.head.row.height}',
        min: () => Const["@:{const#to.unit}"](25),
        max: () => Const["@:{const#to.unit}"](100),
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        key: 'theadRowHeight',
        type: Props["@:{eprops#number}"],
        '@:{is.scale.and.unit.field}': 1,
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.table.body.row.height}',
        min: () => Const["@:{const#to.unit}"](25),
        max: () => Const["@:{const#to.unit}"](100),
        '@:{is.scale.and.unit.field}': 1,
        key: 'tbodyRowHeight',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.table.head.font.size}',
        min: () => Const["@:{const#to.unit}"](12),
        max: () => Const["@:{const#to.unit}"](100),
        '@:{is.scale.and.unit.field}': 1,
        key: 'theadFontsize',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.forecolor}',
        key: 'theadForecolor',
        type: Props["@:{eprops#color}"],
        json: 1
    }, {
        tip: '@:{lang#props.table.head.row.background}',
        key: 'theadRowBackground',
        type: Props["@:{eprops#color}"],
        clear: true,
        alpha: true,
        json: 1
    }, {
        tip: '@:{lang#props.table.body.font.size}',
        min: () => Const["@:{const#to.unit}"](12),
        max: () => Const["@:{const#to.unit}"](100),
        '@:{is.scale.and.unit.field}': 1,
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        key: 'tbodyFontsize',
        type: Props["@:{eprops#number}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.forecolor}',
        key: 'tbodyForecolor',
        type: Props["@:{eprops#color}"],
        json: 1
    }, {
        tip: '@:{lang#props.table.body.even.row.background}',
        key: 'tbodyEvenRowBackground',
        type: Props["@:{eprops#color}"],
        clear: true,
        alpha: true,
        json: 1
    }, {
        tip: '@:{lang#props.table.body.odd.row.background}',
        key: 'tbodyOddRowBackground',
        type: Props["@:{eprops#color}"],
        clear: true,
        alpha: true,
        json: 1
    }, {
        tip: '@:{lang#props.alpha}',
        key: 'alpha',
        type: Props["@:{eprops#number}"],
        step: 0.1,
        fixed: 1,
        min: 0,
        max: 1,
        json: 1
    }, /*{
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360
    },*/ {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.help}',
        type: Props["@:{eprops#link}"],
        key: 'help'
    }, {
        tip: '@:{lang#props.title}',
        key: 'ename',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.locked}',
        key: 'locked',
        type: Props["@:{eprops#boolean}"],
        free: true,
        json: 1
    }]
});