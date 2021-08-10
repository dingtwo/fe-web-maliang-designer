import Magix from 'magix';
import Const from './const';
let { applyStyle, View, State, config, Cache } = Magix;
applyStyle('@:./shortcuts.less');
let isMac = navigator.userAgent.toLowerCase().includes('macintosh');
/**
 * 把修改按键转成图形(mac系统)或英文描述(其它系统)
 */
let modifiersToGlyphs = {
    '@:{keystroke#delete}': isMac ? '⌦' : 'Delete',
    '@:{keystroke#backspace}': isMac ? '⌫' : 'Backspace',
    '@:{keystroke#command}': '⌘',
    '@:{keystroke#ctrl}': isMac ? '⌃' : 'Ctrl',
    '@:{keystroke#shift}': isMac ? '⇧' : 'Shift',
    '@:{keystroke#alt}': isMac ? '⌥' : 'Alt',
    '@:{keystroke#tab}': isMac ? '⇥' : 'Tab',
    '@:{keystroke#top.arrow}': '↑',
    '@:{keystroke#right.arrow}': '→',
    '@:{keystroke#bottom.arrow}': '↓',
    '@:{keystroke#left.arrow}': '←',
    '@:{keystroke#plus}': '+',
    '@:{keystroke#minus}': '-',
    '@:{keystroke#escape}': isMac ? '⎋' : 'Esc'
};
/**
 * 翻译修改按键
 */
let modifiersToTitle = {
    '@:{keystroke#escape}': 'Escape',
    '@:{keystroke#delete}': 'Delete',
    '@:{keystroke#backspace}': 'Backspace',
    '@:{keystroke#command}': 'Command',
    '@:{keystroke#ctrl}': isMac ? 'Control' : 'Ctrl',
    '@:{keystroke#shift}': 'Shift',
    '@:{keystroke#alt}': isMac ? 'Option' : 'Alt',
    '@:{keystroke#tab}': 'Tab',
    '@:{keystroke#top.arrow}': '上箭头',
    '@:{keystroke#right.arrow}': '右箭头',
    '@:{keystroke#bottom.arrow}': '下箭头',
    '@:{keystroke#left.arrow}': '左箭头',
    '@:{keystroke#plus}': '加号',
    '@:{keystroke#minus}': '减号'
};
let modKey = key => modifiersToGlyphs[key] || key;
let numReg = /^\d+$/;
let keyCache = new Cache();
/**
 * 翻译按键
 * @param k 按键
 */
let translateKey = k => {
    if (keyCache.has(k)) {
        return keyCache.get(k);
    }
    //数字翻译成：数字键x，其它翻译为:按键x，为了更好的语义
    let prefix = numReg.test(k) ? '数字键' : '按键';
    prefix += (modifiersToTitle[k] || k);
    keyCache.set(k, prefix);
    return prefix;
};
/**
 * 生成按键的tooltip
 * @param keys 按键组合
 */
let modTitle = keys => {
    let key = keys.join('~');
    if (keyCache.has(key)) {
        console.log('from cache', key);
        return keyCache.get(key);
    }
    let result = [],
        translated,
        count = keys.length,
        index = 1;
    for (let k of keys) {
        result.push(translateKey(k));
        if (index < count) {
            //生成[x和y] 或 [x、y和z]的格式，更好的语义
            result.push(index == count - 1 ? '和' : '、');
        }
        index++;
    }
    translated = result.join('');
    if (count > 1) {//大于1个按键的，生成(x和y或x、y和z)的组合
        translated += '的组合';
    }
    keyCache.set(key, translated);
    return translated;
};
let toCurrentUnit = src => {
    let unit = State.get('@:{global#stage.unit}');
    return Const['@:{const#unit.step}'](unit) * src + unit;
};
let list = [{
    '@:{ks#keys}': [['@:{keystroke#escape}']],
    '@:{ks#desc}': '取消元素选中或关闭弹窗(弹窗需允许快捷键关闭)'
}, {
    '@:{ks#keys}': [['@:{keystroke#backspace}'], ['@:{keystroke#delete}']],
    '@:{ks#desc}': '删除选中的元素'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'Z']] : []).concat([['@:{keystroke#ctrl}', 'Z']]),
    '@:{ks#desc}': '撤销操作'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', '@:{keystroke#shift}', 'Z'], ['@:{keystroke#command}', 'Y']] : []).concat([['@:{keystroke#ctrl}', '@:{keystroke#shift}', 'Z'], ['@:{keystroke#ctrl}', 'Y']]),
    '@:{ks#desc}': '重做操作'
}, {
    '@:{ks#keys}': [['@:{keystroke#tab}']],
    '@:{ks#desc}': '按z轴从大到小选择编辑区中的元素'
}, {
    '@:{ks#keys}': [['@:{keystroke#shift}', '@:{keystroke#tab}']],
    '@:{ks#desc}': '按z轴从小到大选择编辑区中的元素'
}, {
    '@:{ks#keys}': [['@:{keystroke#alt}']],
    '@:{ks#desc}': '拖动对齐开启或关闭的情况下，按下在拖动过程中可临时关闭或打开拖动对齐和尺寸拖动修改吸附功能。'
}, {
    '@:{ks#keys}': [['@:{keystroke#shift}']],
    '@:{ks#desc}': '拖动改变元素尺寸的情况下，拖拐角的修改点时，按下可等比改变宽高'
}, {
    '@:{ks#keys}': [['@:{keystroke#left.arrow}']],
    '@:{ks#dest.is.fn}': 1,
    '@:{ks#desc}': () => `按下后编辑区选中的元素或辅助线向左移动${toCurrentUnit(Const['@:{const#keyboard.move.step}'])}`
}, {
    '@:{ks#keys}': [['@:{keystroke#shift}', '@:{keystroke#left.arrow}']],
    '@:{ks#dest.is.fn}': 1,
    '@:{ks#desc}': () => `按下后编辑区选中的元素或辅助线向左移动${toCurrentUnit(Const['@:{const#keyboard.with.shift.move.step}'])}`
}, {
    '@:{ks#keys}': [['@:{keystroke#top.arrow}']],
    '@:{ks#dest.is.fn}': 1,
    '@:{ks#desc}': () => `按下后编辑区选中的元素或辅助线向上移动${toCurrentUnit(Const['@:{const#keyboard.move.step}'])}`
}, {
    '@:{ks#keys}': [['@:{keystroke#shift}', '@:{keystroke#top.arrow}']],
    '@:{ks#dest.is.fn}': 1,
    '@:{ks#desc}': () => `按下后编辑区选中的元素或辅助线向上移动${toCurrentUnit(Const['@:{const#keyboard.with.shift.move.step}'])}`
}, {
    '@:{ks#keys}': [['@:{keystroke#right.arrow}']],
    '@:{ks#dest.is.fn}': 1,
    '@:{ks#desc}': () => `按下后编辑区选中的元素或辅助线向右移动${toCurrentUnit(Const['@:{const#keyboard.move.step}'])}`
}, {
    '@:{ks#keys}': [['@:{keystroke#shift}', '@:{keystroke#right.arrow}']],
    '@:{ks#dest.is.fn}': 1,
    '@:{ks#desc}': () => `按下后编辑区选中的元素或辅助线向右移动${toCurrentUnit(Const['@:{const#keyboard.with.shift.move.step}'])}`
}, {
    '@:{ks#keys}': [['@:{keystroke#bottom.arrow}']],
    '@:{ks#dest.is.fn}': 1,
    '@:{ks#desc}': () => `按下后编辑区选中的元素或辅助线向下移动${toCurrentUnit(Const['@:{const#keyboard.move.step}'])}`
}, {
    '@:{ks#keys}': [['@:{keystroke#shift}', '@:{keystroke#bottom.arrow}']],
    '@:{ks#dest.is.fn}': 1,
    '@:{ks#desc}': () => `按下后编辑区选中的元素或辅助线向下移动${toCurrentUnit(Const['@:{const#keyboard.with.shift.move.step}'])}`
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', '@:{keystroke#left.arrow}'], ['@:{keystroke#command}', '@:{keystroke#top.arrow}']] : []).concat([['@:{keystroke#ctrl}', '@:{keystroke#left.arrow}'], ['@:{keystroke#ctrl}', '@:{keystroke#top.arrow}']]),
    '@:{ks#desc}': `只有一个元素选中且支持旋转的情况下，每次按下减少${Const['@:{const#keyboard.rotate.step}']}度`
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', '@:{keystroke#shift}', '@:{keystroke#left.arrow}'], ['@:{keystroke#command}', '@:{keystroke#shift}', '@:{keystroke#top.arrow}']] : []).concat([['@:{keystroke#ctrl}', '@:{keystroke#shift}', '@:{keystroke#left.arrow}'], ['@:{keystroke#ctrl}', '@:{keystroke#shift}', '@:{keystroke#top.arrow}']]),
    '@:{ks#desc}': `只有一个元素选中且支持旋转的情况下，每次按下减少${Const['@:{const#keyboard.with.shift.rotate.step}']}度`
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', '@:{keystroke#right.arrow}'], ['@:{keystroke#command}', '@:{keystroke#bottom.arrow}']] : []).concat([['@:{keystroke#ctrl}', '@:{keystroke#right.arrow}'], ['@:{keystroke#ctrl}', '@:{keystroke#bottom.arrow}']]),
    '@:{ks#desc}': `只有一个元素选中且支持旋转的情况下，每次按下增加${Const['@:{const#keyboard.rotate.step}']}度`
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', '@:{keystroke#shift}', '@:{keystroke#right.arrow}'], ['@:{keystroke#command}', '@:{keystroke#shift}', '@:{keystroke#bottom.arrow}']] : []).concat([['@:{keystroke#ctrl}', '@:{keystroke#shift}', '@:{keystroke#right.arrow}'], ['@:{keystroke#ctrl}', '@:{keystroke#shift}', '@:{keystroke#bottom.arrow}']]),
    '@:{ks#desc}': `只有一个元素选中且支持旋转的情况下，每次按下增加${Const['@:{const#keyboard.with.shift.rotate.step}']}度`
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'A']] : []).concat([['@:{keystroke#ctrl}', 'A']]),
    '@:{ks#desc}': '全选编辑区中的元素或当容器元素格子激活时，全选格子内的元素'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', '@:{keystroke#shift}', 'I']] : []).concat([['@:{keystroke#ctrl}', '@:{keystroke#shift}', 'I']]),
    '@:{ks#desc}': '反选编辑区中的元素或当容器元素格子内元素选中时，反选格子内其它元素'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'C']] : []).concat([['@:{keystroke#ctrl}', 'C']]),
    '@:{ks#desc}': '复制编辑区中选中的元素'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'X']] : []).concat([['@:{keystroke#ctrl}', 'X']]),
    '@:{ks#desc}': '剪切编辑区中选中的元素'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'V']] : []).concat([['@:{keystroke#ctrl}', 'V']]),
    '@:{ks#desc}': '粘贴复制或剪切的元素'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'D']] : []).concat([['@:{keystroke#ctrl}', 'D']]),
    '@:{ks#desc}': '克隆选中的元素'
}];
let canShowContent = Const['@:{const#save.show.stage.content}'],
    hasSaveUrl = config('saveContentUrl');
if (canShowContent ||
    hasSaveUrl) {
    list.push({
        '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'S']] : []).concat([['@:{keystroke#ctrl}', 'S']]),
        '@:{ks#desc}': (hasSaveUrl ? '保存内容' : '显示设计区内容对话框')
    });
    if (canShowContent &&
        hasSaveUrl) {
        list.push({
            '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', '@:{keystroke#shift}', 'S']] : []).concat([['@:{keystroke#ctrl}', '@:{keystroke#shift}', 'S']]),
            '@:{ks#desc}': '显示设计区内容对话框'
        });
    }
}
list.push({
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'P']] : []).concat([['@:{keystroke#ctrl}', 'P']]),
    '@:{ks#desc}': '显示打印页面或对话框'
}, {
    '@:{ks#keys}': [['H']],
    '@:{ks#desc}': '显示或隐藏辅助线'
}, {
    '@:{ks#keys}': [['@:{keystroke#alt}', 'H']],
    '@:{ks#desc}': '清除辅助线'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'H']] : []).concat([['@:{keystroke#ctrl}', 'H']]),
    '@:{ks#desc}': '隐藏或显示标尺'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'G']] : []).concat([['@:{keystroke#ctrl}', 'G'], ['@:{keystroke#shift}', 'G']]),
    '@:{ks#desc}': '组合或取消组合选中的元素'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', 'L']] : []).concat([['@:{keystroke#ctrl}', 'L'], ['@:{keystroke#shift}', 'L']]),
    '@:{ks#desc}': '编辑锁定或取消编辑锁定选中的元素'
}, {
    '@:{ks#keys}': [['T']],
    '@:{ks#desc}': '把选中的元素调整到最顶层级'
}, {
    '@:{ks#keys}': [['U']],
    '@:{ks#desc}': '把选中的元素向上调整一个层级'
}, {
    '@:{ks#keys}': [['D']],
    '@:{ks#desc}': '把选中的元素向下调整一个层级'
}, {
    '@:{ks#keys}': [['B']],
    '@:{ks#desc}': '把选中的元素调整到最底层级'
}, {
    '@:{ks#keys}': [['F']],
    '@:{ks#desc}': '容器格子中的元素选中状态下，按下可聚焦为当前格子'
}, {
    '@:{ks#keys}': [['C']],
    '@:{ks#desc}': '清除编辑区内容'
}, {
    '@:{ks#keys}': [['N']],
    '@:{ks#desc}': '新建编辑区内容'
}, {
    '@:{ks#keys}': [['@:{keystroke#shift}', '/']],
    '@:{ks#desc}': '显示快捷键大全对话框'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', '@:{keystroke#plus}']] : []).concat([['@:{keystroke#ctrl}', '@:{keystroke#plus}']]),
    '@:{ks#desc}': '放大编辑区'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', '@:{keystroke#minus}']] : []).concat([['@:{keystroke#ctrl}', '@:{keystroke#minus}']]),
    '@:{ks#desc}': '缩小编辑区'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}', '0']] : []).concat([['@:{keystroke#ctrl}', '0']]),
    '@:{ks#desc}': '恢复编辑区到未缩放状态'
}, {
    '@:{ks#keys}': (isMac ? [['@:{keystroke#command}']] : []).concat([['@:{keystroke#shift}'], ['@:{keystroke#ctrl}']]),
    '@:{ks#desc}': '拉框或点击选择元素的情况下，按下可叠加或取消之前已经选择的元素'
}, {
    '@:{ks#keys}': [['1']],
    '@:{ks#desc}': '打开或关闭元素面板'
}, {
    '@:{ks#keys}': [['@:{keystroke#shift}', '1']],
    '@:{ks#desc}': '打开或折叠元素面板的内容'
});
export default View.extend({
    tmpl: '@:./shortcuts.html',
    init() {
        //以下根据不同的环境，比如迷你模式，来决定如何生成数字键的帮助提示
        if (!list['@:{pad.number.panels}']) {
            list['@:{pad.number.panels}'] = 1;
            let mini = State.get('@:{global#provider.of.use.mini}');
            let startNumber = 2,
                n;
            if (!mini) {
                n = startNumber + '';
                list.push({
                    '@:{ks#keys}': [[n]],
                    '@:{ks#desc}': `打开或关闭概览图面板`
                }, {
                    '@:{ks#keys}': [['@:{keystroke#shift}', n]],
                    '@:{ks#desc}': '打开或折叠概览图面板的内容'
                });
                startNumber++;
            }
            n = startNumber + '';
            list.push({
                '@:{ks#keys}': [[n]],
                '@:{ks#desc}': `打开或关闭属性面板`
            }, {
                '@:{ks#keys}': [['@:{keystroke#shift}', n]],
                '@:{ks#desc}': '打开或折叠属性面板的内容'
            });
            startNumber++;
            if (config('getFieldUrl')) {
                n = startNumber + '';
                list.push({
                    '@:{ks#keys}': [[n]],
                    '@:{ks#desc}': `打开或关闭数据源面板`
                }, {
                    '@:{ks#keys}': [['@:{keystroke#shift}', n]],
                    '@:{ks#desc}': '打开或折叠数据源面板的内容'
                });
                startNumber++;
            }
            if (!mini) {
                n = startNumber + '';
                list.push({
                    '@:{ks#keys}': [[n]],
                    '@:{ks#desc}': `打开或关闭历史记录面板`
                }, {
                    '@:{ks#keys}': [['@:{keystroke#shift}', n]],
                    '@:{ks#desc}': '打开或折叠历史记录面板的内容'
                });
                startNumber++;
                n = startNumber + '';
                list.push({
                    '@:{ks#keys}': [[n]],
                    '@:{ks#desc}': `打开或关闭性能面板`
                }, {
                    '@:{ks#keys}': [['@:{keystroke#shift}', n]],
                    '@:{ks#desc}': '打开或折叠性能面板的内容'
                });
                startNumber++;
            }
            n = startNumber + '';
            list.push({
                '@:{ks#keys}': [[n]],
                '@:{ks#desc}': `打开或关闭资源面板`
            }, {
                '@:{ks#keys}': [['@:{keystroke#shift}', n]],
                '@:{ks#desc}': '打开或折叠资源面板的内容'
            });
            startNumber++;
            list.push({
                '@:{ks#keys}': [['@:{keystroke#shift}', 'Z']],
                '@:{ks#desc}': `打开或关闭所有可拖动的面板，即数字1-${startNumber - 1}键对应的面板`
            });
        }
    },
    render() {
        this.digest({
            list,
            help: config('helpUrl'),
            modTitle,
            modKey
        });
    }
}).static({
    '@:{show}'(owner) {
        if (!this['@:{shown}']) {
            this['@:{shown}'] = 1;
            owner.mxDialog('@:./shortcuts', {
                width: 1000
            }).whenClose(() => {
                delete this['@:{shown}'];
            });
        }
    }
});