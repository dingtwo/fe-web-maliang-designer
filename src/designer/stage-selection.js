/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/5u",["51"],(require,exports,module)=>{


/**
 * 元素选区相关
 */
let magix_1 = require("51");
let { toMap, State } = magix_1;
let selectedMap;
module.exports= {
    /**
     * 设置单个元素选中状态
     * @param element 被选择的元素
     */
    'ge'(element) {
        let selectElements = State.get('gd');
        let oldCount = selectElements.length;
        if (oldCount || element) {
            let oldSelectElements = selectElements.slice();
            //判断旧选中，如果有多个，现在只选中一个，则更新
            //如果旧选中只有一个，且为当前元素，则不更新
            let first = oldCount > 1 ? null : selectElements[0];
            let update;
            if (element) {
                if (element != first) {
                    selectElements.length = 1;
                    selectElements[0] = element;
                    update = 1;
                }
            }
            else if (oldCount) { //如果清空选择，且之前有元素选中，则更新
                selectElements.length = 0;
                update = 1;
            }
            if (update) {
                selectedMap = 0;
                State.fire('gg');
                return oldSelectElements;
            }
        }
    },
    /**
     * 向选区追加选中的元素
     * @param element 添加到选区中的元素
     */
    'gh'(element) {
        let selectElements = State.get('gd');
        let find;
        for (let e of selectElements) { //先查找是否已经存在
            if (e.id === element.id) {
                find = 1;
                break;
            }
        }
        if (!find) { //如果未存在，则更新
            selectElements.push(element);
            selectedMap = 0;
            State.fire('gg');
            return 1;
        }
    },
    /**
     * 获取选中元素根据id组成的集合对象
     * @returns id集合对象
     */
    'gi'() {
        if (!selectedMap) {
            let selectElements = State.get('gd');
            selectedMap = toMap(selectElements, 'id');
        }
        return selectedMap;
    },
    /**
     * 移除选中的元素
     * @param element 待移除的元素
     */
    'gg'(element) {
        let selectElements = State.get('gd');
        for (let i = selectElements.length; i--;) {
            let e = selectElements[i];
            if (e.id === element.id) {
                selectElements.splice(i, 1);
                selectedMap = 0;
                State.fire('gg');
                return 1;
            }
        }
    },
    /**
     * 清除之前的元素并把传递来的列表做为选中
     * @param elements 元素列表
     */
    'gf'(elements) {
        let last = this['gi']();
        let selectElements = State.get('gd');
        selectElements.length = 0;
        selectedMap = 0;
        if (elements) {
            selectElements.push(...elements);
        }
        let changed = this["gj"](last)['gg'];
        if (changed) {
            State.fire('gg');
        }
        return changed;
    },
    /**
     * 清除id对象
     */
    'gd'() {
        selectedMap = 0;
    },
    /**
     * 判断选中状态是否发生过改变
     * @param last 历史选中状态的id映射
     */
    'gj'(last) {
        let now = this['gi']();
        let nowCount = 0, diff = 0, selectedElements = [], deselectedElements = [];
        for (let p in last) {
            if (!now[p]) {
                diff++;
                deselectedElements.push(last[p]);
            }
            else {
                selectedElements.push(last[p]);
            }
        }
        for (let p in now) {
            nowCount++;
            if (!last[p]) {
                diff++;
                selectedElements.push(now[p]);
            }
        }
        return {
            'gd': nowCount,
            'gg': diff,
            'ge': selectedElements,
            'gf': deselectedElements
        };
    }
};

});