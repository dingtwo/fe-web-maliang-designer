/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-table/style",["magix5","../../designer/const"],(require,exports,module)=>{
let $quick_d4_static_text;
let $quick_eL_static_text;
let $quick_eM_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let { View, dispatch, applyStyle, isNumber } = magix_1;
applyStyle("rd-_gallery_mx-table_style_less_","\n.rd-_gallery_mx-table_style_less_-root {\nborder:solid 1px #e6e6e6;\nborder-radius:2px;\noverflow-y:scroll;\nheight:140px;\n-ms-scroll-chaining:none;\noverscroll-behavior:contain;\n}\n.rd-_gallery_mx-table_style_less_-root:hover {\nborder-color:#ccc;\n}\n.rd-_gallery_mx-table_style_less_-table-item {\nwidth:116px;\nmargin:8px;\nopacity:0.8;\nzoom:0.5;\n}\n.rd-_gallery_mx-table_style_less_-table-item:hover {\nopacity:1;\n}\n.rd-_gallery_mx-table_style_less_-notallowed {\nbackground:#f5f5f5;\ncursor:not-allowed;\n}\n.rd-_gallery_mx-table_style_less_-notallowed:hover {\nborder-color:#e6e6e6;\n}\n.rd-_gallery_mx-table_style_less_-notallowed .rd-_gallery_mx-table_style_less_-table-item {\ncursor:not-allowed;\nopacity:0.4;\n}\n.rd-_gallery_mx-table_style_less_-notallowed .rd-_gallery_mx-table_style_less_-table-item:hover {\nopacity:0.4;\n}\n");
let Skins = [{
        cellAlign: 'center',
        theadFontsize: 16,
        theadRowHeight: 40,
        theadForecolor: '#000000',
        tbodyRowHeight: 30,
        tbodyFontsize: 14,
        tbodyForecolor: '#000000',
        theadRowBackground: '#ffda95',
        tbodyEvenRowBackground: '#dde09d',
        tbodyOddRowBackground: '#f2f5cc',
        bordercolor: '#000000',
    }, {
        cellAlign: 'center',
        theadFontsize: 16,
        theadRowHeight: 40,
        theadForecolor: '#8391b7',
        tbodyRowHeight: 30,
        tbodyFontsize: 14,
        tbodyForecolor: '#8391b7',
        theadRowBackground: '#ffffff',
        tbodyEvenRowBackground: '#ffffff',
        tbodyOddRowBackground: '#d3dfed',
        bordercolor: '#becfe6',
    }, {
        cellAlign: 'center',
        theadFontsize: 16,
        theadRowHeight: 40,
        theadForecolor: '#c27f88',
        tbodyRowHeight: 30,
        tbodyFontsize: 14,
        tbodyForecolor: '#c27f88',
        theadRowBackground: '#ffffff',
        tbodyEvenRowBackground: '#ffffff',
        tbodyOddRowBackground: '#eed3d2',
        bordercolor: '#eccecd',
    }, {
        cellAlign: 'center',
        theadFontsize: 16,
        theadRowHeight: 40,
        theadForecolor: '#ffffff',
        tbodyRowHeight: 30,
        tbodyFontsize: 14,
        tbodyForecolor: '#000000',
        theadRowBackground: '#7f659f',
        tbodyEvenRowBackground: '#ffffff',
        tbodyOddRowBackground: '#ffffff',
        bordercolor: '#7f659f',
    }, {
        cellAlign: 'center',
        theadFontsize: 14,
        theadRowHeight: 30,
        theadForecolor: '#666666',
        tbodyRowHeight: 20,
        tbodyFontsize: 12,
        tbodyForecolor: '#666666',
        theadRowBackground: '#e9eaec',
        tbodyEvenRowBackground: '#f6f6f6',
        tbodyOddRowBackground: '#ffffff',
        bordercolor: '#dedede',
    }, {
        cellAlign: 'center',
        theadFontsize: 14,
        theadRowHeight: 30,
        theadForecolor: '#d1dbdb',
        tbodyRowHeight: 20,
        tbodyFontsize: 12,
        tbodyForecolor: '#d1dbdb',
        theadRowBackground: '#212121',
        tbodyEvenRowBackground: '#010101',
        tbodyOddRowBackground: '#404040',
        bordercolor: '#343434',
    }];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	skins,}=$dataFromView,
$$_class,
$$_style,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{each skins as s}}";$__ctrl="for(let $q_c_hkkckios=skins.length,$q_key_mapvgfzjo=0;$q_key_mapvgfzjo<$q_c_hkkckios;$q_key_mapvgfzjo++){let s=skins[$q_key_mapvgfzjo];";
for(let $q_c_hkkckios=skins.length,$q_key_mapvgfzjo=0;$q_key_mapvgfzjo<$q_c_hkkckios;$q_key_mapvgfzjo+=1){
let s=skins[$q_key_mapvgfzjo];
$vnode_6=[$quick_d4_static_text||($quick_d4_static_text=$createVNode(0,'表头'))];$vnode_5=[$createVNode('div',{'class': 'rd-_assets_index_less_-text-pre-hidden','style': 'height:'+($__line=7,$__art='{{=s.theadRowHeight}}',$__ctrl='<%=s.theadRowHeight%>',(s.theadRowHeight))+'px;line-height:'+($__line=7,$__art='{{=s.theadRowHeight}}',$__ctrl='<%=s.theadRowHeight%>',(s.theadRowHeight))+'px;font-size:'+($__line=7,$__art='{{=s.theadFontsize}}',$__ctrl='<%=s.theadFontsize%>',(s.theadFontsize))+'px;color:'+($__line=7,$__art='{{=s.theadForecolor}}',$__ctrl='<%=s.theadForecolor%>',(s.theadForecolor)),},$vnode_6)];;$$_style='border-color:'+($__line=6,$__art='{{=s.bordercolor}}',$__ctrl='<%=s.bordercolor%>',(s.bordercolor))+';text-align:'+($__line=6,$__art='{{=s.cellAlign}}',$__ctrl='<%=s.cellAlign%>',(s.cellAlign))+';'+($__line=6,$__art='{{if s.theadRowBackground}}','');$__ctrl='<%if(s.theadRowBackground){%>';if(s.theadRowBackground){;$$_style+='background:'+($__line=6,$__art='{{=s.theadRowBackground}}',$__ctrl='<%=s.theadRowBackground%>',(s.theadRowBackground))+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_4=[$createVNode('th',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': $$_style,},$vnode_5)];$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2=[$createVNode('thead',0,$vnode_3)];$vnode_6=[$quick_eL_static_text||($quick_eL_static_text=$createVNode(0,'奇数行'))];$vnode_5=[$createVNode('div',{'class': 'rd-_assets_index_less_-text-pre-hidden','style': 'height:'+($__line=14,$__art='{{=s.tbodyRowHeight}}',$__ctrl='<%=s.tbodyRowHeight%>',(s.tbodyRowHeight))+'px;line-height:'+($__line=14,$__art='{{=s.tbodyRowHeight}}',$__ctrl='<%=s.tbodyRowHeight%>',(s.tbodyRowHeight))+'px;font-size:'+($__line=14,$__art='{{=s.tbodyFontsize}}',$__ctrl='<%=s.tbodyFontsize%>',(s.tbodyFontsize))+'px;color:'+($__line=14,$__art='{{=s.tbodyForecolor}}',$__ctrl='<%=s.tbodyForecolor%>',(s.tbodyForecolor)),},$vnode_6)];$vnode_4=[$createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': 'text-align:'+($__line=13,$__art='{{=s.cellAlign}}',$__ctrl='<%=s.cellAlign%>',(s.cellAlign))+';border-color:'+($__line=13,$__art='{{=s.bordercolor}}',$__ctrl='<%=s.bordercolor%>',(s.bordercolor))+';background:'+($__line=13,$__art='{{=s.tbodyOddRowBackground}}',$__ctrl='<%=s.tbodyOddRowBackground%>',(s.tbodyOddRowBackground)),},$vnode_5)];$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_6=[$quick_eM_static_text||($quick_eM_static_text=$createVNode(0,'偶数行'))];$vnode_5=[$createVNode('div',{'class': 'rd-_assets_index_less_-text-pre-hidden','style': 'height:'+($__line=21,$__art='{{=s.tbodyRowHeight}}',$__ctrl='<%=s.tbodyRowHeight%>',(s.tbodyRowHeight))+'px;line-height:'+($__line=21,$__art='{{=s.tbodyRowHeight}}',$__ctrl='<%=s.tbodyRowHeight%>',(s.tbodyRowHeight))+'px;font-size:'+($__line=21,$__art='{{=s.tbodyFontsize}}',$__ctrl='<%=s.tbodyFontsize%>',(s.tbodyFontsize))+'px;color:'+($__line=21,$__art='{{=s.tbodyForecolor}}',$__ctrl='<%=s.tbodyForecolor%>',(s.tbodyForecolor)),},$vnode_6)];$vnode_4=[$createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': 'text-align:'+($__line=20,$__art='{{=s.cellAlign}}',$__ctrl='<%=s.cellAlign%>',(s.cellAlign))+';border-color:'+($__line=20,$__art='{{=s.bordercolor}}',$__ctrl='<%=s.bordercolor%>',(s.bordercolor))+';background:'+($__line=20,$__art='{{=s.tbodyEvenRowBackground}}',$__ctrl='<%=s.tbodyEvenRowBackground%>',(s.tbodyEvenRowBackground)),},$vnode_5)];$vnode_3.push($createVNode('tr',0,$vnode_4));$vnode_2.push($createVNode('tbody',0,$vnode_3));$vnode_1.push($createVNode('table',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fl rd-_assets_index_less_-table rd-_gallery_mx-table_style_less_-table-item','style': 'border-color:'+($__line=3,$__art='{{=s.bordercolor}}',$__ctrl='<%=s.bordercolor%>',(s.bordercolor)),'mx5-click': (($temp_var=($__line=3,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/style.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{set.skin~rs}({skin:\''+($__line=3,$__art='{{#s}}',$__ctrl='<%#s,\'auto_key_skins.\'+($q_key_mapvgfzjo)+\'.s\'%>',$keyOf($refData,s,'auto_key_skins.'+($q_key_mapvgfzjo)+'.s'))+'\'})'),},$vnode_2));
};$$_class='rd-_gallery_mx-table_style_less_-root rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-scrollable rd-_assets_index_less_-thin-scrollable'+($__line=1,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_style_less_-notallowed'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-table/style.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            skins: Skins
        });
    },
    '@:{set.skin~rs}<click>'(e) {
        let { skin } = e.params;
        let cloned = {};
        for (let p in skin) {
            let src = skin[p];
            if (isNumber(src)) {
                src = const_1['@:{const#to.unit~rs}'](src);
            }
            cloned[p] = src;
        }
        dispatch(this.root, 'change', {
            skin: cloned
        });
    }
});

});