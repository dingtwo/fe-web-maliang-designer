/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-menu/index",["magix5","../mx-monitor/index"],(require,exports,module)=>{
let $quick_h2_1_static_node;
let $quick_h2_0_static_attr={'class': 'rd-_assets_index_less_-cursor-default rd-_assets_index_less_-tag-ul rd-_assets_index_less_-unselectable',};
let $quick_h2_2_static_attr={'class': 'rd-_assets_index_less_-flex-fill-rest rd-_assets_index_less_-font-weight-normal',};

/*
    author:https://github.com/xinglie
 */
let magix_1 = require("magix5");
let index_1 = require("../mx-monitor/index");
let { node, View, applyStyle, inside, Vframe } = magix_1;
let paddingSize = 20;
applyStyle("rd-_gallery_mx-menu_index_less_","\n.rd-_gallery_mx-menu_index_less_-container {\nz-index:3000;\nmax-height:calc(100vh - 64px);\nmax-width:calc(100vw - 44px);\noverflow:auto;\nbackground-color:#fff;\nborder:solid 1px #e6e6e6;\nborder-radius:2px;\npadding:4px;\nbox-shadow:rgba(0, 0, 0, 0.06) 0 0 3px 2px;\n}\n.rd-_gallery_mx-menu_index_less_-items-li {\nheight:24px;\nborder-radius:2px;\npadding:2px 8px 2px 4px;\n}\n.rd-_gallery_mx-menu_index_less_-icon {\nwidth:14px;\nheight:14px;\n}\n.rd-_gallery_mx-menu_index_less_-items-li:not(.rd-_gallery_mx-menu_index_less_-item-disabled):hover {\nbackground-color:#b2e1b5;\n}\n.rd-_gallery_mx-menu_index_less_-spliter {\nheight:1px;\nbackground:#eee;\nmargin:4px 0;\n}\n.rd-_gallery_mx-menu_index_less_-item-disabled,\n.rd-_gallery_mx-menu_index_less_-item-disabled:hover {\ncolor:#ccc;\ncursor:not-allowed;\n}\n.rd-_gallery_mx-menu_index_less_-item-disabled .rd-_gallery_mx-menu_index_less_-short {\ncolor:#e6e6e6;\n}\n.rd-_gallery_mx-menu_index_less_-item-disabled .rd-_gallery_mx-menu_index_less_-icon {\ncolor:#e6e6e6;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	width,
	list,
	disabled,}=$dataFromView,
$$_class,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];$__line=6;$__art="{{each list as one}}";$__ctrl="for(let $q_c_gehtfvyp=list.length,$q_key_hyslsvz=0;$q_key_hyslsvz<$q_c_gehtfvyp;$q_key_hyslsvz++){let one=list[$q_key_hyslsvz];";
for(let $q_c_gehtfvyp=list.length,$q_key_hyslsvz=0;$q_key_hyslsvz<$q_c_gehtfvyp;$q_key_hyslsvz+=1){
let one=list[$q_key_hyslsvz];
$__line=7;$__art="{{if one.spliter}}";$__ctrl="if(one.spliter){";
if(one.spliter){

if($quick_h2_1_static_node){
$vnode_2.push($quick_h2_1_static_node);
}else{
$vnode_2.push($quick_h2_1_static_node=$createVNode('li',{'_': 'ep','class': 'rd-_gallery_mx-menu_index_less_-spliter',}));
}

}else{
$vnode_3=[];$vnode_4=[];$__line=11;$__art="{{if =one.icon}}";$__ctrl="if((one.icon)!=null){";
if((one.icon)!=null){
$vnode_4.push($createVNode(0,($__ctrl='<%=one.icon%>',(one.icon)),1));
};$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-mr5 rd-_gallery_mx-menu_index_less_-icon rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-fontsize-14 rd-_assets_index_less_-color-666'+($__line=11,$__art='{{if one.r180}}','');$__ctrl='<%if(one.r180){%>';if(one.r180){;$$_class+=' rd-_assets_index_less_-r180'+($__line=11,$__art='{{else if one.r90}}','');$__ctrl='<%}else if(one.r90){%>';}else if(one.r90){;$$_class+=' rd-_assets_index_less_-r90'+($__line=11,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_3.push($createVNode('i',{'class': $$_class,},$vnode_4));$vnode_4=[$createVNode(0,($__line=13,$__art='{{=one.text}}',$__ctrl='<%=one.text%>',(one.text)))];$vnode_3.push($createVNode('b',$quick_h2_2_static_attr,$vnode_4));$__line=15;$__art="{{if one.short}}";$__ctrl="if(one.short){";
if(one.short){
$vnode_4=[$createVNode(0,($__line=16,$__art='{{=one.short}}',$__ctrl='<%=one.short%>',(one.short)))];$vnode_3.push($createVNode('code',{'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-fontsize-12 rd-_gallery_mx-menu_index_less_-short','title': '快捷键:'+($__line=16,$__art='{{=one.short}}',$__ctrl='<%=one.short%>',(one.short)),},$vnode_4));
};$$_class='rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center rd-_gallery_mx-menu_index_less_-items-li rd-_assets_index_less_-cursor-default'+($__line=10,$__art='{{if disabled[one.id]}}','');$__ctrl='<%if(disabled[one.id]){%>';if(disabled[one.id]){;$$_class+=' rd-_gallery_mx-menu_index_less_-item-disabled'+($__line=10,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('li',{'mx5-click': (($temp_var=($__line=10,$__art='{{=!disabled[one.id]}}',$__ctrl='<%=!disabled[one.id]%>',!disabled[one.id]),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-menu/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{select~rs}({item:\''+($__line=10,$__art='{{#one}}',$__ctrl='<%#one,\'auto_key_list.\'+($q_key_hyslsvz)+\'.one\'%>',$keyOf($refData,one,'auto_key_list.'+($q_key_hyslsvz)+'.one'))+'\'})'),'class': $$_class,},$vnode_3));
}
}$vnode_1=[$createVNode('ul',$quick_h2_0_static_attr,$vnode_2)];$vnode_0=[$createVNode('div',{'style': 'width:'+($__line=1,$__art='{{=width}}',$__ctrl='<%=width%>',(width))+'px;position:absolute;left:-10000px;top:-10000px','class': 'rd-_assets_index_less_-scrollable rd-_assets_index_less_-thin-scrollable rd-_gallery_mx-menu_index_less_-container','id': '_mx_cnt_'+($__line=3,$__art='{{=$viewId}}','')+$viewId,'mx5-contextmenu': $viewId+'@:{prevent~rs}()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-menu/index.html'; throw msg; }  } ,
    init() {
        let root = this.root;
        index_1['@:{setup~rs}']();
        this.on('destroy', () => {
            index_1['@:{remove~rs}'](this);
            index_1['@:{teardown~rs}']();
            root.parentNode.removeChild(root);
        });
    },
    assign(ops) {
        let me = this;
        let width = ops.width || 200;
        me['@:{list~rs}'] = ops.list;
        me['@:{width~rs}'] = width;
        me['@:{menu.disabled~rs}'] = ops.disabled || {};
        me['@:{fn.picked~rs}'] = ops.picked;
    },
    async render(e) {
        let me = this;
        await me.digest({
            disabled: me['@:{menu.disabled~rs}'],
            list: me['@:{list~rs}'],
            width: me['@:{width~rs}']
        });
        if (e) {
            this['@:{show~rs}'](e);
        }
    },
    '@:{inside~rs}'(node) {
        return inside(node, this.root);
    },
    '@:{show~rs}'(e) {
        let me = this;
        if (!me['@:{ui.show~rs}']) {
            me['@:{ui.show~rs}'] = 1;
            let n = node('_mx_cnt_' + me.id);
            let width = n.clientWidth;
            let height = n.clientHeight;
            let left = e.pageX + 2;
            let top = e.pageY;
            let positionHeight = top + height + paddingSize, positionnWidth = left + width + paddingSize, { innerHeight, innerWidth } = window;
            if (positionnWidth > innerWidth) {
                left -= width + 5;
                if (left < paddingSize)
                    left = paddingSize;
            }
            if (positionHeight > innerHeight) {
                top -= positionHeight - innerHeight + paddingSize;
                if (top < paddingSize)
                    top = paddingSize;
            }
            n.style.left = left + 'px';
            n.style.top = top + 'px';
            index_1['@:{add~rs}'](me);
        }
    },
    '@:{hide~rs}'() {
        let me = this;
        if (me['@:{ui.show~rs}']) {
            me['@:{ui.show~rs}'] = 0;
            let n = node('_mx_cnt_' + me.id);
            n.style.left = '-10000px';
            index_1['@:{remove~rs}'](me);
        }
    },
    '@:{select~rs}<click>'(e) {
        let me = this;
        me['@:{hide~rs}']();
        let fn = me['@:{fn.picked~rs}'];
        if (fn) {
            fn(e.params.item);
        }
    }
}).static({
    show(view, e, cmId, ops) {
        let n = node(cmId);
        let vf = n && Vframe.byNode(n);
        if (vf) {
            vf.invoke('assign', [ops]);
            vf.invoke('render', [e]);
        }
        else {
            document.body.insertAdjacentHTML("beforeend", `<div class="rd-_assets_index_less_-designer-root" id="${cmId}"></div>`);
            vf = view.owner.mount(node(cmId), 'gallery/mx-menu/index', ops);
            vf.invoke('@:{show~rs}', [e]);
        }
    }
});

});