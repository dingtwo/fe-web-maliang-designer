/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6j/index",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("51");
let { node, View, applyStyle, has, mark, dispatch, isFunction } = magix_1;
let Max_Value = Number.MAX_SAFE_INTEGER;
applyStyle("rd-gC",".rd-lA{background:none;border:none;color:#333;font-size:100%;padding:0 20px 0 0}.rd-lA:focus{outline:0}.rd-lA:disabled{background:#f5f5f5;color:#999;cursor:not-allowed}.rd-lB,.rd-lC{border:2px solid #fff;border-radius:2px;height:50%;width:20px}.rd-lB:hover,.rd-lC:hover{background-color:#f0f0f0}.rd-lC{top:1px}.rd-lB{bottom:1px}.rd-lD:after{border-left:4px solid transparent;border-right:4px solid transparent;content:\"\";display:block;height:0;inset:0;margin:auto;position:absolute;width:0}.rd-lB:after{border-top:4px solid #ccc}.rd-lC:after{border-bottom:4px solid #ccc}.rd-lB.rd-lE,.rd-lC.rd-lE{border-color:transparent;cursor:not-allowed}.rd-lB.rd-lE:hover,.rd-lC.rd-lE:hover{background-color:transparent}");
let getFlagByCtrlKey = e => e.shiftKey ? 1 : (e.metaKey || e.ctrlKey ? 2 : 0);
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	disabled,}=$dataFromView,
$$_class;
$vnode_0=[$createVNode('input',{'class': 'rd-g1 rd-gN rd-gO rd-lA','id': '_mx_ipt_'+$viewId,'mx5-focusin': $viewId+'_ng()','mx5-focusout': $viewId+'_ni()','mx5-change': $viewId+'_kg()','mx5-keydown': $viewId+'_no()','disabled': (disabled),'autocomplete': 'off','mx5-input': $viewId+'_nq()','mx5-wheel': $viewId+'_np()',},1)];;$$_class='rd-lC rd-ia rd-gV rd-lD rd-g3 rd-hw rd-iz';if(disabled){;$$_class+=' rd-lE';};$vnode_0.push($createVNode('span',{'mx5-click': $viewId+'_nc({i:1})','mx5-pointerdown': $viewId+'_nn({i:1})','mx5-contextmenu': $viewId+'_h6()','class': $$_class,}));;$$_class='rd-lB rd-ia rd-gV rd-lD rd-g3 rd-hw rd-iz';if(disabled){;$$_class+=' rd-lE';};$vnode_0.push($createVNode('span',{'mx5-click': $viewId+'_nc()','mx5-pointerdown': $viewId+'_nn()','mx5-contextmenu': $viewId+'_h6()','class': $$_class,})); 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(ops) {
        let me = this;
        let { root } = me;
        if (!root.classList.contains('rd-gi')) {
            delete me['_m1'];
            if (isFunction(ops.max)) { //!important callback with ops.props
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
            me['_m2'] = +ops.step || 1;
            me['_m3'] = ops.empty;
            me['_m4'] = root.hasAttribute('disabled');
            me['_m5'] = has(ops, 'max') ? +ops.max : Max_Value;
            me['_m6'] = has(ops, 'min') ? +ops.min : -Max_Value;
            me['_m7'] = +ops.ratio || 10;
            me['_m8'] = +ops.fixed || 0;
            me['_m9'] = me['_n_'](ops.value);
            return true;
        }
        else {
            me['_m1'] = me['_n_'](ops.value);
        }
        return false;
    },
    async render() {
        let { root } = this;
        let m = mark(this, '_gt');
        await this.digest({
            disabled: this['_m4']
        });
        if (m() &&
            !root.classList.contains('rd-gi')) {
            this['_na']();
        }
    },
    '_na'(v) {
        let me = this;
        v = v === undefined ? (me['_m1'] === undefined ? me['_m9'] : me['_m1']) : v;
        node('_mx_ipt_' + me.id).value = v; //.toFixed(me['@:{tail.length}']);
    },
    '_n_'(v) {
        let me = this;
        v = +v;
        if (v || v === 0) {
            let max = me['_m5'];
            let min = me['_m6'];
            if (v > max) {
                v = max;
            }
            else if (v < min) {
                v = min;
            }
            v = +v.toFixed(me['_m8']);
        }
        return isNaN(v) ? (me['_m3'] ? '' : 0) : v;
    },
    '_nb'(v, ignoreFill) {
        let me = this;
        if (v === '' &&
            me['_m3']) {
            dispatch(me.root, 'input', {
                value: me['_m9'] = v
            });
            return;
        }
        v = me['_n_'](v);
        if (v !== me['_m9']) {
            if (!ignoreFill) {
                me['_na'](v);
            }
            dispatch(me.root, 'input', {
                value: me['_m9'] = v
            });
        }
        return me['_m9'];
    },
    '_nc'(increase, flag) {
        let me = this;
        let value = me['_m9'];
        if (value === '')
            value = 0; //for init
        let step = me['_m2'];
        if (flag) {
            if (flag == 1) {
                step *= me['_m7'];
            }
            else {
                let len = me['_m8'];
                let t = Number((step / me['_m7']).toFixed(len));
                if (t != 0) {
                    step = t;
                }
            }
        }
        if (increase) {
            value += step;
        }
        else {
            value -= step;
        }
        me['_nb'](value);
    },
    '_nd'() {
        let me = this;
        let ipt = node('_mx_ipt_' + me.id);
        if (ipt) {
            ipt.focus();
            ipt.selectionStart = ipt.selectionEnd = ipt.value.length;
        }
    },
    '_nf'() {
        let me = this;
        me.root.classList.add('rd-gi');
        if (!has(me, '_ne')) {
            me['_ne'] = me['_m9'];
        }
    },
    '_ng<focusin>'() {
        this['_nf']();
    },
    '_ni<focusout>'() {
        let me = this;
        if (!me['_nh']) {
            me.root.classList.remove('rd-gi');
            me['_na']();
            if (me['_ne'] != me['_m9']) {
                dispatch(me.root, 'change', {
                    value: me['_m9']
                });
            }
            delete me['_ne'];
        }
    },
    '_nc<click>'(e) {
        let me = this;
        if (!me['_m4'] &&
            !me['_nj']) {
            me['_nc'](e.params.i, getFlagByCtrlKey(e));
            me['_nd']();
        }
    },
    '_nn<pointerdown>'(e) {
        let me = this;
        if (!me['_m4']) {
            me['_nh'] = 1;
            me['_nf']();
            let i = e.params.i;
            let m = mark(this, '_nk');
            me['_nl'] = setTimeout(() => {
                if (m()) {
                    me['_nm'] = setInterval(() => {
                        if (m()) {
                            me['_nj'] = 1;
                            me['_nc'](i, getFlagByCtrlKey(e));
                            me['_nd']();
                        }
                    }, 50);
                }
            }, 300);
        }
    },
    '_no<keydown>'(e) {
        if (e.code == 'ArrowUp' ||
            e.code == 'ArrowDown') {
            this['_h5'](e);
            let me = this;
            me['_nc'](e.code == 'ArrowUp', getFlagByCtrlKey(e));
        }
    },
    '_np<wheel>&{passive:false}'(e) {
        if (this.root.classList.contains('rd-gi')) {
            this['_h5'](e);
            let delta = e.deltaY;
            this['_nc'](delta > 0, getFlagByCtrlKey(e));
        }
    },
    '_nq<input>'(e) {
        this['_kt'](e);
        let target = e.eventTarget;
        this['_nb'](target.value, 1);
    },
    '$doc<pointerup>'() {
        let me = this;
        clearTimeout(me['_nl']);
        clearInterval(me['_nm']);
        delete me['_nh'];
        let m = mark(this, '@:pointerup');
        setTimeout(() => {
            if (m()) {
                delete me['_nj'];
            }
        }, 0);
    }
});

});