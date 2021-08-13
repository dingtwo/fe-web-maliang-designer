/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("7j/7l/setting",["5c","../../5b/5v","./index","5j/6v/index","5j/6u/index"],(require,exports,module)=>{
require("5j/6v/index");
require("5j/6u/index");
let $quick_ow_0_static_node;
let $quick_ow_1_static_node;
let $quick_ow_5_static_node;
let $quick_ow_7_static_node;
let $quick_ow_8_static_node;
let $quick_ow_10_static_node;
let $quick_ow_11_static_node;
let $quick_ow_12_static_node;
let $quick_ow_13_static_node;
let $quick_ow_14_static_node;
let $quick_ow_15_static_node;
let $quick_mY_static_text;
let $quick_mZ_static_text;
let $quick_ow_17_static_node;
let $quick_ow_3_static_attr={'class': 'rd-mf',};
let $quick_ow_4_static_attr={'class': 'rd-mX rd-mZ',};
let $quick_ow_6_static_attr={'class': 'rd-mX rd-mZ rd-sI',};
let $quick_ow_9_static_attr={'class': 'rd-mD rd-mX rd-mZ rd-ml rd-nk',};
let $quick_ow_16_static_attr={'class': 'rd-m3 rd-mA rd-mX rd-mZ rd-mh rd-mi rd-n2 rd-n7 rd-nh',};
let $special_2={'checked':'checked',};

let magix_1 = require("5c");
let service_1 = require("../../5b/5v");
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

if($quick_ow_0_static_node){
$vnode_0=[$quick_ow_0_static_node];
}else{
$vnode_0=[$quick_ow_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-m3 rd-md rd-n8',})];
}

if($quick_ow_1_static_node){
$vnode_0.push($quick_ow_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-mm">RDS打印服务设置</h5>',1)];$vnode_0.push($quick_ow_1_static_node=$createVNode('div',{'_': 'i@','class': 'rd-m3 rd-m4 rd-mA rd-mb rd-mc rd-n9',},$vnode_1));
}
$vnode_1=[];
if(error){
$vnode_1.push($createVNode(0,(exf(error.message))));
}else{

if($quick_ow_5_static_node){
$vnode_2=[$quick_ow_5_static_node];
}else{
$vnode_3=[$createVNode(0,'打印机：')];$vnode_2=[$quick_ow_5_static_node=$createVNode('div',{'_': 'i$','class': 'rd-mF rd-sG',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'list','class': 'rd-sH','mx5-change': $viewId+'_vA({key:\'name\'})','mx5-view': '5j/6v/index?list='+$keyOf($refData,list,'i!')+'&selected='+($encodeUrl(printer.name)),}));$vnode_1.push($createVNode('div',$quick_ow_4_static_attr,$vnode_2));
if($quick_ow_7_static_node){
$vnode_2=[$quick_ow_7_static_node];
}else{
$vnode_3=[$createVNode(0,'方向：')];$vnode_2=[$quick_ow_7_static_node=$createVNode('div',{'_': 'i^','class': 'rd-mF rd-sG',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'layouts','class': 'rd-sH','mx5-change': $viewId+'_vA({key:\'l\'})','mx5-view': '5j/6v/index?list='+$keyOf($refData,layouts,'i@')+'&textKey=text&valueKey=value&selected='+($encodeUrl(printer.l)),}));$vnode_1.push($createVNode('div',$quick_ow_6_static_attr,$vnode_2));
if($quick_ow_8_static_node){
$vnode_2=[$quick_ow_8_static_node];
}else{
$vnode_3=[$createVNode(0,'双面打印：')];$vnode_2=[$quick_ow_8_static_node=$createVNode('div',{'_': 'i*','class': 'rd-mF rd-sG',},$vnode_3)];
}
$vnode_3=[$createVNode('input',{'class': 'rd-mJ rd-nD','type': 'checkbox','checked': (printer.ts),'mx5-change': $viewId+'_vB()',},1,$special_2)];
if($quick_ow_10_static_node){
$vnode_3.push($quick_ow_10_static_node);
}else{
$vnode_3.push($quick_ow_10_static_node=$createVNode('i',{'_': 'i{','class': 'rd-mK rd-mR rd-nE',}));
}
$vnode_2.push($createVNode('label',$quick_ow_9_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_ow_6_static_attr,$vnode_2));
if($quick_ow_11_static_node){
$vnode_2=[$quick_ow_11_static_node];
}else{
$vnode_3=[$createVNode(0,'打印份数：')];$vnode_2=[$quick_ow_11_static_node=$createVNode('div',{'_': 'i}','class': 'rd-mF rd-sG',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_vz({key:\'nc\'})','class': 'rd-l5 rd-mK','mx5-view': '5j/6u/index?min=1&value='+$keyOf($refData,printer.nc,'i$'),}));$vnode_1.push($createVNode('div',$quick_ow_6_static_attr,$vnode_2));
if($quick_ow_12_static_node){
$vnode_2=[$quick_ow_12_static_node];
}else{
$vnode_3=[$createVNode(0,'左页边距：')];$vnode_2=[$quick_ow_12_static_node=$createVNode('div',{'_': 'i[','class': 'rd-mF rd-sG',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_vz({key:\'pl\'})','class': 'rd-l5 rd-mK','mx5-view': '5j/6u/index?min=0&value='+$keyOf($refData,printer.pl,'i^'),}));$vnode_1.push($createVNode('div',$quick_ow_6_static_attr,$vnode_2));
if($quick_ow_13_static_node){
$vnode_2=[$quick_ow_13_static_node];
}else{
$vnode_3=[$createVNode(0,'上页边距：')];$vnode_2=[$quick_ow_13_static_node=$createVNode('div',{'_': 'i]','class': 'rd-mF rd-sG',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_vz({key:\'pt\'})','class': 'rd-l5 rd-mK','mx5-view': '5j/6u/index?min=0&value='+$keyOf($refData,printer.pt,'i*'),}));$vnode_1.push($createVNode('div',$quick_ow_6_static_attr,$vnode_2));
if($quick_ow_14_static_node){
$vnode_2=[$quick_ow_14_static_node];
}else{
$vnode_3=[$createVNode(0,'右页边距：')];$vnode_2=[$quick_ow_14_static_node=$createVNode('div',{'_': 'i|','class': 'rd-mF rd-sG',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_vz({key:\'pr\'})','class': 'rd-l5 rd-mK','mx5-view': '5j/6u/index?min=0&value='+$keyOf($refData,printer.pr,'i{'),}));$vnode_1.push($createVNode('div',$quick_ow_6_static_attr,$vnode_2));
if($quick_ow_15_static_node){
$vnode_2=[$quick_ow_15_static_node];
}else{
$vnode_3=[$createVNode(0,'下页边距：')];$vnode_2=[$quick_ow_15_static_node=$createVNode('div',{'_': 'i,','class': 'rd-mF rd-sG',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'_vz({key:\'pb\'})','class': 'rd-l5 rd-mK','mx5-view': '5j/6u/index?min=0&value='+$keyOf($refData,printer.pb,'i}'),}));$vnode_1.push($createVNode('div',$quick_ow_6_static_attr,$vnode_2));
}$vnode_0.push($createVNode('div',$quick_ow_3_static_attr,$vnode_1));$vnode_2=[$quick_mY_static_text||($quick_mY_static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_mJ()','class': 'rd-l9 rd-mG rd-ma rd-nk','type': 'button',},$vnode_2)];$vnode_2=[$quick_mZ_static_text||($quick_mZ_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_mI()','class': 'rd-l9 rd-mG rd-mx rd-nk','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_ow_16_static_attr,$vnode_1));
if($quick_ow_17_static_node){
$vnode_0.push($quick_ow_17_static_node);
}else{
$vnode_0.push($quick_ow_17_static_node=$createVNode('div',{'_': 'i.','class': 'rd-m3 rd-mg rd-n6',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        this['_mH'] = data.dialog;
        this.set({
            exf: index_1["_vg"],
            layouts: Layouts
        });
    },
    render() {
        let mark = magix_1.mark(this, '_vy');
        let s = new service_1();
        s.all({
            name: '_nZ',
            url: magix_1.config('rds') + 'printers',
            '_nE': JSON.stringify({
                width: 0,
                height: 0,
                location: location.href
            })
        }, (ex, bag) => {
            if (mark()) {
                let printer = index_1["_vs"]();
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
    '_mI<click>'() {
        this['_mH'].close();
    },
    '_vz<input>'(e) {
        let printer = this.get('printer');
        let { key } = e.params;
        printer[key] = e.value;
    },
    '_vA<change>'(e) {
        let printer = this.get('printer');
        let { key } = e.params;
        printer[key] = e.value;
    },
    '_vB<change>'(e) {
        let printer = this.get('printer');
        printer.ts = e.eventTarget.checked;
    },
    '_mJ<click>'() {
        index_1["_vx"](this.get('printer'));
        this['_mH'].close();
    }
});

});