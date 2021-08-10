/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/data-celltable/dshow",["4e","../../4d/4g","../../4d/4q","../../4d/5b","../../4l/4m/index","../../4t/hodbase","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");
let $quick_dE_static_text;
let $quick_dX_static_text;
let $quick_ef_0_static_attr={'class': 'rd-dF rd-el rd-en rd-fA rd-fD rd-fn rd-fv',};
let $quick_ef_1_static_attr={'class': 'rd-ew',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let history_1 = require("../../4d/4q");
let stage_selection_1 = require("../../4d/5b");
let index_1 = require("../../4l/4m/index");
let hodbase_1 = require("../../4t/hodbase");
let { State, View } = magix_1;
let hasContent = (props, row, col) => {
    let cell = props.rows[row].cols[col];
    if (cell.type == 'text') {
        return cell.textContent;
    }
};
let dragLocker = {};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	fs,
	toUnit,
	i18n,
	selected,
	count,
	fieldRow,
	fieldCol,
	grouped,
	toPx,
	cursor,}=$dataFromView,
$text,
$vnode_6,
$$_style,
$vnode_7,
$$_class,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$text='';let max=Math.max,min=Math.min;;$text+=' ';let bw=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows;;$text+=' ';let bwn=(borderdeed=='collapse'?1:2)*bw;;$vnode_3=[];
for(let $q_c_fmfcbdq=rows.length,ri=0;ri<$q_c_fmfcbdq;ri+=1){
let row=rows[ri];
$vnode_4=[];
for(let $q_a_isqhpwl=row.cols,$q_c_bzsnfsjckf=$q_a_isqhpwl.length,ci=0;ci<$q_c_bzsnfsjckf;ci+=1){
let col=$q_a_isqhpwl[ci];
$vnode_5=[];
if(!fs && col.type){
$text='';if(col.type=='text'){;$text+='  ';}else if(col.type=='image'){;$text+='  ';}else if(col.type=='barcode'){;$text+='  ';}else if(col.type=='qrcode'){;$text+='  ';};$vnode_6=[$createVNode(0,$text)];$vnode_5.push($createVNode('i',$quick_ef_0_static_attr,$vnode_6));
}$text='';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' ';let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);;
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
if(col.bindKey){

if(!fs&&!props.locked){
$vnode_7=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];$vnode_6.push($createVNode('i',{'class': 'rd-dF rd-eX rd-el rd-f0 rd-fA rd-fC rd-fm rd-fv','mx5-pointerdown': $viewId+'1_hE()','mx5-click': $viewId+'_hC({row:'+(ri)+',col:'+(ci)+'})','title': (i18n('gs')),},$vnode_7));
}$vnode_6.push($createVNode(0,'[绑定:'+(col.bindName)+']'));
if(!col.type){
$vnode_6.push($quick_dX_static_text||($quick_dX_static_text=$createVNode(0,'，未指定格子内容')));
}
}else if(col.type=='text'){

if(col.textContent){
$vnode_7=[$createVNode(0,(col.textContent),1)];$vnode_6.push($createVNode('div',$quick_ef_1_static_attr,$vnode_7));
}
}else if(col.type=='image'){

if(col.imageContent){
;$$_style='';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:';if(col.imageRotateX){;$$_style+='rotateX(180deg)';};if(col.imageRotateY){;$$_style+=' rotateY(180deg)';};};$vnode_6.push($createVNode('img',{'class': 'rd-d2 rd-ef rd-eg','src': (col.imageContent),'style': $$_style,},1));
}
}else if(col.type=='barcode'){

if(col.barcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-ez','style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit)+';align-items:'+(col.vpos),'mx5-view': '53/subs/barcode?lineColor='+($encodeUrl(col.barcodeColor))+'&lineWidth='+($encodeUrl(col.barcodeLineWidth))+'&showText='+($encodeUrl(col.barcodeShowText))+'&format='+($encodeUrl(col.barcodeFormat))+'&value='+($encodeUrl(col.barcodeContent)),}));
}
}else if(col.type=='qrcode'){

if(col.qrcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit),'mx5-view': '53/subs/qrcode?vpos='+($encodeUrl(col.vpos))+'&value='+($encodeUrl(col.qrcodeContent)),}));
}
};$$_style='padding:'+(paddingTop)+(unit)+' '+(paddingRight)+(unit)+' '+(paddingBottom)+(unit)+' '+(paddingLeft)+(unit)+';width:'+(realWidth)+(unit)+';height:'+(realHeight)+(unit)+';align-items:'+(col.vpos)+';justify-content:'+(col.hpos)+';opacity:'+(col.alpha)+';';if(col.background){;$$_style+='background:'+(col.background)+';';};if(col.type=='text'){;$$_style+='color:'+(col.textForecolor)+';letter-spacing:'+(col.textLetterspacing)+(unit)+';';if(col.textStyleBold){;$$_style+='font-weight:bold;';};if(col.textStyleItalic){;$$_style+='font-style:italic;';};if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:';if(col.textStyleStrike){;$$_style+='line-through';}else if(col.textStyleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='font-family:'+(col.textFontfamily)+';font-size:'+(col.textFontsize)+(unit)+';';};$vnode_5.push($createVNode('div',{'class': 'rd-em rd-ez rd-fq','style': $$_style,},$vnode_6));
if(!fs&&!props.locked){
let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_6=[];
if(focusCurrentCell&&!grouped){
$text='';let height=(min(26,toPx(col.height)-6)-4);;$text+=' ';let width=(min(26,toPx(col.width)-6)-4);;$text+=' ';let top=(toPx(col.height)-height-bwn)/2-1;;$text+=' ';let left=(toPx(col.width)-width-bwn)/2-1;;$vnode_6.push($createVNode('div',{'class': 'rd-e6 rd-el rd-eo rd-f0','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:'+(cursor(props.rotate,0))+'-resize','title': (i18n('gt')),'mx5-pointerdown': $viewId+'1_hF({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-e7 rd-el rd-eo rd-f0','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:'+(cursor(props.rotate,0))+'-resize','title': (i18n('gt')),'mx5-pointerdown': $viewId+'1_hF({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-e8 rd-el rd-eo rd-f0','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:'+(cursor(props.rotate,90))+'-resize','title': (i18n('gu')),'mx5-pointerdown': $viewId+'1_hF({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-e9 rd-el rd-eo rd-f0','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:'+(cursor(props.rotate,90))+'-resize','title': (i18n('gu')),'mx5-pointerdown': $viewId+'1_hF({key:\'tm\'})',}));
};$$_class='rd-el rd-f_ rd-fH rd-en';if(focusCurrentCell){;$$_class+=' rd-e5';};if(fieldRow==ri&&fieldCol==ci){;$$_class+=' rd-fb';};$$_style='';if(focusCurrentCell){;if(!col.bLeft){;$$_style+='border-left-style:dotted;';};if(!col.bTop){;$$_style+='border-top-style:dotted;';};if(!col.bRight){;$$_style+='border-right-style:dotted;';};if(!col.bBottom){;$$_style+='border-bottom-style:dotted;';};};$vnode_5.push($createVNode('div',{'class': $$_class,'style': $$_style,},$vnode_6));
}$vnode_4.push($createVNode('td',{'class': 'rd-e0 rd-e2 rd-f0','colspan': ($temp_var=(col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=(col.rowspan))!=null&&$temp_var,'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(bw?bordertype:'dotted')+' '+(bw)+(unit)+' '+(bw&&col.bLeft?bordercolor:'#ddd6')+';border-top:'+(bw?bordertype:'dotted')+' '+(bw)+(unit)+' '+(bw&&col.bTop?bordercolor:'#ddd6')+';border-right:'+(bw?bordertype:'dotted')+' '+(bw)+(unit)+' '+(bw&&col.bRight?bordercolor:'#ddd6')+';border-bottom:'+(bw?bordertype:'dotted')+' '+(bw)+(unit)+' '+(bw&&col.bBottom?bordercolor:'#ddd6'),'mx5-pointerdown': $viewId+'_hD({row:'+(ri)+',col:'+(ci)+'})','mx5-dragenter': $viewId+'_hj({row:'+(ri)+',col:'+(ci)+'})','mx5-dragleave': $viewId+'_hk({row:'+(ri)+',col:'+(ci)+'})',},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-e1 rd-ed','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-el rd-fH','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit)+';transform:rotate('+(props.rotate)+'deg)','mx5-drop': $viewId+'_hl()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            toPx: const_1['eo'],
            toUnit: const_1['dF'],
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_hj<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        e['_ey'] = 1;
        let { row, col } = e.params;
        if (index_1['_hz'](dragLocker, `${row}_${col}`)) {
            if (hasContent(props, row, col)) {
                this.digest({
                    fieldRow: -1,
                    colRow: -1
                });
            }
            else {
                let src = State.get('dY');
                if (src) {
                    this.digest({
                        fieldRow: row,
                        fieldCol: col
                    });
                }
            }
        }
    },
    '_hk<dragleave>'(e) {
        let { row, col } = e.params;
        if (index_1['_hA'](dragLocker, `${row}_${col}`)) {
            if (this.get('fieldRow') == row &&
                this.get('fieldCol') == col) {
                this.digest({
                    fieldRow: -1,
                    fieldCol: -1
                });
            }
        }
    },
    '_hC<click>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let element = this.get('element');
        let { row, col } = e.params;
        let { rows } = props;
        let cell = rows[row].cols[col];
        delete cell.bindKey;
        delete cell.bindName;
        let hasBindKey = 0;
        for (let row of rows) {
            for (let col of row.cols) {
                if (col.bindKey) {
                    hasBindKey = 1;
                    break;
                }
            }
            if (hasBindKey) {
                break;
            }
        }
        if (!hasBindKey) {
            props.bind.id = '';
            props.bind.url = '';
        }
        this.digest({
            props
        });
        State.fire('dG', {
            '_fm': {
                [element.id]: 1
            },
            '_fn': {
                [element.type]: 1
            },
            '_dF': {
                '_hB': 1
            }
        });
        history_1["dE"](history_1['ea'], props.ename);
    },
    '_hl<drop>'(e) {
        this['_fu'](e);
        dragLocker = {};
        e['_ey'] = 1;
        let row = this.get('fieldRow'), col = this.get('fieldCol');
        let src = State.get('dY');
        if (src &&
            row != -1 &&
            col != -1) {
            let props = this.get('props');
            let element = this.get('element');
            let { rows } = props;
            if (props.bind.id != src.id) {
                for (let row of rows) {
                    for (let col of row.cols) {
                        if (col.bindKey) {
                            delete col.bindKey;
                            delete col.bindName;
                        }
                    }
                }
            }
            props.bind.id = src.id;
            props.bind.url = src.url;
            props.focusRow = row;
            props.focusCol = col;
            let cell = rows[row].cols[col];
            cell.bindKey = src.field.id;
            cell.bindName = src.field.name;
            this.digest({
                fieldRow: -1,
                fieldCol: -1
            });
            if (!stage_selection_1["dF"](element)) {
                State.fire('dG', {
                    '_fm': {
                        [element.id]: 1
                    },
                    '_fn': {
                        [element.type]: 1
                    },
                    '_dF': {
                        '_hB': 1
                    }
                });
            }
            history_1["dE"](history_1['ea'], props.ename);
        }
    }
}).merge(index_1, hodbase_1);

});