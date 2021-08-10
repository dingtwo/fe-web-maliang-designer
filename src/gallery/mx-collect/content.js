/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/63/content",["4e","../../4d/4g","../../4d/5e","../../4d/4h","../../4t/barcode","../../4t/cell","../../4t/table","../60/index","../61/index","../5t/index","../64/align","../62/index","../64/style","../65/index","../66/index","../66/fx","../67/items"],(require,exports,module)=>{
require("../60/index");
require("../61/index");
require("../5t/index");
require("../64/align");
require("../62/index");
require("../64/style");
require("../65/index");
require("../66/index");
require("../66/fx");
require("../67/items");
let $quick_fk_0_static_node;
let $quick_fk_4_static_node;
let $quick_fk_1_static_attr={'class': 'rd-eB rd-eH rd-ez',};
let $quick_fk_2_static_attr={'class': 'rd-eh rd-fc',};
let $quick_fk_3_static_attr={'class': 'rd-dY rd-eB rd-eX rd-ef rd-ez',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let barcode_1 = require("../../4t/barcode");
let cell_1 = require("../../4t/cell");
let table_1 = require("../../4t/table");
let { View, dispatch, config, mix } = magix_1;
let PList = [{
        tip: 'jt',
        key: 'type',
        type: props_1["dL"],
        items: [{
                text: 'ih',
                value: ''
            }, {
                text: 'iR',
                value: 'text'
            }, {
                text: 'hH',
                value: 'image'
            }, {
                text: 'fq',
                value: 'barcode'
            }, {
                text: 'fM',
                value: 'qrcode'
            }, {
                text: 'hk',
                value: 'input'
            }, {
                text: 'hg',
                value: 'dropdown'
            }],
        omit: 1,
        '_ha'(cell, props) {
            let { focusRow, rows } = props;
            table_1["dE"](props, true);
            let ri = 0;
            let totalRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    totalRowIndex = ri;
                }
                ri++;
            }
            return focusRow != totalRowIndex;
        }
    }, {
        tip: 'ju',
        key: 'type',
        type: props_1["dL"],
        items: [{
                text: 'jv',
                value: 'text'
            }, {
                text: 'jw',
                value: 'sum'
            }, {
                text: 'jx',
                value: 'avg'
            }, {
                text: 'jy',
                value: 'custom'
            }],
        omit: 0,
        '_ha'(cell, props) {
            let { focusRow, rows } = props;
            table_1["dE"](props, true);
            let ri = 0;
            let totalRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    totalRowIndex = ri;
                }
                ri++;
            }
            return focusRow == totalRowIndex;
        }
    }, {
        tip: 'jz',
        type: props_1["dI"],
        '_ha'(cell) {
            return cell.type != 'input' && cell.type != 'dropdown';
        }
    }, {
        tip: 'ho',
        key: 'inputTextAlign',
        type: props_1["ed"],
        '_ha'(cell) {
            return cell.type == 'input';
        }
    }, {
        tip: 'jA',
        key: 'paddingTop',
        type: props_1["dE"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        min: 0,
        fixed: const_1["ek"],
        step: const_1["ej"],
        max: () => const_1["dF"](100)
    }, {
        tip: 'jB',
        key: 'paddingRight',
        type: props_1["dE"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        min: 0,
        fixed: const_1["ek"],
        step: const_1["ej"],
        max: () => const_1["dF"](100)
    }, {
        tip: 'jC',
        key: 'paddingBottom',
        type: props_1["dE"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        min: 0,
        fixed: const_1["ek"],
        step: const_1["ej"],
        max: () => const_1["dF"](100)
    }, {
        tip: 'jD',
        key: 'paddingLeft',
        type: props_1["dE"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        min: 0,
        fixed: const_1["ek"],
        step: const_1["ej"],
        max: () => const_1["dF"](100)
    }, {
        tip: 'fw',
        key: 'alpha',
        type: props_1["dE"],
        step: 0.1,
        fixed: 1,
        min: 0,
        max: 1
    }, {
        tip: 'jE',
        key: 'background',
        type: props_1["dF"],
        clear: true,
    }, {
        tip: 'jF',
        type: props_1["dN"],
        key: 'textContent',
        '_ha'(cell, props) {
            table_1["dE"](props, true);
            return (cell.textFontsize != null) && cell.type == 'text';
        }
    }, {
        tip: 'fO',
        type: props_1["e_"],
        key: 'textFormat',
        '_ha'(cell, props) {
            //console.log(cell);
            let { focusRow, rows } = props;
            table_1["dE"](props, true);
            let ri = 0;
            let totalRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    totalRowIndex = ri;
                    break;
                }
                ri++;
            }
            return (focusRow == totalRowIndex &&
                (cell.type == 'sum' ||
                    cell.type == 'avg'));
        }
    }, {
        tip: 'iF',
        type: props_1["ea"],
        key: 'textFormat',
        '_ha'(cell) {
            return cell.type == 'custom';
        }
    }, {
        tip: 'fR',
        key: 'textFontsize',
        type: props_1["dE"],
        min: 0,
        fixed: const_1["ek"],
        step: const_1["ej"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        '_ha'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'fS',
        key: 'textFontfamily',
        type: props_1["dL"],
        items: const_1["ef"],
        '_ha'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'fT',
        key: 'textLetterspacing',
        type: props_1["dE"],
        min: 0,
        fixed: const_1["ek"],
        step: const_1["ej"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        '_ha'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'fV',
        key: 'textForecolor',
        type: props_1["dF"],
        '_ha'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'fW',
        type: props_1["dH"],
        '_ha'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'hJ',
        type: props_1["dK"],
        key: 'imageContent',
        '_ha'(cell) {
            return config('getImageUrl') && cell.type == 'image';
        }
    }, {
        tip: 'hL',
        type: props_1["dG"],
        key: 'imageRotateX',
        '_ha'(props) {
            return props.type == 'image';
        }
    }, {
        tip: 'hM',
        type: props_1["dG"],
        key: 'imageRotateY',
        '_ha'(props) {
            return props.type == 'image';
        }
    }, {
        tip: 'fx',
        type: props_1["dJ"],
        key: 'barcodeContent',
        '_ha'(cell) {
            return cell.type == 'barcode';
        }
    }, {
        tip: 'fz',
        key: 'barcodeFormat',
        type: props_1["dL"],
        items: barcode_1["_fn"],
        '_ha'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'fA',
        key: 'barcodeShowText',
        type: props_1["dG"],
        '_ha'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'fB',
        key: 'barcodeColor',
        type: props_1["dF"],
        '_ha'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'fC',
        key: 'barcodeLineWidth',
        type: props_1["dE"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        min: 1,
        max: 8,
        '_ha'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'fx',
        type: props_1["dJ"],
        key: 'qrcodeContent',
        '_ha'(cell) {
            return cell.type == 'qrcode';
        }
    }, {
        tip: 'hl',
        key: 'inputPlaceholder',
        type: props_1["dN"],
        '_ha'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'hm',
        key: 'inputText',
        type({ inputMultiline }) {
            return inputMultiline ? props_1['dJ'] : props_1["dN"];
        },
        '_h5': 1,
        '_ha'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'hh',
        key: 'inputMarkAs',
        type: props_1["dN"],
        '_ha'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'hi',
        key: 'inputClassName',
        type: props_1["dN"],
        '_ha'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'g4',
        key: 'inputName',
        type: props_1["dN"],
        '_ha'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'hn',
        key: 'inputMultiline',
        type: props_1["dG"],
        '_ha'(cell) {
            return cell.type == 'input';
        }
    }, {
        tip: 'fR',
        key: 'inputFontsize',
        type: props_1["dE"],
        min: 0,
        fixed: const_1["ek"],
        step: const_1["ej"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        '_ha'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'fS',
        key: 'inputFontfamily',
        type: props_1["dL"],
        items: const_1["ef"],
        '_ha'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'fT',
        key: 'inputLetterspacing',
        type: props_1["dE"],
        min: 0,
        fixed: const_1["ek"],
        step: const_1["ej"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        '_ha'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'fV',
        key: 'inputForecolor',
        type: props_1["dF"],
        '_ha'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'hh',
        key: 'dropdownMarkAs',
        type: props_1["dN"],
        '_ha'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'hi',
        key: 'dropdownClassName',
        type: props_1["dN"],
        '_ha'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'g4',
        key: 'dropdownName',
        type: props_1["dN"],
        '_ha'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'fR',
        key: 'dropdownFontsize',
        type: props_1["dE"],
        min: 0,
        fixed: const_1["ek"],
        step: const_1["ej"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        '_ha'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'fS',
        key: 'dropdownFontfamily',
        type: props_1["dL"],
        items: const_1["ef"],
        '_ha'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'fT',
        key: 'dropdownLetterspacing',
        type: props_1["dE"],
        min: 0,
        fixed: const_1["ek"],
        step: const_1["ej"],
        read: transform_1["dH"],
        write: transform_1["dM"],
        '_ha'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'fV',
        key: 'dropdownForecolor',
        type: props_1["dF"],
        '_ha'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'hj',
        key: 'dropdownMultipleSelect',
        type: props_1["dG"],
        '_ha'(cell) {
            return cell.type == 'dropdown';
        },
        write(v, props) {
            if (!v) {
                let { dropdownItems } = props;
                let findSelect;
                for (let e of dropdownItems) {
                    if (e.checked) {
                        if (findSelect) {
                            e.checked = false;
                        }
                        else {
                            findSelect = 1;
                        }
                    }
                }
                if (!findSelect) {
                    dropdownItems[0].checked = true;
                }
            }
            return v;
        }
    }, {
        type: props_1['d5']
    }, {
        key: 'dropdownItems',
        type: props_1['ef'],
        mutual(props) {
            return props.dropdownMultipleSelect;
        },
        '_ha'(props) {
            return props.type == 'dropdown';
        }
    },];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	list,
	cell,
	props,
	ptype,
	i18n,
	disabled,}=$dataFromView,
$vnode_2,
$$_mx5$_view,
$vnode_1;

for(let $q_c_tcdidljjw=list.length,$q_lc_gwkxdjcxw=$q_c_tcdidljjw-1,i=0;i<$q_c_tcdidljjw;i+=1){
let e=list[i];let last=i===$q_lc_gwkxdjcxw;

if(!e['_ha']||e['_ha'](cell,props)){

if(e.type==ptype['d5']){

if($quick_fk_0_static_node){
$vnode_0.push($quick_fk_0_static_node);
}else{
$vnode_0.push($quick_fk_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-ex',}));
}

}else{
$vnode_1=[];
if(e.tip){
$vnode_2=[$createVNode(0,(i18n(e.tip)))];$vnode_1.push($createVNode('span',$quick_fk_2_static_attr,$vnode_2));
}let data=cell[e.key];;
if(e.read){
data=e.read(data,cell);;
}let eType=e.type,dyanmicType=e['_h5'];;
if(dyanmicType){
eType=eType(cell,props);
}
if(eType==ptype['dE']){
;$$_mx5$_view='4l/60/index?';if(($temp_var=e.min)!=null){;$$_mx5$_view+='min='+$keyOf($refData,$temp_var,'cH.'+(i)+'.cI');};if(($temp_var=e.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'cH.'+(i)+'.cJ');};if(($temp_var=e.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'cH.'+(i)+'.cK');};if(($temp_var=e.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'cH.'+(i)+'.cL');};$$_mx5$_view+='&value='+$keyOf($refData,data,'cM.'+(e.key)+'.cN');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-dH rd-eK rd-em','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'value\',write:\''+$keyOf($refData,e.write,'cH.'+(i)+'.cO')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(eType==ptype['dL']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,list','class': 'rd-eK rd-ez','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'value\',omit:'+(e.omit||0)+'})','mx5-view': '4l/61/index?disabled='+$keyOf($refData,disabled,'cP')+'&selected='+($encodeUrl(data))+'&list='+$keyOf($refData,e.items,'cH.'+(i)+'.cQ')+'&textKey=text&valueKey=value',}));
}else if(eType==ptype['dI']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-eK rd-ez','mx5-input': $viewId+'_iS()','mx5-view': '4l/5t/index?disabled='+$keyOf($refData,disabled,'cP')+'&value='+$keyOf($refData,cell,'cR'),}));
}else if(eType==ptype['ed']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-eK rd-ez','mx5-input': $viewId+'_iS()','mx5-view': '4l/64/align?disabled='+$keyOf($refData,disabled,'cP')+'&value='+$keyOf($refData,cell,'cR')+'&alignKey='+($encodeUrl(e.key)),}));
}else if(eType==ptype['dF']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-eK','mx5-input': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'color\'})','mx5-view': '4l/62/index?clear='+($encodeUrl(e.clear))+'&color='+$keyOf($refData,data,'cM.'+(e.key)+'.cN')+'&align=right&disabled='+($encodeUrl(disabled))+'&alpha='+($encodeUrl(e.alpha)),}));
}else if(eType==ptype['dH']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-eK rd-ez','mx5-input': $viewId+'_iS({use:\'_\'})','mx5-view': '4l/64/style?disabled='+$keyOf($refData,disabled,'cP')+'&value='+$keyOf($refData,cell,'cR')+'&prefix=textStyle',}));
}else if(eType==ptype['dJ']){
$vnode_1.push($createVNode('textarea',{'class': 'rd-dI rd-eK rd-eN','disabled': (disabled),'mx5-input': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})','value': (data),},0,$special_2));
}else if(e.type==ptype['dN']){
$vnode_1.push($createVNode('input',{'class': 'rd-dH rd-eK','value': (data),'disabled': (disabled),'mx5-input': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})',},1,$special_2));
}else if(eType==ptype['dG']){
$vnode_2=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','checked': (data),'disabled': (disabled),'mx5-change': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',native:\'checked\',write:\''+$keyOf($refData,e.write,'cH.'+(i)+'.cO')+'\'})',},1,$special_4)];
if($quick_fk_4_static_node){
$vnode_2.push($quick_fk_4_static_node);
}else{
$vnode_2.push($quick_fk_4_static_node=$createVNode('i',{'_': 'cI','class': 'rd-em rd-et rd-fg',}));
}
$vnode_1.push($createVNode('label',$quick_fk_3_static_attr,$vnode_2));
}else if(eType==ptype['dK']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'src\'})','mx5-view': '4l/65/index?src='+($encodeUrl(data))+'&disabled='+$keyOf($refData,disabled,'cP'),}));
}else if(eType==ptype['e_']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'format\'})','mx5-view': '4l/66/index?format='+$keyOf($refData,data,'cM.'+(e.key)+'.cN')+'&disabled='+$keyOf($refData,disabled,'cP'),}));
}else if(eType==ptype['ea']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'format\'})','mx5-view': '4l/66/fx?format='+$keyOf($refData,data,'cM.'+(e.key)+'.cN')+'&disabled='+$keyOf($refData,disabled,'cP'),}));
}else if(eType==ptype['dN']){
$vnode_1.push($createVNode('input',{'class': 'rd-dH','value': (data),'disabled': (disabled),'mx5-input': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})',},1,$special_2));
}else if(eType==ptype['ef']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','mx5-change': $viewId+'_iS({use:\'items\'})','mx5-view': '4l/67/items?items='+$keyOf($refData,data,'cM.'+(e.key)+'.cN')+'&disabled='+$keyOf($refData,disabled,'cP')+'&mutual='+$keyOf($refData,e.mutual&&e.mutual(cell),'cH.'+(i)+'.cS'),}));
}$vnode_0.push($createVNode('div',$quick_fk_1_static_attr,$vnode_1));
}
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            list: PList,
            ptype: props_1
        });
    },
    assign(data) {
        let { props, disabled } = data;
        let { rows, focusRow, focusCol } = props;
        if (focusRow < 0) {
            focusRow = 0;
        }
        if (focusCol < 0) {
            focusCol = 0;
        }
        let cell = rows[focusRow].cols[focusCol];
        this.set({
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
    '_iS<input,change>'(e) {
        let cell = this.get('cell');
        let rows = this.get('rows');
        let { key, use, write, native, omit } = e.params;
        if (use || native) {
            let v = native ? e.eventTarget[native] : e[use];
            if (write) {
                v = write(v, cell, e);
            }
            if (key == 'type') {
                let prev = cell[key];
                if (prev &&
                    omit) {
                    for (let p in cell) {
                        if (p.startsWith(prev)) {
                            delete cell[p];
                        }
                    }
                }
                let initial = cell_1[v];
                if (initial) {
                    mix(cell, initial);
                    if (cell.textFontsize) {
                        cell.textFontsize = const_1['dF'](cell.textFontsize);
                    }
                }
                if (v == 'custom' ||
                    prev == 'custom') {
                    cell.textFormat = '';
                }
            }
            if (key) {
                cell[key] = v;
            }
        }
        dispatch(this.root, 'change', {
            rows
        });
    }
});

});