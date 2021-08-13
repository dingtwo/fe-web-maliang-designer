/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/form-collect/index",["5c","../../5b/5e","../../5r/format","../../5r/table","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");
let $quick_mA_static_text;
let $quick_mB_static_text;
let $quick_mQ_0_static_attr={'class': 'rd-mB rd-mC rd-mX rd-mZ rd-nb rd-ng',};
let $quick_mQ_1_static_attr={'class': 'rd-mU',};
let $special_2={'value':'value',};
let $special_4={'selected':'selected',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let format_1 = require("../../5r/format");
let table_1 = require("../../5r/table");
let { View, mark, dispatch, node, mix } = magix_1;
let format = format_1["_pM"].bind(format_1);
let filter = (key, value) => key.startsWith('_') ? undefined : value;
let calcSum = values => {
    let sum = 0;
    for (let group of values) {
        for (let one of group) {
            if (one['_qh']) {
                sum += one['_qi'];
            }
        }
    }
    return sum;
};
let calcAvg = values => {
    let sum = 0, avg = 0, count = 0;
    for (let group of values) {
        for (let one of group) {
            if (one['_qh']) {
                sum += one['_qi'];
                count++;
            }
        }
    }
    if (count > 0) {
        avg = sum / count;
    }
    return avg;
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	readonly,
	getMaxCol,
	excelTitle,
	toUnit,
	getSumByCell,
	format,
	calcSum,
	calcAvg,
	toPx,}=$dataFromView,
$text,
$vnode_6,
$vnode_5,
$vnode_4,
$$_class,
$$_style,
$vnode_7,
$vnode_8,
$vnode_3,
$vnode_2,
$vnode_1;
$text='';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,eReadonly=props.readonly,excel=props.excel,excelLeft=props.excelLeft,excelTop=props.excelTop,excelBackground=props.excelBackground,excelForecolor=props.excelForecolor;;$text+=' ';let bwn=(borderdeed=='collapse'?1:2)*borderwidth;;$text+=' ';let findLabelRow,findTotalRow;;$text+=' ';let rowIndex=0;;$text+=' ';let isReadonly=readonly||eReadonly;;$vnode_3=[];
if(excel){
$vnode_4=[];$vnode_4.push($createVNode('td',{'class': 'rd-nn rd-np','style': 'height:'+(excelTop)+(unit)+';background:'+(excelBackground)+';border:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(bordercolor),}));let maxCol=getMaxCol(props);;
for(let i=0;i<maxCol;i++){
$vnode_6=[$createVNode(0,(excelTitle(i)))];$vnode_5=[$createVNode('div',$quick_mQ_0_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-nn rd-np','style': 'height:'+(excelTop)+(unit)+';background:'+(excelBackground)+';border:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(bordercolor)+';color:'+(excelForecolor),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
for(let $q_c_eebvvnhowe=rows.length,ri=0;ri<$q_c_eebvvnhowe;ri+=1){
let row=rows[ri];

if(row.label){
findLabelRow=1;
}
if((row.total&&!props.hideTotal)||row.data||(row.label&&!props.hideLabel)||(!findLabelRow&&!props.hideHead)||(findTotalRow&&!props.hideFoot)){
$vnode_4=[];
if(excel){
$vnode_6=[$createVNode(0,(++rowIndex))];$vnode_5=[$createVNode('div',$quick_mQ_0_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-nn rd-np','style': 'width:'+(excelLeft)+(unit)+';background:'+(excelBackground)+';border:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(bordercolor)+';color:'+(excelForecolor),},$vnode_5));
}
for(let $q_a_ajmnviyxw=row.cols,$q_c_yatnmjqda=$q_a_ajmnviyxw.length,$q_lc_cpsxztekhen=$q_c_yatnmjqda-1,ci=0;ci<$q_c_yatnmjqda;ci+=1){
let col=$q_a_ajmnviyxw[ci];let first=ci===0;let last=ci===$q_lc_cpsxztekhen;
$vnode_5=[];
if(col.elements&&col.elements.length){

for(let $q_a_kektasiufeg=col.elements,$q_c_datzyrbwakd=$q_a_kektasiufeg.length,$q_key_irxutailvd=0;$q_key_irxutailvd<$q_c_datzyrbwakd;$q_key_irxutailvd+=1){
let e=$q_a_kektasiufeg[$q_key_irxutailvd];
$vnode_5.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,readonly||eReadonly','id': (e.id),'mx5-view': '61/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_irxutailvd)+'.i^')+'&unit='+($encodeUrl(unit))+'&readonly='+$keyOf($refData,isReadonly),'mx5-elementinput': $viewId+'_qp()',}));
}
}else{
$text='';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' ';let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);;
if(paddingTop>realHeight){
paddingTop=realHeight;
}
if(paddingTop+paddingBottom>realHeight){
paddingBottom=realHeight-paddingTop;
}
if(paddingLeft>realWidth){
paddingLeft=realWidth;
}
if(paddingLeft+paddingRight>realWidth){
paddingRight=realWidth-paddingLeft;
}$vnode_6=[];
if(col.type=='text'){
$vnode_7=[$createVNode(0,(col.textContent),1)];$vnode_6.push($createVNode('div',$quick_mQ_1_static_attr,$vnode_7));
}else if(col.type=='image'){

if(col.imageContent){
;$$_style='';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:';if(col.imageRotateX){;$$_style+='rotateX(180deg)';};if(col.imageRotateY){;$$_style+=' rotateY(180deg)';};};$vnode_6.push($createVNode('img',{'class': 'rd-mD rd-mE rd-mp','src': (col.imageContent),'style': $$_style,},1));
}
}else if(col.type=='barcode'){

if(col.barcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props','class': 'rd-mX','style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit)+';align-items:'+(col.vpos),'mx5-view': '61/subs/barcode?lineColor='+$keyOf($refData,col.barcodeColor,'i!.'+(ri)+'.i@.'+(ci)+'.i*')+'&lineWidth='+$keyOf($refData,col.barcodeLineWidth,'i!.'+(ri)+'.i@.'+(ci)+'.i{')+'&showText='+$keyOf($refData,col.barcodeShowText,'i!.'+(ri)+'.i@.'+(ci)+'.i}')+'&format='+$keyOf($refData,col.barcodeFormat,'i!.'+(ri)+'.i@.'+(ci)+'.i[')+'&value='+($encodeUrl(col.barcodeContent)),}));
}
}else if(col.type=='qrcode'){

if(col.qrcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit),'mx5-view': '61/subs/qrcode?vpos='+($encodeUrl(col.vpos))+'&value='+($encodeUrl(col.qrcodeContent)),}));
}
}else if(col.type=='input'){

if(col.inputMultiline){
;$$_class='rd-mB rd-mC rd-l6';if(col.inputClassName){;$$_class+=' '+(col.inputClassName);};$vnode_6.push($createVNode('textarea',{'id': 'ipt_'+$viewId+'_'+(ri)+'_'+(ci),'readonly': (isReadonly===true),'style': 'color:'+(col.inputForecolor)+';font-size:'+(col.inputFontsize)+(unit)+';letter-spacing:'+(col.inputLetterspacing)+(unit)+';font-family:'+(col.inputFontfamily)+';text-align:'+(col.inputTextAlign),'placeholder': (col.inputplaceholder),'mx5-input': $viewId+'_qf({cell:\''+$keyOf($refData,col,'i!.'+(ri)+'.i@.'+(ci)+'.i]')+'\'})','value': (col.inputUserValue||col.inputText),'class': $$_class,},0,$special_2));
}else{
;$$_class='rd-mB rd-mC rd-l5';if(col.inputClassName){;$$_class+=' '+(col.inputClassName);};$vnode_6.push($createVNode('input',{'id': 'ipt_'+$viewId+'_'+(ri)+'_'+(ci),'readonly': (isReadonly===true),'style': 'color:'+(col.inputForecolor)+';font-size:'+(col.inputFontsize)+(unit)+';letter-spacing:'+(col.inputLetterspacing)+(unit)+';font-family:'+(col.inputFontfamily)+';text-align:'+(col.inputTextAlign),'placeholder': (col.inputPlaceholder),'value': (col.inputUserValue||col.inputText),'mx5-input': $viewId+'_qf({cell:\''+$keyOf($refData,col,'i!.'+(ri)+'.i@.'+(ci)+'.i]')+'\'})','class': $$_class,},1,$special_2));
}
}else if(col.type=='sum'||
                            col.type=='custom'||
                            col.type=='avg'){
let sum=getSumByCell(col);;
if(col.type=='sum'){
$vnode_7=[$createVNode(0,(format(col.textFormat,calcSum(sum))),1)];$vnode_6.push($createVNode('div',$quick_mQ_1_static_attr,$vnode_7));
}else if(col.type=='avg'){
$vnode_7=[$createVNode(0,(format(col.textFormat,calcAvg(sum))),1)];$vnode_6.push($createVNode('div',$quick_mQ_1_static_attr,$vnode_7));
}else{
$vnode_7=[$createVNode(0,(format(col.textFormat,sum)),1)];$vnode_6.push($createVNode('div',$quick_mQ_1_static_attr,$vnode_7));
}
}else if(col.type=='dropdown'){
$vnode_7=[];
for(let $q_a_urpcgtdy=col.dropdownItems,$q_c_hstelkx=$q_a_urpcgtdy.length,$q_key_fksypa=0;$q_key_fksypa<$q_c_hstelkx;$q_key_fksypa+=1){
let item=$q_a_urpcgtdy[$q_key_fksypa];
$vnode_8=[$createVNode(0,(item.text))];$vnode_7.push($createVNode('option',{'disabled': (item.disabled),'selected': (item.checked),'value': (item.value),},$vnode_8,$special_4));
};$$_class='rd-mB rd-mC';if(col.dropdownClassName){;$$_class+=' '+(col.dropdownClassName);};$vnode_6.push($createVNode('select',{'multiple': (col.dropdownMultipleSelect),'readonly': (isReadonly===true),'style': 'color:'+(col.dropdownForecolor)+';font-size:'+(col.dropdownFontsize)+(unit)+';letter-spacing:'+(col.dropdownLetterspacing)+(unit)+';font-family:'+(col.dropdownFontfamily),'name': (col.dropdownName),'mx5-change': $viewId+'_qf({cell:\''+$keyOf($refData,col,'i!.'+(ri)+'.i@.'+(ci)+'.i]')+'\'})','class': $$_class,},$vnode_7));
}else{
$vnode_6.push($createVNode(0,(col.type)));
}
if(!isReadonly){

if(row.data){

if(first){
$vnode_7=[$quick_mA_static_text||($quick_mA_static_text=$createVNode(0,''))];$vnode_6.push($createVNode('i',{'style': 'left:'+(-45-toPx(borderwidth)-(excel?toPx(excelLeft):0))+'px;top:'+((toPx(realHeight)-22)/2)+'px','class': 'rd-l3 rd-l9 rd-mG rd-mJ rd-mM rd-nk','title': '点击复制添加当前行','mx5-click': $viewId+'_qq({ri:'+(ri)+'})',},$vnode_7));
}
if(last&&row.copy){
$vnode_7=[$quick_mB_static_text||($quick_mB_static_text=$createVNode(0,''))];$vnode_6.push($createVNode('i',{'style': 'right:'+(-45-toPx(borderwidth))+'px;top:'+((toPx(realHeight)-22)/2)+'px','class': 'rd-l3 rd-l9 rd-mG rd-mJ rd-mM rd-nk','title': '点击删除当前行','mx5-click': $viewId+'_qr({ri:'+(ri)+'})',},$vnode_7));
}
}
};$$_style='padding:'+(paddingTop)+(unit)+' '+(paddingRight)+(unit)+' '+(paddingBottom)+(unit)+' '+(paddingLeft)+(unit)+';width:'+(realWidth)+(unit)+';height:'+(realHeight)+(unit)+';align-items:'+(col.vpos)+';justify-content:'+(col.hpos)+';opacity:'+(col.alpha)+';';if(col.background){;$$_style+='background:'+(col.background)+';';};if(col.textFontsize!=null){;$$_style+='color:'+(col.textForecolor)+';letter-spacing:'+(col.textLetterspacing)+(unit)+';';if(col.textStyleBold){;$$_style+='font-weight:bold;';};if(col.textStyleItalic){;$$_style+='font-style:italic;';};if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:';if(col.textStyleStrike){;$$_style+='line-through';}else if(col.textStyleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='font-family:'+(col.textFontfamily)+';font-size:'+(col.textFontsize)+(unit)+';';};$vnode_5.push($createVNode('div',{'class': 'rd-mX rd-nO','style': $$_style,},$vnode_6));
};$$_class='rd-np rd-nn';if(!row.data){;$$_class+=' rd-nO';};$vnode_4.push($createVNode('td',{'colspan': ((col.colspan!=1))&&((col.colspan)),'rowspan': ((col.rowspan!=1))&&((col.rowspan)),'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#0000')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#0000')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#0000')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#0000'),'class': $$_class,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
if(row.total){
findTotalRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-mB rd-no','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            format,
            toPx: const_1['mM'],
            toUnit: const_1['l3'],
            getMaxCol(props) {
                let ext = table_1['l2'](props, 1);
                return ext['_pT'];
            },
            getSumByCell: (cell) => {
                let { rows } = this.get('props');
                let colIndexToArrays = {};
                for (let row of rows) {
                    if (row.data) { //只计算数据行
                        for (let c of row.cols) {
                            let ci = c['_qj'];
                            if (ci >= cell['_qj'] &&
                                ci <= cell['_qk']) {
                                if (!colIndexToArrays[ci]) {
                                    colIndexToArrays[ci] = [];
                                }
                                let userValue = c.inputUserValue || c.inputText;
                                let toNumber = parseInt(userValue, 10);
                                let pushed;
                                if (isNaN(toNumber)) {
                                    pushed = {
                                        '_qi': 0,
                                        '_qh': 0
                                    };
                                }
                                else {
                                    pushed = {
                                        '_qi': toNumber,
                                        '_qh': 1
                                    };
                                }
                                colIndexToArrays[ci].push(pushed);
                            }
                        }
                    }
                }
                let values = [];
                for (let key in colIndexToArrays) {
                    values.push(colIndexToArrays[key]);
                }
                return values;
            },
            calcSum,
            calcAvg
        });
    },
    assign(data) {
        if (data.overrideProps) {
            mix(data.props, data.overrideProps);
        }
        table_1["l2"](data.props, true);
        // if (data.data) {
        //     let { rows } = data.props;
        //     let userData = data.data;
        //     let fillSubs = (elements, data) => {
        //         for (let i = 0; i < elements.length; i++) {
        //             let e = elements[i];
        //             if (e.type == 'form-input') {
        //                 e.props.userValue = data[i].value;
        //             }
        //         }
        //     };
        //     let headIndex = 0,
        //         labelIndex = 0,
        //         dataIndex = 0,
        //         totalIndex = 0,
        //         footIndex = 0;
        //     for (let i = 0; i < rows.length; i++) {
        //         let row = rows[i];
        //         let dest;
        //         if (row.head) {
        //             dest = userData.head[headIndex++];
        //         } else if (row.label) {
        //             dest = userData.label[labelIndex++];
        //         } else if (row.data) {
        //             dest = userData.data[dataIndex++];
        //         } else if (row.total) {
        //             dest = userData.total[totalIndex++];
        //         } else if (row.foot) {
        //             dest = userData.foot[footIndex++];
        //         }
        //         for (let j = 0; j < row.cols.length; j++) {
        //             let col = row.cols[j];
        //             if (col.elements &&
        //                 col.elements.length) {
        //                 fillSubs(col.elements, dest[j]);
        //             } else if (col.type == 'input') {
        //                 col.inputUserValue = dest[j].value;
        //             }
        //         }
        //     }
        // }
        if (data.overrideProps) {
            mix(data.props, data.overrideProps);
        }
        this.set(data);
    },
    async render() {
        let collectMark = mark(this, '_ql');
        // let props = this.get('props');
        // let sizes = TableProvider["@:{table.provider#get.sizes}"](props);
        await this.digest();
        let value = await this.getValue();
        if (collectMark()) {
            this['_qm'](value);
        }
    },
    '_qm'(value) {
        if (!value) {
            value = this['_qn']();
        }
        if (value.elementProps != this['_qo']) {
            this['_qo'] = value.elementProps;
            delete value.id;
            delete value.type;
            dispatch(this.root, 'elementinput', value);
        }
    },
    '_qn'() {
        let props = this.get('props');
        let stringifyProps = JSON.stringify(props, filter);
        let { rows } = props;
        let values = {
            head: [],
            label: [],
            data: [],
            total: [],
            foot: []
        };
        let elementInputs = [];
        let collectFromElements = elements => {
            let values = [];
            for (let e of elements) {
                if (e.type == 'form-input') {
                    let { userValue, text, inputName } = e.props;
                    if (userValue == null) {
                        userValue = text;
                    }
                    values.push({
                        type: 'form-input',
                        value: userValue,
                        name: inputName
                    });
                    let root = node(e.id);
                    if (root) {
                        elementInputs.push({
                            node: root.querySelector('input'),
                            type: 'form-input',
                            value: userValue,
                            name: inputName
                        });
                    }
                }
                else {
                    values.push(null);
                }
            }
            return values;
        };
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let cells = [];
            for (let j = 0; j < row.cols.length; j++) {
                let col = row.cols[j];
                if (col.elements &&
                    col.elements.length) {
                    cells.push(collectFromElements(col.elements));
                }
                else if (col.type == 'input') {
                    let userValue;
                    if (col.inputUserValue != null) {
                        userValue = col.inputUserValue;
                    }
                    else {
                        userValue = col.inputText;
                    }
                    cells.push({
                        value: userValue,
                        type: 'form-collect-input',
                        name: col.inputName
                    });
                    elementInputs.push({
                        node: node(`ipt_${this.id}_${i}_${j}`),
                        type: 'form-collect-input',
                        value: userValue,
                        name: col.inputName
                    });
                }
                else if (col.type == 'sum' ||
                    col.type == 'custom') {
                    let { getSumByCell, format, calcSum } = this.get();
                    let sum = getSumByCell(col);
                    let sumValue;
                    if (col.type == 'sum') {
                        sumValue = format(col.textFormat, calcSum(sum));
                    }
                    else {
                        sumValue = format(col.textFormat, sum);
                    }
                    cells.push({
                        type: 'total-sum',
                        value: sumValue
                    });
                }
                else {
                    cells.push(null);
                }
            }
            let dest;
            if (row.head) {
                dest = values.head;
            }
            else if (row.label) {
                dest = values.label;
            }
            else if (row.data) {
                dest = values.data;
            }
            else if (row.total) {
                dest = values.total;
            }
            else if (row.foot) {
                dest = values.foot;
            }
            dest.push(cells);
        }
        let id = this.get('id');
        return {
            id,
            type: 'form-collect',
            props,
            elementId: id,
            elementType: 'form-collect',
            elementProps: stringifyProps,
            elementValue: values,
            elementInputs
        };
    },
    getValue() {
        return new Promise(resolve => {
            let startCheck = () => {
                let value = this['_qn']();
                let allReady = 1;
                for (let e of value.elementInputs) {
                    if (!e.node) {
                        allReady = 0;
                        break;
                    }
                }
                if (allReady) {
                    resolve(value);
                }
                else {
                    setTimeout(startCheck, 50);
                }
            };
            setTimeout(startCheck, 50);
        });
    },
    '_qf<input>'(e) {
        let { cell } = e.params;
        let input = e.eventTarget;
        cell.inputUserValue = input.value.trim();
        let props = this.get('props');
        this.digest({
            props
        });
        this['_qm']();
    },
    '_qf<change>'(e) {
        // let { cell } = e.params;
        // let input = e.eventTarget as HTMLSelectElement;
        // let { dropdownItems } = cell;
        // for (let e of dropdownItems) {
        //     e.checked = false;
        // }
        // let current = dropdownItems[input.selectedIndex];
        // current.checked = true;
        // cell.inputUserValue = current.value;
        // let props = this.get('props');
        // this.digest({
        //     props
        // });
        // this['@:{dispatch.event}']();
    },
    '_qp<elementinput>'(e) {
        e.stopImmediatePropagation();
        this['_qm']();
    },
    '_qq<click>'(e) {
        let { ri } = e.params;
        let props = this.get('props');
        let { rows } = props;
        let currentRow = rows[ri];
        let lastDataRow = 0;
        for (let row of rows) {
            if (row.total) {
                break;
            }
            lastDataRow++;
        }
        table_1["l4"](props, lastDataRow, {}, 0);
        let addedRow = rows[lastDataRow];
        addedRow.data = true;
        addedRow.copy = true;
        for (let i = currentRow.cols.length; i--;) {
            let oldCol = currentRow.cols[i];
            let newCol = addedRow.cols[i];
            let copiedProps = JSON.parse(JSON.stringify(oldCol));
            mix(newCol, copiedProps);
        }
        table_1["l2"](props);
        this.set({
            props
        });
        this.render();
    },
    '_qr<click>'(e) {
        let { ri } = e.params;
        let props = this.get('props');
        table_1["l5"](props, ri);
        table_1["l2"](props);
        this.set({
            props
        });
        this.render();
    }
});

});