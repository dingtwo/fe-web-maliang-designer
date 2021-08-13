/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/video/index",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{if props.src}}";$__ctrl="if(props.src){";
if(props.src){
$vnode_1.push($createVNode('video',{'src': ($__line=3,$__art='{{=props.src}}',$__ctrl='<%=props.src%>',(props.src)),'poster': ($__line=3,$__art='{{=props.poster}}',$__ctrl='<%=props.poster%>',(props.poster)),'controls': ($temp_var=($__line=3,$__art='{{=props.controls}}',$__ctrl='<%=props.controls%>',props.controls),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"controls" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/video/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'autoplay': ($temp_var=($__line=3,$__art='{{=props.autoplay}}',$__ctrl='<%=props.autoplay%>',props.autoplay),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"autoplay" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/video/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'loop': ($temp_var=($__line=3,$__art='{{=props.loop}}',$__ctrl='<%=props.loop%>',props.loop),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"loop" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/video/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'muted': ($temp_var=($__line=3,$__art='{{=props.muted}}',$__ctrl='<%=props.muted%>',props.muted),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"muted" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/video/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'style': 'width:'+($__line=3,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=3,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),}));
}else{
$vnode_2=[$createVNode(0,($__line=6,$__art='{{=i18n(\'@:{lang#elements.video.empty.tip~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#elements.video.empty.tip~rs}\')%>',(i18n('@:{lang#elements.video.empty.tip~rs}'))))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-tc','style': 'width:'+($__line=5,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=5,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';line-height:'+($__line=5,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/video/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});