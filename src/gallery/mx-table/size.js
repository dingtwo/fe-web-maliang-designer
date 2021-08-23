/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-table/size",["magix5","../../designer/transform","../../provider/table","../../designer/const","../../provider/cell","../mx-number/index"],(require,exports,module)=>{
require("../mx-number/index");
let $quick_lu_static_text;
let $quick_my_2_static_node;
let $quick_my_0_static_attr={'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-margin-top-4',};
let $quick_my_1_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-label',};
let $special_2={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let transform_1 = require("../../designer/transform");
let table_1 = require("../../provider/table");
let const_1 = require("../../designer/const");
let cell_1 = require("../../provider/cell");
let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	disabled,
	step,
	fixed,
	minWidth,
	read,
	cell,
	minHeight,
	useAH,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,minWidth,cell','disabled': ($temp_var=($__line=1,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/size.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'class': 'rd-_assets_index_less_-input rd-_assets_index_less_-margin-bottom-4 rd-_assets_index_less_-pr','mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.cell.width~rs}()','mx5-view': 'gallery/mx-number/index?step='+($__line=1,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&fixed='+($__line=1,$__art='{{#fixed}}',$__ctrl='<%#fixed,\'auto_key_fixed\'%>',$keyOf($refData,fixed,'auto_key_fixed'))+'&min='+($__line=1,$__art='{{#minWidth}}',$__ctrl='<%#minWidth,\'auto_key_minWidth\'%>',$keyOf($refData,minWidth,'auto_key_minWidth'))+'&value='+($__line=1,$__art='{{#read(cell.width)}}',$__ctrl='<%#read(cell.width),\'auto_key_read.cell.read(cell.width)\'%>',$keyOf($refData,read(cell.width),'auto_key_read.cell.read(cell.width)')),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,minHeight,cell','disabled': ($temp_var=($__line=2,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/size.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.cell.height~rs}()','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr','mx5-view': 'gallery/mx-number/index?step='+($__line=2,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&fixed='+($__line=2,$__art='{{#fixed}}',$__ctrl='<%#fixed,\'auto_key_fixed\'%>',$keyOf($refData,fixed,'auto_key_fixed'))+'&min='+($__line=2,$__art='{{#minHeight}}',$__ctrl='<%#minHeight,\'auto_key_minHeight\'%>',$keyOf($refData,minHeight,'auto_key_minHeight'))+'&value='+($__line=2,$__art='{{#read(cell.height)}}',$__ctrl='<%#read(cell.height),\'auto_key_read.cell.read(cell.height)\'%>',$keyOf($refData,read(cell.height),'auto_key_read.cell.read(cell.height)')),}));$__line=3;$__art="{{if useAH}}";$__ctrl="if(useAH){";
if(useAH){
$vnode_1=[$quick_lu_static_text||($quick_lu_static_text=$createVNode(0,'内容撑高：'))];$vnode_2=[$createVNode('input',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-switch-input','type': 'checkbox','checked': ($temp_var=($__line=7,$__art='{{=!cell.fixedHeight}}',$__ctrl='<%=!cell.fixedHeight%>',!cell.fixedHeight),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/size.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'disabled': ($temp_var=($__line=7,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/size.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{update.auto.height~rs}()',},1,$special_2)];
if($quick_my_2_static_node){
$vnode_2.push($quick_my_2_static_node);
}else{
$vnode_2.push($quick_my_2_static_node=$createVNode('i',{'_': 'hN','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-switch-button rd-_assets_index_less_-unselectable',}));
}
$vnode_1.push($createVNode('label',$quick_my_1_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_my_0_static_attr,$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-table/size.html'; throw msg; }  } ,
    init() {
        this.set({
            minWidth: () => const_1["@:{const#to.unit~rs}"](cell_1['@:{min.width~rs}']),
            minHeight: () => const_1["@:{const#to.unit~rs}"](cell_1['@:{min.height~rs}']),
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"]
        });
    },
    assign(data) {
        let { props, disabled } = data;
        let { rows, focusRow, focusCol } = props;
        if (focusRow == -1) {
            focusRow = 0;
        }
        if (focusCol == -1) {
            focusCol = 0;
        }
        let cell = rows[focusRow].cols[focusCol];
        this.set({
            useAH: data.ah,
            props,
            disabled,
            cell,
            rows,
            focusRow,
            focusCol
        });
    },
    render() {
        this.digest();
    },
    '@:{update.cell.width~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let props = this.get('props');
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.width = transform_1["@:{transform#to.real.value~rs}"](e.value);
        table_1["@:{table.provider#update.cell.size~rs}"](props, cell);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{update.cell.height~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let props = this.get('props');
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.height = transform_1["@:{transform#to.real.value~rs}"](e.value);
        table_1["@:{table.provider#update.cell.size~rs}"](props, cell);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{update.auto.height~rs}<change>'(e) {
        let rows = this.get('rows');
        let cell = this.get('cell');
        let checked = e.eventTarget.checked;
        cell.fixedHeight = !checked;
        dispatch(this.root, 'change', {
            rows
        });
    }
});

});