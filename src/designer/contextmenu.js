/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/5t",["5c","../5n/index"],(require,exports,module)=>{


/**
 * 右键菜单配置及管理对象
 */
let magix_1 = require("5c");
let index_1 = require("../5n/index");
let { guid } = magix_1;
let MenuSpliter = {
    spliter: true
};
let MenuAll = {
    id: 0,
    icon: '&#xe6b2;',
    text: 'mp',
    short: 'Ctrl+A'
};
let MenuCopy = {
    id: 1,
    icon: '&#xe69a;',
    text: 'mq',
    short: 'Ctrl+C'
};
let MenuCut = {
    id: 2,
    icon: '&#xe6bf;',
    text: 'mr',
    short: 'Ctrl+X'
};
let MenuTop = {
    id: 3,
    icon: '&#xe607;',
    text: 'ms',
    short: 'T'
};
let MenuBottom = {
    id: 4,
    icon: '&#xe607;',
    r180: 1,
    text: 'mt',
    short: 'B'
};
let MenuUp = {
    id: 5,
    icon: '&#xe632;',
    text: 'mu',
    short: 'U'
};
let MenuDown = {
    id: 6,
    icon: '&#xe632;',
    r180: 1,
    text: 'mv',
    short: 'D'
};
let MenuDuplicate = {
    id: 7,
    icon: '&#xe6b1;',
    text: 'mw',
    short: 'Ctrl+D'
};
let MenuPaste = {
    id: 8,
    icon: '&#xe6c1;',
    text: 'mx',
    short: 'Ctrl+V'
};
let MenuDelete = {
    id: 9,
    icon: '&#xe6b3;',
    text: 'my',
    short: 'Delete'
};
let MenuClear = {
    id: 10,
    icon: '&#xe7db;',
    text: 'mz',
    short: 'C'
};
let MenuNew = {
    id: 11,
    icon: '&#xe612;',
    text: 'mA',
    short: 'N'
};
let MenuReverse = {
    id: 12,
    icon: '&#xe678;',
    text: 'mB',
    short: 'Ctrl+Shift+I'
};
let MenuAlignLeft = {
    id: 20,
    icon: '&#xe70b;',
    text: 'mC',
    to: 'left'
};
let MenuAlignRight = {
    id: 21,
    icon: '&#xe70b;',
    r180: 1,
    text: 'mD',
    to: 'right'
};
let MenuAlignCenter = {
    id: 22,
    icon: '&#xe711;',
    r90: 1,
    text: 'mE',
    to: 'center'
};
let MenuAlignTop = {
    id: 23,
    icon: '&#xe70d;',
    text: 'mF',
    to: 'top'
};
let MenuAlignBottom = {
    id: 24,
    icon: '&#xe70d;',
    r180: 1,
    text: 'mG',
    to: 'bottom'
};
let MenuAlignMiddle = {
    id: 25,
    icon: '&#xe711;',
    text: 'mH',
    to: 'middle'
};
let MenuGroup = {
    id: 31,
    icon: '&#xe669;',
    text: 'mI',
    short: 'Ctrl/Shift+G'
};
let MenuUngroup = {
    id: 32,
    icon: '&#xe684;',
    text: 'mJ',
    short: 'Shift/Ctrl+G'
};
let MenuSyncWidthAsHeight = {
    id: 41,
    text: 'mK'
};
let MenuSyncHeightAsWidth = {
    id: 42,
    text: 'mL'
};
let MenuSyncWidth = {
    id: 43,
    text: 'mM'
};
let MenuSyncHeight = {
    id: 44,
    text: 'mN'
};
let MenuClearHodStage = {
    id: 50,
    text: 'mO'
};
let Cache = {};
let TranslateMenu = menus => {
    return lang => {
        if (!menus['l2']) { //给菜单列表临时增加id，用于缓存
            menus['l2'] = guid('m_');
        }
        let key = lang + menus['l2'];
        if (!Cache[key]) {
            let a = [];
            for (let m of menus) { //根据菜单内容翻译相应的菜单显示
                if (m.spliter) {
                    a.push(m);
                }
                else {
                    a.push({
                        id: m.id,
                        to: m.to,
                        icon: m.icon,
                        r180: m.r180,
                        r90: m.r90,
                        text: index_1(m.text),
                        short: m.short
                    });
                }
            }
            Cache[key] = a;
        }
        return Cache[key];
    };
};
module.exports= {
    'l2': MenuAll.id,
    'l3': MenuPaste.id,
    'l4': MenuTop.id,
    'l5': MenuUp.id,
    'l6': MenuBottom.id,
    'l7': MenuDown.id,
    'l8': MenuCut.id,
    'l9': MenuCopy.id,
    'm_': MenuDuplicate.id,
    'ma': MenuDelete.id,
    'mb': MenuClear.id,
    'mc': MenuNew.id,
    'md': MenuUngroup.id,
    'me': MenuGroup.id,
    'mf': MenuSyncWidthAsHeight.id,
    'mg': MenuSyncHeightAsWidth.id,
    'mh': MenuSyncWidth.id,
    'mi': MenuSyncHeight.id,
    'mj': MenuAlignBottom.id,
    'mk': MenuAlignCenter.id,
    'ml': MenuAlignLeft.id,
    'mm': MenuAlignMiddle.id,
    'mn': MenuAlignRight.id,
    'mo': MenuAlignTop.id,
    'mp': MenuClearHodStage.id,
    'mq': MenuReverse.id,
    //单个元素的右键菜单
    'mr': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuTop, MenuUp, MenuDown, MenuBottom, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //2个元素
    'ms': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuAlignLeft, MenuAlignCenter, MenuAlignRight, MenuAlignTop, MenuAlignMiddle, MenuAlignBottom, MenuSpliter, MenuSyncWidth, MenuSyncHeight, MenuSyncWidthAsHeight, MenuSyncHeightAsWidth, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //多选元素时的右键菜单
    'mt': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuAlignLeft, MenuAlignCenter, MenuAlignRight, MenuAlignTop, MenuAlignMiddle, MenuAlignBottom, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //在设计区时的右键菜单
    'mu': TranslateMenu([MenuAll, MenuPaste, MenuSpliter, MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuClear, MenuNew]),
    //在容器上时的右键菜单
    'mv': TranslateMenu([MenuAll, MenuPaste, MenuClearHodStage, MenuSpliter, MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuUp, MenuTop, MenuDown, MenuBottom, MenuSpliter, MenuReverse])
};

});