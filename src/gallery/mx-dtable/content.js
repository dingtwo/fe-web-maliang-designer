/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/78/content",["5c","../../5b/5e","../../5b/6c","../../5b/5f","../../5r/barcode","../../5r/cell","../../5r/table","../6u/index","../6v/index","../6r/index","../70/index","../72/style","../73/index","../74/index","../74/fx"],(require,exports,module)=>{
require("../6u/index");
require("../6v/index");
require("../6r/index");
require("../70/index");
require("../72/style");
require("../73/index");
require("../74/index");
require("../74/fx");
let $quick_nR_3_static_node;
let $quick_nR_0_static_attr={'class': 'rd-m5 rd-mX rd-mZ',};
let $quick_nR_1_static_attr={'class': 'rd-mF rd-nA',};
let $quick_nR_2_static_attr={'class': 'rd-mD rd-mX rd-mZ rd-ml rd-nk',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let barcode_1 = require("../../5r/barcode");
let cell_1 = require("../../5r/cell");
let table_1 = require("../../5r/table");
let { config, View, dispatch, mix } = magix_1;
let PList = [{
        tip: 'rR',
        key: 'type',
        type: props_1["l9"],
        items: [{
                text: 'qF',
                value: ''
            }, {
                text: 're',
                value: 'text'
            }, {
                text: 'p5',
                value: 'image'
            }, {
                text: 'nO',
                value: 'barcode'
            }, {
                text: 'o_',
                value: 'qrcode'
            }],
        omit: 1,
        '_py'(cell, props) {
            let { focusRow, rows } = props;
            table_1["l2"](props, true);
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
        tip: 'rS',
        key: 'type',
        type: props_1["l9"],
        items: [{
                text: 'rT',
                value: 'text'
            }, {
                text: 'sn',
                value: 'sumpage'
            }, {
                text: 'so',
                value: 'sum'
            }, {
                text: 'sp',
                value: 'acc'
            }, {
                text: 'sq',
                value: 'avg'
            }, {
                text: 'sr',
                value: 'avgpage'
            }, {
                text: 'ss',
                value: 'avgacc'
            }, {
                text: 'rW',
                value: 'custom'
            }],
        omit: 0,
        '_py'(cell, props) {
            let { focusRow, rows } = props;
            table_1["l2"](props, true);
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
        tip: 'rX',
        type: props_1["l6"]
    }, {
        tip: 'rY',
        key: 'paddingTop',
        type: props_1["l2"],
        read: transform_1["l5"],
        write: transform_1["m_"],
        min: 0,
        fixed: const_1["mI"],
        step: const_1["mH"],
        max: () => const_1["l3"](100)
    }, {
        tip: 'rZ',
        key: 'paddingRight',
        type: props_1["l2"],
        read: transform_1["l5"],
        write: transform_1["m_"],
        min: 0,
        fixed: const_1["mI"],
        step: const_1["mH"],
        max: () => const_1["l3"](100)
    }, {
        tip: 'r0',
        key: 'paddingBottom',
        type: props_1["l2"],
        read: transform_1["l5"],
        write: transform_1["m_"],
        min: 0,
        fixed: const_1["mI"],
        step: const_1["mH"],
        max: () => const_1["l3"](100)
    }, {
        tip: 'r1',
        key: 'paddingLeft',
        type: props_1["l2"],
        read: transform_1["l5"],
        write: transform_1["m_"],
        min: 0,
        fixed: const_1["mI"],
        step: const_1["mH"],
        max: () => const_1["l3"](100)
    }, {
        tip: 'nU',
        key: 'alpha',
        type: props_1["l2"],
        step: 0.1,
        fixed: 1,
        min: 0,
        max: 1
    }, {
        tip: 'r2',
        key: 'background',
        type: props_1["l3"],
        clear: true,
    }, {
        tip: 'r3',
        type: props_1["ma"],
        key: 'textContent',
        '_py'(cell, props) {
            let { focusRow, rows } = props;
            table_1["l2"](props, true);
            let ri = 0;
            //let totalRowIndex = -1;
            let dataRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    //totalRowIndex = ri;
                }
                else if (row.data) {
                    dataRowIndex = ri;
                }
                ri++;
            }
            return (cell.textFontsize != null) /*&& focusRow != totalRowIndex*/ && focusRow != dataRowIndex && cell.type == 'text';
        }
    }, {
        tip: 'oc',
        type: props_1['l4'],
        key: 'textAutoReturn',
        '_py'(cell, props) {
            let { focusRow, rows } = props;
            table_1["l2"](props, true);
            let ri = 0;
            let totalRowIndex = -1;
            let dataRowIndex = -1;
            let labelRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    totalRowIndex = ri;
                }
                else if (row.data) {
                    dataRowIndex = ri;
                }
                else if (row.label) {
                    if (labelRowIndex == -1) {
                        labelRowIndex = ri;
                    }
                }
                ri++;
            }
            return (cell.textFontsize != null) && (focusRow == dataRowIndex || (focusRow >= labelRowIndex && focusRow < dataRowIndex) || focusRow == totalRowIndex); // && (cell.type == 'text' || (focusRow == totalRowIndex));
        }
    }, {
        tip: 'ob',
        type: props_1["mx"],
        key: 'textFormat',
        '_py'(cell, props) {
            //console.log(cell);
            let { focusRow, rows } = props;
            table_1["l2"](props, true);
            let ri = 0;
            let totalRowIndex = -1;
            let dataRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    totalRowIndex = ri;
                }
                else if (row.data) {
                    dataRowIndex = ri;
                }
                ri++;
            }
            return (focusRow == totalRowIndex &&
                cell.type != 'text' &&
                cell.type != 'custom') ||
                (cell.type == 'text' &&
                    focusRow == dataRowIndex);
        }
    }, {
        tip: 'q3',
        type: props_1["my"],
        key: 'textFormat',
        '_py'(cell) {
            return cell.type == 'custom';
        }
    }, {
        tip: 'oe',
        key: 'textFontsize',
        type: props_1["l2"],
        min: 0,
        fixed: const_1["mI"],
        step: const_1["mH"],
        read: transform_1["l5"],
        write: transform_1["m_"],
        '_py'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'of',
        key: 'textFontfamily',
        type: props_1["l9"],
        items: const_1["mD"],
        '_py'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'og',
        key: 'textLetterspacing',
        type: props_1["l2"],
        min: 0,
        fixed: const_1["mI"],
        step: const_1["mH"],
        read: transform_1["l5"],
        write: transform_1["m_"],
        '_py'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'oi',
        key: 'textForecolor',
        type: props_1["l3"],
        '_py'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'oj',
        type: props_1["l5"],
        '_py'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: 'p7',
        type: props_1["l8"],
        key: 'imageContent',
        '_py'(cell, props) {
            let { focusRow, rows } = props;
            table_1["l2"](props, true);
            let ri = 0;
            let totalRowIndex = -1;
            let dataRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    totalRowIndex = ri;
                }
                else if (row.data) {
                    dataRowIndex = ri;
                }
                ri++;
            }
            return config('getImageUrl') && cell.type == 'image' && focusRow != totalRowIndex && focusRow != dataRowIndex;
        }
    }, {
        tip: 'p9',
        type: props_1["l4"],
        key: 'imageRotateX',
        '_py'(props) {
            return props.type == 'image';
        }
    }, {
        tip: 'q_',
        type: props_1["l4"],
        key: 'imageRotateY',
        '_py'(props) {
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
        tip: 'nV',
        type: props_1["l7"],
        key: 'barcodeContent',
        '_py'(cell, props) {
            let { focusRow, rows } = props;
            table_1["l2"](props, true);
            let ri = 0;
            let totalRowIndex = -1;
            let dataRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    totalRowIndex = ri;
                }
                else if (row.data) {
                    dataRowIndex = ri;
                }
                ri++;
            }
            return cell.type == 'barcode' && focusRow != totalRowIndex && focusRow != dataRowIndex;
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
        tip: 'nX',
        key: 'barcodeFormat',
        type: props_1["l9"],
        items: barcode_1["_nL"],
        '_py'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'nY',
        key: 'barcodeShowText',
        type: props_1["l4"],
        '_py'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'nZ',
        key: 'barcodeColor',
        type: props_1["l3"],
        '_py'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'n0',
        key: 'barcodeLineWidth',
        type: props_1["l2"],
        read: transform_1["l5"],
        write: transform_1["m_"],
        min: 1,
        max: 8,
        '_py'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: 'nV',
        type: props_1["l7"],
        key: 'qrcodeContent',
        '_py'(cell, props) {
            let { focusRow, rows } = props;
            table_1["l2"](props, true);
            let ri = 0;
            let totalRowIndex = -1;
            let dataRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    totalRowIndex = ri;
                }
                else if (row.data) {
                    dataRowIndex = ri;
                }
                ri++;
            }
            return cell.type == 'qrcode' && focusRow != totalRowIndex && focusRow != dataRowIndex;
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
	props,
	i18n,
	ptype,
	disabled,}=$dataFromView,
$vnode_2,
$$_mx5$_view,
$vnode_1;

for(let $q_c_lrsrotg=list.length,$q_lc_verhwbgh=$q_c_lrsrotg-1,i=0;i<$q_c_lrsrotg;i+=1){
let e=list[i];let last=i===$q_lc_verhwbgh;

if(!e['_py']||e['_py'](cell,props)){
$vnode_1=[];$vnode_2=[$createVNode(0,(i18n(e.tip)))];$vnode_1.push($createVNode('span',$quick_nR_1_static_attr,$vnode_2));let data=cell[e.key];;
if(e.read){
data=e.read(data,cell);;
}
if(e.type==ptype['l2']){
;$$_mx5$_view='5j/6u/index?';if(($temp_var=e.min)!=null){;$$_mx5$_view+='min='+$keyOf($refData,$temp_var,'i!.'+(i)+'.i@');};if(($temp_var=e.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'i!.'+(i)+'.i$');};if(($temp_var=e.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'i!.'+(i)+'.i^');};if(($temp_var=e.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'i!.'+(i)+'.i*');};$$_mx5$_view+='&value='+$keyOf($refData,data,'i{.'+(e.key)+'.i}');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-l5 rd-m8 rd-mK','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_rf({key:\''+($encodeQuote(e.key))+'\',use:\'value\',write:\''+$keyOf($refData,e.write,'i!.'+(i)+'.i[')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(e.type==ptype['l9']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,list','class': 'rd-m8 rd-mX','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(e.key))+'\',use:\'value\',omit:'+(e.omit)+'})','mx5-view': '5j/6v/index?disabled='+$keyOf($refData,disabled,'i]')+'&selected='+($encodeUrl(data))+'&list='+$keyOf($refData,e.items,'i!.'+(i)+'.i|')+'&textKey=text&valueKey=value',}));
}else if(e.type==ptype['l6']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-m8 rd-mX','mx5-input': $viewId+'_rf()','mx5-view': '5j/6r/index?disabled='+$keyOf($refData,disabled,'i]')+'&value='+$keyOf($refData,cell,'i,'),}));
}else if(e.type==ptype['l3']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-m8','mx5-input': $viewId+'_rf({key:\''+($encodeQuote(e.key))+'\',use:\'color\'})','mx5-view': '5j/70/index?clear='+($encodeUrl(e.clear))+'&color='+$keyOf($refData,data,'i{.'+(e.key)+'.i}')+'&align=right&disabled='+($encodeUrl(disabled))+'&alpha='+($encodeUrl(e.alpha)),}));
}else if(e.type==ptype['l5']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-m8 rd-mX','mx5-input': $viewId+'_rf({use:\'_\'})','mx5-view': '5j/72/style?disabled='+$keyOf($refData,disabled,'i]')+'&value='+$keyOf($refData,cell,'i,')+'&prefix=textStyle',}));
}else if(e.type==ptype['l7']){
$vnode_1.push($createVNode('textarea',{'class': 'rd-l6 rd-m8 rd-na','disabled': (disabled),'mx5-input': $viewId+'_rf({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})','value': (data),},0,$special_2));
}else if(e.type==ptype['ma']){
$vnode_1.push($createVNode('input',{'class': 'rd-l5 rd-m8','value': (data),'disabled': (disabled),'mx5-input': $viewId+'_rf({key:\''+($encodeQuote(e.key))+'\',native:\'value\'})',},1,$special_2));
}else if(e.type==ptype['l4']){
$vnode_2=[$createVNode('input',{'class': 'rd-mJ rd-nD','type': 'checkbox','checked': (data),'disabled': (disabled),'mx5-change': $viewId+'_rf({key:\''+($encodeQuote(e.key))+'\',native:\'checked\'})',},1,$special_4)];
if($quick_nR_3_static_node){
$vnode_2.push($quick_nR_3_static_node);
}else{
$vnode_2.push($quick_nR_3_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mK rd-mR rd-nE',}));
}
$vnode_1.push($createVNode('label',$quick_nR_2_static_attr,$vnode_2));
}else if(e.type==ptype['l8']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(e.key))+'\',use:\'src\'})','mx5-view': '5j/73/index?src='+($encodeUrl(data))+'&disabled='+$keyOf($refData,disabled,'i]'),}));
}else if(e.type==ptype['mx']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(e.key))+'\',use:\'format\'})','mx5-view': '5j/74/index?format='+$keyOf($refData,data,'i{.'+(e.key)+'.i}')+'&disabled='+$keyOf($refData,disabled,'i]'),}));
}else if(e.type==ptype['my']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(e.key))+'\',use:\'format\'})','mx5-view': '5j/74/fx?format='+$keyOf($refData,data,'i{.'+(e.key)+'.i}')+'&disabled='+$keyOf($refData,disabled,'i]'),}));
}$vnode_0.push($createVNode('div',$quick_nR_0_static_attr,$vnode_1));
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
    '_rf<input,change>'(e) {
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
                        cell.textFontsize = const_1['l3'](cell.textFontsize);
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