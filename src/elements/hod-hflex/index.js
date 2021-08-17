/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/hod-hflex/index",["magix5"],(require,exports,module)=>{
let $quick_lp_0_static_attr={'class': 'rd-_assets_index_less_-flex',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{each props.rows as row ri}}";$__ctrl="for(let $q_a_wubrnxpsp=props.rows,$q_c_qkrgbiws=$q_a_wubrnxpsp.length,ri=0;ri<$q_c_qkrgbiws;ri++){let row=$q_a_wubrnxpsp[ri];";
for(let $q_a_wubrnxpsp=props.rows,$q_c_qkrgbiws=$q_a_wubrnxpsp.length,ri=0;ri<$q_c_qkrgbiws;ri+=1){
let row=$q_a_wubrnxpsp[ri];
$vnode_2=[];$__line=4;$__art="{{each row.cols as col ci}}";$__ctrl="for(let $q_a_wylawnqs=row.cols,$q_c_gcmikfh=$q_a_wylawnqs.length,ci=0;ci<$q_c_gcmikfh;ci++){let col=$q_a_wylawnqs[ci];";
for(let $q_a_wylawnqs=row.cols,$q_c_gcmikfh=$q_a_wylawnqs.length,ci=0;ci<$q_c_gcmikfh;ci+=1){
let col=$q_a_wylawnqs[ci];
$vnode_3=[];$__line=6;$__art="{{each col.elements as e}}";$__ctrl="for(let $q_a_jwyinsihb=col.elements,$q_c_mbsompsq=$q_a_jwyinsihb.length,$q_key_iqipkynx=0;$q_key_iqipkynx<$q_c_mbsompsq;$q_key_iqipkynx++){let e=$q_a_jwyinsihb[$q_key_iqipkynx];";
for(let $q_a_jwyinsihb=col.elements,$q_c_mbsompsq=$q_a_jwyinsihb.length,$q_key_iqipkynx=0;$q_key_iqipkynx<$q_c_mbsompsq;$q_key_iqipkynx+=1){
let e=$q_a_jwyinsihb[$q_key_iqipkynx];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','mx5-view': 'elements/'+($__line=7,$__art='{{=e.type}}',$__ctrl='<%=e.type%>',(e.type))+'/index?props='+($__line=7,$__art='{{#e.props}}',$__ctrl='<%#e.props,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+($q_key_iqipkynx)+\'.e.props\'%>',$keyOf($refData,e.props,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.elements.'+($q_key_iqipkynx)+'.e.props'))+'&unit='+($__line=7,$__art='{{#unit}}',$__ctrl='<%#unit,\'auto_key_unit\'%>',$keyOf($refData,unit,'auto_key_unit')),}));
}$vnode_2.push($createVNode('div',{'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pr rd-_assets_index_less_-wp100','style': 'height:'+($__line=5,$__art='{{=row.height}}',$__ctrl='<%=row.height%>',(row.height))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=5,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-top:'+($__line=5,$__art='{{=col.borderTopStyle}}',$__ctrl='<%=col.borderTopStyle%>',(col.borderTopStyle))+' '+($__line=5,$__art='{{=col.borderTopWidth}}',$__ctrl='<%=col.borderTopWidth%>',(col.borderTopWidth))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=5,$__art='{{=col.borderTopColor}}',$__ctrl='<%=col.borderTopColor%>',(col.borderTopColor))+';border-right:'+($__line=5,$__art='{{=col.borderRightStyle}}',$__ctrl='<%=col.borderRightStyle%>',(col.borderRightStyle))+' '+($__line=5,$__art='{{=col.borderRightWidth}}',$__ctrl='<%=col.borderRightWidth%>',(col.borderRightWidth))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=5,$__art='{{=col.borderRightColor}}',$__ctrl='<%=col.borderRightColor%>',(col.borderRightColor))+';border-bottom:'+($__line=5,$__art='{{=col.borderBottomStyle}}',$__ctrl='<%=col.borderBottomStyle%>',(col.borderBottomStyle))+' '+($__line=5,$__art='{{=col.borderBottomWidth}}',$__ctrl='<%=col.borderBottomWidth%>',(col.borderBottomWidth))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=5,$__art='{{=col.borderBottomColor}}',$__ctrl='<%=col.borderBottomColor%>',(col.borderBottomColor))+';border-left:'+($__line=5,$__art='{{=col.borderLeftStyle}}',$__ctrl='<%=col.borderLeftStyle%>',(col.borderLeftStyle))+' '+($__line=5,$__art='{{=col.borderLeftWidth}}',$__ctrl='<%=col.borderLeftWidth%>',(col.borderLeftWidth))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=5,$__art='{{=col.borderLeftColor}}',$__ctrl='<%=col.borderLeftColor%>',(col.borderLeftColor))+';border-radius:'+($__line=5,$__art='{{=col.borderLeftTopRadius}}',$__ctrl='<%=col.borderLeftTopRadius%>',(col.borderLeftTopRadius))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=5,$__art='{{=col.borderRightTopRadius}}',$__ctrl='<%=col.borderRightTopRadius%>',(col.borderRightTopRadius))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=5,$__art='{{=col.borderRightBottomRadius}}',$__ctrl='<%=col.borderRightBottomRadius%>',(col.borderRightBottomRadius))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=5,$__art='{{=col.borderLeftBottomRadius}}',$__ctrl='<%=col.borderLeftBottomRadius%>',(col.borderLeftBottomRadius))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_lp_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-flex-direction-column rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/hod-hflex/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});