/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/map/designer",["../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../normal"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let normal_1 = require("../normal");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/map/dshow"
        });
    }
}).static({
    type: 'map',
    title: '@:{lang#elements.map~rs}',
    icon: '&#xe735;',
    '@:{modifier~rs}': enum_1['@:{enum#modifier.width~rs}'] |
        enum_1['@:{enum#modifier.height~rs}'] |
        enum_1['@:{enum#modifier.icon~rs}'] |
        enum_1['@:{enum#modifier.nomask~rs}'],
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '@:{get.props~rs}'(x, y) {
        return {
            height: const_1['@:{const#to.unit~rs}'](300),
            alpha: 1,
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            //rotate: 0,
            width: const_1['@:{const#to.unit~rs}'](450),
            zoom: 8,
            lat: 30.36081488360812,
            lng: 120.02268238691616,
            locked: false,
            zoomCtrl: true,
            dragging: true,
            doubleClickZoom: true
        };
    },
    props: [{
            tip: '@:{lang#props.x~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'x',
            '@:{is.scale.and.unit.field~rs}': 1,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.y~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'y',
            '@:{is.scale.and.unit.field~rs}': 1,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.width~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'width',
            '@:{is.scale.and.unit.field~rs}': 1,
            min: () => const_1["@:{const#to.unit~rs}"](100),
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.height~rs}',
            key: 'height',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1["@:{eprops#number~rs}"],
            min: () => const_1["@:{const#to.unit~rs}"](100),
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
        {
            tip: '@:{lang#props.alpha~rs}',
            key: 'alpha',
            type: props_1["@:{eprops#number~rs}"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.map.zoom~rs}',
            key: 'zoom',
            type: props_1["@:{eprops#number~rs}"],
            min: 1,
            max: 18,
            json: 1
        }, {
            tip: '@:{lang#props.map.lng~rs}',
            key: 'lng',
            type: props_1["@:{eprops#number~rs}"],
            min: -180,
            max: 180,
            fixed: 4,
            step: 1,
            json: 1
        }, {
            tip: '@:{lang#props.map.lat~rs}',
            key: 'lat',
            type: props_1["@:{eprops#number~rs}"],
            min: -90,
            max: 90,
            fixed: 4,
            step: 1,
            json: 1
        }, {
            tip: '@:{lang#props.map.show.zoom.ctrl~rs}',
            key: 'zoomCtrl',
            type: props_1["@:{eprops#boolean~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.map.dragging~rs}',
            key: 'dragging',
            type: props_1["@:{eprops#boolean~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.map.double.click.zoom~rs}',
            key: 'doubleClickZoom',
            type: props_1["@:{eprops#boolean~rs}"],
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
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