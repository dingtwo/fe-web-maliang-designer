/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/panel",["magix5","../gallery/mx-pointer/cursor","../gallery/mx-dragdrop/index","../designer/const"],(require,exports,module)=>{
let $quick_dc_static_text;
let $quick_do_static_text;
let $quick_ew_0_static_attr={'class': 'rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-iconfont rd-_assets_index_less_-mr2',};
let $quick_ew_1_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-hp100',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let cursor_1 = require("../gallery/mx-pointer/cursor");
let index_1 = require("../gallery/mx-dragdrop/index");
let const_1 = require("../designer/const");
let DocRoot = document.documentElement;
let { min } = Math;
let { applyStyle, node, View, config, toTry, mark, State, Vframe } = magix_1;
applyStyle("rd-_panels_panel_less_","\n.rd-_panels_panel_less_-panel {\nbackground:#fffe;\nbox-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.3);\ntransform:translate3d(0, 0, 0);\n}\n.rd-_panels_panel_less_-panel:hover {\nwill-change:left, top, right, bottom, transform;\n}\n.rd-_panels_panel_less_-title {\nheight:18px;\nline-height:18px;\nbackground:#47B34E;\ncolor:#ffffff;\n}\n.rd-_panels_panel_less_-title-text {\npadding:0 5px;\ncursor:move;\nwidth:calc(100% - 36px);\n}\n.rd-_panels_panel_less_-title-icon {\nwidth:16px;\nheight:14px;\nmargin:0 1px;\ndisplay:inline-flex;\nborder-radius:2px;\n}\n.rd-_panels_panel_less_-title-icon:hover {\nbackground:#398e3e;\n}\n.rd-_panels_panel_less_-anim-move {\ntransition-duration:0.25s;\n}\n.rd-_panels_panel_less_-content-outer {\ntransition:height 0.25s;\n}\n.rd-_panels_panel_less_-content-outer-disable-anim {\ntransition:none;\n}\n.rd-_panels_panel_less_-content {\n-ms-scroll-chaining:none;\noverscroll-behavior:contain;\ncontent-visibility:auto;\n}\n.rd-_panels_panel_less_-hbar {\nwidth:3px;\ncursor:ew-resize;\ninset:0 0 0 auto;\n}\n.rd-_panels_panel_less_-foot {\nheight:3px;\ncursor:ns-resize;\ninset:auto 0 0;\n}\n.rd-_panels_panel_less_-foot:hover,\n.rd-_panels_panel_less_-resize-hover,\n.rd-_panels_panel_less_-hbar:hover {\nbackground:#8ed292;\n}\n");
let MinWidth = 100;
let ZIndex = 600;
let Panels = [];
let PanelsManager = {
    '@:{add~rs}'(view) {
        Panels.push(view);
    },
    '@:{remove~rs}'(view) {
        for (let i = Panels.length; i--;) {
            if (Panels[i] == view) {
                Panels.splice(i, 1);
                break;
            }
        }
        this['@:{z-index~rs}']();
    },
    '@:{z-index~rs}'() {
        for (let i = Panels.length; i--;) {
            Panels[i]['@:{set.z-index~rs}'](ZIndex + i);
        }
    },
    '@:{top~rs}'(view) {
        if (Panels[Panels.length - 1] != view) {
            for (let i = Panels.length; i--;) {
                if (Panels[i] == view) {
                    Panels.splice(i, 1);
                    break;
                }
            }
            Panels.push(view);
            this['@:{z-index~rs}']();
        }
    }
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
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
$vnode_3=[];$__line=4;$__art="{{if icon}}";$__ctrl="if(icon){";
if(icon){
$vnode_4=[$createVNode(0,($__line=5,$__art='{{=icon}}',$__ctrl='<%=icon%>',(icon)),1)];$vnode_3.push($createVNode('i',$quick_ew_0_static_attr,$vnode_4));
}$vnode_3.push($createVNode(0,($__line=7,$__art='{{=i18n(title)}}',$__ctrl='<%=i18n(title)%>',(i18n(title)))));$vnode_2=[$createVNode('div',{'class': 'rd-_assets_index_less_-flex-fill-rest rd-_assets_index_less_-touch-action-none rd-_panels_panel_less_-title-text','title': ($__line=3,$__art='{{=i18n(\'@:{lang#panel.drag~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#panel.drag~rs}\')%>',(i18n('@:{lang#panel.drag~rs}'))),'mx5-pointerdown': $viewId+'1@:{drag.move~rs}()',},$vnode_3)];$vnode_4=[$quick_dc_static_text||($quick_dc_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_panels_panel_less_-title-icon rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-align-items-center'+($__line=10,$__art='{{if shrink}}','');$__ctrl='<%if(shrink){%>';if(shrink){;$$_class+=' rd-_assets_index_less_-r180'+($__line=10,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_3=[$createVNode('i',{'mx5-click': $viewId+'@:{toggle.height~rs}()','title': ($__line=10,$__art='{{=i18n(shrink?\'@:{lang#panel.expand.panel~rs}\':\'@:{lang#panel.shrink.panel}\',title,key)}}',$__ctrl='<%=i18n(shrink?\'@:{lang#panel.expand.panel~rs}\':\'@:{lang#panel.shrink.panel~rs}\',title,key)%>',(i18n(shrink?'@:{lang#panel.expand.panel~rs}':'@:{lang#panel.shrink.panel~rs}',title,key))),'class': $$_class,},$vnode_4)];$vnode_4=[$quick_do_static_text||($quick_do_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-iconfont rd-_assets_index_less_-justify-content-center rd-_panels_panel_less_-title-icon','mx5-click': $viewId+'@:{close~rs}()','title': ($__line=11,$__art='{{=i18n(\'@:{lang#panel.close.panel~rs}\',title,key)}}',$__ctrl='<%=i18n(\'@:{lang#panel.close.panel~rs}\',title,key)%>',(i18n('@:{lang#panel.close.panel~rs}',title,key))),},$vnode_4));$vnode_2.push($createVNode('div',$quick_ew_1_static_attr,$vnode_3));$vnode_1=[$createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-unselectable rd-_panels_panel_less_-title','mx5-contextmenu': $viewId+'@:{prevent~rs}()',},$vnode_2)];$vnode_2=[];$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-overflow-auto rd-_assets_index_less_-scrollable rd-_assets_index_less_-thin-scrollable rd-_panels_panel_less_-content','mx5-view': ($__line=15,$__art='{{=view}}',$__ctrl='<%=view%>',(view)),'id': '_rd_'+($__line=15,$__art='{{=$viewId}}','')+$viewId+'_v',}));$__line=17;$__art="{{if resizeX}}";$__ctrl="if(resizeX){";
if(resizeX){
$vnode_2.push($createVNode('div',{'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-pa rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-unselectable rd-_panels_panel_less_-hbar','title': ($__line=18,$__art='{{=i18n(\'@:{lang#panel.ew-resize~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#panel.ew-resize~rs}\')%>',(i18n('@:{lang#panel.ew-resize~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize~rs}({w:1})','mx5-contextmenu': $viewId+'@:{prevent~rs}()',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-contain-paint rd-_assets_index_less_-overflow-hidden rd-_panels_panel_less_-content-outer','id': '_rdc_'+($__line=14,$__art='{{=$viewId}}','')+$viewId,'style': 'height:'+($__line=14,$__art='{{=(shrink?0:fixedSize?`${height}px`:`calc(100vh - ${height}px)`)}}',$__ctrl='<%=shrink?0:fixedSize?`${height}px`:`calc(100vh - ${height}px)`%>',(shrink?0:fixedSize?`${height}px`:`calc(100vh - ${height}px)`)),'mx5-contextmenu': (($temp_var=($__line=14,$__art='{{=cm==null}}',$__ctrl='<%=cm==null%>',cm==null),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-contextmenu" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:panels/panel.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{prevent~rs}()'),},$vnode_2));;$$_class='rd-_panels_panel_less_-foot rd-_assets_index_less_-pa rd-_assets_index_less_-unselectable rd-_assets_index_less_-touch-action-none'+($__line=21,$__art='{{if shrink||!resizeY}}','');$__ctrl='<%if(shrink||!resizeY){%>';if(shrink||!resizeY){;$$_class+=' rd-_assets_index_less_-none'+($__line=21,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'title': ($__line=21,$__art='{{=i18n(\'@:{lang#panel.ns-resize~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#panel.ns-resize~rs}\')%>',(i18n('@:{lang#panel.ns-resize~rs}'))),'mx5-contextmenu': $viewId+'@:{prevent~rs}()','mx5-pointerdown': $viewId+'@:{start.resize~rs}({h:1})','class': $$_class,}));;$$_style='width:'+($__line=1,$__art='{{=width}}',$__ctrl='<%=width%>',(width))+'px;'+($__line=1,$__art='{{if left!=null}}','');$__ctrl='<%if(left!=null){%>';if(left!=null){;$$_style+='left:'+($__line=1,$__art='{{=left}}',$__ctrl='<%=left%>',(left))+($__line=1,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='right:'+($__line=1,$__art='{{=right}}',$__ctrl='<%=right%>',(right))+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='px;'+($__line=1,$__art='{{if top!=null}}','');$__ctrl='<%if(top!=null){%>';if(top!=null){;$$_style+='top:'+($__line=1,$__art='{{=top}}',$__ctrl='<%=top%>',(top))+'px'+($__line=1,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='bottom:'+($__line=1,$__art='{{=bottom}}',$__ctrl='<%=bottom%>',(bottom))+'px'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=';z-index:'+($__line=1,$__art='{{=zIndex}}',$__ctrl='<%=zIndex%>',(zIndex));$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-touch-action-none rd-_panels_panel_less_-anim-move rd-_panels_panel_less_-panel','id': '_rdp_'+($__line=1,$__art='{{=$viewId}}','')+$viewId,'mx5-pointerdown': $viewId+'@:{update.z-index~rs}()','mx5-pointerover': $viewId+'@:{hover.panel~rs}()','mx5-pointerout': $viewId+'@:{hover.panel~rs}()','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/panel.html'; throw msg; }  } ,
    init(data) {
        PanelsManager["@:{add~rs}"](this);
        this.on('destroy', () => {
            PanelsManager["@:{remove~rs}"](this);
        });
        this['@:{p.close~rs}'] = data.close;
        this.set(data);
    },
    async render() {
        await this.digest({
            zIndex: ZIndex + Panels.length
        });
        this['@:{fix.position~rs}']();
        this['@:{check.hide.state~rs}']();
    },
    '@:{drag.move~rs}<pointerdown>'(e) {
        this['@:{hold.hide~rs}'] = 1;
        let n = node('_rdp_' + this.id);
        let root = node(config('rootId'));
        n.classList.add('rd-_panels_panel_less_-content-outer-disable-anim');
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
            '@:{global#stage.prevent.actions~rs}': 1
        });
        this['@:{drag.drop~rs}'](e, ex => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["@:{show~rs}"](target);
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
                '@:{global#stage.prevent.actions~rs}': 0
            });
            delete this['@:{hold.hide~rs}'];
            cursor_1["@:{hide~rs}"]();
            n.classList.remove('rd-_panels_panel_less_-content-outer-disable-anim');
            this['@:{check.hide.state~rs}']();
        });
    },
    '@:{start.resize~rs}<pointerdown>'(e) {
        let { w: resizeWidth } = e.params;
        this['@:{hold.hide~rs}'] = 1;
        let startWidth = this.get('width');
        let startHeight = this.get('height');
        let startRight = this.get('right');
        let cNode = node('_rdc_' + this.id);
        let eventTarget = e.eventTarget;
        eventTarget.classList.add('rd-_panels_panel_less_-resize-hover');
        let root = node(config('rootId'));
        let screenHeight = root.clientHeight;
        cNode.classList.add('rd-_panels_panel_less_-content-outer-disable-anim');
        let cStyles = cNode.style;
        let bound = cNode.getBoundingClientRect();
        let pStyles = node('_rdp_' + this.id).style;
        let showedCursor = 0;
        let target = e.eventTarget;
        State.set({
            '@:{global#stage.prevent.actions~rs}': 1
        });
        this['@:{drag.drop~rs}'](e, ex => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["@:{show~rs}"](target);
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
                '@:{global#stage.prevent.actions~rs}': 0
            });
            delete this['@:{hold.hide~rs}'];
            delete this['@:{user.defined.height~rs}'];
            cursor_1["@:{hide~rs}"]();
            cNode.classList.remove('rd-_panels_panel_less_-content-outer-disable-anim');
            eventTarget.classList.remove('rd-_panels_panel_less_-resize-hover');
            this['@:{check.hide.state~rs}']();
        });
    },
    '@:{set.z-index~rs}'(z) {
        node('_rdp_' + this.id).style.zIndex = z;
    },
    '@:{fix.position~rs}'() {
        let check = mark(this, '@:{check.position~rs}');
        setTimeout(() => {
            if (check()) {
                let n = node('_rdp_' + this.id);
                let cNode = node('_rdc_' + this.id);
                let root = node(config('rootId'));
                let definedHeight = this.get('height');
                let startHeight = this['@:{user.defined.height~rs}'] || definedHeight;
                let fixedSize = this.get('fixedSize');
                let screenHeight = root.clientHeight;
                let screenWidth = min(root.clientWidth, DocRoot.clientWidth);
                if (!fixedSize) {
                    if (startHeight > screenHeight) {
                        if (!this['@:{user.defined.height~rs}']) {
                            this['@:{user.defined.height~rs}'] = startHeight;
                        }
                        cNode.style.height = `calc(100vh - ${screenHeight}px)`;
                        this.set({
                            height: screenHeight
                        });
                    }
                    else if (definedHeight != startHeight) {
                        delete this['@:{user.defined.height~rs}'];
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
                    this['@:{check.hide.state~rs}']();
                }
            }
        }, 300);
    },
    async '@:{toggle.height~rs}'() {
        let shrink = this.get('shrink');
        await this.digest({
            shrink: !shrink
        });
        this['@:{fix.position~rs}']();
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke(shrink ? '@:{show~rs}' : '@:{hide~rs}', [!shrink]);
            }
        }
    },
    '@:{check.hide.state~rs}'() {
        if (const_1['@:{const#support.panels.hide.when.nearside~rs}']) {
            let hideMark = mark(this, '@:{hide.mark~rs}');
            this['@:{delay.hide.timer~rs}'] = setTimeout(() => {
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
    '@:{update.z-index~rs}<pointerdown>'(e) {
        PanelsManager["@:{top~rs}"](this);
    },
    '@:{show~rs}'() {
        PanelsManager["@:{top~rs}"](this);
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke('@:{show~rs}', [this.get('shrink')]);
            }
        }
    },
    '@:{hide~rs}'() {
        let viewNode = node(`_rd_${this.id}_v`);
        if (viewNode) {
            let vf = Vframe.byNode(viewNode);
            if (vf) {
                vf.invoke('@:{hide~rs}');
            }
        }
    },
    '@:{toggle.height~rs}<click>'() {
        this['@:{toggle.height~rs}']();
    },
    '@:{close~rs}<click>'() {
        let c = this['@:{p.close~rs}'];
        if (c) {
            toTry(c);
        }
    },
    '@:{hover.panel~rs}<pointerover,pointerout>'(e) {
        let inNode = magix_1.inside(e.relatedTarget, e.eventTarget);
        if (!inNode) {
            let n = node('_rdp_' + this.id);
            let styles = n.style;
            if (e.type == 'pointerover') {
                clearTimeout(this['@:{delay.hide.timer~rs}']);
                styles.transform = 'translate3d(0,0,0)';
            }
            else if (!this['@:{hold.hide~rs}']) {
                this['@:{check.hide.state~rs}']();
            }
        }
    },
    '$win<resize>'() {
        this['@:{fix.position~rs}']();
    }
}).merge(index_1);

});