/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("6l/6n/setting",["4e","../../4d/51","./index","4l/61/index","4l/60/index"],(require,exports,module)=>{
require("4l/61/index");
require("4l/60/index");
let $quick_f9_0_static_node;
let $quick_f9_1_static_node;
let $quick_f9_5_static_node;
let $quick_f9_7_static_node;
let $quick_f9_8_static_node;
let $quick_f9_10_static_node;
let $quick_f9_11_static_node;
let $quick_f9_12_static_node;
let $quick_f9_13_static_node;
let $quick_f9_14_static_node;
let $quick_f9_15_static_node;
let $quick_eA_static_text;
let $quick_eB_static_text;
let $quick_f9_17_static_node;
let $quick_f9_3_static_attr={'class': 'rd-dS',};
let $quick_f9_4_static_attr={'class': 'rd-eB rd-ez',};
let $quick_f9_6_static_attr={'class': 'rd-eB rd-ez rd-kk',};
let $quick_f9_9_static_attr={'class': 'rd-dY rd-eB rd-eX rd-ef rd-ez',};
let $quick_f9_16_static_attr={'class': 'rd-dU rd-dV rd-eB rd-eF rd-eU rd-ec rd-ez rd-fE rd-fJ',};
let $special_2={'checked':'checked',};

let magix_1 = require("4e");
let service_1 = require("../../4d/51");
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

if($quick_f9_0_static_node){
$vnode_0=[$quick_f9_0_static_node];
}else{
$vnode_0=[$quick_f9_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-dQ rd-eF rd-fK',})];
}

if($quick_f9_1_static_node){
$vnode_0.push($quick_f9_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-dZ">RDS打印服务设置</h5>',1)];$vnode_0.push($quick_f9_1_static_node=$createVNode('div',{'_': 'cI','class': 'rd-dO rd-dP rd-eF rd-eG rd-ec rd-fL',},$vnode_1));
}
$vnode_1=[];
if(error){
$vnode_1.push($createVNode(0,(exf(error.message))));
}else{

if($quick_f9_5_static_node){
$vnode_2=[$quick_f9_5_static_node];
}else{
$vnode_3=[$createVNode(0,'打印机：')];$vnode_2=[$quick_f9_5_static_node=$createVNode('div',{'_': 'cJ','class': 'rd-eh rd-ki',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'list','class': 'rd-kj','mx5-change': $viewId+'_nc({key:\'name\'})','mx5-view': '4l/61/index?list='+$keyOf($refData,list,'cH')+'&selected='+($encodeUrl(printer.name)),}));$vnode_1.push($createVNode('div',$quick_f9_4_static_attr,$vnode_2));
if($quick_f9_7_static_node){
$vnode_2=[$quick_f9_7_static_node];
}else{
$vnode_3=[$createVNode(0,'方向：')];$vnode_2=[$quick_f9_7_static_node=$createVNode('div',{'_': 'cK','class': 'rd-eh rd-ki',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'layouts','class': 'rd-kj','mx5-change': $viewId+'_nc({key:\'l\'})','mx5-view': '4l/61/index?list='+$keyOf($refData,layouts,'cI')+'&textKey=text&valueKey=value&selected='+($encodeUrl(printer.l)),}));$vnode_1.push($createVNode('div',$quick_f9_6_static_attr,$vnode_2));
if($quick_f9_8_static_node){
$vnode_2=[$quick_f9_8_static_node];
}else{
$vnode_3=[$createVNode(0,'双面打印：')];$vnode_2=[$quick_f9_8_static_node=$createVNode('div',{'_': 'cL','class': 'rd-eh rd-ki',},$vnode_3)];
}
$vnode_3=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','checked': (printer.ts),'mx5-change': $viewId+'_nd()',},1,$special_2)];
if($quick_f9_10_static_node){
$vnode_3.push($quick_f9_10_static_node);
}else{
$vnode_3.push($quick_f9_10_static_node=$createVNode('i',{'_': 'cM','class': 'rd-em rd-et rd-fg',}));
}
$vnode_2.push($createVNode('label',$quick_f9_9_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_f9_6_static_attr,$vnode_2));
if($quick_f9_11_static_node){
$vnode_2=[$quick_f9_11_static_node];
}else{
$vnode_3=[$createVNode(0,'打印份数：')];$vnode_2=[$quick_f9_11_static_node=$createVNode('div',{'_': 'cN','class': 'rd-eh rd-ki',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_nb({key:\'nc\'})','class': 'rd-dH rd-em','mx5-view': '4l/60/index?min=1&value='+$keyOf($refData,printer.nc,'cJ'),}));$vnode_1.push($createVNode('div',$quick_f9_6_static_attr,$vnode_2));
if($quick_f9_12_static_node){
$vnode_2=[$quick_f9_12_static_node];
}else{
$vnode_3=[$createVNode(0,'左页边距：')];$vnode_2=[$quick_f9_12_static_node=$createVNode('div',{'_': 'cO','class': 'rd-eh rd-ki',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_nb({key:\'pl\'})','class': 'rd-dH rd-em','mx5-view': '4l/60/index?min=0&value='+$keyOf($refData,printer.pl,'cK'),}));$vnode_1.push($createVNode('div',$quick_f9_6_static_attr,$vnode_2));
if($quick_f9_13_static_node){
$vnode_2=[$quick_f9_13_static_node];
}else{
$vnode_3=[$createVNode(0,'上页边距：')];$vnode_2=[$quick_f9_13_static_node=$createVNode('div',{'_': 'cP','class': 'rd-eh rd-ki',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_nb({key:\'pt\'})','class': 'rd-dH rd-em','mx5-view': '4l/60/index?min=0&value='+$keyOf($refData,printer.pt,'cL'),}));$vnode_1.push($createVNode('div',$quick_f9_6_static_attr,$vnode_2));
if($quick_f9_14_static_node){
$vnode_2=[$quick_f9_14_static_node];
}else{
$vnode_3=[$createVNode(0,'右页边距：')];$vnode_2=[$quick_f9_14_static_node=$createVNode('div',{'_': 'cQ','class': 'rd-eh rd-ki',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_nb({key:\'pr\'})','class': 'rd-dH rd-em','mx5-view': '4l/60/index?min=0&value='+$keyOf($refData,printer.pr,'cM'),}));$vnode_1.push($createVNode('div',$quick_f9_6_static_attr,$vnode_2));
if($quick_f9_15_static_node){
$vnode_2=[$quick_f9_15_static_node];
}else{
$vnode_3=[$createVNode(0,'下页边距：')];$vnode_2=[$quick_f9_15_static_node=$createVNode('div',{'_': 'cR','class': 'rd-eh rd-ki',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_nb({key:\'pb\'})','class': 'rd-dH rd-em','mx5-view': '4l/60/index?min=0&value='+$keyOf($refData,printer.pb,'cN'),}));$vnode_1.push($createVNode('div',$quick_f9_6_static_attr,$vnode_2));
}$vnode_0.push($createVNode('div',$quick_f9_3_static_attr,$vnode_1));$vnode_2=[$quick_eA_static_text||($quick_eA_static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_el()','class': 'rd-dL rd-dN rd-eX rd-ei','type': 'button',},$vnode_2)];$vnode_2=[$quick_eB_static_text||($quick_eB_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_ek()','class': 'rd-dL rd-eX rd-e_ rd-ei','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_f9_16_static_attr,$vnode_1));
if($quick_f9_17_static_node){
$vnode_0.push($quick_f9_17_static_node);
}else{
$vnode_0.push($quick_f9_17_static_node=$createVNode('div',{'_': 'cS','class': 'rd-dT rd-eF rd-fI',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        this['_ej'] = data.dialog;
        this.set({
            exf: index_1["_mT"],
            layouts: Layouts
        });
    },
    render() {
        let mark = magix_1.mark(this, '_na');
        let s = new service_1();
        s.all({
            name: '_fB',
            url: magix_1.config('rds') + 'printers',
            '_fg': JSON.stringify({
                width: 0,
                height: 0,
                location: location.href
            })
        }, (ex, bag) => {
            if (mark()) {
                let printer = index_1["_m5"]();
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
    '_ek<click>'() {
        this['_ej'].close();
    },
    '_nb<input>'(e) {
        let printer = this.get('printer');
        let { key } = e.params;
        printer[key] = e.value;
    },
    '_nc<change>'(e) {
        let printer = this.get('printer');
        let { key } = e.params;
        printer[key] = e.value;
    },
    '_nd<change>'(e) {
        let printer = this.get('printer');
        printer.ts = e.eventTarget.checked;
    },
    '_el<click>'() {
        index_1["_n_"](this.get('printer'));
        this['_ej'].close();
    }
});

});