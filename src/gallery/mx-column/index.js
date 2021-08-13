/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/77/index",["5c","../../5b/5e","../6u/index"],(require,exports,module)=>{
require("../6u/index");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let { applyStyle, View, dispatch } = magix_1;
applyStyle("rd-mj",".rd-qy{border:1px solid #e6e6e6;border-radius:2px;padding:0 4px}.rd-qz{background:#f5f5f5}");
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

for(let $q_c_ufpzbhuv=fields.length,$q_key_jxhqyvui=0;$q_key_jxhqyvui<$q_c_ufpzbhuv;$q_key_jxhqyvui+=1){
let field=fields[$q_key_jxhqyvui];
$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'min,fixed,step,max,columns,fields','mx5-input': $viewId+'_rN({id:\''+($encodeQuote(field.id))+'\'})','mx5-change': $viewId+'_p2()','disabled': (disabled),'class': 'rd-l5 rd-mK','mx5-view': '5j/6u/index?min='+$keyOf($refData,min,'i!')+'&fixed='+$keyOf($refData,fixed,'i@')+'&step='+$keyOf($refData,step,'i$')+'&max='+$keyOf($refData,max,'i^')+'&value='+$keyOf($refData,columns[field.id],'i*.'+($q_key_jxhqyvui)+'.i{'),}));
}
}else{
$vnode_1=[$createVNode(0,(i18n('sk')))];;$$_class='rd-qy rd-nL';if(disabled){;$$_class+=' rd-qz';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        let { columns, min, max, fields, disabled } = data;
        this.set({
            disabled,
            min,
            max,
            step: const_1["mH"],
            fixed: const_1["mI"],
            columns,
            fields
        });
    },
    '_rM'() {
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
    '_rN<input>'(e) {
        this['_qe'](e);
        let columns = this.get('columns');
        let { id } = e.params;
        columns[id] = e.value;
        this['_rM']();
    }
});

});