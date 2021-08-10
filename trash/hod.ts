/*
    author:https://github.com/xinglie
*/
'ref@:./index.less';
import Magix from 'magix';
let { State, has: Has, Vframe, node, View } = Magix;
export default View.extend({
    tmpl: '@:hod.html',
    '@:{check.status}'() {
        let map = State.get('@:{global#stage.select.elements.map}');
        let elements = State.get('@:{global#stage.select.elements}');
        let count = elements.length;
        let element = this.get('element');
        if (element) {
            let id = element.id;
            let groups = State.get('@:{global#stage.elements.groups}');
            let list = groups[id],
                grouped = 0;
            if (!map[id] &&
                list) {
                for (let n of list) {
                    if (map[n]) {
                        grouped = 1;
                        break;
                    }
                }
            }
            let selected = this.get('selected');
            if (selected) {
                if (!Has(map, id)) {
                    let vf = Vframe.byNode(node('entity_' + this.id));
                    if (vf) {
                        vf.invoke('@:{lost.select}');
                    }
                }
            } /*else {
                if (Has(map, id)) {
                    let vf = Vframe.get('entity_' + this.id);
                    if (vf) {
                        vf.invoke('@:{got.select}');
                    }
                }
            }*/
            //console.log(Has(map, id));

            this.set({
                grouped,
                selfGrouped: list,
                selected: Has(map, id),
                count
            });
            return 1;
        }
    },
    assign(data) {
        this.set(data);
        return this['@:{check.status}']();
    },
    render() {
        //console.log('rerender');
        this.digest();
    },
    '@:{update}'(element) {
        this.digest({
            element
        });
    }
});