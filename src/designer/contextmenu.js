/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/4v",["4e","../4p/index"],(require,exports,module)=>{


/**
 * 右键菜单配置及管理对象
 */
let magix_1 = require("4e");
let index_1 = require("../4p/index");
let { guid } = magix_1;
let MenuSpliter = {
    spliter: true
};
let MenuAll = {
    id: 0,
    icon: '&#xe6b2;',
    text: 'd2',
    short: 'Ctrl+A'
};
let MenuCopy = {
    id: 1,
    icon: '&#xe69a;',
    text: 'd3',
    short: 'Ctrl+C'
};
let MenuCut = {
    id: 2,
    icon: '&#xe6bf;',
    text: 'd4',
    short: 'Ctrl+X'
};
let MenuTop = {
    id: 3,
    icon: '&#xe607;',
    text: 'd5',
    short: 'T'
};
let MenuBottom = {
    id: 4,
    icon: '&#xe607;',
    r180: 1,
    text: 'd6',
    short: 'B'
};
let MenuUp = {
    id: 5,
    icon: '&#xe632;',
    text: 'd7',
    short: 'U'
};
let MenuDown = {
    id: 6,
    icon: '&#xe632;',
    r180: 1,
    text: 'd8',
    short: 'D'
};
let MenuDuplicate = {
    id: 7,
    icon: '&#xe6b1;',
    text: 'd9',
    short: 'Ctrl+D'
};
let MenuPaste = {
    id: 8,
    icon: '&#xe6c1;',
    text: 'e_',
    short: 'Ctrl+V'
};
let MenuDelete = {
    id: 9,
    icon: '&#xe6b3;',
    text: 'ea',
    short: 'Delete'
};
let MenuClear = {
    id: 10,
    icon: '&#xe7db;',
    text: 'eb',
    short: 'C'
};
let MenuNew = {
    id: 11,
    icon: '&#xe612;',
    text: 'ec',
    short: 'N'
};
let MenuReverse = {
    id: 12,
    icon: '&#xe678;',
    text: 'ed',
    short: 'Ctrl+Shift+I'
};
let MenuAlignLeft = {
    id: 20,
    icon: '&#xe70b;',
    text: 'ee',
    to: 'left'
};
let MenuAlignRight = {
    id: 21,
    icon: '&#xe70b;',
    r180: 1,
    text: 'ef',
    to: 'right'
};
let MenuAlignCenter = {
    id: 22,
    icon: '&#xe711;',
    r90: 1,
    text: 'eg',
    to: 'center'
};
let MenuAlignTop = {
    id: 23,
    icon: '&#xe70d;',
    text: 'eh',
    to: 'top'
};
let MenuAlignBottom = {
    id: 24,
    icon: '&#xe70d;',
    r180: 1,
    text: 'ei',
    to: 'bottom'
};
let MenuAlignMiddle = {
    id: 25,
    icon: '&#xe711;',
    text: 'ej',
    to: 'middle'
};
let MenuGroup = {
    id: 31,
    icon: '&#xe669;',
    text: 'ek',
    short: 'Ctrl/Shift+G'
};
let MenuUngroup = {
    id: 32,
    icon: '&#xe684;',
    text: 'el',
    short: 'Shift/Ctrl+G'
};
let MenuSyncWidthAsHeight = {
    id: 41,
    text: 'em'
};
let MenuSyncHeightAsWidth = {
    id: 42,
    text: 'en'
};
let MenuSyncWidth = {
    id: 43,
    text: 'eo'
};
let MenuSyncHeight = {
    id: 44,
    text: 'ep'
};
let MenuClearHodStage = {
    id: 50,
    text: 'eq'
};
let Cache = {};
let TranslateMenu = menus => {
    return lang => {
        if (!menus['dE']) { //给菜单列表临时增加id，用于缓存
            menus['dE'] = guid('m_');
        }
        let key = lang + menus['dE'];
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
    'dE': MenuAll.id,
    'dF': MenuPaste.id,
    'dG': MenuTop.id,
    'dH': MenuUp.id,
    'dI': MenuBottom.id,
    'dJ': MenuDown.id,
    'dK': MenuCut.id,
    'dL': MenuCopy.id,
    'dM': MenuDuplicate.id,
    'dN': MenuDelete.id,
    'dO': MenuClear.id,
    'dP': MenuNew.id,
    'dQ': MenuUngroup.id,
    'dR': MenuGroup.id,
    'dS': MenuSyncWidthAsHeight.id,
    'dT': MenuSyncHeightAsWidth.id,
    'dU': MenuSyncWidth.id,
    'dV': MenuSyncHeight.id,
    'dW': MenuAlignBottom.id,
    'dX': MenuAlignCenter.id,
    'dY': MenuAlignLeft.id,
    'dZ': MenuAlignMiddle.id,
    'd0': MenuAlignRight.id,
    'd1': MenuAlignTop.id,
    'd2': MenuClearHodStage.id,
    'd3': MenuReverse.id,
    //单个元素的右键菜单
    'd4': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuTop, MenuUp, MenuDown, MenuBottom, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //2个元素
    'd5': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuAlignLeft, MenuAlignCenter, MenuAlignRight, MenuAlignTop, MenuAlignMiddle, MenuAlignBottom, MenuSpliter, MenuSyncWidth, MenuSyncHeight, MenuSyncWidthAsHeight, MenuSyncHeightAsWidth, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //多选元素时的右键菜单
    'd6': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuAlignLeft, MenuAlignCenter, MenuAlignRight, MenuAlignTop, MenuAlignMiddle, MenuAlignBottom, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //在设计区时的右键菜单
    'd7': TranslateMenu([MenuAll, MenuPaste, MenuSpliter, MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuClear, MenuNew]),
    //在容器上时的右键菜单
    'd8': TranslateMenu([MenuAll, MenuPaste, MenuClearHodStage, MenuSpliter, MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuUp, MenuTop, MenuDown, MenuBottom, MenuSpliter, MenuReverse])
};

});