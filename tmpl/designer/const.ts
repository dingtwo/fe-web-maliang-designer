import Magix from "magix";
import Enum from './enum';
let { State, isArray, isObject } = Magix;
let { round, pow, abs } = Math;
//趋近0的数，这里认为小数点后7个0即为0
let approachZero = 1e-7;
/**
 * 缩放配置对象，用于标尺的展示
 */
let ScalesMap = {
    'px': {
        '@:{decimals}': 0,
        '0.5': {
            space: 200,//多长显示一个带数字的大刻度
            step: 10//多长显示一个小刻度
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
    'mm': {//其它单位算法
        /**
         * space = const.to.px like const.to.px(25)
         * 未缩放的情况下，一个格子占多长，step = space/10*scale;
         * 确定space即可
         */
        '@:{decimals}': 0,
        '0.5': {
            space: 151.2,//多长显示一个带数字的大刻度
            step: 7.56//多长显示一个小刻度
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
        '@:{decimals}': 2,
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
        '@:{decimals}': 0,
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
        '@:{decimals}': 1,
        '0.5': {
            space: 151.18,//多长显示一个带数字的大刻度
            step: 7.559//多长显示一个小刻度
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
        '@:{decimals}': 1,
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
        '@:{decimals}': 0,
        '0.5': {
            space: 151.2,//多长显示一个带数字的大刻度
            step: 7.56//多长显示一个小刻度
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
let unitDecimals = {//单位对应的小数位置，一般来讲越多越准确，但也不益过大
    px: 0,
    mm: 2,
    cm: 3,
    pt: 2,
    in: 3,
    pc: 3,
    q: 1,
};
let unitSteps = {//单位步长，用于数字输入框上下箭头调整时，每按一次变化多少，这里也是1px转成其它单位时，1px能转换成的数字
    px: 1,
    mm: 0.2646,
    cm: 0.02646,
    pt: 0.75,
    in: 0.01,
    pc: 0.0625,
    q: 1.1
};
let unitPools = {//单位转换对象池
    px: {
        '@:{unit-pools#px.to.unit}': 1,
        '@:{unit-pools#unit.to.px}': 1,
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
    if (!unitPools[unit]) {//只处理一次
        if (DEBUG &&
            !unit) {//开发模式下检查传入的unit参数，如果不存在就报错
            throw new Error('unset unit:' + unit);
        }
        let temp = document.createElement('div');
        let enlarge = 1e3;//1000即可，浏览器显示cm或mm单位时有上限，不宜过大
        temp.style.cssText = `width:${enlarge}${unit};position:absolute;left:-${enlarge}${unit};top:-10px`;
        document.body.appendChild(temp);
        let width = temp.clientWidth;
        document.body.removeChild(temp);
        let toUnit = enlarge / width;
        let toPx = width / enlarge;
        unitPools[unit] = {//像素转目标单位，即1px=?目标单位
            '@:{unit-pools#px.to.unit}': toUnit,
            //目标单位转像素，即1unit=?px
            '@:{unit-pools#unit.to.px}': toPx,
            //误差，磁吸时使用
            //'@:{unit-pools#aberration}': enlarge - scaleToUnit(enlarge * toUnit, null, unit) * toPx
        };
    }
};
let toPx = (v, unit?: string) => {//把需求单位转成px
    unit = unit || State.get('@:{global#stage.unit}');
    prepareUnit(unit);
    let dest = unitPools[unit];
    //结果不要转整数，svg的点需要小数，否则显示会不精准
    return v * dest['@:{unit-pools#unit.to.px}'];
};
let unitAberration = (unit?: string) => {
    unit = unit || State.get('@:{global#stage.unit}');
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
        } else if (isObject(a)) {
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
export default {
    '@:{const#history.max.count}': 50,//[!]历史记录最大值，多的则删除
    '@:{const#random.examples}': 1,//进入设计器在配置模板的情况下，是否随机显示一个示例
    '@:{const#save.native.file}': 1,//是否支持从本机保存和读取文件
    '@:{const#save.show.stage.content}': 1,//是否支持显示设计区内容
    '@:{const#shortcuts.dialog.and.help.icon}': 1,//能否使用快捷键对话框和帮助链接
    '@:{const#clear.copy.list.when.cut.action}': 1,//使用剪切时，每次剪切后是否清除剪切板中的复制元素
    '@:{const#stage.scale}': 1,//默认编辑区的缩放，配置的数值为0.5-4之间(包含)，且为0.5的倍数
    '@:{const#stage.padding}': [80, 480, 80, 240],//设计区外围灰色区域
    '@:{const#page.width}': 791,//默认编辑区的宽度
    '@:{const#page.height}': 1120,//默认编辑区的高度
    '@:{const#page.max.width}': 10000,//[!!]最大宽度
    '@:{const#page.max.height}': 10000,//[!!]最大高度
    '@:{const#move.near.side.area}': 20,//拖动时，四边边框响应贴边滚动的尺寸
    '@:{const#move.near.step}': 5,//拖动时，自动滚动步辐
    //'@:{const#page.enable.snap.grid}': 1,//是否启用吸附网格功能
    '@:{const#page.enable.snap.align.elements}': 1,//[!!!]是否启用拖动对齐功能
    '@:{const#page.follow.snap.align.elements}': Enum["@:{enum#follow.align.selected}"],//[!!!!]是否启用跟随吸附对齐
    //对齐点　默认4条线中间点，元素中间点，4个拐角
    '@:{const#align.points}': Enum["@:{enum#align.centers}"] | Enum["@:{enum#align.coners}"],
    '@:{const#contextmenu.paste.exactly.source.position}': 0,//右键粘贴时，是否强制粘贴的位置和鼠标复制时的位置一致
    // '@:{const#page.grid.width}': 10,//默认网格宽
    // '@:{const#page.grid.height}': 10,//网格高
    // '@:{const#page.grid.max.width}': 40,//网格最大宽
    // '@:{const#page.grid.max.height}': 40,//最大高
    // '@:{const#page.grid.min.width}': 4,//最小宽
    // '@:{const#page.grid.min.height}': 4,//最小高
    //'@:{const#table.cell.min.size}': 20,//容器格子小尺寸
    '@:{const#axis.size}': 20,//标尺尺寸，即宽或高
    '@:{const#axis.padding}': 500,//标尺的宽或高度补偿，防止缩放瞬间显示空白
    '@:{const#axis.show.shadow}': 1,//[!!!]标尺上是否显示选中元素的投影
    '@:{const#max.scale}': 4,//最大缩放值，不要超过4
    '@:{const#min.scale}': 0.5,//最小缩放值，不要小于0.5
    '@:{const#step.scale}': 0.5,//每次缩放增加值 0.5的倍数
    '@:{const#new.page.print}': 0,//是否新开页面打印，否则在设计区使用自定义对话框
    '@:{const#keyboard.move.step}': 1,//使用键盘每次移动的距离
    '@:{const#keyboard.with.shift.move.step}': 10,//按下shift时，每次移动的距离
    '@:{const#keyboard.rotate.step}': 1,//使用键盘旋转角度
    '@:{const#keyboard.with.shift.rotate.step}': 5,//按下shift时，每次旋转角度
    '@:{const#drag.snap.to.other.element.offset}': 8,//拖动时，距离其它元素的吸附线小于该值时，则进行吸附
    '@:{const#support.readonly.element}': 1,//[!!!]是否支持只读元素，如果对性能有要求且不需要只读元素，则可以关闭该项
    '@:{const#support.panels.hide.when.nearside}': 1,//面板是否支持贴边隐藏
    '@:{const#element.same.position.offset}': 10,//同位置时偏移量，防止重叠在一起
    //'@:{const#data.source.panel.tree.view}': 1,//数据源面板是否使用树形展示
    '@:{const#element.min.px.size}': 3,//元素对齐时最小尺寸，比如宽度小于3px，则只进行左侧对齐
    '@:{const#element.dblclick.interval.ms.time}': 200,//元素双击间隔毫秒时间
    //常用字体集合
    '@:{const#font.family}': [{
        "value": 'SimSun',
        "text": '@:{lang#font.simsun}'
    }, {
        "value": 'SimHei',
        "text": '@:{lang#font.simhei}'
    }, {
        "value": 'Microsoft YaHei',
        "text": "@:{lang#font.yahei}"
    }, {
        "value": "Microsoft JhengHei",
        "text": "@:{lang#font.jhei}"
    }, {
        "value": "KaiTi",
        "text": "@:{lang#font.kaiti}"
    }, {
        "value": "LiSu",
        "text": "@:{lang#font.lisu}"
    }, {
        "value": "YouYuan",
        "text": "@:{lang#font.youyuan}"
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
    '@:{const#border.types}': [{//边框
        text: '@:{lang#props.border.type.solid}',
        value: 'solid'
    }, {
        text: '@:{lang#props.border.type.dotted}',
        value: 'dotted'
    }, {
        text: '@:{lang#props.border.type.dashed}',
        value: 'dashed'
    }, {
        text: '@:{lang#props.border.type.double}',
        value: 'double'
    }],
    //以下用于切换默认单位，目前默认是mm，仅支持px cm q in mm pt pc这7种
    '@:{const#unit}': 'mm',//默认使用的单位
    '@:{const#unit.allow.change}': 1,//是否支持转换成其它单位
    '@:{const#unit.step}'(unit?: string) {//单位的最小步长，用于属性面板数字控件的调整
        unit = unit || State.get('@:{global#stage.unit}');
        return unitSteps[unit];
    },
    '@:{const#unit.fixed}'(unit?: string) {//小数位，px单位就不使用小数，mm单位可以使用1或2位小数
        unit = unit || State.get('@:{global#stage.unit}');
        return unitDecimals[unit];
    },
    '@:{const#axis.unit.map}': ScalesMap,
    '@:{const#scale.to.unit}'(v: number, l?: number, unit?: string) {
        unit = unit || State.get('@:{global#stage.unit}');
        if (l == null) {
            l = unitDecimals[unit];
        }
        let s = pow(10, l);
        v *= s;
        return (round(v) / s);
    },
    '@:{const#to.unit}'(v: number, unit?: string) {
        //把系统使用的px单位转成相应的需求单位
        unit = unit || State.get('@:{global#stage.unit}');
        prepareUnit(unit);
        let dest = unitPools[unit];
        v *= dest['@:{unit-pools#px.to.unit}'];
        return v;
    },
    '@:{const#approach.zero}': approachZero,
    '@:{const#great.than.or.approach}'(value, anchor) {
        if (value < anchor) {
            return abs(value - anchor) < approachZero;
        }
        return 1;
    },
    '@:{const#approach}'(v1, v2) {
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
    '@:{const#to.px}': toPx, //把需求单位转成px
    //'@:{const#unit.aberration}': unitAberration,
    // '@:{const#unit.half.step.aberration}'(unit?: string) {
    //     unit = unit || State.get('@:{global#stage.unit}');
    //     return unitSteps[unit] / 2;
    // },
    '@:{const#unit.px.aberration}'(unit?: string) {
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
    '@:{const#unit.to.unit}'(v: number, toUnit: string, unit?: string) {
        unit = unit || State.get('@:{global#stage.unit}');
        prepareUnit(unit);
        prepareUnit(toUnit);
        let from = unitPools[unit],
            to = unitPools[toUnit];
        return v * from['@:{unit-pools#unit.to.px}'] * to['@:{unit-pools#px.to.unit}'];
    },
    '@:{const#clone}': clone
};