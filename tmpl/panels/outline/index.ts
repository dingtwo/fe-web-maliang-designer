/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Dragdrop from '../../gallery/mx-dragdrop/index';
import Cursor from '../../gallery/mx-pointer/cursor';
let { State, node, View, applyStyle, mark, attach, detach } = Magix;
let { min } = Math;
applyStyle('@:index.less');
let OverviewSize = [210, 120];
export default View.extend({
    tmpl: '@:index.html',
    init() {
        let stage = node('_rd_stage');
        let updateOverview = this['@:{debounce}'](this.render);
        State.on('@:{event#history.shift.change}', updateOverview);
        // State.on('@:{event#stage.scale.change}', updateOverview);
        State.on('@:{event#stage.page.change}', updateOverview);
        State.on('@:{event#stage.size.change}', updateOverview);
        State.on('@:{event#stage.page.and.elements.change}', updateOverview);
        State.on('@:{event#stage.elements.change}', updateOverview);
        State.on('@:{event#stage.select.element.props.change}', updateOverview);
        let updatePos = this['@:{update.viewport.pos}'].bind(this);
        //State.on('@:{event#stage.select.element.props.update}', updateOverview);
        attach(stage, 'scroll', updatePos);
        this['@:{update.overview}'] = updateOverview;
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change}', updateOverview);
            State.off('@:{event#stage.page.change}', updateOverview);
            State.off('@:{event#stage.size.change}', updateOverview);
            State.off('@:{event#stage.elements.change}', updateOverview);
            State.off('@:{event#stage.select.element.props.change}', updateOverview);
            State.off('@:{event#stage.page.and.elements.change}', updateOverview);
            detach(stage, 'scroll', updatePos);
        });
    },
    '@:{update.viewport.pos}'() {
        let stage = node('_rd_stage');
        let ratio = this.get('ratio');
        if (ratio) {
            let width = this.get('width');
            let height = this.get('height');
            let viewportWidth = this.get('viewportWidth');
            let viewportHeight = this.get('viewportHeight');
            this.digest({
                left: min(stage.scrollLeft * ratio, width - viewportWidth),
                top: min(stage.scrollTop * ratio, height - viewportHeight)
            });
        }
    },
    render() {
        let m = mark(this, '@:{render}');
        let draw = () => {
            if (m()) {
                if (!node('_rd_sc')) {
                    setTimeout(draw, 20);
                    return;
                }
                let page = State.get('@:{global#stage.page}');
                let scale = State.get('@:{global#stage.scale}');
                let stage = node('_rd_stage');
                let stageRealWidth = stage.scrollWidth;
                let stageRealHeight = stage.scrollHeight;
                let width = OverviewSize[0];
                let ratio = width / stageRealWidth;
                let height = ratio * stageRealHeight;
                if (height > OverviewSize[1]) {
                    height = OverviewSize[1];
                    ratio = height / stageRealHeight;
                    width = ratio * stageRealWidth;
                }
                let pageWidth = ratio * page.width * scale;
                let pageHeight = ratio * page.height * scale;
                let canvasMargin = '';
                for (let e of Const['@:{const#stage.padding}']) {
                    canvasMargin += ratio * e + 'px ';
                }
                let centerMargin = `${(OverviewSize[1] - height) / 2}px ${(OverviewSize[0] - width) / 2}px`;
                let viewportWidth = min(stage.clientWidth, stageRealWidth) * ratio;//for border
                let viewportHeight = min(stage.clientHeight, stageRealHeight) * ratio;
                this.set({
                    unit: State.get('@:{global#stage.unit}'),
                    width,
                    height,
                    page,
                    pageWidth,
                    pageHeight,
                    ratio,
                    elements: State.get('@:{global#stage.elements}'),
                    viewportHeight,
                    viewportWidth,
                    canvasMargin,
                    centerMargin
                });
                this['@:{update.viewport.pos}']();
            }
        };
        setTimeout(draw, 20);
    },
    '@:{move.viewport}<pointerdown>'(e) {
        let startX = this.get('left'),
            startY = this.get('top'),
            viewportWidth = this.get('viewportWidth'),
            viewportHeight = this.get('viewportHeight'),
            width = this.get('width'),
            height = this.get('height'),
            stage = node('_rd_stage'),
            ratio = this.get('ratio');
        State.set({
            '@:{global#stage.prevent.actions}': 1
        });
        Cursor["@:{root.show.by.type}"]('move');
        this['@:{drag.drop}'](e, ex => {
            let x = startX + ex.pageX - e.pageX;
            let y = startY + ex.pageY - e.pageY;
            if (x < 0) {
                x = 0;
            } else if (x > (width - viewportWidth)) {
                x = width - viewportWidth;
            }
            if (y < 0) {
                y = 0;
            } else if (y > (height - viewportHeight)) {
                y = height - viewportHeight;
            }
            stage.scrollLeft = x / ratio;
            stage.scrollTop = y / ratio;
            this['@:{viewport.moved}'] = 1;
        }, () => {
            State.set({
                '@:{global#stage.prevent.actions}': 0
            });
            Cursor["@:{root.hide}"]();
        });
    },
    '$win<resize>'() {
        this['@:{update.overview}']();
    }
}).merge(Dragdrop);