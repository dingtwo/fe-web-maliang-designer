/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5p",["4e","./4q","./4r","./4g"],(require,exports,module)=>{
let $quick_dS_static_text;
let $quick_dT_static_text;
let $quick_dY_0_static_attr={'class': 'rd-ei rd-g1',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let history_1 = require("./4q");
let keyboard_1 = require("./4r");
let const_1 = require("./4g");
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
$vnode_1=[$quick_dS_static_text||($quick_dS_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(scale<=min){;$$_class+=' rd-g0';};$vnode_0=[$createVNode('i',{'mx5-click': $viewId+'_ga({s:\'-\'})','title': (i18n('fm')),'class': $$_class,},$vnode_1)];$vnode_1=[$createVNode(0,(scale*100)+'%')];$vnode_0.push($createVNode('b',$quick_dY_0_static_attr,$vnode_1));$vnode_1=[$quick_dT_static_text||($quick_dT_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(scale>=max){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'mx5-click': $viewId+'_ga({s:\'+\'})','title': (i18n('fn')),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        let watchKeypress = e => {
            if (e['dE'] ||
                !e['dF'])
                return;
            let scale = this.get('scale'), old = scale, max = const_1["d4"], min = const_1["d5"], step = const_1["d6"];
            let { 'dH': code, 'dI': shiftKey, 'dJ': ctrlKey, 'dK': altKey } = e;
            if (!(shiftKey || altKey) &&
                ctrlKey) {
                if (code == keyboard_1["d8"]) {
                    e['dL']();
                    scale += step;
                    if (scale > max)
                        scale = max;
                }
                else if (code == keyboard_1["d9"]) {
                    e['dL']();
                    scale -= step;
                    if (scale < min)
                        scale = min;
                }
                else if (code == keyboard_1["e_"]) {
                    //e['@:{keypress#prevent.default}']();
                    //恢复我们不阻止，万－浏览器真有缩放存在，可以通过该操作进行恢复
                    scale = 1;
                }
                if (old != scale &&
                    !e['dG']) {
                    State.set({
                        'dF': scale
                    });
                    State.fire('dI', {
                        step: scale / old
                    });
                    history_1["dE"](scale > old ? history_1['dS'] : history_1['dT']);
                }
            }
        };
        State.on('dI', update);
        State.on('dJ', update);
        State.on('dN', watchKeypress);
        this.on('destroy', () => {
            State.off('dI', update);
            State.off('dJ', update);
            State.off('dN', watchKeypress);
        });
    },
    render() {
        this.digest({
            max: const_1["d4"],
            min: const_1["d5"],
            scale: State.get('dF')
        });
    },
    '_ga<click>'(e) {
        let { s } = e.params;
        let scale = this.get('scale'), old = scale, max = const_1["d4"], min = const_1["d5"], step = const_1["d6"];
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
                'dF': scale
            });
            //this.render();
            State.fire('dI', {
                step: scale / old
            });
            history_1["dE"](scale > old ? history_1['dS'] : history_1['dT']);
        }
    }
});

});