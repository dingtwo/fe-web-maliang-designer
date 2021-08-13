/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-box/style",["magix5","../../i18n/index","../../designer/const","../../designer/transform","../mx-dropdown/index","../mx-number/index","../mx-color/index"],(require,exports,module)=>{
require("../mx-dropdown/index");
require("../mx-number/index");
require("../mx-color/index");
let $quick_gF_2_static_node;
let $quick_gF_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-margin-bottom-4',};
let $quick_gF_1_static_attr={'class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../../i18n/index");
let const_1 = require("../../designer/const");
let transform_1 = require("../../designer/transform");
let { View, dispatch } = magix_1;
let BorderTypeList = const_1['@:{const#border.types~rs}'];
let Borders = ['Top', 'Right', 'Bottom', 'Left'];
let BorderRadius = ['LeftTop', 'RightTop', 'LeftBottom', 'RightBottom'];
let BordersText = [index_1('@:{lang#dir.top~rs}'),
    index_1('@:{lang#dir.right~rs}'),
    index_1('@:{lang#dir.bottom~rs}'),
    index_1('@:{lang#dir.left~rs}')];
let BorderRadiusText = [index_1('@:{lang#dir.lefttop~rs}'),
    index_1('@:{lang#dir.righttop~rs}'),
    index_1('@:{lang#dir.rightbottom~rs}'),
    index_1('@:{lang#dir.leftbottom~rs}')];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	borders,
	bt,
	i18n,
	disabled,
	borderTypes,
	cell,
	max,
	step,
	fixed,
	read,
	brs,
	brt,}=$dataFromView,
$vnode_2,
$vnode_1,
$$_class;
$__line=1;$__art="{{each borders as b i last}}";$__ctrl="for(let $q_c_cjjvrlt=borders.length,$q_lc_fsyfrkptt=$q_c_cjjvrlt-1,i=0;i<$q_c_cjjvrlt;i++){let b=borders[i];let last=i===$q_lc_fsyfrkptt;";
for(let $q_c_cjjvrlt=borders.length,$q_lc_fsyfrkptt=$q_c_cjjvrlt-1,i=0;i<$q_c_cjjvrlt;i+=1){
let b=borders[i];let last=i===$q_lc_fsyfrkptt;
$vnode_2=[$createVNode(0,($__line=4,$__art='{{=bt[i]}}',$__ctrl='<%=bt[i]%>',(bt[i]))+($__line=4,$__art='{{=i18n(\'@:{lang#props.border~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#props.border~rs}\')%>',(i18n('@:{lang#props.border~rs}'))))];$vnode_1=[$createVNode('span',$quick_gF_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,borderTypes','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{change.border.style~rs}({key:\''+($__line=6,$__art='{{=b}}',$__ctrl='<%=$encodeQuote(b)%>',($encodeQuote(b)))+'\'})','mx5-view': 'gallery/mx-dropdown/index?disabled='+($__line=6,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled'))+'&list='+($__line=6,$__art='{{#borderTypes}}',$__ctrl='<%#borderTypes,\'auto_key_borderTypes\'%>',$keyOf($refData,borderTypes,'auto_key_borderTypes'))+'&textKey=text&valueKey=value&selected='+($__line=6,$__art='{{=cell[\'border\'+b+\'Style\']}}',$__ctrl='<%=$encodeUrl(cell[\'border\'+b+\'Style\'])%>',($encodeUrl(cell['border'+b+'Style']))),})];$vnode_0.push($createVNode('div',$quick_gF_0_static_attr,$vnode_1));
if($quick_gF_2_static_node){
$vnode_1=[$quick_gF_2_static_node];
}else{
$vnode_1=[$quick_gF_2_static_node=$createVNode('span',{'_': 'dM','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'max,step,fixed,cell,borders','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-mr5 rd-_assets_index_less_-pr rd-_assets_index_less_-width-113','disabled': ($temp_var=($__line=10,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/style.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.border.width~rs}({key:\''+($__line=10,$__art='{{=b}}',$__ctrl='<%=$encodeQuote(b)%>',($encodeQuote(b)))+'\'})','mx5-view': 'gallery/mx-number/index?min=0&max='+($__line=10,$__art='{{#max}}',$__ctrl='<%#max,\'auto_key_max\'%>',$keyOf($refData,max,'auto_key_max'))+'&step='+($__line=10,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&fixed='+($__line=10,$__art='{{#fixed}}',$__ctrl='<%#fixed,\'auto_key_fixed\'%>',$keyOf($refData,fixed,'auto_key_fixed'))+'&value='+($__line=10,$__art='{{#read(cell[\'border\'+b+\'Width\'])}}',$__ctrl='<%#read(cell[\'border\'+b+\'Width\']),\'auto_key_read.cell.borders.\'+(i)+\'.read(cell[\\\'border\\\'+b+\\\'Width\\\'])\'%>',$keyOf($refData,read(cell['border'+b+'Width']),'auto_key_read.cell.borders.'+(i)+'.read(cell[\'border\'+b+\'Width\'])')),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell,borders','mx5-input': $viewId+'@:{update.border.color~rs}({key:\''+($__line=11,$__art='{{=b}}',$__ctrl='<%=$encodeQuote(b)%>',($encodeQuote(b)))+'\'})','mx5-view': 'gallery/mx-color/index?disabled='+($__line=11,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled'))+'&align=right&alpha=true&color='+($__line=11,$__art='{{#cell[\'border\'+b+\'Color\']}}',$__ctrl='<%#cell[\'border\'+b+\'Color\'],\'auto_key_cell.borders.\'+(i)+\'.cell[\\\'border\\\'+b+\\\'Color\\\']\'%>',$keyOf($refData,cell['border'+b+'Color'],'auto_key_cell.borders.'+(i)+'.cell[\'border\'+b+\'Color\']')),}));$vnode_0.push($createVNode('div',$quick_gF_0_static_attr,$vnode_1));
}$__line=15;$__art="{{each brs as b i last}}";$__ctrl="for(let $q_c_dmrudqjq=brs.length,$q_lc_zaxdfuj=$q_c_dmrudqjq-1,i=0;i<$q_c_dmrudqjq;i++){let b=brs[i];let last=i===$q_lc_zaxdfuj;";
for(let $q_c_dmrudqjq=brs.length,$q_lc_zaxdfuj=$q_c_dmrudqjq-1,i=0;i<$q_c_dmrudqjq;i+=1){
let b=brs[i];let last=i===$q_lc_zaxdfuj;
$vnode_2=[$createVNode(0,($__line=18,$__art='{{=brt[i]}}',$__ctrl='<%=brt[i]%>',(brt[i]))+($__line=18,$__art='{{=i18n(\'@:{lang#props.border.radius~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#props.border.radius~rs}\')%>',(i18n('@:{lang#props.border.radius~rs}'))))];$vnode_1=[$createVNode('span',$quick_gF_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,cell,brs','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=20,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/style.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.border.radius~rs}({key:\''+($__line=20,$__art='{{=b}}',$__ctrl='<%=$encodeQuote(b)%>',($encodeQuote(b)))+'\'})','mx5-view': 'gallery/mx-number/index?min=0&step='+($__line=20,$__art='{{#step}}',$__ctrl='<%#step,\'auto_key_step\'%>',$keyOf($refData,step,'auto_key_step'))+'&fixed='+($__line=20,$__art='{{#fixed}}',$__ctrl='<%#fixed,\'auto_key_fixed\'%>',$keyOf($refData,fixed,'auto_key_fixed'))+'&value='+($__line=20,$__art='{{#read(cell[\'border\'+b+\'Radius\'])}}',$__ctrl='<%#read(cell[\'border\'+b+\'Radius\']),\'auto_key_read.cell.brs.\'+(i)+\'.read(cell[\\\'border\\\'+b+\\\'Radius\\\'])\'%>',$keyOf($refData,read(cell['border'+b+'Radius']),'auto_key_read.cell.brs.'+(i)+'.read(cell[\'border\'+b+\'Radius\'])')),})];;$$_class='rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center'+($__line=16,$__art='{{if !last}}','');$__ctrl='<%if(!last){%>';if(!last){;$$_class+=' rd-_assets_index_less_-margin-bottom-4'+($__line=16,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-box/style.html'; throw msg; }  } ,
    init() {
        this.set({
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            max: () => const_1["@:{const#to.unit~rs}"](10),
            read: transform_1["@:{transform#to.show.value~rs}"],
            bt: BordersText,
            brt: BorderRadiusText,
            brs: BorderRadius,
            borders: Borders,
            borderTypes: BorderTypeList
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
    '@:{update.border.width~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Width`] = transform_1["@:{transform#to.real.value~rs}"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{update.border.radius~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Radius`] = const_1['@:{const#scale.to.unit~rs}'](transform_1["@:{transform#to.real.value~rs}"](e.value));
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{change.border.style~rs}<change>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Style`] = e.value;
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{update.border.color~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { key } = e.params;
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell[`border${key}Color`] = e.color;
        dispatch(this.root, 'change', {
            rows
        });
    }
});

});