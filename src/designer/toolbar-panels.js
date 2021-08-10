/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5o",["4e","../58/index"],(require,exports,module)=>{

/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let index_1 = require("../58/index");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	panels,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;

for(let $q_c_yfricb=panels.length,i=0;i<$q_c_yfricb;i+=1){
let p=panels[i];

if(p.icon){
$vnode_1=[$createVNode(0,(p.icon),1)];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(p['dE']){;$$_class+=' rd-gX';};$vnode_0.push($createVNode('i',{'mx5-click': $viewId+'_fa({id:\''+($encodeQuote(p.id))+'\'})','title': (i18n(p['dE']?'fk':'fl',p.title,i+1)),'class': $$_class,},$vnode_1));
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('d4', update);
        this.on('destroy', () => {
            State.off('d4', update);
        });
    },
    render() {
        this.digest({
            panels: index_1["_e9"]()
        });
    },
    '_fa<click>'(e) {
        let { id } = e.params;
        index_1["_fa"](id);
    }
});

});