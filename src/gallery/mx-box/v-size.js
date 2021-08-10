/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-box/v-size",["magix5","../../designer/transform","../../provider/cell","../../designer/const","../mx-number/index"],(require,exports,module)=>{
require("../mx-number/index");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let transform_1 = require("../../designer/transform");
let cell_1 = require("../../provider/cell");
let const_1 = require("../../designer/const");
let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	minWidth,
	fixed,
	step,
	read,
	row,
	minHeight,
	cell,}=$dataFromView;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'$': 'minWidth,fixed,step,row','disabled': ($temp_var=($__line=1,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/v-size.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'class': 'rd-_assets_index_less_-input rd-_assets_index_less_-margin-bottom-4 rd-_assets_index_less_-pr','mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.row.width~rs}()','mx5-view': 'gallery/mx-number/index?min='+($__line=1,$__art='{{#minWidth}}',$__ctrl='<%#minWidth,\'auto_key_minWidth\'%>',$keyOf($refData,minWidth,'auto_key_minWidth'))+'&fixed='+($__line=1,$__art='{{#fixed}}',$__ctrl='<%#fixed,\'auto_key_fixed\'%>',$keyOf($refData,fixed,'auto_key_fixed'))+'&step='+($__line=1,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&value='+($__line=1,$__art='{{#read(row.width)}}',$__ctrl='<%#read(row.width),\'auto_key_read.row.read(row.width)\'%>',$keyOf($refData,read(row.width),'auto_key_read.row.read(row.width)')),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'minHeight,fixed,step,cell','disabled': ($temp_var=($__line=2,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/v-size.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.cell.height~rs}()','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr','mx5-view': 'gallery/mx-number/index?min='+($__line=2,$__art='{{#minHeight}}',$__ctrl='<%#minHeight,\'auto_key_minHeight\'%>',$keyOf($refData,minHeight,'auto_key_minHeight'))+'&fixed='+($__line=2,$__art='{{#fixed}}',$__ctrl='<%#fixed,\'auto_key_fixed\'%>',$keyOf($refData,fixed,'auto_key_fixed'))+'&step='+($__line=2,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&value='+($__line=2,$__art='{{#read(cell.height)}}',$__ctrl='<%#read(cell.height),\'auto_key_read.cell.read(cell.height)\'%>',$keyOf($refData,read(cell.height),'auto_key_read.cell.read(cell.height)')),})]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-box/v-size.html'; throw msg; }  } ,
    init() {
        this.set({
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.fixed~rs}"],
            minWidth: () => const_1["@:{const#to.unit~rs}"](cell_1["@:{min.width~rs}"]),
            minHeight: () => const_1["@:{const#to.unit~rs}"](cell_1["@:{min.height~rs}"]),
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
            row: rows[focusRow],
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
    '@:{update.cell.height~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.height = transform_1["@:{transform#to.real.value~rs}"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{update.row.width~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let rows = this.get('rows');
        let row = this.get('row');
        row.width = transform_1["@:{transform#to.real.value~rs}"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    }
});

});