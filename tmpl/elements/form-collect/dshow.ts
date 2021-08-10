/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import DHistory from '../../designer/history';
import Dragdrop from '../../gallery/mx-dragdrop/index';
import HodBaseProvider from '../../provider/hodbase';
import HodExtProvider from '../../provider/hodext';
import TableProvider from '../../provider/table';
let { View, State } = Magix;
export default View.extend({
    tmpl: '@:dshow.html',
    init() {
        this.set({
            toPx: Const['@:{const#to.px}'],
            toUnit: Const['@:{const#to.unit}'],
            getMaxCol(props) {
                let ext = TableProvider['@:{table.provider#add.ext.meta}'](props, 1);
                return ext['@:{col.max}'];
            },
            fieldRow: -1,
            fieldCol: -1
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{update.cell.dropdown}<change>'(e: Magix5.MagixMouseEvent) {
        let { params, eventTarget } = e;
        let { cell } = params;
        let value = (eventTarget as HTMLSelectElement).options;
        let dropdownItems = cell.dropdownItems,
            changed;
        console.log(dropdownItems, value);
        for (let i = value.length; i--;) {
            let item = value[i];
            let src = dropdownItems[item.index];
            if (src.checked != item.selected) {
                src.checked = item.selected;
                changed = 1;
            }
        }
        console.log(changed);
        if (changed) {
            let element = this.get('element');
            let props = this.get('props');
            this.digest({
                props
            });
            State.fire('@:{event#stage.select.element.props.change}', {
                '@:{ids}': {
                    [element.id]: 1
                },
                '@:{types}': {
                    [element.type]: 1
                },
                '@:{props}': {
                    rows: 1
                }
            });
            DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], props.ename, element.id + '@:{history#element.props.change}' + 'rows', 500);
        }
    }
}).merge(Dragdrop, HodBaseProvider, HodExtProvider);