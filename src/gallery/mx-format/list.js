/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-format/list",["magix5","../../provider/format","./share","../mx-codemirror/index"],(require,exports,module)=>{
require("../mx-codemirror/index");
let $quick_dt_0_static_node;
let $quick_dt_1_static_node;
let $quick_b6_static_text;
let $quick_cr_static_text;
let $quick_cs_static_text;
let $quick_dt_10_static_node;
let $quick_dt_3_static_attr={'class': 'rd-_assets_index_less_-dialog-body rd-_assets_index_less_-min-height-500 rd-_assets_index_less_-unselectable',};
let $quick_dt_4_static_attr={'class': 'rd-_assets_index_less_-flex rd-_gallery_mx-format_share_less_-tabs',};
let $quick_dt_5_static_attr={'class': 'rd-_assets_index_less_-min-height-80',};
let $quick_dt_6_static_attr={'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-margin-bottom-4 rd-_assets_index_less_-margin-top-4',};
let $quick_dt_7_static_attr={'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-flex-wrap-wrap',};
let $quick_dt_8_static_attr={'class': 'rd-_assets_index_less_-color-999',};
let $quick_dt_9_static_attr={'class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-bottom-0 rd-_assets_index_less_-dialog-footer rd-_assets_index_less_-dialog-footer-with-shadow rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-flex-end rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-6',};
/*
    author:https://github.com/xinglie
*/


require("./share");
let magix_1 = require("magix5");
let format_1 = require("../../provider/format");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	list,
	parts,}=$dataFromView,
$vnode_1,
$$_class,
$vnode_3,
$vnode_2,
$vnode_5,
$vnode_4;

if($quick_dt_0_static_node){
$vnode_0=[$quick_dt_0_static_node];
}else{
$vnode_0=[$quick_dt_0_static_node=$createVNode('div',{'_': 'a@','class': 'rd-_assets_index_less_-dialog-header-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-7',})];
}

if($quick_dt_1_static_node){
$vnode_0.push($quick_dt_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-_assets_index_less_-tag-h5">显示格式</h5>',1)];$vnode_0.push($quick_dt_1_static_node=$createVNode('div',{'_': 'a$','class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-dialog-header rd-_assets_index_less_-dialog-header-with-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-top-0 rd-_assets_index_less_-z-index-8',},$vnode_1));
}
($__line=5,$__art='{{set cIndex=0}}','');$__ctrl='<%let cIndex=0;%>';let cIndex=0;;$vnode_1=[];$vnode_2=[];$__line=8;$__art="{{each list as category ci}}";$__ctrl="for(let $q_c_eqtkvaj=list.length,ci=0;ci<$q_c_eqtkvaj;ci++){let category=list[ci];";
for(let $q_c_eqtkvaj=list.length,ci=0;ci<$q_c_eqtkvaj;ci+=1){
let category=list[ci];
$vnode_3=[$createVNode(0,($__line=9,$__art='{{=category.title}}',$__ctrl='<%=category.title%>',(category.title)))];;$$_class='rd-_gallery_mx-format_share_less_-tabs-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer '+($__line=9,$__art='{{if category.id==parts[0]}}','');$__ctrl='<%if(category.id==parts[0]){%>';if(category.id==parts[0]){;$$_class+=''+($__line=9,$__art='{{cIndex=ci}}','');$__ctrl='<%cIndex=ci%>';cIndex=ci;$$_class+=' rd-_gallery_mx-format_share_less_-tabs-active'+($__line=9,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-click': (($temp_var=($__line=9,$__art='{{=category.id!=parts[0]}}',$__ctrl='<%=category.id!=parts[0]%>',category.id!=parts[0]),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-format/list.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{change.tab~rs}({to:\''+($__line=9,$__art='{{=category.id}}',$__ctrl='<%=$encodeQuote(category.id)%>',($encodeQuote(category.id)))+'\'})'),'class': $$_class,},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_dt_4_static_attr,$vnode_2));($__line=12,$__art='{{set current=list[cIndex]}}','');$__ctrl='<%let current=list[cIndex];%>';let current=list[cIndex];;$__line=13;$__art="{{if current.id==\\'custom\\'}}";$__ctrl="if(current.id=='custom'){";
if(current.id=='custom'){
$vnode_2=[$quick_b6_static_text||($quick_b6_static_text=$createVNode(0,'loading...'))];$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'parts,list','class': 'rd-_gallery_mx-format_share_less_-codemirror','style': 'width:848px;height:425px','mx5-cmchange': $viewId+'@:{update.format~rs}()','mx5-view': 'gallery/mx-codemirror/index?value='+($__line=14,$__art='{{#parts[1]||current.defaults}}',$__ctrl='<%#parts[1]||current.defaults,\'auto_key_parts.list.\'+(cIndex)+\'.parts[1]||current.defaults\'%>',$keyOf($refData,parts[1]||current.defaults,'auto_key_parts.list.'+(cIndex)+'.parts[1]||current.defaults')),},$vnode_2));
}else{
$__line=18;$__art="{{each current.groups as group gi}}";$__ctrl="for(let $q_a_uemgxdutya=current.groups,$q_c_gifrgij=$q_a_uemgxdutya.length,gi=0;gi<$q_c_gifrgij;gi++){let group=$q_a_uemgxdutya[gi];";
for(let $q_a_uemgxdutya=current.groups,$q_c_gifrgij=$q_a_uemgxdutya.length,gi=0;gi<$q_c_gifrgij;gi+=1){
let group=$q_a_uemgxdutya[gi];
$vnode_3=[$createVNode(0,($__line=21,$__art='{{=group.title}}',$__ctrl='<%=group.title%>',(group.title)))];$vnode_2=[$createVNode('div',$quick_dt_6_static_attr,$vnode_3)];$vnode_3=[];$__line=24;$__art="{{each group.list as item}}";$__ctrl="for(let $q_a_gdqrihwjz=group.list,$q_c_siqqvizcs=$q_a_gdqrihwjz.length,$q_key_iykprzd=0;$q_key_iykprzd<$q_c_siqqvizcs;$q_key_iykprzd++){let item=$q_a_gdqrihwjz[$q_key_iykprzd];";
for(let $q_a_gdqrihwjz=group.list,$q_c_siqqvizcs=$q_a_gdqrihwjz.length,$q_key_iykprzd=0;$q_key_iykprzd<$q_c_siqqvizcs;$q_key_iykprzd+=1){
let item=$q_a_gdqrihwjz[$q_key_iykprzd];
$vnode_4=[];$vnode_4.push($createVNode(0,($__line=26,$__art='{{=item.title.trim()}}',$__ctrl='<%=item.title.trim()%>',(item.title.trim()))));$__line=27;$__art="{{if item.example}}";$__ctrl="if(item.example){";
if(item.example){
$vnode_5=[$createVNode(0,'('+($__line=28,$__art='{{=item.example}}',$__ctrl='<%=item.example%>',(item.example))+')')];$vnode_4.push($createVNode('span',$quick_dt_8_static_attr,$vnode_5));
};$$_class='rd-_assets_index_less_-pr rd-_gallery_mx-format_share_less_-height-30 rd-_assets_index_less_-overflow-hidden rd-_gallery_mx-format_share_less_-margin-2 rd-_assets_index_less_-padding-4 rd-_gallery_mx-format_share_less_-border-radius-2 rd-_gallery_mx-format_share_less_-background-color-efefef rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer'+($__line=25,$__art='{{if parts[gi+1]==item.format}}','');$__ctrl='<%if(parts[gi+1]==item.format){%>';if(parts[gi+1]==item.format){;$$_class+=' rd-_gallery_mx-format_share_less_-data-src-selected'+($__line=25,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_3.push($createVNode('div',{'mx5-click': $viewId+'@:{use.format~rs}({format:\''+($__line=25,$__art='{{=item.format}}',$__ctrl='<%=$encodeQuote(item.format)%>',($encodeQuote(item.format)))+'\',to:'+($__line=25,$__art='{{=gi+1}}',$__ctrl='<%=gi+1%>',(gi+1))+'})','class': $$_class,},$vnode_4));
}$vnode_2.push($createVNode('div',$quick_dt_7_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_dt_5_static_attr,$vnode_2));
}
}$vnode_0.push($createVNode('div',$quick_dt_3_static_attr,$vnode_1));$vnode_2=[$quick_cr_static_text||($quick_cr_static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'@:{apply~rs}()','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc','type': 'button',},$vnode_2)];$vnode_2=[$quick_cs_static_text||($quick_cs_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'@:{close~rs}()','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10 rd-_assets_index_less_-tc','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_dt_9_static_attr,$vnode_1));
if($quick_dt_10_static_node){
$vnode_0.push($quick_dt_10_static_node);
}else{
$vnode_0.push($quick_dt_10_static_node=$createVNode('div',{'_': 'a^','class': 'rd-_assets_index_less_-dialog-footer-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-5',}));
}
 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-format/list.html'; throw msg; }  } ,
    init(data) {
        let me = this;
        me['@:{format~rs}'] = data.format;
        me['@:{dialog~rs}'] = data.dialog;
        me['@:{done.callback~rs}'] = data.done;
    },
    render() {
        let list = format_1["@:{get.groups~rs}"](), parts = format_1["@:{get.parts~rs}"](this['@:{format~rs}']);
        if (!parts[0])
            parts[0] = list[0].id;
        this.digest({
            list,
            parts
        });
    },
    '@:{use.format~rs}<click>'(e) {
        let { format, to } = e.params;
        let parts = this.get('parts');
        if (parts[to] == format) {
            parts[to] = '';
        }
        else {
            parts[to] = format;
        }
        this.digest({
            parts
        });
    },
    '@:{update.format~rs}<cmchange>'(e) {
        let parts = this.get('parts');
        parts[1] = e.value.trim();
    },
    '@:{change.tab~rs}<click>'(e) {
        let { to } = e.params;
        this.digest({
            parts: [to]
        });
    },
    '@:{apply~rs}<click>'() {
        this['@:{dialog~rs}'].close();
        let parts = this.get('parts');
        let [prefix, ...rest] = parts;
        for (let i = rest.length; i--;) {
            if (rest[i] == null) {
                rest[i] = '';
            }
        }
        this['@:{done.callback~rs}'](prefix + ':' + rest.join(''));
    },
    '@:{close~rs}<click>'() {
        this['@:{dialog~rs}'].close();
    }
});

});