/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6i/content",["51","../../50/53","../../50/61","../../50/54","../../5g/barcode","../../5g/cell","../6j/index","../6k/index","../6g/index","../6l/index","../6n/style","../6o/index","../6p/index"],(require,exports,module)=>{
require("../6j/index");
require("../6k/index");
require("../6g/index");
require("../6l/index");
require("../6n/style");
require("../6o/index");
require("../6p/index");
let $quick_io_3_static_node;
let $quick_io_0_static_attr={'class': 'rd-g9 rd-ha rd-hg',};
let $quick_io_1_static_attr={'class': 'rd-gR rd-hM',};
let $quick_io_2_static_attr={'class': 'rd-g9 rd-gP rd-gx rd-ha rd-hw',};
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
let { View, config, dispatch, mix } = magix_1;
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
            }]
    }, {
        tip: 'l8',
        type: props_1["gh"]
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
        '_jN'(props) {
            return props.type == 'text' && !props.bindKey;
        }
    }, {
        tip: 'in',
        type: props_1['gf'],
        key: 'textAutoReturn',
        '_jN'(props) {
            return props.type == 'text';
        }
    }, {
        tip: 'im',
        type: props_1["gJ"],
        key: 'textFormat',
        '_jN'(props) {
            return props.type == 'text' && props.bindKey;
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
            return props.type == 'text';
        }
    }, {
        tip: 'iq',
        key: 'textFontfamily',
        type: props_1["gk"],
        items: const_1["gP"],
        '_jN'(props) {
            return props.type == 'text';
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
            return props.type == 'text';
        }
    }, {
        tip: 'it',
        key: 'textForecolor',
        type: props_1["ge"],
        '_jN'(props) {
            return props.type == 'text';
        }
    }, {
        tip: 'iu',
        type: props_1["gg"],
        '_jN'(props) {
            return props.type == 'text';
        }
    }, {
        tip: 'kh',
        type: props_1["gj"],
        key: 'imageContent',
        '_jN'(props) {
            return props.type == 'image' &&
                config('getImageUrl') &&
                !props.bindKey;
            ;
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
        tip: 'h7',
        type: props_1["gi"],
        key: 'barcodeContent',
        '_jN'(props) {
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
        '_jN'(props) {
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

for(let $q_c_xvehrve=list.length,$q_lc_lsnslxdw=$q_c_xvehrve-1,i=0;i<$q_c_xvehrve;i+=1){
let e=list[i];let last=i===$q_lc_lsnslxdw;

if(!e['_jN']||e['_jN'](cell)){
$vnode_1=[];$vnode_2=[$createVNode(0,(i18n(e.tip)))];$vnode_1.push($createVNode('span',$quick_io_1_static_attr,$vnode_2));let data=cell[e.key];;
if(e.read){
data=e.read(data,cell);;
}
if(e.type==ptype['gd']){
;$$_mx5$_view='58/6j/index?';if(($temp_var=e.min)!=null){;$$_mx5$_view+='min='+$keyOf($refData,$temp_var,'eD.'+(i)+'.eE');};if(($temp_var=e.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'eD.'+(i)+'.eF');};if(($temp_var=e.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'eD.'+(i)+'.eG');};if(($temp_var=e.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'eD.'+(i)+'.eH');};$$_mx5$_view+='&value='+$keyOf($refData,data,'eI.'+(e.key)+'.eJ');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-gW rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'value\',write:\''+$keyOf($refData,e.write,'eD.'+(i)+'.eK')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(e.type==ptype['gk']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,list','class': 'rd-g9 rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'value\'})','mx5-view': '58/6k/index?disabled='+$keyOf($refData,disabled,'eL')+'&selected='+($encodeUrl(data))+'&list='+$keyOf($refData,e.items,'eD.'+(i)+'.eM')+'&textKey=text&valueKey=value',}));
}else if(e.type==ptype['gh']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-g9 rd-hj','mx5-input': $viewId+'_lu()','mx5-view': '58/6g/index?disabled='+$keyOf($refData,disabled,'eL')+'&value='+$keyOf($refData,cell,'eN'),}));
}else if(e.type==ptype['ge']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-hj','mx5-input': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'color\'})','mx5-view': '58/6l/index?clear='+($encodeUrl(e.clear))+'&color='+$keyOf($refData,data,'eI.'+(e.key)+'.eJ')+'&align=right&disabled='+($encodeUrl(disabled))+'&alpha='+($encodeUrl(e.alpha)),}));
}else if(e.type==ptype['gg']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-g9 rd-hj','mx5-input': $viewId+'_lu({use:\'_\'})','mx5-view': '58/6n/style?disabled='+$keyOf($refData,disabled,'eL')+'&value='+$keyOf($refData,cell,'eN')+'&prefix=textStyle',}));
}else if(e.type==ptype['gi']){
$vnode_1.push($createVNode('textarea',{'class': 'rd-gh rd-hj rd-hm','disabled': (disabled),'mx5-input': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})','value': (data),},0,$special_2));
}else if(e.type==ptype['gm']){
$vnode_1.push($createVNode('input',{'class': 'rd-gg rd-hj','value': (data),'disabled': (disabled),'mx5-input': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})',},1,$special_2));
}else if(e.type==ptype['gf']){
$vnode_2=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','checked': (data),'disabled': (disabled),'mx5-change': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',native:\'checked\'})',},1,$special_4)];
if($quick_io_3_static_node){
$vnode_2.push($quick_io_3_static_node);
}else{
$vnode_2.push($quick_io_3_static_node=$createVNode('i',{'_': 'eD','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_1.push($createVNode('label',$quick_io_2_static_attr,$vnode_2));
}else if(e.type==ptype['gj']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'src\'})','mx5-view': '58/6o/index?src='+$keyOf($refData,data,'eI.'+(e.key)+'.eJ')+'&disabled='+$keyOf($refData,disabled,'eL'),}));
}else if(e.type==ptype['gJ']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(e.key))+'\',use:\'format\'})','mx5-view': '58/6p/index?format='+$keyOf($refData,data,'eI.'+(e.key)+'.eJ')+'&disabled='+$keyOf($refData,disabled,'eL'),}));
}$vnode_0.push($createVNode('div',$quick_io_0_static_attr,$vnode_1));
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
    '_lu<input,change>'(e) {
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
                        cell.textFontsize = const_1['ge'](cell.textFontsize);
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