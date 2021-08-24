/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/5i",["51","../5c/index"],(require,exports,module)=>{


/**
 * 右键菜单配置及管理对象
 */
let magix_1 = require("51");
let index_1 = require("../5c/index");
let { guid } = magix_1;
let MenuSpliter = {
    spliter: true
};
let MenuAll = {
    id: 0,
    icon: '&#xe6b2;',
    text: 'gB',
    short: 'Ctrl+A'
};
let MenuCopy = {
    id: 1,
    icon: '&#xe69a;',
    text: 'gC',
    short: 'Ctrl+C'
};
let MenuCut = {
    id: 2,
    icon: '&#xe6bf;',
    text: 'gD',
    short: 'Ctrl+X'
};
let MenuTop = {
    id: 3,
    icon: '&#xe607;',
    text: 'gE',
    short: 'T'
};
let MenuBottom = {
    id: 4,
    icon: '&#xe607;',
    r180: 1,
    text: 'gF',
    short: 'B'
};
let MenuUp = {
    id: 5,
    icon: '&#xe632;',
    text: 'gG',
    short: 'U'
};
let MenuDown = {
    id: 6,
    icon: '&#xe632;',
    r180: 1,
    text: 'gH',
    short: 'D'
};
let MenuDuplicate = {
    id: 7,
    icon: '&#xe6b1;',
    text: 'gI',
    short: 'Ctrl+D'
};
let MenuPaste = {
    id: 8,
    icon: '&#xe6c1;',
    text: 'gJ',
    short: 'Ctrl+V'
};
let MenuDelete = {
    id: 9,
    icon: '&#xe6b3;',
    text: 'gK',
    short: 'Delete'
};
let MenuClear = {
    id: 10,
    icon: '&#xe7db;',
    text: 'gL',
    short: 'C'
};
let MenuNew = {
    id: 11,
    icon: '&#xe612;',
    text: 'gM',
    short: 'N'
};
let MenuReverse = {
    id: 12,
    icon: '&#xe678;',
    text: 'gN',
    short: 'Ctrl+Shift+I'
};
let MenuAlignLeft = {
    id: 20,
    icon: '&#xe70b;',
    text: 'gO',
    to: 'left'
};
let MenuAlignRight = {
    id: 21,
    icon: '&#xe70b;',
    r180: 1,
    text: 'gP',
    to: 'right'
};
let MenuAlignCenter = {
    id: 22,
    icon: '&#xe711;',
    r90: 1,
    text: 'gQ',
    to: 'center'
};
let MenuAlignTop = {
    id: 23,
    icon: '&#xe70d;',
    text: 'gR',
    to: 'top'
};
let MenuAlignBottom = {
    id: 24,
    icon: '&#xe70d;',
    r180: 1,
    text: 'gS',
    to: 'bottom'
};
let MenuAlignMiddle = {
    id: 25,
    icon: '&#xe711;',
    text: 'gT',
    to: 'middle'
};
let MenuGroup = {
    id: 31,
    icon: '&#xe669;',
    text: 'gU',
    short: 'Ctrl/Shift+G'
};
let MenuUngroup = {
    id: 32,
    icon: '&#xe684;',
    text: 'gV',
    short: 'Shift/Ctrl+G'
};
let MenuSyncWidthAsHeight = {
    id: 41,
    text: 'gW'
};
let MenuSyncHeightAsWidth = {
    id: 42,
    text: 'gX'
};
let MenuSyncWidth = {
    id: 43,
    text: 'gY'
};
let MenuSyncHeight = {
    id: 44,
    text: 'gZ'
};
let MenuClearHodStage = {
    id: 50,
    text: 'g0'
};
let Cache = {};
let TranslateMenu = menus => {
    return lang => {
        if (!menus['gd']) { //给菜单列表临时增加id，用于缓存
            menus['gd'] = guid('m_');
        }
        let key = lang + menus['gd'];
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
    'gd': MenuAll.id,
    'ge': MenuPaste.id,
    'gf': MenuTop.id,
    'gg': MenuUp.id,
    'gh': MenuBottom.id,
    'gi': MenuDown.id,
    'gj': MenuCut.id,
    'gk': MenuCopy.id,
    'gl': MenuDuplicate.id,
    'gm': MenuDelete.id,
    'gn': MenuClear.id,
    'go': MenuNew.id,
    'gp': MenuUngroup.id,
    'gq': MenuGroup.id,
    'gr': MenuSyncWidthAsHeight.id,
    'gs': MenuSyncHeightAsWidth.id,
    'gt': MenuSyncWidth.id,
    'gu': MenuSyncHeight.id,
    'gv': MenuAlignBottom.id,
    'gw': MenuAlignCenter.id,
    'gx': MenuAlignLeft.id,
    'gy': MenuAlignMiddle.id,
    'gz': MenuAlignRight.id,
    'gA': MenuAlignTop.id,
    'gB': MenuClearHodStage.id,
    'gC': MenuReverse.id,
    //单个元素的右键菜单
    'gD': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuTop, MenuUp, MenuDown, MenuBottom, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //2个元素
    'gE': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuAlignLeft, MenuAlignCenter, MenuAlignRight, MenuAlignTop, MenuAlignMiddle, MenuAlignBottom, MenuSpliter, MenuSyncWidth, MenuSyncHeight, MenuSyncWidthAsHeight, MenuSyncHeightAsWidth, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //多选元素时的右键菜单
    'gF': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuAlignLeft, MenuAlignCenter, MenuAlignRight, MenuAlignTop, MenuAlignMiddle, MenuAlignBottom, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //在设计区时的右键菜单
    'gG': TranslateMenu([MenuAll, MenuPaste, MenuSpliter, MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuClear, MenuNew]),
    //在容器上时的右键菜单
    'gH': TranslateMenu([MenuAll, MenuPaste, MenuClearHodStage, MenuSpliter, MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuUp, MenuTop, MenuDown, MenuBottom, MenuSpliter, MenuReverse])
};

});