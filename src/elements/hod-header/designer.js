/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/hod-header/designer",["magix5","../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../normal"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let normal_1 = require("../normal");
let { State } = magix_1;
let transformFields = ['width', 'height', 'borderLeftWidth', 'borderTopWidth', 'borderBottomWidth', 'borderRightWidth'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/hod-header/dshow"
        });
        let update = () => {
            let element = this.get('element');
            let page = State.get('@:{global#stage.page~rs}');
            let scale = State.get('@:{global#stage.scale~rs}');
            let { ctrl, props } = element;
            props.rows[0].cols[0].width = page.width * scale;
            ctrl['@:{update.props~rs}'](props);
        };
        State.on('@:{event#stage.page.change~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#stage.page.change~rs}', update);
        });
    }
}).static({
    type: 'hod-header',
    as: enum_1['@:{enum#as.hod~rs}'],
    title: '@:{lang#elements.print-header~rs}',
    icon: '&#xebd9;',
    '@:{allowed.to.hod~rs}': {
        root: 1
    },
    '@:{modifier~rs}': enum_1['@:{enum#modifier.icon~rs}'] |
        enum_1['@:{enum#modifier.nomask~rs}'],
    '@:{allowed.total.count~rs}': 1,
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '@:{update.props~rs}'(props) {
        //let page = State.get('@:{global#stage.page}');
        //let scale = State.get('@:{global#stage.scale}');
        let { rows } = props;
        let height = 0, width = 0;
        for (let row of rows) {
            let w = 0;
            for (let col of row.cols) {
                w += col.width;
            }
            if (w > width) {
                width = w;
            }
            height += row.height;
        }
        props.width = width;
        props.height = height;
        //props.x = 0;
        //props.y = page.marginTop * scale;
    },
    '@:{get.props~rs}'() {
        let page = State.get('@:{global#stage.page~rs}');
        return {
            x: 0,
            y: 0,
            pinX: true,
            pinY: true,
            help: '//github.com/xinglie/report-designer/issues/12',
            //rotate: 0,
            alpha: 1,
            focusRow: -1,
            focusCol: -1,
            rows: [{
                    height: const_1['@:{const#to.unit~rs}'](40),
                    cols: [{
                            width: page.width,
                            elements: [],
                            borderLeftTopRadius: 0,
                            borderRightTopRadius: 0,
                            borderLeftBottomRadius: 0,
                            borderRightBottomRadius: 0,
                            borderLeftStyle: 'dashed',
                            borderLeftWidth: 0,
                            borderLeftColor: '#cccccc',
                            borderTopStyle: 'dashed',
                            borderTopWidth: 0,
                            borderTopColor: '#cccccc',
                            borderRightStyle: 'dashed',
                            borderRightWidth: 0,
                            borderRightColor: '#cccccc',
                            borderBottomStyle: 'dashed',
                            borderBottomWidth: const_1['@:{const#to.unit~rs}'](1),
                            borderBottomColor: '#cccccc'
                        }]
                }],
            locked: false
        };
    },
    props: [{
            key: 'rows',
            '@:{json.encode~rs}'(dest, { rows }) {
                transform_1['@:{transform#json.encode.cells~rs}'](dest, rows, transformFields);
            },
            '@:{unit.convert~rs}'({ rows }, toUnit) {
                transform_1['@:{transform#unit.convert.cells~rs}'](rows, toUnit, transformFields);
            },
            '@:{stage.scale~rs}'(props, step, dest) {
                transform_1['@:{transform#stage.scale.cells~rs}'](props, step, transformFields, dest);
            }
        }, {
            //tip: '@:{lang#props.x}',
            //type: Props["@:{eprops#label}"],
            key: 'x',
            //read: Transform["@:{transform#to.show.value}"],
            json: 1
        }, {
            //tip: '@:{lang#props.y}',
            //type: Props["@:{eprops#label}"],
            key: 'y',
            //read: Transform["@:{transform#to.show.value}"],
            json: 1
        }, {
            tip: '@:{lang#props.width~rs}',
            key: 'width',
            read: transform_1["@:{transform#to.show.value~rs}"],
            type: props_1["@:{eprops#label~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.height~rs}',
            key: 'height',
            read: transform_1["@:{transform#to.show.value~rs}"],
            type: props_1["@:{eprops#label~rs}"],
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
        }, {
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: '@:{lang#props.cell.size.height~rs}',
            type: props_1["@:{eprops#number~rs}"],
            read(x, props) {
                let row = props.rows[0];
                return transform_1["@:{transform#to.show.value~rs}"](row.height);
            },
            write(x, props) {
                let v = transform_1["@:{transform#to.real.value~rs}"](x);
                props.rows[0].height = v;
            },
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            min: () => const_1["@:{const#to.unit~rs}"](20),
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["@:{eprops#cell.style~rs}"],
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
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