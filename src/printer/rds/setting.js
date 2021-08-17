/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("printer/rds/setting",["magix5","../../designer/service","./index","gallery/mx-dropdown/index","gallery/mx-number/index"],(require,exports,module)=>{
require("gallery/mx-dropdown/index");
require("gallery/mx-number/index");
let $quick_d0_0_static_node;
let $quick_d0_1_static_node;
let $quick_d0_5_static_node;
let $quick_d0_7_static_node;
let $quick_d0_8_static_node;
let $quick_d0_10_static_node;
let $quick_d0_11_static_node;
let $quick_d0_12_static_node;
let $quick_d0_13_static_node;
let $quick_d0_14_static_node;
let $quick_d0_15_static_node;
let $quick_cr_static_text;
let $quick_cs_static_text;
let $quick_d0_17_static_node;
let $quick_d0_3_static_attr={'class': 'rd-_assets_index_less_-dialog-body',};
let $quick_d0_4_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex',};
let $quick_d0_6_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_printer_index_less_-mt-20',};
let $quick_d0_9_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-label',};
let $quick_d0_16_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-bottom-0 rd-_assets_index_less_-dialog-footer rd-_assets_index_less_-dialog-footer-with-shadow rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-flex-end rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-6',};
let $special_2={'checked':'checked',};

let magix_1 = require("magix5");
let service_1 = require("../../designer/service");
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
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	error,
	exf,
	list,
	printer,
	layouts,}=$dataFromView,
$vnode_1,
$vnode_3,
$vnode_2;

if($quick_d0_0_static_node){
$vnode_0=[$quick_d0_0_static_node];
}else{
$vnode_0=[$quick_d0_0_static_node=$createVNode('div',{'_': 'a@','class': 'rd-_assets_index_less_-dialog-header-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-7',})];
}

if($quick_d0_1_static_node){
$vnode_0.push($quick_d0_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-_assets_index_less_-tag-h5">RDS打印服务设置</h5>',1)];$vnode_0.push($quick_d0_1_static_node=$createVNode('div',{'_': 'a$','class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-dialog-header rd-_assets_index_less_-dialog-header-with-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-top-0 rd-_assets_index_less_-z-index-8',},$vnode_1));
}
$vnode_1=[];$__line=6;$__art="{{if error}}";$__ctrl="if(error){";
if(error){
$vnode_1.push($createVNode(0,($__line=7,$__art='{{=exf(error.message)}}',$__ctrl='<%=exf(error.message)%>',(exf(error.message)))));
}else{

if($quick_d0_5_static_node){
$vnode_2=[$quick_d0_5_static_node];
}else{
$vnode_3=[$createVNode(0,'打印机：')];$vnode_2=[$quick_d0_5_static_node=$createVNode('div',{'_': 'a^','class': 'rd-_assets_index_less_-tr rd-_printer_index_less_-width-120',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'list','class': 'rd-_printer_index_less_-width-350','mx5-change': $viewId+'@:{set.printer~rs}({key:\'name\'})','mx5-view': 'gallery/mx-dropdown/index?list='+($__line=11,$__art='{{#list}}',$__ctrl='<%#list,\'auto_key_list\'%>',$keyOf($refData,list,'auto_key_list'))+'&selected='+($__line=11,$__art='{{=printer.name}}',$__ctrl='<%=$encodeUrl(printer.name)%>',($encodeUrl(printer.name))),}));$vnode_1.push($createVNode('div',$quick_d0_4_static_attr,$vnode_2));
if($quick_d0_7_static_node){
$vnode_2=[$quick_d0_7_static_node];
}else{
$vnode_3=[$createVNode(0,'方向：')];$vnode_2=[$quick_d0_7_static_node=$createVNode('div',{'_': 'a*','class': 'rd-_assets_index_less_-tr rd-_printer_index_less_-width-120',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'layouts','class': 'rd-_printer_index_less_-width-350','mx5-change': $viewId+'@:{set.printer~rs}({key:\'l\'})','mx5-view': 'gallery/mx-dropdown/index?list='+($__line=15,$__art='{{#layouts}}',$__ctrl='<%#layouts,\'auto_key_layouts\'%>',$keyOf($refData,layouts,'auto_key_layouts'))+'&textKey=text&valueKey=value&selected='+($__line=15,$__art='{{=printer.l}}',$__ctrl='<%=$encodeUrl(printer.l)%>',($encodeUrl(printer.l))),}));$vnode_1.push($createVNode('div',$quick_d0_6_static_attr,$vnode_2));
if($quick_d0_8_static_node){
$vnode_2=[$quick_d0_8_static_node];
}else{
$vnode_3=[$createVNode(0,'双面打印：')];$vnode_2=[$quick_d0_8_static_node=$createVNode('div',{'_': 'a{','class': 'rd-_assets_index_less_-tr rd-_printer_index_less_-width-120',},$vnode_3)];
}
$vnode_3=[$createVNode('input',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-switch-input','type': 'checkbox','checked': ($temp_var=($__line=20,$__art='{{=printer.ts}}',$__ctrl='<%=printer.ts%>',printer.ts),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:printer/rds/setting.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{set.printer.two.side~rs}()',},1,$special_2)];
if($quick_d0_10_static_node){
$vnode_3.push($quick_d0_10_static_node);
}else{
$vnode_3.push($quick_d0_10_static_node=$createVNode('i',{'_': 'a}','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-switch-button rd-_assets_index_less_-unselectable',}));
}
$vnode_2.push($createVNode('label',$quick_d0_9_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_d0_6_static_attr,$vnode_2));
if($quick_d0_11_static_node){
$vnode_2=[$quick_d0_11_static_node];
}else{
$vnode_3=[$createVNode(0,'打印份数：')];$vnode_2=[$quick_d0_11_static_node=$createVNode('div',{'_': 'a[','class': 'rd-_assets_index_less_-tr rd-_printer_index_less_-width-120',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'@:{update.num~rs}({key:\'nc\'})','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr','mx5-view': 'gallery/mx-number/index?min=1&value='+($__line=26,$__art='{{#printer.nc}}',$__ctrl='<%#printer.nc,\'auto_key_printer.printer.nc\'%>',$keyOf($refData,printer.nc,'auto_key_printer.printer.nc')),}));$vnode_1.push($createVNode('div',$quick_d0_6_static_attr,$vnode_2));
if($quick_d0_12_static_node){
$vnode_2=[$quick_d0_12_static_node];
}else{
$vnode_3=[$createVNode(0,'左页边距：')];$vnode_2=[$quick_d0_12_static_node=$createVNode('div',{'_': 'a]','class': 'rd-_assets_index_less_-tr rd-_printer_index_less_-width-120',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'@:{update.num~rs}({key:\'pl\'})','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr','mx5-view': 'gallery/mx-number/index?min=0&value='+($__line=30,$__art='{{#printer.pl}}',$__ctrl='<%#printer.pl,\'auto_key_printer.printer.pl\'%>',$keyOf($refData,printer.pl,'auto_key_printer.printer.pl')),}));$vnode_1.push($createVNode('div',$quick_d0_6_static_attr,$vnode_2));
if($quick_d0_13_static_node){
$vnode_2=[$quick_d0_13_static_node];
}else{
$vnode_3=[$createVNode(0,'上页边距：')];$vnode_2=[$quick_d0_13_static_node=$createVNode('div',{'_': 'a|','class': 'rd-_assets_index_less_-tr rd-_printer_index_less_-width-120',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'@:{update.num~rs}({key:\'pt\'})','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr','mx5-view': 'gallery/mx-number/index?min=0&value='+($__line=34,$__art='{{#printer.pt}}',$__ctrl='<%#printer.pt,\'auto_key_printer.printer.pt\'%>',$keyOf($refData,printer.pt,'auto_key_printer.printer.pt')),}));$vnode_1.push($createVNode('div',$quick_d0_6_static_attr,$vnode_2));
if($quick_d0_14_static_node){
$vnode_2=[$quick_d0_14_static_node];
}else{
$vnode_3=[$createVNode(0,'右页边距：')];$vnode_2=[$quick_d0_14_static_node=$createVNode('div',{'_': 'a,','class': 'rd-_assets_index_less_-tr rd-_printer_index_less_-width-120',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'@:{update.num~rs}({key:\'pr\'})','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr','mx5-view': 'gallery/mx-number/index?min=0&value='+($__line=38,$__art='{{#printer.pr}}',$__ctrl='<%#printer.pr,\'auto_key_printer.printer.pr\'%>',$keyOf($refData,printer.pr,'auto_key_printer.printer.pr')),}));$vnode_1.push($createVNode('div',$quick_d0_6_static_attr,$vnode_2));
if($quick_d0_15_static_node){
$vnode_2=[$quick_d0_15_static_node];
}else{
$vnode_3=[$createVNode(0,'下页边距：')];$vnode_2=[$quick_d0_15_static_node=$createVNode('div',{'_': 'a.','class': 'rd-_assets_index_less_-tr rd-_printer_index_less_-width-120',},$vnode_3)];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'printer','mx5-input': $viewId+'@:{update.num~rs}({key:\'pb\'})','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr','mx5-view': 'gallery/mx-number/index?min=0&value='+($__line=42,$__art='{{#printer.pb}}',$__ctrl='<%#printer.pb,\'auto_key_printer.printer.pb\'%>',$keyOf($refData,printer.pb,'auto_key_printer.printer.pb')),}));$vnode_1.push($createVNode('div',$quick_d0_6_static_attr,$vnode_2));
}$vnode_0.push($createVNode('div',$quick_d0_3_static_attr,$vnode_1));$vnode_2=[$quick_cr_static_text||($quick_cr_static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'@:{apply~rs}()','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc','type': 'button',},$vnode_2)];$vnode_2=[$quick_cs_static_text||($quick_cs_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'@:{cancel~rs}()','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10 rd-_assets_index_less_-tc','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_d0_16_static_attr,$vnode_1));
if($quick_d0_17_static_node){
$vnode_0.push($quick_d0_17_static_node);
}else{
$vnode_0.push($quick_d0_17_static_node=$createVNode('div',{'_': 'a`','class': 'rd-_assets_index_less_-dialog-footer-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-5',}));
}
 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:printer/rds/setting.html'; throw msg; }  } ,
    init(data) {
        this['@:{dialog~rs}'] = data.dialog;
        this.set({
            exf: index_1["@:{format.ex.message~rs}"],
            layouts: Layouts
        });
    },
    render() {
        let mark = magix_1.mark(this, '@:{render.rds.setting~rs}');
        let s = new service_1();
        s.all({
            name: '@:{post.by.url~rs}',
            url: magix_1.config('rds') + 'printers',
            '@:{body~rs}': JSON.stringify({
                width: 0,
                height: 0,
                location: location.href
            })
        }, (ex, bag) => {
            if (mark()) {
                let printer = index_1["@:{get.config~rs}"]();
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
    '@:{cancel~rs}<click>'() {
        this['@:{dialog~rs}'].close();
    },
    '@:{update.num~rs}<input>'(e) {
        let printer = this.get('printer');
        let { key } = e.params;
        printer[key] = e.value;
    },
    '@:{set.printer~rs}<change>'(e) {
        let printer = this.get('printer');
        let { key } = e.params;
        printer[key] = e.value;
    },
    '@:{set.printer.two.side~rs}<change>'(e) {
        let printer = this.get('printer');
        printer.ts = e.eventTarget.checked;
    },
    '@:{apply~rs}<click>'() {
        index_1["@:{set.config~rs}"](this.get('printer'));
        this['@:{dialog~rs}'].close();
    }
});

});