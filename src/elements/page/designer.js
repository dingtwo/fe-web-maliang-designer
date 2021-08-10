/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/page/designer",["4e","../../4d/4g","../../4d/5e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let props_1 = require("../../4d/5e");
let { config } = magix_1;
let emptySize = '400x500'; //选择为空时的默认尺寸
let { round } = Math;
module.exports= {
    title: 'h7',
    '_eE'() {
        let size = const_1["dU"] + 'x' + const_1["dV"];
        return {
            width: const_1['dF'](const_1["dU"]),
            height: const_1['dF'](const_1["dV"]),
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
            unit: magix_1.State.get('dG'),
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
            snapElement: const_1['d0'] ? true : false,
            pages: 1,
            title: ''
        };
    },
    props: [{
            key: 'readonly',
            json: 1
        }, {
            tip: 'h8',
            key: 'unit',
            type: props_1['dL'],
            items: [{
                    text: 'h9',
                    value: 'mm'
                }, {
                    text: 'i_',
                    value: 'cm'
                }, {
                    text: 'ia',
                    value: 'px'
                }, {
                    text: 'ib',
                    value: 'pt'
                }, {
                    text: 'ic',
                    value: 'in'
                }, {
                    text: 'id',
                    value: 'pc'
                }, {
                    text: 'ie',
                    value: 'q'
                }],
            disabled: const_1['ei'] ? false : true
        }, {
            tip: 'ft',
            key: 'width',
            type: props_1["dE"],
            min: 0,
            max: () => const_1['dF'](const_1['dW']),
            step: const_1["ej"],
            fixed: const_1["ek"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fu',
            key: 'height',
            type: props_1["dE"],
            min: 0,
            max: () => const_1['dF'](const_1['dX']),
            step: const_1["ej"],
            fixed: const_1["ek"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'if',
            key: 'pages',
            type: props_1["dE"],
            min: 1,
            max: 5,
            json: 1
        }, {
            tip: 'ig',
            type: props_1["dL"],
            key: 'paper',
            items: [{
                    text: 'ih',
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
                return `${round(const_1['eo'](width))}x${round(const_1['eo'](height))}`;
            },
            write(v, props) {
                if (!v) {
                    v = emptySize;
                }
                if (v) {
                    let [width, height] = v.split('x');
                    props.width = const_1['dF'](width | 0);
                    props.height = const_1['dF'](height | 0);
                }
                return v;
            },
        }, {
            tip: 'ii',
            key: 'xOffset',
            type: props_1["dE"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'ij',
            key: 'yOffset',
            type: props_1["dE"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            '_fc': 1,
            json: 1
        },
        {
            type: props_1["d5"],
        }, {
            tip: 'ik',
            key: 'screen',
            type: props_1["dL"],
            items: [{
                    text: 'ih',
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
                return `${round(const_1['eo'](width))}x${round(const_1['eo'](height))}`;
            },
            write(v, props) {
                if (!v) {
                    v = emptySize;
                }
                if (v) {
                    let [width, height] = v.split('x');
                    props.width = const_1['dF'](width | 0);
                    props.height = const_1['dF'](height | 0);
                }
                return v;
            },
        }, {
            tip: 'il',
            key: 'scaleType',
            type: props_1["dL"],
            items: [{
                    text: 'im',
                    value: 'auto'
                }, {
                    text: 'in',
                    value: 'full'
                }],
        },
        {
            type: props_1["d5"],
        }, {
            tip: 'io',
            key: 'title',
            type: props_1['dN'],
            json: 1
        }, {
            tip: 'ip',
            key: 'snapElement',
            type: props_1['dG'],
            '_ha'() {
                return const_1['d0'];
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
            tip: 'fU',
            key: 'background',
            type: props_1["dF"],
            // '@:{if.show}'(page) {
            //     return !page.grid;
            // },
            json: 1
        }, {
            tip: 'iq',
            //dockTop: true,
            key: 'backgroundImage',
            type: props_1["dK"],
            write(v, props, e) {
                props.backgroundWidth = const_1['dF'](e.width);
                props.backgroundHeight = const_1['dF'](e.height);
                if (props.preformat &&
                    v) {
                    props.width = props.backgroundWidth;
                    props.height = props.backgroundHeight;
                }
                return v;
            },
            '_ha'() {
                return config('getImageUrl'); // && !page.grid;
            },
            json: 1
        }, {
            tip: 'ir',
            key: 'preformat',
            type: props_1['dG'],
            json: 1,
            write(v, props) {
                if (v) {
                    props.backgroundRepeat = 'no-repeat';
                    props.width = props.backgroundWidth;
                    props.height = props.backgroundHeight;
                }
                return v;
            },
            '_ha'(props) {
                return props.backgroundImage;
            }
        }, {
            tip: 'is',
            key: 'backgroundRepeat',
            type: props_1["dL"],
            items: [{
                    text: 'it',
                    value: 'full'
                }, {
                    text: 'iu',
                    value: 'no-repeat'
                }, {
                    text: 'iv',
                    value: 'repeat-x'
                }, {
                    text: 'iw',
                    value: 'repeat-y'
                }, {
                    text: 'ix',
                    value: 'repeat'
                }],
            '_ha'(page) {
                return page.backgroundImage && !page.preformat; //&&!page.grid;
            },
            json: 1
        }, {
            tip: 'iy',
            key: 'backgroundWidth',
            type: props_1["dE"],
            min: 0,
            step: const_1["ej"],
            fixed: const_1["ek"],
            '_fc': 1,
            '_ha'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat !== 'full';
                return img && support;
            },
            json: 1
        }, {
            tip: 'iz',
            key: 'backgroundHeight',
            type: props_1["dE"],
            min: 0,
            step: const_1["ej"],
            fixed: const_1["ek"],
            '_fc': 1,
            '_ha'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat != 'full';
                return img && support;
            },
            json: 1
        }, {
            tip: 'hK',
            type: props_1["dM"],
            '_ha'(props) {
                let img = props.backgroundImage;
                let repeat = props.backgroundRepeat;
                let support = repeat != 'full';
                return img && support;
            }
        }, {
            tip: 'iA',
            key: 'backgroundXOffset',
            type: props_1["dE"],
            min: () => -const_1['dF'](const_1['dW']),
            max: () => const_1['dF'](const_1['dW']),
            step: const_1["ej"],
            fixed: const_1["ek"],
            '_fc': 1,
            '_ha'(props) {
                return props.backgroundImage &&
                    props.backgroundRepeat != 'full';
            },
            json: 1
        }, {
            tip: 'iB',
            key: 'backgroundYOffset',
            type: props_1["dE"],
            '_fc': 1,
            min: () => -const_1['dF'](const_1['dX']),
            max: () => const_1['dF'](const_1['dX']),
            step: const_1["ej"],
            fixed: const_1["ek"],
            '_ha'(props) {
                return props.backgroundImage &&
                    props.backgroundRepeat != 'full';
            },
            json: 1
        }]
};

});