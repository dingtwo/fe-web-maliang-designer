/*
    author:https://github.com/xinglie
*/
import Magix, { State } from 'magix';
import Const from '../../designer/const';
import Props from '../../designer/props';
let { config } = Magix;
let emptySize = '400x500';//选择为空时的默认尺寸
let { round } = Math;
export default {
    title: '@:{lang#elements.page}',
    '@:{get.props}'() {
        let size = Const["@:{const#page.width}"] + 'x' + Const["@:{const#page.height}"];
        return {
            width: Const['@:{const#to.unit}'](Const["@:{const#page.width}"]),
            height: Const['@:{const#to.unit}'](Const["@:{const#page.height}"]),
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
            unit: State.get('@:{global#stage.unit}'),
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
            snapElement: Const['@:{const#page.enable.snap.align.elements}'] ? true : false,
            pages: 1,
            title: ''
        }
    },
    props: [{
        key: 'readonly',
        json: 1
    }, {
        tip: '@:{lang#props.page.unit}',
        key: 'unit',
        type: Props['@:{eprops#dropdown}'],
        items: [{
            text: '@:{lang#unit.human.mm}',
            value: 'mm'
        }, {
            text: '@:{lang#unit.human.cm}',
            value: 'cm'
        }, {
            text: '@:{lang#unit.human.px}',
            value: 'px'
        }, {
            text: '@:{lang#unit.human.pt}',
            value: 'pt'
        }, {
            text: '@:{lang#unit.human.in}',
            value: 'in'
        }, {
            text: '@:{lang#unit.human.pc}',
            value: 'pc'
        }, {
            text: '@:{lang#unit.human.q}',
            value: 'q'
        }],
        disabled: Const['@:{const#unit.allow.change}'] ? false : true
    }, {
        tip: '@:{lang#props.width}',
        key: 'width',
        type: Props["@:{eprops#number}"],
        min: 0,
        max: () => Const['@:{const#to.unit}'](Const['@:{const#page.max.width}']),
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.height}',
        key: 'height',
        type: Props["@:{eprops#number}"],
        min: 0,
        max: () => Const['@:{const#to.unit}'](Const['@:{const#page.max.height}']),
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.pages}',
        key: 'pages',
        type: Props["@:{eprops#number}"],
        min: 1,
        max: 5,
        json: 1
    }, {
        tip: '@:{lang#props.page.paper.size}',
        type: Props["@:{eprops#dropdown}"],
        key: 'paper',
        items: [{
            text: '@:{lang#please.select}',
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
            return `${round(Const['@:{const#to.px}'](width))}x${round(Const['@:{const#to.px}'](height))}`;
        },
        write(v, props) {
            if (!v) {
                v = emptySize;
            }
            if (v) {
                let [width, height] = v.split('x');
                props.width = Const['@:{const#to.unit}'](width | 0);
                props.height = Const['@:{const#to.unit}'](height | 0);
            }
            return v;
        },
    }, {
        tip: '@:{lang#props.x.offset}',
        key: 'xOffset',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.y.offset}',
        key: 'yOffset',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, /*{
        tip: '@:{lang#props.top.margin}',
        key: 'marginTop',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Const["@:{const#to.unit}"],
        write: Const["@:{const#to.px}"],
        min: 0,
        max: Const["@:{const#to.unit}"](100),
        json: 1
    }, {
        tip: '@:{lang#props.right.margin}',
        key: 'marginRight',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Const["@:{const#to.unit}"],
        write: Const["@:{const#to.px}"],
        min: 0,
        max: Const["@:{const#to.unit}"](100),
        json: 1
    }, {
        tip: '@:{lang#props.bottom.margin}',
        key: 'marginBottom',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Const["@:{const#to.unit}"],
        write: Const["@:{const#to.px}"],
        min: 0,
        max: Const["@:{const#to.unit}"](100),
        json: 1
    }, {
        tip: '@:{lang#props.left.margin}',
        key: 'marginLeft',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Const["@:{const#to.unit}"],
        write: Const["@:{const#to.px}"],
        min: 0,
        max: Const["@:{const#to.unit}"](100),
        json: 1
    },*/ {
        type: Props["@:{eprops#spliter}"],
    }, {
        tip: '@:{lang#props.screen.size}',
        key: 'screen',
        type: Props["@:{eprops#dropdown}"],
        items: [{
            text: '@:{lang#please.select}',
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
            return `${round(Const['@:{const#to.px}'](width))}x${round(Const['@:{const#to.px}'](height))}`;
        },
        write(v, props) {
            if (!v) {
                v = emptySize;
            }
            if (v) {
                let [width, height] = v.split('x');
                props.width = Const['@:{const#to.unit}'](width | 0);
                props.height = Const['@:{const#to.unit}'](height | 0);
            }
            return v;
        },
    }, {
        tip: '@:{lang#props.page.scale}',
        key: 'scaleType',
        type: Props["@:{eprops#dropdown}"],
        items: [{
            text: '@:{lang#props.scale.auto}',
            value: 'auto'
        }, {
            text: '@:{lang#props.scale.full}',
            value: 'full'
        }],
    },/* {
        type: Props["@:{eprops#spliter}"]
    }, {
        type: Props["@:{page.area}"],
        key: 'areas',
        json: 1
    },*/ {
        type: Props["@:{eprops#spliter}"],
    }, {
        tip: '@:{lang#props.page.title}',
        key: 'title',
        type: Props['@:{eprops#text.input}'],
        json: 1
    }, {
        tip: '@:{lang#props.element.snap}',
        key: 'snapElement',
        type: Props['@:{eprops#boolean}'],
        '@:{if.show}'() {
            return Const['@:{const#page.enable.snap.align.elements}'];
        }
    }/*, {
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
    }*/, {
        tip: '@:{lang#props.background}',
        key: 'background',
        type: Props["@:{eprops#color}"],
        // '@:{if.show}'(page) {
        //     return !page.grid;
        // },
        json: 1
    }, {
        tip: '@:{lang#props.background.image}',
        //dockTop: true,
        key: 'backgroundImage',
        type: Props["@:{eprops#image}"],
        write(v, props, e) {
            props.backgroundWidth = Const['@:{const#to.unit}'](e.width);
            props.backgroundHeight = Const['@:{const#to.unit}'](e.height);
            if (props.preformat &&
                v) {
                props.width = props.backgroundWidth;
                props.height = props.backgroundHeight;
            }
            return v;
        },
        '@:{if.show}'() {
            return config('getImageUrl');// && !page.grid;
        },
        json: 1
    }, {
        tip: '@:{lang#props.preformat}',
        key: 'preformat',
        type: Props['@:{eprops#boolean}'],
        json: 1,
        write(v, props) {
            if (v) {
                props.backgroundRepeat = 'no-repeat';
                props.width = props.backgroundWidth;
                props.height = props.backgroundHeight;
            }
            return v;
        },
        '@:{if.show}'(props) {
            return props.backgroundImage;
        }
    }, {
        tip: '@:{lang#props.background.repeat}',
        key: 'backgroundRepeat',
        type: Props["@:{eprops#dropdown}"],
        items: [{
            text: '@:{lang#props.full}',
            value: 'full'
        }, {
            text: '@:{lang#props.no.repeat}',
            value: 'no-repeat'
        }, {
            text: '@:{lang#props.repeat.x}',
            value: 'repeat-x'
        }, {
            text: '@:{lang#props.repeat.y}',
            value: 'repeat-y'
        }, {
            text: '@:{lang#props.repeat}',
            value: 'repeat'
        }],
        '@:{if.show}'(page) {
            return page.backgroundImage && !page.preformat;//&&!page.grid;
        },
        json: 1
    }, {
        tip: '@:{lang#props.image.width}',
        key: 'backgroundWidth',
        type: Props["@:{eprops#number}"],
        min: 0,
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        '@:{is.scale.and.unit.field}': 1,
        '@:{if.show}'(props) {
            let img = props.backgroundImage;
            let repeat = props.backgroundRepeat;
            let support = repeat !== 'full';
            return img && support;
        },
        json: 1
    }, {
        tip: '@:{lang#props.image.height}',
        key: 'backgroundHeight',
        type: Props["@:{eprops#number}"],
        min: 0,
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        '@:{is.scale.and.unit.field}': 1,
        '@:{if.show}'(props) {
            let img = props.backgroundImage;
            let repeat = props.backgroundRepeat;
            let support = repeat != 'full';
            return img && support;
        },
        json: 1
    }, {
        tip: '@:{lang#props.image.reset}',
        type: Props["@:{eprops#image.reset}"],
        '@:{if.show}'(props) {
            let img = props.backgroundImage;
            let repeat = props.backgroundRepeat;
            let support = repeat != 'full';
            return img && support;
        }
    }, {
        tip: '@:{lang#props.offset.hor}',
        key: 'backgroundXOffset',
        type: Props["@:{eprops#number}"],
        min: () => -Const['@:{const#to.unit}'](Const['@:{const#page.max.width}']),
        max: () => Const['@:{const#to.unit}'](Const['@:{const#page.max.width}']),
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        '@:{is.scale.and.unit.field}': 1,
        '@:{if.show}'(props) {
            return props.backgroundImage &&
                props.backgroundRepeat != 'full';
        },
        json: 1
    }, {
        tip: '@:{lang#props.offset.ver}',
        key: 'backgroundYOffset',
        type: Props["@:{eprops#number}"],
        '@:{is.scale.and.unit.field}': 1,
        min: () => -Const['@:{const#to.unit}'](Const['@:{const#page.max.height}']),
        max: () => Const['@:{const#to.unit}'](Const['@:{const#page.max.height}']),
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        '@:{if.show}'(props) {
            return props.backgroundImage &&
                props.backgroundRepeat != 'full';
        },
        json: 1
    }]
}