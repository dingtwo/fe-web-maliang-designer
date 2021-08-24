/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/form-collect/index",["51","../../50/53","../../5g/format","../../5g/table","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");
let $quick_gM_static_text;
let $quick_gN_static_text;
let $quick_g2_0_static_attr={'class': 'rd-g9 rd-gN rd-gO rd-ha rd-hn rd-hs',};
let $quick_g2_1_static_attr={'class': 'rd-g6',};
let $special_2={'value':'value',};
let $special_4={'selected':'selected',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let format_1 = require("../../5g/format");
let table_1 = require("../../5g/table");
let { View, mark, dispatch, node, mix } = magix_1;
let format = format_1["_j1"].bind(format_1);
let filter = (key, value) => key.startsWith('_') ? undefined : value;
let calcSum = values => {
    let sum = 0;
    for (let group of values) {
        for (let one of group) {
            if (one['_kw']) {
                sum += one['_kx'];
            }
        }
    }
    return sum;
};
let calcAvg = values => {
    let sum = 0, avg = 0, count = 0;
    for (let group of values) {
        for (let one of group) {
            if (one['_kw']) {
                sum += one['_kx'];
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
$vnode_4=[];$vnode_4.push($createVNode('td',{'class': 'rd-hB rd-hz','style': 'height:'+(excelTop)+(unit)+';background:'+(excelBackground)+';border:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(bordercolor),}));let maxCol=getMaxCol(props);;
for(let i=0;i<maxCol;i++){
$vnode_6=[$createVNode(0,(excelTitle(i)))];$vnode_5=[$createVNode('div',$quick_g2_0_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-hB rd-hz','style': 'height:'+(excelTop)+(unit)+';background:'+(excelBackground)+';border:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(bordercolor)+';color:'+(excelForecolor),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
for(let $q_c_rzlsokgsje=rows.length,ri=0;ri<$q_c_rzlsokgsje;ri+=1){
let row=rows[ri];

if(row.label){
findLabelRow=1;
}
if((row.total&&!props.hideTotal)||row.data||(row.label&&!props.hideLabel)||(!findLabelRow&&!props.hideHead)||(findTotalRow&&!props.hideFoot)){
$vnode_4=[];
if(excel){
$vnode_6=[$createVNode(0,(++rowIndex))];$vnode_5=[$createVNode('div',$quick_g2_0_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-hB rd-hz','style': 'width:'+(excelLeft)+(unit)+';background:'+(excelBackground)+';border:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(bordercolor)+';color:'+(excelForecolor),},$vnode_5));
}
for(let $q_a_esayzc=row.cols,$q_c_psxajtzgb=$q_a_esayzc.length,$q_lc_scoyyznvs=$q_c_psxajtzgb-1,ci=0;ci<$q_c_psxajtzgb;ci+=1){
let col=$q_a_esayzc[ci];let first=ci===0;let last=ci===$q_lc_scoyyznvs;
$vnode_5=[];
if(col.elements&&col.elements.length){

for(let $q_a_ygwxpgpo=col.elements,$q_c_lmprhjfwc=$q_a_ygwxpgpo.length,$q_key_notwvlho=0;$q_key_notwvlho<$q_c_lmprhjfwc;$q_key_notwvlho+=1){
let e=$q_a_ygwxpgpo[$q_key_notwvlho];
$vnode_5.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,readonly||eReadonly','id': (e.id),'mx5-view': '5m/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_notwvlho)+'.eG')+'&unit='+($encodeUrl(unit))+'&readonly='+$keyOf($refData,isReadonly),'mx5-elementinput': $viewId+'_kE()',}));
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
$vnode_7=[$createVNode(0,(col.textContent),1)];$vnode_6.push($createVNode('div',$quick_g2_1_static_attr,$vnode_7));
}else if(col.type=='image'){

if(col.imageContent){
;$$_style='';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:';if(col.imageRotateX){;$$_style+='rotateX(180deg)';};if(col.imageRotateY){;$$_style+=' rotateY(180deg)';};};$vnode_6.push($createVNode('img',{'class': 'rd-gB rd-gP rd-gQ','src': (col.imageContent),'style': $$_style,},1));
}
}else if(col.type=='barcode'){

if(col.barcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props','class': 'rd-g9','style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit)+';align-items:'+(col.vpos),'mx5-view': '5m/subs/barcode?lineColor='+$keyOf($refData,col.barcodeColor,'eD.'+(ri)+'.eE.'+(ci)+'.eH')+'&lineWidth='+$keyOf($refData,col.barcodeLineWidth,'eD.'+(ri)+'.eE.'+(ci)+'.eI')+'&showText='+$keyOf($refData,col.barcodeShowText,'eD.'+(ri)+'.eE.'+(ci)+'.eJ')+'&format='+$keyOf($refData,col.barcodeFormat,'eD.'+(ri)+'.eE.'+(ci)+'.eK')+'&value='+($encodeUrl(col.barcodeContent)),}));
}
}else if(col.type=='qrcode'){

if(col.qrcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit),'mx5-view': '5m/subs/qrcode?vpos='+($encodeUrl(col.vpos))+'&value='+($encodeUrl(col.qrcodeContent)),}));
}
}else if(col.type=='input'){

if(col.inputMultiline){
;$$_class='rd-gN rd-gO rd-gh';if(col.inputClassName){;$$_class+=' '+(col.inputClassName);};$vnode_6.push($createVNode('textarea',{'id': 'ipt_'+$viewId+'_'+(ri)+'_'+(ci),'readonly': (isReadonly===true),'style': 'color:'+(col.inputForecolor)+';font-size:'+(col.inputFontsize)+(unit)+';letter-spacing:'+(col.inputLetterspacing)+(unit)+';font-family:'+(col.inputFontfamily)+';text-align:'+(col.inputTextAlign),'placeholder': (col.inputplaceholder),'mx5-input': $viewId+'_ku({cell:\''+$keyOf($refData,col,'eD.'+(ri)+'.eE.'+(ci)+'.eL')+'\'})','value': (col.inputUserValue||col.inputText),'class': $$_class,},0,$special_2));
}else{
;$$_class='rd-gN rd-gO rd-gg';if(col.inputClassName){;$$_class+=' '+(col.inputClassName);};$vnode_6.push($createVNode('input',{'id': 'ipt_'+$viewId+'_'+(ri)+'_'+(ci),'readonly': (isReadonly===true),'style': 'color:'+(col.inputForecolor)+';font-size:'+(col.inputFontsize)+(unit)+';letter-spacing:'+(col.inputLetterspacing)+(unit)+';font-family:'+(col.inputFontfamily)+';text-align:'+(col.inputTextAlign),'placeholder': (col.inputPlaceholder),'value': (col.inputUserValue||col.inputText),'mx5-input': $viewId+'_ku({cell:\''+$keyOf($refData,col,'eD.'+(ri)+'.eE.'+(ci)+'.eL')+'\'})','class': $$_class,},1,$special_2));
}
}else if(col.type=='sum'||
                            col.type=='custom'||
                            col.type=='avg'){
let sum=getSumByCell(col);;
if(col.type=='sum'){
$vnode_7=[$createVNode(0,(format(col.textFormat,calcSum(sum))),1)];$vnode_6.push($createVNode('div',$quick_g2_1_static_attr,$vnode_7));
}else if(col.type=='avg'){
$vnode_7=[$createVNode(0,(format(col.textFormat,calcAvg(sum))),1)];$vnode_6.push($createVNode('div',$quick_g2_1_static_attr,$vnode_7));
}else{
$vnode_7=[$createVNode(0,(format(col.textFormat,sum)),1)];$vnode_6.push($createVNode('div',$quick_g2_1_static_attr,$vnode_7));
}
}else if(col.type=='dropdown'){
$vnode_7=[];
for(let $q_a_yusznfq=col.dropdownItems,$q_c_zwrrqxrno=$q_a_yusznfq.length,$q_key_imihr=0;$q_key_imihr<$q_c_zwrrqxrno;$q_key_imihr+=1){
let item=$q_a_yusznfq[$q_key_imihr];
$vnode_8=[$createVNode(0,(item.text))];$vnode_7.push($createVNode('option',{'disabled': (item.disabled),'selected': (item.checked),'value': (item.value),},$vnode_8,$special_4));
};$$_class='rd-gN rd-gO';if(col.dropdownClassName){;$$_class+=' '+(col.dropdownClassName);};$vnode_6.push($createVNode('select',{'multiple': (col.dropdownMultipleSelect),'readonly': (isReadonly===true),'style': 'color:'+(col.dropdownForecolor)+';font-size:'+(col.dropdownFontsize)+(unit)+';letter-spacing:'+(col.dropdownLetterspacing)+(unit)+';font-family:'+(col.dropdownFontfamily),'name': (col.dropdownName),'mx5-change': $viewId+'_ku({cell:\''+$keyOf($refData,col,'eD.'+(ri)+'.eE.'+(ci)+'.eL')+'\'})','class': $$_class,},$vnode_7));
}else{
$vnode_6.push($createVNode(0,(col.type)));
}
if(!isReadonly){

if(row.data){

if(first){
$vnode_7=[$quick_gM_static_text||($quick_gM_static_text=$createVNode(0,''))];$vnode_6.push($createVNode('i',{'style': 'left:'+(-45-toPx(borderwidth)-(excel?toPx(excelLeft):0))+'px;top:'+((toPx(realHeight)-22)/2)+'px','class': 'rd-gS rd-gV rd-gY rd-ge rd-gk rd-hw','title': '点击复制添加当前行','mx5-click': $viewId+'_kF({ri:'+(ri)+'})',},$vnode_7));
}
if(last&&row.copy){
$vnode_7=[$quick_gN_static_text||($quick_gN_static_text=$createVNode(0,''))];$vnode_6.push($createVNode('i',{'style': 'right:'+(-45-toPx(borderwidth))+'px;top:'+((toPx(realHeight)-22)/2)+'px','class': 'rd-gS rd-gV rd-gY rd-ge rd-gk rd-hw','title': '点击删除当前行','mx5-click': $viewId+'_kG({ri:'+(ri)+'})',},$vnode_7));
}
}
};$$_style='padding:'+(paddingTop)+(unit)+' '+(paddingRight)+(unit)+' '+(paddingBottom)+(unit)+' '+(paddingLeft)+(unit)+';width:'+(realWidth)+(unit)+';height:'+(realHeight)+(unit)+';align-items:'+(col.vpos)+';justify-content:'+(col.hpos)+';opacity:'+(col.alpha)+';';if(col.background){;$$_style+='background:'+(col.background)+';';};if(col.textFontsize!=null){;$$_style+='color:'+(col.textForecolor)+';letter-spacing:'+(col.textLetterspacing)+(unit)+';';if(col.textStyleBold){;$$_style+='font-weight:bold;';};if(col.textStyleItalic){;$$_style+='font-style:italic;';};if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:';if(col.textStyleStrike){;$$_style+='line-through';}else if(col.textStyleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='font-family:'+(col.textFontfamily)+';font-size:'+(col.textFontsize)+(unit)+';';};$vnode_5.push($createVNode('div',{'class': 'rd-g9 rd-h0','style': $$_style,},$vnode_6));
};$$_class='rd-hB rd-hz';if(!row.data){;$$_class+=' rd-h0';};$vnode_4.push($createVNode('td',{'colspan': ((col.colspan!=1))&&((col.colspan)),'rowspan': ((col.rowspan!=1))&&((col.rowspan)),'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#0000')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#0000')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#0000')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#0000'),'class': $$_class,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
if(row.total){
findTotalRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-gN rd-hA','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            format,
            toPx: const_1['gY'],
            toUnit: const_1['ge'],
            getMaxCol(props) {
                let ext = table_1['gd'](props, 1);
                return ext['_j8'];
            },
            getSumByCell: (cell) => {
                let { rows } = this.get('props');
                let colIndexToArrays = {};
                for (let row of rows) {
                    if (row.data) { //只计算数据行
                        for (let c of row.cols) {
                            let ci = c['_ky'];
                            if (ci >= cell['_ky'] &&
                                ci <= cell['_kz']) {
                                if (!colIndexToArrays[ci]) {
                                    colIndexToArrays[ci] = [];
                                }
                                let userValue = c.inputUserValue || c.inputText;
                                let toNumber = parseInt(userValue, 10);
                                let pushed;
                                if (isNaN(toNumber)) {
                                    pushed = {
                                        '_kx': 0,
                                        '_kw': 0
                                    };
                                }
                                else {
                                    pushed = {
                                        '_kx': toNumber,
                                        '_kw': 1
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
        table_1["gd"](data.props, true);
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
        let collectMark = mark(this, '_kA');
        // let props = this.get('props');
        // let sizes = TableProvider["@:{table.provider#get.sizes}"](props);
        await this.digest();
        let value = await this.getValue();
        if (collectMark()) {
            this['_kB'](value);
        }
    },
    '_kB'(value) {
        if (!value) {
            value = this['_kC']();
        }
        if (value.elementProps != this['_kD']) {
            this['_kD'] = value.elementProps;
            delete value.id;
            delete value.type;
            dispatch(this.root, 'elementinput', value);
        }
    },
    '_kC'() {
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
                let value = this['_kC']();
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
    '_ku<input>'(e) {
        let { cell } = e.params;
        let input = e.eventTarget;
        cell.inputUserValue = input.value.trim();
        let props = this.get('props');
        this.digest({
            props
        });
        this['_kB']();
    },
    '_ku<change>'(e) {
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
    '_kE<elementinput>'(e) {
        e.stopImmediatePropagation();
        this['_kB']();
    },
    '_kF<click>'(e) {
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
        table_1["gf"](props, lastDataRow, {}, 0);
        let addedRow = rows[lastDataRow];
        addedRow.data = true;
        addedRow.copy = true;
        for (let i = currentRow.cols.length; i--;) {
            let oldCol = currentRow.cols[i];
            let newCol = addedRow.cols[i];
            let copiedProps = JSON.parse(JSON.stringify(oldCol));
            mix(newCol, copiedProps);
        }
        table_1["gd"](props);
        this.set({
            props
        });
        this.render();
    },
    '_kG<click>'(e) {
        let { ri } = e.params;
        let props = this.get('props');
        table_1["gg"](props, ri);
        table_1["gd"](props);
        this.set({
            props
        });
        this.render();
    }
});

});