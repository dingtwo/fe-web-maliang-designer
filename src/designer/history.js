/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/history",["magix5","./const"],(require,exports,module)=>{


/**
 * 历史记录
 */
let magix_1 = require("magix5");
let const_1 = require("./const");
let { State, toMap } = magix_1;
/**
 * 以下常量用于对存放的历史记录增加相应的描述，用于历史面板的展示。比如用户清除了所有辅助线，则记录历史时，声明当前历史记录是类型10，则记录10对应的历史描述
 */
let Enum_History_Init = 0;
//1*分配给辅助线
let Enum_Clear_Help_Line = 10;
let Enum_Add_Help_Line = 11;
let Enum_Delete_Help_Line = 12;
let Enum_Move_Help_Line = 13;
//2*分配给设计区
let Enum_Clear_Stage = 20;
let Enum_Zoomin_Stage = 21;
let Enum_Zoomout_Stage = 22;
let Enum_Create_Page = 23;
//5*~6*分配给元素
let Enum_Element_Lost_Focus = 50;
let Enum_Element_Get_Focus = 51;
let Enum_Element_Moved = 52;
let Enum_Element_Aligned = 53;
let Enum_Element_Sync_Size = 54;
let Enum_Element_Added = 56;
let Enum_Element_Removed = 57;
let Enum_Element_Grouped = 58;
let Enum_Element_Ungrouped = 59;
let Enum_Element_Locked = 60;
let Enum_Element_Unlocked = 61;
let Enum_Element_ZIndex = 62;
let Enum_Element_Pasted = 63;
let Enum_Element_Rotated = 64;
let Enum_Element_Modified_Ctrl_Point = 65;
let Enum_Element_Modified_Size = 66;
let Enum_Element_Modified_Mod_Point = 67;
let Enum_Element_Props = 68;
let Enum_Element_Cut = 69;
let Enum_Element_Duplicate = 70;
let Enum_Element_Avg_Hor = 71;
let Enum_Element_Avg_Ver = 72;
//9*分配给示例
let Enum_Example_From_List = 90;
let Enum_Example_From_Remote = 91;
let Enum_Example_From_Custom = 92;
/**
 * 以下用于对数字类型翻译成相应的描述及icon
 */
let HistoryActions = [{
        '@:{history.action#description~rs}': '@:{lang#history.action.init~rs}',
        '@:{history.action#icon~rs}': '&#xe653;',
        '@:{history.action#type~rs}': Enum_History_Init
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.clear.help.line~rs}',
        '@:{history.action#icon~rs}': '&#xe68b;',
        '@:{history.action#type~rs}': Enum_Clear_Help_Line
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.add.help.line~rs}',
        '@:{history.action#icon~rs}': '&#xe68b;',
        '@:{history.action#type~rs}': Enum_Add_Help_Line
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.delete.help.line~rs}',
        '@:{history.action#icon~rs}': '&#xe68b;',
        '@:{history.action#type~rs}': Enum_Delete_Help_Line
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.move.help.line~rs}',
        '@:{history.action#icon~rs}': '&#xe68b;',
        '@:{history.action#type~rs}': Enum_Move_Help_Line
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.clear.stage~rs}',
        '@:{history.action#icon~rs}': '&#xe7db;',
        '@:{history.action#type~rs}': Enum_Clear_Stage
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.zoomin.stage~rs}',
        '@:{history.action#icon~rs}': '&#xe699;',
        '@:{history.action#type~rs}': Enum_Zoomin_Stage
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.zoomout.stage~rs}',
        '@:{history.action#icon~rs}': '&#xe602;',
        '@:{history.action#type~rs}': Enum_Zoomout_Stage
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.new.page~rs}',
        '@:{history.action#icon~rs}': '&#xe612;',
        '@:{history.action#type~rs}': Enum_Create_Page
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.lost.focus~rs}',
        '@:{history.action#icon~rs}': '&#xe65d;',
        '@:{history.action#type~rs}': Enum_Element_Lost_Focus
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.get.focus~rs}',
        '@:{history.action#icon~rs}': '&#xe65d;',
        '@:{history.action#type~rs}': Enum_Element_Get_Focus
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.moved~rs}',
        '@:{history.action#icon~rs}': '&#xe648;',
        '@:{history.action#type~rs}': Enum_Element_Moved
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.aligned~rs}',
        '@:{history.action#icon~rs}': '&#xe694;',
        '@:{history.action#type~rs}': Enum_Element_Aligned
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.sync.size~rs}',
        '@:{history.action#icon~rs}': '&#xe662;',
        '@:{history.action#type~rs}': Enum_Element_Sync_Size
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.added~rs}',
        '@:{history.action#icon~rs}': '&#xe652;',
        '@:{history.action#type~rs}': Enum_Element_Added
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.removed~rs}',
        '@:{history.action#icon~rs}': '&#xe6b3;',
        '@:{history.action#type~rs}': Enum_Element_Removed
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.grouped~rs}',
        '@:{history.action#icon~rs}': '&#xe669;',
        '@:{history.action#type~rs}': Enum_Element_Grouped
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.ungrouped~rs}',
        '@:{history.action#icon~rs}': '&#xe684;',
        '@:{history.action#type~rs}': Enum_Element_Ungrouped
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.locked~rs}',
        '@:{history.action#icon~rs}': '&#xe63e;',
        '@:{history.action#type~rs}': Enum_Element_Locked
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.unlocked~rs}',
        '@:{history.action#icon~rs}': '&#xe637;',
        '@:{history.action#type~rs}': Enum_Element_Unlocked
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.zindex~rs}',
        '@:{history.action#icon~rs}': '&#xe656;',
        '@:{history.action#type~rs}': Enum_Element_ZIndex
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.pasted~rs}',
        '@:{history.action#icon~rs}': '&#xe6c1;',
        '@:{history.action#type~rs}': Enum_Element_Pasted
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.rotated~rs}',
        '@:{history.action#icon~rs}': '&#xe641;',
        '@:{history.action#type~rs}': Enum_Element_Rotated
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.modified.ctrl.point~rs}',
        '@:{history.action#icon~rs}': '&#xe6da;',
        '@:{history.action#type~rs}': Enum_Element_Modified_Ctrl_Point
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.modified.mod.point~rs}',
        '@:{history.action#icon~rs}': '&#xe6da;',
        '@:{history.action#type~rs}': Enum_Element_Modified_Mod_Point
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.modified.size~rs}',
        '@:{history.action#icon~rs}': '&#xe673;',
        '@:{history.action#type~rs}': Enum_Element_Modified_Size
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.modified.props~rs}',
        '@:{history.action#icon~rs}': '&#xe655;',
        '@:{history.action#type~rs}': Enum_Element_Props
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.cut~rs}',
        '@:{history.action#icon~rs}': '&#xe6bf;',
        '@:{history.action#type~rs}': Enum_Element_Cut
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.duplicate~rs}',
        '@:{history.action#icon~rs}': '&#xe6b1;',
        '@:{history.action#type~rs}': Enum_Element_Duplicate
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.avg.h~rs}',
        '@:{history.action#icon~rs}': '&#xe6bb;',
        '@:{history.action#type~rs}': Enum_Element_Avg_Hor
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.element.avg.v~rs}',
        '@:{history.action#icon~rs}': '&#xe6cf;',
        '@:{history.action#type~rs}': Enum_Element_Avg_Ver
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.example.from.list~rs}',
        '@:{history.action#icon~rs}': '&#xe63f;',
        '@:{history.action#type~rs}': Enum_Example_From_List
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.example.from.remote~rs}',
        '@:{history.action#icon~rs}': '&#xe63f;',
        '@:{history.action#type~rs}': Enum_Example_From_Remote
    }, {
        '@:{history.action#description~rs}': '@:{lang#history.action.example.from.custom~rs}',
        '@:{history.action#icon~rs}': '&#xe63f;',
        '@:{history.action#type~rs}': Enum_Example_From_Custom
    }];
let HistoryActionsMap = toMap(HistoryActions, '@:{history.action#type~rs}');
let HistoryList = []; //历史记录
let HistoryIndex = -1; //当前索引
let BuferStage = null; //对于连续操作的动作，比如按下键盘移动，并不是每次都记录历史记录。会采用延迟多少毫秒后未有新的动作则进行记录
let BuferTimer; //缓存定时器
let LastType = ''; //根据类型来决定是否把上一次的记录立即存储到列表中
//历史记录只能还原到的编辑区状态
let DefaultStage = null;
//过滤掉不需要的属性
let FilterDebug = (key, value) => {
    if (key.startsWith('@:') ||
        key.startsWith('_')) {
        return undefined;
    }
    return value;
};
let FilterRelease = (key, value) => key.startsWith('_') ? undefined : value;
/**
 * 获取当前设计区的快照
 * @param type 历史类型
 * @param extDescription 历史扩展描述
 */
let GetSnapshot = (type, extDescription = '') => {
    let i = HistoryActionsMap[type];
    return {
        '@:{history#icon~rs}': i['@:{history.action#icon~rs}'],
        '@:{history#description~rs}': i['@:{history.action#description~rs}'],
        '@:{history#ext.description~rs}': extDescription,
        '@:{history#content~rs}': JSON.stringify({
            unit: State.get('@:{global#stage.unit~rs}'),
            page: State.get('@:{global#stage.page~rs}'),
            scale: State.get('@:{global#stage.scale~rs}'),
            elements: State.get('@:{global#stage.elements~rs}'),
            select: State.get('@:{global#stage.select.elements~rs}'),
            groups: State.get('@:{global#stage.elements.groups~rs}'),
            xLines: State.get('@:{global#stage.x.help.lines~rs}'),
            yLines: State.get('@:{global#stage.y.help.lines~rs}'),
            clipboard: State.get('@:{global#stage.clipboard~rs}')
        }, DEBUG ? FilterDebug : FilterRelease)
    };
};
/**
 * 记录历史
 * @param history 历史记录
 * @param holdEvent 是否阻止事件的派发
 */
let PushUndo = (history, holdEvent) => {
    if (DefaultStage) {
        HistoryList.splice(HistoryIndex + 1, const_1["@:{const#history.max.count~rs}"], history);
        while (HistoryList.length > const_1["@:{const#history.max.count~rs}"]) {
            DefaultStage = HistoryList.shift();
        }
        HistoryIndex = HistoryList.length - 1;
        BuferStage = null;
    }
    else {
        DefaultStage = history;
    }
    if (!holdEvent) {
        State.fire('@:{event#history.status.change~rs}');
    }
};
/**
 * 检查是否有等待中的历史记录，比如快速输入,500ms延迟记录历史，如果这时有其它不同类型的历史记录进来，则需要立即推入延迟等待中的历史
 * @param type 当前要记录的历史类型
 */
let CheckLastWaitingHistory = (type = '@:{history#default.check.save.type~rs}') => {
    if (type != LastType) { //如果当前类型不与最后一个类型相同
        if (BuferStage) { //如果有缓存记录，则立即记录到历史记录里
            clearTimeout(BuferTimer);
            PushUndo(BuferStage, 1);
        }
        LastType = type;
    }
};
/**
 * 还原任意历史记录为当前状态
 * @param index 历史索引
 * @param canUseDefault 是否可使用默认的历史记录
 */
let SetHistory = (index, canUseDefault) => {
    let current = HistoryList[index];
    if (!current &&
        canUseDefault) {
        current = DefaultStage;
    }
    if (current) {
        State.fire('@:{event#history.shift.change~rs}', {
            json: JSON.parse(current['@:{history#content~rs}'])
        });
    }
};
module.exports= {
    /**
     * 以下把定义的数字常量转成字符串导出，方便外部使用
     */
    '@:{history#clear.help.line~rs}': Enum_Clear_Help_Line,
    '@:{history#add.help.line~rs}': Enum_Add_Help_Line,
    '@:{history#delete.help.line~rs}': Enum_Delete_Help_Line,
    '@:{history#move.help.line~rs}': Enum_Move_Help_Line,
    '@:{history#clear.stage~rs}': Enum_Clear_Stage,
    '@:{history#new.page~rs}': Enum_Create_Page,
    '@:{history#zoomin.stage~rs}': Enum_Zoomin_Stage,
    '@:{history#zoomout.stage~rs}': Enum_Zoomout_Stage,
    '@:{history#element.lost.focus~rs}': Enum_Element_Lost_Focus,
    '@:{history#element.get.focus~rs}': Enum_Element_Get_Focus,
    '@:{history#element.moved~rs}': Enum_Element_Moved,
    '@:{history#element.aligned~rs}': Enum_Element_Aligned,
    '@:{history#element.sync.size~rs}': Enum_Element_Sync_Size,
    '@:{history#element.added~rs}': Enum_Element_Added,
    '@:{history#element.removed~rs}': Enum_Element_Removed,
    '@:{history#element.grouped~rs}': Enum_Element_Grouped,
    '@:{history#element.ungrouped~rs}': Enum_Element_Ungrouped,
    '@:{history#element.locked~rs}': Enum_Element_Locked,
    '@:{history#element.unlocked~rs}': Enum_Element_Unlocked,
    '@:{history#element.z.index~rs}': Enum_Element_ZIndex,
    '@:{history#element.pasted~rs}': Enum_Element_Pasted,
    '@:{history#element.rotated~rs}': Enum_Element_Rotated,
    '@:{history#element.modified.ctrl.point~rs}': Enum_Element_Modified_Ctrl_Point,
    '@:{history#element.modified.mod.point~rs}': Enum_Element_Modified_Mod_Point,
    '@:{history#element.modified.size~rs}': Enum_Element_Modified_Size,
    '@:{history#element.modified.props~rs}': Enum_Element_Props,
    '@:{history#element.cut~rs}': Enum_Element_Cut,
    '@:{history#element.duplicate~rs}': Enum_Element_Duplicate,
    '@:{history#element.avg.h~rs}': Enum_Element_Avg_Hor,
    '@:{history#element.avg.v~rs}': Enum_Element_Avg_Ver,
    '@:{history#example.from.list~rs}': Enum_Example_From_List,
    '@:{history#example.from.remote~rs}': Enum_Example_From_Remote,
    '@:{history#example.from.custom~rs}': Enum_Example_From_Custom,
    /**
     * 设计器初始化时，需要先保存一下默认状态
     */
    '@:{history#save.default~rs}'() {
        if (!DefaultStage) {
            DefaultStage = GetSnapshot(Enum_History_Init);
        }
    },
    /**
     * 查询当前能否进行undo与redo
     */
    '@:{history#query.status~rs}'() {
        return {
            canRedo: HistoryList.length - 1 > HistoryIndex,
            canUndo: HistoryIndex >= 0
        };
    },
    /**
     * 获取历史记录当前状态，历史列表、当前历史状态和最原始的历史状态
     */
    '@:{history#get.history.info~rs}'() {
        return {
            '@:{list~rs}': HistoryList,
            '@:{index~rs}': HistoryIndex,
            '@:{bottom~rs}': DefaultStage
        };
    },
    /**
     * 通过索引更新历史
     * @param index 历史索引
     */
    '@:{history#set.history~rs}'(index) {
        if (HistoryIndex != index) {
            HistoryIndex = index;
            SetHistory(index, 1);
        }
    },
    /**
     * 清空历史记录
     */
    '@:{history#clear~rs}'() {
        clearTimeout(BuferTimer);
        HistoryIndex = -1;
        HistoryList.length = 0;
        DefaultStage = null;
        LastType = '';
    },
    /**
     * 撤销操作
     */
    '@:{history#undo~rs}'() {
        CheckLastWaitingHistory();
        let c = HistoryList.length;
        //当有历史记录时我们才进行还原操作
        if (c > 0 &&
            HistoryIndex > -1) {
            //如果剩余列表已经没了，则使用默认的
            HistoryIndex -= 1;
            SetHistory(HistoryIndex, 1);
        }
    },
    /**
     * 重做操作
     */
    '@:{history#redo~rs}'() {
        CheckLastWaitingHistory();
        let c = HistoryList.length;
        if (c &&
            HistoryIndex < c - 1) {
            HistoryIndex += 1;
            SetHistory(HistoryIndex);
        }
    },
    /**
     * 删除指定位置的历史记录
     * @param at 历史记录位置
     */
    '@:{history#remove.at~rs}'(at) {
        CheckLastWaitingHistory();
        HistoryList.splice(at, 1);
        if (at == HistoryIndex &&
            HistoryIndex >= HistoryList.length) {
            HistoryIndex -= 1;
            SetHistory(HistoryIndex, 1);
        }
        else {
            if (at < HistoryIndex) {
                HistoryIndex -= 1;
            }
            State.fire('@:{event#history.status.change~rs}');
        }
    },
    /**
     * 保存历史记录
     * @param action 保存动作类型
     * @param extTitle 扩展标题描述
     * @param type 历史类型，配合waiting使用
     * @param waiting 延迟多少毫秒后写入历史记录，即一定时间内type相同的历史只记录一次，比如按下键盘箭头进行元素位置移动。
     */
    '@:{history#save~rs}'(action, extTitle = '', type = '@:{history#default.save.type~rs}', waiting = 0) {
        let stage = GetSnapshot(action, extTitle); //获取当前快照
        CheckLastWaitingHistory(type);
        if (waiting) { //如果有等待
            BuferStage = stage; //缓存
            clearTimeout(BuferTimer);
            //到达一定时间如果没有新的相似记录进来，则记录
            BuferTimer = setTimeout(PushUndo, waiting, BuferStage);
        }
        else {
            PushUndo(stage);
        }
    }
};

});