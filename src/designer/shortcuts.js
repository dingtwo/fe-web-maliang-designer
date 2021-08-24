/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/5s",["51","./53"],(require,exports,module)=>{
let $quick_gm_0_static_node;
let $quick_gm_4_static_node;
let $quick_gm_1_static_attr={'class': 'rd-g9 rd-gM rd-gn rd-go rd-ha rd-he rd-hf rd-ik',};
let $quick_gm_2_static_attr={'class': 'rd-gy',};
let $quick_gm_3_static_attr={'class': 'rd-gr',};
let $quick_gm_6_static_attr={'class': 'rd-hl',};
let $quick_gm_7_static_attr={'class': 'rd-g2 rd-gM rd-gS rd-jl',};
let $quick_gm_8_static_attr={'class': 'rd-g8 rd-gK',};

let magix_1 = require("51");
let const_1 = require("./53");
let { applyStyle, View, State, config, Cache } = magix_1;
applyStyle("rd-gj",".rd-jl{border:1px solid #ccc;border-radius:6px;box-shadow:inset 0 -3px 0 #ccc;color:#666;cursor:default;font-family:-apple-system,BlinkMacSystemFont;margin:2px;min-width:32px;padding:1px 10px 3px}.rd-jm{padding-left:14px}.rd-jn{background:#fafafa}.rd-jo{padding:5px 0}.rd-jp{background-color:#e6e6e6;border-radius:2px;margin:1px 4px;padding:2px}");
let isMac = navigator.userAgent.toLowerCase().includes('macintosh');
/**
 * 把修改按键转成图形(mac系统)或英文描述(其它系统)
 */
let modifiersToGlyphs = {
    'gd': isMac ? '⌦' : 'Delete',
    'ge': isMac ? '⌫' : 'Backspace',
    'gf': '⌘',
    'gg': isMac ? '⌃' : 'Ctrl',
    'gh': isMac ? '⇧' : 'Shift',
    'gi': isMac ? '⌥' : 'Alt',
    'gj': isMac ? '⇥' : 'Tab',
    'gk': '↑',
    'gl': '→',
    'gm': '↓',
    'gn': '←',
    'go': '+',
    'gp': '-',
    'gq': isMac ? '⎋' : 'Esc'
};
/**
 * 翻译修改按键
 */
let modifiersToTitle = {
    'gq': 'Escape',
    'gd': 'Delete',
    'ge': 'Backspace',
    'gf': 'Command',
    'gg': isMac ? 'Control' : 'Ctrl',
    'gh': 'Shift',
    'gi': isMac ? 'Option' : 'Alt',
    'gj': 'Tab',
    'gk': '上箭头',
    'gl': '右箭头',
    'gm': '下箭头',
    'gn': '左箭头',
    'go': '加号',
    'gp': '减号'
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
    let unit = State.get('gf');
    return const_1['gT'](unit) * src + unit;
};
let list = [{
        'gd': [['gq']],
        'ge': '取消元素选中或关闭弹窗(弹窗需允许快捷键关闭)'
    }, {
        'gd': [['ge'], ['gd']],
        'ge': '删除选中的元素'
    }, {
        'gd': (isMac ? [['gf', 'Z']] : []).concat([['gg', 'Z']]),
        'ge': '撤销操作'
    }, {
        'gd': (isMac ? [['gf', 'gh', 'Z'], ['gf', 'Y']] : []).concat([['gg', 'gh', 'Z'], ['gg', 'Y']]),
        'ge': '重做操作'
    }, {
        'gd': [['gj']],
        'ge': '按z轴从大到小选择编辑区中的元素'
    }, {
        'gd': [['gh', 'gj']],
        'ge': '按z轴从小到大选择编辑区中的元素'
    }, {
        'gd': [['gi']],
        'ge': '拖动对齐开启或关闭的情况下，按下在拖动过程中可临时关闭或打开拖动对齐和尺寸拖动修改吸附功能。'
    }, {
        'gd': [['gh']],
        'ge': '拖动改变元素尺寸的情况下，拖拐角的修改点时，按下可等比改变宽高'
    }, {
        'gd': [['gn']],
        'gf': 1,
        'ge': () => `按下后编辑区选中的元素或辅助线向左移动${toCurrentUnit(const_1['gk'])}`
    }, {
        'gd': [['gh', 'gn']],
        'gf': 1,
        'ge': () => `按下后编辑区选中的元素或辅助线向左移动${toCurrentUnit(const_1['gj'])}`
    }, {
        'gd': [['gk']],
        'gf': 1,
        'ge': () => `按下后编辑区选中的元素或辅助线向上移动${toCurrentUnit(const_1['gk'])}`
    }, {
        'gd': [['gh', 'gk']],
        'gf': 1,
        'ge': () => `按下后编辑区选中的元素或辅助线向上移动${toCurrentUnit(const_1['gj'])}`
    }, {
        'gd': [['gl']],
        'gf': 1,
        'ge': () => `按下后编辑区选中的元素或辅助线向右移动${toCurrentUnit(const_1['gk'])}`
    }, {
        'gd': [['gh', 'gl']],
        'gf': 1,
        'ge': () => `按下后编辑区选中的元素或辅助线向右移动${toCurrentUnit(const_1['gj'])}`
    }, {
        'gd': [['gm']],
        'gf': 1,
        'ge': () => `按下后编辑区选中的元素或辅助线向下移动${toCurrentUnit(const_1['gk'])}`
    }, {
        'gd': [['gh', 'gm']],
        'gf': 1,
        'ge': () => `按下后编辑区选中的元素或辅助线向下移动${toCurrentUnit(const_1['gj'])}`
    }, {
        'gd': (isMac ? [['gf', 'gn'], ['gf', 'gk']] : []).concat([['gg', 'gn'], ['gg', 'gk']]),
        'ge': `只有一个元素选中且支持旋转的情况下，每次按下减少${const_1['gH']}度`
    }, {
        'gd': (isMac ? [['gf', 'gh', 'gn'], ['gf', 'gh', 'gk']] : []).concat([['gg', 'gh', 'gn'], ['gg', 'gh', 'gk']]),
        'ge': `只有一个元素选中且支持旋转的情况下，每次按下减少${const_1['gI']}度`
    }, {
        'gd': (isMac ? [['gf', 'gl'], ['gf', 'gm']] : []).concat([['gg', 'gl'], ['gg', 'gm']]),
        'ge': `只有一个元素选中且支持旋转的情况下，每次按下增加${const_1['gH']}度`
    }, {
        'gd': (isMac ? [['gf', 'gh', 'gl'], ['gf', 'gh', 'gm']] : []).concat([['gg', 'gh', 'gl'], ['gg', 'gh', 'gm']]),
        'ge': `只有一个元素选中且支持旋转的情况下，每次按下增加${const_1['gI']}度`
    }, {
        'gd': (isMac ? [['gf', 'A']] : []).concat([['gg', 'A']]),
        'ge': '全选编辑区中的元素或当容器元素格子激活时，全选格子内的元素'
    }, {
        'gd': (isMac ? [['gf', 'gh', 'I']] : []).concat([['gg', 'gh', 'I']]),
        'ge': '反选编辑区中的元素或当容器元素格子内元素选中时，反选格子内其它元素'
    }, {
        'gd': (isMac ? [['gf', 'C']] : []).concat([['gg', 'C']]),
        'ge': '复制编辑区中选中的元素'
    }, {
        'gd': (isMac ? [['gf', 'X']] : []).concat([['gg', 'X']]),
        'ge': '剪切编辑区中选中的元素'
    }, {
        'gd': (isMac ? [['gf', 'V']] : []).concat([['gg', 'V']]),
        'ge': '粘贴复制或剪切的元素'
    }, {
        'gd': (isMac ? [['gf', 'D']] : []).concat([['gg', 'D']]),
        'ge': '克隆选中的元素'
    }];
let canShowContent = const_1['go'], hasSaveUrl = config('saveContentUrl');
if (canShowContent ||
    hasSaveUrl) {
    list.push({
        'gd': (isMac ? [['gf', 'S']] : []).concat([['gg', 'S']]),
        'ge': (hasSaveUrl ? '保存内容' : '显示设计区内容对话框')
    });
    if (canShowContent &&
        hasSaveUrl) {
        list.push({
            'gd': (isMac ? [['gf', 'gh', 'S']] : []).concat([['gg', 'gh', 'S']]),
            'ge': '显示设计区内容对话框'
        });
    }
}
list.push({
    'gd': (isMac ? [['gf', 'P']] : []).concat([['gg', 'P']]),
    'ge': '显示打印页面或对话框'
}, {
    'gd': [['H']],
    'ge': '显示或隐藏辅助线'
}, {
    'gd': [['gi', 'H']],
    'ge': '清除辅助线'
}, {
    'gd': (isMac ? [['gf', 'H']] : []).concat([['gg', 'H']]),
    'ge': '隐藏或显示标尺'
}, {
    'gd': (isMac ? [['gf', 'G']] : []).concat([['gg', 'G'], ['gh', 'G']]),
    'ge': '组合或取消组合选中的元素'
}, {
    'gd': (isMac ? [['gf', 'L']] : []).concat([['gg', 'L'], ['gh', 'L']]),
    'ge': '编辑锁定或取消编辑锁定选中的元素'
}, {
    'gd': [['T']],
    'ge': '把选中的元素调整到最顶层级'
}, {
    'gd': [['U']],
    'ge': '把选中的元素向上调整一个层级'
}, {
    'gd': [['D']],
    'ge': '把选中的元素向下调整一个层级'
}, {
    'gd': [['B']],
    'ge': '把选中的元素调整到最底层级'
}, {
    'gd': [['F']],
    'ge': '容器格子中的元素选中状态下，按下可聚焦为当前格子'
}, {
    'gd': [['C']],
    'ge': '清除编辑区内容'
}, {
    'gd': [['N']],
    'ge': '新建编辑区内容'
}, {
    'gd': [['gh', '/']],
    'ge': '显示快捷键大全对话框'
}, {
    'gd': (isMac ? [['gf', 'go']] : []).concat([['gg', 'go']]),
    'ge': '放大编辑区'
}, {
    'gd': (isMac ? [['gf', 'gp']] : []).concat([['gg', 'gp']]),
    'ge': '缩小编辑区'
}, {
    'gd': (isMac ? [['gf', '0']] : []).concat([['gg', '0']]),
    'ge': '恢复编辑区到未缩放状态'
}, {
    'gd': (isMac ? [['gf']] : []).concat([['gh'], ['gg']]),
    'ge': '拉框或点击选择元素的情况下，按下可叠加或取消之前已经选择的元素'
}, {
    'gd': [['1']],
    'ge': '打开或关闭元素面板'
}, {
    'gd': [['gh', '1']],
    'ge': '打开或折叠元素面板的内容'
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

if($quick_gm_0_static_node){
$vnode_0=[$quick_gm_0_static_node];
}else{
$vnode_0=[$quick_gm_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gp rd-he rd-ij',})];
}
$vnode_2=[$createVNode(0,(i18n('hG')))];$vnode_1=[$createVNode('h5',$quick_gm_2_static_attr,$vnode_2)];$vnode_2=[$createVNode(0,(i18n('gw'))+'设计方案及元素详细介绍')];$vnode_1.push($createVNode('a',{'class': 'rd-gA rd-gJ','href': (help),'rel': 'noopener noreferrer','target': '_blank',},$vnode_2));$vnode_0.push($createVNode('div',$quick_gm_1_static_attr,$vnode_1));$vnode_1=[];
if($quick_gm_4_static_node){
$vnode_1.push($quick_gm_4_static_node);
}else{
$vnode_2=[$createVNode(0,'<div class="rd-h8 rd-hl rd-jm">按键</div><div class="rd-g8 rd-gK rd-h8">功能</div>',1)];$vnode_1.push($quick_gm_4_static_node=$createVNode('div',{'_': 'eE','class': 'rd-g9 rd-ha rd-jn rd-jo',},$vnode_2));
}

for(let $q_c_ipagbethl=list.length,sti=0;sti<$q_c_ipagbethl;sti+=1){
let st=list[sti];
$vnode_3=[];
for(let $q_a_kyjatwdp=st['gd'],$q_c_spqvasvmu=$q_a_kyjatwdp.length,$q_lc_rumnvinac=$q_c_spqvasvmu-1,ki=0;ki<$q_c_spqvasvmu;ki+=1){
let keys=$q_a_kyjatwdp[ki];let last=ki===$q_lc_rumnvinac;
$vnode_4=[];
for(let $q_c_samrgvuk=keys.length,$q_key_zjsfbrm=0;$q_key_zjsfbrm<$q_c_samrgvuk;$q_key_zjsfbrm+=1){
let k=keys[$q_key_zjsfbrm];
$vnode_5=[$createVNode(0,(modKey(k)))];$vnode_4.push($createVNode('kbd',$quick_gm_7_static_attr,$vnode_5));
}$vnode_3.push($createVNode('div',{'class': 'rd-g2 rd-jp','title': (modTitle(keys)),},$vnode_4));
}$vnode_2=[$createVNode('div',$quick_gm_6_static_attr,$vnode_3)];$text='';if(st['gf']){;$text+=' '+(st['ge']())+' ';}else{;$text+=' '+(st['ge'])+' ';};$vnode_3=[$createVNode(0,$text)];$vnode_2.push($createVNode('div',$quick_gm_8_static_attr,$vnode_3));;$$_class='rd-g9 rd-ha rd-jo';if(sti%2){;$$_class+=' rd-jn';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));
}$vnode_0.push($createVNode('div',$quick_gm_3_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        //以下根据不同的环境，比如迷你模式，来决定如何生成数字键的帮助提示
        if (!list['_if']) {
            list['_if'] = 1;
            let mini = State.get('gk');
            let startNumber = 2, n;
            if (!mini) {
                n = startNumber + '';
                list.push({
                    'gd': [[n]],
                    'ge': `打开或关闭概览图面板`
                }, {
                    'gd': [['gh', n]],
                    'ge': '打开或折叠概览图面板的内容'
                });
                startNumber++;
            }
            n = startNumber + '';
            list.push({
                'gd': [[n]],
                'ge': `打开或关闭属性面板`
            }, {
                'gd': [['gh', n]],
                'ge': '打开或折叠属性面板的内容'
            });
            startNumber++;
            if (config('getFieldUrl')) {
                n = startNumber + '';
                list.push({
                    'gd': [[n]],
                    'ge': `打开或关闭数据源面板`
                }, {
                    'gd': [['gh', n]],
                    'ge': '打开或折叠数据源面板的内容'
                });
                startNumber++;
            }
            if (!mini) {
                n = startNumber + '';
                list.push({
                    'gd': [[n]],
                    'ge': `打开或关闭历史记录面板`
                }, {
                    'gd': [['gh', n]],
                    'ge': '打开或折叠历史记录面板的内容'
                });
                startNumber++;
                n = startNumber + '';
                list.push({
                    'gd': [[n]],
                    'ge': `打开或关闭性能面板`
                }, {
                    'gd': [['gh', n]],
                    'ge': '打开或折叠性能面板的内容'
                });
                startNumber++;
            }
            n = startNumber + '';
            list.push({
                'gd': [[n]],
                'ge': `打开或关闭资源面板`
            }, {
                'gd': [['gh', n]],
                'ge': '打开或折叠资源面板的内容'
            });
            startNumber++;
            list.push({
                'gd': [['gh', 'Z']],
                'ge': `打开或关闭所有可拖动的面板，即数字1-${startNumber - 1}键对应的面板`
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
    '_gM'(owner) {
        if (!this['_g4']) {
            this['_g4'] = 1;
            owner.mxDialog("50/5s", {
                width: 1000
            }).whenClose(() => {
                delete this['_g4'];
            });
        }
    }
});

});