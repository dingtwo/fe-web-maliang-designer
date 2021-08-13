/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/page/designer",["5c","../../5b/5e","../../5b/6c"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let props_1 = require("../../5b/6c");
let { config } = magix_1;
let emptySize = '400x500'; //选择为空时的默认尺寸
let { round } = Math;
module.exports= {
    title: 'qu',
    '_m2'() {
        let size = const_1["mh"] + 'x' + const_1["mi"];
        return {
            width: const_1['l3'](const_1["mh"]),
            height: const_1['l3'](const_1["mi"]),
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
            unit: magix_1.State.get('l4'),
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
            snapElement: const_1['mn'] ? true : false,
            pages: 1,
            title: ''
        };
    },
    props: [{
            key: 'readonly',
            json: 1
        }, {
            tip: 'qv',
            key: 'unit',
            type: props_1['l9'],
            items: [{
                    text: 'qw',
                    value: 'mm'
                }, {
                    text: 'qx',
                    value: 'cm'
                }, {
                    text: 'qy',
                    value: 'px'
                }, {
                    text: 'qz',
                    value: 'pt'
                }, {
                    text: 'qA',
                    value: 'in'
                }, {
                    text: 'qB',
                    value: 'pc'
                }, {
                    text: 'qC',
                    value: 'q'
                }],
            disabled: const_1['mG'] ? false : true
        }, {
            tip: 'nR',
            key: 'width',
            type: props_1["l2"],
            min: 0,
            max: () => const_1['l3'](const_1['mj']),
            step: const_1["mH"],
            fixed: const_1["mI"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            type: props_1["l2"],
            min: 0,
            max: () => const_1['l3'](const_1['mk']),
            step: const_1["mH"],
            fixed: const_1["mI"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'qD',
            key: 'pages',
            type: props_1["l2"],
            min: 1,
            max: 5,
            json: 1
        }, {
            tip: 'qE',
            type: props_1["l9"],
            key: 'paper',
            items: [{
                    text: 'qF',
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
                return `${round(const_1['mM'](width))}x${round(const_1['mM'](height))}`;
            },
            write(v, props) {
                if (!v) {
                    v = emptySize;
                }
                if (v) {
                    let [width, height] = v.split('x');
                    props.width = const_1['l3'](width | 0);
                    props.height = const_1['l3'](height | 0);
                }
                return v;
            },
        }, {
            tip: 'qG',
            key: 'xOffset',
            type: props_1["l2"],
            step: const_1["mH"],
            fixed: const_1["mI"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'qH',
            key: 'yOffset',
            type: props_1["l2"],
            step: const_1["mH"],
            fixed: const_1["mI"],
            '_nA': 1,
            json: 1
        },
        {
            type: props_1["ms"],
        }, {
            tip: 'qI',
            key: 'screen',
            type: props_1["l9"],
            items: [{
                    text: 'qF',
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
                return `${round(const_1['mM'](width))}x${round(const_1['mM'](height))}`;
            },
            write(v, props) {
                if (!v) {
                    v = emptySize;
                }
                if (v) {
                    let [width, height] = v.split('x');
                    props.width = const_1['l3'](width | 0);
                    props.height = const_1['l3'](height | 0);
                }
                return v;
            },
        }, {
            tip: 'qJ',
            key: 'scaleType',
            type: props_1["l9"],
            items: [{
                    text: 'qK',
                    value: 'auto'
                }, {
                    text: 'qL',
                    value: 'full'
                }],
        },
        {
            type: props_1["ms"],
        }, {
            tip: 'qM',
            key: 'title',
            type: props_1['ma'],
            json: 1
        }, {
            tip: 'qN',
            key: 'snapElement',
            type: props_1['l4'],
            '_py'() {
                return const_1['mn'];
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
            tip: 'oh',
            key: 'background',
            type: props_1["l3"],
            // '@:{if.show}'(page) {
            //     return !page.grid;
            // },
            json: 1
        }, {
            tip: 'qO',
            //dockTop: true,
            key: 'backgroundImage',
            type: props_1["l8"],
            write(v, props, e) {
                props.backgroundWidth = const_1['l3'](e.width);
                props.backgroundHeight = const_1['l3'](e.height);
                if (props.preformat &&
                    v) {
                    props.width = props.backgroundWidth;
                    props.height = props.backgroundHeight;
                }
                return v;
            },
            '_py'() {
                return config('getImageUrl'); // && !page.grid;
            },
            json: 1
        }, {
            tip: 'qP',
            key: 'preformat',
            type: props_1['l4'],
            json: 1,
            write(v, props) {
                if (v) {
                    props.backgroundRepeat = 'no-repeat';
                    props.width = props.backgroundWidth;
                    props.height = props.backgroundHeight;
                }
                return v;
            },
            '_py'(props) {
                return props.backgroundImage;
            }
        }, {
            tip: 'qQ',
            key: 'backgroundRepeat',
            type: props_1["l9"],
            items: [{
                    text: 'qR',
                    value: 'full'
                }, {
                    text: 'qS',
                    value: 'no-repeat'
                }, {
                    text: 'qT',
                    value: 'repeat-x'
                }, {
                    text: 'qU',
                    value: 'repeat-y'
                }, {
                    text: 'qV',
                    value: 'repeat'
                }],
            '_py'(page) {
                return page.backgroundImage && !page.preformat; //&&!page.grid;
            },
            json: 1
        }, {
            tip: 'qW',
            key: 'backgroundWidth',
            type: props_1["l2"],
            min: 0,
            step: const_1["mH"],
            fixed: const_1["mI"],
            '_nA': 1,
            '_py'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat !== 'full';
                return img && support;
            },
            json: 1
        }, {
            tip: 'qX',
            key: 'backgroundHeight',
            type: props_1["l2"],
            min: 0,
            step: const_1["mH"],
            fixed: const_1["mI"],
            '_nA': 1,
            '_py'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat != 'full';
                return img && support;
            },
            json: 1
        }, {
            tip: 'p8',
            type: props_1["m_"],
            '_py'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat != 'full';
                return img && support;
            }
        }, {
            tip: 'qY',
            key: 'backgroundXOffset',
            type: props_1["l2"],
            min: () => -const_1['l3'](const_1['mj']),
            max: () => const_1['l3'](const_1['mj']),
            step: const_1["mH"],
            fixed: const_1["mI"],
            '_nA': 1,
            '_py'(props) {
                return props.backgroundImage &&
                    props.backgroundRepeat != 'full';
            },
            json: 1
        }, {
            tip: 'qZ',
            key: 'backgroundYOffset',
            type: props_1["l2"],
            '_nA': 1,
            min: () => -const_1['l3'](const_1['mk']),
            max: () => const_1['l3'](const_1['mk']),
            step: const_1["mH"],
            fixed: const_1["mI"],
            '_py'(props) {
                return props.backgroundImage &&
                    props.backgroundRepeat != 'full';
            },
            json: 1
        }]
};

});