/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("78/7a/setting",["51","../../50/5k","./index","58/6k/index","58/6j/index"],(require,exports,module)=>{
require("58/6k/index");
require("58/6j/index");
let $quick_iI_0_static_node;
let $quick_iI_1_static_node;
let $quick_iI_5_static_node;
let $quick_iI_7_static_node;
let $quick_iI_8_static_node;
let $quick_iI_10_static_node;
let $quick_iI_11_static_node;
let $quick_iI_12_static_node;
let $quick_iI_13_static_node;
let $quick_iI_14_static_node;
let $quick_iI_15_static_node;
let $quick_h__static_text;
let $quick_ha_static_text;
let $quick_iI_17_static_node;
let $quick_iI_3_static_attr={'class': 'rd-gr',};
let $quick_iI_4_static_attr={'class': 'rd-g9 rd-ha',};
let $quick_iI_6_static_attr={'class': 'rd-g9 rd-ha rd-mU',};
let $quick_iI_9_static_attr={'class': 'rd-g9 rd-gP rd-gx rd-ha rd-hw',};
let $quick_iI_16_static_attr={'class': 'rd-g9 rd-gM rd-gt rd-gu rd-ha rd-he rd-ht rd-id rd-ii',};
let $special_2={'checked':'checked',};

let magix_1 = require("51");
let service_1 = require("../../50/5k");
let index_1 = require("./index");

let Layouts = [{
        text: '纵向',
        value: 'portrait'
    }, {
        text: '横向',
        value: 'landscape'
    }];
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	error,
	exf,
	list,
	printer,
	layouts,}=$dataFromView,
$vnode_1,
$vnode_3,
$vnode_2;

if($quick_iI_0_static_node){
$vnode_0=[$quick_iI_0_static_node];
}else{
$vnode_0=[$quick_iI_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gp rd-he rd-ij',})];
}

if($quick_iI_1_static_node){
$vnode_0.push($quick_iI_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-gy">RDS打印服务设置</h5>',1)];$vnode_0.push($quick_iI_1_static_node=$createVNode('div',{'_': 'eE','class': 'rd-gM rd-gn rd-go rd-he rd-hf rd-ik',},$vnode_1));
}
$vnode_1=[];
if(error){
$vnode_1.push($createVNode(0,(exf(error.message))));
}else{

if($quick_iI_5_static_node){
$vnode_2=[$quick_iI_5_static_node];
}else{
$vnode_3=[$createVNode(0,'打印机：')];$vnode_2=[$quick_iI_5_static_node=$createVNode('div',{'_': 'eF','class': 'rd-gR rd-mS',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'list','class': 'rd-mT','mx5-change': $viewId+'_pQ({key:\'name\'})','mx5-view': '58/6k/index?list='+$keyOf($refData,list,'eD')+'&selected='+($encodeUrl(printer.name)),}));$vnode_1.push($createVNode('div',$quick_iI_4_static_attr,$vnode_2));
if($quick_iI_7_static_node){
$vnode_2=[$quick_iI_7_static_node];
}else{
$vnode_3=[$createVNode(0,'方向：')];$vnode_2=[$quick_iI_7_static_node=$createVNode('div',{'_': 'eG','class': 'rd-gR rd-mS',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'layouts','class': 'rd-mT','mx5-change': $viewId+'_pQ({key:\'l\'})','mx5-view': '58/6k/index?list='+$keyOf($refData,layouts,'eE')+'&textKey=text&valueKey=value&selected='+($encodeUrl(printer.l)),}));$vnode_1.push($createVNode('div',$quick_iI_6_static_attr,$vnode_2));
if($quick_iI_8_static_node){
$vnode_2=[$quick_iI_8_static_node];
}else{
$vnode_3=[$createVNode(0,'双面打印：')];$vnode_2=[$quick_iI_8_static_node=$createVNode('div',{'_': 'eH','class': 'rd-gR rd-mS',},$vnode_3)];
}
$vnode_3=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','checked': (printer.ts),'mx5-change': $viewId+'_pR()',},1,$special_2)];
if($quick_iI_10_static_node){
$vnode_3.push($quick_iI_10_static_node);
}else{
$vnode_3.push($quick_iI_10_static_node=$createVNode('i',{'_': 'eI','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_2.push($createVNode('label',$quick_iI_9_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_iI_6_static_attr,$vnode_2));
if($quick_iI_11_static_node){
$vnode_2=[$quick_iI_11_static_node];
}else{
$vnode_3=[$createVNode(0,'打印份数：')];$vnode_2=[$quick_iI_11_static_node=$createVNode('div',{'_': 'eJ','class': 'rd-gR rd-mS',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_pP({key:\'nc\'})','class': 'rd-gW rd-gg','mx5-view': '58/6j/index?min=1&value='+$keyOf($refData,printer.nc,'eF'),}));$vnode_1.push($createVNode('div',$quick_iI_6_static_attr,$vnode_2));
if($quick_iI_12_static_node){
$vnode_2=[$quick_iI_12_static_node];
}else{
$vnode_3=[$createVNode(0,'左页边距：')];$vnode_2=[$quick_iI_12_static_node=$createVNode('div',{'_': 'eK','class': 'rd-gR rd-mS',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_pP({key:\'pl\'})','class': 'rd-gW rd-gg','mx5-view': '58/6j/index?min=0&value='+$keyOf($refData,printer.pl,'eG'),}));$vnode_1.push($createVNode('div',$quick_iI_6_static_attr,$vnode_2));
if($quick_iI_13_static_node){
$vnode_2=[$quick_iI_13_static_node];
}else{
$vnode_3=[$createVNode(0,'上页边距：')];$vnode_2=[$quick_iI_13_static_node=$createVNode('div',{'_': 'eL','class': 'rd-gR rd-mS',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_pP({key:\'pt\'})','class': 'rd-gW rd-gg','mx5-view': '58/6j/index?min=0&value='+$keyOf($refData,printer.pt,'eH'),}));$vnode_1.push($createVNode('div',$quick_iI_6_static_attr,$vnode_2));
if($quick_iI_14_static_node){
$vnode_2=[$quick_iI_14_static_node];
}else{
$vnode_3=[$createVNode(0,'右页边距：')];$vnode_2=[$quick_iI_14_static_node=$createVNode('div',{'_': 'eM','class': 'rd-gR rd-mS',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_pP({key:\'pr\'})','class': 'rd-gW rd-gg','mx5-view': '58/6j/index?min=0&value='+$keyOf($refData,printer.pr,'eI'),}));$vnode_1.push($createVNode('div',$quick_iI_6_static_attr,$vnode_2));
if($quick_iI_15_static_node){
$vnode_2=[$quick_iI_15_static_node];
}else{
$vnode_3=[$createVNode(0,'下页边距：')];$vnode_2=[$quick_iI_15_static_node=$createVNode('div',{'_': 'eN','class': 'rd-gR rd-mS',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_pP({key:\'pb\'})','class': 'rd-gW rd-gg','mx5-view': '58/6j/index?min=0&value='+$keyOf($refData,printer.pb,'eJ'),}));$vnode_1.push($createVNode('div',$quick_iI_6_static_attr,$vnode_2));
}$vnode_0.push($createVNode('div',$quick_iI_3_static_attr,$vnode_1));$vnode_2=[$quick_h__static_text||($quick_h__static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_gV()','class': 'rd-gS rd-gk rd-gm rd-hw','type': 'button',},$vnode_2)];$vnode_2=[$quick_ha_static_text||($quick_ha_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_gU()','class': 'rd-gJ rd-gS rd-gk rd-hw','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_iI_16_static_attr,$vnode_1));
if($quick_iI_17_static_node){
$vnode_0.push($quick_iI_17_static_node);
}else{
$vnode_0.push($quick_iI_17_static_node=$createVNode('div',{'_': 'eO','class': 'rd-gs rd-he rd-ih',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        this['_gT'] = data.dialog;
        this.set({
            exf: index_1["_pw"],
            layouts: Layouts
        });
    },
    render() {
        let mark = magix_1.mark(this, '_pO');
        let s = new service_1();
        s.all({
            name: '_id',
            url: magix_1.config('rds') + 'printers',
            '_hQ': JSON.stringify({
                width: 0,
                height: 0,
                location: location.href
            })
        }, (ex, bag) => {
            if (mark()) {
                let printer = index_1["_pI"]();
                let list = bag.get('data', []);
                if (!printer.name) {
                    printer.name = list[0];
                }
                this.digest({
                    error: ex,
                    list,
                    printer
                });
            }
        });
    },
    '_gU<click>'() {
        this['_gT'].close();
    },
    '_pP<input>'(e) {
        let printer = this.get('printer');
        let { key } = e.params;
        printer[key] = e.value;
    },
    '_pQ<change>'(e) {
        let printer = this.get('printer');
        let { key } = e.params;
        printer[key] = e.value;
    },
    '_pR<change>'(e) {
        let printer = this.get('printer');
        printer.ts = e.eventTarget.checked;
    },
    '_gV<click>'() {
        index_1["_pN"](this.get('printer'));
        this['_gT'].close();
    }
});

});