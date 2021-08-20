/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-column/index",["magix5","../../designer/const","../mx-number/index"],(require,exports,module)=>{
require("../mx-number/index");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let { applyStyle, View, dispatch } = magix_1;
applyStyle("rd-_gallery_mx-column_index_less_","\n.rd-_gallery_mx-column_index_less_-tip {\nborder-radius:2px;\nborder:solid 1px #e6e6e6;\npadding:0 4px;\n}\n.rd-_gallery_mx-column_index_less_-notallowed {\nbackground:#f5f5f5;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
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
$__line=1;$__art="{{if fields.length}}";$__ctrl="if(fields.length){";
if(fields.length){
$__line=2;$__art="{{each fields as field}}";$__ctrl="for(let $q_c_qpzviejl=fields.length,$q_key_bxfjapu=0;$q_key_bxfjapu<$q_c_qpzviejl;$q_key_bxfjapu++){let field=fields[$q_key_bxfjapu];";
for(let $q_c_qpzviejl=fields.length,$q_key_bxfjapu=0;$q_key_bxfjapu<$q_c_qpzviejl;$q_key_bxfjapu+=1){
let field=fields[$q_key_bxfjapu];
$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'min,fixed,step,max,columns,fields','mx5-input': $viewId+'@:{update.width~rs}({id:\''+($__line=3,$__art='{{=field.id}}',$__ctrl='<%=$encodeQuote(field.id)%>',($encodeQuote(field.id)))+'\'})','mx5-change': $viewId+'@:{stop~rs}()','disabled': ($temp_var=($__line=3,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-column/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr','mx5-view': 'gallery/mx-number/index?min='+($__line=3,$__art='{{#min}}',$__ctrl='<%#min,\'auto_key_min\'%>',$keyOf($refData,min,'auto_key_min'))+'&fixed='+($__line=3,$__art='{{#fixed}}',$__ctrl='<%#fixed,\'auto_key_fixed\'%>',$keyOf($refData,fixed,'auto_key_fixed'))+'&step='+($__line=3,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&max='+($__line=3,$__art='{{#max}}',$__ctrl='<%#max,\'auto_key_max\'%>',$keyOf($refData,max,'auto_key_max'))+'&value='+($__line=3,$__art='{{#columns[field.id]}}',$__ctrl='<%#columns[field.id],\'auto_key_columns.fields.\'+($q_key_bxfjapu)+\'.columns[field.id]\'%>',$keyOf($refData,columns[field.id],'auto_key_columns.fields.'+($q_key_bxfjapu)+'.columns[field.id]')),}));
}
}else{
$vnode_1=[$createVNode(0,($__line=6,$__art='{{=i18n(\'@:{lang#mx-gallery.need.bind.data~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.need.bind.data~rs}\')%>',(i18n('@:{lang#mx-gallery.need.bind.data~rs}'))))];;$$_class='rd-_gallery_mx-column_index_less_-tip rd-_assets_index_less_-color-999'+($__line=6,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-column_index_less_-notallowed'+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-column/index.html'; throw msg; }  } ,
    assign(data) {
        let { columns, min, max, fields, disabled } = data;
        this.set({
            disabled,
            min,
            max,
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            columns,
            fields
        });
    },
    '@:{notify.change~rs}'() {
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
    '@:{update.width~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let columns = this.get('columns');
        let { id } = e.params;
        columns[id] = e.value;
        this['@:{notify.change~rs}']();
    }
});

});