/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/6c",["51","./5d","./5e","./53"],(require,exports,module)=>{
let $quick_gr_static_text;
let $quick_gs_static_text;
let $quick_gx_0_static_attr={'class': 'rd-gS rd-jA',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let history_1 = require("./5d");
let keyboard_1 = require("./5e");
let const_1 = require("./53");
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
$vnode_1=[$quick_gr_static_text||($quick_gr_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(scale<=min){;$$_class+=' rd-jz';};$vnode_0=[$createVNode('i',{'mx5-click': $viewId+'_iN({s:\'-\'})','title': (i18n('hW')),'class': $$_class,},$vnode_1)];$vnode_1=[$createVNode(0,(scale*100)+'%')];$vnode_0.push($createVNode('b',$quick_gx_0_static_attr,$vnode_1));$vnode_1=[$quick_gs_static_text||($quick_gs_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(scale>=max){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'mx5-click': $viewId+'_iN({s:\'+\'})','title': (i18n('hX')),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        let watchKeypress = e => {
            if (e['gd'] ||
                !e['ge'])
                return;
            let scale = this.get('scale'), old = scale, max = const_1["gD"], min = const_1["gE"], step = const_1["gF"];
            let { 'gg': code, 'gh': shiftKey, 'gi': ctrlKey, 'gj': altKey } = e;
            if (!(shiftKey || altKey) &&
                ctrlKey) {
                if (code == keyboard_1["gH"]) {
                    e['gk']();
                    scale += step;
                    if (scale > max)
                        scale = max;
                }
                else if (code == keyboard_1["gI"]) {
                    e['gk']();
                    scale -= step;
                    if (scale < min)
                        scale = min;
                }
                else if (code == keyboard_1["gJ"]) {
                    //e['@:{keypress#prevent.default}']();
                    //恢复我们不阻止，万－浏览器真有缩放存在，可以通过该操作进行恢复
                    scale = 1;
                }
                if (old != scale &&
                    !e['gf']) {
                    State.set({
                        'ge': scale
                    });
                    State.fire('gh', {
                        step: scale / old
                    });
                    history_1["gd"](scale > old ? history_1['gr'] : history_1['gs']);
                }
            }
        };
        State.on('gh', update);
        State.on('gi', update);
        State.on('gm', watchKeypress);
        this.on('destroy', () => {
            State.off('gh', update);
            State.off('gi', update);
            State.off('gm', watchKeypress);
        });
    },
    render() {
        this.digest({
            max: const_1["gD"],
            min: const_1["gE"],
            scale: State.get('ge')
        });
    },
    '_iN<click>'(e) {
        let { s } = e.params;
        let scale = this.get('scale'), old = scale, max = const_1["gD"], min = const_1["gE"], step = const_1["gF"];
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
                'ge': scale
            });
            //this.render();
            State.fire('gh', {
                step: scale / old
            });
            history_1["gd"](scale > old ? history_1['gr'] : history_1['gs']);
        }
    }
});

});