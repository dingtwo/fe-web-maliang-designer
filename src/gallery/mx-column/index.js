/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/69/index",["4e","../../4d/4g","../60/index"],(require,exports,module)=>{
require("../60/index");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let { applyStyle, View, dispatch } = magix_1;
applyStyle("rd-dW",".rd-ia{border:1px solid #e6e6e6;border-radius:2px;padding:0 4px}.rd-ib{background:#f5f5f5}");
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

for(let $q_c_yafydltyp=fields.length,$q_key_gvlcqzkji=0;$q_key_gvlcqzkji<$q_c_yafydltyp;$q_key_gvlcqzkji+=1){
let field=fields[$q_key_gvlcqzkji];
$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'min,fixed,step,max,columns,fields','mx5-input': $viewId+'_jp({id:\''+($encodeQuote(field.id))+'\'})','mx5-change': $viewId+'_hE()','disabled': (disabled),'class': 'rd-dH rd-em','mx5-view': '4l/60/index?min='+$keyOf($refData,min,'cH')+'&fixed='+$keyOf($refData,fixed,'cI')+'&step='+$keyOf($refData,step,'cJ')+'&max='+$keyOf($refData,max,'cK')+'&value='+$keyOf($refData,columns[field.id],'cL.'+($q_key_gvlcqzkji)+'.cM'),}));
}
}else{
$vnode_1=[$createVNode(0,(i18n('jX')))];;$$_class='rd-ia rd-fn';if(disabled){;$$_class+=' rd-ib';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        let { columns, min, max, fields, disabled } = data;
        this.set({
            disabled,
            min,
            max,
            step: const_1["ej"],
            fixed: const_1["ek"],
            columns,
            fields
        });
    },
    '_jo'() {
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
    '_jp<input>'(e) {
        this['_hR'](e);
        let columns = this.get('columns');
        let { id } = e.params;
        columns[id] = e.value;
        this['_jo']();
    }
});

});