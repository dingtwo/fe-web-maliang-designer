/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/const",["magix5","./enum"],(require,exports,module)=>{


let magix_1 = require("magix5");
let enum_1 = require("./enum");
let { State, isArray, isObject } = magix_1;
let { round, pow, abs } = Math;
//趋近0的数，这里认为小数点后7个0即为0
let approachZero = 1e-7;
/**
 * 缩放配置对象，用于标尺的展示
 */
let ScalesMap = {
    'px': {
        '@:{decimals~rs}': 0,
        '0.5': {
            space: 200,
            step: 10 //多长显示一个小刻度
        },
        '1': {
            space: 100,
            step: 10
        },
        '1.5': {
            space: 70,
            step: 10.5
        },
        '2': {
            space: 50,
            step: 10
        },
        '2.5': {
            space: 40,
            step: 10
        },
        '3': {
            space: 35,
            step: 10.5
        },
        '3.5': {
            space: 28,
            step: 9.8
        },
        '4': {
            space: 20,
            step: 8
        }
    },
    'mm': {
        /**
         * space = const.to.px like const.to.px(25)
         * 未缩放的情况下，一个格子占多长，step = space/10*scale;
         * 确定space即可
         */
        '@:{decimals~rs}': 0,
        '0.5': {
            space: 151.2,
            step: 7.56 //多长显示一个小刻度
        },
        '1': {
            space: 75.6,
            step: 7.56
        },
        '1.5': {
            space: 49.14,
            step: 7.371
        },
        '2': {
            space: 37.8,
            step: 7.56
        },
        '2.5': {
            space: 30.24,
            step: 7.56
        },
        '3': {
            space: 26.46,
            step: 7.938
        },
        '3.5': {
            space: 21.168,
            step: 7.4088
        },
        '4': {
            space: 15.12,
            step: 6.048
        }
    },
    'in': {
        '@:{decimals~rs}': 2,
        '0.5': {
            space: 192,
            step: 9.6
        },
        '1': {
            space: 96,
            step: 9.6
        },
        '1.5': {
            space: 67.2,
            step: 10.08
        },
        '2': {
            space: 48,
            step: 9.6
        },
        '2.5': {
            space: 38.4,
            step: 9.6
        },
        '3': {
            space: 33.6,
            step: 10.08
        },
        '3.5': {
            space: 26.88,
            step: 9.408
        },
        '4': {
            space: 19.2,
            step: 7.68
        }
    },
    'pt': {
        '@:{decimals~rs}': 0,
        '0.5': {
            space: 213.28,
            step: 10.664
        },
        '1': {
            space: 106.64,
            step: 10.664
        },
        '1.5': {
            space: 74.648,
            step: 11.1972
        },
        '2': {
            space: 53.32,
            step: 10.664
        },
        '2.5': {
            space: 42.656,
            step: 10.664
        },
        '3': {
            space: 37.324,
            step: 11.1972
        },
        '3.5': {
            space: 29.8592,
            step: 10.45072
        },
        '4': {
            space: 21.328,
            step: 8.5312
        }
    },
    'cm': {
        '@:{decimals~rs}': 1,
        '0.5': {
            space: 151.18,
            step: 7.559 //多长显示一个小刻度
        },
        '1': {
            space: 75.59,
            step: 7.559
        },
        '1.5': {
            space: 52.913,
            step: 7.93695
        },
        '2': {
            space: 37.795,
            step: 7.559
        },
        '2.5': {
            space: 30.236,
            step: 7.559
        },
        '3': {
            space: 26.4565,
            step: 7.93695
        },
        '3.5': {
            space: 21.1652,
            step: 7.40782
        },
        '4': {
            space: 15.118,
            step: 6.0472
        }
    },
    'pc': {
        '@:{decimals~rs}': 1,
        '0.5': {
            space: 160,
            step: 8
        },
        '1': {
            space: 80,
            step: 8
        },
        '1.5': {
            space: 54.4,
            step: 8.16
        },
        '2': {
            space: 40,
            step: 8
        },
        '2.5': {
            space: 32,
            step: 8
        },
        '3': {
            space: 27.2,
            step: 8.16
        },
        '3.5': {
            space: 22.4,
            step: 7.84
        },
        '4': {
            space: 16,
            step: 6.4
        }
    },
    'q': {
        '@:{decimals~rs}': 0,
        '0.5': {
            space: 151.2,
            step: 7.56 //多长显示一个小刻度
        },
        '1': {
            space: 75.6,
            step: 7.56
        },
        '1.5': {
            space: 51.03,
            step: 7.6545
        },
        '2': {
            space: 37.8,
            step: 7.56
        },
        '2.5': {
            space: 30.24,
            step: 7.56
        },
        '3': {
            space: 24.57,
            step: 7.371
        },
        '3.5': {
            space: 18.9,
            step: 6.615
        },
        '4': {
            space: 15.12,
            step: 6.048
        },
    },
};
let unitDecimals = {
    px: 0,
    mm: 2,
    cm: 3,
    pt: 2,
    in: 3,
    pc: 3,
    q: 1,
};
let unitSteps = {
    px: 1,
    mm: 0.2646,
    cm: 0.02646,
    pt: 0.75,
    in: 0.01,
    pc: 0.0625,
    q: 1.1
};
let unitPools = {
    px: {
        '@:{unit-pools#px.to.unit~rs}': 1,
        '@:{unit-pools#unit.to.px~rs}': 1,
        //'@:{unit-pools#aberration}': 0
    }
};
/**
 * 转换成相应的单位数字，避免出现如1.3333333334这样的情况
 * @param v 待处理的数字
 * @param l 小数位
 * @param unit 单位
 * @returns 处理后的数字
 */
// let scaleToUnit = (v, l?, unit?) => {
//     unit = unit || State.get('@:{global#stage.unit}');
//     if (l == null) {
//         l = unitDecimals[unit];
//     }
//     let s = pow(10, l);
//     v *= s;
//     return (round(v) / s);
// };
/**
 * 准备单位转换的规则
 * @param unit 单位
 */
let prepareUnit = unit => {
    if (!unitPools[unit]) { //只处理一次
        if (DEBUG &&
            !unit) { //开发模式下检查传入的unit参数，如果不存在就报错
            throw new Error('unset unit:' + unit);
        }
        let temp = document.createElement('div');
        let enlarge = 1e3; //1000即可，浏览器显示cm或mm单位时有上限，不宜过大
        temp.style.cssText = `width:${enlarge}${unit};position:absolute;left:-${enlarge}${unit};top:-10px`;
        document.body.appendChild(temp);
        let width = temp.clientWidth;
        document.body.removeChild(temp);
        let toUnit = enlarge / width;
        let toPx = width / enlarge;
        unitPools[unit] = {
            '@:{unit-pools#px.to.unit~rs}': toUnit,
            //目标单位转像素，即1unit=?px
            '@:{unit-pools#unit.to.px~rs}': toPx,
            //误差，磁吸时使用
            //'@:{unit-pools#aberration}': enlarge - scaleToUnit(enlarge * toUnit, null, unit) * toPx
        };
    }
};
let toPx = (v, unit) => {
    unit = unit || State.get('@:{global#stage.unit~rs}');
    prepareUnit(unit);
    let dest = unitPools[unit];
    //结果不要转整数，svg的点需要小数，否则显示会不精准
    return v * dest['@:{unit-pools#unit.to.px~rs}'];
};
let unitAberration = (unit) => {
    unit = unit || State.get('@:{global#stage.unit~rs}');
    let decimals = unitDecimals[unit];
    return 1 / pow(10, decimals);
};
let clone = a => {
    if (a) {
        if (isArray(a)) {
            let c = [];
            for (let b of a) {
                c.push(clone(b));
            }
            a = c;
        }
        else if (isObject(a)) {
            let c = {};
            for (let b in a) {
                c[b] = clone(a[b]);
            }
            a = c;
        }
    }
    return a;
};
/**
 * 常量配置表
 */
/**
 * 本项目力求最少的资源承载最复杂的需求，因此性能至高无上
 * 如果像元素投影或拖动吸附对齐等功能不需要，可以关闭以确保性能更优
 * 以下配置项中，//[!]表示会影响性能，如果对性能有更高的要求可以酌情关闭或调小数值
 * !的多少表示对性能的影响，越多表示越有可能影响性能
 */
module.exports= {
    '@:{const#history.max.count~rs}': 50,
    '@:{const#random.examples~rs}': 1,
    '@:{const#save.native.file~rs}': 1,
    '@:{const#save.show.stage.content~rs}': 1,
    '@:{const#shortcuts.dialog.and.help.icon~rs}': 1,
    '@:{const#clear.copy.list.when.cut.action~rs}': 1,
    '@:{const#stage.scale~rs}': 1,
    '@:{const#stage.padding~rs}': [80, 480, 80, 240],
    '@:{const#page.width~rs}': 791,
    '@:{const#page.height~rs}': 1120,
    '@:{const#page.max.width~rs}': 10000,
    '@:{const#page.max.height~rs}': 10000,
    '@:{const#move.near.side.area~rs}': 20,
    '@:{const#move.near.step~rs}': 5,
    //'@:{const#page.enable.snap.grid}': 1,//是否启用吸附网格功能
    '@:{const#page.enable.snap.align.elements~rs}': 1,
    '@:{const#page.follow.snap.align.elements~rs}': enum_1["@:{enum#follow.align.selected~rs}"],
    //对齐点　默认4条线中间点，元素中间点，4个拐角
    '@:{const#align.points~rs}': enum_1["@:{enum#align.centers~rs}"] | enum_1["@:{enum#align.coners~rs}"],
    '@:{const#contextmenu.paste.exactly.source.position~rs}': 0,
    // '@:{const#page.grid.width}': 10,//默认网格宽
    // '@:{const#page.grid.height}': 10,//网格高
    // '@:{const#page.grid.max.width}': 40,//网格最大宽
    // '@:{const#page.grid.max.height}': 40,//最大高
    // '@:{const#page.grid.min.width}': 4,//最小宽
    // '@:{const#page.grid.min.height}': 4,//最小高
    //'@:{const#table.cell.min.size}': 20,//容器格子小尺寸
    '@:{const#axis.size~rs}': 20,
    '@:{const#axis.padding~rs}': 500,
    '@:{const#axis.show.shadow~rs}': 1,
    '@:{const#max.scale~rs}': 4,
    '@:{const#min.scale~rs}': 0.5,
    '@:{const#step.scale~rs}': 0.5,
    '@:{const#new.page.print~rs}': 0,
    '@:{const#keyboard.move.step~rs}': 1,
    '@:{const#keyboard.with.shift.move.step~rs}': 10,
    '@:{const#keyboard.rotate.step~rs}': 1,
    '@:{const#keyboard.with.shift.rotate.step~rs}': 5,
    '@:{const#drag.snap.to.other.element.offset~rs}': 8,
    '@:{const#support.readonly.element~rs}': 1,
    '@:{const#support.panels.hide.when.nearside~rs}': 1,
    '@:{const#element.same.position.offset~rs}': 10,
    //'@:{const#data.source.panel.tree.view}': 1,//数据源面板是否使用树形展示
    '@:{const#element.min.px.size~rs}': 3,
    '@:{const#element.dblclick.interval.ms.time~rs}': 200,
    //常用字体集合
    '@:{const#font.family~rs}': [{
            "value": 'SimSun',
            "text": '@:{lang#font.simsun~rs}'
        }, {
            "value": 'SimHei',
            "text": '@:{lang#font.simhei~rs}'
        }, {
            "value": 'Microsoft YaHei',
            "text": "@:{lang#font.yahei~rs}"
        }, {
            "value": "Microsoft JhengHei",
            "text": "@:{lang#font.jhei~rs}"
        }, {
            "value": "KaiTi",
            "text": "@:{lang#font.kaiti~rs}"
        }, {
            "value": "LiSu",
            "text": "@:{lang#font.lisu~rs}"
        }, {
            "value": "YouYuan",
            "text": "@:{lang#font.youyuan~rs}"
        }, {
            "value": "Arial",
            "text": "Arial"
        }, {
            "value": "Times New Roman",
            "text": "Times New Roman"
        }, {
            "value": "Tahoma",
            "text": "Tahoma"
        }, {
            "value": "webdings",
            "text": "webdings"
        }, {
            "value": "Arial Black",
            "text": "Arial Black"
        }, {
            "value": "Arial Narrow",
            "text": "Arial Narrow"
        }, {
            "value": "Arial Unicode MS",
            "text": "Arial Unicode MS"
        }, {
            "value": "monospace",
            "text": "Monospace"
        }],
    '@:{const#border.types~rs}': [{
            text: '@:{lang#props.border.type.solid~rs}',
            value: 'solid'
        }, {
            text: '@:{lang#props.border.type.dotted~rs}',
            value: 'dotted'
        }, {
            text: '@:{lang#props.border.type.dashed~rs}',
            value: 'dashed'
        }, {
            text: '@:{lang#props.border.type.double~rs}',
            value: 'double'
        }],
    //以下用于切换默认单位，目前默认是mm，仅支持px cm q in mm pt pc这7种
    '@:{const#unit~rs}': 'mm',
    '@:{const#unit.allow.change~rs}': 1,
    '@:{const#unit.step~rs}'(unit) {
        unit = unit || State.get('@:{global#stage.unit~rs}');
        return unitSteps[unit];
    },
    '@:{const#unit.fixed~rs}'(unit) {
        unit = unit || State.get('@:{global#stage.unit~rs}');
        return unitDecimals[unit];
    },
    '@:{const#axis.unit.map~rs}': ScalesMap,
    '@:{const#scale.to.unit~rs}'(v, l, unit) {
        unit = unit || State.get('@:{global#stage.unit~rs}');
        if (l == null) {
            l = unitDecimals[unit];
        }
        let s = pow(10, l);
        v *= s;
        return (round(v) / s);
    },
    '@:{const#to.unit~rs}'(v, unit) {
        //把系统使用的px单位转成相应的需求单位
        unit = unit || State.get('@:{global#stage.unit~rs}');
        prepareUnit(unit);
        let dest = unitPools[unit];
        v *= dest['@:{unit-pools#px.to.unit~rs}'];
        return v;
    },
    '@:{const#approach.zero~rs}': approachZero,
    '@:{const#great.than.or.approach~rs}'(value, anchor) {
        if (value < anchor) {
            return abs(value - anchor) < approachZero;
        }
        return 1;
    },
    '@:{const#approach~rs}'(v1, v2) {
        return abs(v1 - v2) < approachZero;
    },
    // '@:{const#int.approach.unit}'(v: number, unit?: string) {
    //     let c = unitAberration(unit);
    //     let i = v | 0;
    //     let r = v - i;
    //     if (abs(1 - r) < c) {
    //         i++;
    //     }
    //     return i;
    // },
    '@:{const#to.px~rs}': toPx,
    //'@:{const#unit.aberration}': unitAberration,
    // '@:{const#unit.half.step.aberration}'(unit?: string) {
    //     unit = unit || State.get('@:{global#stage.unit}');
    //     return unitSteps[unit] / 2;
    // },
    '@:{const#unit.px.aberration~rs}'(unit) {
        let aberration = toPx(unitAberration(unit));
        if (aberration > 0.5) {
            aberration = 0.5;
        }
        return aberration;
    },
    /**
     * 转换单位
     * @param v 待转换数值
     * @param toUnit 目标单位
     * @param unit 来源单位
     * @returns 转换后的新单位数值
     */
    '@:{const#unit.to.unit~rs}'(v, toUnit, unit) {
        unit = unit || State.get('@:{global#stage.unit~rs}');
        prepareUnit(unit);
        prepareUnit(toUnit);
        let from = unitPools[unit], to = unitPools[toUnit];
        return v * from['@:{unit-pools#unit.to.px~rs}'] * to['@:{unit-pools#px.to.unit~rs}'];
    },
    '@:{const#clone~rs}': clone
};

});