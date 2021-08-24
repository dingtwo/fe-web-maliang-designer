/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6s/index",["51","../../50/53","../6j/index"],(require,exports,module)=>{
require("../6j/index");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let { applyStyle, View, dispatch } = magix_1;
applyStyle("rd-gv",".rd-kK{border:1px solid #e6e6e6;border-radius:2px;padding:0 4px}.rd-kL{background:#f5f5f5}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	fields,
	min,
	fixed,
	step,
	max,
	columns,
	disabled,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;

if(fields.length){

for(let $q_c_cxhlqdh=fields.length,$q_key_fslhig=0;$q_key_fslhig<$q_c_cxhlqdh;$q_key_fslhig+=1){
let field=fields[$q_key_fslhig];
$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'min,fixed,step,max,columns,fields','mx5-input': $viewId+'_l2({id:\''+($encodeQuote(field.id))+'\'})','mx5-change': $viewId+'_kg()','disabled': (disabled),'class': 'rd-gW rd-gg','mx5-view': '58/6j/index?min='+$keyOf($refData,min,'eD')+'&fixed='+$keyOf($refData,fixed,'eE')+'&step='+$keyOf($refData,step,'eF')+'&max='+$keyOf($refData,max,'eG')+'&value='+$keyOf($refData,columns[field.id],'eH.'+($q_key_fslhig)+'.eI'),}));
}
}else{
$vnode_1=[$createVNode(0,(i18n('mv')))];;$$_class='rd-kK rd-hX';if(disabled){;$$_class+=' rd-kL';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        let { columns, min, max, fields, disabled } = data;
        this.set({
            disabled,
            min,
            max,
            step: const_1["gT"],
            fixed: const_1["gU"],
            columns,
            fields
        });
    },
    '_l1'() {
        let columns = this.get('columns');
        //console.log(columns, this.root.parentNode);
        dispatch(this.root, 'change', {
            columns
        });
    },
    render() {
        this.digest();
        //this['@:{notify.change}']();
    },
    '_l2<input>'(e) {
        this['_kt'](e);
        let columns = this.get('columns');
        let { id } = e.params;
        columns[id] = e.value;
        this['_l1']();
    }
});

});