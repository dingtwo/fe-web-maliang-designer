/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import Normal from '../normal';
let { State } = Magix;
let transformFields = ['width', 'height', 'borderLeftWidth', 'borderTopWidth', 'borderBottomWidth', 'borderRightWidth'];
export default Normal.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
        let update = () => {
            let element = this.get('element');
            let page = State.get('@:{global#stage.page}');
            let scale = State.get('@:{global#stage.scale}');
            let { ctrl, props } = element;
            props.rows[0].cols[0].width = page.width * scale;
            ctrl['@:{update.props}'](props);
        };
        State.on('@:{event#stage.page.change}', update);
        this.on('destroy', () => {
            State.off('@:{event#stage.page.change}', update);
        });
    }
}).static({
    type: 'hod-header',
    as: Enum['@:{enum#as.hod}'],
    title: '@:{lang#elements.print-header}',
    icon: '&#xebd9;',
    '@:{allowed.to.hod}': {
        root: 1
    },
    '@:{modifier}': Enum['@:{enum#modifier.icon}'] |
        Enum['@:{enum#modifier.nomask}'],
    '@:{allowed.total.count}': 1,
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{update.props}'(props) {
        //let page = State.get('@:{global#stage.page}');
        //let scale = State.get('@:{global#stage.scale}');
        let { rows } = props;
        let height = 0,
            width = 0;
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
    '@:{get.props}'() {
        let page = State.get('@:{global#stage.page}');
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
                height: Const['@:{const#to.unit}'](40),
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
                    borderBottomWidth: Const['@:{const#to.unit}'](1),
                    borderBottomColor: '#cccccc'
                }]
            }],
            locked: false
        }
    },
    props: [{
        key: 'rows',
        '@:{json.encode}'(dest, { rows }) {
            Transform['@:{transform#json.encode.cells}'](dest, rows, transformFields);
        },
        '@:{unit.convert}'({ rows }, toUnit) {
            Transform['@:{transform#unit.convert.cells}'](rows, toUnit, transformFields);
        },
        '@:{stage.scale}'(props, step, dest) {
            Transform['@:{transform#stage.scale.cells}'](props, step, transformFields, dest);
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
        tip: '@:{lang#props.width}',
        key: 'width',
        read: Transform["@:{transform#to.show.value}"],
        type: Props["@:{eprops#label}"],
        json: 1
    }, {
        tip: '@:{lang#props.height}',
        key: 'height',
        read: Transform["@:{transform#to.show.value}"],
        type: Props["@:{eprops#label}"],
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
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        tip: '@:{lang#props.cell.size.height}',
        type: Props["@:{eprops#number}"],
        read(x, props) {
            let row = props.rows[0];
            return Transform["@:{transform#to.show.value}"](row.height);
        },
        write(x, props) {
            let v = Transform["@:{transform#to.real.value}"](x);
            props.rows[0].height = v;
        },
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        min: () => Const["@:{const#to.unit}"](20),
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        type: Props["@:{eprops#cell.style}"],
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
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