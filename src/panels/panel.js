/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6j",["4e","../4l/4n/cursor","../4l/4m/index","../4d/4g"],(require,exports,module)=>{
let $quick_eG_static_text;
let $quick_eS_static_text;
let $quick_f0_0_static_attr={'class': 'rd-d3 rd-dF rd-fw',};
let $quick_f0_1_static_attr={'class': 'rd-eB rd-ee rd-ez',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let cursor_1 = require("../4l/4n/cursor");
let index_1 = require("../4l/4m/index");
let const_1 = require("../4d/4g");
let DocRoot = document.documentElement;
let { min } = Math;
let { applyStyle, node, View, config, toTry, mark, State, Vframe } = magix_1;
applyStyle("rd-ee",".rd-jQ{background:#fffe;box-shadow:0 2px 4px 0 rgba(0,0,0,.3);transform:translateZ(0)}.rd-jQ:hover{will-change:left,top,right,bottom,transform}.rd-jR{background:#fa742b;color:#fff;height:18px;line-height:18px}.rd-jS{cursor:move;padding:0 5px;width:calc(100% - 36px)}.rd-jT{border-radius:2px;display:inline-flex;height:14px;margin:0 1px;width:16px}.rd-jT:hover{background:#ec5706}.rd-jU{transition-duration:.25s}.rd-jV{transition:height .25s}.rd-jW{transition:none}.rd-jX{-ms-scroll-chaining:none;content-visibility:auto;overscroll-behavior:contain}.rd-jY{cursor:ew-resize;inset:0 0 0 auto;width:3px}.rd-jZ{cursor:ns-resize;height:3px;inset:auto 0 0}.rd-jZ:hover,.rd-jY:hover,.rd-j0{background:#fcb58f}");
let MinWidth = 100;
let ZIndex = 600;
let Panels = [];
let PanelsManager = {
    '_jh'(view) {
        Panels.push(view);
    },
    '_gQ'(view) {
        for (let i = Panels.length; i--;) {
            if (Panels[i] == view) {
                Panels.splice(i, 1);
                break;
            }
        }
        this['_lM']();
    },
    '_lM'() {
        for (let i = Panels.length; i--;) {
            Panels[i]['_lN'](ZIndex + i);
        }
    },
    '_fJ'(view) {
        if (Panels[Panels.length - 1] != view) {
            for (let i = Panels.length; i--;) {
                if (Panels[i] == view) {
                    Panels.splice(i, 1);
                    break;
                }
            }
            Panels.push(view);
            this['_lM']();
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
$vnode_4=[$createVNode(0,(icon),1)];$vnode_3.push($createVNode('i',$quick_f0_0_static_attr,$vnode_4));
}$vnode_3.push($createVNode(0,(i18n(title))));$vnode_2=[$createVNode('div',{'class': 'rd-ey rd-f0 rd-jS','title': (i18n('k9')),'mx5-pointerdown': $viewId+'1_lS()',},$vnode_3)];$vnode_4=[$quick_eG_static_text||($quick_eG_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-jT rd-fv rd-eX rd-eT rd-eB';if(shrink){;$$_class+=' rd-d5';};$vnode_3=[$createVNode('i',{'mx5-click': $viewId+'_lH()','title': (i18n(shrink?'lb':'lg',title,key)),'class': $$_class,},$vnode_4)];$vnode_4=[$quick_eS_static_text||($quick_eS_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-dF rd-eB rd-eT rd-eX rd-fv rd-jT','mx5-click': $viewId+'_et()','title': (i18n('fk',title,key)),},$vnode_4));$vnode_2.push($createVNode('div',$quick_f0_1_static_attr,$vnode_3));$vnode_1=[$createVNode('div',{'class': 'rd-et rd-ez rd-fw rd-jR','mx5-contextmenu': $viewId+'_fv()',},$vnode_2)];$vnode_2=[];$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-ee rd-eu rd-ev rd-fs rd-jX','mx5-view': (view),'id': '_rd_'+$viewId+'_v',}));
if(resizeX){
$vnode_2.push($createVNode('div',{'class': 'rd-ee rd-el rd-et rd-f0 rd-jY','title': (i18n('la')),'mx5-pointerdown': $viewId+'1_hQ({w:1})','mx5-contextmenu': $viewId+'_fv()',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-fR rd-fq rd-jV','id': '_rdc_'+$viewId,'style': 'height:'+(shrink?0:fixedSize?`${height}px`:`calc(100vh - ${height}px)`),'mx5-contextmenu': ((cm==null))&&($viewId+'_fv()'),},$vnode_2));;$$_class='rd-jZ rd-el rd-et rd-f0';if(shrink||!resizeY){;$$_class+=' rd-eq';};$vnode_1.push($createVNode('div',{'title': (i18n('ld')),'mx5-contextmenu': $viewId+'_fv()','mx5-pointerdown': $viewId+'_hQ({h:1})','class': $$_class,}));;$$_style='width:'+(width)+'px;';if(left!=null){;$$_style+='left:'+(left);}else{;$$_style+='right:'+(right);};$$_style+='px;';if(top!=null){;$$_style+='top:'+(top)+'px';}else{;$$_style+='bottom:'+(bottom)+'px';};$$_style+=';z-index:'+(zIndex);$vnode_0=[$createVNode('div',{'class': 'rd-el rd-f0 rd-jQ rd-jU','id': '_rdp_'+$viewId,'mx5-pointerdown': $viewId+'_lX()','mx5-pointerover': $viewId+'_lY()','mx5-pointerout': $viewId+'_lY()','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        PanelsManager["_jh"](this);
        this.on('destroy', () => {
            PanelsManager["_gQ"](this);
        });
        this['_lO'] = data.close;
        this.set(data);
    },
    async render() {
        await this.digest({
            zIndex: ZIndex + Panels.length
        });
        this['_lP']();
        this['_lQ']();
    },
    '_lS<pointerdown>'(e) {
        this['_lR'] = 1;
        let n = node('_rdp_' + this.id);
        let root = node(config('rootId'));
        n.classList.add('rd-jW');
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
            'dK': 1
        });
        this['_eb'](e, ex => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["_ec"](target);
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
                'dK': 0
            });
            delete this['_lR'];
            cursor_1["_ed"]();
            n.classList.remove('rd-jW');
            this['_lQ']();
        });
    },
    '_hQ<pointerdown>'(e) {
        let { w: resizeWidth } = e.params;
        this['_lR'] = 1;
        let startWidth = this.get('width');
        let startHeight = this.get('height');
        let startRight = this.get('right');
        let cNode = node('_rdc_' + this.id);
        let eventTarget = e.eventTarget;
        eventTarget.classList.add('rd-j0');
        let root = node(config('rootId'));
        let screenHeight = root.clientHeight;
        cNode.classList.add('rd-jW');
        let cStyles = cNode.style;
        let bound = cNode.getBoundingClientRect();
        let pStyles = node('_rdp_' + this.id).style;
        let showedCursor = 0;
        let target = e.eventTarget;
        State.set({
            'dK': 1
        });
        this['_eb'](e, ex => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["_ec"](target);
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
                'dK': 0
            });
            delete this['_lR'];
            delete this['_lT'];
            cursor_1["_ed"]();
            cNode.classList.remove('rd-jW');
            eventTarget.classList.remove('rd-j0');
            this['_lQ']();
        });
    },
    '_lN'(z) {
        node('_rdp_' + this.id).style.zIndex = z;
    },
    '_lP'() {
        let check = mark(this, '_lU');
        setTimeout(() => {
            if (check()) {
                let n = node('_rdp_' + this.id);
                let cNode = node('_rdc_' + this.id);
                let root = node(config('rootId'));
                let definedHeight = this.get('height');
                let startHeight = this['_lT'] || definedHeight;
                let fixedSize = this.get('fixedSize');
                let screenHeight = root.clientHeight;
                let screenWidth = min(root.clientWidth, DocRoot.clientWidth);
                if (!fixedSize) {
                    if (startHeight > screenHeight) {
                        if (!this['_lT']) {
                            this['_lT'] = startHeight;
                        }
                        cNode.style.height = `calc(100vh - ${screenHeight}px)`;
                        this.set({
                            height: screenHeight
                        });
                    }
                    else if (definedHeight != startHeight) {
                        delete this['_lT'];
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
                    this['_lQ']();
                }
            }
        }, 300);
    },
    async '_lH'() {
        let shrink = this.get('shrink');
        await this.digest({
            shrink: !shrink
        });
        this['_lP']();
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke(shrink ? '_ec' : '_ed', [!shrink]);
            }
        }
    },
    '_lQ'() {
        if (const_1['eb']) {
            let hideMark = mark(this, '_lV');
            this['_lW'] = setTimeout(() => {
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
    '_lX<pointerdown>'(e) {
        PanelsManager["_fJ"](this);
    },
    '_ec'() {
        PanelsManager["_fJ"](this);
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke('_ec', [this.get('shrink')]);
            }
        }
    },
    '_ed'() {
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke('_ed');
            }
        }
    },
    '_lH<click>'() {
        this['_lH']();
    },
    '_et<click>'() {
        let c = this['_lO'];
        if (c) {
            toTry(c);
        }
    },
    '_lY<pointerover,pointerout>'(e) {
        let inNode = magix_1.inside(e.relatedTarget, e.eventTarget);
        if (!inNode) {
            let n = node('_rdp_' + this.id);
            let styles = n.style;
            if (e.type == 'pointerover') {
                clearTimeout(this['_lW']);
                styles.transform = 'translate3d(0,0,0)';
            }
            else if (!this['_lR']) {
                this['_lQ']();
            }
        }
    },
    '$win<resize>'() {
        this['_lP']();
    }
}).merge(index_1);

});