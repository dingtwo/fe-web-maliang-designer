/*
    author:https://github.com/xinglie
 */
import Magix from 'magix';
let { node, View, applyStyle, has, mark, dispatch, isFunction } = Magix;
let Max_Value = Number.MAX_SAFE_INTEGER;
applyStyle('@:index.less');
let getFlagByCtrlKey = e => e.shiftKey ? 1 : (e.metaKey || e.ctrlKey ? 2 : 0);
export default View.extend({
    tmpl: '@:index.html',
    assign(ops) {
        let me = this;
        let { root } = me;
        if (!root.classList.contains('@:scoped.style:input-focus')) {
            delete me['@:{value.when.active}'];
            if (isFunction(ops.max)) {//!important callback with ops.props
                ops.max = ops.max(ops.props);
            }
            if (isFunction(ops.min)) {
                ops.min = ops.min(ops.props);
            }
            if (isFunction(ops.fixed)) {
                ops.fixed = ops.fixed();
            }
            if (isFunction(ops.step)) {
                ops.step = ops.step();
            }
            me['@:{step}'] = +ops.step || 1;
            me['@:{support.empty}'] = ops.empty;
            me['@:{disabled}'] = root.hasAttribute('disabled');
            me['@:{max}'] = has(ops, 'max') ? +ops.max : Max_Value;
            me['@:{min}'] = has(ops, 'min') ? +ops.min : -Max_Value;
            me['@:{ratio}'] = +ops.ratio || 10;
            me['@:{tail.length}'] = +ops.fixed || 0;
            me['@:{value}'] = me['@:{get.value}'](ops.value);
            return true;
        } else {
            me['@:{value.when.active}'] = me['@:{get.value}'](ops.value);
        }
        return false;
    },
    async render() {
        let { root } = this;
        let m = mark(this, '@:{render}');
        await this.digest({
            disabled: this['@:{disabled}']
        });
        if (m() &&
            !root.classList.contains('@:scoped.style:input-focus')) {
            this['@:{fix.value}']();
        }
    },
    '@:{fix.value}'(v) {
        let me = this;
        v = v === undefined ? (me['@:{value.when.active}'] === undefined ? me['@:{value}'] : me['@:{value.when.active}']) : v;
        node<HTMLInputElement>('_mx_ipt_' + me.id).value = v;//.toFixed(me['@:{tail.length}']);
    },
    '@:{get.value}'(v) {
        let me = this;
        v = +v;
        if (v || v === 0) {
            let max = me['@:{max}'];
            let min = me['@:{min}'];
            if (v > max) {
                v = max;
            } else if (v < min) {
                v = min;
            }
            v = +v.toFixed(me['@:{tail.length}']);
        }
        return isNaN(v) ? (me['@:{support.empty}'] ? '' : 0) : v;
    },
    '@:{set.value}'(v, ignoreFill) {
        let me = this;
        if (v === '' &&
            me['@:{support.empty}']) {
            dispatch(me.root, 'input', {
                value: me['@:{value}'] = v
            });
            return;
        }
        v = me['@:{get.value}'](v);
        if (v !== me['@:{value}']) {
            if (!ignoreFill) {
                me['@:{fix.value}'](v);
            }
            dispatch(me.root, 'input', {
                value: me['@:{value}'] = v
            });
        }
        return me['@:{value}'];
    },
    '@:{key.num.change}'(increase, flag) {
        let me = this;
        let value = me['@:{value}'];
        if (value === '') value = 0; //for init
        let step = me['@:{step}'];
        if (flag) {
            if (flag == 1) {
                step *= me['@:{ratio}'];
            } else {
                let len = me['@:{tail.length}'];
                let t = Number((step / me['@:{ratio}']).toFixed(len));
                if (t != 0) {
                    step = t;
                }
            }
        }
        if (increase) {
            value += step;
        } else {
            value -= step;
        }
        me['@:{set.value}'](value);
    },
    '@:{cursor.show}'() {
        let me = this;
        let ipt = node('_mx_ipt_' + me.id) as HTMLInputElement;
        if (ipt) {
            ipt.focus();
            ipt.selectionStart = ipt.selectionEnd = ipt.value.length;
        }
    },
    '@:{simulator.active}'() {
        let me = this;
        me.root.classList.add('@:scoped.style:input-focus');
        if (!has(me, '@:{last.value}')) {
            me['@:{last.value}'] = me['@:{value}'];
        }
    },
    '@:{active}<focusin>'() {
        this['@:{simulator.active}']();
    },
    '@:{deactive}<focusout>'() {
        let me = this;
        if (!me['@:{ui.keep.active}']) {
            me.root.classList.remove('@:scoped.style:input-focus');
            me['@:{fix.value}']();
            if (me['@:{last.value}'] != me['@:{value}']) {
                dispatch(me.root, 'change', {
                    value: me['@:{value}']
                });
            }
            delete me['@:{last.value}'];
        }
    },
    '@:{key.num.change}<click>'(e) {
        let me = this;
        if (!me['@:{disabled}'] &&
            !me['@:{fast.change.start}']) {
            me['@:{key.num.change}'](e.params.i, getFlagByCtrlKey(e));
            me['@:{cursor.show}']();
        }
    },
    '@:{fast.start}<pointerdown>'(e) {
        let me = this;
        if (!me['@:{disabled}']) {
            me['@:{ui.keep.active}'] = 1;
            me['@:{simulator.active}']();
            let i = e.params.i;
            let m = mark(this, '@:{pointerdown}');
            me['@:{long.tap.timer}'] = setTimeout(() => {
                if (m()) {
                    me['@:{interval.timer}'] = setInterval(() => {
                        if (m()) {
                            me['@:{fast.change.start}'] = 1;
                            me['@:{key.num.change}'](i, getFlagByCtrlKey(e));
                            me['@:{cursor.show}']();
                        }
                    }, 50);
                }
            }, 300);
        }
    },
    '@:{press.check}<keydown>'(e) {
        if (e.code == 'ArrowUp' ||
            e.code == 'ArrowDown') {
            this['@:{prevent.default}'](e);
            let me = this;
            me['@:{key.num.change}'](e.code == 'ArrowUp', getFlagByCtrlKey(e));
        }
    },
    '@:{wheel}<wheel>&{passive:false}'(e: WheelEvent) {
        if (this.root.classList.contains('@:scoped.style:input-focus')) {
            this['@:{prevent.default}'](e);
            let delta = e.deltaY;
            this['@:{key.num.change}'](delta > 0, getFlagByCtrlKey(e));
        }
    },
    '@:{input.check}<input>'(e) {
        this['@:{stop.propagation}'](e);
        let target = e.eventTarget;
        this['@:{set.value}'](target.value, 1);
    },
    '$doc<pointerup>'() {
        let me = this;
        clearTimeout(me['@:{long.tap.timer}']);
        clearInterval(me['@:{interval.timer}']);
        delete me['@:{ui.keep.active}'];
        let m = mark(this, '@:pointerup');
        setTimeout(() => {
            if (m()) {
                delete me['@:{fast.change.start}'];
            }
        }, 0);
    }
});