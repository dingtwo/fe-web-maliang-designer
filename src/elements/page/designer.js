/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/page/designer",["51","../../50/53","../../50/61"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let props_1 = require("../../50/61");
let { config } = magix_1;
let emptySize = '400x500'; //选择为空时的默认尺寸
let { round } = Math;
module.exports= {
    title: 'kF',
    '_hd'() {
        let size = const_1["gt"] + 'x' + const_1["gu"];
        return {
            width: const_1['ge'](const_1["gt"]),
            height: const_1['ge'](const_1["gu"]),
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
            unit: magix_1.State.get('gf'),
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
            snapElement: const_1['gz'] ? true : false,
            pages: 1,
            title: ''
        };
    },
    props: [{
            key: 'readonly',
            json: 1
        }, {
            tip: 'kG',
            key: 'unit',
            type: props_1['gk'],
            items: [{
                    text: 'kH',
                    value: 'mm'
                }, {
                    text: 'kI',
                    value: 'cm'
                }, {
                    text: 'kJ',
                    value: 'px'
                }, {
                    text: 'kK',
                    value: 'pt'
                }, {
                    text: 'kL',
                    value: 'in'
                }, {
                    text: 'kM',
                    value: 'pc'
                }, {
                    text: 'kN',
                    value: 'q'
                }],
            disabled: const_1['gS'] ? false : true
        }, {
            tip: 'h3',
            key: 'width',
            type: props_1["gd"],
            min: 0,
            max: () => const_1['ge'](const_1['gv']),
            step: const_1["gT"],
            fixed: const_1["gU"],
            '_hM': 1,
            json: 1
        }, {
            tip: 'h4',
            key: 'height',
            type: props_1["gd"],
            min: 0,
            max: () => const_1['ge'](const_1['gw']),
            step: const_1["gT"],
            fixed: const_1["gU"],
            '_hM': 1,
            json: 1
        }, {
            tip: 'kO',
            key: 'pages',
            type: props_1["gd"],
            min: 1,
            max: 5,
            json: 1
        }, {
            tip: 'kP',
            type: props_1["gk"],
            key: 'paper',
            items: [{
                    text: 'kQ',
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
                return `${round(const_1['gY'](width))}x${round(const_1['gY'](height))}`;
            },
            write(v, props) {
                if (!v) {
                    v = emptySize;
                }
                if (v) {
                    let [width, height] = v.split('x');
                    props.width = const_1['ge'](width | 0);
                    props.height = const_1['ge'](height | 0);
                }
                return v;
            },
        }, {
            tip: 'kR',
            key: 'xOffset',
            type: props_1["gd"],
            step: const_1["gT"],
            fixed: const_1["gU"],
            '_hM': 1,
            json: 1
        }, {
            tip: 'kS',
            key: 'yOffset',
            type: props_1["gd"],
            step: const_1["gT"],
            fixed: const_1["gU"],
            '_hM': 1,
            json: 1
        },
        {
            type: props_1["gE"],
        }, {
            tip: 'kT',
            key: 'screen',
            type: props_1["gk"],
            items: [{
                    text: 'kQ',
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
                return `${round(const_1['gY'](width))}x${round(const_1['gY'](height))}`;
            },
            write(v, props) {
                if (!v) {
                    v = emptySize;
                }
                if (v) {
                    let [width, height] = v.split('x');
                    props.width = const_1['ge'](width | 0);
                    props.height = const_1['ge'](height | 0);
                }
                return v;
            },
        }, {
            tip: 'kU',
            key: 'scaleType',
            type: props_1["gk"],
            items: [{
                    text: 'kV',
                    value: 'auto'
                }, {
                    text: 'kW',
                    value: 'full'
                }],
        },
        {
            type: props_1["gE"],
        }, {
            tip: 'kX',
            key: 'title',
            type: props_1['gm'],
            json: 1
        }, {
            tip: 'kY',
            key: 'snapElement',
            type: props_1['gf'],
            '_jN'() {
                return const_1['gz'];
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
            tip: 'is',
            key: 'background',
            type: props_1["ge"],
            // '@:{if.show}'(page) {
            //     return !page.grid;
            // },
            json: 1
        }, {
            tip: 'kZ',
            //dockTop: true,
            key: 'backgroundImage',
            type: props_1["gj"],
            write(v, props, e) {
                props.backgroundWidth = const_1['ge'](e.width);
                props.backgroundHeight = const_1['ge'](e.height);
                if (props.preformat &&
                    v) {
                    props.width = props.backgroundWidth;
                    props.height = props.backgroundHeight;
                }
                return v;
            },
            '_jN'() {
                return config('getImageUrl'); // && !page.grid;
            },
            json: 1
        }, {
            tip: 'k0',
            key: 'preformat',
            type: props_1['gf'],
            json: 1,
            write(v, props) {
                if (v) {
                    props.backgroundRepeat = 'no-repeat';
                    props.width = props.backgroundWidth;
                    props.height = props.backgroundHeight;
                }
                return v;
            },
            '_jN'(props) {
                return props.backgroundImage;
            }
        }, {
            tip: 'k1',
            key: 'backgroundRepeat',
            type: props_1["gk"],
            items: [{
                    text: 'k2',
                    value: 'full'
                }, {
                    text: 'k3',
                    value: 'no-repeat'
                }, {
                    text: 'k4',
                    value: 'repeat-x'
                }, {
                    text: 'k5',
                    value: 'repeat-y'
                }, {
                    text: 'k6',
                    value: 'repeat'
                }],
            '_jN'(page) {
                return page.backgroundImage && !page.preformat; //&&!page.grid;
            },
            json: 1
        }, {
            tip: 'k7',
            key: 'backgroundWidth',
            type: props_1["gd"],
            min: 0,
            step: const_1["gT"],
            fixed: const_1["gU"],
            '_hM': 1,
            '_jN'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat !== 'full';
                return img && support;
            },
            json: 1
        }, {
            tip: 'k8',
            key: 'backgroundHeight',
            type: props_1["gd"],
            min: 0,
            step: const_1["gT"],
            fixed: const_1["gU"],
            '_hM': 1,
            '_jN'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat != 'full';
                return img && support;
            },
            json: 1
        }, {
            tip: 'ki',
            type: props_1["gl"],
            '_jN'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat != 'full';
                return img && support;
            }
        }, {
            tip: 'k9',
            key: 'backgroundXOffset',
            type: props_1["gd"],
            min: () => -const_1['ge'](const_1['gv']),
            max: () => const_1['ge'](const_1['gv']),
            step: const_1["gT"],
            fixed: const_1["gU"],
            '_hM': 1,
            '_jN'(props) {
                return props.backgroundImage &&
                    props.backgroundRepeat != 'full';
            },
            json: 1
        }, {
            tip: 'l_',
            key: 'backgroundYOffset',
            type: props_1["gd"],
            '_hM': 1,
            min: () => -const_1['ge'](const_1['gw']),
            max: () => const_1['ge'](const_1['gw']),
            step: const_1["gT"],
            fixed: const_1["gU"],
            '_jN'(props) {
                return props.backgroundImage &&
                    props.backgroundRepeat != 'full';
            },
            json: 1
        }]
};

});