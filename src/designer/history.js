/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/4q",["4e","./4g"],(require,exports,module)=>{


/**
 * 历史记录
 */
let magix_1 = require("4e");
let const_1 = require("./4g");
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
        'dE': 'eu',
        'dF': '&#xe653;',
        'dG': Enum_History_Init
    }, {
        'dE': 'ev',
        'dF': '&#xe68b;',
        'dG': Enum_Clear_Help_Line
    }, {
        'dE': 'ew',
        'dF': '&#xe68b;',
        'dG': Enum_Add_Help_Line
    }, {
        'dE': 'ex',
        'dF': '&#xe68b;',
        'dG': Enum_Delete_Help_Line
    }, {
        'dE': 'ey',
        'dF': '&#xe68b;',
        'dG': Enum_Move_Help_Line
    }, {
        'dE': 'ez',
        'dF': '&#xe7db;',
        'dG': Enum_Clear_Stage
    }, {
        'dE': 'eA',
        'dF': '&#xe699;',
        'dG': Enum_Zoomin_Stage
    }, {
        'dE': 'eB',
        'dF': '&#xe602;',
        'dG': Enum_Zoomout_Stage
    }, {
        'dE': 'eC',
        'dF': '&#xe612;',
        'dG': Enum_Create_Page
    }, {
        'dE': 'eD',
        'dF': '&#xe65d;',
        'dG': Enum_Element_Lost_Focus
    }, {
        'dE': 'eE',
        'dF': '&#xe65d;',
        'dG': Enum_Element_Get_Focus
    }, {
        'dE': 'eF',
        'dF': '&#xe648;',
        'dG': Enum_Element_Moved
    }, {
        'dE': 'eG',
        'dF': '&#xe694;',
        'dG': Enum_Element_Aligned
    }, {
        'dE': 'eH',
        'dF': '&#xe662;',
        'dG': Enum_Element_Sync_Size
    }, {
        'dE': 'eI',
        'dF': '&#xe652;',
        'dG': Enum_Element_Added
    }, {
        'dE': 'eJ',
        'dF': '&#xe6b3;',
        'dG': Enum_Element_Removed
    }, {
        'dE': 'eK',
        'dF': '&#xe669;',
        'dG': Enum_Element_Grouped
    }, {
        'dE': 'eL',
        'dF': '&#xe684;',
        'dG': Enum_Element_Ungrouped
    }, {
        'dE': 'eM',
        'dF': '&#xe63e;',
        'dG': Enum_Element_Locked
    }, {
        'dE': 'eN',
        'dF': '&#xe637;',
        'dG': Enum_Element_Unlocked
    }, {
        'dE': 'eO',
        'dF': '&#xe656;',
        'dG': Enum_Element_ZIndex
    }, {
        'dE': 'eP',
        'dF': '&#xe6c1;',
        'dG': Enum_Element_Pasted
    }, {
        'dE': 'eQ',
        'dF': '&#xe641;',
        'dG': Enum_Element_Rotated
    }, {
        'dE': 'eR',
        'dF': '&#xe6da;',
        'dG': Enum_Element_Modified_Ctrl_Point
    }, {
        'dE': 'eS',
        'dF': '&#xe6da;',
        'dG': Enum_Element_Modified_Mod_Point
    }, {
        'dE': 'eT',
        'dF': '&#xe673;',
        'dG': Enum_Element_Modified_Size
    }, {
        'dE': 'eU',
        'dF': '&#xe655;',
        'dG': Enum_Element_Props
    }, {
        'dE': 'eV',
        'dF': '&#xe6bf;',
        'dG': Enum_Element_Cut
    }, {
        'dE': 'eW',
        'dF': '&#xe6b1;',
        'dG': Enum_Element_Duplicate
    }, {
        'dE': 'eX',
        'dF': '&#xe6bb;',
        'dG': Enum_Element_Avg_Hor
    }, {
        'dE': 'eY',
        'dF': '&#xe6cf;',
        'dG': Enum_Element_Avg_Ver
    }, {
        'dE': 'eZ',
        'dF': '&#xe63f;',
        'dG': Enum_Example_From_List
    }, {
        'dE': 'e0',
        'dF': '&#xe63f;',
        'dG': Enum_Example_From_Remote
    }, {
        'dE': 'e1',
        'dF': '&#xe63f;',
        'dG': Enum_Example_From_Custom
    }];
let HistoryActionsMap = toMap(HistoryActions, 'dG');
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
        'dL': i['dF'],
        'dM': i['dE'],
        'dN': extDescription,
        'dO': JSON.stringify({
            unit: State.get('dG'),
            page: State.get('dN'),
            scale: State.get('dF'),
            elements: State.get('dM'),
            select: State.get('dE'),
            groups: State.get('dP'),
            xLines: State.get('dH'),
            yLines: State.get('dI'),
            clipboard: State.get('dQ')
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
        HistoryList.splice(HistoryIndex + 1, const_1["dM"], history);
        while (HistoryList.length > const_1["dM"]) {
            DefaultStage = HistoryList.shift();
        }
        HistoryIndex = HistoryList.length - 1;
        BuferStage = null;
    }
    else {
        DefaultStage = history;
    }
    if (!holdEvent) {
        State.fire('dX');
    }
};
/**
 * 检查是否有等待中的历史记录，比如快速输入,500ms延迟记录历史，如果这时有其它不同类型的历史记录进来，则需要立即推入延迟等待中的历史
 * @param type 当前要记录的历史类型
 */
let CheckLastWaitingHistory = (type = 'dP') => {
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
        State.fire('dJ', {
            json: JSON.parse(current['dO'])
        });
    }
};
module.exports= {
    /**
     * 以下把定义的数字常量转成字符串导出，方便外部使用
     */
    'dF': Enum_Clear_Help_Line,
    'dG': Enum_Add_Help_Line,
    'dH': Enum_Delete_Help_Line,
    'dI': Enum_Move_Help_Line,
    'dQ': Enum_Clear_Stage,
    'dR': Enum_Create_Page,
    'dS': Enum_Zoomin_Stage,
    'dT': Enum_Zoomout_Stage,
    'dU': Enum_Element_Lost_Focus,
    'dV': Enum_Element_Get_Focus,
    'dW': Enum_Element_Moved,
    'dX': Enum_Element_Aligned,
    'dY': Enum_Element_Sync_Size,
    'dZ': Enum_Element_Added,
    'd0': Enum_Element_Removed,
    'd1': Enum_Element_Grouped,
    'd2': Enum_Element_Ungrouped,
    'd3': Enum_Element_Locked,
    'd4': Enum_Element_Unlocked,
    'd5': Enum_Element_ZIndex,
    'd6': Enum_Element_Pasted,
    'd7': Enum_Element_Rotated,
    'd8': Enum_Element_Modified_Ctrl_Point,
    'd9': Enum_Element_Modified_Mod_Point,
    'e_': Enum_Element_Modified_Size,
    'ea': Enum_Element_Props,
    'eb': Enum_Element_Cut,
    'ec': Enum_Element_Duplicate,
    'ed': Enum_Element_Avg_Hor,
    'ee': Enum_Element_Avg_Ver,
    'dK': Enum_Example_From_List,
    'ef': Enum_Example_From_Remote,
    'dJ': Enum_Example_From_Custom,
    /**
     * 设计器初始化时，需要先保存一下默认状态
     */
    'eg'() {
        if (!DefaultStage) {
            DefaultStage = GetSnapshot(Enum_History_Init);
        }
    },
    /**
     * 查询当前能否进行undo与redo
     */
    'eh'() {
        return {
            canRedo: HistoryList.length - 1 > HistoryIndex,
            canUndo: HistoryIndex >= 0
        };
    },
    /**
     * 获取历史记录当前状态，历史列表、当前历史状态和最原始的历史状态
     */
    'ei'() {
        return {
            '_e6': HistoryList,
            '_e7': HistoryIndex,
            '_e8': DefaultStage
        };
    },
    /**
     * 通过索引更新历史
     * @param index 历史索引
     */
    'ej'(index) {
        if (HistoryIndex != index) {
            HistoryIndex = index;
            SetHistory(index, 1);
        }
    },
    /**
     * 清空历史记录
     */
    'ek'() {
        clearTimeout(BuferTimer);
        HistoryIndex = -1;
        HistoryList.length = 0;
        DefaultStage = null;
        LastType = '';
    },
    /**
     * 撤销操作
     */
    'el'() {
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
    'em'() {
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
    'en'(at) {
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
            State.fire('dX');
        }
    },
    /**
     * 保存历史记录
     * @param action 保存动作类型
     * @param extTitle 扩展标题描述
     * @param type 历史类型，配合waiting使用
     * @param waiting 延迟多少毫秒后写入历史记录，即一定时间内type相同的历史只记录一次，比如按下键盘箭头进行元素位置移动。
     */
    'dE'(action, extTitle = '', type = 'eo', waiting = 0) {
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