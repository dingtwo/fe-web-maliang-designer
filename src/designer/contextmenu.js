/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/contextmenu",["magix5","../i18n/index"],(require,exports,module)=>{


/**
 * 右键菜单配置及管理对象
 */
let magix_1 = require("magix5");
let index_1 = require("../i18n/index");
let { guid } = magix_1;
let MenuSpliter = {
    spliter: true
};
let MenuAll = {
    id: 0,
    icon: '&#xe6b2;',
    text: '@:{lang#menu.select.all~rs}',
    short: 'Ctrl+A'
};
let MenuCopy = {
    id: 1,
    icon: '&#xe69a;',
    text: '@:{lang#menu.copy~rs}',
    short: 'Ctrl+C'
};
let MenuCut = {
    id: 2,
    icon: '&#xe6bf;',
    text: '@:{lang#menu.cut~rs}',
    short: 'Ctrl+X'
};
let MenuTop = {
    id: 3,
    icon: '&#xe607;',
    text: '@:{lang#menu.to.top~rs}',
    short: 'T'
};
let MenuBottom = {
    id: 4,
    icon: '&#xe607;',
    r180: 1,
    text: '@:{lang#menu.to.bottom~rs}',
    short: 'B'
};
let MenuUp = {
    id: 5,
    icon: '&#xe632;',
    text: '@:{lang#menu.move.up~rs}',
    short: 'U'
};
let MenuDown = {
    id: 6,
    icon: '&#xe632;',
    r180: 1,
    text: '@:{lang#menu.move.down~rs}',
    short: 'D'
};
let MenuDuplicate = {
    id: 7,
    icon: '&#xe6b1;',
    text: '@:{lang#menu.duplicate~rs}',
    short: 'Ctrl+D'
};
let MenuPaste = {
    id: 8,
    icon: '&#xe6c1;',
    text: '@:{lang#menu.paste~rs}',
    short: 'Ctrl+V'
};
let MenuDelete = {
    id: 9,
    icon: '&#xe6b3;',
    text: '@:{lang#menu.delete~rs}',
    short: 'Delete'
};
let MenuClear = {
    id: 10,
    icon: '&#xe7db;',
    text: '@:{lang#menu.clear~rs}',
    short: 'C'
};
let MenuNew = {
    id: 11,
    icon: '&#xe612;',
    text: '@:{lang#menu.new~rs}',
    short: 'N'
};
let MenuReverse = {
    id: 12,
    icon: '&#xe678;',
    text: '@:{lang#menu.reverse~rs}',
    short: 'Ctrl+Shift+I'
};
let MenuAlignLeft = {
    id: 20,
    icon: '&#xe70b;',
    text: '@:{lang#align.left~rs}',
    to: 'left'
};
let MenuAlignRight = {
    id: 21,
    icon: '&#xe70b;',
    r180: 1,
    text: '@:{lang#align.right~rs}',
    to: 'right'
};
let MenuAlignCenter = {
    id: 22,
    icon: '&#xe711;',
    r90: 1,
    text: '@:{lang#align.center~rs}',
    to: 'center'
};
let MenuAlignTop = {
    id: 23,
    icon: '&#xe70d;',
    text: '@:{lang#align.top~rs}',
    to: 'top'
};
let MenuAlignBottom = {
    id: 24,
    icon: '&#xe70d;',
    r180: 1,
    text: '@:{lang#align.bottom~rs}',
    to: 'bottom'
};
let MenuAlignMiddle = {
    id: 25,
    icon: '&#xe711;',
    text: '@:{lang#align.middle~rs}',
    to: 'middle'
};
let MenuGroup = {
    id: 31,
    icon: '&#xe669;',
    text: '@:{lang#menu.context.group~rs}',
    short: 'Ctrl/Shift+G'
};
let MenuUngroup = {
    id: 32,
    icon: '&#xe684;',
    text: '@:{lang#menu.context.ungroup~rs}',
    short: 'Shift/Ctrl+G'
};
let MenuSyncWidthAsHeight = {
    id: 41,
    text: '@:{lang#menu.sync.width.as.height~rs}'
};
let MenuSyncHeightAsWidth = {
    id: 42,
    text: '@:{lang#menu.sync.height.as.width~rs}'
};
let MenuSyncWidth = {
    id: 43,
    text: '@:{lang#menu.sync.width~rs}'
};
let MenuSyncHeight = {
    id: 44,
    text: '@:{lang#menu.sync.height~rs}'
};
let MenuClearHodStage = {
    id: 50,
    text: '@:{lang#menu.clear.hod.stage~rs}'
};
let Cache = {};
let TranslateMenu = menus => {
    return lang => {
        if (!menus['@:{menu#u.id~rs}']) { //给菜单列表临时增加id，用于缓存
            menus['@:{menu#u.id~rs}'] = guid('m_');
        }
        let key = lang + menus['@:{menu#u.id~rs}'];
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
    '@:{cm#all.id~rs}': MenuAll.id,
    '@:{cm#paste.id~rs}': MenuPaste.id,
    '@:{cm#top.id~rs}': MenuTop.id,
    '@:{cm#up.id~rs}': MenuUp.id,
    '@:{cm#bottom.id~rs}': MenuBottom.id,
    '@:{cm#down.id~rs}': MenuDown.id,
    '@:{cm#cut.id~rs}': MenuCut.id,
    '@:{cm#copy.id~rs}': MenuCopy.id,
    '@:{cm#duplicate.id~rs}': MenuDuplicate.id,
    '@:{cm#delete.id~rs}': MenuDelete.id,
    '@:{cm#clear.id~rs}': MenuClear.id,
    '@:{cm#new.id~rs}': MenuNew.id,
    '@:{cm#ungroup.id~rs}': MenuUngroup.id,
    '@:{cm#group.id~rs}': MenuGroup.id,
    '@:{cm#sync.width.as.height.id~rs}': MenuSyncWidthAsHeight.id,
    '@:{cm#sync.height.as.width.id~rs}': MenuSyncHeightAsWidth.id,
    '@:{cm#sync.width.id~rs}': MenuSyncWidth.id,
    '@:{cm#sync.height.id~rs}': MenuSyncHeight.id,
    '@:{cm#align.bottom.id~rs}': MenuAlignBottom.id,
    '@:{cm#align.center.id~rs}': MenuAlignCenter.id,
    '@:{cm#align.left.id~rs}': MenuAlignLeft.id,
    '@:{cm#align.middle.id~rs}': MenuAlignMiddle.id,
    '@:{cm#align.right.id~rs}': MenuAlignRight.id,
    '@:{cm#align.top.id~rs}': MenuAlignTop.id,
    '@:{cm#clear.hod.stage.id~rs}': MenuClearHodStage.id,
    '@:{cm#reverse.id~rs}': MenuReverse.id,
    //单个元素的右键菜单
    '@:{cm#single.element~rs}': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuTop, MenuUp, MenuDown, MenuBottom, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //2个元素
    '@:{cm#double.element~rs}': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuAlignLeft, MenuAlignCenter, MenuAlignRight, MenuAlignTop, MenuAlignMiddle, MenuAlignBottom, MenuSpliter, MenuSyncWidth, MenuSyncHeight, MenuSyncWidthAsHeight, MenuSyncHeightAsWidth, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //多选元素时的右键菜单
    '@:{cm#multiple.element~rs}': TranslateMenu([MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuAlignLeft, MenuAlignCenter, MenuAlignRight, MenuAlignTop, MenuAlignMiddle, MenuAlignBottom, MenuSpliter, MenuGroup, MenuUngroup, MenuSpliter, MenuReverse]),
    //在设计区时的右键菜单
    '@:{cm#stage~rs}': TranslateMenu([MenuAll, MenuPaste, MenuSpliter, MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuClear, MenuNew]),
    //在容器上时的右键菜单
    '@:{cm#hod.stage~rs}': TranslateMenu([MenuAll, MenuPaste, MenuClearHodStage, MenuSpliter, MenuCopy, MenuDuplicate, MenuCut, MenuDelete, MenuSpliter, MenuUp, MenuTop, MenuDown, MenuBottom, MenuSpliter, MenuReverse])
};

});