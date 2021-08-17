/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-svg/mod",["magix5","../../provider/ebase","../../designer/transform","../../designer/const","../mx-number/index"],(require,exports,module)=>{
require("../mx-number/index");
let $quick_lx_static_text;
let $quick_my_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-margin-bottom-4',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let ebase_1 = require("../../provider/ebase");
let transform_1 = require("../../designer/transform");
let const_1 = require("../../designer/const");
let { View, dispatch, inside } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	points,
	props,
	disabled,
	step,
	fixed,
	read,}=$dataFromView,
$$_class,
$vnode_2,
$$_mx5$_view,
$vnode_1,
$text;
$__line=1;$__art="{{each points as p i}}";$__ctrl="for(let $q_c_qzabfnqs=points.length,i=0;i<$q_c_qzabfnqs;i++){let p=points[i];";
for(let $q_c_qzabfnqs=points.length,i=0;i<$q_c_qzabfnqs;i+=1){
let p=points[i];
$__line=2;$__art="{{if props[p+\\'X\\']!=null}}";$__ctrl="if(props[p+'X']!=null){";
if(props[p+'X']!=null){
$vnode_2=[$quick_lx_static_text||($quick_lx_static_text=$createVNode(0,'调整点：'))];;$$_class='rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr'+($__line=4,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_assets_index_less_-cursor-not-allowed'+($__line=4,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_assets_index_less_-cursor-pointer'+($__line=4,$__art='{{if props[\'@:{focus.mod~rs}\']==p}}','');$__ctrl='<%if(props[\'@:{focus.mod~rs}\']==p){%>';if(props['@:{focus.mod~rs}']==p){;$$_class+=' rd-_assets_index_less_-props-item-title-selected'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('span',{'mx5-pointerover': $viewId+'@:{focus.mod.point~rs}({key:\''+($__line=4,$__art='{{=p}}',$__ctrl='<%=$encodeQuote(p)%>',($encodeQuote(p)))+'\'})','class': $$_class,},$vnode_2)];;$$_mx5$_view='gallery/mx-number/index?'+($__line=5,$__art='{{=props[p+\'Type\']!=\'int\'}}','');$__ctrl='<%if((props[p+\'Type\']!=\'int\')){%>';if((props[p+'Type']!='int')){;$$_mx5$_view+='min=0.00';$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=5,$__art='{{=props[p+\'Type\']!=\'int\'}}','');$__ctrl='<%if((props[p+\'Type\']!=\'int\')){%>';if((props[p+'Type']!='int')){;$$_mx5$_view+='&max=1.00';$__ctrl='<%}%>';};$$_mx5$_view+='&step='+($__line=5,$__art='{{#props[p+\'Type\']!=\'int\'?0.01:step}}',$__ctrl='<%#props[p+\'Type\']!=\'int\'?0.01:step,\'auto_key_props.points.\'+(i)+\'.step.props[p+\\\'Type\\\']!%3D\\\'int\\\'%3F0.01:step\'%>',$keyOf($refData,props[p+'Type']!='int'?0.01:step,'auto_key_props.points.'+(i)+'.step.props[p+\'Type\']!%3D\'int\'%3F0.01:step'))+'&fixed='+($__line=5,$__art='{{#props[p+\'Type\']!=\'int\'?2:fixed}}',$__ctrl='<%#props[p+\'Type\']!=\'int\'?2:fixed,\'auto_key_props.points.\'+(i)+\'.fixed.props[p+\\\'Type\\\']!%3D\\\'int\\\'%3F2:fixed\'%>',$keyOf($refData,props[p+'Type']!='int'?2:fixed,'auto_key_props.points.'+(i)+'.fixed.props[p+\'Type\']!%3D\'int\'%3F2:fixed'))+'&value='+($__line=5,$__art='{{#props[p+\'Type\']!=\'int\'?props[p+\'X\']:read(props[p+\'X\'])}}',$__ctrl='<%#props[p+\'Type\']!=\'int\'?props[p+\'X\']:read(props[p+\'X\']),\'auto_key_props.points.\'+(i)+\'.read.props[p+\\\'Type\\\']!%3D\\\'int\\\'%3Fprops[p+\\\'X\\\']:read(props[p+\\\'X\\\'])\'%>',$keyOf($refData,props[p+'Type']!='int'?props[p+'X']:read(props[p+'X']),'auto_key_props.points.'+(i)+'.read.props[p+\'Type\']!%3D\'int\'%3Fprops[p+\'X\']:read(props[p+\'X\'])'));$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,points,step,fixed','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=5,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-svg/mod.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.mod.point~rs}({i:'+($__line=5,$__art='{{=i+1}}',$__ctrl='<%=i+1%>',(i+1))+',type:\'X\'})','mx5-view': $$_mx5$_view,}));$vnode_0.push($createVNode('div',$quick_my_0_static_attr,$vnode_1));
}$__line=8;$__art="{{if props[p+\\'Y\\']!=null}}";$__ctrl="if(props[p+'Y']!=null){";
if(props[p+'Y']!=null){
$text=($__line=11,$__art='{{if props[p+\'X\']==null}}','');$__ctrl='<%if(props[p+\'X\']==null){%>';if(props[p+'X']==null){;$text+=' 调整点： '+($__line=13,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2=[$createVNode(0,$text)];;$$_class='rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr'+($__line=10,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_assets_index_less_-cursor-not-allowed'+($__line=10,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_assets_index_less_-cursor-pointer'+($__line=10,$__art='{{if props[\'@:{focus.mod~rs}\']==p&&props[p+\'X\']==null}}','');$__ctrl='<%if(props[\'@:{focus.mod~rs}\']==p&&props[p+\'X\']==null){%>';if(props['@:{focus.mod~rs}']==p&&props[p+'X']==null){;$$_class+=' rd-_assets_index_less_-props-item-title-selected'+($__line=10,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=10,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('span',{'mx5-pointerover': (($temp_var=($__line=10,$__art='{{=props[p+\'X\']==null}}',$__ctrl='<%=props[p+\'X\']==null%>',props[p+'X']==null),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-pointerover" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-svg/mod.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{focus.mod.point~rs}({key:\''+($__line=10,$__art='{{=p}}',$__ctrl='<%=$encodeQuote(p)%>',($encodeQuote(p)))+'\'})'),'class': $$_class,},$vnode_2)];;$$_mx5$_view='gallery/mx-number/index?'+($__line=15,$__art='{{=props[p+\'Type\']!=\'int\'}}','');$__ctrl='<%if((props[p+\'Type\']!=\'int\')){%>';if((props[p+'Type']!='int')){;$$_mx5$_view+='min=0.00';$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=15,$__art='{{=props[p+\'Type\']!=\'int\'}}','');$__ctrl='<%if((props[p+\'Type\']!=\'int\')){%>';if((props[p+'Type']!='int')){;$$_mx5$_view+='&max=1.00';$__ctrl='<%}%>';};$$_mx5$_view+='&step='+($__line=15,$__art='{{#props[p+\'Type\']!=\'int\'?0.01:step}}',$__ctrl='<%#props[p+\'Type\']!=\'int\'?0.01:step,\'auto_key_props.points.\'+(i)+\'.step.props[p+\\\'Type\\\']!%3D\\\'int\\\'%3F0.01:step\'%>',$keyOf($refData,props[p+'Type']!='int'?0.01:step,'auto_key_props.points.'+(i)+'.step.props[p+\'Type\']!%3D\'int\'%3F0.01:step'))+'&fixed='+($__line=15,$__art='{{#props[p+\'Type\']!=\'int\'?2:fixed}}',$__ctrl='<%#props[p+\'Type\']!=\'int\'?2:fixed,\'auto_key_props.points.\'+(i)+\'.fixed.props[p+\\\'Type\\\']!%3D\\\'int\\\'%3F2:fixed\'%>',$keyOf($refData,props[p+'Type']!='int'?2:fixed,'auto_key_props.points.'+(i)+'.fixed.props[p+\'Type\']!%3D\'int\'%3F2:fixed'))+'&value='+($__line=15,$__art='{{#props[p+\'Type\']!=\'int\'?props[p+\'Y\']:read(props[p+\'Y\'])}}',$__ctrl='<%#props[p+\'Type\']!=\'int\'?props[p+\'Y\']:read(props[p+\'Y\']),\'auto_key_props.points.\'+(i)+\'.read.props[p+\\\'Type\\\']!%3D\\\'int\\\'%3Fprops[p+\\\'Y\\\']:read(props[p+\\\'Y\\\'])\'%>',$keyOf($refData,props[p+'Type']!='int'?props[p+'Y']:read(props[p+'Y']),'auto_key_props.points.'+(i)+'.read.props[p+\'Type\']!%3D\'int\'%3Fprops[p+\'Y\']:read(props[p+\'Y\'])'));$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,points,step,fixed','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=15,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-svg/mod.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.mod.point~rs}({i:'+($__line=15,$__art='{{=i+1}}',$__ctrl='<%=i+1%>',(i+1))+',type:\'Y\'})','mx5-view': $$_mx5$_view,}));$vnode_0.push($createVNode('div',$quick_my_0_static_attr,$vnode_1));
}
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-svg/mod.html'; throw msg; }  } ,
    assign(extra) {
        let { props, disabled } = extra;
        this.set({
            disabled,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            points: ebase_1["@:{get.mod.point~rs}"](props),
            props
        });
    },
    render() {
        this.digest();
    },
    '@:{update.mod.point~rs}<input>'(e) {
        let { i, type } = e.params;
        let props = this.get('props');
        let v = e.value;
        if (props['mod' + i + 'Type'] == 'int') {
            v = transform_1["@:{transform#to.real.value~rs}"](v);
        }
        console.log(v);
        props['mod' + i + type] = v;
        dispatch(this.root, 'change');
    },
    '@:{focus.mod.point~rs}<pointerover>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let { key } = e.params;
            let props = this.get('props');
            props['@:{focus.mod~rs}'] = key;
            dispatch(this.root, 'change', {
                '@:{svg.control.point~rs}': 1
            });
        }
    },
});

});