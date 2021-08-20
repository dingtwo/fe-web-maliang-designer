/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-dtable/content",["magix5","../../designer/const","../../designer/props","../../designer/transform","../../provider/barcode","../../provider/cell","../../provider/table","../mx-number/index","../mx-dropdown/index","../mx-align/index","../mx-color/index","../mx-font/style","../mx-picture/index","../mx-format/index","../mx-format/fx"],(require,exports,module)=>{
require("../mx-number/index");
require("../mx-dropdown/index");
require("../mx-align/index");
require("../mx-color/index");
require("../mx-font/style");
require("../mx-picture/index");
require("../mx-format/index");
require("../mx-format/fx");
let $quick_eG_3_static_node;
let $quick_eG_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-margin-bottom-4',};
let $quick_eG_1_static_attr={'class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',};
let $quick_eG_2_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-label',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let barcode_1 = require("../../provider/barcode");
let cell_1 = require("../../provider/cell");
let table_1 = require("../../provider/table");
let { config, View, dispatch, mix } = magix_1;
let PList = [{
        tip: '@:{lang#props.cell.content~rs}',
        key: 'type',
        type: props_1["@:{eprops#dropdown~rs}"],
        items: [{
                text: '@:{lang#please.select~rs}',
                value: ''
            }, {
                text: '@:{lang#elements.text~rs}',
                value: 'text'
            }, {
                text: '@:{lang#elements.image~rs}',
                value: 'image'
            }, {
                text: '@:{lang#elements.barcode~rs}',
                value: 'barcode'
            }, {
                text: '@:{lang#elements.qrcode~rs}',
                value: 'qrcode'
            }],
        omit: 1,
        '@:{if.show~rs}'(cell, props) {
            let { focusRow, rows } = props;
            table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
        tip: '@:{lang#props.cell.compute~rs}',
        key: 'type',
        type: props_1["@:{eprops#dropdown~rs}"],
        items: [{
                text: '@:{lang#cell.static.text~rs}',
                value: 'text'
            }, {
                text: '@:{lang#cell.sum.current.page~rs}',
                value: 'sumpage'
            }, {
                text: '@:{lang#cell.sum.table~rs}',
                value: 'sum'
            }, {
                text: '@:{lang#cell.sum.acc~rs}',
                value: 'acc'
            }, {
                text: '@:{lang#cell.avg.table~rs}',
                value: 'avg'
            }, {
                text: '@:{lang#cell.avg.current.page~rs}',
                value: 'avgpage'
            }, {
                text: '@:{lang#cell.avg.acc~rs}',
                value: 'avgacc'
            }, {
                text: '@:{lang#cell.custom~rs}',
                value: 'custom'
            }],
        omit: 0,
        '@:{if.show~rs}'(cell, props) {
            let { focusRow, rows } = props;
            table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
        tip: '@:{lang#props.content.align~rs}',
        type: props_1["@:{eprops#align~rs}"]
    }, {
        tip: '@:{lang#props.paddint.top~rs}',
        key: 'paddingTop',
        type: props_1["@:{eprops#number~rs}"],
        read: transform_1["@:{transform#to.show.value~rs}"],
        write: transform_1["@:{transform#to.real.value~rs}"],
        min: 0,
        fixed: const_1["@:{const#unit.fixed~rs}"],
        step: const_1["@:{const#unit.step~rs}"],
        max: () => const_1["@:{const#to.unit~rs}"](100)
    }, {
        tip: '@:{lang#props.paddint.right~rs}',
        key: 'paddingRight',
        type: props_1["@:{eprops#number~rs}"],
        read: transform_1["@:{transform#to.show.value~rs}"],
        write: transform_1["@:{transform#to.real.value~rs}"],
        min: 0,
        fixed: const_1["@:{const#unit.fixed~rs}"],
        step: const_1["@:{const#unit.step~rs}"],
        max: () => const_1["@:{const#to.unit~rs}"](100)
    }, {
        tip: '@:{lang#props.paddint.bottom~rs}',
        key: 'paddingBottom',
        type: props_1["@:{eprops#number~rs}"],
        read: transform_1["@:{transform#to.show.value~rs}"],
        write: transform_1["@:{transform#to.real.value~rs}"],
        min: 0,
        fixed: const_1["@:{const#unit.fixed~rs}"],
        step: const_1["@:{const#unit.step~rs}"],
        max: () => const_1["@:{const#to.unit~rs}"](100)
    }, {
        tip: '@:{lang#props.paddint.left~rs}',
        key: 'paddingLeft',
        type: props_1["@:{eprops#number~rs}"],
        read: transform_1["@:{transform#to.show.value~rs}"],
        write: transform_1["@:{transform#to.real.value~rs}"],
        min: 0,
        fixed: const_1["@:{const#unit.fixed~rs}"],
        step: const_1["@:{const#unit.step~rs}"],
        max: () => const_1["@:{const#to.unit~rs}"](100)
    }, {
        tip: '@:{lang#props.alpha~rs}',
        key: 'alpha',
        type: props_1["@:{eprops#number~rs}"],
        step: 0.1,
        fixed: 1,
        min: 0,
        max: 1
    }, {
        tip: '@:{lang#props.cell.background~rs}',
        key: 'background',
        type: props_1["@:{eprops#color~rs}"],
        clear: true,
    }, {
        tip: '@:{lang#props.text~rs}',
        type: props_1["@:{eprops#text.input~rs}"],
        key: 'textContent',
        '@:{if.show~rs}'(cell, props) {
            let { focusRow, rows } = props;
            table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
        tip: '@:{lang#mx-gallery.text.auto.return~rs}',
        type: props_1['@:{eprops#boolean~rs}'],
        key: 'textAutoReturn',
        '@:{if.show~rs}'(cell, props) {
            let { focusRow, rows } = props;
            table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
        tip: '@:{lang#props.format~rs}',
        type: props_1["@:{eprops#format~rs}"],
        key: 'textFormat',
        '@:{if.show~rs}'(cell, props) {
            //console.log(cell);
            let { focusRow, rows } = props;
            table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
        tip: '@:{lang#props.format.fx~rs}',
        type: props_1["@:{eprops#format.fx~rs}"],
        key: 'textFormat',
        '@:{if.show~rs}'(cell) {
            return cell.type == 'custom';
        }
    }, {
        tip: '@:{lang#props.font.size~rs}',
        key: 'textFontsize',
        type: props_1["@:{eprops#number~rs}"],
        min: 0,
        fixed: const_1["@:{const#unit.fixed~rs}"],
        step: const_1["@:{const#unit.step~rs}"],
        read: transform_1["@:{transform#to.show.value~rs}"],
        write: transform_1["@:{transform#to.real.value~rs}"],
        '@:{if.show~rs}'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: '@:{lang#props.font.family~rs}',
        key: 'textFontfamily',
        type: props_1["@:{eprops#dropdown~rs}"],
        items: const_1["@:{const#font.family~rs}"],
        '@:{if.show~rs}'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: '@:{lang#props.letter.spacing~rs}',
        key: 'textLetterspacing',
        type: props_1["@:{eprops#number~rs}"],
        min: 0,
        fixed: const_1["@:{const#unit.fixed~rs}"],
        step: const_1["@:{const#unit.step~rs}"],
        read: transform_1["@:{transform#to.show.value~rs}"],
        write: transform_1["@:{transform#to.real.value~rs}"],
        '@:{if.show~rs}'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: '@:{lang#props.forecolor~rs}',
        key: 'textForecolor',
        type: props_1["@:{eprops#color~rs}"],
        '@:{if.show~rs}'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: '@:{lang#props.font.style~rs}',
        type: props_1["@:{eprops#font.style~rs}"],
        '@:{if.show~rs}'(props) {
            return props.textFontsize != null;
        }
    }, {
        tip: '@:{lang#props.image~rs}',
        type: props_1["@:{eprops#image~rs}"],
        key: 'imageContent',
        '@:{if.show~rs}'(cell, props) {
            let { focusRow, rows } = props;
            table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
        tip: '@:{lang#props.rotate.x~rs}',
        type: props_1["@:{eprops#boolean~rs}"],
        key: 'imageRotateX',
        '@:{if.show~rs}'(props) {
            return props.type == 'image';
        }
    }, {
        tip: '@:{lang#props.rotate.y~rs}',
        type: props_1["@:{eprops#boolean~rs}"],
        key: 'imageRotateY',
        '@:{if.show~rs}'(props) {
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
        tip: '@:{lang#props.text.content~rs}',
        type: props_1["@:{eprops#text.area~rs}"],
        key: 'barcodeContent',
        '@:{if.show~rs}'(cell, props) {
            let { focusRow, rows } = props;
            table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
        tip: '@:{lang#props.barcode.format~rs}',
        key: 'barcodeFormat',
        type: props_1["@:{eprops#dropdown~rs}"],
        items: barcode_1["@:{types~rs}"],
        '@:{if.show~rs}'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: '@:{lang#props.show.text~rs}',
        key: 'barcodeShowText',
        type: props_1["@:{eprops#boolean~rs}"],
        '@:{if.show~rs}'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: '@:{lang#props.line.color~rs}',
        key: 'barcodeColor',
        type: props_1["@:{eprops#color~rs}"],
        '@:{if.show~rs}'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: '@:{lang#props.line.width~rs}',
        key: 'barcodeLineWidth',
        type: props_1["@:{eprops#number~rs}"],
        read: transform_1["@:{transform#to.show.value~rs}"],
        write: transform_1["@:{transform#to.real.value~rs}"],
        min: 1,
        max: 8,
        '@:{if.show~rs}'(props) {
            return props.type == 'barcode';
        }
    }, {
        tip: '@:{lang#props.text.content~rs}',
        type: props_1["@:{eprops#text.area~rs}"],
        key: 'qrcodeContent',
        '@:{if.show~rs}'(cell, props) {
            let { focusRow, rows } = props;
            table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
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
$__line=1;$__art="{{each list as e i last}}";$__ctrl="for(let $q_c_xmrehq=list.length,$q_lc_tgwivmgew=$q_c_xmrehq-1,i=0;i<$q_c_xmrehq;i++){let e=list[i];let last=i===$q_lc_tgwivmgew;";
for(let $q_c_xmrehq=list.length,$q_lc_tgwivmgew=$q_c_xmrehq-1,i=0;i<$q_c_xmrehq;i+=1){
let e=list[i];let last=i===$q_lc_tgwivmgew;
$__line=2;$__art="{{if !e[\\'@:{if.show~rs}\\']||e[\\'@:{if.show}\\'](cell,props)}}";$__ctrl="if(!e['@:{if.show~rs}']||e['@:{if.show~rs}'](cell,props)){";
if(!e['@:{if.show~rs}']||e['@:{if.show~rs}'](cell,props)){
$vnode_1=[];$vnode_2=[$createVNode(0,($__line=5,$__art='{{=i18n(e.tip)}}',$__ctrl='<%=i18n(e.tip)%>',(i18n(e.tip))))];$vnode_1.push($createVNode('span',$quick_eG_1_static_attr,$vnode_2));($__line=7,$__art='{{set data=cell[e.key]}}','');$__ctrl='<%let data=cell[e.key];%>';let data=cell[e.key];;$__line=8;$__art="{{if e.read}}";$__ctrl="if(e.read){";
if(e.read){
($__line=9,$__art='{{data=e.read(data,cell);}}','');$__ctrl='<%data=e.read(data,cell);%>';data=e.read(data,cell);;
}$__line=11;$__art="{{if e.type==ptype[\\'@:{eprops#number~rs}\\']}}";$__ctrl="if(e.type==ptype['@:{eprops#number~rs}']){";
if(e.type==ptype['@:{eprops#number~rs}']){
;$$_mx5$_view='gallery/mx-number/index?'+($__line=12,$__art='{{#e.min}}','');$__ctrl='<%if(($temp_var=e.min)!=null){%>';if(($temp_var=e.min)!=null){;$$_mx5$_view+='min='+($__ctrl='<%#$temp_var,\'auto_key_list.\'+(i)+\'.e.min\'%>',$keyOf($refData,$temp_var,'auto_key_list.'+(i)+'.e.min'));$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=12,$__art='{{#e.max}}','');$__ctrl='<%if(($temp_var=e.max)!=null){%>';if(($temp_var=e.max)!=null){;$$_mx5$_view+='&max='+($__ctrl='<%#$temp_var,\'auto_key_list.\'+(i)+\'.e.max\'%>',$keyOf($refData,$temp_var,'auto_key_list.'+(i)+'.e.max'));$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=12,$__art='{{#e.step}}','');$__ctrl='<%if(($temp_var=e.step)!=null){%>';if(($temp_var=e.step)!=null){;$$_mx5$_view+='&step='+($__ctrl='<%#$temp_var,\'auto_key_list.\'+(i)+\'.e.step\'%>',$keyOf($refData,$temp_var,'auto_key_list.'+(i)+'.e.step'));$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=12,$__art='{{#e.fixed}}','');$__ctrl='<%if(($temp_var=e.fixed)!=null){%>';if(($temp_var=e.fixed)!=null){;$$_mx5$_view+='&fixed='+($__ctrl='<%#$temp_var,\'auto_key_list.\'+(i)+\'.e.fixed\'%>',$keyOf($refData,$temp_var,'auto_key_list.'+(i)+'.e.fixed'));$__ctrl='<%}%>';};$$_mx5$_view+='&value='+($__line=12,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_cell.\'+(e.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_cell.'+(e.key)+'.data'));$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=12,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-dtable/content.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=12,$__art='{{=e.key}}',$__ctrl='<%=$encodeQuote(e.key)%>',($encodeQuote(e.key)))+'\',use:\'value\',write:\''+($__line=12,$__art='{{#e.write}}',$__ctrl='<%#e.write,\'auto_key_list.\'+(i)+\'.e.write\'%>',$keyOf($refData,e.write,'auto_key_list.'+(i)+'.e.write'))+'\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=13,$__art="{{else if e.type==ptype[\\'@:{eprops#dropdown~rs}\\']}}",$__ctrl="else if(e.type==ptype['@:{eprops#dropdown~rs}']){"),e.type==ptype['@:{eprops#dropdown~rs}']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,list','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=14,$__art='{{=e.key}}',$__ctrl='<%=$encodeQuote(e.key)%>',($encodeQuote(e.key)))+'\',use:\'value\',omit:'+($__line=14,$__art='{{=e.omit}}',$__ctrl='<%=e.omit%>',(e.omit))+'})','mx5-view': 'gallery/mx-dropdown/index?disabled='+($__line=14,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled'))+'&selected='+($__line=14,$__art='{{=data}}',$__ctrl='<%=$encodeUrl(data)%>',($encodeUrl(data)))+'&list='+($__line=14,$__art='{{#e.items}}',$__ctrl='<%#e.items,\'auto_key_list.\'+(i)+\'.e.items\'%>',$keyOf($refData,e.items,'auto_key_list.'+(i)+'.e.items'))+'&textKey=text&valueKey=value',}));
}else if(($__line=15,$__art="{{else if e.type==ptype[\\'@:{eprops#align~rs}\\']}}",$__ctrl="else if(e.type==ptype['@:{eprops#align~rs}']){"),e.type==ptype['@:{eprops#align~rs}']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}()','mx5-view': 'gallery/mx-align/index?disabled='+($__line=16,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled'))+'&value='+($__line=16,$__art='{{#cell}}',$__ctrl='<%#cell,\'auto_key_cell\'%>',$keyOf($refData,cell,'auto_key_cell')),}));
}else if(($__line=17,$__art="{{else if e.type==ptype[\\'@:{eprops#color~rs}\\']}}",$__ctrl="else if(e.type==ptype['@:{eprops#color~rs}']){"),e.type==ptype['@:{eprops#color~rs}']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list','class': 'rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=18,$__art='{{=e.key}}',$__ctrl='<%=$encodeQuote(e.key)%>',($encodeQuote(e.key)))+'\',use:\'color\'})','mx5-view': 'gallery/mx-color/index?clear='+($__line=18,$__art='{{=e.clear}}',$__ctrl='<%=$encodeUrl(e.clear)%>',($encodeUrl(e.clear)))+'&color='+($__line=18,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_cell.\'+(e.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_cell.'+(e.key)+'.data'))+'&align=right&disabled='+($__line=18,$__art='{{=disabled}}',$__ctrl='<%=$encodeUrl(disabled)%>',($encodeUrl(disabled)))+'&alpha='+($__line=18,$__art='{{=e.alpha}}',$__ctrl='<%=$encodeUrl(e.alpha)%>',($encodeUrl(e.alpha))),}));
}else if(($__line=19,$__art="{{else if e.type==ptype[\\'@:{eprops#font.style~rs}\\']}}",$__ctrl="else if(e.type==ptype['@:{eprops#font.style~rs}']){"),e.type==ptype['@:{eprops#font.style~rs}']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,cell','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}({use:\'_\'})','mx5-view': 'gallery/mx-font/style?disabled='+($__line=20,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled'))+'&value='+($__line=20,$__art='{{#cell}}',$__ctrl='<%#cell,\'auto_key_cell\'%>',$keyOf($refData,cell,'auto_key_cell'))+'&prefix=textStyle',}));
}else if(($__line=21,$__art="{{else if e.type==ptype[\\'@:{eprops#text.area~rs}\\']}}",$__ctrl="else if(e.type==ptype['@:{eprops#text.area~rs}']){"),e.type==ptype['@:{eprops#text.area~rs}']){
$vnode_1.push($createVNode('textarea',{'class': 'rd-_assets_index_less_-height-100 rd-_assets_index_less_-textarea rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=22,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-dtable/content.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=22,$__art='{{=e.key}}',$__ctrl='<%=$encodeQuote(e.key)%>',($encodeQuote(e.key)))+'\',native:\'value\'})','value': ($__line=22,$__art='{{=data}}',$__ctrl='<%=data%>',(data)),},0,$special_2));
}else if(($__line=23,$__art="{{else if e.type==ptype[\\'@:{eprops#text.input~rs}\\']}}",$__ctrl="else if(e.type==ptype['@:{eprops#text.input~rs}']){"),e.type==ptype['@:{eprops#text.input~rs}']){
$vnode_1.push($createVNode('input',{'class': 'rd-_assets_index_less_-input rd-_assets_index_less_-width-140','value': ($__line=24,$__art='{{=data}}',$__ctrl='<%=data%>',(data)),'disabled': ($temp_var=($__line=24,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-dtable/content.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=24,$__art='{{=e.key}}',$__ctrl='<%=$encodeQuote(e.key)%>',($encodeQuote(e.key)))+'\',native:\'value\'})',},1,$special_2));
}else if(($__line=25,$__art="{{else if e.type==ptype[\\'@:{eprops#boolean~rs}\\']}}",$__ctrl="else if(e.type==ptype['@:{eprops#boolean~rs}']){"),e.type==ptype['@:{eprops#boolean~rs}']){
$vnode_2=[$createVNode('input',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-switch-input','type': 'checkbox','checked': ($temp_var=($__line=27,$__art='{{=data}}',$__ctrl='<%=data%>',data),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-dtable/content.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'disabled': ($temp_var=($__line=27,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-dtable/content.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=27,$__art='{{=e.key}}',$__ctrl='<%=$encodeQuote(e.key)%>',($encodeQuote(e.key)))+'\',native:\'checked\'})',},1,$special_4)];
if($quick_eG_3_static_node){
$vnode_2.push($quick_eG_3_static_node);
}else{
$vnode_2.push($quick_eG_3_static_node=$createVNode('i',{'_': 'b^','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-switch-button rd-_assets_index_less_-unselectable',}));
}
$vnode_1.push($createVNode('label',$quick_eG_2_static_attr,$vnode_2));
}else if(($__line=30,$__art="{{else if e.type==ptype[\\'@:{eprops#image~rs}\\']}}",$__ctrl="else if(e.type==ptype['@:{eprops#image~rs}']){"),e.type==ptype['@:{eprops#image~rs}']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=31,$__art='{{=e.key}}',$__ctrl='<%=$encodeQuote(e.key)%>',($encodeQuote(e.key)))+'\',use:\'src\'})','mx5-view': 'gallery/mx-picture/index?src='+($__line=31,$__art='{{=data}}',$__ctrl='<%=$encodeUrl(data)%>',($encodeUrl(data)))+'&disabled='+($__line=31,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled')),}));
}else if(($__line=32,$__art="{{else if e.type==ptype[\\'@:{eprops#format~rs}\\']}}",$__ctrl="else if(e.type==ptype['@:{eprops#format~rs}']){"),e.type==ptype['@:{eprops#format~rs}']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=33,$__art='{{=e.key}}',$__ctrl='<%=$encodeQuote(e.key)%>',($encodeQuote(e.key)))+'\',use:\'format\'})','mx5-view': 'gallery/mx-format/index?format='+($__line=33,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_cell.\'+(e.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_cell.'+(e.key)+'.data'))+'&disabled='+($__line=33,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled')),}));
}else if(($__line=34,$__art="{{else if e.type==ptype[\\'@:{eprops#format.fx~rs}\\']}}",$__ctrl="else if(e.type==ptype['@:{eprops#format.fx~rs}']){"),e.type==ptype['@:{eprops#format.fx~rs}']){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'cell,list,disabled','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=35,$__art='{{=e.key}}',$__ctrl='<%=$encodeQuote(e.key)%>',($encodeQuote(e.key)))+'\',use:\'format\'})','mx5-view': 'gallery/mx-format/fx?format='+($__line=35,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_cell.\'+(e.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_cell.'+(e.key)+'.data'))+'&disabled='+($__line=35,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled')),}));
}$vnode_0.push($createVNode('div',$quick_eG_0_static_attr,$vnode_1));
}
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-dtable/content.html'; throw msg; }  } ,
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
    '@:{update.prop~rs}<input,change>'(e) {
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
                        cell.textFontsize = const_1['@:{const#to.unit~rs}'](cell.textFontsize);
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