/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/76",["51","../58/5a/cursor","../58/59/index","../50/53"],(require,exports,module)=>{
let $quick_hf_static_text;
let $quick_hr_static_text;
let $quick_iz_0_static_attr={'class': 'rd-gC rd-ge rd-h6',};
let $quick_iz_1_static_attr={'class': 'rd-g9 rd-gO rd-ha',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let cursor_1 = require("../58/5a/cursor");
let index_1 = require("../58/59/index");
let const_1 = require("../50/53");
let DocRoot = document.documentElement;
let { min } = Math;
let { applyStyle, node, View, config, toTry, mark, State, Vframe } = magix_1;
applyStyle("rd-gO",".rd-mp{background:#fffe;box-shadow:0 2px 4px 0 rgba(0,0,0,.3);transform:translateZ(0)}.rd-mp:hover{will-change:left,top,right,bottom,transform}.rd-mq{background:#47b34e;color:#fff;height:18px;line-height:18px}.rd-mr{cursor:move;padding:0 5px;width:calc(100% - 36px)}.rd-ms{border-radius:2px;display:inline-flex;height:14px;margin:0 1px;width:16px}.rd-ms:hover{background:#398e3e}.rd-mt{transition-duration:.25s}.rd-mu{transition:height .25s}.rd-mv{transition:none}.rd-mw{-ms-scroll-chaining:none;content-visibility:auto;overscroll-behavior:contain}.rd-mx{cursor:ew-resize;inset:0 0 0 auto;width:3px}.rd-my{cursor:ns-resize;height:3px;inset:auto 0 0}.rd-my:hover,.rd-mx:hover,.rd-mz{background:#8ed292}");
let MinWidth = 100;
let ZIndex = 600;
let Panels = [];
let PanelsManager = {
    '_lU'(view) {
        Panels.push(view);
    },
    '_js'(view) {
        for (let i = Panels.length; i--;) {
            if (Panels[i] == view) {
                Panels.splice(i, 1);
                break;
            }
        }
        this['_oo']();
    },
    '_oo'() {
        for (let i = Panels.length; i--;) {
            Panels[i]['_op'](ZIndex + i);
        }
    },
    '_il'(view) {
        if (Panels[Panels.length - 1] != view) {
            for (let i = Panels.length; i--;) {
                if (Panels[i] == view) {
                    Panels.splice(i, 1);
                    break;
                }
            }
            Panels.push(view);
            this['_oo']();
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
$vnode_4=[$createVNode(0,(icon),1)];$vnode_3.push($createVNode('i',$quick_iz_0_static_attr,$vnode_4));
}$vnode_3.push($createVNode(0,(i18n(title))));$vnode_2=[$createVNode('div',{'class': 'rd-g8 rd-iz rd-mr','title': (i18n('nH')),'mx5-pointerdown': $viewId+'1_ou()',},$vnode_3)];$vnode_4=[$quick_hf_static_text||($quick_hf_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-ms rd-h5 rd-hw rd-hs rd-ha';if(shrink){;$$_class+=' rd-gE';};$vnode_3=[$createVNode('i',{'mx5-click': $viewId+'_oj()','title': (i18n(shrink?'nK':'nP',title,key)),'class': $$_class,},$vnode_4)];$vnode_4=[$quick_hr_static_text||($quick_hr_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-ge rd-h5 rd-ha rd-hs rd-hw rd-ms','mx5-click': $viewId+'_g3()','title': (i18n('hU',title,key)),},$vnode_4));$vnode_2.push($createVNode('div',$quick_iz_1_static_attr,$vnode_3));$vnode_1=[$createVNode('div',{'class': 'rd-g3 rd-g9 rd-h6 rd-mq','mx5-contextmenu': $viewId+'_h6()',},$vnode_2)];$vnode_2=[];$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-g4 rd-g5 rd-gO rd-h2 rd-mw','mx5-view': (view),'id': '_rd_'+$viewId+'_v',}));
if(resizeX){
$vnode_2.push($createVNode('div',{'class': 'rd-g3 rd-gO rd-gV rd-iz rd-mx','title': (i18n('nJ')),'mx5-pointerdown': $viewId+'1_ks({w:1})','mx5-contextmenu': $viewId+'_h6()',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-h0 rd-iq rd-mu','id': '_rdc_'+$viewId,'style': 'height:'+(shrink?0:fixedSize?`${height}px`:`calc(100vh - ${height}px)`),'mx5-contextmenu': ((cm==null))&&($viewId+'_h6()'),},$vnode_2));;$$_class='rd-my rd-gV rd-g3 rd-iz';if(shrink||!resizeY){;$$_class+=' rd-g0';};$vnode_1.push($createVNode('div',{'title': (i18n('nM')),'mx5-contextmenu': $viewId+'_h6()','mx5-pointerdown': $viewId+'_ks({h:1})','class': $$_class,}));;$$_style='width:'+(width)+'px;';if(left!=null){;$$_style+='left:'+(left);}else{;$$_style+='right:'+(right);};$$_style+='px;';if(top!=null){;$$_style+='top:'+(top)+'px';}else{;$$_style+='bottom:'+(bottom)+'px';};$$_style+=';z-index:'+(zIndex);$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-iz rd-mp rd-mt','id': '_rdp_'+$viewId,'mx5-pointerdown': $viewId+'_oz()','mx5-pointerover': $viewId+'_oA()','mx5-pointerout': $viewId+'_oA()','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        PanelsManager["_lU"](this);
        this.on('destroy', () => {
            PanelsManager["_js"](this);
        });
        this['_oq'] = data.close;
        this.set(data);
    },
    async render() {
        await this.digest({
            zIndex: ZIndex + Panels.length
        });
        this['_or']();
        this['_os']();
    },
    '_ou<pointerdown>'(e) {
        this['_ot'] = 1;
        let n = node('_rdp_' + this.id);
        let root = node(config('rootId'));
        n.classList.add('rd-mv');
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
            'gj': 1
        });
        this['_gL'](e, ex => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["_gM"](target);
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
                'gj': 0
            });
            delete this['_ot'];
            cursor_1["_gN"]();
            n.classList.remove('rd-mv');
            this['_os']();
        });
    },
    '_ks<pointerdown>'(e) {
        let { w: resizeWidth } = e.params;
        this['_ot'] = 1;
        let startWidth = this.get('width');
        let startHeight = this.get('height');
        let startRight = this.get('right');
        let cNode = node('_rdc_' + this.id);
        let eventTarget = e.eventTarget;
        eventTarget.classList.add('rd-mz');
        let root = node(config('rootId'));
        let screenHeight = root.clientHeight;
        cNode.classList.add('rd-mv');
        let cStyles = cNode.style;
        let bound = cNode.getBoundingClientRect();
        let pStyles = node('_rdp_' + this.id).style;
        let showedCursor = 0;
        let target = e.eventTarget;
        State.set({
            'gj': 1
        });
        this['_gL'](e, ex => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["_gM"](target);
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
                'gj': 0
            });
            delete this['_ot'];
            delete this['_ov'];
            cursor_1["_gN"]();
            cNode.classList.remove('rd-mv');
            eventTarget.classList.remove('rd-mz');
            this['_os']();
        });
    },
    '_op'(z) {
        node('_rdp_' + this.id).style.zIndex = z;
    },
    '_or'() {
        let check = mark(this, '_ow');
        setTimeout(() => {
            if (check()) {
                let n = node('_rdp_' + this.id);
                let cNode = node('_rdc_' + this.id);
                let root = node(config('rootId'));
                let definedHeight = this.get('height');
                let startHeight = this['_ov'] || definedHeight;
                let fixedSize = this.get('fixedSize');
                let screenHeight = root.clientHeight;
                let screenWidth = min(root.clientWidth, DocRoot.clientWidth);
                if (!fixedSize) {
                    if (startHeight > screenHeight) {
                        if (!this['_ov']) {
                            this['_ov'] = startHeight;
                        }
                        cNode.style.height = `calc(100vh - ${screenHeight}px)`;
                        this.set({
                            height: screenHeight
                        });
                    }
                    else if (definedHeight != startHeight) {
                        delete this['_ov'];
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
                    this['_os']();
                }
            }
        }, 300);
    },
    async '_oj'() {
        let shrink = this.get('shrink');
        await this.digest({
            shrink: !shrink
        });
        this['_or']();
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke(shrink ? '_gM' : '_gN', [!shrink]);
            }
        }
    },
    '_os'() {
        if (const_1['gL']) {
            let hideMark = mark(this, '_ox');
            this['_oy'] = setTimeout(() => {
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
    '_oz<pointerdown>'(e) {
        PanelsManager["_il"](this);
    },
    '_gM'() {
        PanelsManager["_il"](this);
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke('_gM', [this.get('shrink')]);
            }
        }
    },
    '_gN'() {
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke('_gN');
            }
        }
    },
    '_oj<click>'() {
        this['_oj']();
    },
    '_g3<click>'() {
        let c = this['_oq'];
        if (c) {
            toTry(c);
        }
    },
    '_oA<pointerover,pointerout>'(e) {
        let inNode = magix_1.inside(e.relatedTarget, e.eventTarget);
        if (!inNode) {
            let n = node('_rdp_' + this.id);
            let styles = n.style;
            if (e.type == 'pointerover') {
                clearTimeout(this['_oy']);
                styles.transform = 'translate3d(0,0,0)';
            }
            else if (!this['_ot']) {
                this['_os']();
            }
        }
    },
    '$win<resize>'() {
        this['_or']();
    }
}).merge(index_1);

});