/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-svg/kp",["magix5","../../provider/ebase","../../designer/transform","../../designer/const","../mx-number/index"],(require,exports,module)=>{
require("../mx-number/index");
let $quick_kk_static_text;
let $quick_lq_static_text;
let $quick_ms_2_static_node;
let $quick_lr_static_text;
let $quick_ms_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-margin-bottom-4',};
let $quick_ms_1_static_attr={'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-margin-bottom-4',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let ebase_1 = require("../../provider/ebase");
let transform_1 = require("../../designer/transform");
let const_1 = require("../../designer/const");
let { has, View, dispatch, inside } = magix_1;
let { random } = Math;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	points,
	disabled,
	props,
	mod,
	step,
	fixed,
	read,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
($__line=1,$__art='{{set total=points.length}}','');$__ctrl='<%let total=points.length;%>';let total=points.length;;$__line=2;$__art="{{each points as p i}}";$__ctrl="for(let $q_c_fzzxoywkgw=points.length,i=0;i<$q_c_fzzxoywkgw;i++){let p=points[i];";
for(let $q_c_fzzxoywkgw=points.length,i=0;i<$q_c_fzzxoywkgw;i+=1){
let p=points[i];
$vnode_2=[];$__line=5;$__art="{{if total>3&&mod}}";$__ctrl="if(total>3&&mod){";
if(total>3&&mod){
$vnode_3=[$quick_kk_static_text||($quick_kk_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-mr5 rd-_assets_index_less_-fontsize-14'+($__line=6,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_assets_index_less_-color-999'+($__line=6,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_assets_index_less_-gray'+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('span',{'mx5-click': (($temp_var=($__line=6,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-svg/kp.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{remove.key.point~rs}({i:'+($__line=6,$__art='{{=i+1}}',$__ctrl='<%=i+1%>',(i+1))+'})'),'title': '删除控制点','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_lq_static_text||($quick_lq_static_text=$createVNode(0,'控制点：')));;$$_class='rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr'+($__line=4,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_assets_index_less_-cursor-not-allowed'+($__line=4,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_assets_index_less_-cursor-pointer'+($__line=4,$__art='{{if props[\'@:{focus.ctrl~rs}\']==p}}','');$__ctrl='<%if(props[\'@:{focus.ctrl~rs}\']==p){%>';if(props['@:{focus.ctrl~rs}']==p){;$$_class+=' rd-_assets_index_less_-props-item-title-selected'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('span',{'mx5-pointerover': $viewId+'@:{focus.key.point~rs}({key:\''+($__line=4,$__art='{{=p}}',$__ctrl='<%=$encodeQuote(p)%>',($encodeQuote(p)))+'\'})','class': $$_class,},$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,props,points','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=10,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-svg/kp.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.key.point~rs}({i:'+($__line=10,$__art='{{=i+1}}',$__ctrl='<%=i+1%>',(i+1))+',type:\'X\'})','mx5-view': 'gallery/mx-number/index?step='+($__line=10,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&fixed='+($__line=10,$__art='{{#fixed}}',$__ctrl='<%#fixed,\'auto_key_fixed\'%>',$keyOf($refData,fixed,'auto_key_fixed'))+'&value='+($__line=10,$__art='{{#read(props[p+\'X\'])}}',$__ctrl='<%#read(props[p+\'X\']),\'auto_key_read.props.points.\'+(i)+\'.read(props[p+\\\'X\\\'])\'%>',$keyOf($refData,read(props[p+'X']),'auto_key_read.props.points.'+(i)+'.read(props[p+\'X\'])')),})];$vnode_0.push($createVNode('div',$quick_ms_0_static_attr,$vnode_1));
if($quick_ms_2_static_node){
$vnode_1=[$quick_ms_2_static_node];
}else{
$vnode_1=[$quick_ms_2_static_node=$createVNode('span',{'_': 'hN','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,props,points','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=14,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-svg/kp.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.key.point~rs}({i:'+($__line=14,$__art='{{=i+1}}',$__ctrl='<%=i+1%>',(i+1))+',type:\'Y\'})','mx5-view': 'gallery/mx-number/index?step='+($__line=14,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&fixed='+($__line=14,$__art='{{#fixed}}',$__ctrl='<%#fixed,\'auto_key_fixed\'%>',$keyOf($refData,fixed,'auto_key_fixed'))+'&value='+($__line=14,$__art='{{#read(props[p+\'Y\'])}}',$__ctrl='<%#read(props[p+\'Y\']),\'auto_key_read.props.points.\'+(i)+\'.read(props[p+\\\'Y\\\'])\'%>',$keyOf($refData,read(props[p+'Y']),'auto_key_read.props.points.'+(i)+'.read(props[p+\'Y\'])')),}));$vnode_0.push($createVNode('div',$quick_ms_1_static_attr,$vnode_1));
}$__line=17;$__art="{{if mod}}";$__ctrl="if(mod){";
if(mod){
$vnode_1=[$quick_lr_static_text||($quick_lr_static_text=$createVNode(0,'添加控制点'))];$vnode_0.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fr rd-_assets_index_less_-tc','disabled': ($temp_var=($__line=18,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-svg/kp.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-click': $viewId+'@:{add.key.point~rs}()',},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-svg/kp.html'; throw msg; }  } ,
    init() {
        this.set({
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"]
        });
    },
    assign(extra) {
        let { props, disabled, mod } = extra;
        this.set({
            disabled,
            points: ebase_1["@:{get.key.point~rs}"](props),
            props,
            mod
        });
    },
    render() {
        this.digest();
    },
    '@:{update.key.point~rs}<input>'(e) {
        let { i, type } = e.params;
        let props = this.get('props');
        props['ctrl' + i + type] = transform_1["@:{transform#to.real.value~rs}"](e.value);
        dispatch(this.root, 'change');
    },
    '@:{add.key.point~rs}<click>'() {
        let props = this.get('props');
        let keyPoints = ebase_1["@:{get.key.point~rs}"](props);
        let { x, y, width, height } = props;
        let nextIndex = keyPoints.length + 1;
        let nextX = x + (width * random());
        let nextY = y + (height * random());
        props[`ctrl${nextIndex}X`] = nextX;
        props[`ctrl${nextIndex}Y`] = nextY;
        delete props['@:{cached.key.points~rs}'];
        delete props['@:{cached.move.props~rs}'];
        dispatch(this.root, 'change');
    },
    '@:{remove.key.point~rs}<click>'(e) {
        let props = this.get('props');
        let { i } = e.params;
        let next = i + 1;
        while (1) {
            if (has(props, `ctrl${next}X`)) {
                props[`ctrl${i}X`] = props[`ctrl${next}X`];
                props[`ctrl${i}Y`] = props[`ctrl${next}Y`];
                next++;
                i++;
            }
            else {
                break;
            }
        }
        delete props[`ctrl${i}X`];
        delete props[`ctrl${i}Y`];
        delete props['@:{cached.key.points~rs}'];
        delete props['@:{cached.move.props~rs}'];
        dispatch(this.root, 'change');
    },
    '@:{focus.key.point~rs}<pointerover>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let { key } = e.params;
            let props = this.get('props');
            props['@:{focus.ctrl~rs}'] = key;
            dispatch(this.root, 'change', {
                '@:{svg.control.point~rs}': 1
            });
        }
    },
});

});