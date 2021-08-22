/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/shortcuts",["magix5","./const"],(require,exports,module)=>{
let $quick_bG_0_static_node;
let $quick_bG_4_static_node;
let $quick_bG_1_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-dialog-header rd-_assets_index_less_-dialog-header-with-shadow rd-_assets_index_less_-flex rd-_assets_index_less_-position-sticky rd-_assets_index_less_-top-0 rd-_assets_index_less_-z-index-8',};
let $quick_bG_2_static_attr={'class': 'rd-_assets_index_less_-tag-h5',};
let $quick_bG_3_static_attr={'class': 'rd-_assets_index_less_-dialog-body',};
let $quick_bG_6_static_attr={'class': 'rd-_assets_index_less_-width-220',};
let $quick_bG_7_static_attr={'class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-display-inline-block rd-_assets_index_less_-tc rd-_designer_shortcuts_less_-key',};
let $quick_bG_8_static_attr={'class': 'rd-_assets_index_less_-flex-fill-rest rd-_assets_index_less_-pl10',};

let magix_1 = require("magix5");
let const_1 = require("./const");
let { applyStyle, View, State, config, Cache } = magix_1;
applyStyle("rd-_designer_shortcuts_less_","\n.rd-_designer_shortcuts_less_-key {\npadding:1px 10px 3px;\nborder-radius:6px;\nborder:solid 1px #ccc;\nbox-shadow:inset 0 -3px 0 #ccc;\ncolor:#666;\nmargin:2px;\ncursor:default;\nfont-family:-apple-system, BlinkMacSystemFont;\nmin-width:32px;\n}\n.rd-_designer_shortcuts_less_-padding-left-14 {\npadding-left:14px;\n}\n.rd-_designer_shortcuts_less_-odd {\nbackground:#fafafa;\n}\n.rd-_designer_shortcuts_less_-line {\npadding:5px 0;\n}\n.rd-_designer_shortcuts_less_-keys-group {\nmargin:1px 4px;\npadding:2px;\nbackground-color:#e6e6e6;\nborder-radius:2px;\n}\n");
let isMac = navigator.userAgent.toLowerCase().includes('macintosh');
/**
 * 把修改按键转成图形(mac系统)或英文描述(其它系统)
 */
let modifiersToGlyphs = {
    '@:{keystroke#delete~rs}': isMac ? '⌦' : 'Delete',
    '@:{keystroke#backspace~rs}': isMac ? '⌫' : 'Backspace',
    '@:{keystroke#command~rs}': '⌘',
    '@:{keystroke#ctrl~rs}': isMac ? '⌃' : 'Ctrl',
    '@:{keystroke#shift~rs}': isMac ? '⇧' : 'Shift',
    '@:{keystroke#alt~rs}': isMac ? '⌥' : 'Alt',
    '@:{keystroke#tab~rs}': isMac ? '⇥' : 'Tab',
    '@:{keystroke#top.arrow~rs}': '↑',
    '@:{keystroke#right.arrow~rs}': '→',
    '@:{keystroke#bottom.arrow~rs}': '↓',
    '@:{keystroke#left.arrow~rs}': '←',
    '@:{keystroke#plus~rs}': '+',
    '@:{keystroke#minus~rs}': '-',
    '@:{keystroke#escape~rs}': isMac ? '⎋' : 'Esc'
};
/**
 * 翻译修改按键
 */
let modifiersToTitle = {
    '@:{keystroke#escape~rs}': 'Escape',
    '@:{keystroke#delete~rs}': 'Delete',
    '@:{keystroke#backspace~rs}': 'Backspace',
    '@:{keystroke#command~rs}': 'Command',
    '@:{keystroke#ctrl~rs}': isMac ? 'Control' : 'Ctrl',
    '@:{keystroke#shift~rs}': 'Shift',
    '@:{keystroke#alt~rs}': isMac ? 'Option' : 'Alt',
    '@:{keystroke#tab~rs}': 'Tab',
    '@:{keystroke#top.arrow~rs}': '上箭头',
    '@:{keystroke#right.arrow~rs}': '右箭头',
    '@:{keystroke#bottom.arrow~rs}': '下箭头',
    '@:{keystroke#left.arrow~rs}': '左箭头',
    '@:{keystroke#plus~rs}': '加号',
    '@:{keystroke#minus~rs}': '减号'
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
    let unit = State.get('@:{global#stage.unit~rs}');
    return const_1['@:{const#unit.step~rs}'](unit) * src + unit;
};
let list = [{
        '@:{ks#keys~rs}': [['@:{keystroke#escape~rs}']],
        '@:{ks#desc~rs}': '取消元素选中或关闭弹窗(弹窗需允许快捷键关闭)'
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#backspace~rs}'], ['@:{keystroke#delete~rs}']],
        '@:{ks#desc~rs}': '删除选中的元素'
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'Z']] : []).concat([['@:{keystroke#ctrl~rs}', 'Z']]),
        '@:{ks#desc~rs}': '撤销操作'
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', '@:{keystroke#shift~rs}', 'Z'], ['@:{keystroke#command~rs}', 'Y']] : []).concat([['@:{keystroke#ctrl~rs}', '@:{keystroke#shift~rs}', 'Z'], ['@:{keystroke#ctrl~rs}', 'Y']]),
        '@:{ks#desc~rs}': '重做操作'
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#tab~rs}']],
        '@:{ks#desc~rs}': '按z轴从大到小选择编辑区中的元素'
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', '@:{keystroke#tab~rs}']],
        '@:{ks#desc~rs}': '按z轴从小到大选择编辑区中的元素'
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#alt~rs}']],
        '@:{ks#desc~rs}': '拖动对齐开启或关闭的情况下，按下在拖动过程中可临时关闭或打开拖动对齐和尺寸拖动修改吸附功能。'
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}']],
        '@:{ks#desc~rs}': '拖动改变元素尺寸的情况下，拖拐角的修改点时，按下可等比改变宽高'
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#left.arrow~rs}']],
        '@:{ks#dest.is.fn~rs}': 1,
        '@:{ks#desc~rs}': () => `按下后编辑区选中的元素或辅助线向左移动${toCurrentUnit(const_1['@:{const#keyboard.move.step~rs}'])}`
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', '@:{keystroke#left.arrow~rs}']],
        '@:{ks#dest.is.fn~rs}': 1,
        '@:{ks#desc~rs}': () => `按下后编辑区选中的元素或辅助线向左移动${toCurrentUnit(const_1['@:{const#keyboard.with.shift.move.step~rs}'])}`
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#top.arrow~rs}']],
        '@:{ks#dest.is.fn~rs}': 1,
        '@:{ks#desc~rs}': () => `按下后编辑区选中的元素或辅助线向上移动${toCurrentUnit(const_1['@:{const#keyboard.move.step~rs}'])}`
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', '@:{keystroke#top.arrow~rs}']],
        '@:{ks#dest.is.fn~rs}': 1,
        '@:{ks#desc~rs}': () => `按下后编辑区选中的元素或辅助线向上移动${toCurrentUnit(const_1['@:{const#keyboard.with.shift.move.step~rs}'])}`
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#right.arrow~rs}']],
        '@:{ks#dest.is.fn~rs}': 1,
        '@:{ks#desc~rs}': () => `按下后编辑区选中的元素或辅助线向右移动${toCurrentUnit(const_1['@:{const#keyboard.move.step~rs}'])}`
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', '@:{keystroke#right.arrow~rs}']],
        '@:{ks#dest.is.fn~rs}': 1,
        '@:{ks#desc~rs}': () => `按下后编辑区选中的元素或辅助线向右移动${toCurrentUnit(const_1['@:{const#keyboard.with.shift.move.step~rs}'])}`
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#bottom.arrow~rs}']],
        '@:{ks#dest.is.fn~rs}': 1,
        '@:{ks#desc~rs}': () => `按下后编辑区选中的元素或辅助线向下移动${toCurrentUnit(const_1['@:{const#keyboard.move.step~rs}'])}`
    }, {
        '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', '@:{keystroke#bottom.arrow~rs}']],
        '@:{ks#dest.is.fn~rs}': 1,
        '@:{ks#desc~rs}': () => `按下后编辑区选中的元素或辅助线向下移动${toCurrentUnit(const_1['@:{const#keyboard.with.shift.move.step~rs}'])}`
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', '@:{keystroke#left.arrow~rs}'], ['@:{keystroke#command~rs}', '@:{keystroke#top.arrow~rs}']] : []).concat([['@:{keystroke#ctrl~rs}', '@:{keystroke#left.arrow~rs}'], ['@:{keystroke#ctrl~rs}', '@:{keystroke#top.arrow~rs}']]),
        '@:{ks#desc~rs}': `只有一个元素选中且支持旋转的情况下，每次按下减少${const_1['@:{const#keyboard.rotate.step~rs}']}度`
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', '@:{keystroke#shift~rs}', '@:{keystroke#left.arrow~rs}'], ['@:{keystroke#command~rs}', '@:{keystroke#shift~rs}', '@:{keystroke#top.arrow~rs}']] : []).concat([['@:{keystroke#ctrl~rs}', '@:{keystroke#shift~rs}', '@:{keystroke#left.arrow~rs}'], ['@:{keystroke#ctrl~rs}', '@:{keystroke#shift~rs}', '@:{keystroke#top.arrow~rs}']]),
        '@:{ks#desc~rs}': `只有一个元素选中且支持旋转的情况下，每次按下减少${const_1['@:{const#keyboard.with.shift.rotate.step~rs}']}度`
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', '@:{keystroke#right.arrow~rs}'], ['@:{keystroke#command~rs}', '@:{keystroke#bottom.arrow~rs}']] : []).concat([['@:{keystroke#ctrl~rs}', '@:{keystroke#right.arrow~rs}'], ['@:{keystroke#ctrl~rs}', '@:{keystroke#bottom.arrow~rs}']]),
        '@:{ks#desc~rs}': `只有一个元素选中且支持旋转的情况下，每次按下增加${const_1['@:{const#keyboard.rotate.step~rs}']}度`
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', '@:{keystroke#shift~rs}', '@:{keystroke#right.arrow~rs}'], ['@:{keystroke#command~rs}', '@:{keystroke#shift~rs}', '@:{keystroke#bottom.arrow~rs}']] : []).concat([['@:{keystroke#ctrl~rs}', '@:{keystroke#shift~rs}', '@:{keystroke#right.arrow~rs}'], ['@:{keystroke#ctrl~rs}', '@:{keystroke#shift~rs}', '@:{keystroke#bottom.arrow~rs}']]),
        '@:{ks#desc~rs}': `只有一个元素选中且支持旋转的情况下，每次按下增加${const_1['@:{const#keyboard.with.shift.rotate.step~rs}']}度`
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'A']] : []).concat([['@:{keystroke#ctrl~rs}', 'A']]),
        '@:{ks#desc~rs}': '全选编辑区中的元素或当容器元素格子激活时，全选格子内的元素'
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', '@:{keystroke#shift~rs}', 'I']] : []).concat([['@:{keystroke#ctrl~rs}', '@:{keystroke#shift~rs}', 'I']]),
        '@:{ks#desc~rs}': '反选编辑区中的元素或当容器元素格子内元素选中时，反选格子内其它元素'
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'C']] : []).concat([['@:{keystroke#ctrl~rs}', 'C']]),
        '@:{ks#desc~rs}': '复制编辑区中选中的元素'
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'X']] : []).concat([['@:{keystroke#ctrl~rs}', 'X']]),
        '@:{ks#desc~rs}': '剪切编辑区中选中的元素'
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'V']] : []).concat([['@:{keystroke#ctrl~rs}', 'V']]),
        '@:{ks#desc~rs}': '粘贴复制或剪切的元素'
    }, {
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'D']] : []).concat([['@:{keystroke#ctrl~rs}', 'D']]),
        '@:{ks#desc~rs}': '克隆选中的元素'
    }];
let canShowContent = const_1['@:{const#save.show.stage.content~rs}'], hasSaveUrl = config('saveContentUrl');
if (canShowContent ||
    hasSaveUrl) {
    list.push({
        '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'S']] : []).concat([['@:{keystroke#ctrl~rs}', 'S']]),
        '@:{ks#desc~rs}': (hasSaveUrl ? '保存内容' : '显示设计区内容对话框')
    });
    if (canShowContent &&
        hasSaveUrl) {
        list.push({
            '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', '@:{keystroke#shift~rs}', 'S']] : []).concat([['@:{keystroke#ctrl~rs}', '@:{keystroke#shift~rs}', 'S']]),
            '@:{ks#desc~rs}': '显示设计区内容对话框'
        });
    }
}
list.push({
    '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'P']] : []).concat([['@:{keystroke#ctrl~rs}', 'P']]),
    '@:{ks#desc~rs}': '显示打印页面或对话框'
}, {
    '@:{ks#keys~rs}': [['H']],
    '@:{ks#desc~rs}': '显示或隐藏辅助线'
}, {
    '@:{ks#keys~rs}': [['@:{keystroke#alt~rs}', 'H']],
    '@:{ks#desc~rs}': '清除辅助线'
}, {
    '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'H']] : []).concat([['@:{keystroke#ctrl~rs}', 'H']]),
    '@:{ks#desc~rs}': '隐藏或显示标尺'
}, {
    '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'G']] : []).concat([['@:{keystroke#ctrl~rs}', 'G'], ['@:{keystroke#shift~rs}', 'G']]),
    '@:{ks#desc~rs}': '组合或取消组合选中的元素'
}, {
    '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', 'L']] : []).concat([['@:{keystroke#ctrl~rs}', 'L'], ['@:{keystroke#shift~rs}', 'L']]),
    '@:{ks#desc~rs}': '编辑锁定或取消编辑锁定选中的元素'
}, {
    '@:{ks#keys~rs}': [['T']],
    '@:{ks#desc~rs}': '把选中的元素调整到最顶层级'
}, {
    '@:{ks#keys~rs}': [['U']],
    '@:{ks#desc~rs}': '把选中的元素向上调整一个层级'
}, {
    '@:{ks#keys~rs}': [['D']],
    '@:{ks#desc~rs}': '把选中的元素向下调整一个层级'
}, {
    '@:{ks#keys~rs}': [['B']],
    '@:{ks#desc~rs}': '把选中的元素调整到最底层级'
}, {
    '@:{ks#keys~rs}': [['F']],
    '@:{ks#desc~rs}': '容器格子中的元素选中状态下，按下可聚焦为当前格子'
}, {
    '@:{ks#keys~rs}': [['C']],
    '@:{ks#desc~rs}': '清除编辑区内容'
}, {
    '@:{ks#keys~rs}': [['N']],
    '@:{ks#desc~rs}': '新建编辑区内容'
}, {
    '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', '/']],
    '@:{ks#desc~rs}': '显示快捷键大全对话框'
}, {
    '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', '@:{keystroke#plus~rs}']] : []).concat([['@:{keystroke#ctrl~rs}', '@:{keystroke#plus~rs}']]),
    '@:{ks#desc~rs}': '放大编辑区'
}, {
    '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', '@:{keystroke#minus~rs}']] : []).concat([['@:{keystroke#ctrl~rs}', '@:{keystroke#minus~rs}']]),
    '@:{ks#desc~rs}': '缩小编辑区'
}, {
    '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}', '0']] : []).concat([['@:{keystroke#ctrl~rs}', '0']]),
    '@:{ks#desc~rs}': '恢复编辑区到未缩放状态'
}, {
    '@:{ks#keys~rs}': (isMac ? [['@:{keystroke#command~rs}']] : []).concat([['@:{keystroke#shift~rs}'], ['@:{keystroke#ctrl~rs}']]),
    '@:{ks#desc~rs}': '拉框或点击选择元素的情况下，按下可叠加或取消之前已经选择的元素'
}, {
    '@:{ks#keys~rs}': [['1']],
    '@:{ks#desc~rs}': '打开或关闭元素面板'
}, {
    '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', '1']],
    '@:{ks#desc~rs}': '打开或折叠元素面板的内容'
});
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
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

if($quick_bG_0_static_node){
$vnode_0=[$quick_bG_0_static_node];
}else{
$vnode_0=[$quick_bG_0_static_node=$createVNode('div',{'_': 'a^','class': 'rd-_assets_index_less_-dialog-header-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-7',})];
}
$vnode_2=[$createVNode(0,($__line=3,$__art='{{=i18n(\'@:{lang#all.shortcuts~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#all.shortcuts~rs}\')%>',(i18n('@:{lang#all.shortcuts~rs}'))))];$vnode_1=[$createVNode('h5',$quick_bG_2_static_attr,$vnode_2)];$vnode_2=[$createVNode(0,($__line=4,$__art='{{=i18n(\'@:{lang#site.name~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#site.name~rs}\')%>',(i18n('@:{lang#site.name~rs}')))+'设计方案及元素详细介绍')];$vnode_1.push($createVNode('a',{'class': 'rd-_assets_index_less_-ml10 rd-_assets_index_less_-tag-a','href': ($__line=4,$__art='{{=help}}',$__ctrl='<%=help%>',(help)),'rel': 'noopener noreferrer','target': '_blank',},$vnode_2));$vnode_0.push($createVNode('div',$quick_bG_1_static_attr,$vnode_1));$vnode_1=[];
if($quick_bG_4_static_node){
$vnode_1.push($quick_bG_4_static_node);
}else{
$vnode_2=[$createVNode(0,'<div class="rd-_assets_index_less_-fontsize-16 rd-_assets_index_less_-width-220 rd-_designer_shortcuts_less_-padding-left-14">按键</div><div class="rd-_assets_index_less_-flex-fill-rest rd-_assets_index_less_-fontsize-16 rd-_assets_index_less_-pl10">功能</div>',1)];$vnode_1.push($quick_bG_4_static_node=$createVNode('div',{'_': 'a*','class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_designer_shortcuts_less_-line rd-_designer_shortcuts_less_-odd',},$vnode_2));
}
$__line=11;$__art="{{each list as st sti}}";$__ctrl="for(let $q_c_hnlwbwrm=list.length,sti=0;sti<$q_c_hnlwbwrm;sti++){let st=list[sti];";
for(let $q_c_hnlwbwrm=list.length,sti=0;sti<$q_c_hnlwbwrm;sti+=1){
let st=list[sti];
$vnode_3=[];$__line=14;$__art="{{each st[\\'@:{ks#keys~rs}\\'] as keys ki last}}";$__ctrl="for(let $q_a_ugpabg=st['@:{ks#keys~rs}'],$q_c_ezvevhwmqm=$q_a_ugpabg.length,$q_lc_widglkyd=$q_c_ezvevhwmqm-1,ki=0;ki<$q_c_ezvevhwmqm;ki++){let keys=$q_a_ugpabg[ki];let last=ki===$q_lc_widglkyd;";
for(let $q_a_ugpabg=st['@:{ks#keys~rs}'],$q_c_ezvevhwmqm=$q_a_ugpabg.length,$q_lc_widglkyd=$q_c_ezvevhwmqm-1,ki=0;ki<$q_c_ezvevhwmqm;ki+=1){
let keys=$q_a_ugpabg[ki];let last=ki===$q_lc_widglkyd;
$vnode_4=[];$__line=16;$__art="{{each keys as k}}";$__ctrl="for(let $q_c_pdxskibck=keys.length,$q_key_ivuhgnu=0;$q_key_ivuhgnu<$q_c_pdxskibck;$q_key_ivuhgnu++){let k=keys[$q_key_ivuhgnu];";
for(let $q_c_pdxskibck=keys.length,$q_key_ivuhgnu=0;$q_key_ivuhgnu<$q_c_pdxskibck;$q_key_ivuhgnu+=1){
let k=keys[$q_key_ivuhgnu];
$vnode_5=[$createVNode(0,($__line=17,$__art='{{=modKey(k)}}',$__ctrl='<%=modKey(k)%>',(modKey(k))))];$vnode_4.push($createVNode('kbd',$quick_bG_7_static_attr,$vnode_5));
}$vnode_3.push($createVNode('div',{'class': 'rd-_assets_index_less_-display-inline-block rd-_designer_shortcuts_less_-keys-group','title': ($__line=15,$__art='{{=modTitle(keys)}}',$__ctrl='<%=modTitle(keys)%>',(modTitle(keys))),},$vnode_4));
}$vnode_2=[$createVNode('div',$quick_bG_6_static_attr,$vnode_3)];$text=($__line=23,$__art='{{if st[\'@:{ks#dest.is.fn~rs}\']}}','');$__ctrl='<%if(st[\'@:{ks#dest.is.fn~rs}\']){%>';if(st['@:{ks#dest.is.fn~rs}']){;$text+=' '+($__line=24,$__art='{{=st[\'@:{ks#desc~rs}\']()}}',$__ctrl='<%=st[\'@:{ks#desc~rs}\']()%>',(st['@:{ks#desc~rs}']()))+' '+($__line=25,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$text+=' '+($__line=26,$__art='{{=st[\'@:{ks#desc~rs}\']}}',$__ctrl='<%=st[\'@:{ks#desc~rs}\']%>',(st['@:{ks#desc~rs}']))+' '+($__line=27,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_3=[$createVNode(0,$text)];$vnode_2.push($createVNode('div',$quick_bG_8_static_attr,$vnode_3));;$$_class='rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center rd-_designer_shortcuts_less_-line'+($__line=12,$__art='{{if sti%2}}','');$__ctrl='<%if(sti%2){%>';if(sti%2){;$$_class+=' rd-_designer_shortcuts_less_-odd'+($__line=12,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));
}$vnode_0.push($createVNode('div',$quick_bG_3_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/shortcuts.html'; throw msg; }  } ,
    init() {
        //以下根据不同的环境，比如迷你模式，来决定如何生成数字键的帮助提示
        if (!list['@:{pad.number.panels~rs}']) {
            list['@:{pad.number.panels~rs}'] = 1;
            let mini = State.get('@:{global#provider.of.use.mini~rs}');
            let startNumber = 2, n;
            if (!mini) {
                n = startNumber + '';
                list.push({
                    '@:{ks#keys~rs}': [[n]],
                    '@:{ks#desc~rs}': `打开或关闭概览图面板`
                }, {
                    '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', n]],
                    '@:{ks#desc~rs}': '打开或折叠概览图面板的内容'
                });
                startNumber++;
            }
            n = startNumber + '';
            list.push({
                '@:{ks#keys~rs}': [[n]],
                '@:{ks#desc~rs}': `打开或关闭属性面板`
            }, {
                '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', n]],
                '@:{ks#desc~rs}': '打开或折叠属性面板的内容'
            });
            startNumber++;
            if (config('getFieldUrl')) {
                n = startNumber + '';
                list.push({
                    '@:{ks#keys~rs}': [[n]],
                    '@:{ks#desc~rs}': `打开或关闭数据源面板`
                }, {
                    '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', n]],
                    '@:{ks#desc~rs}': '打开或折叠数据源面板的内容'
                });
                startNumber++;
            }
            if (!mini) {
                n = startNumber + '';
                list.push({
                    '@:{ks#keys~rs}': [[n]],
                    '@:{ks#desc~rs}': `打开或关闭历史记录面板`
                }, {
                    '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', n]],
                    '@:{ks#desc~rs}': '打开或折叠历史记录面板的内容'
                });
                startNumber++;
                n = startNumber + '';
                list.push({
                    '@:{ks#keys~rs}': [[n]],
                    '@:{ks#desc~rs}': `打开或关闭性能面板`
                }, {
                    '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', n]],
                    '@:{ks#desc~rs}': '打开或折叠性能面板的内容'
                });
                startNumber++;
            }
            n = startNumber + '';
            list.push({
                '@:{ks#keys~rs}': [[n]],
                '@:{ks#desc~rs}': `打开或关闭资源面板`
            }, {
                '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', n]],
                '@:{ks#desc~rs}': '打开或折叠资源面板的内容'
            });
            startNumber++;
            list.push({
                '@:{ks#keys~rs}': [['@:{keystroke#shift~rs}', 'Z']],
                '@:{ks#desc~rs}': `打开或关闭所有可拖动的面板，即数字1-${startNumber - 1}键对应的面板`
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
    '@:{show~rs}'(owner) {
        if (!this['@:{shown~rs}']) {
            this['@:{shown~rs}'] = 1;
            owner.mxDialog("designer/shortcuts", {
                width: 1000
            }).whenClose(() => {
                delete this['@:{shown~rs}'];
            });
        }
    }
});

});