/*
    author:https://github.com/xinglie
*/
'ref@:./index.less';
import Magix from 'magix';
import DHistory from '../../designer/history';
import Props from '../../designer/props';
import I18n from '../../i18n/index';
import Const from '../../designer/const';
let { State, View, mark } = Magix;
export default View.extend({
    tmpl: '@:page.html',
    init() {
        let update = this.render.bind(this);
        State.on('@:{event#stage.page.change}', update);
        State.on('@:{event#history.shift.change}', update);
        State.on('@:{event#stage.page.and.elements.change}', update);
        this.on('destroy', () => {
            State.off('@:{event#stage.page.change}', update);
            State.off('@:{event#history.shift.change}', update);
            State.off('@:{event#stage.page.and.elements.change}', update);
        });
        this.set({
            props: Props,
            ctrl: State.get('@:{global#stage.page.ctrl}')
        })
    },
    assign() {
        return false;
    },
    render() {
        let page = State.get('@:{global#stage.page}');
        let size = page.width + 'x' + page.height;
        page.paper = size;
        page.screen = size;
        this.digest({
            page
        });
    },
    async '@:{update.prop}<input,change>'(e) {
        let { key, use, native, write } = e.params;
        let page = State.get('@:{global#stage.page}');
        let v = native ? e.eventTarget[native] : e[use];
        let marker = mark(this, '@:{update.props}');
        if (write) {
            v = await write(v, page, e);
        }
        if (marker()) {
            page[key] = v;
            if (key == 'unit') {
                State.fire('@:{event#stage.unit.change}', {
                    '@:{to.unit}': v
                });
            } else {
                State.fire('@:{event#stage.page.change}');
            }
            DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], I18n('@:{lang#elements.page}'), '@:{history#stage.prpops.change}' + key, 500);
        }
    },
    '@:{update.image.size}<click>'(e: Magix5.MagixMouseEvent) {
        let page = State.get('@:{global#stage.page}');
        let img = new Image();
        let m = mark(this, '@:{update.img.size}');
        let setSize = () => {
            let newWidth = Const['@:{const#to.unit}'](img.width),
                newHeight = Const['@:{const#to.unit}'](img.height);
            if (m() &&
                (newWidth != page.backgroundWidth ||
                    newHeight != page.backgroundHeight)) {
                page.backgroundWidth = newWidth;
                page.backgroundHeight = newHeight;
                State.fire('@:{event#stage.page.change}');
                DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], I18n('@:{lang#elements.page}'));
            }
        };
        img.onload = setSize;
        img.src = page.backgroundImage;
        if (img.complete) {
            setSize();
        }
    }
});