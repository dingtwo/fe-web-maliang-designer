/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6t/style",["5c","../../5b/5e"],(require,exports,module)=>{
let $quick_mv_static_text;
let $quick_nc_static_text;
let $quick_nd_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let { View, dispatch, applyStyle, isNumber } = magix_1;
applyStyle("rd-mw",".rd-rL{-ms-scroll-chaining:none;border:1px solid #e6e6e6;border-radius:2px;height:140px;overflow-y:scroll;overscroll-behavior:contain}.rd-rL:hover{border-color:#ccc}.rd-rM{zoom:.5;margin:8px;opacity:.8;width:116px}.rd-rM:hover{opacity:1}.rd-rN{background:#f5f5f5;cursor:not-allowed}.rd-rN:hover{border-color:#e6e6e6}.rd-rN .rd-rM{cursor:not-allowed;opacity:.4}.rd-rN .rd-rM:hover{opacity:.4}");
let Skins = [{
        cellAlign: 'center',
        theadFontsize: 16,
        theadRowHeight: 40,
        theadForecolor: '#000000',
        tbodyRowHeight: 30,
        tbodyFontsize: 14,
        tbodyForecolor: '#000000',
        theadRowBackground: '#ffda95',
        tbodyEvenRowBackground: '#dde09d',
        tbodyOddRowBackground: '#f2f5cc',
        bordercolor: '#000000',
    }, {
        cellAlign: 'center',
        theadFontsize: 16,
        theadRowHeight: 40,
        theadForecolor: '#8391b7',
        tbodyRowHeight: 30,
        tbodyFontsize: 14,
        tbodyForecolor: '#8391b7',
        theadRowBackground: '#ffffff',
        tbodyEvenRowBackground: '#ffffff',
        tbodyOddRowBackground: '#d3dfed',
        bordercolor: '#becfe6',
    }, {
        cellAlign: 'center',
        theadFontsize: 16,
        theadRowHeight: 40,
        theadForecolor: '#c27f88',
        tbodyRowHeight: 30,
        tbodyFontsize: 14,
        tbodyForecolor: '#c27f88',
        theadRowBackground: '#ffffff',
        tbodyEvenRowBackground: '#ffffff',
        tbodyOddRowBackground: '#eed3d2',
        bordercolor: '#eccecd',
    }, {
        cellAlign: 'center',
        theadFontsize: 16,
        theadRowHeight: 40,
        theadForecolor: '#ffffff',
        tbodyRowHeight: 30,
        tbodyFontsize: 14,
        tbodyForecolor: '#000000',
        theadRowBackground: '#7f659f',
        tbodyEvenRowBackground: '#ffffff',
        tbodyOddRowBackground: '#ffffff',
        bordercolor: '#7f659f',
    }, {
        cellAlign: 'center',
        theadFontsize: 14,
        theadRowHeight: 30,
        theadForecolor: '#666666',
        tbodyRowHeight: 20,
        tbodyFontsize: 12,
        tbodyForecolor: '#666666',
        theadRowBackground: '#e9eaec',
        tbodyEvenRowBackground: '#f6f6f6',
        tbodyOddRowBackground: '#ffffff',
        bordercolor: '#dedede',
    }, {
        cellAlign: 'center',
        theadFontsize: 14,
        theadRowHeight: 30,
        theadForecolor: '#d1dbdb',
        tbodyRowHeight: 20,
        tbodyFontsize: 12,
        tbodyForecolor: '#d1dbdb',
        theadRowBackground: '#212121',
        tbodyEvenRowBackground: '#010101',
        tbodyOddRowBackground: '#404040',
        bordercolor: '#343434',
    }];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	skins,}=$dataFromView,
$$_class,
$$_style,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];
for(let $q_c_rsupzjsz=skins.length,$q_key_vlobpbtpp=0;$q_key_vlobpbtpp<$q_c_rsupzjsz;$q_key_vlobpbtpp+=1){
let s=skins[$q_key_vlobpbtpp];
$vnode_6=[$quick_mv_static_text||($quick_mv_static_text=$createVNode(0,'表头'))];$vnode_5=[$createVNode('div',{'class': 'rd-nr','style': 'height:'+(s.theadRowHeight)+'px;line-height:'+(s.theadRowHeight)+'px;font-size:'+(s.theadFontsize)+'px;color:'+(s.theadForecolor),},$vnode_6)];;$$_style='border-color:'+(s.bordercolor)+';text-align:'+(s.cellAlign)+';';if(s.theadRowBackground){;$$_style+='background:'+(s.theadRowBackground);};$vnode_4=[$createVNode('th',{'class': 'rd-nn rd-np','style': $$_style,},$vnode_5)];$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_2=[$createVNode('thead',0,$vnode_3)];$vnode_6=[$quick_nc_static_text||($quick_nc_static_text=$createVNode(0,'奇数行'))];$vnode_5=[$createVNode('div',{'class': 'rd-nr','style': 'height:'+(s.tbodyRowHeight)+'px;line-height:'+(s.tbodyRowHeight)+'px;font-size:'+(s.tbodyFontsize)+'px;color:'+(s.tbodyForecolor),},$vnode_6)];$vnode_4=[$createVNode('td',{'class': 'rd-nn rd-np','style': 'text-align:'+(s.cellAlign)+';border-color:'+(s.bordercolor)+';background:'+(s.tbodyOddRowBackground),},$vnode_5)];$vnode_3=[$createVNode('tr',0,$vnode_4)];$vnode_6=[$quick_nd_static_text||($quick_nd_static_text=$createVNode(0,'偶数行'))];$vnode_5=[$createVNode('div',{'class': 'rd-nr','style': 'height:'+(s.tbodyRowHeight)+'px;line-height:'+(s.tbodyRowHeight)+'px;font-size:'+(s.tbodyFontsize)+'px;color:'+(s.tbodyForecolor),},$vnode_6)];$vnode_4=[$createVNode('td',{'class': 'rd-nn rd-np','style': 'text-align:'+(s.cellAlign)+';border-color:'+(s.bordercolor)+';background:'+(s.tbodyEvenRowBackground),},$vnode_5)];$vnode_3.push($createVNode('tr',0,$vnode_4));$vnode_2.push($createVNode('tbody',0,$vnode_3));$vnode_1.push($createVNode('table',{'class': 'rd-mH rd-nk rd-no rd-rM','style': 'border-color:'+(s.bordercolor),'mx5-click': ((!disabled))&&($viewId+'_tA({skin:\''+$keyOf($refData,s,'i!.'+($q_key_vlobpbtpp)+'.i@')+'\'})'),},$vnode_2));
};$$_class='rd-rL rd-mA rd-mS rd-mT';if(disabled){;$$_class+=' rd-rN';};$vnode_0=[$createVNode('div',{'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            skins: Skins
        });
    },
    '_tA<click>'(e) {
        let { skin } = e.params;
        let cloned = {};
        for (let p in skin) {
            let src = skin[p];
            if (isNumber(src)) {
                src = const_1['l3'](src);
            }
            cloned[p] = src;
        }
        dispatch(this.root, 'change', {
            skin: cloned
        });
    }
});

});