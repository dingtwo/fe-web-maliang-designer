/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/6b",["51","../5r/index"],(require,exports,module)=>{

/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let index_1 = require("../5r/index");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	panels,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;

for(let $q_c_ajezehl=panels.length,i=0;i<$q_c_ajezehl;i+=1){
let p=panels[i];

if(p.icon){
$vnode_1=[$createVNode(0,(p.icon),1)];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(p['gd']){;$$_class+=' rd-jw';};$vnode_0.push($createVNode('i',{'mx5-click': $viewId+'_hK({id:\''+($encodeQuote(p.id))+'\'})','title': (i18n(p['gd']?'hU':'hV',p.title,i+1)),'class': $$_class,},$vnode_1));
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('gD', update);
        this.on('destroy', () => {
            State.off('gD', update);
        });
    },
    render() {
        this.digest({
            panels: index_1["_hI"]()
        });
    },
    '_hK<click>'(e) {
        let { id } = e.params;
        index_1["_hK"](id);
    }
});

});