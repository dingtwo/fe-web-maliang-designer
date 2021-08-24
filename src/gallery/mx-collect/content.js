/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6m/content",["51","../../50/53","../../50/61","../../50/54","../../5g/barcode","../../5g/cell","../../5g/table","../6j/index","../6k/index","../6g/index","../6n/align","../6l/index","../6n/style","../6o/index","../6p/index","../6p/fx","../6q/items"],(require,exports,module)=>{
require("../6j/index");
require("../6k/index");
require("../6g/index");
require("../6n/align");
require("../6l/index");
require("../6n/style");
require("../6o/index");
require("../6p/index");
require("../6p/fx");
require("../6q/items");
let $quick_hU_0_static_node;
let $quick_hU_4_static_node;
let $quick_hU_1_static_attr={'class': 'rd-g9 rd-ha rd-hg',};
let $quick_hU_2_static_attr={'class': 'rd-gR rd-hM',};
let $quick_hU_3_static_attr={'class': 'rd-g9 rd-gP rd-gx rd-ha rd-hw',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let barcode_1 = require("../../5g/barcode");
let cell_1 = require("../../5g/cell");
let table_1 = require("../../5g/table");
let { View, dispatch, config, mix } = magix_1;
let PList = [{
        tip: 'l2',
        key: 'type',
        type: props_1["gk"],
        items: [{
                text: 'kQ',
                value: ''
            }, {
                text: 'lp',
                value: 'text'
            }, {
                text: 'kf',
                value: 'image'
            }, {
                text: 'h0',
                value: 'barcode'
            }, {
                text: 'ik',
                value: 'qrcode'
            }, {
                text: 'jT',
                value: 'input'
            }, {
                text: 'jP',
                value: 'dropdown'
            }],
        omit: 1,
        '_jN'(cell, props) {
            let { focusRow, rows } = props;
            table_1["gd"](props, true);
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
        tip: 'l3',
        key: 'type',
        type: props_1["gk"],
        items: [{
                text: 'l4',
                value: 'text'
            }, {
                text: 'l5',
                value: 'sum'
            }, {
                text: 'l6',
                value: 'avg'
            }, {
                text: 'l7',
                value: 'custom'
            }],
        omit: 0,
        '_jN'(cell, props) {
            let { focusRow, rows } = props;
            table_1["gd"](props, true);
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
        tip: 'l8',
        type: props_1["gh"],
        '_jN'(cell) {
            return cell.type != 'input' && cell.type != 'dropdown';
        }
    }, {
        tip: 'jX',
        key: 'inputTextAlign',
        type: props_1["gN"],
        '_jN'(cell) {
            return cell.type == 'input';
        }
    }, {
        tip: 'l9',
        key: 'paddingTop',
        type: props_1["gd"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        min: 0,
        fixed: const_1["gU"],
        step: const_1["gT"],
        max: () => const_1["ge"](100)
    }, {
        tip: 'm_',
        key: 'paddingRight',
        type: props_1["gd"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        min: 0,
        fixed: const_1["gU"],
        step: const_1["gT"],
        max: () => const_1["ge"](100)
    }, {
        tip: 'ma',
        key: 'paddingBottom',
        type: props_1["gd"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        min: 0,
        fixed: const_1["gU"],
        step: const_1["gT"],
        max: () => const_1["ge"](100)
    }, {
        tip: 'mb',
        key: 'paddingLeft',
        type: props_1["gd"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        min: 0,
        fixed: const_1["gU"],
        step: const_1["gT"],
        max: () => const_1["ge"](100)
    }, {
        tip: 'h6',
        key: 'alpha',
        type: props_1["gd"],
        step: 0.1,
        fixed: 1,
        min: 0,
        max: 1
    }, {
        tip: 'mc',
        key: 'background',
        type: props_1["ge"],
        clear: true,
    }, {
        tip: 'md',
        type: props_1["gm"],
        key: 'textContent',
        '_jN'(cell, props) {
            table_1["gd"](props, true);
            return (cell.textFontsize != null) && cell.type == 'text';
        }
    }, {
        tip: 'im',
        type: props_1["gJ"],
        key: 'textFormat',
        '_jN'(cell, props) {
            //console.log(cell);
            let { focusRow, rows } = props;
            table_1["gd"](props, true);
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
        tip: 'ld',
        type: props_1["gK"],
        key: 'textFormat',
        '_jN'(cell) {
            return cell.type == 'custom';
        }
    }, {
        tip: 'ip',
        key: 'textFontsize',
        type: props_1["gd"],
        min: 0,
        fixed: const_1["gU"],
        step: const_1["gT"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        '_jN'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'iq',
        key: 'textFontfamily',
        type: props_1["gk"],
        items: const_1["gP"],
        '_jN'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'ir',
        key: 'textLetterspacing',
        type: props_1["gd"],
        min: 0,
        fixed: const_1["gU"],
        step: const_1["gT"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        '_jN'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'it',
        key: 'textForecolor',
        type: props_1["ge"],
        '_jN'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'iu',
        type: props_1["gg"],
        '_jN'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'kh',
        type: props_1["gj"],
        key: 'imageContent',
        '_jN'(cell) {
            return config('getImageUrl') && cell.type == 'image';
        }
    }, {
        tip: 'kj',
        type: props_1["gf"],
        key: 'imageRotateX',
        '_jN'(props) {
            return props.type == 'image';
        }
    }, {
        tip: 'kk',
        type: props_1["gf"],
        key: 'imageRotateY',
        '_jN'(props) {
            return props.type == 'image';
        }
    }, {
        tip: 'h7',
        type: props_1["gi"],
        key: 'barcodeContent',
        '_jN'(cell) {
            return cell.type == 'barcode';
        }
    }, {
        tip: 'h9',
        key: 'barcodeFormat',
        type: props_1["gk"],
        items: barcode_1["_hX"],
        '_jN'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'i_',
        key: 'barcodeShowText',
        type: props_1["gf"],
        '_jN'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'ia',
        key: 'barcodeColor',
        type: props_1["ge"],
        '_jN'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'ib',
        key: 'barcodeLineWidth',
        type: props_1["gd"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        min: 1,
        max: 8,
        '_jN'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'h7',
        type: props_1["gi"],
        key: 'qrcodeContent',
        '_jN'(cell) {
            return cell.type == 'qrcode';
        }
    }, {
        tip: 'jU',
        key: 'inputPlaceholder',
        type: props_1["gm"],
        '_jN'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'jV',
        key: 'inputText',
        type({ inputMultiline }) {
            return inputMultiline ? props_1['gi'] : props_1["gm"];
        },
        '_kH': 1,
        '_jN'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'jQ',
        key: 'inputMarkAs',
        type: props_1["gm"],
        '_jN'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'jR',
        key: 'inputClassName',
        type: props_1["gm"],
        '_jN'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'jC',
        key: 'inputName',
        type: props_1["gm"],
        '_jN'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'jW',
        key: 'inputMultiline',
        type: props_1["gf"],
        '_jN'(cell) {
            return cell.type == 'input';
        }
    }, {
        tip: 'ip',
        key: 'inputFontsize',
        type: props_1["gd"],
        min: 0,
        fixed: const_1["gU"],
        step: const_1["gT"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        '_jN'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'iq',
        key: 'inputFontfamily',
        type: props_1["gk"],
        items: const_1["gP"],
        '_jN'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'ir',
        key: 'inputLetterspacing',
        type: props_1["gd"],
        min: 0,
        fixed: const_1["gU"],
        step: const_1["gT"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        '_jN'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'it',
        key: 'inputForecolor',
        type: props_1["ge"],
        '_jN'(props) {
            return props.type == 'input';
        }
    }, {
        tip: 'jQ',
        key: 'dropdownMarkAs',
        type: props_1["gm"],
        '_jN'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'jR',
        key: 'dropdownClassName',
        type: props_1["gm"],
        '_jN'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'jC',
        key: 'dropdownName',
        type: props_1["gm"],
        '_jN'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'ip',
        key: 'dropdownFontsize',
        type: props_1["gd"],
        min: 0,
        fixed: const_1["gU"],
        step: const_1["gT"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        '_jN'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'iq',
        key: 'dropdownFontfamily',
        type: props_1["gk"],
        items: const_1["gP"],
        '_jN'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'ir',
        key: 'dropdownLetterspacing',
        type: props_1["gd"],
        min: 0,
        fixed: const_1["gU"],
        step: const_1["gT"],
        read: transform_1["gg"],
        write: transform_1["gl"],
        '_jN'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'it',
        key: 'dropdownForecolor',
        type: props_1["ge"],
        '_jN'(props) {
            return props.type == 'dropdown';
        }
    }, {
        tip: 'jS',
        key: 'dropdownMultipleSelect',
        type: props_1["gf"],
        '_jN'(cell) {
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
        type: props_1['gE']
    }, {
        key: 'dropdownItems',
        type: props_1['gP'],
        mutual(props) {
            return props.dropdownMultipleSelect;
        },
        '_jN'(props) {
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

for(let $q_c_jjwyejnzk=list.length,$q_lc_zwxhdzxp=$q_c_jjwyejnzk-1,i=0;i<$q_c_jjwyejnzk;i+=1){
let e=list[i];let last=i===$q_lc_zwxhdzxp;

if(!e['_jN']||e['_jN'](cell,props)){

if(e.type==ptype['gE']){

if($quick_hU_0_static_node){
$vnode_0.push($quick_hU_0_static_node);
}else{
$vnode_0.push($quick_hU_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-g7',}));
}

}else{
$vnode_1=[];
if(e.tip){
$vnode_2=[$createVNode(0,(i18n(e.tip)))];$vnode_1.push($createVNode('span',$quick_hU_2_static_attr,$vnode_2));
}let data=cell[e.key];;
if(e.read){
data=e.read(data,cell);;
}let eType=e.type,dyanmicType=e['_kH'];;
if(dyanmicType){
eType=eType(cell,props);
}
if(eType==ptype['gd']){
;$$_mx5$_view='58/6j/index?';if(($temp_var=e.min)!=null){;$$_mx5$_view+='min='+$keyOf($refData,$temp_var,'eD.'+(i)+'.eE');};if(($temp_var=e.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'eD.'+(i)+'.eF');};if(($temp_var=e.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'eD.'+(i)+'.eG');};if(($temp_var=e.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'eD.'+(i)+'.eH');};$$_mx5$_view+='&value='+$keyOf($refData,data,'eI.'+(e.key)+'.eJ');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-gW rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'value\',write:\''+$keyOf($refData,e.write,'eD.'+(i)+'.eK')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(eType==ptype['gk']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,list','class': 'rd-g9 rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'value\',omit:'+(e.omit||0)+'})','mx5-view': '58/6k/index?disabled='+$keyOf($refData,disabled,'eL')+'&selected='+($encodeUrl(data))+'&list='+$keyOf($refData,e.items,'eD.'+(i)+'.eM')+'&textKey=text&valueKey=value',}));
}else if(eType==ptype['gh']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-g9 rd-hj','mx5-input': $viewId+'_lu()','mx5-view': '58/6g/index?disabled='+$keyOf($refData,disabled,'eL')+'&value='+$keyOf($refData,cell,'eN'),}));
}else if(eType==ptype['gN']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-g9 rd-hj','mx5-input': $viewId+'_lu()','mx5-view': '58/6n/align?disabled='+$keyOf($refData,disabled,'eL')+'&value='+$keyOf($refData,cell,'eN')+'&alignKey='+($encodeUrl(e.key)),}));
}else if(eType==ptype['ge']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-hj','mx5-input': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'color\'})','mx5-view': '58/6l/index?clear='+($encodeUrl(e.clear))+'&color='+$keyOf($refData,data,'eI.'+(e.key)+'.eJ')+'&align=right&disabled='+($encodeUrl(disabled))+'&alpha='+($encodeUrl(e.alpha)),}));
}else if(eType==ptype['gg']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-g9 rd-hj','mx5-input': $viewId+'_lu({use:\'_\'})','mx5-view': '58/6n/style?disabled='+$keyOf($refData,disabled,'eL')+'&value='+$keyOf($refData,cell,'eN')+'&prefix=textStyle',}));
}else if(eType==ptype['gi']){
$vnode_1.push($createVNode('textarea',{'class': 'rd-gh rd-hj rd-hm','disabled': (disabled),'mx5-input': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})','value': (data),},0,$special_2));
}else if(e.type==ptype['gm']){
$vnode_1.push($createVNode('input',{'class': 'rd-gg rd-hj','value': (data),'disabled': (disabled),'mx5-input': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})',},1,$special_2));
}else if(eType==ptype['gf']){
$vnode_2=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','checked': (data),'disabled': (disabled),'mx5-change': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',native:\'checked\',write:\''+$keyOf($refData,e.write,'eD.'+(i)+'.eK')+'\'})',},1,$special_4)];
if($quick_hU_4_static_node){
$vnode_2.push($quick_hU_4_static_node);
}else{
$vnode_2.push($quick_hU_4_static_node=$createVNode('i',{'_': 'eE','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_1.push($createVNode('label',$quick_hU_3_static_attr,$vnode_2));
}else if(eType==ptype['gj']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'src\'})','mx5-view': '58/6o/index?src='+($encodeUrl(data))+'&disabled='+$keyOf($refData,disabled,'eL'),}));
}else if(eType==ptype['gJ']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'format\'})','mx5-view': '58/6p/index?format='+$keyOf($refData,data,'eI.'+(e.key)+'.eJ')+'&disabled='+$keyOf($refData,disabled,'eL'),}));
}else if(eType==ptype['gK']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'format\'})','mx5-view': '58/6p/fx?format='+$keyOf($refData,data,'eI.'+(e.key)+'.eJ')+'&disabled='+$keyOf($refData,disabled,'eL'),}));
}else if(eType==ptype['gm']){
$vnode_1.push($createVNode('input',{'class': 'rd-gg','value': (data),'disabled': (disabled),'mx5-input': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})',},1,$special_2));
}else if(eType==ptype['gP']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','mx5-change': $viewId+'_lu({use:\'items\'})','mx5-view': '58/6q/items?items='+$keyOf($refData,data,'eI.'+(e.key)+'.eJ')+'&disabled='+$keyOf($refData,disabled,'eL')+'&mutual='+$keyOf($refData,e.mutual&&e.mutual(cell),'eD.'+(i)+'.eO'),}));
}$vnode_0.push($createVNode('div',$quick_hU_1_static_attr,$vnode_1));
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
    '_lu<input,change>'(e) {
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
                        cell.textFontsize = const_1['ge'](cell.textFontsize);
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