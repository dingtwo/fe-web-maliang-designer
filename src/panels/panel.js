/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/7h",["5c","../5j/5l/cursor","../5j/5k/index","../5b/5e"],(require,exports,module)=>{
let $quick_m4_static_text;
let $quick_nf_static_text;
let $quick_on_0_static_attr={'class': 'rd-l3 rd-mq rd-nU',};
let $quick_on_1_static_attr={'class': 'rd-mC rd-mX rd-mZ',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let cursor_1 = require("../5j/5l/cursor");
let index_1 = require("../5j/5k/index");
let const_1 = require("../5b/5e");
let DocRoot = document.documentElement;
let { min } = Math;
let { applyStyle, node, View, config, toTry, mark, State, Vframe } = magix_1;
applyStyle("rd-mC",".rd-sd{background:#fffe;box-shadow:0 2px 4px 0 rgba(0,0,0,.3);transform:translateZ(0)}.rd-sd:hover{will-change:left,top,right,bottom,transform}.rd-se{background:#47b34e;color:#fff;height:18px;line-height:18px}.rd-sf{cursor:move;padding:0 5px;width:calc(100% - 36px)}.rd-sg{border-radius:2px;display:inline-flex;height:14px;margin:0 1px;width:16px}.rd-sg:hover{background:#398e3e}.rd-sh{transition-duration:.25s}.rd-si{transition:height .25s}.rd-sj{transition:none}.rd-sk{-ms-scroll-chaining:none;content-visibility:auto;overscroll-behavior:contain}.rd-sl{cursor:ew-resize;inset:0 0 0 auto;width:3px}.rd-sm{cursor:ns-resize;height:3px;inset:auto 0 0}.rd-sm:hover,.rd-sl:hover,.rd-sn{background:#8ed292}");
let MinWidth = 100;
let ZIndex = 600;
let Panels = [];
let PanelsManager = {
    '_rF'(view) {
        Panels.push(view);
    },
    '_pd'(view) {
        for (let i = Panels.length; i--;) {
            if (Panels[i] == view) {
                Panels.splice(i, 1);
                break;
            }
        }
        this['_u_']();
    },
    '_u_'() {
        for (let i = Panels.length; i--;) {
            Panels[i]['_ua'](ZIndex + i);
        }
    },
    '_n7'(view) {
        if (Panels[Panels.length - 1] != view) {
            for (let i = Panels.length; i--;) {
                if (Panels[i] == view) {
                    Panels.splice(i, 1);
                    break;
                }
            }
            Panels.push(view);
            this['_u_']();
        }
    }
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	width,
	left,
	right,
	top,
	bottom,
	zIndex,
	i18n,
	icon,
	title,
	shrink,
	key,
	fixedSize,
	height,
	cm,
	view,
	resizeX,
	resizeY,}=$dataFromView,
$$_style,
$vnode_4,
$vnode_3,
$$_class,
$vnode_2,
$vnode_1;
$vnode_3=[];
if(icon){
$vnode_4=[$createVNode(0,(icon),1)];$vnode_3.push($createVNode('i',$quick_on_0_static_attr,$vnode_4));
}$vnode_3.push($createVNode(0,(i18n(title))));$vnode_2=[$createVNode('div',{'class': 'rd-mW rd-on rd-sf','title': (i18n('tw')),'mx5-pointerdown': $viewId+'1_uf()',},$vnode_3)];$vnode_4=[$quick_m4_static_text||($quick_m4_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-sg rd-nT rd-nk rd-ng rd-mZ';if(shrink){;$$_class+=' rd-ms';};$vnode_3=[$createVNode('i',{'mx5-click': $viewId+'_t5()','title': (i18n(shrink?'tz':'tE',title,key)),'class': $$_class,},$vnode_4)];$vnode_4=[$quick_nf_static_text||($quick_nf_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-l3 rd-mZ rd-nT rd-ng rd-nk rd-sg','mx5-click': $viewId+'_mR()','title': (i18n('nI',title,key)),},$vnode_4));$vnode_2.push($createVNode('div',$quick_on_1_static_attr,$vnode_3));$vnode_1=[$createVNode('div',{'class': 'rd-mR rd-mX rd-nU rd-se','mx5-contextmenu': $viewId+'_nT()',},$vnode_2)];$vnode_2=[];$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-mC rd-mS rd-mT rd-nQ rd-sk','mx5-view': (view),'id': '_rd_'+$viewId+'_v',}));
if(resizeX){
$vnode_2.push($createVNode('div',{'class': 'rd-mC rd-mJ rd-mR rd-on rd-sl','title': (i18n('ty')),'mx5-pointerdown': $viewId+'1_qd({w:1})','mx5-contextmenu': $viewId+'_nT()',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-nO rd-oe rd-si','id': '_rdc_'+$viewId,'style': 'height:'+(shrink?0:fixedSize?`${height}px`:`calc(100vh - ${height}px)`),'mx5-contextmenu': ((cm==null))&&($viewId+'_nT()'),},$vnode_2));;$$_class='rd-sm rd-mJ rd-mR rd-on';if(shrink||!resizeY){;$$_class+=' rd-mO';};$vnode_1.push($createVNode('div',{'title': (i18n('tB')),'mx5-contextmenu': $viewId+'_nT()','mx5-pointerdown': $viewId+'_qd({h:1})','class': $$_class,}));;$$_style='width:'+(width)+'px;';if(left!=null){;$$_style+='left:'+(left);}else{;$$_style+='right:'+(right);};$$_style+='px;';if(top!=null){;$$_style+='top:'+(top)+'px';}else{;$$_style+='bottom:'+(bottom)+'px';};$$_style+=';z-index:'+(zIndex);$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-on rd-sd rd-sh','id': '_rdp_'+$viewId,'mx5-pointerdown': $viewId+'_uk()','mx5-pointerover': $viewId+'_ul()','mx5-pointerout': $viewId+'_ul()','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        PanelsManager["_rF"](this);
        this.on('destroy', () => {
            PanelsManager["_pd"](this);
        });
        this['_ub'] = data.close;
        this.set(data);
    },
    async render() {
        await this.digest({
            zIndex: ZIndex + Panels.length
        });
        this['_uc']();
        this['_ud']();
    },
    '_uf<pointerdown>'(e) {
        this['_ue'] = 1;
        let n = node('_rdp_' + this.id);
        let root = node(config('rootId'));
        n.classList.add('rd-sj');
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
            'l8': 1
        });
        this['_mz'](e, ex => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["_mA"](target);
            }
            let offsetX = (dockRight ? e.pageX - ex.pageX : ex.pageX - e.pageX) + startX;
            if (offsetX < 0) {
                offsetX = 0;
            }
            else if (offsetX + panelWidth > screenWidth) {
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
                'l8': 0
            });
            delete this['_ue'];
            cursor_1["_mB"]();
            n.classList.remove('rd-sj');
            this['_ud']();
        });
    },
    '_qd<pointerdown>'(e) {
        let { w: resizeWidth } = e.params;
        this['_ue'] = 1;
        let startWidth = this.get('width');
        let startHeight = this.get('height');
        let startRight = this.get('right');
        let cNode = node('_rdc_' + this.id);
        let eventTarget = e.eventTarget;
        eventTarget.classList.add('rd-sn');
        let root = node(config('rootId'));
        let screenHeight = root.clientHeight;
        cNode.classList.add('rd-sj');
        let cStyles = cNode.style;
        let bound = cNode.getBoundingClientRect();
        let pStyles = node('_rdp_' + this.id).style;
        let showedCursor = 0;
        let target = e.eventTarget;
        State.set({
            'l8': 1
        });
        this['_mz'](e, ex => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["_mA"](target);
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
            }
            else {
                let offsetY = e.pageY - ex.pageY + startHeight;
                let height = screenHeight - offsetY;
                let max = screenHeight - bound.y;
                if (height > max) {
                    offsetY = screenHeight - max;
                }
                else if (height < 0) {
                    offsetY = screenHeight;
                }
                cStyles.height = `calc(100vh - ${offsetY}px)`;
                this.set({
                    height: offsetY
                });
            }
        }, () => {
            State.set({
                'l8': 0
            });
            delete this['_ue'];
            delete this['_ug'];
            cursor_1["_mB"]();
            cNode.classList.remove('rd-sj');
            eventTarget.classList.remove('rd-sn');
            this['_ud']();
        });
    },
    '_ua'(z) {
        node('_rdp_' + this.id).style.zIndex = z;
    },
    '_uc'() {
        let check = mark(this, '_uh');
        setTimeout(() => {
            if (check()) {
                let n = node('_rdp_' + this.id);
                let cNode = node('_rdc_' + this.id);
                let root = node(config('rootId'));
                let definedHeight = this.get('height');
                let startHeight = this['_ug'] || definedHeight;
                let fixedSize = this.get('fixedSize');
                let screenHeight = root.clientHeight;
                let screenWidth = min(root.clientWidth, DocRoot.clientWidth);
                if (!fixedSize) {
                    if (startHeight > screenHeight) {
                        if (!this['_ug']) {
                            this['_ug'] = startHeight;
                        }
                        cNode.style.height = `calc(100vh - ${screenHeight}px)`;
                        this.set({
                            height: screenHeight
                        });
                    }
                    else if (definedHeight != startHeight) {
                        delete this['_ug'];
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
                let dockBottom, fixed;
                if (startY == null) {
                    dockBottom = 1;
                    startY = this.get('bottom');
                }
                let panelHeight = n.offsetHeight;
                let panelWidth = n.offsetWidth;
                if (startX + panelWidth > screenWidth) {
                    startX = screenWidth - panelWidth;
                    fixed = 1;
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
                    this['_ud']();
                }
            }
        }, 300);
    },
    async '_t5'() {
        let shrink = this.get('shrink');
        await this.digest({
            shrink: !shrink
        });
        this['_uc']();
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke(shrink ? '_mA' : '_mB', [!shrink]);
            }
        }
    },
    '_ud'() {
        if (const_1['mz']) {
            let hideMark = mark(this, '_ui');
            this['_uj'] = setTimeout(() => {
                if (hideMark()) {
                    let n = node('_rdp_' + this.id);
                    let styles = n.style;
                    let startX = this.get('left');
                    let width = this.get('width');
                    let height = this.get('height');
                    let startY = this.get('top');
                    let fixedSize = this.get('fixedSize');
                    let shrink = this.get('shrink');
                    let hideX = 0, hideY = '';
                    if (startX == null) {
                        startX = this.get('right');
                        if (startX === 0) {
                            hideX = width - 10;
                        }
                    }
                    else if (startX === 0) {
                        hideX = 10 - width;
                    }
                    if (!shrink &&
                        !hideX) {
                        if (startY == null) {
                            startY = this.get('bottom');
                            if (startY === 0) {
                                hideY = height + 'px';
                            }
                        }
                        else if (startY === 0) {
                            hideY = fixedSize ? (-height - 10) + 'px' : `min(calc(${height - 10}px - 100vh), 0px)`;
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
    '_uk<pointerdown>'(e) {
        PanelsManager["_n7"](this);
    },
    '_mA'() {
        PanelsManager["_n7"](this);
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke('_mA', [this.get('shrink')]);
            }
        }
    },
    '_mB'() {
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke('_mB');
            }
        }
    },
    '_t5<click>'() {
        this['_t5']();
    },
    '_mR<click>'() {
        let c = this['_ub'];
        if (c) {
            toTry(c);
        }
    },
    '_ul<pointerover,pointerout>'(e) {
        let inNode = magix_1.inside(e.relatedTarget, e.eventTarget);
        if (!inNode) {
            let n = node('_rdp_' + this.id);
            let styles = n.style;
            if (e.type == 'pointerover') {
                clearTimeout(this['_uj']);
                styles.transform = 'translate3d(0,0,0)';
            }
            else if (!this['_ue']) {
                this['_ud']();
            }
        }
    },
    '$win<resize>'() {
        this['_uc']();
    }
}).merge(index_1);

});