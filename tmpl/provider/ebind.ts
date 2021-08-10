/**
 * 普通元素通用数据绑定
 */
import Magix from 'magix';
import DHistory from '../designer/history';
import StageGeneric from '../designer/stage-generic';
import StageSelection from '../designer/stage-selection';
import Dragdrop from '../gallery/mx-dragdrop/index';
let { State } = Magix;
export default {
    '@:{when.data.field.enter}<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked) return;
        let contents = this['@:{has.contents}'];
        if (contents) {
            for (let c of contents) {
                if (props[c]) {
                    return;
                }
            }
        }
        e['@:{halt}'] = 1;
        if (Dragdrop['@:{is.dragenter}'](this)) {
            let src = State.get('@:{global#bind.field.drag.data}');
            if (src) {
                this.digest({
                    enter: 1
                });
            }
        }
    },
    '@:{when.data.field.leave}<dragleave>'(e) {
        let enter = this.get('enter');
        if (Dragdrop['@:{is.dragleave}'](this)) {
            if (enter) {
                this.digest({
                    enter: 0
                });
            }
        }
    },
    '@:{when.data.field.drop}<drop>'(e) {
        this['@:{prevent.default}'](e);
        Dragdrop['@:{clear.drag}'](this);
        let enter = this.get('enter');
        let src = State.get('@:{global#bind.field.drag.data}');
        if (src &&
            enter) {
            e['@:{halt}'] = 1;
            let props = this.get('props');
            let { bind } = props;
            let element = this.get('element');
            let oldStringify = [bind.id, bind.url].concat(bind.fields).join('\x00');
            let newStringify = [src.id, src.url].concat(src.fields).join('\x00');
            if (oldStringify != newStringify) {
                bind.id = src.id;
                bind.url = src.url;
                bind.fields = [src.field];

                StageSelection["@:{selection#set}"](element);
                State.fire('@:{event#stage.select.element.props.change}', {
                    '@:{ids}': {
                        [element.id]: 1
                    },
                    '@:{types}': {
                        [element.type]: 1
                    },
                    '@:{props}': {
                        '@:{bind}': 1
                    }
                });
                this.assign({
                    props
                });
                DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], StageGeneric['@:{generic#query.element.name}']([element]));
            }
            this.set({
                enter: 0
            });
            this.render();
        }
    }
}