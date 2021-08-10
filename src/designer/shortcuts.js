/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/59",["4e","./4g"],(require,exports,module)=>{
let $quick_dN_0_static_node;
let $quick_dN_4_static_node;
let $quick_dN_1_static_attr={'class': 'rd-dO rd-dP rd-eB rd-eF rd-eG rd-ec rd-ez rd-fL',};
let $quick_dN_2_static_attr={'class': 'rd-dZ',};
let $quick_dN_3_static_attr={'class': 'rd-dS',};
let $quick_dN_6_static_attr={'class': 'rd-eM',};
let $quick_dN_7_static_attr={'class': 'rd-ec rd-ei rd-es rd-gM',};
let $quick_dN_8_static_attr={'class': 'rd-ea rd-ey',};

let magix_1 = require("4e");
let const_1 = require("./4g");
let { applyStyle, View, State, config, Cache } = magix_1;
applyStyle("rd-dK",".rd-gM{border:1px solid #ccc;border-radius:6px;box-shadow:inset 0 -3px 0 #ccc;color:#666;cursor:default;font-family:-apple-system,BlinkMacSystemFont;margin:2px;min-width:32px;padding:1px 10px 3px}.rd-gN{padding-left:14px}.rd-gO{background:#fafafa}.rd-gP{padding:5px 0}.rd-gQ{background-color:#e6e6e6;border-radius:2px;margin:1px 4px;padding:2px}");
let isMac = navigator.userAgent.toLowerCase().includes('macintosh');
/**
 * 把修改按键转成图形(mac系统)或英文描述(其它系统)
 */
let modifiersToGlyphs = {
    'dE': isMac ? '⌦' : 'Delete',
    'dF': isMac ? '⌫' : 'Backspace',
    'dG': '⌘',
    'dH': isMac ? '⌃' : 'Ctrl',
    'dI': isMac ? '⇧' : 'Shift',
    'dJ': isMac ? '⌥' : 'Alt',
    'dK': isMac ? '⇥' : 'Tab',
    'dL': '↑',
    'dM': '→',
    'dN': '↓',
    'dO': '←',
    'dP': '+',
    'dQ': '-',
    'dR': isMac ? '⎋' : 'Esc'
};
/**
 * 翻译修改按键
 */
let modifiersToTitle = {
    'dR': 'Escape',
    'dE': 'Delete',
    'dF': 'Backspace',
    'dG': 'Command',
    'dH': isMac ? 'Control' : 'Ctrl',
    'dI': 'Shift',
    'dJ': isMac ? 'Option' : 'Alt',
    'dK': 'Tab',
    'dL': '上箭头',
    'dM': '右箭头',
    'dN': '下箭头',
    'dO': '左箭头',
    'dP': '加号',
    'dQ': '减号'
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
    let unit = State.get('dG');
    return const_1['ej'](unit) * src + unit;
};
let list = [{
        'dE': [['dR']],
        'dF': '取消元素选中或关闭弹窗(弹窗需允许快捷键关闭)'
    }, {
        'dE': [['dF'], ['dE']],
        'dF': '删除选中的元素'
    }, {
        'dE': (isMac ? [['dG', 'Z']] : []).concat([['dH', 'Z']]),
        'dF': '撤销操作'
    }, {
        'dE': (isMac ? [['dG', 'dI', 'Z'], ['dG', 'Y']] : []).concat([['dH', 'dI', 'Z'], ['dH', 'Y']]),
        'dF': '重做操作'
    }, {
        'dE': [['dK']],
        'dF': '按z轴从大到小选择编辑区中的元素'
    }, {
        'dE': [['dI', 'dK']],
        'dF': '按z轴从小到大选择编辑区中的元素'
    }, {
        'dE': [['dJ']],
        'dF': '拖动对齐开启或关闭的情况下，按下在拖动过程中可临时关闭或打开拖动对齐和尺寸拖动修改吸附功能。'
    }, {
        'dE': [['dI']],
        'dF': '拖动改变元素尺寸的情况下，拖拐角的修改点时，按下可等比改变宽高'
    }, {
        'dE': [['dO']],
        'dG': 1,
        'dF': () => `按下后编辑区选中的元素或辅助线向左移动${toCurrentUnit(const_1['dL'])}`
    }, {
        'dE': [['dI', 'dO']],
        'dG': 1,
        'dF': () => `按下后编辑区选中的元素或辅助线向左移动${toCurrentUnit(const_1['dK'])}`
    }, {
        'dE': [['dL']],
        'dG': 1,
        'dF': () => `按下后编辑区选中的元素或辅助线向上移动${toCurrentUnit(const_1['dL'])}`
    }, {
        'dE': [['dI', 'dL']],
        'dG': 1,
        'dF': () => `按下后编辑区选中的元素或辅助线向上移动${toCurrentUnit(const_1['dK'])}`
    }, {
        'dE': [['dM']],
        'dG': 1,
        'dF': () => `按下后编辑区选中的元素或辅助线向右移动${toCurrentUnit(const_1['dL'])}`
    }, {
        'dE': [['dI', 'dM']],
        'dG': 1,
        'dF': () => `按下后编辑区选中的元素或辅助线向右移动${toCurrentUnit(const_1['dK'])}`
    }, {
        'dE': [['dN']],
        'dG': 1,
        'dF': () => `按下后编辑区选中的元素或辅助线向下移动${toCurrentUnit(const_1['dL'])}`
    }, {
        'dE': [['dI', 'dN']],
        'dG': 1,
        'dF': () => `按下后编辑区选中的元素或辅助线向下移动${toCurrentUnit(const_1['dK'])}`
    }, {
        'dE': (isMac ? [['dG', 'dO'], ['dG', 'dL']] : []).concat([['dH', 'dO'], ['dH', 'dL']]),
        'dF': `只有一个元素选中且支持旋转的情况下，每次按下减少${const_1['d8']}度`
    }, {
        'dE': (isMac ? [['dG', 'dI', 'dO'], ['dG', 'dI', 'dL']] : []).concat([['dH', 'dI', 'dO'], ['dH', 'dI', 'dL']]),
        'dF': `只有一个元素选中且支持旋转的情况下，每次按下减少${const_1['d9']}度`
    }, {
        'dE': (isMac ? [['dG', 'dM'], ['dG', 'dN']] : []).concat([['dH', 'dM'], ['dH', 'dN']]),
        'dF': `只有一个元素选中且支持旋转的情况下，每次按下增加${const_1['d8']}度`
    }, {
        'dE': (isMac ? [['dG', 'dI', 'dM'], ['dG', 'dI', 'dN']] : []).concat([['dH', 'dI', 'dM'], ['dH', 'dI', 'dN']]),
        'dF': `只有一个元素选中且支持旋转的情况下，每次按下增加${const_1['d9']}度`
    }, {
        'dE': (isMac ? [['dG', 'A']] : []).concat([['dH', 'A']]),
        'dF': '全选编辑区中的元素或当容器元素格子激活时，全选格子内的元素'
    }, {
        'dE': (isMac ? [['dG', 'dI', 'I']] : []).concat([['dH', 'dI', 'I']]),
        'dF': '反选编辑区中的元素或当容器元素格子内元素选中时，反选格子内其它元素'
    }, {
        'dE': (isMac ? [['dG', 'C']] : []).concat([['dH', 'C']]),
        'dF': '复制编辑区中选中的元素'
    }, {
        'dE': (isMac ? [['dG', 'X']] : []).concat([['dH', 'X']]),
        'dF': '剪切编辑区中选中的元素'
    }, {
        'dE': (isMac ? [['dG', 'V']] : []).concat([['dH', 'V']]),
        'dF': '粘贴复制或剪切的元素'
    }, {
        'dE': (isMac ? [['dG', 'D']] : []).concat([['dH', 'D']]),
        'dF': '克隆选中的元素'
    }];
let canShowContent = const_1['dP'], hasSaveUrl = config('saveContentUrl');
if (canShowContent ||
    hasSaveUrl) {
    list.push({
        'dE': (isMac ? [['dG', 'S']] : []).concat([['dH', 'S']]),
        'dF': (hasSaveUrl ? '保存内容' : '显示设计区内容对话框')
    });
    if (canShowContent &&
        hasSaveUrl) {
        list.push({
            'dE': (isMac ? [['dG', 'dI', 'S']] : []).concat([['dH', 'dI', 'S']]),
            'dF': '显示设计区内容对话框'
        });
    }
}
list.push({
    'dE': (isMac ? [['dG', 'P']] : []).concat([['dH', 'P']]),
    'dF': '显示打印页面或对话框'
}, {
    'dE': [['H']],
    'dF': '显示或隐藏辅助线'
}, {
    'dE': [['dJ', 'H']],
    'dF': '清除辅助线'
}, {
    'dE': (isMac ? [['dG', 'H']] : []).concat([['dH', 'H']]),
    'dF': '隐藏或显示标尺'
}, {
    'dE': (isMac ? [['dG', 'G']] : []).concat([['dH', 'G'], ['dI', 'G']]),
    'dF': '组合或取消组合选中的元素'
}, {
    'dE': (isMac ? [['dG', 'L']] : []).concat([['dH', 'L'], ['dI', 'L']]),
    'dF': '编辑锁定或取消编辑锁定选中的元素'
}, {
    'dE': [['T']],
    'dF': '把选中的元素调整到最顶层级'
}, {
    'dE': [['U']],
    'dF': '把选中的元素向上调整一个层级'
}, {
    'dE': [['D']],
    'dF': '把选中的元素向下调整一个层级'
}, {
    'dE': [['B']],
    'dF': '把选中的元素调整到最底层级'
}, {
    'dE': [['F']],
    'dF': '容器格子中的元素选中状态下，按下可聚焦为当前格子'
}, {
    'dE': [['C']],
    'dF': '清除编辑区内容'
}, {
    'dE': [['N']],
    'dF': '新建编辑区内容'
}, {
    'dE': [['dI', '/']],
    'dF': '显示快捷键大全对话框'
}, {
    'dE': (isMac ? [['dG', 'dP']] : []).concat([['dH', 'dP']]),
    'dF': '放大编辑区'
}, {
    'dE': (isMac ? [['dG', 'dQ']] : []).concat([['dH', 'dQ']]),
    'dF': '缩小编辑区'
}, {
    'dE': (isMac ? [['dG', '0']] : []).concat([['dH', '0']]),
    'dF': '恢复编辑区到未缩放状态'
}, {
    'dE': (isMac ? [['dG']] : []).concat([['dI'], ['dH']]),
    'dF': '拉框或点击选择元素的情况下，按下可叠加或取消之前已经选择的元素'
}, {
    'dE': [['1']],
    'dF': '打开或关闭元素面板'
}, {
    'dE': [['dI', '1']],
    'dF': '打开或折叠元素面板的内容'
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

if($quick_dN_0_static_node){
$vnode_0=[$quick_dN_0_static_node];
}else{
$vnode_0=[$quick_dN_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-dQ rd-eF rd-fK',})];
}
$vnode_2=[$createVNode(0,(i18n('e7')))];$vnode_1=[$createVNode('h5',$quick_dN_2_static_attr,$vnode_2)];$vnode_2=[$createVNode(0,(i18n('dX'))+'设计方案及元素详细介绍')];$vnode_1.push($createVNode('a',{'class': 'rd-d1 rd-e_','href': (help),'rel': 'noopener noreferrer','target': '_blank',},$vnode_2));$vnode_0.push($createVNode('div',$quick_dN_1_static_attr,$vnode_1));$vnode_1=[];
if($quick_dN_4_static_node){
$vnode_1.push($quick_dN_4_static_node);
}else{
$vnode_2=[$createVNode(0,'<div class="rd-eM rd-fy rd-gN">按键</div><div class="rd-ea rd-ey rd-fy">功能</div>',1)];$vnode_1.push($quick_dN_4_static_node=$createVNode('div',{'_': 'cI','class': 'rd-eB rd-ez rd-gO rd-gP',},$vnode_2));
}

for(let $q_c_ifnwottw=list.length,sti=0;sti<$q_c_ifnwottw;sti+=1){
let st=list[sti];
$vnode_3=[];
for(let $q_a_dzmadlvfhb=st['dE'],$q_c_ealcdmqlu=$q_a_dzmadlvfhb.length,$q_lc_xygom=$q_c_ealcdmqlu-1,ki=0;ki<$q_c_ealcdmqlu;ki+=1){
let keys=$q_a_dzmadlvfhb[ki];let last=ki===$q_lc_xygom;
$vnode_4=[];
for(let $q_c_yrlybkjyf=keys.length,$q_key_vgqpzdi=0;$q_key_vgqpzdi<$q_c_yrlybkjyf;$q_key_vgqpzdi+=1){
let k=keys[$q_key_vgqpzdi];
$vnode_5=[$createVNode(0,(modKey(k)))];$vnode_4.push($createVNode('kbd',$quick_dN_7_static_attr,$vnode_5));
}$vnode_3.push($createVNode('div',{'class': 'rd-es rd-gQ','title': (modTitle(keys)),},$vnode_4));
}$vnode_2=[$createVNode('div',$quick_dN_6_static_attr,$vnode_3)];$text='';if(st['dG']){;$text+=' '+(st['dF']())+' ';}else{;$text+=' '+(st['dF'])+' ';};$vnode_3=[$createVNode(0,$text)];$vnode_2.push($createVNode('div',$quick_dN_8_static_attr,$vnode_3));;$$_class='rd-ez rd-eB rd-gP';if(sti%2){;$$_class+=' rd-gO';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));
}$vnode_0.push($createVNode('div',$quick_dN_3_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        //以下根据不同的环境，比如迷你模式，来决定如何生成数字键的帮助提示
        if (!list['_fD']) {
            list['_fD'] = 1;
            let mini = State.get('dL');
            let startNumber = 2, n;
            if (!mini) {
                n = startNumber + '';
                list.push({
                    'dE': [[n]],
                    'dF': `打开或关闭概览图面板`
                }, {
                    'dE': [['dI', n]],
                    'dF': '打开或折叠概览图面板的内容'
                });
                startNumber++;
            }
            n = startNumber + '';
            list.push({
                'dE': [[n]],
                'dF': `打开或关闭属性面板`
            }, {
                'dE': [['dI', n]],
                'dF': '打开或折叠属性面板的内容'
            });
            startNumber++;
            if (config('getFieldUrl')) {
                n = startNumber + '';
                list.push({
                    'dE': [[n]],
                    'dF': `打开或关闭数据源面板`
                }, {
                    'dE': [['dI', n]],
                    'dF': '打开或折叠数据源面板的内容'
                });
                startNumber++;
            }
            if (!mini) {
                n = startNumber + '';
                list.push({
                    'dE': [[n]],
                    'dF': `打开或关闭历史记录面板`
                }, {
                    'dE': [['dI', n]],
                    'dF': '打开或折叠历史记录面板的内容'
                });
                startNumber++;
                n = startNumber + '';
                list.push({
                    'dE': [[n]],
                    'dF': `打开或关闭性能面板`
                }, {
                    'dE': [['dI', n]],
                    'dF': '打开或折叠性能面板的内容'
                });
                startNumber++;
            }
            n = startNumber + '';
            list.push({
                'dE': [[n]],
                'dF': `打开或关闭资源面板`
            }, {
                'dE': [['dI', n]],
                'dF': '打开或折叠资源面板的内容'
            });
            startNumber++;
            list.push({
                'dE': [['dI', 'Z']],
                'dF': `打开或关闭所有可拖动的面板，即数字1-${startNumber - 1}键对应的面板`
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
    '_ec'(owner) {
        if (!this['_eu']) {
            this['_eu'] = 1;
            owner.mxDialog("4d/59", {
                width: 1000
            }).whenClose(() => {
                delete this['_eu'];
            });
        }
    }
});

});