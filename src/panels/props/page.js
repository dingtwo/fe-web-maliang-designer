/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/props/page",["magix5","../../designer/history","../../designer/props","../../i18n/index","../../designer/const","gallery/mx-number/index","gallery/mx-color/index","gallery/mx-picture/index","gallery/mx-dropdown/index"],(require,exports,module)=>{
require("gallery/mx-number/index");
require("gallery/mx-color/index");
require("gallery/mx-picture/index");
require("gallery/mx-dropdown/index");
let $quick_da_3_static_node;
let $quick_da_5_static_node;
let $quick_da_0_static_attr={'class': 'rd-_assets_index_less_-padding-4 rd-_assets_index_less_-tag-ul rd-_assets_index_less_-unselectable rd-_panels_props_index_less_-props rd-_panels_props_index_less_-props-padding-bottom',};
let $quick_da_1_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_panels_props_index_less_-props-item',};
let $quick_da_2_static_attr={'class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',};
let $quick_da_4_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-label',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let history_1 = require("../../designer/history");
let props_1 = require("../../designer/props");
let index_1 = require("../../i18n/index");
let const_1 = require("../../designer/const");
let { State, View, mark } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	i18n,
	ctrl,
	page,
	props,}=$dataFromView,
$vnode_3,
$vnode_2,
$$_class,
$$_mx5$_view,
$vnode_1;
$vnode_1=[];$vnode_3=[$createVNode(0,($__line=3,$__art='{{=i18n(\'@:{lang#props.type~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#props.type~rs}\')%>',(i18n('@:{lang#props.type~rs}'))))];$vnode_2=[$createVNode('span',$quick_da_2_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,($__line=4,$__art='{{=i18n(ctrl.title)}}',$__ctrl='<%=i18n(ctrl.title)%>',(i18n(ctrl.title))))];$vnode_2.push($createVNode('span',0,$vnode_3));$vnode_1.push($createVNode('li',$quick_da_1_static_attr,$vnode_2));$__line=6;$__art="{{each ctrl.props as p}}";$__ctrl="for(let $q_a_pzkqruum=ctrl.props,$q_c_bmhzuhvs=$q_a_pzkqruum.length,$q_key_xsitnkdwd=0;$q_key_xsitnkdwd<$q_c_bmhzuhvs;$q_key_xsitnkdwd++){let p=$q_a_pzkqruum[$q_key_xsitnkdwd];";
for(let $q_a_pzkqruum=ctrl.props,$q_c_bmhzuhvs=$q_a_pzkqruum.length,$q_key_xsitnkdwd=0;$q_key_xsitnkdwd<$q_c_bmhzuhvs;$q_key_xsitnkdwd+=1){
let p=$q_a_pzkqruum[$q_key_xsitnkdwd];
$__line=7;$__art="{{if p.type&&(!p[\\'@:{if.show~rs}\\']||p[\\'@:{if.show}\\'](page))}}";$__ctrl="if(p.type&&(!p['@:{if.show~rs}']||p['@:{if.show~rs}'](page))){";
if(p.type&&(!p['@:{if.show~rs}']||p['@:{if.show~rs}'](page))){
$__line=8;$__art="{{if p.type==props[\\'@:{eprops#spliter~rs}\\']}}";$__ctrl="if(p.type==props['@:{eprops#spliter~rs}']){";
if(p.type==props['@:{eprops#spliter~rs}']){

if($quick_da_3_static_node){
$vnode_1.push($quick_da_3_static_node);
}else{
$vnode_1.push($quick_da_3_static_node=$createVNode('li',{'_': 'ar','class': 'rd-_assets_index_less_-item-spliter',}));
}

}else{
($__line=11,$__art='{{set value=page[p.key]}}','');$__ctrl='<%let value=page[p.key];%>';let value=page[p.key];;$__line=12;$__art="{{if p.read}}";$__ctrl="if(p.read){";
if(p.read){
($__line=13,$__art='{{value=p.read(value)}}','');$__ctrl='<%value=p.read(value)%>';value=p.read(value);
}$vnode_2=[];$__line=16;$__art="{{if p.tip}}";$__ctrl="if(p.tip){";
if(p.tip){
$vnode_3=[$createVNode(0,($__line=17,$__art='{{=i18n(p.tip)}}',$__ctrl='<%=i18n(p.tip)%>',(i18n(p.tip))))];$vnode_2.push($createVNode('span',$quick_da_2_static_attr,$vnode_3));
}($__line=19,$__art='{{set readonly=page.readonly}}','');$__ctrl='<%let readonly=page.readonly;%>';let readonly=page.readonly;;$__line=20;$__art="{{if p.type==props[\\'@:{eprops#label~rs}\\']}}";$__ctrl="if(p.type==props['@:{eprops#label~rs}']){";
if(p.type==props['@:{eprops#label~rs}']){
$vnode_3=[$createVNode(0,($__line=21,$__art='{{=value}}',$__ctrl='<%=value%>',(value)))];;$$_class=($__line=21,$__art='{{if readonly}}','');$__ctrl='<%if(readonly){%>';if(readonly){;$$_class+='rd-_assets_index_less_-color-999'+($__line=21,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('span',{'class': $$_class,},$vnode_3));
}else if(($__line=22,$__art="{{else if p.type==props[\\'@:{eprops#number~rs}\\']}}",$__ctrl="else if(p.type==props['@:{eprops#number~rs}']){"),p.type==props['@:{eprops#number~rs}']){
;$$_mx5$_view='gallery/mx-number/index?value='+($__line=23,$__art='{{#value}}',$__ctrl='<%#value,\'auto_key_page.\'+(p.key)+\'.value\'%>',$keyOf($refData,value,'auto_key_page.'+(p.key)+'.value'))+($__line=23,$__art='{{#p.max}}','');$__ctrl='<%if(($temp_var=p.max)!=null){%>';if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+($__ctrl='<%#$temp_var,\'auto_key_ctrl.props.\'+($q_key_xsitnkdwd)+\'.p.max\'%>',$keyOf($refData,$temp_var,'auto_key_ctrl.props.'+($q_key_xsitnkdwd)+'.p.max'));$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=23,$__art='{{#p.step}}','');$__ctrl='<%if(($temp_var=p.step)!=null){%>';if(($temp_var=p.step)!=null){;$$_mx5$_view+='&step='+($__ctrl='<%#$temp_var,\'auto_key_ctrl.props.\'+($q_key_xsitnkdwd)+\'.p.step\'%>',$keyOf($refData,$temp_var,'auto_key_ctrl.props.'+($q_key_xsitnkdwd)+'.p.step'));$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=23,$__art='{{#p.fixed}}','');$__ctrl='<%if(($temp_var=p.fixed)!=null){%>';if(($temp_var=p.fixed)!=null){;$$_mx5$_view+='&fixed='+($__ctrl='<%#$temp_var,\'auto_key_ctrl.props.\'+($q_key_xsitnkdwd)+\'.p.fixed\'%>',$keyOf($refData,$temp_var,'auto_key_ctrl.props.'+($q_key_xsitnkdwd)+'.p.fixed'));$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=23,$__art='{{#p.min}}','');$__ctrl='<%if(($temp_var=p.min)!=null){%>';if(($temp_var=p.min)!=null){;$$_mx5$_view+='&min='+($__ctrl='<%#$temp_var,\'auto_key_ctrl.props.\'+($q_key_xsitnkdwd)+\'.p.min\'%>',$keyOf($refData,$temp_var,'auto_key_ctrl.props.'+($q_key_xsitnkdwd)+'.p.min'));$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=23,$__art='{{=readonly}}',$__ctrl='<%=readonly%>',readonly),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/page.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=23,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',write:\''+($__line=23,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_ctrl.props.\'+($q_key_xsitnkdwd)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_ctrl.props.'+($q_key_xsitnkdwd)+'.p.write'))+'\',use:\'value\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=24,$__art="{{else if p.type==props[\\'@:{eprops#text.input~rs}\\']}}",$__ctrl="else if(p.type==props['@:{eprops#text.input~rs}']){"),p.type==props['@:{eprops#text.input~rs}']){
$vnode_2.push($createVNode('input',{'class': 'rd-_assets_index_less_-input','value': ($__line=25,$__art='{{=value}}',$__ctrl='<%=value%>',(value)),'mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=25,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',native:\'value\'})','disabled': ($temp_var=($__line=25,$__art='{{readonly}}',$__ctrl='<%readonly%>',readonly),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/page.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),},1,$special_2));
}else if(($__line=26,$__art="{{else if p.type==props[\\'@:{eprops#color~rs}\\']}}",$__ctrl="else if(p.type==props['@:{eprops#color~rs}']){"),p.type==props['@:{eprops#color~rs}']){
;$$_mx5$_view='gallery/mx-color/index?clear='+($__line=27,$__art='{{=p.clear}}',$__ctrl='<%=$encodeUrl(p.clear)%>',($encodeUrl(p.clear)))+'&color='+($__line=27,$__art='{{#value}}',$__ctrl='<%#value,\'auto_key_page.\'+(p.key)+\'.value\'%>',$keyOf($refData,value,'auto_key_page.'+(p.key)+'.value'))+'&align=right&disabled='+($__line=27,$__art='{{=readonly}}',$__ctrl='<%=$encodeUrl(readonly)%>',($encodeUrl(readonly)))+($__line=27,$__art='{{=p.alpha}}','');$__ctrl='<%if(($temp_var=p.alpha)!=null){%>';if(($temp_var=p.alpha)!=null){;$$_mx5$_view+='&alpha='+($__ctrl='<%=$encodeUrl($temp_var)%>',($encodeUrl($temp_var)));$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=27,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'color\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=28,$__art="{{else if p.type==props[\\'@:{eprops#image~rs}\\']}}",$__ctrl="else if(p.type==props['@:{eprops#image~rs}']){"),p.type==props['@:{eprops#image~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=29,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'src\',write:\''+($__line=29,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_ctrl.props.\'+($q_key_xsitnkdwd)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_ctrl.props.'+($q_key_xsitnkdwd)+'.p.write'))+'\'})','mx5-view': 'gallery/mx-picture/index?src='+($__line=29,$__art='{{=value}}',$__ctrl='<%=$encodeUrl(value)%>',($encodeUrl(value)))+'&disabled='+($__line=29,$__art='{{#readonly}}',$__ctrl='<%#readonly,\'auto_key_page.readonly.readonly\'%>',$keyOf($refData,readonly,'auto_key_page.readonly.readonly')),}));
}else if(($__line=30,$__art="{{else if p.type==props[\\'@:{eprops#dropdown~rs}\\']}}",$__ctrl="else if(p.type==props['@:{eprops#dropdown~rs}']){"),p.type==props['@:{eprops#dropdown~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'ctrl,page','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=31,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'value\',write:\''+($__line=31,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_ctrl.props.\'+($q_key_xsitnkdwd)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_ctrl.props.'+($q_key_xsitnkdwd)+'.p.write'))+'\'})','mx5-view': 'gallery/mx-dropdown/index?selected='+($__line=31,$__art='{{=value}}',$__ctrl='<%=$encodeUrl(value)%>',($encodeUrl(value)))+'&list='+($__line=31,$__art='{{#p.items}}',$__ctrl='<%#p.items,\'auto_key_ctrl.props.\'+($q_key_xsitnkdwd)+\'.p.items\'%>',$keyOf($refData,p.items,'auto_key_ctrl.props.'+($q_key_xsitnkdwd)+'.p.items'))+'&textKey=text&valueKey=value&disabled='+($__line=31,$__art='{{#p.disabled||readonly}}',$__ctrl='<%#p.disabled||readonly,\'auto_key_ctrl.props.\'+($q_key_xsitnkdwd)+\'.page.readonly.p.disabled||readonly\'%>',$keyOf($refData,p.disabled||readonly,'auto_key_ctrl.props.'+($q_key_xsitnkdwd)+'.page.readonly.p.disabled||readonly')),}));
}else if(($__line=32,$__art="{{else if p.type==props[\\'@:{eprops#boolean~rs}\\']}}",$__ctrl="else if(p.type==props['@:{eprops#boolean~rs}']){"),p.type==props['@:{eprops#boolean~rs}']){
$vnode_3=[$createVNode('input',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-switch-input','type': 'checkbox','disabled': ($temp_var=($__line=34,$__art='{{=readonly}}',$__ctrl='<%=readonly%>',readonly),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/page.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'checked': ($temp_var=($__line=34,$__art='{{=value}}',$__ctrl='<%=value%>',value),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/page.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=34,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',native:\'checked\',write:\''+($__line=34,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_ctrl.props.\'+($q_key_xsitnkdwd)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_ctrl.props.'+($q_key_xsitnkdwd)+'.p.write'))+'\'})',},1,$special_4)];
if($quick_da_5_static_node){
$vnode_3.push($quick_da_5_static_node);
}else{
$vnode_3.push($quick_da_5_static_node=$createVNode('i',{'_': 'as','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-switch-button rd-_assets_index_less_-unselectable',}));
}
$vnode_2.push($createVNode('label',$quick_da_4_static_attr,$vnode_3));
}else if(($__line=37,$__art="{{else if p.type==props[\\'@:{eprops#image.reset~rs}\\']}}",$__ctrl="else if(p.type==props['@:{eprops#image.reset~rs}']){"),p.type==props['@:{eprops#image.reset~rs}']){
$vnode_3=[$createVNode(0,($__line=38,$__art='{{=i18n(\'@:{lang#elements.image.reset~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#elements.image.reset~rs}\')%>',(i18n('@:{lang#elements.image.reset~rs}'))))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc','disabled': ($temp_var=($__line=38,$__art='{{=readonly}}',$__ctrl='<%=readonly%>',readonly),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/page.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-click': $viewId+'@:{update.image.size~rs}()',},$vnode_3));
};$$_class='rd-_panels_props_index_less_-props-item rd-_assets_index_less_-flex '+($__line=15,$__art='{{if p[\'@:{dock.top~rs}\']}}','');$__ctrl='<%if(p[\'@:{dock.top~rs}\']){%>';if(p['@:{dock.top~rs}']){;$$_class+='rd-_assets_index_less_-align-items-flex-start'+($__line=15,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+='rd-_assets_index_less_-align-items-center'+($__line=15,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('li',{'class': $$_class,},$vnode_2));
}
}
}$vnode_0=[$createVNode('ul',$quick_da_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/props/page.html'; throw msg; }  } ,
    init() {
        let update = this.render.bind(this);
        State.on('@:{event#stage.page.change~rs}', update);
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.page.and.elements.change~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#stage.page.change~rs}', update);
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.page.and.elements.change~rs}', update);
        });
        this.set({
            props: props_1,
            ctrl: State.get('@:{global#stage.page.ctrl~rs}')
        });
    },
    assign() {
        return false;
    },
    render() {
        let page = State.get('@:{global#stage.page~rs}');
        let size = page.width + 'x' + page.height;
        page.paper = size;
        page.screen = size;
        this.digest({
            page
        });
    },
    async '@:{update.prop~rs}<input,change>'(e) {
        let { key, use, native, write } = e.params;
        let page = State.get('@:{global#stage.page~rs}');
        let v = native ? e.eventTarget[native] : e[use];
        let marker = mark(this, '@:{update.props~rs}');
        if (write) {
            v = await write(v, page, e);
        }
        if (marker()) {
            page[key] = v;
            if (key == 'unit') {
                State.fire('@:{event#stage.unit.change~rs}', {
                    '@:{to.unit~rs}': v
                });
            }
            else {
                State.fire('@:{event#stage.page.change~rs}');
            }
            history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.props~rs}'], index_1('@:{lang#elements.page~rs}'), '@:{history#stage.prpops.change~rs}' + key, 500);
        }
    },
    '@:{update.image.size~rs}<click>'(e) {
        let page = State.get('@:{global#stage.page~rs}');
        let img = new Image();
        let m = mark(this, '@:{update.img.size~rs}');
        let setSize = () => {
            let newWidth = const_1['@:{const#to.unit~rs}'](img.width), newHeight = const_1['@:{const#to.unit~rs}'](img.height);
            if (m() &&
                (newWidth != page.backgroundWidth ||
                    newHeight != page.backgroundHeight)) {
                page.backgroundWidth = newWidth;
                page.backgroundHeight = newHeight;
                State.fire('@:{event#stage.page.change~rs}');
                history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.props~rs}'], index_1('@:{lang#elements.page~rs}'));
            }
        };
        img.onload = setSize;
        img.src = page.backgroundImage;
        if (img.complete) {
            setSize();
        }
    }
});

});