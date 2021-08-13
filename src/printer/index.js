/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("printer/index",["magix5","../designer/const","../designer/service","../gallery/mx-dialog/index","../gallery/mx-runner/index","../gallery/mx-toast/index","../i18n/index","../provider/fs","../provider/html2canvas","../provider/jspdf","./generic/index","./generic/resource","./rds/index","./unit/batch","./unit/common","./unit/data-celltable","./unit/data-coltable","./unit/data-dtable","./unit/data-ftable","./unit/data-repeater","./unit/pager","./unit/richtext","gallery/mx-dropdown/index"],(require,exports,module)=>{
require("gallery/mx-dropdown/index");
let $quick_gr_static_text;
let $quick_gs_static_text;
let $quick_hw_1_static_node;
let $quick_hw_2_static_node;
let $quick_gt_static_text;
let $quick_gu_static_text;
let $quick_gv_static_text;
let $quick_gw_static_text;
let $quick_hw_4_static_node;
let $quick_hw_5_static_node;
let $quick_hw_6_static_node;
let $quick_hw_7_static_node;
let $quick_hw_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_printer_index_less_-header',};
let $quick_hw_3_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-flex-direction-column rd-_printer_index_less_-wrap',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../designer/const");
let service_1 = require("../designer/service");
let index_1 = require("../gallery/mx-dialog/index");
let index_2 = require("../gallery/mx-runner/index");
let index_3 = require("../gallery/mx-toast/index");
let index_4 = require("../i18n/index");
let fs_1 = require("../provider/fs");
let html2canvas_1 = require("../provider/html2canvas");
let jspdf_1 = require("../provider/jspdf");
let index_5 = require("./generic/index");
let resource_1 = require("./generic/resource");
/**
 * Lodop打印对象可以从 root/trash/lodop中拿出来放到./目录下即可
 */
//import Lodop from './lodop/index';
let index_6 = require("./rds/index");
let batch_1 = require("./unit/batch");
let common_1 = require("./unit/common");
let data_celltable_1 = require("./unit/data-celltable");
let data_coltable_1 = require("./unit/data-coltable");
let data_dtable_1 = require("./unit/data-dtable");
let data_ftable_1 = require("./unit/data-ftable");
let data_repeater_1 = require("./unit/data-repeater");
let pager_1 = require("./unit/pager");
let richtext_1 = require("./unit/richtext");
let { State, View, lowTaskFinale, type, has, applyStyle, parseUrl, config, mark, guid, unboot, delay, task } = magix_1;
/**
 * 反调试
 */
//rd#need-register-code
//以下这个if语句完成在发布模式下的反调试功能，如果需要发布调试，可删除这个if语句
if (!DEBUG && false) {
    let F = Function, FS = F + '', FUS = F[FS] + '';
    let now = performance.now.bind(performance);
    let task = t1 => {
        t1 = now();
        F(`${FUS.slice(2, 4)}b${FS[1]}gg${FUS[3]}r`)();
        if (now() - t1 > 100) {
            index_2['@:{task.remove~rs}'](task);
            unboot();
        }
    };
    index_2["@:{task.add~rs}"](2000, task);
}
let { random } = Math;
applyStyle("rd-_printer_index_less_",".rd-_printer_index_less_-page-break {\npage-break-after:auto;\npage-break-inside:avoid;\n}\n.rd-_printer_index_less_-width-120 {\nwidth:120px;\n}\n.rd-_printer_index_less_-width-350 {\nwidth:350px;\n}\n.rd-_printer_index_less_-mt-20 {\nmargin-top:20px;\n}\n.rd-_printer_index_less_-pdf-ifm {\nheight:calc(100vh - 45px);\n}\n.rd-_printer_index_less_-progress-tip {\nposition:fixed;\nbottom:0;\npadding:4px;\nbackground-color:#fff;\nbox-shadow:-1px -1px 4px #0000002b;\n}\n.rd-_printer_index_less_-spliter {\nheight:30px;\nbackground:linear-gradient(#ddd4, #ddd 30%, #ddd 70%, #ddd4);\nmargin:4px 20px;\n}\n.rd-_printer_index_less_-need-auth {\nleft:5px;\ntop:5px;\ncolor:red;\nborder:solid 1px red;\nbackground-color:#fff;\npadding:4px;\ndisplay:none;\nz-index:10000;\n}\n@page {\nmargin:0;\n}\n@media screen {\n  .rd-_printer_index_less_-header {\nbox-shadow:0 0 6px 0 rgba(0, 0, 0, 0.3);\nmargin-bottom:10px;\nheight:34px;\njustify-content:flex-end;\npadding-right:50px;\nposition:sticky;\ntop:0;\nz-index:2;\nbackground-color:#fff;\n  }\n  .rd-_printer_index_less_-tip {\nheight:120px;\nline-height:120px;\n  }\n  .rd-_printer_index_less_-page {\nbox-shadow:0 0 6px 0 rgba(0, 0, 0, 0.3);\ncontent-visibility:auto;\ncontain:paint;\n  }\n  .rd-_printer_index_less_-page-display {\nmargin:20px auto;\n  }\n}\n@media print {\n  .rd-_printer_index_less_-header {\ndisplay:none;\n  }\n  body {\nmin-width:auto;\n  }\n  .rd-_printer_index_less_-page-display {\nmargin:0;\n  }\n  .rd-_printer_index_less_-page {\nbox-shadow:none;\n  }\n  .rd-_printer_index_less_-wrap {\ndisplay:block;\n  }\n  .rd-_printer_index_less_-need-auth {\ndisplay:block;\n  }\n}\n");
let doc = document;
doc.documentElement.classList.add('rd-_assets_index_less_-scrollable');
doc.body.classList.add('rd-_assets_index_less_-overflow-y-scroll');
/**
 * 是否进行深层数据绑定的容器元素
 */
let SearchHodBindElements = {
    'hod-table': 1,
    'hod-hflex': 1,
    'hod-vflex': 1,
    'hod-footer': 1,
    'hod-header': 1,
    'data-dtable': 1,
    'data-rdtable': 1,
};
/**
 * 目前有哪些容器元素，对于容器元素，需要递归查找里面的子元素
 */
let HodElements = {
    ...SearchHodBindElements,
    'data-repeater': 1,
    'data-ftable': 1
};
/**
 * 格式转换列表
 */
let FormatList = [{
        text: '网页',
        value: 'web'
    }, {
        text: '图片',
        value: 'image'
    }, {
        text: 'pdf',
        value: 'pdf'
    }, {
        text: '图片-RDS服务',
        value: 'rdImage'
    }, {
        text: 'pdf-RDS服务',
        value: 'rdPdf'
    }];
/**
 * 数据中心，用来控制分页
 */
let DataCenter = {};
//标签正则
let tagReg = /<[^>]+>/g;
//删除不必要的属性正则
let tagAttReg = /\s*(?:id|mx5-[a-z]+)\s*=\s*"[^"]+"/gi;
/**
 * 清理html中不需要的属性
 * @param html 源html
 */
let cleanHTML = (html) => {
    return html.replace(tagReg, m => m.replace(tagAttReg, ''));
};
/**
 * 防止生产包被使用的设置
 */
let checkFlag = 0.1;
/**
 * 根据api地址请求数据
 * @param api api地址
 */
let fetchOneAPI = (api) => {
    return new Promise(resolve => {
        let dest = DataCenter[api];
        if (!dest) {
            dest = DataCenter[api] = {};
        }
        if (dest['@:{loaded~rs}']) {
            resolve();
        }
        else if (dest['@:{loading~rs}']) {
            dest['@:{loading~rs}'].push(resolve);
        }
        else {
            dest['@:{loading~rs}'] = [resolve];
            let s = new service_1();
            s.all({
                name: '@:{get.by.url~rs}',
                url: api
            }, (err, bag) => {
                let list = bag.get('data', []);
                //rd#need-register-code
                /**
                 * !!!真实环境删除这个if语句
                 * 这里进行一定概率的数据错乱，防止生产包被使用！
                 */
                if (random() < checkFlag) {
                    let newList = [];
                    for (let e of list) {
                        if (type(e) == 'Object') {
                            let d = {};
                            for (let x in e) {
                                let dest = e[x];
                                if (type(dest) == 'Number') {
                                    d[x] = dest + (random() * 10) | 0;
                                }
                                else if (type(dest) == 'String' &&
                                    !dest.startsWith('//')) {
                                    d[x] = dest.substring(1);
                                }
                                else {
                                    d[x] = dest;
                                }
                            }
                            newList.push(d);
                        }
                        else {
                            newList.push(e);
                        }
                    }
                    bag.set('data', newList);
                    list = newList;
                }
                dest['@:{data~rs}'] = list;
                dest['@:{loaded~rs}'] = 1;
                dest['@:{error~rs}'] = err === null || err === void 0 ? void 0 : err.message;
                for (let resolve of dest['@:{loading~rs}']) {
                    resolve();
                }
                delete dest['@:{loading~rs}'];
            });
        }
    });
};
/**
 * 请求所有的api数据回来备用
 * @param apis api数组对象
 */
let fetchAllAPI = (apis) => {
    let promises = [];
    for (let api of apis) {
        promises.push(fetchOneAPI(api));
    }
    return Promise.all(promises);
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	inner,
	empty,
	format,
	sf,
	enable,
	hasData,
	loading,
	page,
	unit,
	pdf,
	rdPdf,
	pages,
	images,
	rdImages,
	auth,}=$dataFromView,
$vnode_2,
$$_mx5$_view,
$vnode_1,
$vnode_3,
$$_class,
$$_style;
$vnode_1=[];$__line=2;$__art="{{if inner}}";$__ctrl="if(inner){";
if(inner){
$vnode_2=[$quick_gr_static_text||($quick_gr_static_text=$createVNode(0,'独立使用打印页面'))];$vnode_1.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-mr10 rd-_assets_index_less_-tc','mx5-click': $viewId+'@:{open.with.id~rs}()',},$vnode_2));
}$vnode_2=[$quick_gs_static_text||($quick_gs_static_text=$createVNode(0,'第三方静默打印'))];$vnode_1.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-mr10 rd-_assets_index_less_-tc','mx5-click': $viewId+'@:{silent.print~rs}()',},$vnode_2));
if($quick_hw_1_static_node){
$vnode_1.push($quick_hw_1_static_node);
}else{
$vnode_1.push($quick_hw_1_static_node=$createVNode('div',{'_': 'dM','class': 'rd-_assets_index_less_-width-1 rd-_printer_index_less_-spliter',}));
}

if($quick_hw_2_static_node){
$vnode_1.push($quick_hw_2_static_node);
}else{
$vnode_2=[$createVNode(0,'转换内容为：')];$vnode_1.push($quick_hw_2_static_node=$createVNode('div',{'_': 'dN',},$vnode_2));
}
;$$_mx5$_view='gallery/mx-dropdown/index?'+($__line=8,$__art='{{=empty}}','');$__ctrl='<%if(($temp_var=empty)){%>';if(($temp_var=empty)){;$$_mx5$_view+='disabled='+($__ctrl='<%=$encodeUrl($temp_var)%>',($encodeUrl($temp_var)));$__ctrl='<%}%>';};$$_mx5$_view+='&list='+($__line=8,$__art='{{#format}}',$__ctrl='<%#format,\'auto_key_format\'%>',$keyOf($refData,format,'auto_key_format'))+'&textKey=text&valueKey=value&selected='+($__line=8,$__art='{{=sf}}',$__ctrl='<%=$encodeUrl(sf)%>',($encodeUrl(sf)));$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'format','class': 'rd-_assets_index_less_-mr10 rd-_printer_index_less_-width-120','mx5-change': $viewId+'@:{change.format~rs}()','mx5-view': $$_mx5$_view,}));$vnode_2=[$quick_gt_static_text||($quick_gt_static_text=$createVNode(0,'导出为本地文件'))];$vnode_1.push($createVNode('button',{'disabled': ($temp_var=($__line=9,$__art='{{= sf!=\'pdf\' && sf!=\'rdPdf\' &&!enable}}',$__ctrl='<%= sf!=\'pdf\' && sf!=\'rdPdf\' &&!enable%>',sf!='pdf' && sf!='rdPdf' &&!enable),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:printer/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc','mx5-click': $viewId+'@:{export.to.native.file~rs}()',},$vnode_2));
if($quick_hw_1_static_node){
$vnode_1.push($quick_hw_1_static_node);
}else{
$vnode_1.push($quick_hw_1_static_node=$createVNode('div',{'_': 'dM','class': 'rd-_assets_index_less_-width-1 rd-_printer_index_less_-spliter',}));
}
$vnode_2=[$quick_gu_static_text||($quick_gu_static_text=$createVNode(0,'RDS设置'))];$vnode_1.push($createVNode('button',{'disabled': ($temp_var=($__line=13,$__art='{{=!enable}}',$__ctrl='<%=!enable%>',!enable),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:printer/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-mr10 rd-_assets_index_less_-tc','mx5-click': $viewId+'@:{rds.setting~rs}()',},$vnode_2));$vnode_2=[$quick_gv_static_text||($quick_gv_static_text=$createVNode(0,'RDS打印'))];$vnode_1.push($createVNode('button',{'disabled': ($temp_var=($__line=14,$__art='{{=!enable}}',$__ctrl='<%=!enable%>',!enable),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:printer/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc','mx5-click': $viewId+'@:{rds.print~rs}()',},$vnode_2));
if($quick_hw_1_static_node){
$vnode_1.push($quick_hw_1_static_node);
}else{
$vnode_1.push($quick_hw_1_static_node=$createVNode('div',{'_': 'dM','class': 'rd-_assets_index_less_-width-1 rd-_printer_index_less_-spliter',}));
}
$vnode_2=[$quick_gw_static_text||($quick_gw_static_text=$createVNode(0,'浏览器打印'))];$vnode_1.push($createVNode('button',{'disabled': ($temp_var=($__line=16,$__art='{{=!enable}}',$__ctrl='<%=!enable%>',!enable),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:printer/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc','mx5-click': $viewId+'@:{print~rs}()',},$vnode_2));$vnode_0=[$createVNode('div',$quick_hw_0_static_attr,$vnode_1)];$vnode_1=[];$__line=20;$__art="{{if hasData}}";$__ctrl="if(hasData){";
if(hasData){
$__line=21;$__art="{{if loading}}";$__ctrl="if(loading){";
if(loading){

if($quick_hw_4_static_node){
$vnode_2=[$quick_hw_4_static_node];
}else{
$vnode_3=[$createVNode(0,'正在准备基础页面...')];$vnode_2=[$quick_hw_4_static_node=$createVNode('div',{'_': 'dO','class': 'rd-_assets_index_less_-fontsize-16 rd-_printer_index_less_-tip',},$vnode_3)];
}
$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pr rd-_printer_index_less_-page rd-_printer_index_less_-page-display','style': 'width:'+($__line=22,$__art='{{=page.width}}',$__ctrl='<%=page.width%>',(page.width))+($__line=22,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=22,$__art='{{=page.height}}',$__ctrl='<%=page.height%>',(page.height))+($__line=22,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';background:'+($__line=22,$__art='{{=page.background}}',$__ctrl='<%=page.background%>',(page.background)),},$vnode_2));
}else{
$__line=26;$__art="{{if sf==\\'pdf\\'}}";$__ctrl="if(sf=='pdf'){";
if(sf=='pdf'){
$vnode_1.push($createVNode('embed',{'src': ($__line=27,$__art='{{=pdf}}',$__ctrl='<%=pdf%>',(pdf)),'class': 'rd-_assets_index_less_-wp100 rd-_printer_index_less_-pdf-ifm','type': 'application/pdf',},1));
}else if(($__line=28,$__art="{{else if sf==\\'rdPdf\\'}}",$__ctrl="else if(sf=='rdPdf'){"),sf=='rdPdf'){
$vnode_1.push($createVNode('embed',{'src': ($__line=29,$__art='{{=rdPdf}}',$__ctrl='<%=rdPdf%>',(rdPdf)),'class': 'rd-_assets_index_less_-wp100 rd-_printer_index_less_-pdf-ifm','type': 'application/pdf',},1));
}else{
$__line=31;$__art="{{each pages as item pageIndex last}}";$__ctrl="for(let $q_c_exsxippql=pages.length,$q_lc_mbpvbpwm=$q_c_exsxippql-1,pageIndex=0;pageIndex<$q_c_exsxippql;pageIndex++){let item=pages[pageIndex];let last=pageIndex===$q_lc_mbpvbpwm;";
for(let $q_c_exsxippql=pages.length,$q_lc_mbpvbpwm=$q_c_exsxippql-1,pageIndex=0;pageIndex<$q_c_exsxippql;pageIndex+=1){
let item=pages[pageIndex];let last=pageIndex===$q_lc_mbpvbpwm;
$vnode_2=[];$__line=33;$__art="{{if sf==\\'web\\'}}";$__ctrl="if(sf=='web'){";
if(sf=='web'){
$__line=34;$__art="{{each item as e}}";$__ctrl="for(let $q_c_vpbdeofteja=item.length,$q_key_hkwupod=0;$q_key_hkwupod<$q_c_vpbdeofteja;$q_key_hkwupod++){let e=item[$q_key_hkwupod];";
for(let $q_c_vpbdeofteja=item.length,$q_key_hkwupod=0;$q_key_hkwupod<$q_c_vpbdeofteja;$q_key_hkwupod+=1){
let e=item[$q_key_hkwupod];
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'pages,unit','mx5-view': 'elements/'+($__line=35,$__art='{{=e.type}}',$__ctrl='<%=e.type%>',(e.type))+'/index?props='+($__line=35,$__art='{{#e.props}}',$__ctrl='<%#e.props,\'auto_key_pages.\'+(pageIndex)+\'.\'+($q_key_hkwupod)+\'.e.props\'%>',$keyOf($refData,e.props,'auto_key_pages.'+(pageIndex)+'.'+($q_key_hkwupod)+'.e.props'))+'&unit='+($__line=35,$__art='{{#unit}}',$__ctrl='<%#unit,\'auto_key_unit\'%>',$keyOf($refData,unit,'auto_key_unit')),}));
}
}else if(($__line=37,$__art="{{else if sf==\\'image\\' && images}}",$__ctrl="else if(sf=='image' && images){"),sf=='image' && images){
$vnode_2.push($createVNode('img',{'class': 'rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-img','src': ($__line=38,$__art='{{=images[pageIndex]}}',$__ctrl='<%=images[pageIndex]%>',(images[pageIndex])),},1));
}else if(($__line=39,$__art="{{else if sf==\\'rdImage\\' && rdImages}}",$__ctrl="else if(sf=='rdImage' && rdImages){"),sf=='rdImage' && rdImages){
$vnode_2.push($createVNode('img',{'class': 'rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-img','src': ($__line=40,$__art='{{=rdImages[pageIndex]}}',$__ctrl='<%=rdImages[pageIndex]%>',(rdImages[pageIndex])),},1));
}$__line=44;$__art="{{if auth}}";$__ctrl="if(auth){";
if(auth){

if($quick_hw_5_static_node){
$vnode_2.push($quick_hw_5_static_node);
}else{
$vnode_3=[$createVNode(0,'当前report-designer未取得授权，域名及IP地址已记录')];$vnode_2.push($quick_hw_5_static_node=$createVNode('div',{'_': 'dP','class': 'rd-_assets_index_less_-pa rd-_printer_index_less_-need-auth',},$vnode_3));
}

};$$_class='rd-_assets_index_less_-designer-root rd-_assets_index_less_-pr rd-_printer_index_less_-page rd-_printer_index_less_-page-display rd-_assets_index_less_-overflow-hidden'+($__line=32,$__art='{{if !last}}','');$__ctrl='<%if(!last){%>';if(!last){;$$_class+=' rd-_printer_index_less_-page-break'+($__line=32,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style='width:'+($__line=32,$__art='{{=page.width}}',$__ctrl='<%=page.width%>',(page.width))+($__line=32,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=32,$__art='{{=page.height}}',$__ctrl='<%=page.height%>',(page.height))+($__line=32,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';background:'+($__line=32,$__art='{{=page.background}}',$__ctrl='<%=page.background%>',(page.background))+';'+($__line=32,$__art='{{if !page.preformat&&page.backgroundImage}}','');$__ctrl='<%if(!page.preformat&&page.backgroundImage){%>';if(!page.preformat&&page.backgroundImage){;$$_style+='background-image:url('+($__line=32,$__art='{{=page.backgroundImage}}',$__ctrl='<%=page.backgroundImage%>',(page.backgroundImage))+');background-repeat:'+($__line=32,$__art='{{=page.backgroundRepeat==\'full\'?\'no-repeat\':page.backgroundRepeat}}',$__ctrl='<%=page.backgroundRepeat==\'full\'?\'no-repeat\':page.backgroundRepeat%>',(page.backgroundRepeat=='full'?'no-repeat':page.backgroundRepeat))+';background-size:'+($__line=32,$__art='{{if page.backgroundRepeat==\'full\'}}','');$__ctrl='<%if(page.backgroundRepeat==\'full\'){%>';if(page.backgroundRepeat=='full'){;$$_style+='100% 100%'+($__line=32,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+=''+($__line=32,$__art='{{=page.backgroundWidth}}',$__ctrl='<%=page.backgroundWidth%>',(page.backgroundWidth))+($__line=32,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=32,$__art='{{=page.backgroundHeight}}',$__ctrl='<%=page.backgroundHeight%>',(page.backgroundHeight))+($__line=32,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';background-position:'+($__line=32,$__art='{{=page.backgroundXOffset}}',$__ctrl='<%=page.backgroundXOffset%>',(page.backgroundXOffset))+($__line=32,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=32,$__art='{{=page.backgroundYOffset}}',$__ctrl='<%=page.backgroundYOffset%>',(page.backgroundYOffset))+($__line=32,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+($__line=32,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=32,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'class': $$_class,'style': $$_style,},$vnode_2));
}
}
}
}else{

if($quick_hw_6_static_node){
$vnode_1.push($quick_hw_6_static_node);
}else{
$vnode_2=[$createVNode(0,'请传递打印 id 或在设计器中打开该页面')];$vnode_1.push($quick_hw_6_static_node=$createVNode('div',{'_': 'dQ','class': 'rd-_assets_index_less_-fontsize-16 rd-_printer_index_less_-tip',},$vnode_2));
}

}$vnode_0.push($createVNode('div',$quick_hw_3_static_attr,$vnode_1));
if($quick_hw_7_static_node){
$vnode_0.push($quick_hw_7_static_node);
}else{
$vnode_0.push($quick_hw_7_static_node=$createVNode('div',{'_': 'dR','id': '_rd_tip','class': 'rd-_assets_index_less_-none rd-_assets_index_less_-right-0 rd-_printer_index_less_-progress-tip',}));
}
 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:printer/index.html'; throw msg; }  } ,
    async render() {
        /**
         * 先渲染界面
         */
        await this.digest({
            inner: top != self,
            //rd#need-register-code
            //这个auth属性在收到代码后直接删除，避免打印时的提示
            // auth: location.hostname != 'xinglie.github.io' && location.hostname != 'xinglie.gitee.io',
            format: FormatList,
            hasData: false,
            empty: true,
            sf: 'web'
        });
        /*
            以下根据地址栏有无id来决定是否发送请求来获取某个id的具体内容
        */
        let { params } = parseUrl(location.href);
        let contentUrl = config('getContentUrl');
        console.log('______', params, contentUrl);
        if (params.id &&
            contentUrl) {
            let s = new service_1();
            s.all({
                name: '@:{get.content~rs}',
                '@:{query~rs}': params
            }, (ex, bag) => {
                console.log('请求回来的初始数据', ex, bag);
                if (!ex) { //如果请求未有异常，则根据请求回来的数据进行渲染界面
                    let stage = bag.get('data.templateJson');
                    this['@:{render.page.by.json~rs}'](stage);
                }
            });
        }
    },
    /**
     * 分页填充页面
     * @param elements 设计器生出的所有元素
     * @param page 页面对象
     * @param pages 分页填充数组
     * @param pagers 页码器元素数组
     * @param ox 水平偏移
     * @param oy 垂直偏移
     * @param footerHeight 页脚高度
     */
    async '@:{fill.page~rs}'(elements, page, pages, pagers, ox, oy, footerHeight) {
        let logicCurrentPage = 0;
        let resLoader = this['@:{resources~rs}'];
        let unit = this.get('unit');
        for (let e of elements) {
            if (e.type == 'data-dtable' ||
                e.type == 'data-ftable') {
                index_5['@:{recast.table.by.data~rs}'](e, DataCenter);
            }
        }
        /**
         * 判断是否所有的元素都处理完了分页
         * @param elements 元素列表
         * @param indexesCache 元素的分页下标索引对象
         */
        let hasNextPage = (elements, indexesCache) => {
            for (let i = elements.length; i--;) {
                let e = elements[i];
                if (e.type == 'data-coltable' ||
                    e.type == 'data-celltable' ||
                    e.type == 'data-dtable' ||
                    e.type == 'data-rdtable' ||
                    e.type == 'batch-barcode' ||
                    e.type == 'batch-qrcode' ||
                    e.type == 'batch-text' ||
                    e.type == 'data-repeater' ||
                    e.type == 'data-ftable' ||
                    e.type == 'richtext' ||
                    e.type == 'html' ||
                    e.type == 'data-richtext') {
                    if (indexesCache[i] != -1) {
                        return true;
                    }
                }
            }
            return false;
        };
        /**
         * 如果当前处理的逻辑分页小于设计器指定的分页个数
         */
        while (logicCurrentPage < page.pages) {
            let offsetY = logicCurrentPage * page.height;
            //查找当前在设计区里，属于当前分页的元素
            let pageElements = index_5['@:{find.current.page.elements~rs}'](page, logicCurrentPage, elements, oy);
            logicCurrentPage++;
            let indexesCache = {};
            /**
             * 生成分页数据
             * @param elements 元素列表
             * @param page 页面对象
             * @param inHod 是否在容器里
             */
            let generatePage = async (elements, page, inHod) => {
                let newPage = [];
                for (let i = 0; i < elements.length; i++) {
                    let e = elements[i];
                    let newElement = inHod ? e : {
                        type: e.type,
                        id: e.id,
                        props: const_1['@:{const#clone~rs}'](e.props)
                    };
                    if (!inHod) {
                        //如果页头和页脚不偏移，则放开if语句
                        // if (e.type != 'hod-footer' &&
                        //     e.type != 'hod-header') {
                        newElement.props.x += ox;
                        newElement.props.y += oy;
                        //}
                        newElement.props.y -= offsetY;
                    }
                    if (e.type == 'pager') { //页码器
                        pager_1(newElement, newPage, inHod, pagers, pages.length);
                    }
                    else if (e.type == 'data-coltable') {
                        //列表格
                        let last = indexesCache[i] || 0;
                        if (last != -1) { //如果未到最后一页，则继续填充
                            indexesCache[i] = data_coltable_1(DataCenter, newElement, last, page, footerHeight, newPage, inHod);
                        }
                    }
                    else if (e.type == 'data-celltable') {
                        //单元格
                        if (inHod) { //在容器的情况下，始终填充第1条数据，这里可以根据需求进行调整
                            data_celltable_1(DataCenter, resLoader, newElement, 0, newPage, inHod);
                        }
                        else {
                            let last = indexesCache[i] || 0;
                            if (last != -1) {
                                indexesCache[i] = await data_celltable_1(DataCenter, resLoader, newElement, last, newPage, inHod);
                            }
                        }
                    }
                    else if (e.type == 'data-dtable' ||
                        e.type == 'data-rdtable') {
                        //数据表格
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await data_dtable_1(DataCenter, resLoader, newElement, last, page, footerHeight, unit, newPage, inHod);
                        }
                    }
                    else if (e.type == 'batch-barcode' ||
                        e.type == 'batch-qrcode' ||
                        e.type == 'batch-text') {
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await batch_1(DataCenter, newElement, last, page, footerHeight, newPage, inHod, unit);
                        }
                    }
                    else if (e.type == 'data-repeater') {
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await data_repeater_1(DataCenter, newElement, last, page, footerHeight, newPage, inHod);
                        }
                    }
                    else if (e.type == 'data-ftable') {
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await data_ftable_1(DataCenter, resLoader, newElement, last, page, footerHeight, newPage, inHod, unit);
                        }
                    }
                    else if (e.type == 'richtext' ||
                        e.type == 'data-richtext' ||
                        e.type == 'html') {
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await richtext_1(DataCenter, resLoader, newElement, last, page, footerHeight, unit, newPage);
                        }
                    }
                    else if (e.props.bind) { //如果有绑定，则进行数据填充
                        common_1(DataCenter, resLoader, newElement, newPage, inHod);
                    }
                    else {
                        newPage.push(newElement);
                    }
                    //容器需要递归生成里面的内容
                    if (has(SearchHodBindElements, e.type)) {
                        let { rows } = newElement.props;
                        for (let row of rows) {
                            for (let col of row.cols) {
                                if (col.elements) {
                                    generatePage(col.elements, page, 1);
                                }
                            }
                        }
                    }
                }
                return newPage;
            };
            /**
             * 根据数据的多少，一直填充元素数据，直到所有数据均填充完
             */
            do {
                index_5['@:{show.msg~rs}'](`正在计算第${pages.length + 1}页`);
                let newPage = await generatePage(pageElements, page);
                pages.push(newPage);
            } while (hasNextPage(pageElements, indexesCache));
        }
        index_5['@:{hide.msg~rs}']();
    },
    /**
     * 根据json对象渲染页面
     * @param stage 设计器产出的json对象
     */
    async '@:{render.page.by.json~rs}'(stage) {
        if (!stage)
            return;
        let { page, elements, unit } = stage;
        if (!page || !elements || !unit)
            return;
        index_3.show('正在准备数据...');
        /**
         * 这里进行四个边距进行相应的宽高处理，边距在设计器里未开放
         */
        let { marginLeft, marginRight, marginTop, marginBottom } = page;
        if (marginLeft != null &&
            marginRight != null) {
            page.width -= marginLeft + marginRight;
        }
        if (marginTop != null &&
            marginBottom != null) {
            page.height -= marginTop + marginBottom;
        }
        this.digest({
            enable: false,
            empty: true,
            page,
            unit,
            hasData: true,
            loading: true
        });
        /**
         * 根据偏移量和边距，计算新的偏移量
         */
        let ox = page.xOffset - (marginLeft != null ? marginLeft : 0);
        let oy = page.yOffset - (marginTop != null ? marginTop : 0);
        /**
         * 部分元素需要偏移量进行渲染，比如svg
         * 所以这里需要把计算后的偏移量进行设置，以供需要的元素使用
         */
        State.set({
            '@:{global#stage.unit~rs}': unit,
            '@:{global#stage.page.x.offset~rs}': ox,
            '@:{global#stage.page.y.offset~rs}': oy
        });
        let pages = []; //分页对象
        let apis = []; //所有绑定元素的接口地址，在渲染前，需要通过接口地址一次性把所有数据拿回来
        let pagers = []; //页码器对象，需要根据分页多少设置每个页码器的当前页码及总共页码
        let footerHeight = 0; //页脚高度
        let resourcesLoader = new resource_1(); //资源加载收集器
        this['@:{resources~rs}'] = resourcesLoader;
        /**
         * 收集所有元素的接口地址
         * @param elements 元素列表
         */
        let collectBindInfo = elements => {
            for (let e of elements) {
                if (!e.id) {
                    e.id = guid('e');
                }
                let { props, type } = e;
                let { bind } = props;
                //有可能不同的元素使用了相同的api,而数据只需要取一份即可
                if (bind &&
                    bind.url &&
                    apis.indexOf(bind.url) == -1) {
                    apis.push(bind.url);
                }
                //容器需要递归处理
                if (has(HodElements, type)) {
                    let { rows } = props;
                    for (let row of rows) {
                        for (let col of row.cols) {
                            if (col.elements) {
                                collectBindInfo(col.elements);
                            }
                        }
                    }
                }
                if (type == 'data-richtext') {
                    type = 'richtext';
                }
                resourcesLoader['@:{add~rs}']('@:{script~rs}', type);
                if (type == 'hod-footer') { //页脚
                    footerHeight = props.height;
                }
                else if (type == 'barcode' ||
                    type == 'batch-barcode' ||
                    type == 'qrcode' ||
                    type == 'batch-qrcode' ||
                    type == 'fx' ||
                    type == 'formula' ||
                    type.startsWith('chart_')) {
                    //根据类型判断是否需要资源收集
                    if (type.startsWith('chart_')) {
                        type = 'echarts';
                    }
                    else if (type == 'formula') {
                        type = 'mathjax';
                    }
                    else if (type.startsWith('batch-')) {
                        type = type.substring(6);
                    }
                    resourcesLoader['@:{add~rs}']('@:{provider~rs}', type);
                }
                else if (type == 'richtext') {
                    resourcesLoader['@:{add~rs}']('@:{provider~rs}', 'html2canvas');
                }
                else if (type == 'html') {
                    resourcesLoader['@:{add~rs}']('@:{provider~rs}', 'underscore');
                }
            }
        };
        collectBindInfo(elements);
        //先加载数据
        await fetchAllAPI(apis);
        index_3.show('正在准备资源...');
        await resourcesLoader['@:{load~rs}'](); //等资源加载
        index_3.show('正在计算分页...');
        //再进行分页处理
        await this['@:{fill.page~rs}'](elements, page, pages, pagers, ox, oy, footerHeight);
        //设置页码器的总页数
        for (let pager of pagers) {
            pager.props.ext._totalPage = pages.length;
        }
        index_3.show('等待页面生成...');
        await this.digest({
            stage,
            enable: false,
            images: null,
            pdf: null,
            sf: 'web',
            pages,
            loading: false
        });
        await lowTaskFinale(); //等待所有子组件任务完成
        await delay(500); //延迟等子组件
        await lowTaskFinale(); //等待所有任务完成
        index_3.show('正在检查图片状态...');
        await index_5['@:{double.check.images~rs}'](this.root); //检查页面上的图片是否就绪
        index_3.show('马上就好...');
        this.digest({
            enable: true,
            empty: false
        });
        await delay(200); //800+500 等待部分组件，如qrcode的异步渲染、图表的动画完成等，此1300ms是预估时间，因为无法知道这些第三方插件什么时候结束，通常是小于1000ms，这里用1300ms来确保无问题
        index_3.hide();
        // this['@:{to.pdf}']();
    },
    '@:{print~rs}<click>'() {
        window.print();
    },
    // '@:{lodop.setting}<click>'() {
    //     this.mxDialog('@:./lodop/setting', {
    //         width: 500,
    //         height: 220
    //     });
    // },
    /**
     * lodop打印
     */
    // async '@:{lodop.print}<click>'() {
    //     let m = mark(this, '@:{print.marker}');
    //     let page = this.get('page');
    //     let ld = await Lodop["@:{get.lodop}"]();
    //     if (m()) {
    //         if (ld) {//拿到lodop对象后，根据api进行页面及内容设置
    //             let styles = document.getElementsByTagName('style');
    //             let htmlStyles = [];
    //             for (let i = 0; i < styles.length; i++) {
    //                 let s = styles[i].innerHTML.trim();
    //                 if (s) {
    //                     htmlStyles.push(`<style>${s}</style>`);
    //                 }
    //             }
    //             let s = htmlStyles.join('');
    //             ld.SET_PRINT_PAGESIZE(0, page.width + 'px', page.height + 'px', 'report-designer');
    //             ld.SET_PRINT_MODE("POS_BASEON_PAPER", true);
    //             let pages = document.querySelectorAll('.@:index.less:page');
    //             for (let i = 0; i < pages.length; i++) {
    //                 let p = pages[i];
    //                 ld.NewPageA();
    //                 ld.ADD_PRINT_HTM(0, 0, page.width + 'px', page.height + 'px', `<style>${s}</style>` + p.outerHTML);
    //             }
    //             //这里仅使用了预览，如果打印则需要替换成PRINT方法
    //             ld.PREVIEW();
    //         } else {
    //             //提示用户未能检测到lodop服务
    //             this.mxDialog('@:./lodop/tip', {
    //                 width: 400,
    //                 height: 180
    //             });
    //         }
    //     }
    // },
    /**
     * 转换内容到图片
     */
    '@:{get.content.as.images~rs}'() {
        return new Promise(async (resolve) => {
            let images = this.get('images');
            let m = mark(this, '@:{image.client.convert~rs}');
            if (images) { //已经转换过了
                resolve(images);
            }
            else {
                if (this.get('sf') != 'web') {
                    //需要先显示成页面
                    await this.digest({
                        sf: 'web'
                    });
                    await lowTaskFinale();
                    this.set({
                        sf: 'image'
                    });
                }
                images = [];
                let options = {
                    useCORS: true,
                    scale: 2
                };
                let pages = this.root.querySelectorAll('.rd-_printer_index_less_-page'), pageIndex = 0;
                let total = pages.length;
                let thread = 4; //一次转换4个分页内容，太多会卡
                let work = async () => {
                    if (m()) {
                        window.scrollTo(0, 0);
                        let start = pageIndex + 1, end = Math.min(start + thread - 1, total);
                        index_5['@:{show.msg~rs}'](`转换进度：[${start}~${end}] / ${total}`);
                        let promises = [], count = 0;
                        if (pageIndex < total) {
                            while (count < thread) {
                                if (pageIndex + count >= total) {
                                    break;
                                }
                                promises.push(html2canvas(pages[pageIndex + count], options));
                                count++;
                            }
                            try {
                                let cs = await Promise.all(promises);
                                for (let c of cs) {
                                    //image format MUST jpeg!
                                    //generate pdf is fasteast!!
                                    images.push(c.toDataURL('image/jpeg', 1.0));
                                }
                            }
                            catch (_a) {
                                for (let p of promises) {
                                    images.push();
                                }
                            }
                            setTimeout(work, 0);
                            pageIndex += count;
                        }
                        else {
                            index_5['@:{hide.msg~rs}']();
                            this.set({
                                images
                            });
                            resolve(images);
                        }
                    }
                };
                work();
            }
        });
    },
    /**
     * 转图片
     */
    async '@:{to.image~rs}'() {
        let images = this.get('images');
        if (!images) {
            let m = mark(this, '@:{to.image.transform.mark~rs}');
            index_3.show('正在转换为图片...');
            try {
                await html2canvas_1();
                if (m()) {
                    images = await this['@:{get.content.as.images~rs}']();
                }
                if (m()) {
                    index_3.show('转换图片成功～', 2e3);
                    this.digest({
                        enable: true,
                        images
                    });
                }
            }
            catch (ex) {
                console.log(ex);
                if (m()) {
                    index_3.show(ex.message || ex, 5e3);
                }
            }
        }
        else {
            this.digest({
                enable: true,
            });
        }
    },
    /**
     * 使用rd服务转图片
     */
    '@:{to.rd.image~rs}'() {
        let images = this.get('rdImages');
        if (!images) {
            let m = mark(this, '@:{to.rd.image.transform.mark~rs}');
            index_3.show(`正在转换为图片...`);
            let page = this.get('page');
            let data = {
                unit: this.get('unit'),
                width: page.width,
                height: page.height,
                location: location.href,
                selector: 'div.rd-_printer_index_less_-page',
                stage: JSON.stringify(this.get('stage'))
            };
            let s = new service_1();
            s.save({
                name: '@:{post.by.url~rs}',
                url: config('rds') + 'image',
                '@:{body~rs}': JSON.stringify(data)
            }, (ex, bag) => {
                if (m()) {
                    if (ex) {
                        index_3.hide();
                        this.alert(index_6["@:{format.ex.message~rs}"](ex));
                        this.digest({
                            sf: 'rdImage',
                        });
                        //Toast.show(ex.msg, 5e3);
                    }
                    else {
                        index_3.show('转换图片成功～', 2e3);
                        this.digest({
                            sf: 'rdImage',
                            enable: true,
                            rdImages: bag.get('data', [])
                        });
                    }
                }
            });
        }
        else {
            this.digest({
                enable: true
            });
        }
    },
    /**
     * 使用rd服务转pdf
     */
    '@:{to.rd.pdf~rs}'() {
        let pdf = this.get('rdPdf');
        if (!pdf) {
            let m = mark(this, '@:{to.rd.pdf.transform.mark~rs}');
            //let pages = this.get('pages');
            index_3.show(`正在转换为pdf...`);
            let page = this.get('page');
            let data = {
                unit: this.get('unit'),
                width: page.width,
                height: page.height,
                location: location.href,
                //selector: 'div.@:./index.less:page',
                stage: JSON.stringify(this.get('stage'))
            };
            let s = new service_1();
            s.save({
                name: '@:{post.by.url~rs}',
                url: config('rds') + 'pdf',
                '@:{body~rs}': JSON.stringify(data)
            }, (ex, bag) => {
                if (m()) {
                    if (ex) {
                        index_3.hide();
                        this.alert(index_6["@:{format.ex.message~rs}"](ex));
                        this.digest({
                            sf: 'rdPdf',
                        });
                    }
                    else {
                        index_3.show('转换pdf成功～', 2e3);
                        let data = bag.get('data', []);
                        let bstr = atob(data[0]);
                        let n = bstr.length;
                        let u8arr = new Uint8Array(n);
                        while (n--) {
                            u8arr[n] = bstr.charCodeAt(n);
                        }
                        let blob = new Blob([u8arr], {
                            type: 'application/pdf'
                        });
                        this.digest({
                            sf: 'rdPdf',
                            enable: false,
                            rdPdf: URL.createObjectURL(blob)
                        });
                    }
                }
            });
        }
        else {
            this.digest({
                enable: false
            });
        }
    },
    /**
     * 转pdf
     */
    async '@:{to.pdf~rs}'() {
        let pdf = this.get('pdf');
        let page = this.get('page');
        if (!pdf &&
            page) {
            let m = mark(this, '@:{to.pdf.transform.mark~rs}');
            try {
                let images = this.get('rdImages');
                if (!images) {
                    index_3.show('先转换为图片...');
                    await html2canvas_1();
                    images = await this['@:{get.content.as.images~rs}']();
                }
                index_3.show('正在加载PDF插件...');
                await jspdf_1();
                index_3.show('正在生成PDF...');
                let width = const_1['@:{const#to.px~rs}'](page.width), height = const_1['@:{const#to.px~rs}'](page.height);
                let doc = new jspdf.jsPDF({
                    unit: 'px',
                    hotfixes: ['px_scaling'],
                    format: [width, width > height ? width + 1 : height]
                });
                this['@:{js.pdf.document~rs}'] = doc;
                doc.setDocumentProperties({
                    //rd#need-register-code
                    //需删除<未注册版>字样
                    title: index_4('@:{lang#site.name~rs}'),
                    subject: '打印页面',
                    author: 'kooboy_li@163.com',
                    keywords: '打印、可视化、编辑器',
                    creator: location.host
                });
                let total = images.length;
                let toPdf = index => {
                    index_5['@:{show.msg~rs}'](`生成进度：${index + 1} / ${total}`);
                    if (index) {
                        doc.addPage();
                    }
                    let img = images[index];
                    doc.addImage(img, 'JPEG', 0, 0, width, height, undefined, 'FAST');
                };
                for (let i = 0; i < total; i++) {
                    task(toPdf, [i]);
                }
                await lowTaskFinale();
                index_5['@:{hide.msg~rs}']();
                if (m()) {
                    index_3.show('转换PDF成功～', 2e3);
                    this.digest({
                        sf: 'pdf',
                        enable: false,
                        pdf: doc.output('bloburi')
                    });
                }
            }
            catch (ex) {
                console.log(ex);
                if (m()) {
                    index_3.show(ex.message || ex, 5e3);
                }
            }
        }
        else {
            this.digest({
                enable: false
            });
        }
    },
    /**
     * 用户在转换格式间切换时，前一个任务有可能未完成，需要标识为已取消
     */
    '@:{canceled.prev.task~rs}'() {
        index_3.hide();
        mark(this, '@:{image.client.convert~rs}');
        mark(this, '@:{to.image.transform.mark~rs}');
        mark(this, '@:{to.rd.image.transform.mark~rs}');
        mark(this, '@:{to.pdf.transform.mark~rs}');
        mark(this, '@:{to.rd.pdf.transform.mark~rs}');
        index_5['@:{hide.msg~rs}']();
    },
    /**
     * 切换转换格式
     * @param e 事件对象
     */
    '@:{change.format~rs}<change>'(e) {
        this['@:{canceled.prev.task~rs}']();
        this.digest({
            enable: false
        });
        this.set({
            sf: e.value
        });
        if (e.value == 'image') {
            this['@:{to.image~rs}']();
        }
        else if (e.value == 'pdf') {
            this['@:{to.pdf~rs}']();
        }
        else if (e.value == 'rdImage') {
            this['@:{to.rd.image~rs}']();
        }
        else if (e.value == 'rdPdf') {
            this['@:{to.rd.pdf~rs}']();
        }
        else {
            this.digest({
                enable: true
            });
        }
    },
    '@:{silent.print~rs}<click>'() {
        window.open('//github.com/xinglie/report-designer/issues/49');
    },
    /**
     * rd服务设置
     */
    '@:{rds.setting~rs}<click>'() {
        this.mxDialog("printer/rds/setting", {
            width: 500
        });
    },
    /**
     * rd服务的打印
     */
    '@:{rds.print~rs}<click>'() {
        let m = mark(this, '@:{rd.printer.mask~rs}');
        index_3.show(`正在调用RDS打印服务...`);
        let page = this.get('page');
        let printer = index_6["@:{get.config~rs}"]();
        let data = {
            width: page.width,
            height: page.height,
            location: location.href,
            selector: 'div.rd-_printer_index_less_-page',
            printer,
            unit: this.get('unit'),
            stage: JSON.stringify(this.get('stage'))
        };
        let s = new service_1();
        s.save({
            name: '@:{post.by.url~rs}',
            url: config('rds') + 'print',
            '@:{body~rs}': JSON.stringify(data)
        }, (ex, bag) => {
            if (m()) {
                if (ex) {
                    index_3.hide();
                    this.alert(index_6["@:{format.ex.message~rs}"](ex));
                }
                else {
                    index_3.show('打印成功～', 2e3);
                }
            }
        });
    },
    '@:{open.with.id~rs}<click>'() {
        let { params } = parseUrl(location.href);
        console.log('参数', params, location.href);
        window.open(DEBUG ? `./print-debug.html?id=${params.id}` : `./print.html?id=${params.id}`);
    },
    async '@:{export.to.native.file~rs}<click>'() {
        let selectFormat = this.get('sf');
        let exportMark = mark(this, '@:{export.async~rs}');
        try {
            await fs_1['@:{prepare~rs}']();
        }
        catch (ex) {
            return this.alert(ex.message);
        }
        let fileName, fileContent, accept;
        index_3.show(index_4('@:{lang#export.file.processing~rs}'));
        if (selectFormat == 'web') {
            let htmlStyles = [], htmlPages = [];
            let domStyles = document.getElementsByTagName('style');
            for (let i = 0; i < domStyles.length; i++) {
                let s = domStyles[i].innerHTML.trim();
                if (s) {
                    htmlStyles.push(`<style>${s}</style>`);
                }
            }
            let domPages = document.querySelectorAll('.rd-_printer_index_less_-page');
            for (let i = 0; i < domPages.length; i++) {
                htmlPages.push(cleanHTML(domPages[i].outerHTML));
            }
            accept = ['.html'];
            fileName = `${index_4('@:{lang#site.name~rs}')}-web.html`;
            fileContent = `<!DOCTYPE html><html><head><meta charset="utf-8" /><title>${index_4('@:{lang#site.name~rs}')}-web</title>${htmlStyles.join('')}</head><body>${htmlPages.join('')}</body></html>`;
            try {
                if (exportMark()) {
                    await fs_1['@:{save.file~rs}'](fileName, fileContent, accept);
                    index_3.show(index_4('@:{lang#export.success~rs}'), 3e3);
                }
            }
            catch (ex) {
                index_3.hide();
                if (exportMark() && ex.name != 'AbortError') {
                    this.alert(ex.message);
                }
            }
        }
        else if (selectFormat == 'pdf' &&
            this['@:{js.pdf.document~rs}']) {
            this['@:{js.pdf.document~rs}'].save(`${index_4('@:{lang#site.name~rs}')}.pdf`);
            index_3.show(index_4('@:{lang#export.success~rs}'), 3e3);
        }
        else if (selectFormat == 'rdPdf' &&
            this.get('rdPdf')) {
            let link = document.createElement('a');
            link.download = `${index_4('@:{lang#site.name~rs}')}.pdf`;
            link.href = this.get('rdPdf');
            link.click();
        }
        else {
            //https://www.tutorialspoint.com/Maximum-size-of-a-canvas-element-in-HTML
            //https://www.google.com/search?q=canvas+max+height&biw=1440&bih=757&ei=CfgFYe2aJouxmAWD4KLoDg&oq=canvas+max+height&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB4yBggAEBYQHjoHCAAQRxCwAzoECAAQQzoFCAAQkQI6CAgAEIAEELEDOg4ILhCABBCxAxDHARCjAjoICAAQsQMQgwE6CwgAEIAEELEDEIMBOgYIABAKEEM6BAguEEM6BwgAELEDEEM6CAguELEDEIMBOggILhCABBCxAzoFCC4QgAQ6CAgAEIAEEMkDOggIABAWEAoQHkoECEEYAFDUe1jQvgFghc4BaAFwAngAgAHnA4gBjDiSAQYzLTEzLjaYAQCgAQHIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwitw4Og1Y7yAhWLGKYKHQOwCO0Q4dUDCA4&uact=5
            //https://www.npmjs.com/package/canvas-size
            index_3.show('暂不支持当前类型的文件导出', 3e3);
            // return;
            // let domPages = document.querySelectorAll('.@:./index.less:page');
            // let images = [],
            //     width = 0,
            //     height = 0;
            // for (let i = 0; i < domPages.length; i++) {
            //     let p = domPages[i];
            //     let innerImages = p.querySelectorAll('img');
            //     for (let j = 0; j < innerImages.length; j++) {
            //         let img = innerImages[j];
            //         width = img.width;
            //         height += img.height;
            //         images.push(img);
            //     }
            // }
            // let offsetY = 0;
            // let canvas = document.createElement('canvas');
            // canvas.width = width;
            // canvas.height = height;
            // let ctx = canvas.getContext('2d');
            // for (let i of images) {
            //     let height = i.height;
            //     ctx.drawImage(i, 0, offsetY, width, height);
            //     offsetY += height;
            // }
            // // document.body.appendChild(canvas);
            // // return;
            // try {
            //     let imgData = canvas.toDataURL('image/jpeg', 1.0);
            //     let link = document.createElement('a');
            //     let arr = imgData.split(','),
            //         mime = arr[0].match(/:(.*?);/)[1],
            //         bstr = atob(arr[1]),
            //         n = bstr.length,
            //         u8arr = new Uint8Array(n);
            //     while (n--) {
            //         u8arr[n] = bstr.charCodeAt(n);
            //     }
            //     let blob = new Blob([u8arr], { type: mime });
            //     let objurl = URL.createObjectURL(blob);
            //     link.download = `${I18n('@:{lang#site.name}')}-image.jpeg`;
            //     link.href = objurl;
            //     link.click();
            //     URL.revokeObjectURL(objurl);
            //     Toast.show(I18n('@:{lang#export.success}'), 3e3);
            // } catch (ex) {
            //     if (exportMark()) {
            //         Toast.hide();
            //         this.alert(ex.message);
            //     }
            // }
        }
    },
    /**
     * 当复制设计器中的内容到当前页面进行粘贴时
     * @param e 剪切板事件对象
     */
    '$doc<paste>'(e) {
        let data = e.clipboardData.getData('text/plain');
        this['@:{render.page.by.json~rs}'](index_5['@:{try.parse.json~rs}'](data));
    },
    /**
     * 通过window派发render事件时，为rds提供的接口
     * @param e 渲染事件对象
     */
    '$win<render>'(e) {
        this['@:{render.page.by.json~rs}'](index_5['@:{try.parse.json~rs}'](e.json));
    },
    /**
     * 通过postMessage进行数据通讯
     * @param e 消息事件对象
     */
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.source != window) { //防止自己向自己postMessage
            e.source.postMessage('@:{printer.message.received~rs}', origin);
        }
        if (e.origin == origin &&
            e.data &&
            e.data != '@:{printer.message.received~rs}') {
            this['@:{render.page.by.json~rs}'](index_5['@:{try.parse.json~rs}'](e.data));
        }
    }
}).merge(index_1);

});