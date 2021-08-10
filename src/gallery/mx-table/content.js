/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/5v/content",["4e","../../4d/4g","../../4d/5e","../../4d/4h","../../4t/barcode","../../4t/cell","../60/index","../61/index","../5t/index","../62/index","../64/style","../65/index","../66/index"],(require,exports,module)=>{
require("../60/index");
require("../61/index");
require("../5t/index");
require("../62/index");
require("../64/style");
require("../65/index");
require("../66/index");
let $quick_fP_3_static_node;
let $quick_fP_0_static_attr={'class': 'rd-eB rd-eH rd-ez',};
let $quick_fP_1_static_attr={'class': 'rd-eh rd-fc',};
let $quick_fP_2_static_attr={'class': 'rd-dY rd-eB rd-eX rd-ef rd-ez',};
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
let { View, config, dispatch, mix } = magix_1;
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
            }]
    }, {
        tip: 'jz',
        type: props_1["dI"]
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
        '_ha'(props) {
            return props.type == 'text' && !props.bindKey;
        }
    }, {
        tip: 'fP',
        type: props_1['dG'],
        key: 'textAutoReturn',
        '_ha'(props) {
            return props.type == 'text';
        }
    }, {
        tip: 'fO',
        type: props_1["e_"],
        key: 'textFormat',
        '_ha'(props) {
            return props.type == 'text' && props.bindKey;
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
            return props.type == 'text';
        }
    }, {
        tip: 'fS',
        key: 'textFontfamily',
        type: props_1["dL"],
        items: const_1["ef"],
        '_ha'(props) {
            return props.type == 'text';
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
            return props.type == 'text';
        }
    }, {
        tip: 'fV',
        key: 'textForecolor',
        type: props_1["dF"],
        '_ha'(props) {
            return props.type == 'text';
        }
    }, {
        tip: 'fW',
        type: props_1["dH"],
        '_ha'(props) {
            return props.type == 'text';
        }
    }, {
        tip: 'hJ',
        type: props_1["dK"],
        key: 'imageContent',
        '_ha'(props) {
            return props.type == 'image' &&
                config('getImageUrl') &&
                !props.bindKey;
            ;
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
    } /*, {
        tip: '@:{lang#props.max.width}',
        type: Props["@:{eprops#number}"],
        key: 'imageMaxWidth',
        min: -1,
        '@:{if.show}'(props) {
            return props.type == 'image';
        }
    }, {
        tip: '@:{lang#props.max.height}',
        type: Props["@:{eprops#number}"],
        key: 'imageMaxHeight',
        min: -1,
        '@:{if.show}'(props) {
            return props.type == 'image';
        }
    }*/,
    {
        tip: 'fx',
        type: props_1["dJ"],
        key: 'barcodeContent',
        '_ha'(props) {
            return props.type == 'barcode' && !props.bindKey;
            ;
        }
    } /*, {
        tip: '@:{lang#props.width}',
        type: Props["@:{eprops#number}"],
        key: 'barcodeWidth',
        min: 0,
        '@:{if.show}'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: '@:{lang#props.height}',
        key: 'barcodeHeight',
        type: Props["@:{eprops#number}"],
        min: 0,
        '@:{if.show}'(props) {
            return props.type == 'barcode';
        }
    }*/,
    {
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
        '_ha'(props) {
            return props.type == 'qrcode' && !props.bindKey;
            ;
        }
    } /*, {
        tip: '@:{lang#props.width}',
        type: Props["@:{eprops#number}"],
        key: 'qrcodeWidth',
        min: 0,
        '@:{if.show}'(props) {
            return props.type == 'qrcode';
        }
    }, {
        tip: '@:{lang#props.height}',
        key: 'qrcodeHeight',
        type: Props["@:{eprops#number}"],
        min: 0,
        '@:{if.show}'(props) {
            return props.type == 'qrcode';
        }
    }*/
];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	list,
	cell,
	i18n,
	ptype,
	disabled,}=$dataFromView,
$vnode_2,
$$_mx5$_view,
$vnode_1;

for(let $q_c_xdimvbjna=list.length,$q_lc_dliwgav=$q_c_xdimvbjna-1,i=0;i<$q_c_xdimvbjna;i+=1){
let e=list[i];let last=i===$q_lc_dliwgav;

if(!e['_ha']||e['_ha'](cell)){
$vnode_1=[];$vnode_2=[$createVNode(0,(i18n(e.tip)))];$vnode_1.push($createVNode('span',$quick_fP_1_static_attr,$vnode_2));let data=cell[e.key];;
if(e.read){
data=e.read(data,cell);;
}
if(e.type==ptype['dE']){
;$$_mx5$_view='4l/60/index?';if(($temp_var=e.min)!=null){;$$_mx5$_view+='min='+$keyOf($refData,$temp_var,'cH.'+(i)+'.cI');};if(($temp_var=e.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'cH.'+(i)+'.cJ');};if(($temp_var=e.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'cH.'+(i)+'.cK');};if(($temp_var=e.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'cH.'+(i)+'.cL');};$$_mx5$_view+='&value='+$keyOf($refData,data,'cM.'+(e.key)+'.cN');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-dH rd-eK rd-em','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'value\',write:\''+$keyOf($refData,e.write,'cH.'+(i)+'.cO')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(e.type==ptype['dL']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,list','class': 'rd-eK rd-ez','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'value\'})','mx5-view': '4l/61/index?disabled='+$keyOf($refData,disabled,'cP')+'&selected='+($encodeUrl(data))+'&list='+$keyOf($refData,e.items,'cH.'+(i)+'.cQ')+'&textKey=text&valueKey=value',}));
}else if(e.type==ptype['dI']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-eK rd-ez','mx5-input': $viewId+'_iS()','mx5-view': '4l/5t/index?disabled='+$keyOf($refData,disabled,'cP')+'&value='+$keyOf($refData,cell,'cR'),}));
}else if(e.type==ptype['dF']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-eK','mx5-input': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'color\'})','mx5-view': '4l/62/index?clear='+($encodeUrl(e.clear))+'&color='+$keyOf($refData,data,'cM.'+(e.key)+'.cN')+'&align=right&disabled='+($encodeUrl(disabled))+'&alpha='+($encodeUrl(e.alpha)),}));
}else if(e.type==ptype['dH']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-eK rd-ez','mx5-input': $viewId+'_iS({use:\'_\'})','mx5-view': '4l/64/style?disabled='+$keyOf($refData,disabled,'cP')+'&value='+$keyOf($refData,cell,'cR')+'&prefix=textStyle',}));
}else if(e.type==ptype['dJ']){
$vnode_1.push($createVNode('textarea',{'class': 'rd-dI rd-eK rd-eN','disabled': (disabled),'mx5-input': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})','value': (data),},0,$special_2));
}else if(e.type==ptype['dN']){
$vnode_1.push($createVNode('input',{'class': 'rd-dH rd-eK','value': (data),'disabled': (disabled),'mx5-input': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})',},1,$special_2));
}else if(e.type==ptype['dG']){
$vnode_2=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','checked': (data),'disabled': (disabled),'mx5-change': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',native:\'checked\'})',},1,$special_4)];
if($quick_fP_3_static_node){
$vnode_2.push($quick_fP_3_static_node);
}else{
$vnode_2.push($quick_fP_3_static_node=$createVNode('i',{'_': 'cH','class': 'rd-em rd-et rd-fg',}));
}
$vnode_1.push($createVNode('label',$quick_fP_2_static_attr,$vnode_2));
}else if(e.type==ptype['dK']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'src\'})','mx5-view': '4l/65/index?src='+$keyOf($refData,data,'cM.'+(e.key)+'.cN')+'&disabled='+$keyOf($refData,disabled,'cP'),}));
}else if(e.type==ptype['e_']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(e.key))+'\',use:\'format\'})','mx5-view': '4l/66/index?format='+$keyOf($refData,data,'cM.'+(e.key)+'.cN')+'&disabled='+$keyOf($refData,disabled,'cP'),}));
}$vnode_0.push($createVNode('div',$quick_fP_0_static_attr,$vnode_1));
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
        if (focusRow == -1) {
            focusRow = 0;
        }
        if (focusCol == -1) {
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
        let { key, use, write, native } = e.params;
        if (use || native) {
            let v = native ? e.eventTarget[native] : e[use];
            if (write) {
                v = write(v, cell, e);
            }
            if (key == 'type') {
                let prev = cell[key];
                if (prev) {
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
            }
            if (key) {
                cell[key] = v;
            }
        }
        dispatch(this.root, 'change', {
            rows
        });
    },
});

});