/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/page/designer",["magix5","../../designer/const","../../designer/props"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let props_1 = require("../../designer/props");
let { config } = magix_1;
let emptySize = '400x500'; //选择为空时的默认尺寸
let { round } = Math;
module.exports= {
    title: '@:{lang#elements.page~rs}',
    '@:{get.props~rs}'() {
        let size = const_1["@:{const#page.width~rs}"] + 'x' + const_1["@:{const#page.height~rs}"];
        return {
            width: const_1['@:{const#to.unit~rs}'](const_1["@:{const#page.width~rs}"]),
            height: const_1['@:{const#to.unit~rs}'](const_1["@:{const#page.height~rs}"]),
            background: '#ffffff',
            backgroundImage: '',
            backgroundRepeat: 'full',
            backgroundWidth: 0,
            backgroundHeight: 0,
            scaleType: 'auto',
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
            preformat: false,
            unit: magix_1.State.get('@:{global#stage.unit~rs}'),
            //grid: false,
            //snapGrid: false,
            readonly: false,
            // gridWidth: Const['@:{const#to.unit}'](Const["@:{const#page.grid.width}"]),
            // gridHeight: Const['@:{const#to.unit}'](Const["@:{const#page.grid.height}"]),
            paper: size,
            screen: size,
            xOffset: 0,
            yOffset: 0,
            backgroundXOffset: 0,
            backgroundYOffset: 0,
            snapElement: const_1['@:{const#page.enable.snap.align.elements~rs}'] ? true : false,
            pages: 1,
            title: ''
        };
    },
    props: [{
            key: 'readonly',
            json: 1
        }, {
            tip: '@:{lang#props.page.unit~rs}',
            key: 'unit',
            type: props_1['@:{eprops#dropdown~rs}'],
            items: [{
                    text: '@:{lang#unit.human.mm~rs}',
                    value: 'mm'
                }, {
                    text: '@:{lang#unit.human.cm~rs}',
                    value: 'cm'
                }, {
                    text: '@:{lang#unit.human.px~rs}',
                    value: 'px'
                }, {
                    text: '@:{lang#unit.human.pt~rs}',
                    value: 'pt'
                }, {
                    text: '@:{lang#unit.human.in~rs}',
                    value: 'in'
                }, {
                    text: '@:{lang#unit.human.pc~rs}',
                    value: 'pc'
                }, {
                    text: '@:{lang#unit.human.q~rs}',
                    value: 'q'
                }],
            disabled: const_1['@:{const#unit.allow.change~rs}'] ? false : true
        }, {
            tip: '@:{lang#props.width~rs}',
            key: 'width',
            type: props_1["@:{eprops#number~rs}"],
            min: 0,
            max: () => const_1['@:{const#to.unit~rs}'](const_1['@:{const#page.max.width~rs}']),
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.height~rs}',
            key: 'height',
            type: props_1["@:{eprops#number~rs}"],
            min: 0,
            max: () => const_1['@:{const#to.unit~rs}'](const_1['@:{const#page.max.height~rs}']),
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.pages~rs}',
            key: 'pages',
            type: props_1["@:{eprops#number~rs}"],
            min: 1,
            max: 5,
            json: 1
        }, {
            tip: '@:{lang#props.page.paper.size~rs}',
            type: props_1["@:{eprops#dropdown~rs}"],
            key: 'paper',
            items: [{
                    text: '@:{lang#please.select~rs}',
                    value: ''
                }, {
                    text: 'A1',
                    value: '2243x3176'
                }, {
                    text: 'A2',
                    value: '1585x2243'
                }, {
                    text: 'A3',
                    value: '1120x1585'
                }, {
                    text: 'A4',
                    value: '791x1120'
                }, {
                    text: 'A5',
                    value: '557x791'
                }, {
                    text: 'A6',
                    value: '394x557'
                }, {
                    text: 'A7',
                    value: '277x394'
                }, {
                    text: 'B1',
                    value: '2670x3777'
                }, {
                    text: 'B2',
                    value: '1887x2680'
                }, {
                    text: 'B3',
                    value: '1332x1887'
                }, {
                    text: 'B4',
                    value: '942x1332'
                }, {
                    text: 'B5',
                    value: '663x942'
                }, {
                    text: 'B6',
                    value: '470x663'
                }, {
                    text: 'B7',
                    value: '330x470'
                }, {
                    text: 'C1',
                    value: '2447x3463'
                }, {
                    text: 'C2',
                    value: '1729x2447'
                }, {
                    text: 'C3',
                    value: '1222x1729'
                }, {
                    text: 'C4',
                    value: '863x1222'
                }, {
                    text: 'C5',
                    value: '610x863'
                }, {
                    text: 'C6',
                    value: '428x610'
                }, {
                    text: 'C7',
                    value: '304x428'
                }],
            read(v) {
                let [width, height] = v.split('x');
                return `${round(const_1['@:{const#to.px~rs}'](width))}x${round(const_1['@:{const#to.px~rs}'](height))}`;
            },
            write(v, props) {
                if (!v) {
                    v = emptySize;
                }
                if (v) {
                    let [width, height] = v.split('x');
                    props.width = const_1['@:{const#to.unit~rs}'](width | 0);
                    props.height = const_1['@:{const#to.unit~rs}'](height | 0);
                }
                return v;
            },
        }, {
            tip: '@:{lang#props.x.offset~rs}',
            key: 'xOffset',
            type: props_1["@:{eprops#number~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.y.offset~rs}',
            key: 'yOffset',
            type: props_1["@:{eprops#number~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        },
        {
            type: props_1["@:{eprops#spliter~rs}"],
        }, {
            tip: '@:{lang#props.screen.size~rs}',
            key: 'screen',
            type: props_1["@:{eprops#dropdown~rs}"],
            items: [{
                    text: '@:{lang#please.select~rs}',
                    value: ''
                }, {
                    text: '1024x600',
                    value: '1024x600'
                }, {
                    text: '1024x768',
                    value: '1024x768'
                }, {
                    text: '1280x1024',
                    value: '1280x1024'
                }, {
                    text: '1600x900',
                    value: '1600x900'
                }, {
                    text: '1440x1550',
                    value: '1440x1550'
                }, {
                    text: '1600x1200',
                    value: '1600x1200'
                }, {
                    text: '1280x800',
                    value: '1280x800'
                }, {
                    text: '1366x768',
                    value: '1366x768'
                }, {
                    text: '1440x900',
                    value: '1440x900'
                }],
            read(v) {
                let [width, height] = v.split('x');
                return `${round(const_1['@:{const#to.px~rs}'](width))}x${round(const_1['@:{const#to.px~rs}'](height))}`;
            },
            write(v, props) {
                if (!v) {
                    v = emptySize;
                }
                if (v) {
                    let [width, height] = v.split('x');
                    props.width = const_1['@:{const#to.unit~rs}'](width | 0);
                    props.height = const_1['@:{const#to.unit~rs}'](height | 0);
                }
                return v;
            },
        }, {
            tip: '@:{lang#props.page.scale~rs}',
            key: 'scaleType',
            type: props_1["@:{eprops#dropdown~rs}"],
            items: [{
                    text: '@:{lang#props.scale.auto~rs}',
                    value: 'auto'
                }, {
                    text: '@:{lang#props.scale.full~rs}',
                    value: 'full'
                }],
        },
        {
            type: props_1["@:{eprops#spliter~rs}"],
        }, {
            tip: '@:{lang#props.page.title~rs}',
            key: 'title',
            type: props_1['@:{eprops#text.input~rs}'],
            json: 1
        }, {
            tip: '@:{lang#props.element.snap~rs}',
            key: 'snapElement',
            type: props_1['@:{eprops#boolean~rs}'],
            '@:{if.show~rs}'() {
                return const_1['@:{const#page.enable.snap.align.elements~rs}'];
            }
        } /*, {
            tip: '@:{lang#props.page.grid}',
            key: 'grid',
            type: Props["@:{eprops#boolean}"],
        }, {
            tip: '@:{lang#props.grid.width}',
            key: 'gridWidth',
            type: Props["@:{eprops#number}"],
            min: () => Const["@:{const#to.unit}"](Const["@:{const#page.grid.min.width}"]),
            max: () => Const["@:{const#to.unit}"](Const["@:{const#page.grid.max.width}"]),
            step: Const["@:{const#unit.step}"],
            fixed: Const["@:{const#unit.fixed}"],
            '@:{if.show}'(page) {
                return page.grid;
            }
        }, {
            tip: '@:{lang#props.grid.height}',
            key: 'gridHeight',
            type: Props["@:{eprops#number}"],
            max: () => Const["@:{const#to.unit}"](Const["@:{const#page.grid.max.height}"]),
            min: () => Const["@:{const#to.unit}"](Const["@:{const#page.grid.min.height}"]),
            step: Const["@:{const#unit.step}"],
            fixed: Const["@:{const#unit.fixed}"],
            '@:{if.show}'(page) {
                return page.grid;
            }
        }, {
            tip: '@:{lang#props.page.snap.grid}',
            key: 'snapGrid',
            type: Props["@:{eprops#boolean}"],
            '@:{if.show}'(page) {
                return page.grid && Const['@:{const#page.enable.snap.grid}'];
            }
        }*/,
        {
            tip: '@:{lang#props.background~rs}',
            key: 'background',
            type: props_1["@:{eprops#color~rs}"],
            // '@:{if.show}'(page) {
            //     return !page.grid;
            // },
            json: 1
        }, {
            tip: '@:{lang#props.background.image~rs}',
            //dockTop: true,
            key: 'backgroundImage',
            type: props_1["@:{eprops#image~rs}"],
            write(v, props, e) {
                props.backgroundWidth = const_1['@:{const#to.unit~rs}'](e.width);
                props.backgroundHeight = const_1['@:{const#to.unit~rs}'](e.height);
                if (props.preformat &&
                    v) {
                    props.width = props.backgroundWidth;
                    props.height = props.backgroundHeight;
                }
                return v;
            },
            '@:{if.show~rs}'() {
                return config('getImageUrl'); // && !page.grid;
            },
            json: 1
        }, {
            tip: '@:{lang#props.preformat~rs}',
            key: 'preformat',
            type: props_1['@:{eprops#boolean~rs}'],
            json: 1,
            write(v, props) {
                if (v) {
                    props.backgroundRepeat = 'no-repeat';
                    props.width = props.backgroundWidth;
                    props.height = props.backgroundHeight;
                }
                return v;
            },
            '@:{if.show~rs}'(props) {
                return props.backgroundImage;
            }
        }, {
            tip: '@:{lang#props.background.repeat~rs}',
            key: 'backgroundRepeat',
            type: props_1["@:{eprops#dropdown~rs}"],
            items: [{
                    text: '@:{lang#props.full~rs}',
                    value: 'full'
                }, {
                    text: '@:{lang#props.no.repeat~rs}',
                    value: 'no-repeat'
                }, {
                    text: '@:{lang#props.repeat.x~rs}',
                    value: 'repeat-x'
                }, {
                    text: '@:{lang#props.repeat.y~rs}',
                    value: 'repeat-y'
                }, {
                    text: '@:{lang#props.repeat~rs}',
                    value: 'repeat'
                }],
            '@:{if.show~rs}'(page) {
                return page.backgroundImage && !page.preformat; //&&!page.grid;
            },
            json: 1
        }, {
            tip: '@:{lang#props.image.width~rs}',
            key: 'backgroundWidth',
            type: props_1["@:{eprops#number~rs}"],
            min: 0,
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            '@:{if.show~rs}'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat !== 'full';
                return img && support;
            },
            json: 1
        }, {
            tip: '@:{lang#props.image.height~rs}',
            key: 'backgroundHeight',
            type: props_1["@:{eprops#number~rs}"],
            min: 0,
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            '@:{if.show~rs}'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat != 'full';
                return img && support;
            },
            json: 1
        }, {
            tip: '@:{lang#props.image.reset~rs}',
            type: props_1["@:{eprops#image.reset~rs}"],
            '@:{if.show~rs}'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat != 'full';
                return img && support;
            }
        }, {
            tip: '@:{lang#props.offset.hor~rs}',
            key: 'backgroundXOffset',
            type: props_1["@:{eprops#number~rs}"],
            min: () => -const_1['@:{const#to.unit~rs}'](const_1['@:{const#page.max.width~rs}']),
            max: () => const_1['@:{const#to.unit~rs}'](const_1['@:{const#page.max.width~rs}']),
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            '@:{if.show~rs}'(props) {
                return props.backgroundImage &&
                    props.backgroundRepeat != 'full';
            },
            json: 1
        }, {
            tip: '@:{lang#props.offset.ver~rs}',
            key: 'backgroundYOffset',
            type: props_1["@:{eprops#number~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            min: () => -const_1['@:{const#to.unit~rs}'](const_1['@:{const#page.max.height~rs}']),
            max: () => const_1['@:{const#to.unit~rs}'](const_1['@:{const#page.max.height~rs}']),
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            '@:{if.show~rs}'(props) {
                return props.backgroundImage &&
                    props.backgroundRepeat != 'full';
            },
            json: 1
        }]
};

});