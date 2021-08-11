/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-table/border",["magix5","./coperate"],(require,exports,module)=>{
let $quick_bU_static_text;
let $quick_cV_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-flex-wrap-wrap rd-_assets_index_less_-justify-content-space-between',};


let magix_1 = require("magix5");
require("./coperate");
let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	cell,
	disabled,
	i18n,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_bU_static_text||($quick_bU_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-r270'+($__line=2,$__art='{{if cell.bLeft&&!disabled}}','');$__ctrl='<%if(cell.bLeft&&!disabled){%>';if(cell.bLeft&&!disabled){;$$_class+=' rd-_assets_index_less_-props-item-title-selected'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=2,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('i',{'title': ($__line=2,$__art='{{=i18n(cell.bLeft?\'@:{lang#mx-gallery.table.cell.border.hide~rs}\':\'@:{lang#mx-gallery.table.cell.border.show}\',\'左\')}}',$__ctrl='<%=i18n(cell.bLeft?\'@:{lang#mx-gallery.table.cell.border.hide~rs}\':\'@:{lang#mx-gallery.table.cell.border.show~rs}\',\'左\')%>',(i18n(cell.bLeft?'@:{lang#mx-gallery.table.cell.border.hide~rs}':'@:{lang#mx-gallery.table.cell.border.show~rs}','左'))),'mx5-click': (($temp_var=($__line=2,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/border.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{toggle.border~rs}({to:\'Left\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_bU_static_text||($quick_bU_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer'+($__line=3,$__art='{{if cell.bTop&&!disabled}}','');$__ctrl='<%if(cell.bTop&&!disabled){%>';if(cell.bTop&&!disabled){;$$_class+=' rd-_assets_index_less_-props-item-title-selected'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=3,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=3,$__art='{{=i18n(cell.bLeft?\'@:{lang#mx-gallery.table.cell.border.hide~rs}\':\'@:{lang#mx-gallery.table.cell.border.show}\',\'上\')}}',$__ctrl='<%=i18n(cell.bLeft?\'@:{lang#mx-gallery.table.cell.border.hide~rs}\':\'@:{lang#mx-gallery.table.cell.border.show~rs}\',\'上\')%>',(i18n(cell.bLeft?'@:{lang#mx-gallery.table.cell.border.hide~rs}':'@:{lang#mx-gallery.table.cell.border.show~rs}','上'))),'mx5-click': (($temp_var=($__line=3,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/border.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{toggle.border~rs}({to:\'Top\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_bU_static_text||($quick_bU_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-r90 rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer'+($__line=4,$__art='{{if cell.bRight&&!disabled}}','');$__ctrl='<%if(cell.bRight&&!disabled){%>';if(cell.bRight&&!disabled){;$$_class+=' rd-_assets_index_less_-props-item-title-selected'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=4,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=4,$__art='{{=i18n(cell.bLeft?\'@:{lang#mx-gallery.table.cell.border.hide~rs}\':\'@:{lang#mx-gallery.table.cell.border.show}\',\'右\')}}',$__ctrl='<%=i18n(cell.bLeft?\'@:{lang#mx-gallery.table.cell.border.hide~rs}\':\'@:{lang#mx-gallery.table.cell.border.show~rs}\',\'右\')%>',(i18n(cell.bLeft?'@:{lang#mx-gallery.table.cell.border.hide~rs}':'@:{lang#mx-gallery.table.cell.border.show~rs}','右'))),'mx5-click': (($temp_var=($__line=4,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/border.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{toggle.border~rs}({to:\'Right\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_bU_static_text||($quick_bU_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-r180 rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer'+($__line=5,$__art='{{if cell.bBottom&&!disabled}}','');$__ctrl='<%if(cell.bBottom&&!disabled){%>';if(cell.bBottom&&!disabled){;$$_class+=' rd-_assets_index_less_-props-item-title-selected'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=5,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=5,$__art='{{=i18n(cell.bLeft?\'@:{lang#mx-gallery.table.cell.border.hide~rs}\':\'@:{lang#mx-gallery.table.cell.border.show}\',\'下\')}}',$__ctrl='<%=i18n(cell.bLeft?\'@:{lang#mx-gallery.table.cell.border.hide~rs}\':\'@:{lang#mx-gallery.table.cell.border.show~rs}\',\'下\')%>',(i18n(cell.bLeft?'@:{lang#mx-gallery.table.cell.border.hide~rs}':'@:{lang#mx-gallery.table.cell.border.show~rs}','下'))),'mx5-click': (($temp_var=($__line=5,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/border.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{toggle.border~rs}({to:\'Bottom\'})'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_cV_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-table/border.html'; throw msg; }  } ,
    assign(data) {
        let { props, disabled } = data;
        let { rows, focusRow, focusCol } = props;
        if (focusRow == -1) {
            focusRow = 0;
        }
        if (focusCol == -1) {
            focusCol = 0;
        }
        let cell = rows[focusRow].cols[focusCol];
        this.set({
            rows,
            cell,
            props,
            disabled
        });
    },
    render() {
        this.digest();
    },
    '@:{toggle.border~rs}<click>'(e) {
        let rows = this.get('rows');
        let cell = this.get('cell');
        let key = 'b' + e.params.to;
        cell[key] = !cell[key];
        dispatch(this.root, 'change', {
            rows
        });
    },
});

});