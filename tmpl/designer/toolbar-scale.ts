/*
    author:https://github.com/xinglie
*/
'ref@:./toolbar.less';
import Magix from 'magix';
import DHistory from './history';
import Keyboard from './keyboard';
import Const from './const';
let { State, View } = Magix;
export default View.extend({
    tmpl: '@:toolbar-scale.html',
    init() {
        let update = this.render.bind(this);
        let watchKeypress = e => {
            if (e['@:{keypress#is.prevent.actions}'] ||
                !e['@:{keypress#is.key.down}']) return;
            let scale = this.get('scale'),
                old = scale,
                max = Const["@:{const#max.scale}"],
                min = Const["@:{const#min.scale}"],
                step = Const["@:{const#step.scale}"];
            let {
                '@:{keypress#code}': code,
                '@:{keypress#shift.key}': shiftKey,
                '@:{keypress#ctrl.key}': ctrlKey,
                '@:{keypress#alt.key}': altKey
            } = e;
            if (!(shiftKey || altKey) &&
                ctrlKey) {
                if (code == Keyboard["@:{key#ctrl.plus}"]) {
                    e['@:{keypress#prevent.default}']();
                    scale += step;
                    if (scale > max) scale = max;
                } else if (code == Keyboard["@:{key#ctrl.minus}"]) {
                    e['@:{keypress#prevent.default}']();
                    scale -= step;
                    if (scale < min) scale = min;
                } else if (code == Keyboard["@:{key#num.zero}"]) {
                    //e['@:{keypress#prevent.default}']();
                    //恢复我们不阻止，万－浏览器真有缩放存在，可以通过该操作进行恢复
                    scale = 1;
                }
                if (old != scale &&
                    !e['@:{keypress#active.is.input}']) {
                    State.set({
                        '@:{global#stage.scale}': scale
                    });
                    State.fire('@:{event#stage.scale.change}', {
                        step: scale / old
                    });
                    DHistory["@:{history#save}"](scale > old ? DHistory['@:{history#zoomin.stage}'] : DHistory['@:{history#zoomout.stage}']);
                }
            }
        };
        State.on('@:{event#stage.scale.change}', update);
        State.on('@:{event#history.shift.change}', update);
        State.on('@:{event#stage.key.press}', watchKeypress);
        this.on('destroy', () => {
            State.off('@:{event#stage.scale.change}', update);
            State.off('@:{event#history.shift.change}', update);
            State.off('@:{event#stage.key.press}', watchKeypress);
        });
    },
    render() {
        this.digest({
            max: Const["@:{const#max.scale}"],
            min: Const["@:{const#min.scale}"],
            scale: State.get('@:{global#stage.scale}')
        });
    },
    '@:{stage.scale}<click>'(e) {
        let { s } = e.params;
        let scale = this.get('scale'),
            old = scale,
            max = Const["@:{const#max.scale}"],
            min = Const["@:{const#min.scale}"],
            step = Const["@:{const#step.scale}"];
        if (s == '+') {
            scale += step;
            if (scale > max) scale = max;
        } else {
            scale -= step;
            if (scale < min) scale = min;
        }
        if (old != scale) {
            State.set({
                '@:{global#stage.scale}': scale
            });
            //this.render();
            State.fire('@:{event#stage.scale.change}', {
                step: scale / old
            });
            DHistory["@:{history#save}"](scale > old ? DHistory['@:{history#zoomin.stage}'] : DHistory['@:{history#zoomout.stage}']);
        }
    }
});