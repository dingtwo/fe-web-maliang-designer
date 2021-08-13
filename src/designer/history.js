/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/5o",["5c","./5e"],(require,exports,module)=>{


/**
 * 历史记录
 */
let magix_1 = require("5c");
let const_1 = require("./5e");
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
        'l2': 'mS',
        'l3': '&#xe653;',
        'l4': Enum_History_Init
    }, {
        'l2': 'mT',
        'l3': '&#xe68b;',
        'l4': Enum_Clear_Help_Line
    }, {
        'l2': 'mU',
        'l3': '&#xe68b;',
        'l4': Enum_Add_Help_Line
    }, {
        'l2': 'mV',
        'l3': '&#xe68b;',
        'l4': Enum_Delete_Help_Line
    }, {
        'l2': 'mW',
        'l3': '&#xe68b;',
        'l4': Enum_Move_Help_Line
    }, {
        'l2': 'mX',
        'l3': '&#xe7db;',
        'l4': Enum_Clear_Stage
    }, {
        'l2': 'mY',
        'l3': '&#xe699;',
        'l4': Enum_Zoomin_Stage
    }, {
        'l2': 'mZ',
        'l3': '&#xe602;',
        'l4': Enum_Zoomout_Stage
    }, {
        'l2': 'm0',
        'l3': '&#xe612;',
        'l4': Enum_Create_Page
    }, {
        'l2': 'm1',
        'l3': '&#xe65d;',
        'l4': Enum_Element_Lost_Focus
    }, {
        'l2': 'm2',
        'l3': '&#xe65d;',
        'l4': Enum_Element_Get_Focus
    }, {
        'l2': 'm3',
        'l3': '&#xe648;',
        'l4': Enum_Element_Moved
    }, {
        'l2': 'm4',
        'l3': '&#xe694;',
        'l4': Enum_Element_Aligned
    }, {
        'l2': 'm5',
        'l3': '&#xe662;',
        'l4': Enum_Element_Sync_Size
    }, {
        'l2': 'm6',
        'l3': '&#xe652;',
        'l4': Enum_Element_Added
    }, {
        'l2': 'm7',
        'l3': '&#xe6b3;',
        'l4': Enum_Element_Removed
    }, {
        'l2': 'm8',
        'l3': '&#xe669;',
        'l4': Enum_Element_Grouped
    }, {
        'l2': 'm9',
        'l3': '&#xe684;',
        'l4': Enum_Element_Ungrouped
    }, {
        'l2': 'n_',
        'l3': '&#xe63e;',
        'l4': Enum_Element_Locked
    }, {
        'l2': 'na',
        'l3': '&#xe637;',
        'l4': Enum_Element_Unlocked
    }, {
        'l2': 'nb',
        'l3': '&#xe656;',
        'l4': Enum_Element_ZIndex
    }, {
        'l2': 'nc',
        'l3': '&#xe6c1;',
        'l4': Enum_Element_Pasted
    }, {
        'l2': 'nd',
        'l3': '&#xe641;',
        'l4': Enum_Element_Rotated
    }, {
        'l2': 'ne',
        'l3': '&#xe6da;',
        'l4': Enum_Element_Modified_Ctrl_Point
    }, {
        'l2': 'nf',
        'l3': '&#xe6da;',
        'l4': Enum_Element_Modified_Mod_Point
    }, {
        'l2': 'ng',
        'l3': '&#xe673;',
        'l4': Enum_Element_Modified_Size
    }, {
        'l2': 'nh',
        'l3': '&#xe655;',
        'l4': Enum_Element_Props
    }, {
        'l2': 'ni',
        'l3': '&#xe6bf;',
        'l4': Enum_Element_Cut
    }, {
        'l2': 'nj',
        'l3': '&#xe6b1;',
        'l4': Enum_Element_Duplicate
    }, {
        'l2': 'nk',
        'l3': '&#xe6bb;',
        'l4': Enum_Element_Avg_Hor
    }, {
        'l2': 'nl',
        'l3': '&#xe6cf;',
        'l4': Enum_Element_Avg_Ver
    }, {
        'l2': 'nm',
        'l3': '&#xe63f;',
        'l4': Enum_Example_From_List
    }, {
        'l2': 'nn',
        'l3': '&#xe63f;',
        'l4': Enum_Example_From_Remote
    }, {
        'l2': 'no',
        'l3': '&#xe63f;',
        'l4': Enum_Example_From_Custom
    }];
let HistoryActionsMap = toMap(HistoryActions, 'l4');
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
        'l9': i['l3'],
        'm_': i['l2'],
        'ma': extDescription,
        'mb': JSON.stringify({
            unit: State.get('l4'),
            page: State.get('ma'),
            scale: State.get('l3'),
            elements: State.get('m_'),
            select: State.get('l2'),
            groups: State.get('mc'),
            xLines: State.get('l5'),
            yLines: State.get('l6'),
            clipboard: State.get('md')
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
        HistoryList.splice(HistoryIndex + 1, const_1["m_"], history);
        while (HistoryList.length > const_1["m_"]) {
            DefaultStage = HistoryList.shift();
        }
        HistoryIndex = HistoryList.length - 1;
        BuferStage = null;
    }
    else {
        DefaultStage = history;
    }
    if (!holdEvent) {
        State.fire('mk');
    }
};
/**
 * 检查是否有等待中的历史记录，比如快速输入,500ms延迟记录历史，如果这时有其它不同类型的历史记录进来，则需要立即推入延迟等待中的历史
 * @param type 当前要记录的历史类型
 */
let CheckLastWaitingHistory = (type = 'mc') => {
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
        State.fire('l7', {
            json: JSON.parse(current['mb'])
        });
    }
};
module.exports= {
    /**
     * 以下把定义的数字常量转成字符串导出，方便外部使用
     */
    'l3': Enum_Clear_Help_Line,
    'l4': Enum_Add_Help_Line,
    'l5': Enum_Delete_Help_Line,
    'l6': Enum_Move_Help_Line,
    'md': Enum_Clear_Stage,
    'me': Enum_Create_Page,
    'mf': Enum_Zoomin_Stage,
    'mg': Enum_Zoomout_Stage,
    'mh': Enum_Element_Lost_Focus,
    'mi': Enum_Element_Get_Focus,
    'mj': Enum_Element_Moved,
    'mk': Enum_Element_Aligned,
    'ml': Enum_Element_Sync_Size,
    'mm': Enum_Element_Added,
    'mn': Enum_Element_Removed,
    'mo': Enum_Element_Grouped,
    'mp': Enum_Element_Ungrouped,
    'mq': Enum_Element_Locked,
    'mr': Enum_Element_Unlocked,
    'ms': Enum_Element_ZIndex,
    'mt': Enum_Element_Pasted,
    'mu': Enum_Element_Rotated,
    'mv': Enum_Element_Modified_Ctrl_Point,
    'mw': Enum_Element_Modified_Mod_Point,
    'mx': Enum_Element_Modified_Size,
    'my': Enum_Element_Props,
    'mz': Enum_Element_Cut,
    'mA': Enum_Element_Duplicate,
    'mB': Enum_Element_Avg_Hor,
    'mC': Enum_Element_Avg_Ver,
    'l8': Enum_Example_From_List,
    'mD': Enum_Example_From_Remote,
    'l7': Enum_Example_From_Custom,
    /**
     * 设计器初始化时，需要先保存一下默认状态
     */
    'mE'() {
        if (!DefaultStage) {
            DefaultStage = GetSnapshot(Enum_History_Init);
        }
    },
    /**
     * 查询当前能否进行undo与redo
     */
    'mF'() {
        return {
            canRedo: HistoryList.length - 1 > HistoryIndex,
            canUndo: HistoryIndex >= 0
        };
    },
    /**
     * 获取历史记录当前状态，历史列表、当前历史状态和最原始的历史状态
     */
    'mG'() {
        return {
            '_nt': HistoryList,
            '_nu': HistoryIndex,
            '_nv': DefaultStage
        };
    },
    /**
     * 通过索引更新历史
     * @param index 历史索引
     */
    'mH'(index) {
        if (HistoryIndex != index) {
            HistoryIndex = index;
            SetHistory(index, 1);
        }
    },
    /**
     * 清空历史记录
     */
    'mI'() {
        clearTimeout(BuferTimer);
        HistoryIndex = -1;
        HistoryList.length = 0;
        DefaultStage = null;
        LastType = '';
    },
    /**
     * 撤销操作
     */
    'mJ'() {
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
    'mK'() {
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
    'mL'(at) {
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
            State.fire('mk');
        }
    },
    /**
     * 保存历史记录
     * @param action 保存动作类型
     * @param extTitle 扩展标题描述
     * @param type 历史类型，配合waiting使用
     * @param waiting 延迟多少毫秒后写入历史记录，即一定时间内type相同的历史只记录一次，比如按下键盘箭头进行元素位置移动。
     */
    'l2'(action, extTitle = '', type = 'mM', waiting = 0) {
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