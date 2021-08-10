/**
 * 设计区拖放插件
 */
import Magix from 'magix';
import Const from '../designer/const';
import StageElements from '../designer/stage-elements';
let { State, has } = Magix;
let toUnitPropNames = ['x', 'y', 'width', 'height'];
let watchDrop = (e: DragEvent) => {
    if (e['@:{halt}']) return;
    e.preventDefault();
    let bindData = State.get('@:{global#bind.field.drag.data}');
    let target = e.target as HTMLElement;
    if (bindData) {
        let fieldInfo = bindData.field;
        let elementsMap = State.get('@:{global#stage.elements.map}');
        let xCtrl = elementsMap[fieldInfo.use] || elementsMap.text;
        let props = Const['@:{const#clone}'](fieldInfo.props) || {};
        for (let up of toUnitPropNames) {
            if (has(props, up)) {
                props[up] = Const['@:{const#to.unit}'](props[up]);
            }
        }
        props.bind = {
            id: bindData.id,
            url: bindData.url,
            fields: [bindData.field]
        };
        State.set({
            '@:{global#memory.cache.element}': [{
                ctrl: xCtrl,
                props
            }]
        });
        let fromEventOffset = State.get('@:{global#bind.field.drag.event.offset}');
        State.fire('@:{event#toolbox.add.element}', {
            node: target,
            pageX: e.pageX - fromEventOffset['@:{offset.x}'],
            pageY: e.pageY - fromEventOffset['@:{offset.y}']
        });
    }
};
let watchMove = (e: DragEvent) => {
    let bindData = State.get('@:{global#bind.field.drag.data}');
    if (bindData) {
        let elementsMap = State.get('@:{global#stage.elements.map}');
        let target = e.target as HTMLElement;
        let lastHod;
        //尝试使用字段指定的类型或默认文本类型
        let xCtrl = elementsMap[bindData.field.use] || elementsMap.text;
        if (xCtrl) {//有控制器才进入处理
            if (!e['@:{halt}']) {
                lastHod = StageElements['@:{elements#get.best.hod}'](target, xCtrl);;
            }
            State.fire('@:{event#toolbox.drag.element.move}', {
                ctrl: xCtrl,
                stage: 1,
                hod: lastHod,
                node: target
            });
        }
    }
};
export default {
    '@:{sdrop#setup}'() {
        State.set({
            '@:{global#provider.of.stage.drop}': 1
        });
    },
    '@:{sdrop#teardown}'() {
        State.set({
            '@:{global#provider.of.stage.drop}': null
        });
    },
    '@:{sdrop#drag.enter}': watchMove,
    '@:{sdrop#drop}': watchDrop
}