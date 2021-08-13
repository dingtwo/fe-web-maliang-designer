/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6n",["5c","./5o","./5p","./5e"],(require,exports,module)=>{
let $quick_mf_static_text;
let $quick_mg_static_text;
let $quick_ml_0_static_attr={'class': 'rd-mG rd-po',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let history_1 = require("./5o");
let keyboard_1 = require("./5p");
let const_1 = require("./5e");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	scale,
	min,
	i18n,
	max,}=$dataFromView,
$$_class,
$vnode_1;
$vnode_1=[$quick_mf_static_text||($quick_mf_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(scale<=min){;$$_class+=' rd-pn';};$vnode_0=[$createVNode('i',{'mx5-click': $viewId+'_oy({s:\'-\'})','title': (i18n('nK')),'class': $$_class,},$vnode_1)];$vnode_1=[$createVNode(0,(scale*100)+'%')];$vnode_0.push($createVNode('b',$quick_ml_0_static_attr,$vnode_1));$vnode_1=[$quick_mg_static_text||($quick_mg_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(scale>=max){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'mx5-click': $viewId+'_oy({s:\'+\'})','title': (i18n('nL')),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        let watchKeypress = e => {
            if (e['l2'] ||
                !e['l3'])
                return;
            let scale = this.get('scale'), old = scale, max = const_1["mr"], min = const_1["ms"], step = const_1["mt"];
            let { 'l5': code, 'l6': shiftKey, 'l7': ctrlKey, 'l8': altKey } = e;
            if (!(shiftKey || altKey) &&
                ctrlKey) {
                if (code == keyboard_1["mv"]) {
                    e['l9']();
                    scale += step;
                    if (scale > max)
                        scale = max;
                }
                else if (code == keyboard_1["mw"]) {
                    e['l9']();
                    scale -= step;
                    if (scale < min)
                        scale = min;
                }
                else if (code == keyboard_1["mx"]) {
                    //e['@:{keypress#prevent.default}']();
                    //恢复我们不阻止，万－浏览器真有缩放存在，可以通过该操作进行恢复
                    scale = 1;
                }
                if (old != scale &&
                    !e['l4']) {
                    State.set({
                        'l3': scale
                    });
                    State.fire('l6', {
                        step: scale / old
                    });
                    history_1["l2"](scale > old ? history_1['mf'] : history_1['mg']);
                }
            }
        };
        State.on('l6', update);
        State.on('l7', update);
        State.on('ma', watchKeypress);
        this.on('destroy', () => {
            State.off('l6', update);
            State.off('l7', update);
            State.off('ma', watchKeypress);
        });
    },
    render() {
        this.digest({
            max: const_1["mr"],
            min: const_1["ms"],
            scale: State.get('l3')
        });
    },
    '_oy<click>'(e) {
        let { s } = e.params;
        let scale = this.get('scale'), old = scale, max = const_1["mr"], min = const_1["ms"], step = const_1["mt"];
        if (s == '+') {
            scale += step;
            if (scale > max)
                scale = max;
        }
        else {
            scale -= step;
            if (scale < min)
                scale = min;
        }
        if (old != scale) {
            State.set({
                'l3': scale
            });
            //this.render();
            State.fire('l6', {
                step: scale / old
            });
            history_1["l2"](scale > old ? history_1['mf'] : history_1['mg']);
        }
    }
});

});