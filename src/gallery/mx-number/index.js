/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-number/index",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("magix5");
let { node, View, applyStyle, has, mark, dispatch, isFunction } = magix_1;
let Max_Value = Number.MAX_SAFE_INTEGER;
applyStyle("rd-_gallery_mx-number_index_less_","\n.rd-_gallery_mx-number_index_less_-ipt {\nborder:none;\nbackground:none;\ncolor:#333;\npadding:0 20px 0 0;\nfont-size:100%;\n}\n.rd-_gallery_mx-number_index_less_-ipt:focus {\noutline:0;\n}\n.rd-_gallery_mx-number_index_less_-ipt:disabled {\ncursor:not-allowed;\ncolor:#999;\nbackground:#f5f5f5;\n}\n.rd-_gallery_mx-number_index_less_-up,\n.rd-_gallery_mx-number_index_less_-down {\nwidth:20px;\nheight:50%;\nborder:2px solid #fff;\nborder-radius:2px;\n}\n.rd-_gallery_mx-number_index_less_-up:hover,\n.rd-_gallery_mx-number_index_less_-down:hover {\nbackground-color:#f0f0f0;\n}\n.rd-_gallery_mx-number_index_less_-up {\ntop:1px;\n}\n.rd-_gallery_mx-number_index_less_-down {\nbottom:1px;\n}\n.rd-_gallery_mx-number_index_less_-arrow::after {\nwidth:0;\nheight:0;\nposition:absolute;\ninset:0;\nborder-left:4px solid rgba(0, 0, 0, 0);\nborder-right:4px solid rgba(0, 0, 0, 0);\ncontent:'';\ndisplay:block;\nmargin:auto;\n}\n.rd-_gallery_mx-number_index_less_-down:after {\nborder-top:4px solid #ccc;\n}\n.rd-_gallery_mx-number_index_less_-up:after {\nborder-bottom:4px solid #ccc;\n}\n.rd-_gallery_mx-number_index_less_-up.rd-_gallery_mx-number_index_less_-notallowed,\n.rd-_gallery_mx-number_index_less_-down.rd-_gallery_mx-number_index_less_-notallowed {\ncursor:not-allowed;\nborder-color:transparent;\n}\n.rd-_gallery_mx-number_index_less_-up.rd-_gallery_mx-number_index_less_-notallowed:hover,\n.rd-_gallery_mx-number_index_less_-down.rd-_gallery_mx-number_index_less_-notallowed:hover {\nbackground-color:transparent;\n}\n");
let getFlagByCtrlKey = e => e.shiftKey ? 1 : (e.metaKey || e.ctrlKey ? 2 : 0);
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,}=$dataFromView,
$$_class;
$vnode_0=[$createVNode('input',{'class': 'rd-_assets_index_less_-display-block rd-_assets_index_less_-hp100 rd-_assets_index_less_-wp100 rd-_gallery_mx-number_index_less_-ipt','id': '_mx_ipt_'+($__line=1,$__art='{{=$viewId}}','')+$viewId,'mx5-focusin': $viewId+'@:{active~rs}()','mx5-focusout': $viewId+'@:{deactive~rs}()','mx5-change': $viewId+'@:{stop~rs}()','mx5-keydown': $viewId+'@:{press.check~rs}()','disabled': ($temp_var=($__line=1,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-number/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'autocomplete': 'off','mx5-input': $viewId+'@:{input.check~rs}()','mx5-wheel': $viewId+'@:{wheel~rs}()',},1)];;$$_class='rd-_gallery_mx-number_index_less_-up rd-_assets_index_less_-right-0 rd-_assets_index_less_-pa rd-_gallery_mx-number_index_less_-arrow rd-_assets_index_less_-unselectable rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-touch-action-none'+($__line=2,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-number_index_less_-notallowed'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('span',{'mx5-click': $viewId+'@:{key.num.change~rs}({i:1})','mx5-pointerdown': $viewId+'@:{fast.start~rs}({i:1})','mx5-contextmenu': $viewId+'@:{prevent~rs}()','class': $$_class,}));;$$_class='rd-_gallery_mx-number_index_less_-down rd-_assets_index_less_-right-0 rd-_assets_index_less_-pa rd-_gallery_mx-number_index_less_-arrow rd-_assets_index_less_-unselectable rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-touch-action-none'+($__line=3,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-number_index_less_-notallowed'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('span',{'mx5-click': $viewId+'@:{key.num.change~rs}()','mx5-pointerdown': $viewId+'@:{fast.start~rs}()','mx5-contextmenu': $viewId+'@:{prevent~rs}()','class': $$_class,})); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-number/index.html'; throw msg; }  } ,
    assign(ops) {
        let me = this;
        let { root } = me;
        if (!root.classList.contains('rd-_assets_index_less_-input-focus')) {
            delete me['@:{value.when.active~rs}'];
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
            me['@:{step~rs}'] = +ops.step || 1;
            me['@:{support.empty~rs}'] = ops.empty;
            me['@:{disabled~rs}'] = root.hasAttribute('disabled');
            me['@:{max~rs}'] = has(ops, 'max') ? +ops.max : Max_Value;
            me['@:{min~rs}'] = has(ops, 'min') ? +ops.min : -Max_Value;
            me['@:{ratio~rs}'] = +ops.ratio || 10;
            me['@:{tail.length~rs}'] = +ops.fixed || 0;
            me['@:{value~rs}'] = me['@:{get.value~rs}'](ops.value);
            return true;
        }
        else {
            me['@:{value.when.active~rs}'] = me['@:{get.value~rs}'](ops.value);
        }
        return false;
    },
    async render() {
        let { root } = this;
        let m = mark(this, '@:{render~rs}');
        await this.digest({
            disabled: this['@:{disabled~rs}']
        });
        if (m() &&
            !root.classList.contains('rd-_assets_index_less_-input-focus')) {
            this['@:{fix.value~rs}']();
        }
    },
    '@:{fix.value~rs}'(v) {
        let me = this;
        v = v === undefined ? (me['@:{value.when.active~rs}'] === undefined ? me['@:{value~rs}'] : me['@:{value.when.active~rs}']) : v;
        node('_mx_ipt_' + me.id).value = v; //.toFixed(me['@:{tail.length}']);
    },
    '@:{get.value~rs}'(v) {
        let me = this;
        v = +v;
        if (v || v === 0) {
            let max = me['@:{max~rs}'];
            let min = me['@:{min~rs}'];
            if (v > max) {
                v = max;
            }
            else if (v < min) {
                v = min;
            }
            v = +v.toFixed(me['@:{tail.length~rs}']);
        }
        return isNaN(v) ? (me['@:{support.empty~rs}'] ? '' : 0) : v;
    },
    '@:{set.value~rs}'(v, ignoreFill) {
        let me = this;
        if (v === '' &&
            me['@:{support.empty~rs}']) {
            dispatch(me.root, 'input', {
                value: me['@:{value~rs}'] = v
            });
            return;
        }
        v = me['@:{get.value~rs}'](v);
        if (v !== me['@:{value~rs}']) {
            if (!ignoreFill) {
                me['@:{fix.value~rs}'](v);
            }
            dispatch(me.root, 'input', {
                value: me['@:{value~rs}'] = v
            });
        }
        return me['@:{value~rs}'];
    },
    '@:{key.num.change~rs}'(increase, flag) {
        let me = this;
        let value = me['@:{value~rs}'];
        if (value === '')
            value = 0; //for init
        let step = me['@:{step~rs}'];
        if (flag) {
            if (flag == 1) {
                step *= me['@:{ratio~rs}'];
            }
            else {
                let len = me['@:{tail.length~rs}'];
                let t = Number((step / me['@:{ratio~rs}']).toFixed(len));
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
        me['@:{set.value~rs}'](value);
    },
    '@:{cursor.show~rs}'() {
        let me = this;
        let ipt = node('_mx_ipt_' + me.id);
        if (ipt) {
            ipt.focus();
            ipt.selectionStart = ipt.selectionEnd = ipt.value.length;
        }
    },
    '@:{simulator.active~rs}'() {
        let me = this;
        me.root.classList.add('rd-_assets_index_less_-input-focus');
        if (!has(me, '@:{last.value~rs}')) {
            me['@:{last.value~rs}'] = me['@:{value~rs}'];
        }
    },
    '@:{active~rs}<focusin>'() {
        this['@:{simulator.active~rs}']();
    },
    '@:{deactive~rs}<focusout>'() {
        let me = this;
        if (!me['@:{ui.keep.active~rs}']) {
            me.root.classList.remove('rd-_assets_index_less_-input-focus');
            me['@:{fix.value~rs}']();
            if (me['@:{last.value~rs}'] != me['@:{value~rs}']) {
                dispatch(me.root, 'change', {
                    value: me['@:{value~rs}']
                });
            }
            delete me['@:{last.value~rs}'];
        }
    },
    '@:{key.num.change~rs}<click>'(e) {
        let me = this;
        if (!me['@:{disabled~rs}'] &&
            !me['@:{fast.change.start~rs}']) {
            me['@:{key.num.change~rs}'](e.params.i, getFlagByCtrlKey(e));
            me['@:{cursor.show~rs}']();
        }
    },
    '@:{fast.start~rs}<pointerdown>'(e) {
        let me = this;
        if (!me['@:{disabled~rs}']) {
            me['@:{ui.keep.active~rs}'] = 1;
            me['@:{simulator.active~rs}']();
            let i = e.params.i;
            let m = mark(this, '@:{pointerdown~rs}');
            me['@:{long.tap.timer~rs}'] = setTimeout(() => {
                if (m()) {
                    me['@:{interval.timer~rs}'] = setInterval(() => {
                        if (m()) {
                            me['@:{fast.change.start~rs}'] = 1;
                            me['@:{key.num.change~rs}'](i, getFlagByCtrlKey(e));
                            me['@:{cursor.show~rs}']();
                        }
                    }, 50);
                }
            }, 300);
        }
    },
    '@:{press.check~rs}<keydown>'(e) {
        if (e.code == 'ArrowUp' ||
            e.code == 'ArrowDown') {
            this['@:{prevent.default~rs}'](e);
            let me = this;
            me['@:{key.num.change~rs}'](e.code == 'ArrowUp', getFlagByCtrlKey(e));
        }
    },
    '@:{wheel~rs}<wheel>&{passive:false}'(e) {
        if (this.root.classList.contains('rd-_assets_index_less_-input-focus')) {
            this['@:{prevent.default~rs}'](e);
            let delta = e.deltaY;
            this['@:{key.num.change~rs}'](delta > 0, getFlagByCtrlKey(e));
        }
    },
    '@:{input.check~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let target = e.eventTarget;
        this['@:{set.value~rs}'](target.value, 1);
    },
    '$doc<pointerup>'() {
        let me = this;
        clearTimeout(me['@:{long.tap.timer~rs}']);
        clearInterval(me['@:{interval.timer~rs}']);
        delete me['@:{ui.keep.active~rs}'];
        let m = mark(this, '@:pointerup');
        setTimeout(() => {
            if (m()) {
                delete me['@:{fast.change.start~rs}'];
            }
        }, 0);
    }
});

});