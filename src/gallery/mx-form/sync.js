/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6q/sync",["51"],(require,exports,module)=>{


let magix_1 = require("51");
let { has, mark, toMap, applyStyle, task, isObject, isArray } = magix_1;
applyStyle("rd-gz",".rd-lh{outline:2px solid red}");
let emptyObject = {};
let errorSelector = 'rd-lh';
let noneSelector = 'rd-g0';
let showOrHideTip = (classList, viewId, expr, hide, msg) => {
    if (hide) {
        classList.remove(errorSelector);
    }
    else {
        classList.add(errorSelector);
    }
    let tipNodes = document.querySelectorAll(`[mx5-host="${viewId}"][vd-msg-for="${expr}"]`);
    for (let i = tipNodes.length; i--;) {
        let tipNode = tipNodes[i];
        if (tipNode) {
            let tipNodeClassList = tipNode.classList;
            if (hide) {
                tipNodeClassList.add(noneSelector);
            }
            else {
                tipNodeClassList.remove(noneSelector);
                tipNode.innerHTML = msg;
            }
        }
    }
};
let rules = {
    required(value, rule) {
        let test, msg;
        if (isArray(rule)) {
            [test, msg] = rule;
        }
        else {
            test = rule;
            msg = '请输入内容';
        }
        if (test &&
            !value.trim()) {
            return msg;
        }
    }
};
let isInvalid = (value, actions) => {
    for (let p in actions) {
        if (has(actions, p)) {
            let rule = rules[p];
            if (rule) {
                let r = rule(value, actions[p]);
                if (r) {
                    return r;
                }
            }
        }
    }
    return false;
};
let syncUIFromData = (view, rootData, e, check) => {
    if (check()) {
        let ctrls = e.getAttribute('mx5-ctrl');
        let exprs = view.parse(ctrls);
        for (let expr of exprs) {
            let ps = expr[0].split('.');
            let data = rootData;
            while (data && ps.length) {
                let temp = ps.shift();
                data = data[temp];
            }
            if (!ps.length) {
                if (data != null) {
                    if (e.type == 'checkbox' ||
                        e.type == 'radio') {
                        if (data === true) {
                            e.checked = true;
                        }
                        else if (data == false) {
                            e.checked = false;
                        }
                        else {
                            let value = e.value;
                            if (isArray(data)) {
                                let findIndex = -1;
                                for (let i = data.length; i--;) {
                                    if (value == data[i]) {
                                        findIndex = i;
                                        break;
                                    }
                                }
                                e.checked = findIndex != -1;
                            }
                            else if (isObject(data)) {
                                e.checked = has(data, value);
                            }
                            else {
                                e.checked = value == data;
                            }
                        }
                    }
                    else if (e.tagName == 'SELECT') {
                        let options = e.options;
                        if (e.multiple) {
                            let map;
                            if (isArray(data)) {
                                map = toMap(data);
                            }
                            else if (isObject(data)) {
                                map = data;
                            }
                            else {
                                map = {
                                    [data]: 1
                                };
                            }
                            for (let i = 0; i < options.length; i++) {
                                let option = options[i];
                                if (has(map, option.value)) {
                                    option.selected = true;
                                }
                            }
                        }
                        else {
                            for (let i = 0; i < options.length; i++) {
                                let option = options[i];
                                if (option.value == data) {
                                    option.selected = true;
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        e.value = data;
                    }
                }
            }
        }
    }
};
module.exports= {
    ctor() {
        this.on('domready', () => {
            let list = document.querySelectorAll(`input[mx5-ctrl][mx5-host="${this.id}"],select[mx5-ctrl][mx5-host="${this.id}"],textarea[mx5-ctrl][mx5-host="${this.id}"]`);
            let rootData = this.get();
            let readyMark = mark(this, '_mC');
            for (let i = list.length; i--;) {
                let e = list[i];
                task(syncUIFromData, [this, rootData, e, readyMark]);
            }
            let indets = document.querySelectorAll(`input[type="checkbox"][mx5-host="${this.id}"]`);
            for (let i = indets.length; i--;) {
                let e = indets[i];
                e.indeterminate = e.hasAttribute('indeterminate');
            }
        });
    },
    isValid() {
        debugger;
    },
    '$[mx5-ctrl]<change,input,focusout>'(e) {
        let { eventTarget, type } = e;
        let ownerId = eventTarget.getAttribute('mx5-host');
        if (ownerId != this.id || e['_g8'])
            return;
        e['_g8'] = 1;
        let ctrls = eventTarget.getAttribute('mx5-ctrl');
        let exprs = this.parse(ctrls);
        let dataRoot = this.get();
        let refresh = false;
        for (let ctrl of exprs) {
            let [p, f, a] = ctrl;
            // 绑定节点
            let ps = p.split('.');
            // 校验规则
            let actions = f || emptyObject;
            let key = ps.pop(), temp, value, rootKey = ps[0] || key;
            let object = dataRoot;
            let dataOfRootKey = dataRoot[rootKey], topLevel = true;
            while (object && ps.length) {
                temp = ps.shift();
                object = object[temp];
                topLevel = false;
            }
            let targetAsSelect = eventTarget;
            let targetAsInput = eventTarget;
            let src = object[key];
            if (targetAsSelect.tagName == 'SELECT') {
                if (targetAsSelect.multiple) {
                    let map = {};
                    let options = targetAsSelect.options;
                    for (let i = 0; i < options.length; i++) {
                        let option = options[i];
                        if (option.selected) {
                            map[option.value] = 1;
                        }
                    }
                    if (isObject(src)) {
                        value = map;
                    }
                    else {
                        value = Object.keys(map);
                    }
                }
                else {
                    value = targetAsSelect.value;
                }
            }
            else if (targetAsInput.type == 'checkbox') {
                let checked = targetAsInput.checked;
                if (src === true || src === false) {
                    value = checked;
                }
                else {
                    value = targetAsInput.value.trim();
                    if (isArray(src)) {
                        let checkboxName = targetAsInput.name;
                        if (checkboxName) {
                            src = [];
                            let checkboxes = document.querySelectorAll(`input[name="${checkboxName}"]:checked`);
                            for (let i = 0; i < checkboxes.length; i++) {
                                let box = checkboxes[i];
                                let value;
                                value = box.value;
                                if (actions.number) {
                                    value = parseFloat(value);
                                }
                                let idx = src.indexOf(value);
                                if (idx == -1) {
                                    src.push(value);
                                }
                            }
                        }
                        else {
                            let findIndex = -1;
                            for (let i = src.length; i--;) {
                                if (src[i] == value) {
                                    findIndex = i;
                                    break;
                                }
                            }
                            if (checked) {
                                if (findIndex === -1) {
                                    src.push(value);
                                }
                            }
                            else {
                                if (findIndex > -1) {
                                    src.splice(findIndex, 1);
                                }
                            }
                        }
                        value = src;
                    }
                    else if (isObject(src)) {
                        if (checked) {
                            src[value] = true;
                        }
                        else {
                            delete src[value];
                        }
                        value = src;
                    }
                    else {
                        value = checked ? value : '';
                    }
                }
            }
            else if (targetAsInput.type == 'radio') {
                let radioName = targetAsInput.name;
                value = document.querySelector(`input[name="${radioName}"]:checked`).value;
            }
            else if ('value' in targetAsSelect) {
                value = targetAsInput.value;
            }
            //处理多绑定时，值从event对象上读取
            if (has(e, a)) {
                value = e[a];
            }
            if (has(e, actions.read)) {
                value = e[actions.read];
            }
            let classList = targetAsInput.classList;
            let syncData = type == 'input' || type == 'change';
            // if (type == 'focusin') {//聚焦时隐藏当前错误框及提示
            //     showOrHideTip(classList, this.id, p, true);
            // } else
            if (type == 'focusout' ||
                type == 'input') {
                let invalid = isInvalid(value, actions);
                if (invalid) {
                    showOrHideTip(classList, this.id, p, false, invalid);
                }
                else {
                    showOrHideTip(classList, this.id, p, true);
                }
            }
            if (syncData) {
                if (topLevel) {
                    this.set({
                        [rootKey]: value
                    });
                }
                else {
                    if (object) {
                        object[key] = value;
                    }
                    else {
                        console.warn('can not set by path:', p);
                    }
                    this.set({
                        [rootKey]: dataOfRootKey
                    });
                }
                if (actions.refresh) {
                    refresh = true;
                }
            }
        }
        if (refresh) {
            clearTimeout(this['_mD']);
            let delayMark = mark(this, '_mE');
            this['_mD'] = setTimeout(() => {
                if (delayMark()) {
                    this.digest();
                }
            }, 100);
        }
    }
};

});