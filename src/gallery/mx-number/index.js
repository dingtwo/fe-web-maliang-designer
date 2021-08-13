/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6u/index",["5c"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("5c");
let { node, View, applyStyle, has, mark, dispatch, isFunction } = magix_1;
let Max_Value = Number.MAX_SAFE_INTEGER;
applyStyle("rd-mq",".rd-ro{background:none;border:none;color:#333;font-size:100%;padding:0 20px 0 0}.rd-ro:focus{outline:0}.rd-ro:disabled{background:#f5f5f5;color:#999;cursor:not-allowed}.rd-rp,.rd-rq{border:2px solid #fff;border-radius:2px;height:50%;width:20px}.rd-rp:hover,.rd-rq:hover{background-color:#f0f0f0}.rd-rq{top:1px}.rd-rp{bottom:1px}.rd-rr:after{border-left:4px solid transparent;border-right:4px solid transparent;content:\"\";display:block;height:0;inset:0;margin:auto;position:absolute;width:0}.rd-rp:after{border-top:4px solid #ccc}.rd-rq:after{border-bottom:4px solid #ccc}.rd-rp.rd-rs,.rd-rq.rd-rs{border-color:transparent;cursor:not-allowed}.rd-rp.rd-rs:hover,.rd-rq.rd-rs:hover{background-color:transparent}");
let getFlagByCtrlKey = e => e.shiftKey ? 1 : (e.metaKey || e.ctrlKey ? 2 : 0);
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	disabled,}=$dataFromView,
$$_class;
$vnode_0=[$createVNode('input',{'class': 'rd-mB rd-mC rd-mP rd-ro','id': '_mx_ipt_'+$viewId,'mx5-focusin': $viewId+'_s2()','mx5-focusout': $viewId+'_s4()','mx5-change': $viewId+'_p2()','mx5-keydown': $viewId+'_t_()','disabled': (disabled),'autocomplete': 'off','mx5-input': $viewId+'_tb()','mx5-wheel': $viewId+'_ta()',},1)];;$$_class='rd-rq rd-nZ rd-mJ rd-rr rd-mR rd-nk rd-on';if(disabled){;$$_class+=' rd-rs';};$vnode_0.push($createVNode('span',{'mx5-click': $viewId+'_sY({i:1})','mx5-pointerdown': $viewId+'_s9({i:1})','mx5-contextmenu': $viewId+'_nT()','class': $$_class,}));;$$_class='rd-rp rd-nZ rd-mJ rd-rr rd-mR rd-nk rd-on';if(disabled){;$$_class+=' rd-rs';};$vnode_0.push($createVNode('span',{'mx5-click': $viewId+'_sY()','mx5-pointerdown': $viewId+'_s9()','mx5-contextmenu': $viewId+'_nT()','class': $$_class,})); 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(ops) {
        let me = this;
        let { root } = me;
        if (!root.classList.contains('rd-l7')) {
            delete me['_sM'];
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
            me['_sN'] = +ops.step || 1;
            me['_sO'] = ops.empty;
            me['_sP'] = root.hasAttribute('disabled');
            me['_sQ'] = has(ops, 'max') ? +ops.max : Max_Value;
            me['_sR'] = has(ops, 'min') ? +ops.min : -Max_Value;
            me['_sS'] = +ops.ratio || 10;
            me['_sT'] = +ops.fixed || 0;
            me['_sU'] = me['_sV'](ops.value);
            return true;
        }
        else {
            me['_sM'] = me['_sV'](ops.value);
        }
        return false;
    },
    async render() {
        let { root } = this;
        let m = mark(this, '_mh');
        await this.digest({
            disabled: this['_sP']
        });
        if (m() &&
            !root.classList.contains('rd-l7')) {
            this['_sW']();
        }
    },
    '_sW'(v) {
        let me = this;
        v = v === undefined ? (me['_sM'] === undefined ? me['_sU'] : me['_sM']) : v;
        node('_mx_ipt_' + me.id).value = v; //.toFixed(me['@:{tail.length}']);
    },
    '_sV'(v) {
        let me = this;
        v = +v;
        if (v || v === 0) {
            let max = me['_sQ'];
            let min = me['_sR'];
            if (v > max) {
                v = max;
            }
            else if (v < min) {
                v = min;
            }
            v = +v.toFixed(me['_sT']);
        }
        return isNaN(v) ? (me['_sO'] ? '' : 0) : v;
    },
    '_sX'(v, ignoreFill) {
        let me = this;
        if (v === '' &&
            me['_sO']) {
            dispatch(me.root, 'input', {
                value: me['_sU'] = v
            });
            return;
        }
        v = me['_sV'](v);
        if (v !== me['_sU']) {
            if (!ignoreFill) {
                me['_sW'](v);
            }
            dispatch(me.root, 'input', {
                value: me['_sU'] = v
            });
        }
        return me['_sU'];
    },
    '_sY'(increase, flag) {
        let me = this;
        let value = me['_sU'];
        if (value === '')
            value = 0; //for init
        let step = me['_sN'];
        if (flag) {
            if (flag == 1) {
                step *= me['_sS'];
            }
            else {
                let len = me['_sT'];
                let t = Number((step / me['_sS']).toFixed(len));
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
        me['_sX'](value);
    },
    '_sZ'() {
        let me = this;
        let ipt = node('_mx_ipt_' + me.id);
        if (ipt) {
            ipt.focus();
            ipt.selectionStart = ipt.selectionEnd = ipt.value.length;
        }
    },
    '_s1'() {
        let me = this;
        me.root.classList.add('rd-l7');
        if (!has(me, '_s0')) {
            me['_s0'] = me['_sU'];
        }
    },
    '_s2<focusin>'() {
        this['_s1']();
    },
    '_s4<focusout>'() {
        let me = this;
        if (!me['_s3']) {
            me.root.classList.remove('rd-l7');
            me['_sW']();
            if (me['_s0'] != me['_sU']) {
                dispatch(me.root, 'change', {
                    value: me['_sU']
                });
            }
            delete me['_s0'];
        }
    },
    '_sY<click>'(e) {
        let me = this;
        if (!me['_sP'] &&
            !me['_s5']) {
            me['_sY'](e.params.i, getFlagByCtrlKey(e));
            me['_sZ']();
        }
    },
    '_s9<pointerdown>'(e) {
        let me = this;
        if (!me['_sP']) {
            me['_s3'] = 1;
            me['_s1']();
            let i = e.params.i;
            let m = mark(this, '_s6');
            me['_s7'] = setTimeout(() => {
                if (m()) {
                    me['_s8'] = setInterval(() => {
                        if (m()) {
                            me['_s5'] = 1;
                            me['_sY'](i, getFlagByCtrlKey(e));
                            me['_sZ']();
                        }
                    }, 50);
                }
            }, 300);
        }
    },
    '_t_<keydown>'(e) {
        if (e.code == 'ArrowUp' ||
            e.code == 'ArrowDown') {
            this['_nS'](e);
            let me = this;
            me['_sY'](e.code == 'ArrowUp', getFlagByCtrlKey(e));
        }
    },
    '_ta<wheel>&{passive:false}'(e) {
        if (this.root.classList.contains('rd-l7')) {
            this['_nS'](e);
            let delta = e.deltaY;
            this['_sY'](delta > 0, getFlagByCtrlKey(e));
        }
    },
    '_tb<input>'(e) {
        this['_qe'](e);
        let target = e.eventTarget;
        this['_sX'](target.value, 1);
    },
    '$doc<pointerup>'() {
        let me = this;
        clearTimeout(me['_s7']);
        clearInterval(me['_s8']);
        delete me['_s3'];
        let m = mark(this, '@:pointerup');
        setTimeout(() => {
            if (m()) {
                delete me['_s5'];
            }
        }, 0);
    }
});

});