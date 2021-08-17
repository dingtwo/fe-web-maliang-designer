/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("standalone/page",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	page,
	unit,
	elements,}=$dataFromView,
$$_style,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{each elements as e}}";$__ctrl="for(let $q_c_xtlsjg=elements.length,$q_key_zpdugak=0;$q_key_zpdugak<$q_c_xtlsjg;$q_key_zpdugak++){let e=elements[$q_key_zpdugak];";
for(let $q_c_xtlsjg=elements.length,$q_key_zpdugak=0;$q_key_zpdugak<$q_c_xtlsjg;$q_key_zpdugak+=1){
let e=elements[$q_key_zpdugak];
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'elements','mx5-view': 'elements/'+($__line=3,$__art='{{=e.type}}',$__ctrl='<%=e.type%>',(e.type))+'/index?props='+($__line=3,$__art='{{#e.props}}',$__ctrl='<%#e.props,\'auto_key_elements.\'+($q_key_zpdugak)+\'.e.props\'%>',$keyOf($refData,e.props,'auto_key_elements.'+($q_key_zpdugak)+'.e.props'))+'&unit='+($__line=3,$__art='{{=unit}}',$__ctrl='<%=$encodeUrl(unit)%>',($encodeUrl(unit))),}));
};$$_style='position:relative;width:'+($__line=1,$__art='{{=page.width}}',$__ctrl='<%=page.width%>',(page.width))+'px;height:'+($__line=1,$__art='{{=page.height*page.pages}}',$__ctrl='<%=page.height*page.pages%>',(page.height*page.pages))+'px;background:'+($__line=1,$__art='{{=page.background}}',$__ctrl='<%=page.background%>',(page.background))+';'+($__line=1,$__art='{{if page.backgroundImage}}','');$__ctrl='<%if(page.backgroundImage){%>';if(page.backgroundImage){;$$_style+='background-image:url('+($__line=1,$__art='{{=page.backgroundImage}}',$__ctrl='<%=page.backgroundImage%>',(page.backgroundImage))+');background-repeat:'+($__line=1,$__art='{{=page.backgroundRepeat==\'full\'?\'no-repeat\':page.backgroundRepeat}}',$__ctrl='<%=page.backgroundRepeat==\'full\'?\'no-repeat\':page.backgroundRepeat%>',(page.backgroundRepeat=='full'?'no-repeat':page.backgroundRepeat))+';background-size:'+($__line=1,$__art='{{if page.backgroundRepeat==\'full\'}}','');$__ctrl='<%if(page.backgroundRepeat==\'full\'){%>';if(page.backgroundRepeat=='full'){;$$_style+='100% 100%'+($__line=1,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+=''+($__line=1,$__art='{{=page.backgroundWidth}}',$__ctrl='<%=page.backgroundWidth%>',(page.backgroundWidth))+'px '+($__line=1,$__art='{{=page.backgroundHeight}}',$__ctrl='<%=page.backgroundHeight%>',(page.backgroundHeight))+'px;background-position:'+($__line=1,$__art='{{=page.backgroundXOffset}}',$__ctrl='<%=page.backgroundXOffset%>',(page.backgroundXOffset))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=1,$__art='{{=page.backgroundYOffset}}',$__ctrl='<%=page.backgroundYOffset%>',(page.backgroundYOffset))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:standalone/page.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    getValue() {
        let { page, elements, groups } = this.get();
        return {
            page,
            elements,
            groups
        };
    }
});

});