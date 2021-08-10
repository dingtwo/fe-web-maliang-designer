/*
    author:https://github.com/xinglie
*/
import Magix, { inside } from 'magix';
import Cursor from '../gallery/mx-pointer/cursor';
import DragDrop from '../gallery/mx-dragdrop/index';
import Const from '../designer/const';
let DocRoot = document.documentElement;
let { min } = Math;
let { applyStyle, node, View, config, toTry, mark, State, Vframe } = Magix;
applyStyle('@:panel.less');
let MinWidth = 100;
let ZIndex = 600;
let Panels = [];
let PanelsManager = {
    '@:{add}'(view) {
        Panels.push(view);
    },
    '@:{remove}'(view) {
        for (let i = Panels.length; i--;) {
            if (Panels[i] == view) {
                Panels.splice(i, 1);
                break;
            }
        }
        this['@:{z-index}']();
    },
    '@:{z-index}'() {
        for (let i = Panels.length; i--;) {
            Panels[i]['@:{set.z-index}'](ZIndex + i);
        }
    },
    '@:{top}'(view) {
        if (Panels[Panels.length - 1] != view) {
            for (let i = Panels.length; i--;) {
                if (Panels[i] == view) {
                    Panels.splice(i, 1);
                    break;
                }
            }
            Panels.push(view);
            this['@:{z-index}']();
        }
    }
};
export default View.extend({
    tmpl: '@:panel.html',
    init(data) {
        PanelsManager["@:{add}"](this);
        this.on('destroy', () => {
            PanelsManager["@:{remove}"](this);
        });
        this['@:{p.close}'] = data.close;
        this.set(data);
    },
    async render() {
        await this.digest({
            zIndex: ZIndex + Panels.length
        });
        this['@:{fix.position}']();
        this['@:{check.hide.state}']();
    },
    '@:{drag.move}<pointerdown>'(e) {
        this['@:{hold.hide}'] = 1;
        let n = node('_rdp_' + this.id);
        let root = node(config('rootId'));
        n.classList.add('@:./panel.less:content-outer-disable-anim');
        let screenHeight = root.clientHeight;
        let screenWidth = min(root.clientWidth, DocRoot.clientWidth);
        let styles = n.style;
        let startX = this.get('left');
        let dockRight;
        if (startX == null) {
            dockRight = 1;
            startX = this.get('right');
        }
        let startY = this.get('top');
        let dockBottom;
        if (startY == null) {
            dockBottom = 1;
            startY = this.get('bottom');
        }
        let panelWidth = n.offsetWidth;
        let panelHeight = n.offsetHeight;
        let dockXKey = dockRight ? 'right' : 'left';
        let dockYKey = dockBottom ? 'bottom' : 'top';
        let showedCursor;
        let target = e.eventTarget;
        State.set({
            '@:{global#stage.prevent.actions}': 1
        });
        this['@:{drag.drop}'](e, ex => {
            if (!showedCursor) {
                showedCursor = 1;
                Cursor["@:{show}"](target);
            }
            let offsetX = (dockRight ? e.pageX - ex.pageX : ex.pageX - e.pageX) + startX;
            if (offsetX < 0) {
                offsetX = 0;
            } else if (offsetX + panelWidth > screenWidth) {
                offsetX = screenWidth - panelWidth;
            }
            let offsetY = (dockBottom ? e.pageY - ex.pageY : ex.pageY - e.pageY) + startY;
            if (dockBottom &&
                offsetY < 0) {
                offsetY = 0;
            }
            if (offsetY + panelHeight > screenHeight) {
                offsetY = screenHeight - panelHeight;
            }
            if (!dockBottom &&
                offsetY < 0) {
                offsetY = 0;
            }
            styles[dockXKey] = offsetX + 'px';
            styles[dockYKey] = offsetY + 'px';
            this.set({
                [dockXKey]: offsetX,
                [dockYKey]: offsetY
            });
        }, () => {
            State.set({
                '@:{global#stage.prevent.actions}': 0
            });
            delete this['@:{hold.hide}'];
            Cursor["@:{hide}"]();
            n.classList.remove('@:./panel.less:content-outer-disable-anim');
            this['@:{check.hide.state}']();
        });
    },
    '@:{start.resize}<pointerdown>'(e) {
        let { w: resizeWidth } = e.params;
        this['@:{hold.hide}'] = 1;
        let startWidth = this.get('width');
        let startHeight = this.get('height');
        let startRight = this.get('right');
        let cNode = node('_rdc_' + this.id);
        let eventTarget = e.eventTarget;
        eventTarget.classList.add('@:panel.less:resize-hover');

        let root = node(config('rootId'));
        let screenHeight = root.clientHeight;

        cNode.classList.add('@:panel.less:content-outer-disable-anim');
        let cStyles = cNode.style;
        let bound = cNode.getBoundingClientRect();
        let pStyles = node('_rdp_' + this.id).style;
        let showedCursor = 0;
        let target = e.eventTarget;
        State.set({
            '@:{global#stage.prevent.actions}': 1
        });
        this['@:{drag.drop}'](e, ex => {
            if (!showedCursor) {
                showedCursor = 1;
                Cursor["@:{show}"](target);
            }
            if (resizeWidth) {
                let offset = ex.pageX - e.pageX;
                if (offset + startWidth < MinWidth) {
                    offset = MinWidth - startWidth;
                }
                let offsetX = offset + startWidth;
                pStyles.width = offsetX + 'px';
                if (startRight || startHeight === 0) {
                    pStyles.right = (startRight - offset) + 'px';
                    this.set({
                        right: startRight - offset
                    });
                }
                this.set({
                    width: offsetX
                });
            } else {
                let offsetY = e.pageY - ex.pageY + startHeight;
                let height = screenHeight - offsetY;
                let max = screenHeight - bound.y;
                if (height > max) {
                    offsetY = screenHeight - max;
                } else if (height < 0) {
                    offsetY = screenHeight;
                }
                cStyles.height = `calc(100vh - ${offsetY}px)`;
                this.set({
                    height: offsetY
                });
            }
        }, () => {
            State.set({
                '@:{global#stage.prevent.actions}': 0
            });
            delete this['@:{hold.hide}'];
            delete this['@:{user.defined.height}'];
            Cursor["@:{hide}"]();
            cNode.classList.remove('@:panel.less:content-outer-disable-anim');
            eventTarget.classList.remove('@:panel.less:resize-hover');
            this['@:{check.hide.state}']();
        });
    },
    '@:{set.z-index}'(z) {
        node('_rdp_' + this.id).style.zIndex = z;
    },
    '@:{fix.position}'() {
        let check = mark(this, '@:{check.position}');
        setTimeout(() => {
            if (check()) {
                let n = node('_rdp_' + this.id);
                let cNode = node('_rdc_' + this.id);
                let root = node(config('rootId'));
                let definedHeight = this.get('height');
                let startHeight = this['@:{user.defined.height}'] || definedHeight;
                let fixedSize = this.get('fixedSize');
                let screenHeight = root.clientHeight;
                let screenWidth = min(root.clientWidth, DocRoot.clientWidth);
                if (!fixedSize) {
                    if (startHeight > screenHeight) {
                        if (!this['@:{user.defined.height}']) {
                            this['@:{user.defined.height}'] = startHeight;
                        }
                        cNode.style.height = `calc(100vh - ${screenHeight}px)`;
                        this.set({
                            height: screenHeight
                        });
                    } else if (definedHeight != startHeight) {
                        delete this['@:{user.defined.height}'];
                        cNode.style.height = `calc(100vh - ${startHeight}px)`;
                        this.set({
                            height: startHeight
                        });
                    }
                }
                let startX = this.get('left');
                let dockRight;
                if (startX == null) {
                    dockRight = 1;
                    startX = this.get('right');
                }
                let styles = n.style;
                let startY = this.get('top');
                let dockBottom,
                    fixed;
                if (startY == null) {
                    dockBottom = 1;
                    startY = this.get('bottom');
                }
                let panelHeight = n.offsetHeight;
                let panelWidth = n.offsetWidth;
                if (startX + panelWidth > screenWidth) {
                    startX = screenWidth - panelWidth;
                    fixed = 1
                }
                if (startY + panelHeight > screenHeight) {
                    startY = screenHeight - panelHeight;
                    fixed = 1;
                }
                if (!dockRight &&
                    startX < 0) {
                    startX = 0;
                    fixed = 1;
                }
                if (dockRight &&
                    startX < 0) {
                    startX = 0;
                    fixed = 1;
                }
                if (dockBottom &&
                    startY < 0) {
                    startY = 0;
                    fixed = 1;
                }
                if (!dockBottom &&
                    startY < 0) {
                    startY = 0;
                    fixed = 1;
                }
                if (fixed) {
                    let dockYKey = dockBottom ? 'bottom' : 'top';
                    let dockXKey = dockRight ? 'right' : 'left';
                    styles[dockYKey] = startY + 'px';
                    styles[dockXKey] = startX + 'px';
                    this.set({
                        [dockXKey]: startX,
                        [dockYKey]: startY
                    });
                    this['@:{check.hide.state}']();
                }
            }
        }, 300);
    },
    async '@:{toggle.height}'() {
        let shrink = this.get('shrink');
        await this.digest({
            shrink: !shrink
        });
        this['@:{fix.position}']();
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke(shrink ? '@:{show}' : '@:{hide}', [!shrink]);
            }
        }
    },
    '@:{check.hide.state}'() {
        if (Const['@:{const#support.panels.hide.when.nearside}']) {
            let hideMark = mark(this, '@:{hide.mark}');
            this['@:{delay.hide.timer}'] = setTimeout(() => {
                if (hideMark()) {
                    let n = node('_rdp_' + this.id);
                    let styles = n.style;
                    let startX = this.get('left');
                    let width = this.get('width');
                    let height = this.get('height');
                    let startY = this.get('top');
                    let fixedSize = this.get('fixedSize');
                    let shrink = this.get('shrink');
                    let hideX = 0,
                        hideY = '';
                    if (startX == null) {
                        startX = this.get('right');
                        if (startX === 0) {
                            hideX = width - 10;
                        }
                    } else if (startX === 0) {
                        hideX = 10 - width;
                    }
                    if (!shrink &&
                        !hideX) {
                        if (startY == null) {
                            startY = this.get('bottom');
                            if (startY === 0) {
                                hideY = height + 'px';
                            }
                        } else if (startY === 0) {
                            hideY = fixedSize ? (- height - 10) + 'px' : `min(calc(${height - 10}px - 100vh), 0px)`;
                        }
                    }
                    if (hideX ||
                        hideY) {
                        styles.transform = `translate3d(${hideX}px,${hideY || 0},0)`;
                    }
                }
            }, 50);
        }
    },
    '@:{update.z-index}<pointerdown>'(e) {
        PanelsManager["@:{top}"](this);
    },
    '@:{show}'() {
        PanelsManager["@:{top}"](this);
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke('@:{show}', [this.get('shrink')]);
            }
        }
    },
    '@:{hide}'() {
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke('@:{hide}');
            }
        }
    },
    '@:{toggle.height}<click>'() {
        this['@:{toggle.height}']();
    },
    '@:{close}<click>'() {
        let c = this['@:{p.close}'];
        if (c) {
            toTry(c);
        }
    },
    '@:{hover.panel}<pointerover,pointerout>'(e) {
        let inNode = inside(e.relatedTarget, e.eventTarget);
        if (!inNode) {
            let n = node('_rdp_' + this.id);
            let styles = n.style;
            if (e.type == 'pointerover') {
                clearTimeout(this['@:{delay.hide.timer}']);
                styles.transform = 'translate3d(0,0,0)';
            } else if (!this['@:{hold.hide}']) {
                this['@:{check.hide.state}']();
            }
        }
    },
    '$win<resize>'() {
        this['@:{fix.position}']();
    }
}).merge(DragDrop);