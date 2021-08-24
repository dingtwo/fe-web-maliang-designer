/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/5d",["51","./53"],(require,exports,module)=>{


/**
 * 历史记录
 */
let magix_1 = require("51");
let const_1 = require("./53");
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
        'gd': 'g4',
        'ge': '&#xe653;',
        'gf': Enum_History_Init
    }, {
        'gd': 'g5',
        'ge': '&#xe68b;',
        'gf': Enum_Clear_Help_Line
    }, {
        'gd': 'g6',
        'ge': '&#xe68b;',
        'gf': Enum_Add_Help_Line
    }, {
        'gd': 'g7',
        'ge': '&#xe68b;',
        'gf': Enum_Delete_Help_Line
    }, {
        'gd': 'g8',
        'ge': '&#xe68b;',
        'gf': Enum_Move_Help_Line
    }, {
        'gd': 'g9',
        'ge': '&#xe7db;',
        'gf': Enum_Clear_Stage
    }, {
        'gd': 'h_',
        'ge': '&#xe699;',
        'gf': Enum_Zoomin_Stage
    }, {
        'gd': 'ha',
        'ge': '&#xe602;',
        'gf': Enum_Zoomout_Stage
    }, {
        'gd': 'hb',
        'ge': '&#xe612;',
        'gf': Enum_Create_Page
    }, {
        'gd': 'hc',
        'ge': '&#xe65d;',
        'gf': Enum_Element_Lost_Focus
    }, {
        'gd': 'hd',
        'ge': '&#xe65d;',
        'gf': Enum_Element_Get_Focus
    }, {
        'gd': 'he',
        'ge': '&#xe648;',
        'gf': Enum_Element_Moved
    }, {
        'gd': 'hf',
        'ge': '&#xe694;',
        'gf': Enum_Element_Aligned
    }, {
        'gd': 'hg',
        'ge': '&#xe662;',
        'gf': Enum_Element_Sync_Size
    }, {
        'gd': 'hh',
        'ge': '&#xe652;',
        'gf': Enum_Element_Added
    }, {
        'gd': 'hi',
        'ge': '&#xe6b3;',
        'gf': Enum_Element_Removed
    }, {
        'gd': 'hj',
        'ge': '&#xe669;',
        'gf': Enum_Element_Grouped
    }, {
        'gd': 'hk',
        'ge': '&#xe684;',
        'gf': Enum_Element_Ungrouped
    }, {
        'gd': 'hl',
        'ge': '&#xe63e;',
        'gf': Enum_Element_Locked
    }, {
        'gd': 'hm',
        'ge': '&#xe637;',
        'gf': Enum_Element_Unlocked
    }, {
        'gd': 'hn',
        'ge': '&#xe656;',
        'gf': Enum_Element_ZIndex
    }, {
        'gd': 'ho',
        'ge': '&#xe6c1;',
        'gf': Enum_Element_Pasted
    }, {
        'gd': 'hp',
        'ge': '&#xe641;',
        'gf': Enum_Element_Rotated
    }, {
        'gd': 'hq',
        'ge': '&#xe6da;',
        'gf': Enum_Element_Modified_Ctrl_Point
    }, {
        'gd': 'hr',
        'ge': '&#xe6da;',
        'gf': Enum_Element_Modified_Mod_Point
    }, {
        'gd': 'hs',
        'ge': '&#xe673;',
        'gf': Enum_Element_Modified_Size
    }, {
        'gd': 'ht',
        'ge': '&#xe655;',
        'gf': Enum_Element_Props
    }, {
        'gd': 'hu',
        'ge': '&#xe6bf;',
        'gf': Enum_Element_Cut
    }, {
        'gd': 'hv',
        'ge': '&#xe6b1;',
        'gf': Enum_Element_Duplicate
    }, {
        'gd': 'hw',
        'ge': '&#xe6bb;',
        'gf': Enum_Element_Avg_Hor
    }, {
        'gd': 'hx',
        'ge': '&#xe6cf;',
        'gf': Enum_Element_Avg_Ver
    }, {
        'gd': 'hy',
        'ge': '&#xe63f;',
        'gf': Enum_Example_From_List
    }, {
        'gd': 'hz',
        'ge': '&#xe63f;',
        'gf': Enum_Example_From_Remote
    }, {
        'gd': 'hA',
        'ge': '&#xe63f;',
        'gf': Enum_Example_From_Custom
    }];
let HistoryActionsMap = toMap(HistoryActions, 'gf');
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
        'gk': i['ge'],
        'gl': i['gd'],
        'gm': extDescription,
        'gn': JSON.stringify({
            unit: State.get('gf'),
            page: State.get('gm'),
            scale: State.get('ge'),
            elements: State.get('gl'),
            select: State.get('gd'),
            groups: State.get('go'),
            xLines: State.get('gg'),
            yLines: State.get('gh'),
            clipboard: State.get('gp')
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
        HistoryList.splice(HistoryIndex + 1, const_1["gl"], history);
        while (HistoryList.length > const_1["gl"]) {
            DefaultStage = HistoryList.shift();
        }
        HistoryIndex = HistoryList.length - 1;
        BuferStage = null;
    }
    else {
        DefaultStage = history;
    }
    if (!holdEvent) {
        State.fire('gw');
    }
};
/**
 * 检查是否有等待中的历史记录，比如快速输入,500ms延迟记录历史，如果这时有其它不同类型的历史记录进来，则需要立即推入延迟等待中的历史
 * @param type 当前要记录的历史类型
 */
let CheckLastWaitingHistory = (type = 'go') => {
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
        State.fire('gi', {
            json: JSON.parse(current['gn'])
        });
    }
};
module.exports= {
    /**
     * 以下把定义的数字常量转成字符串导出，方便外部使用
     */
    'ge': Enum_Clear_Help_Line,
    'gf': Enum_Add_Help_Line,
    'gg': Enum_Delete_Help_Line,
    'gh': Enum_Move_Help_Line,
    'gp': Enum_Clear_Stage,
    'gq': Enum_Create_Page,
    'gr': Enum_Zoomin_Stage,
    'gs': Enum_Zoomout_Stage,
    'gt': Enum_Element_Lost_Focus,
    'gu': Enum_Element_Get_Focus,
    'gv': Enum_Element_Moved,
    'gw': Enum_Element_Aligned,
    'gx': Enum_Element_Sync_Size,
    'gy': Enum_Element_Added,
    'gz': Enum_Element_Removed,
    'gA': Enum_Element_Grouped,
    'gB': Enum_Element_Ungrouped,
    'gC': Enum_Element_Locked,
    'gD': Enum_Element_Unlocked,
    'gE': Enum_Element_ZIndex,
    'gF': Enum_Element_Pasted,
    'gG': Enum_Element_Rotated,
    'gH': Enum_Element_Modified_Ctrl_Point,
    'gI': Enum_Element_Modified_Mod_Point,
    'gJ': Enum_Element_Modified_Size,
    'gK': Enum_Element_Props,
    'gL': Enum_Element_Cut,
    'gM': Enum_Element_Duplicate,
    'gN': Enum_Element_Avg_Hor,
    'gO': Enum_Element_Avg_Ver,
    'gj': Enum_Example_From_List,
    'gP': Enum_Example_From_Remote,
    'gi': Enum_Example_From_Custom,
    /**
     * 设计器初始化时，需要先保存一下默认状态
     */
    'gQ'() {
        if (!DefaultStage) {
            DefaultStage = GetSnapshot(Enum_History_Init);
        }
    },
    /**
     * 查询当前能否进行undo与redo
     */
    'gR'() {
        return {
            canRedo: HistoryList.length - 1 > HistoryIndex,
            canUndo: HistoryIndex >= 0
        };
    },
    /**
     * 获取历史记录当前状态，历史列表、当前历史状态和最原始的历史状态
     */
    'gS'() {
        return {
            '_hF': HistoryList,
            '_hG': HistoryIndex,
            '_hH': DefaultStage
        };
    },
    /**
     * 通过索引更新历史
     * @param index 历史索引
     */
    'gT'(index) {
        if (HistoryIndex != index) {
            HistoryIndex = index;
            SetHistory(index, 1);
        }
    },
    /**
     * 清空历史记录
     */
    'gU'() {
        clearTimeout(BuferTimer);
        HistoryIndex = -1;
        HistoryList.length = 0;
        DefaultStage = null;
        LastType = '';
    },
    /**
     * 撤销操作
     */
    'gV'() {
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
    'gW'() {
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
    'gX'(at) {
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
            State.fire('gw');
        }
    },
    /**
     * 保存历史记录
     * @param action 保存动作类型
     * @param extTitle 扩展标题描述
     * @param type 历史类型，配合waiting使用
     * @param waiting 延迟多少毫秒后写入历史记录，即一定时间内type相同的历史只记录一次，比如按下键盘箭头进行元素位置移动。
     */
    'gd'(action, extTitle = '', type = 'gY', waiting = 0) {
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