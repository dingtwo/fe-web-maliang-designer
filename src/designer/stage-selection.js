/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/69",["5c"],(require,exports,module)=>{


/**
 * 元素选区相关
 */
let magix_1 = require("5c");
let { toMap, State } = magix_1;
let selectedMap;
module.exports= {
    /**
     * 设置单个元素选中状态
     * @param element 被选择的元素
     */
    'l3'(element) {
        let selectElements = State.get('l2');
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
                State.fire('l5');
                return oldSelectElements;
            }
        }
    },
    /**
     * 向选区追加选中的元素
     * @param element 添加到选区中的元素
     */
    'l6'(element) {
        let selectElements = State.get('l2');
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
            State.fire('l5');
            return 1;
        }
    },
    /**
     * 获取选中元素根据id组成的集合对象
     * @returns id集合对象
     */
    'l7'() {
        if (!selectedMap) {
            let selectElements = State.get('l2');
            selectedMap = toMap(selectElements, 'id');
        }
        return selectedMap;
    },
    /**
     * 移除选中的元素
     * @param element 待移除的元素
     */
    'l5'(element) {
        let selectElements = State.get('l2');
        for (let i = selectElements.length; i--;) {
            let e = selectElements[i];
            if (e.id === element.id) {
                selectElements.splice(i, 1);
                selectedMap = 0;
                State.fire('l5');
                return 1;
            }
        }
    },
    /**
     * 清除之前的元素并把传递来的列表做为选中
     * @param elements 元素列表
     */
    'l4'(elements) {
        let last = this['l7']();
        let selectElements = State.get('l2');
        selectElements.length = 0;
        selectedMap = 0;
        if (elements) {
            selectElements.push(...elements);
        }
        let changed = this["l8"](last)['l5'];
        if (changed) {
            State.fire('l5');
        }
        return changed;
    },
    /**
     * 清除id对象
     */
    'l2'() {
        selectedMap = 0;
    },
    /**
     * 判断选中状态是否发生过改变
     * @param last 历史选中状态的id映射
     */
    'l8'(last) {
        let now = this['l7']();
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
            'l2': nowCount,
            'l5': diff,
            'l3': selectedElements,
            'l4': deselectedElements
        };
    }
};

});