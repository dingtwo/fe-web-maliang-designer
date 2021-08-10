/*
    author:https://github.com/xinglie
*/
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import Designer from '../normal';
export default Designer.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
    }
}).static({
    type: 'map',
    title: '@:{lang#elements.map}',
    icon: '&#xe735;',
    '@:{modifier}': Enum['@:{enum#modifier.width}'] |
        Enum['@:{enum#modifier.height}'] |
        Enum['@:{enum#modifier.icon}'] |
        Enum['@:{enum#modifier.nomask}'],
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{get.props}'(x, y) {
        return {
            height: Const['@:{const#to.unit}'](300),
            alpha: 1,
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            //rotate: 0,
            width: Const['@:{const#to.unit}'](450),
            zoom: 8,
            lat: 30.36081488360812,
            lng: 120.02268238691616,
            locked: false,
            zoomCtrl: true,
            dragging: true,
            doubleClickZoom: true
        }
    },
    props: [{
        tip: '@:{lang#props.x}',
        type: Props["@:{eprops#number}"],
        key: 'x',
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.y}',
        type: Props["@:{eprops#number}"],
        key: 'y',
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.width}',
        type: Props["@:{eprops#number}"],
        key: 'width',
        '@:{is.scale.and.unit.field}': 1,
        min: () => Const["@:{const#to.unit}"](100),
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.height}',
        key: 'height',
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],
        min: () => Const["@:{const#to.unit}"](100),
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }/*, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }*/, {
        tip: '@:{lang#props.alpha}',
        key: 'alpha',
        type: Props["@:{eprops#number}"],
        step: 0.1,
        fixed: 1,
        min: 0,
        max: 1,
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.map.zoom}',
        key: 'zoom',
        type: Props["@:{eprops#number}"],
        min: 1,
        max: 18,
        json: 1
    }, {
        tip: '@:{lang#props.map.lng}',
        key: 'lng',
        type: Props["@:{eprops#number}"],
        min: -180,
        max: 180,
        fixed: 4,
        step: 1,
        json: 1
    }, {
        tip: '@:{lang#props.map.lat}',
        key: 'lat',
        type: Props["@:{eprops#number}"],
        min: -90,
        max: 90,
        fixed: 4,
        step: 1,
        json: 1
    }, {
        tip: '@:{lang#props.map.show.zoom.ctrl}',
        key: 'zoomCtrl',
        type: Props["@:{eprops#boolean}"],
        json: 1
    }, {
        tip: '@:{lang#props.map.dragging}',
        key: 'dragging',
        type: Props["@:{eprops#boolean}"],
        json: 1
    }, {
        tip: '@:{lang#props.map.double.click.zoom}',
        key: 'doubleClickZoom',
        type: Props["@:{eprops#boolean}"],
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"]
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