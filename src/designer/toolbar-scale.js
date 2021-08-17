/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar-scale",["magix5","./history","./keyboard","./const"],(require,exports,module)=>{
let $quick_bJ_static_text;
let $quick_bK_static_text;
let $quick_bP_0_static_attr={'class': 'rd-_assets_index_less_-tc rd-_designer_toolbar_less_-toolbar-text',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let history_1 = require("./history");
let keyboard_1 = require("./keyboard");
let const_1 = require("./const");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	scale,
	min,
	i18n,
	max,}=$dataFromView,
$$_class,
$vnode_1;
$vnode_1=[$quick_bJ_static_text||($quick_bJ_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=1,$__art='{{if scale<=min}}','');$__ctrl='<%if(scale<=min){%>';if(scale<=min){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('i',{'mx5-click': $viewId+'@:{stage.scale~rs}({s:\'-\'})','title': ($__line=1,$__art='{{=i18n(\'@:{lang#zoom.out~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#zoom.out~rs}\')%>',(i18n('@:{lang#zoom.out~rs}'))),'class': $$_class,},$vnode_1)];$vnode_1=[$createVNode(0,($__line=2,$__art='{{=scale*100}}',$__ctrl='<%=scale*100%>',(scale*100))+'%')];$vnode_0.push($createVNode('b',$quick_bP_0_static_attr,$vnode_1));$vnode_1=[$quick_bK_static_text||($quick_bK_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=3,$__art='{{if scale>=max}}','');$__ctrl='<%if(scale>=max){%>';if(scale>=max){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'mx5-click': $viewId+'@:{stage.scale~rs}({s:\'+\'})','title': ($__line=3,$__art='{{=i18n(\'@:{lang#zoom.in~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#zoom.in~rs}\')%>',(i18n('@:{lang#zoom.in~rs}'))),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar-scale.html'; throw msg; }  } ,
    init() {
        let update = this.render.bind(this);
        let watchKeypress = e => {
            if (e['@:{keypress#is.prevent.actions~rs}'] ||
                !e['@:{keypress#is.key.down~rs}'])
                return;
            let scale = this.get('scale'), old = scale, max = const_1["@:{const#max.scale~rs}"], min = const_1["@:{const#min.scale~rs}"], step = const_1["@:{const#step.scale~rs}"];
            let { '@:{keypress#code~rs}': code, '@:{keypress#shift.key~rs}': shiftKey, '@:{keypress#ctrl.key~rs}': ctrlKey, '@:{keypress#alt.key~rs}': altKey } = e;
            if (!(shiftKey || altKey) &&
                ctrlKey) {
                if (code == keyboard_1["@:{key#ctrl.plus~rs}"]) {
                    e['@:{keypress#prevent.default~rs}']();
                    scale += step;
                    if (scale > max)
                        scale = max;
                }
                else if (code == keyboard_1["@:{key#ctrl.minus~rs}"]) {
                    e['@:{keypress#prevent.default~rs}']();
                    scale -= step;
                    if (scale < min)
                        scale = min;
                }
                else if (code == keyboard_1["@:{key#num.zero~rs}"]) {
                    //e['@:{keypress#prevent.default}']();
                    //恢复我们不阻止，万－浏览器真有缩放存在，可以通过该操作进行恢复
                    scale = 1;
                }
                if (old != scale &&
                    !e['@:{keypress#active.is.input~rs}']) {
                    State.set({
                        '@:{global#stage.scale~rs}': scale
                    });
                    State.fire('@:{event#stage.scale.change~rs}', {
                        step: scale / old
                    });
                    history_1["@:{history#save~rs}"](scale > old ? history_1['@:{history#zoomin.stage~rs}'] : history_1['@:{history#zoomout.stage~rs}']);
                }
            }
        };
        State.on('@:{event#stage.scale.change~rs}', update);
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.key.press~rs}', watchKeypress);
        this.on('destroy', () => {
            State.off('@:{event#stage.scale.change~rs}', update);
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.key.press~rs}', watchKeypress);
        });
    },
    render() {
        this.digest({
            max: const_1["@:{const#max.scale~rs}"],
            min: const_1["@:{const#min.scale~rs}"],
            scale: State.get('@:{global#stage.scale~rs}')
        });
    },
    '@:{stage.scale~rs}<click>'(e) {
        let { s } = e.params;
        let scale = this.get('scale'), old = scale, max = const_1["@:{const#max.scale~rs}"], min = const_1["@:{const#min.scale~rs}"], step = const_1["@:{const#step.scale~rs}"];
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
                '@:{global#stage.scale~rs}': scale
            });
            //this.render();
            State.fire('@:{event#stage.scale.change~rs}', {
                step: scale / old
            });
            history_1["@:{history#save~rs}"](scale > old ? history_1['@:{history#zoomin.stage~rs}'] : history_1['@:{history#zoomout.stage~rs}']);
        }
    }
});

});