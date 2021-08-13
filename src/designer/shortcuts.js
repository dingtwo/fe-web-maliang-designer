/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/67",["5c","./5e"],(require,exports,module)=>{
let $quick_ma_0_static_node;
let $quick_ma_4_static_node;
let $quick_ma_1_static_attr={'class': 'rd-m3 rd-m4 rd-mA rd-mX rd-mZ rd-mb rd-mc rd-n9',};
let $quick_ma_2_static_attr={'class': 'rd-mm',};
let $quick_ma_3_static_attr={'class': 'rd-mf',};
let $quick_ma_6_static_attr={'class': 'rd-n_',};
let $quick_ma_7_static_attr={'class': 'rd-mA rd-mG rd-mQ rd-p_',};
let $quick_ma_8_static_attr={'class': 'rd-mW rd-my',};

let magix_1 = require("5c");
let const_1 = require("./5e");
let { applyStyle, View, State, config, Cache } = magix_1;
applyStyle("rd-l8",".rd-p_{border:1px solid #ccc;border-radius:6px;box-shadow:inset 0 -3px 0 #ccc;color:#666;cursor:default;font-family:-apple-system,BlinkMacSystemFont;margin:2px;min-width:32px;padding:1px 10px 3px}.rd-pa{padding-left:14px}.rd-pb{background:#fafafa}.rd-pc{padding:5px 0}.rd-pd{background-color:#e6e6e6;border-radius:2px;margin:1px 4px;padding:2px}");
let isMac = navigator.userAgent.toLowerCase().includes('macintosh');
/**
 * 把修改按键转成图形(mac系统)或英文描述(其它系统)
 */
let modifiersToGlyphs = {
    'l2': isMac ? '⌦' : 'Delete',
    'l3': isMac ? '⌫' : 'Backspace',
    'l4': '⌘',
    'l5': isMac ? '⌃' : 'Ctrl',
    'l6': isMac ? '⇧' : 'Shift',
    'l7': isMac ? '⌥' : 'Alt',
    'l8': isMac ? '⇥' : 'Tab',
    'l9': '↑',
    'm_': '→',
    'ma': '↓',
    'mb': '←',
    'mc': '+',
    'md': '-',
    'me': isMac ? '⎋' : 'Esc'
};
/**
 * 翻译修改按键
 */
let modifiersToTitle = {
    'me': 'Escape',
    'l2': 'Delete',
    'l3': 'Backspace',
    'l4': 'Command',
    'l5': isMac ? 'Control' : 'Ctrl',
    'l6': 'Shift',
    'l7': isMac ? 'Option' : 'Alt',
    'l8': 'Tab',
    'l9': '上箭头',
    'm_': '右箭头',
    'ma': '下箭头',
    'mb': '左箭头',
    'mc': '加号',
    'md': '减号'
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
    let result = [], translated, count = keys.length, index = 1;
    for (let k of keys) {
        result.push(translateKey(k));
        if (index < count) {
            //生成[x和y] 或 [x、y和z]的格式，更好的语义
            result.push(index == count - 1 ? '和' : '、');
        }
        index++;
    }
    translated = result.join('');
    if (count > 1) { //大于1个按键的，生成(x和y或x、y和z)的组合
        translated += '的组合';
    }
    keyCache.set(key, translated);
    return translated;
};
let toCurrentUnit = src => {
    let unit = State.get('l4');
    return const_1['mH'](unit) * src + unit;
};
let list = [{
        'l2': [['me']],
        'l3': '取消元素选中或关闭弹窗(弹窗需允许快捷键关闭)'
    }, {
        'l2': [['l3'], ['l2']],
        'l3': '删除选中的元素'
    }, {
        'l2': (isMac ? [['l4', 'Z']] : []).concat([['l5', 'Z']]),
        'l3': '撤销操作'
    }, {
        'l2': (isMac ? [['l4', 'l6', 'Z'], ['l4', 'Y']] : []).concat([['l5', 'l6', 'Z'], ['l5', 'Y']]),
        'l3': '重做操作'
    }, {
        'l2': [['l8']],
        'l3': '按z轴从大到小选择编辑区中的元素'
    }, {
        'l2': [['l6', 'l8']],
        'l3': '按z轴从小到大选择编辑区中的元素'
    }, {
        'l2': [['l7']],
        'l3': '拖动对齐开启或关闭的情况下，按下在拖动过程中可临时关闭或打开拖动对齐和尺寸拖动修改吸附功能。'
    }, {
        'l2': [['l6']],
        'l3': '拖动改变元素尺寸的情况下，拖拐角的修改点时，按下可等比改变宽高'
    }, {
        'l2': [['mb']],
        'l4': 1,
        'l3': () => `按下后编辑区选中的元素或辅助线向左移动${toCurrentUnit(const_1['l9'])}`
    }, {
        'l2': [['l6', 'mb']],
        'l4': 1,
        'l3': () => `按下后编辑区选中的元素或辅助线向左移动${toCurrentUnit(const_1['l8'])}`
    }, {
        'l2': [['l9']],
        'l4': 1,
        'l3': () => `按下后编辑区选中的元素或辅助线向上移动${toCurrentUnit(const_1['l9'])}`
    }, {
        'l2': [['l6', 'l9']],
        'l4': 1,
        'l3': () => `按下后编辑区选中的元素或辅助线向上移动${toCurrentUnit(const_1['l8'])}`
    }, {
        'l2': [['m_']],
        'l4': 1,
        'l3': () => `按下后编辑区选中的元素或辅助线向右移动${toCurrentUnit(const_1['l9'])}`
    }, {
        'l2': [['l6', 'm_']],
        'l4': 1,
        'l3': () => `按下后编辑区选中的元素或辅助线向右移动${toCurrentUnit(const_1['l8'])}`
    }, {
        'l2': [['ma']],
        'l4': 1,
        'l3': () => `按下后编辑区选中的元素或辅助线向下移动${toCurrentUnit(const_1['l9'])}`
    }, {
        'l2': [['l6', 'ma']],
        'l4': 1,
        'l3': () => `按下后编辑区选中的元素或辅助线向下移动${toCurrentUnit(const_1['l8'])}`
    }, {
        'l2': (isMac ? [['l4', 'mb'], ['l4', 'l9']] : []).concat([['l5', 'mb'], ['l5', 'l9']]),
        'l3': `只有一个元素选中且支持旋转的情况下，每次按下减少${const_1['mv']}度`
    }, {
        'l2': (isMac ? [['l4', 'l6', 'mb'], ['l4', 'l6', 'l9']] : []).concat([['l5', 'l6', 'mb'], ['l5', 'l6', 'l9']]),
        'l3': `只有一个元素选中且支持旋转的情况下，每次按下减少${const_1['mw']}度`
    }, {
        'l2': (isMac ? [['l4', 'm_'], ['l4', 'ma']] : []).concat([['l5', 'm_'], ['l5', 'ma']]),
        'l3': `只有一个元素选中且支持旋转的情况下，每次按下增加${const_1['mv']}度`
    }, {
        'l2': (isMac ? [['l4', 'l6', 'm_'], ['l4', 'l6', 'ma']] : []).concat([['l5', 'l6', 'm_'], ['l5', 'l6', 'ma']]),
        'l3': `只有一个元素选中且支持旋转的情况下，每次按下增加${const_1['mw']}度`
    }, {
        'l2': (isMac ? [['l4', 'A']] : []).concat([['l5', 'A']]),
        'l3': '全选编辑区中的元素或当容器元素格子激活时，全选格子内的元素'
    }, {
        'l2': (isMac ? [['l4', 'l6', 'I']] : []).concat([['l5', 'l6', 'I']]),
        'l3': '反选编辑区中的元素或当容器元素格子内元素选中时，反选格子内其它元素'
    }, {
        'l2': (isMac ? [['l4', 'C']] : []).concat([['l5', 'C']]),
        'l3': '复制编辑区中选中的元素'
    }, {
        'l2': (isMac ? [['l4', 'X']] : []).concat([['l5', 'X']]),
        'l3': '剪切编辑区中选中的元素'
    }, {
        'l2': (isMac ? [['l4', 'V']] : []).concat([['l5', 'V']]),
        'l3': '粘贴复制或剪切的元素'
    }, {
        'l2': (isMac ? [['l4', 'D']] : []).concat([['l5', 'D']]),
        'l3': '克隆选中的元素'
    }];
let canShowContent = const_1['mc'], hasSaveUrl = config('saveContentUrl');
if (canShowContent ||
    hasSaveUrl) {
    list.push({
        'l2': (isMac ? [['l4', 'S']] : []).concat([['l5', 'S']]),
        'l3': (hasSaveUrl ? '保存内容' : '显示设计区内容对话框')
    });
    if (canShowContent &&
        hasSaveUrl) {
        list.push({
            'l2': (isMac ? [['l4', 'l6', 'S']] : []).concat([['l5', 'l6', 'S']]),
            'l3': '显示设计区内容对话框'
        });
    }
}
list.push({
    'l2': (isMac ? [['l4', 'P']] : []).concat([['l5', 'P']]),
    'l3': '显示打印页面或对话框'
}, {
    'l2': [['H']],
    'l3': '显示或隐藏辅助线'
}, {
    'l2': [['l7', 'H']],
    'l3': '清除辅助线'
}, {
    'l2': (isMac ? [['l4', 'H']] : []).concat([['l5', 'H']]),
    'l3': '隐藏或显示标尺'
}, {
    'l2': (isMac ? [['l4', 'G']] : []).concat([['l5', 'G'], ['l6', 'G']]),
    'l3': '组合或取消组合选中的元素'
}, {
    'l2': (isMac ? [['l4', 'L']] : []).concat([['l5', 'L'], ['l6', 'L']]),
    'l3': '编辑锁定或取消编辑锁定选中的元素'
}, {
    'l2': [['T']],
    'l3': '把选中的元素调整到最顶层级'
}, {
    'l2': [['U']],
    'l3': '把选中的元素向上调整一个层级'
}, {
    'l2': [['D']],
    'l3': '把选中的元素向下调整一个层级'
}, {
    'l2': [['B']],
    'l3': '把选中的元素调整到最底层级'
}, {
    'l2': [['F']],
    'l3': '容器格子中的元素选中状态下，按下可聚焦为当前格子'
}, {
    'l2': [['C']],
    'l3': '清除编辑区内容'
}, {
    'l2': [['N']],
    'l3': '新建编辑区内容'
}, {
    'l2': [['l6', '/']],
    'l3': '显示快捷键大全对话框'
}, {
    'l2': (isMac ? [['l4', 'mc']] : []).concat([['l5', 'mc']]),
    'l3': '放大编辑区'
}, {
    'l2': (isMac ? [['l4', 'md']] : []).concat([['l5', 'md']]),
    'l3': '缩小编辑区'
}, {
    'l2': (isMac ? [['l4', '0']] : []).concat([['l5', '0']]),
    'l3': '恢复编辑区到未缩放状态'
}, {
    'l2': (isMac ? [['l4']] : []).concat([['l6'], ['l5']]),
    'l3': '拉框或点击选择元素的情况下，按下可叠加或取消之前已经选择的元素'
}, {
    'l2': [['1']],
    'l3': '打开或关闭元素面板'
}, {
    'l2': [['l6', '1']],
    'l3': '打开或折叠元素面板的内容'
});
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	i18n,
	help,
	list,
	modTitle,
	modKey,}=$dataFromView,
$vnode_2,
$vnode_1,
$$_class,
$vnode_5,
$vnode_4,
$vnode_3,
$text;

if($quick_ma_0_static_node){
$vnode_0=[$quick_ma_0_static_node];
}else{
$vnode_0=[$quick_ma_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-m3 rd-md rd-n8',})];
}
$vnode_2=[$createVNode(0,(i18n('nu')))];$vnode_1=[$createVNode('h5',$quick_ma_2_static_attr,$vnode_2)];$vnode_2=[$createVNode(0,(i18n('mk'))+'设计方案及元素详细介绍')];$vnode_1.push($createVNode('a',{'class': 'rd-mo rd-mx','href': (help),'rel': 'noopener noreferrer','target': '_blank',},$vnode_2));$vnode_0.push($createVNode('div',$quick_ma_1_static_attr,$vnode_1));$vnode_1=[];
if($quick_ma_4_static_node){
$vnode_1.push($quick_ma_4_static_node);
}else{
$vnode_2=[$createVNode(0,'<div class="rd-nW rd-n_ rd-pa">按键</div><div class="rd-mW rd-my rd-nW">功能</div>',1)];$vnode_1.push($quick_ma_4_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mX rd-mZ rd-pb rd-pc',},$vnode_2));
}

for(let $q_c_mksfdwwwfr=list.length,sti=0;sti<$q_c_mksfdwwwfr;sti+=1){
let st=list[sti];
$vnode_3=[];
for(let $q_a_fwyhnqbrtv=st['l2'],$q_c_uuidhcvtau=$q_a_fwyhnqbrtv.length,$q_lc_loypd=$q_c_uuidhcvtau-1,ki=0;ki<$q_c_uuidhcvtau;ki+=1){
let keys=$q_a_fwyhnqbrtv[ki];let last=ki===$q_lc_loypd;
$vnode_4=[];
for(let $q_c_qhrxvxa=keys.length,$q_key_jpfdltoz=0;$q_key_jpfdltoz<$q_c_qhrxvxa;$q_key_jpfdltoz+=1){
let k=keys[$q_key_jpfdltoz];
$vnode_5=[$createVNode(0,(modKey(k)))];$vnode_4.push($createVNode('kbd',$quick_ma_7_static_attr,$vnode_5));
}$vnode_3.push($createVNode('div',{'class': 'rd-mQ rd-pd','title': (modTitle(keys)),},$vnode_4));
}$vnode_2=[$createVNode('div',$quick_ma_6_static_attr,$vnode_3)];$text='';if(st['l4']){;$text+=' '+(st['l3']())+' ';}else{;$text+=' '+(st['l3'])+' ';};$vnode_3=[$createVNode(0,$text)];$vnode_2.push($createVNode('div',$quick_ma_8_static_attr,$vnode_3));;$$_class='rd-mX rd-mZ rd-pc';if(sti%2){;$$_class+=' rd-pb';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));
}$vnode_0.push($createVNode('div',$quick_ma_3_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        //以下根据不同的环境，比如迷你模式，来决定如何生成数字键的帮助提示
        if (!list['_n1']) {
            list['_n1'] = 1;
            let mini = State.get('l9');
            let startNumber = 2, n;
            if (!mini) {
                n = startNumber + '';
                list.push({
                    'l2': [[n]],
                    'l3': `打开或关闭概览图面板`
                }, {
                    'l2': [['l6', n]],
                    'l3': '打开或折叠概览图面板的内容'
                });
                startNumber++;
            }
            n = startNumber + '';
            list.push({
                'l2': [[n]],
                'l3': `打开或关闭属性面板`
            }, {
                'l2': [['l6', n]],
                'l3': '打开或折叠属性面板的内容'
            });
            startNumber++;
            if (config('getFieldUrl')) {
                n = startNumber + '';
                list.push({
                    'l2': [[n]],
                    'l3': `打开或关闭数据源面板`
                }, {
                    'l2': [['l6', n]],
                    'l3': '打开或折叠数据源面板的内容'
                });
                startNumber++;
            }
            if (!mini) {
                n = startNumber + '';
                list.push({
                    'l2': [[n]],
                    'l3': `打开或关闭历史记录面板`
                }, {
                    'l2': [['l6', n]],
                    'l3': '打开或折叠历史记录面板的内容'
                });
                startNumber++;
                n = startNumber + '';
                list.push({
                    'l2': [[n]],
                    'l3': `打开或关闭性能面板`
                }, {
                    'l2': [['l6', n]],
                    'l3': '打开或折叠性能面板的内容'
                });
                startNumber++;
            }
            n = startNumber + '';
            list.push({
                'l2': [[n]],
                'l3': `打开或关闭资源面板`
            }, {
                'l2': [['l6', n]],
                'l3': '打开或折叠资源面板的内容'
            });
            startNumber++;
            list.push({
                'l2': [['l6', 'Z']],
                'l3': `打开或关闭所有可拖动的面板，即数字1-${startNumber - 1}键对应的面板`
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
    '_mA'(owner) {
        if (!this['_mS']) {
            this['_mS'] = 1;
            owner.mxDialog("5b/67", {
                width: 1000
            }).whenClose(() => {
                delete this['_mS'];
            });
        }
    }
});

});