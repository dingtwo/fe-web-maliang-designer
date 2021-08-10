/*
    author:https://github.com/xinglie
*/
import Magix, { State } from 'magix';
import Const from '../../designer/const';
let { View, applyStyle, node } = Magix;
applyStyle('@:./index.less');
let scaleYReg = /scaleY\(([\d\.]+)\)/;
export default View.extend({
    tmpl: '@:index.html',
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            scale: State.get('@:{global#stage.scale}') || 1
        });
    },
    '@:{update.size}'() {
        let todoNode = node(`todo_${this.id}`);
        if (todoNode) {
            let childNodes = todoNode.childNodes;
            let scale = State.get<number>('@:{global#stage.scale}') || 1
            let h = 2 * scale;
            for (let i = childNodes.length; i--;) {
                let c = childNodes[i];
                if (c.nodeType == 1) {
                    let b = (c as HTMLDivElement).getBoundingClientRect();
                    h += b.height;
                }
            }
            let stageCanvas = node('_rd_sc');
            if (stageCanvas) {
                let scParentNode = stageCanvas.parentNode as HTMLDivElement;
                let m = scParentNode.style.transform.match(scaleYReg);
                if (m) {
                    h /= parseFloat(m[1]);
                }
            }
            let props = this.get('props');
            props.height = Const['@:{const#to.unit}'](h);
            console.log(h);
            this.digest({
                props
            });
        }
    },
    async '@:{watch.key.down}<keydown>'(e: Magix5.MagixKeyboardEvent) {
        let { code, eventTarget } = e;
        if (code == 'Enter') {
            let v = (eventTarget as HTMLInputElement).value.trim();
            (eventTarget as HTMLInputElement).value = '';
            let props = this.get('props');
            props.todos.push({
                task: v,
                complete: false
            });
            await this.digest({
                props
            });
            this['@:{update.size}']();
        }
    },
    async '@:{remove.task.at}<click>'(e: Magix5.MagixMouseEvent) {
        let { index } = e.params;
        let props = this.get('props');
        props.todos.splice(index, 1);
        await this.digest({
            props
        });
        this['@:{update.size}']();
    },
    '@:{change.task.status}<change>'(e: Magix5.MagixMouseEvent) {
        let { index } = e.params;
        let props = this.get('props');
        let todo = props.todos[index];
        todo.complete = (e.eventTarget as HTMLInputElement).checked;
        this.digest({
            props
        });
    },
    '@:{stop}<pointerdown,contextmenu>'(e: MouseEvent) {
        if (e['@:{halt}']) return;
        e['@:{halt}'] = 1;
    }
});