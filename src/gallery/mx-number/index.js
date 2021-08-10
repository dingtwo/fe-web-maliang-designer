/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/60/index",["4e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("4e");
let { node, View, applyStyle, has, mark, dispatch, isFunction } = magix_1;
let Max_Value = Number.MAX_SAFE_INTEGER;
applyStyle("rd-d3",".rd-i1{background:none;border:none;color:#333;font-size:100%;padding:0 20px 0 0}.rd-i1:focus{outline:0}.rd-i1:disabled{background:#f5f5f5;color:#999;cursor:not-allowed}.rd-i2,.rd-i3{border:2px solid #fff;border-radius:2px;height:50%;width:20px}.rd-i2:hover,.rd-i3:hover{background-color:#f0f0f0}.rd-i3{top:1px}.rd-i2{bottom:1px}.rd-i4:after{border-left:4px solid transparent;border-right:4px solid transparent;content:\"\";display:block;height:0;inset:0;margin:auto;position:absolute;width:0}.rd-i2:after{border-top:4px solid #ccc}.rd-i3:after{border-bottom:4px solid #ccc}.rd-i2.rd-i5,.rd-i3.rd-i5{border-color:transparent;cursor:not-allowed}.rd-i2.rd-i5:hover,.rd-i3.rd-i5:hover{background-color:transparent}");
let getFlagByCtrlKey = e => e.shiftKey ? 1 : (e.metaKey || e.ctrlKey ? 2 : 0);
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	disabled,}=$dataFromView,
$$_class;
$vnode_0=[$createVNode('input',{'class': 'rd-ed rd-ee rd-er rd-i1','id': '_mx_ipt_'+$viewId,'mx5-focusin': $viewId+'_kE()','mx5-focusout': $viewId+'_kG()','mx5-change': $viewId+'_hE()','mx5-keydown': $viewId+'_kM()','disabled': (disabled),'autocomplete': 'off','mx5-input': $viewId+'_kO()','mx5-wheel': $viewId+'_kN()',},1)];;$$_class='rd-i3 rd-fB rd-el rd-i4 rd-et rd-eX rd-f0';if(disabled){;$$_class+=' rd-i5';};$vnode_0.push($createVNode('span',{'mx5-click': $viewId+'_kA({i:1})','mx5-pointerdown': $viewId+'_kL({i:1})','mx5-contextmenu': $viewId+'_fv()','class': $$_class,}));;$$_class='rd-i2 rd-fB rd-el rd-i4 rd-et rd-eX rd-f0';if(disabled){;$$_class+=' rd-i5';};$vnode_0.push($createVNode('span',{'mx5-click': $viewId+'_kA()','mx5-pointerdown': $viewId+'_kL()','mx5-contextmenu': $viewId+'_fv()','class': $$_class,})); 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(ops) {
        let me = this;
        let { root } = me;
        if (!root.classList.contains('rd-dJ')) {
            delete me['_ko'];
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
            me['_kp'] = +ops.step || 1;
            me['_kq'] = ops.empty;
            me['_kr'] = root.hasAttribute('disabled');
            me['_ks'] = has(ops, 'max') ? +ops.max : Max_Value;
            me['_kt'] = has(ops, 'min') ? +ops.min : -Max_Value;
            me['_ku'] = +ops.ratio || 10;
            me['_kv'] = +ops.fixed || 0;
            me['_kw'] = me['_kx'](ops.value);
            return true;
        }
        else {
            me['_ko'] = me['_kx'](ops.value);
        }
        return false;
    },
    async render() {
        let { root } = this;
        let m = mark(this, '_dU');
        await this.digest({
            disabled: this['_kr']
        });
        if (m() &&
            !root.classList.contains('rd-dJ')) {
            this['_ky']();
        }
    },
    '_ky'(v) {
        let me = this;
        v = v === undefined ? (me['_ko'] === undefined ? me['_kw'] : me['_ko']) : v;
        node('_mx_ipt_' + me.id).value = v; //.toFixed(me['@:{tail.length}']);
    },
    '_kx'(v) {
        let me = this;
        v = +v;
        if (v || v === 0) {
            let max = me['_ks'];
            let min = me['_kt'];
            if (v > max) {
                v = max;
            }
            else if (v < min) {
                v = min;
            }
            v = +v.toFixed(me['_kv']);
        }
        return isNaN(v) ? (me['_kq'] ? '' : 0) : v;
    },
    '_kz'(v, ignoreFill) {
        let me = this;
        if (v === '' &&
            me['_kq']) {
            dispatch(me.root, 'input', {
                value: me['_kw'] = v
            });
            return;
        }
        v = me['_kx'](v);
        if (v !== me['_kw']) {
            if (!ignoreFill) {
                me['_ky'](v);
            }
            dispatch(me.root, 'input', {
                value: me['_kw'] = v
            });
        }
        return me['_kw'];
    },
    '_kA'(increase, flag) {
        let me = this;
        let value = me['_kw'];
        if (value === '')
            value = 0; //for init
        let step = me['_kp'];
        if (flag) {
            if (flag == 1) {
                step *= me['_ku'];
            }
            else {
                let len = me['_kv'];
                let t = Number((step / me['_ku']).toFixed(len));
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
        me['_kz'](value);
    },
    '_kB'() {
        let me = this;
        let ipt = node('_mx_ipt_' + me.id);
        if (ipt) {
            ipt.focus();
            ipt.selectionStart = ipt.selectionEnd = ipt.value.length;
        }
    },
    '_kD'() {
        let me = this;
        me.root.classList.add('rd-dJ');
        if (!has(me, '_kC')) {
            me['_kC'] = me['_kw'];
        }
    },
    '_kE<focusin>'() {
        this['_kD']();
    },
    '_kG<focusout>'() {
        let me = this;
        if (!me['_kF']) {
            me.root.classList.remove('rd-dJ');
            me['_ky']();
            if (me['_kC'] != me['_kw']) {
                dispatch(me.root, 'change', {
                    value: me['_kw']
                });
            }
            delete me['_kC'];
        }
    },
    '_kA<click>'(e) {
        let me = this;
        if (!me['_kr'] &&
            !me['_kH']) {
            me['_kA'](e.params.i, getFlagByCtrlKey(e));
            me['_kB']();
        }
    },
    '_kL<pointerdown>'(e) {
        let me = this;
        if (!me['_kr']) {
            me['_kF'] = 1;
            me['_kD']();
            let i = e.params.i;
            let m = mark(this, '_kI');
            me['_kJ'] = setTimeout(() => {
                if (m()) {
                    me['_kK'] = setInterval(() => {
                        if (m()) {
                            me['_kH'] = 1;
                            me['_kA'](i, getFlagByCtrlKey(e));
                            me['_kB']();
                        }
                    }, 50);
                }
            }, 300);
        }
    },
    '_kM<keydown>'(e) {
        if (e.code == 'ArrowUp' ||
            e.code == 'ArrowDown') {
            this['_fu'](e);
            let me = this;
            me['_kA'](e.code == 'ArrowUp', getFlagByCtrlKey(e));
        }
    },
    '_kN<wheel>&{passive:false}'(e) {
        if (this.root.classList.contains('rd-dJ')) {
            this['_fu'](e);
            let delta = e.deltaY;
            this['_kA'](delta > 0, getFlagByCtrlKey(e));
        }
    },
    '_kO<input>'(e) {
        this['_hR'](e);
        let target = e.eventTarget;
        this['_kz'](target.value, 1);
    },
    '$doc<pointerup>'() {
        let me = this;
        clearTimeout(me['_kJ']);
        clearInterval(me['_kK']);
        delete me['_kF'];
        let m = mark(this, '@:pointerup');
        setTimeout(() => {
            if (m()) {
                delete me['_kH'];
            }
        }, 0);
    }
});

});