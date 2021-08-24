/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("7d/page",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	page,
	unit,
	elements,}=$dataFromView,
$$_style,
$vnode_1;
$vnode_1=[];
for(let $q_c_yxevlggv=elements.length,$q_key_ghpmgalkxu=0;$q_key_ghpmgalkxu<$q_c_yxevlggv;$q_key_ghpmgalkxu+=1){
let e=elements[$q_key_ghpmgalkxu];
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'elements','mx5-view': '5m/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'eD.'+($q_key_ghpmgalkxu)+'.eE')+'&unit='+($encodeUrl(unit)),}));
};$$_style='position:relative;width:'+(page.width)+'px;height:'+(page.height*page.pages)+'px;background:'+(page.background)+';';if(page.backgroundImage){;$$_style+='background-image:url('+(page.backgroundImage)+');background-repeat:'+(page.backgroundRepeat=='full'?'no-repeat':page.backgroundRepeat)+';background-size:';if(page.backgroundRepeat=='full'){;$$_style+='100% 100%';}else{;$$_style+=''+(page.backgroundWidth)+'px '+(page.backgroundHeight)+'px;background-position:'+(page.backgroundXOffset)+(unit)+' '+(page.backgroundYOffset)+(unit);};};$vnode_0=[$createVNode('div',{'style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
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