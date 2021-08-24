/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("78/index",["51","../50/53","../50/5k","../58/5n/index","../58/5b/index","../58/5f/index","../5c/index","../5g/fs","../5g/html2canvas","../5g/jspdf","./79/index","./79/resource","./7a/index","./7b/batch","./7b/common","./7b/data-celltable","./7b/data-coltable","./7b/data-dtable","./7b/data-ftable","./7b/data-repeater","./7b/pager","./7b/richtext","58/6k/index"],(require,exports,module)=>{
require("58/6k/index");
let $quick_hC_static_text;
let $quick_hD_static_text;
let $quick_iH_1_static_node;
let $quick_iH_2_static_node;
let $quick_hE_static_text;
let $quick_hF_static_text;
let $quick_iH_4_static_node;
let $quick_iH_5_static_node;
let $quick_iH_6_static_node;
let $quick_iH_0_static_attr={'class': 'rd-g9 rd-ha rd-mZ',};
let $quick_iH_3_static_attr={'class': 'rd-g9 rd-h_ rd-ha rd-m3',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../50/53");
let service_1 = require("../50/5k");
let index_1 = require("../58/5n/index");
let index_2 = require("../58/5b/index");
let index_3 = require("../58/5f/index");
let index_4 = require("../5c/index");
let fs_1 = require("../5g/fs");
let html2canvas_1 = require("../5g/html2canvas");
let jspdf_1 = require("../5g/jspdf");
let index_5 = require("./79/index");
let resource_1 = require("./79/resource");
/**
 * Lodop打印对象可以从 root/trash/lodop中拿出来放到./目录下即可
 */
//import Lodop from './7c/index';
let index_6 = require("./7a/index");
let batch_1 = require("./7b/batch");
let common_1 = require("./7b/common");
let data_celltable_1 = require("./7b/data-celltable");
let data_coltable_1 = require("./7b/data-coltable");
let data_dtable_1 = require("./7b/data-dtable");
let data_ftable_1 = require("./7b/data-ftable");
let data_repeater_1 = require("./7b/data-repeater");
let pager_1 = require("./7b/pager");
let richtext_1 = require("./7b/richtext");
let { State, View, lowTaskFinale, type, has, applyStyle, parseUrl, config, mark, guid, unboot, delay, task, } = magix_1;
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
            index_2['_gC'](task);
            unboot();
        }
    };
    index_2['_gD'](2000, task);
}
let { random } = Math;
applyStyle("rd-gT",".rd-mR{page-break-after:auto;page-break-inside:avoid}.rd-mS{width:120px}.rd-mT{width:350px}.rd-mU{margin-top:20px}.rd-mV{height:calc(100vh - 45px)}.rd-mW{background-color:#fff;bottom:0;box-shadow:-1px -1px 4px #0000002b;padding:4px;position:fixed}.rd-mX{background:linear-gradient(#ddd4,#ddd 30%,#ddd 70%,#ddd4);height:30px;margin:4px 20px}.rd-mY{background-color:#fff;border:1px solid red;color:red;display:none;left:5px;padding:4px;top:5px;z-index:10000}@page{margin:0}@media screen{.rd-mZ{background-color:#fff;box-shadow:0 0 6px 0 rgba(0,0,0,.3);height:34px;justify-content:flex-end;margin-bottom:10px;padding-right:50px;position:sticky;top:0;z-index:2}.rd-m0{height:120px;line-height:120px}.rd-m1{content-visibility:auto;box-shadow:0 0 6px 0 rgba(0,0,0,.3);contain:paint}.rd-m2{margin:20px auto}}@media print{.rd-mZ{display:none}body{min-width:auto}.rd-m2{margin:0}.rd-m1{box-shadow:none}.rd-mY,.rd-m3{display:block}}");
let doc = document;
doc.documentElement.classList.add('rd-g4');
doc.body.classList.add('rd-h4');
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
    'data-ftable': 1,
};
/**
 * 格式转换列表
 */
let FormatList = [
    {
        text: '网页',
        value: 'web',
    },
    {
        text: '图片',
        value: 'image',
    },
    {
        text: 'pdf',
        value: 'pdf',
    },
    {
        text: '图片-RDS服务',
        value: 'rdImage',
    },
    {
        text: 'pdf-RDS服务',
        value: 'rdPdf',
    },
];
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
let fetchOneAPI = api => {
    console.log('获取数据接口', api, parseUrl(api));
    // 当前接口的参数, sql 的 id
    let { params: apiParams } = parseUrl(api);
    let extraParams = '';
    // 当前页面 url 的参数
    let { params: { params, order, scene }, } = parseUrl(window.location.href);
    if (apiParams && apiParams.id && params) {
        console.log('当前参数', apiParams);
        extraParams = `&params=${encodeURIComponent(params)}`;
    }
    else if (apiParams && apiParams.id && order) {
        let orderParams = JSON.stringify({ $ORDER_CODE: order });
        console.log('订单参数', orderParams);
        extraParams = `&params=${encodeURIComponent(orderParams)}`;
    }
    // 从 api 中获取 id, 把参数传给对应的 id;
    return new Promise(resolve => {
        let dest = DataCenter[api];
        if (!dest) {
            dest = DataCenter[api] = {};
        }
        if (dest['_pl']) {
            resolve();
        }
        else if (dest['_pm']) {
            dest['_pm'].push(resolve);
        }
        else {
            dest['_pm'] = [resolve];
            let s = new service_1();
            s.all({
                name: '_ib',
                url: api + extraParams,
            }, (err, bag) => {
                let list = bag.get('data', []);
                dest['_h8'] = list;
                dest['_pl'] = 1;
                dest['_h7'] = err === null || err === void 0 ? void 0 : err.message;
                for (let resolve of dest['_pm']) {
                    resolve();
                }
                delete dest['_pm'];
            });
        }
    });
};
/**
 * 请求所有的api数据回来备用
 * @param apis api数组对象
 */
let fetchAllAPI = apis => {
    let promises = [];
    for (let api of apis) {
        promises.push(fetchOneAPI(api));
    }
    return Promise.all(promises);
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
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
	rdImages,}=$dataFromView,
$vnode_2,
$$_mx5$_view,
$vnode_1,
$vnode_3,
$$_class,
$$_style;
$vnode_1=[];
if(inner){
$vnode_2=[$quick_hC_static_text||($quick_hC_static_text=$createVNode(0,'独立使用打印页面'))];$vnode_1.push($createVNode('button',{'class': 'rd-gI rd-gS rd-gk rd-hw','mx5-click': $viewId+'_pK()',},$vnode_2));
}$vnode_2=[$quick_hD_static_text||($quick_hD_static_text=$createVNode(0,'第三方静默打印'))];$vnode_1.push($createVNode('button',{'class': 'rd-gI rd-gS rd-gk rd-hw','mx5-click': $viewId+'_pF()',},$vnode_2));
if($quick_iH_1_static_node){
$vnode_1.push($quick_iH_1_static_node);
}else{
$vnode_1.push($quick_iH_1_static_node=$createVNode('div',{'_': 'eD','class': 'rd-hp rd-mX',}));
}

if($quick_iH_2_static_node){
$vnode_1.push($quick_iH_2_static_node);
}else{
$vnode_2=[$createVNode(0,'转换内容为：')];$vnode_1.push($quick_iH_2_static_node=$createVNode('div',{'_': 'eE',},$vnode_2));
}
;$$_mx5$_view='58/6k/index?';if(($temp_var=empty)){;$$_mx5$_view+='disabled='+($encodeUrl($temp_var));};$$_mx5$_view+='&list='+$keyOf($refData,format,'eD')+'&textKey=text&valueKey=value&selected='+($encodeUrl(sf));$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'format','class': 'rd-gI rd-mS','mx5-change': $viewId+'_pE()','mx5-view': $$_mx5$_view,}));$vnode_2=[$quick_hE_static_text||($quick_hE_static_text=$createVNode(0,'导出为本地文件'))];$vnode_1.push($createVNode('button',{'disabled': (sf!='pdf' && sf!='rdPdf' &&!enable),'class': 'rd-gS rd-gk rd-gm rd-hw','mx5-click': $viewId+'_pM()',},$vnode_2));
if($quick_iH_1_static_node){
$vnode_1.push($quick_iH_1_static_node);
}else{
$vnode_1.push($quick_iH_1_static_node=$createVNode('div',{'_': 'eD','class': 'rd-hp rd-mX',}));
}

if($quick_iH_1_static_node){
$vnode_1.push($quick_iH_1_static_node);
}else{
$vnode_1.push($quick_iH_1_static_node=$createVNode('div',{'_': 'eD','class': 'rd-hp rd-mX',}));
}
$vnode_2=[$quick_hF_static_text||($quick_hF_static_text=$createVNode(0,'浏览器打印'))];$vnode_1.push($createVNode('button',{'disabled': (!enable),'class': 'rd-gS rd-gk rd-gm rd-hw','mx5-click': $viewId+'_g6()',},$vnode_2));$vnode_0=[$createVNode('div',$quick_iH_0_static_attr,$vnode_1)];$vnode_1=[];
if(hasData){

if(loading){

if($quick_iH_4_static_node){
$vnode_2=[$quick_iH_4_static_node];
}else{
$vnode_3=[$createVNode(0,'正在准备基础页面...')];$vnode_2=[$quick_iH_4_static_node=$createVNode('div',{'_': 'eF','class': 'rd-h8 rd-m0',},$vnode_3)];
}
$vnode_1.push($createVNode('div',{'class': 'rd-g9 rd-gW rd-h0 rd-hs rd-m1 rd-m2','style': 'width:'+(page.width)+(unit)+';height:'+(page.height)+(unit)+';background:'+(page.background),},$vnode_2));
}else{

if(sf=='pdf'){
$vnode_1.push($createVNode('embed',{'src': (pdf),'class': 'rd-gN rd-mV','type': 'application/pdf',},1));
}else if(sf=='rdPdf'){
$vnode_1.push($createVNode('embed',{'src': (rdPdf),'class': 'rd-gN rd-mV','type': 'application/pdf',},1));
}else{

for(let $q_c_dkpmtnjjg=pages.length,$q_lc_eossilalg=$q_c_dkpmtnjjg-1,pageIndex=0;pageIndex<$q_c_dkpmtnjjg;pageIndex+=1){
let item=pages[pageIndex];let last=pageIndex===$q_lc_eossilalg;
$vnode_2=[];
if(sf=='web'){

for(let $q_c_ekaeuscuhl=item.length,$q_key_yvfyrsn=0;$q_key_yvfyrsn<$q_c_ekaeuscuhl;$q_key_yvfyrsn+=1){
let e=item[$q_key_yvfyrsn];
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'pages,unit','mx5-view': '5m/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'eE.'+(pageIndex)+'.eF.'+($q_key_yvfyrsn)+'.eG')+'&unit='+$keyOf($refData,unit,'eH'),}));
}
}else if(sf=='image' && images){
$vnode_2.push($createVNode('img',{'class': 'rd-gB rd-gP','src': (images[pageIndex]),},1));
}else if(sf=='rdImage' && rdImages){
$vnode_2.push($createVNode('img',{'class': 'rd-gB rd-gP','src': (rdImages[pageIndex]),},1));
};$$_class='rd-gd rd-gW rd-m1 rd-m2 rd-h0';if(!last){;$$_class+=' rd-mR';};$$_style='width:'+(page.width)+(unit)+';height:'+(page.height)+(unit)+';background:'+(page.background)+';';if(!page.preformat&&page.backgroundImage){;$$_style+='background-image:url('+(page.backgroundImage)+');background-repeat:'+(page.backgroundRepeat=='full'?'no-repeat':page.backgroundRepeat)+';background-size:';if(page.backgroundRepeat=='full'){;$$_style+='100% 100%';}else{;$$_style+=''+(page.backgroundWidth)+(unit)+' '+(page.backgroundHeight)+(unit)+';background-position:'+(page.backgroundXOffset)+(unit)+' '+(page.backgroundYOffset)+(unit);};};$vnode_1.push($createVNode('div',{'class': $$_class,'style': $$_style,},$vnode_2));
}
}
}
}else{

if($quick_iH_5_static_node){
$vnode_1.push($quick_iH_5_static_node);
}else{
$vnode_2=[$createVNode(0,'请传递打印 id 或在设计器中打开该页面')];$vnode_1.push($quick_iH_5_static_node=$createVNode('div',{'_': 'eG','class': 'rd-h8 rd-m0',},$vnode_2));
}

}$vnode_0.push($createVNode('div',$quick_iH_3_static_attr,$vnode_1));
if($quick_iH_6_static_node){
$vnode_0.push($quick_iH_6_static_node);
}else{
$vnode_0.push($quick_iH_6_static_node=$createVNode('div',{'_': 'eH','id': '_rd_tip','class': 'rd-g0 rd-ia rd-mW',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    async render() {
        /**
         * 先渲染界面
         */
        await this.digest({
            inner: top != self,
            format: FormatList,
            hasData: false,
            empty: true,
            sf: 'web',
        });
        /*
                以下根据地址栏有无id来决定是否发送请求来获取某个id的具体内容
            */
        let { params } = parseUrl(location.href);
        // 单独打印
        let contentUrl = config('getContentUrl');
        // 批量打印
        let mutiContentUrl = config('getMutiContentUrl');
        console.log('______', params, contentUrl, mutiContentUrl);
        // 分两种,单个模板打印和批量打印
        if (params && params.id) {
            this['_pn'](false, params);
        }
        else if (params && params.ids) {
            this['_pn'](true, params);
        }
        else if (params && params.order) {
            if (!params.scene) {
                index_3.show('没有找到场景参数');
                return Promise.reject('没有找到场景参数');
            }
            // 订单模式
            this['_pn'](false, params);
        }
    },
    /**
     * 获取模板
     * @param {boolean} isMuti 是否批量打印
     * @param {any} params 打印参数
     */
    '_pn'(isMuti, params) {
        let s = new service_1();
        let url = isMuti ? '_ic' : '_h4';
        s.all({
            name: url,
            '_hR': params,
        }, (ex, bag) => {
            console.log('请求回来的初始数据', ex, bag);
            if (!ex) {
                //如果请求未有异常，则根据请求回来的数据进行渲染界面
                let stages;
                if (isMuti) {
                    stages = bag.get('data').map(({ templateJson }) => templateJson);
                }
                else {
                    stages = [bag.get('data.templateJson')];
                }
                console.log('打印模板', stages);
                this['_po'](stages);
            }
            else {
                index_3.show(ex.message);
            }
        });
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
    async '_pq'(elements, page, pages, pagers, ox, oy, footerHeight) {
        let logicCurrentPage = 0;
        let resLoader = this['_pp'];
        let unit = this.get('unit');
        for (let e of elements) {
            if (e.type == 'data-dtable' || e.type == 'data-ftable') {
                index_5['_pg'](e, DataCenter);
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
            let pageElements = index_5['_pd'](page, logicCurrentPage, elements, oy);
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
                    let newElement = inHod
                        ? e
                        : {
                            type: e.type,
                            id: e.id,
                            props: const_1['g1'](e.props),
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
                    if (e.type == 'pager') {
                        //页码器
                        pager_1(newElement, newPage, inHod, pagers, pages.length);
                    }
                    else if (e.type == 'data-coltable') {
                        //列表格
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            //如果未到最后一页，则继续填充
                            indexesCache[i] = data_coltable_1(DataCenter, newElement, last, page, footerHeight, newPage, inHod);
                        }
                    }
                    else if (e.type == 'data-celltable') {
                        //单元格
                        if (inHod) {
                            //在容器的情况下，始终填充第1条数据，这里可以根据需求进行调整
                            data_celltable_1(DataCenter, resLoader, newElement, 0, newPage, inHod);
                        }
                        else {
                            let last = indexesCache[i] || 0;
                            if (last != -1) {
                                indexesCache[i] = await data_celltable_1(DataCenter, resLoader, newElement, last, newPage, inHod);
                            }
                        }
                    }
                    else if (e.type == 'data-dtable' || e.type == 'data-rdtable') {
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
                    else if (e.type == 'richtext' || e.type == 'data-richtext' || e.type == 'html') {
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await richtext_1(DataCenter, resLoader, newElement, last, page, footerHeight, unit, newPage);
                        }
                    }
                    else if (e.props.bind) {
                        //如果有绑定，则进行数据填充
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
                index_5['_pa'](`正在计算第${pages.length + 1}页`);
                let newPage = await generatePage(pageElements, page);
                pages.push(newPage);
            } while (hasNextPage(pageElements, indexesCache));
            /**
             * 这里结束之后,再来一轮, 是不是就可以解决批量了
             */
        }
        index_5['_pb']();
    },
    /**
     * 根据json对象渲染页面
     * @param stage 设计器产出的json对象
     */
    async '_po'(stages) {
        if (!stages) {
            return;
        }
        console.log('数据', stages);
        // NOTICE: 为了兼容,有点丑陋
        let stage, others = [];
        if (Array.isArray(stages)) {
            [stage, ...others] = stages;
        }
        else {
            stage = stages;
        }
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
        if (marginLeft != null && marginRight != null) {
            page.width -= marginLeft + marginRight;
        }
        if (marginTop != null && marginBottom != null) {
            page.height -= marginTop + marginBottom;
        }
        this.digest({
            enable: false,
            empty: true,
            page,
            unit,
            hasData: true,
            loading: true,
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
            'gf': unit,
            'gD': ox,
            'gE': oy,
        });
        let pages = []; //分页对象
        let apis = []; //所有绑定元素的接口地址，在渲染前，需要通过接口地址一次性把所有数据拿回来
        let pagers = []; //页码器对象，需要根据分页多少设置每个页码器的当前页码及总共页码
        let footerHeight = 0; //页脚高度
        let resourcesLoader = new resource_1(); //资源加载收集器
        this['_pp'] = resourcesLoader;
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
                if (bind && bind.url && apis.indexOf(bind.url) == -1) {
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
                resourcesLoader['_lU']('_pk', type);
                if (type == 'hod-footer') {
                    //页脚
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
                    resourcesLoader['_lU']('_pj', type);
                }
                else if (type == 'richtext') {
                    resourcesLoader['_lU']('_pj', 'html2canvas');
                }
                else if (type == 'html') {
                    resourcesLoader['_lU']('_pj', 'underscore');
                }
            }
        };
        collectBindInfo(elements);
        // 所有的都遍历一次
        others.forEach(stage => {
            collectBindInfo(stage.elements);
        });
        //先加载数据
        await fetchAllAPI(apis);
        index_3.show('正在准备资源...');
        await resourcesLoader['_g5'](); //等资源加载
        index_3.show('正在计算分页...');
        //再进行分页处理
        await this['_pq'](elements, page, pages, pagers, ox, oy, footerHeight);
        // NOTICE: 理论上从这里再渲染一套就行了, 试试
        for (let i = 0; i < others.length; i++) {
            let otherStage = others[i];
            await this['_pq'](otherStage.elements, otherStage.page, pages, pagers, ox, oy, footerHeight);
        }
        //设置页码器的总页数
        for (let pager of pagers) {
            pager.props.ext._totalPage = pages.length;
        }
        // console.log('页面', pages.push(pages[0]), pages);
        index_3.show('等待页面生成...');
        await this.digest({
            stage,
            enable: false,
            images: null,
            pdf: null,
            sf: 'web',
            pages,
            loading: false,
        });
        await lowTaskFinale(); //等待所有子组件任务完成
        await delay(500); //延迟等子组件
        await lowTaskFinale(); //等待所有任务完成
        index_3.show('正在检查图片状态...');
        await index_5['_pe'](this.root); //检查页面上的图片是否就绪
        index_3.show('马上就好...');
        this.digest({
            enable: true,
            empty: false,
        });
        await delay(200); //800+500 等待部分组件，如qrcode的异步渲染、图表的动画完成等，此1300ms是预估时间，因为无法知道这些第三方插件什么时候结束，通常是小于1000ms，这里用1300ms来确保无问题
        index_3.hide();
        // this['@:{to.pdf}']();
    },
    '_g6<click>'() {
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
    '_ps'() {
        return new Promise(async (resolve) => {
            let images = this.get('images');
            let m = mark(this, '_pr');
            if (images) {
                //已经转换过了
                resolve(images);
            }
            else {
                if (this.get('sf') != 'web') {
                    //需要先显示成页面
                    await this.digest({
                        sf: 'web',
                    });
                    await lowTaskFinale();
                    this.set({
                        sf: 'image',
                    });
                }
                images = [];
                let options = {
                    useCORS: true,
                    scale: 2,
                };
                let pages = this.root.querySelectorAll('.rd-m1'), pageIndex = 0;
                let total = pages.length;
                let thread = 4; //一次转换4个分页内容，太多会卡
                let work = async () => {
                    if (m()) {
                        window.scrollTo(0, 0);
                        let start = pageIndex + 1, end = Math.min(start + thread - 1, total);
                        index_5['_pa'](`转换进度：[${start}~${end}] / ${total}`);
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
                            index_5['_pb']();
                            this.set({
                                images,
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
    async '_pu'() {
        let images = this.get('images');
        if (!images) {
            let m = mark(this, '_pt');
            index_3.show('正在转换为图片...');
            try {
                await html2canvas_1();
                if (m()) {
                    images = await this['_ps']();
                }
                if (m()) {
                    index_3.show('转换图片成功～', 2e3);
                    this.digest({
                        enable: true,
                        images,
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
    '_px'() {
        let images = this.get('rdImages');
        if (!images) {
            let m = mark(this, '_pv');
            index_3.show(`正在转换为图片...`);
            let page = this.get('page');
            let data = {
                unit: this.get('unit'),
                width: page.width,
                height: page.height,
                location: location.href,
                selector: 'div.rd-m1',
                stage: JSON.stringify(this.get('stage')),
            };
            let s = new service_1();
            s.save({
                name: '_id',
                url: config('rds') + 'image',
                '_hQ': JSON.stringify(data),
            }, (ex, bag) => {
                if (m()) {
                    if (ex) {
                        index_3.hide();
                        this.alert(index_6['_pw'](ex));
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
                            rdImages: bag.get('data', []),
                        });
                    }
                }
            });
        }
        else {
            this.digest({
                enable: true,
            });
        }
    },
    /**
     * 使用rd服务转pdf
     */
    '_pz'() {
        let pdf = this.get('rdPdf');
        if (!pdf) {
            let m = mark(this, '_py');
            //let pages = this.get('pages');
            index_3.show(`正在转换为pdf...`);
            let page = this.get('page');
            let data = {
                unit: this.get('unit'),
                width: page.width,
                height: page.height,
                location: location.href,
                //selector: 'div.@:./index.less:page',
                stage: JSON.stringify(this.get('stage')),
            };
            let s = new service_1();
            s.save({
                name: '_id',
                url: config('rds') + 'pdf',
                '_hQ': JSON.stringify(data),
            }, (ex, bag) => {
                if (m()) {
                    if (ex) {
                        index_3.hide();
                        this.alert(index_6['_pw'](ex));
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
                            type: 'application/pdf',
                        });
                        this.digest({
                            sf: 'rdPdf',
                            enable: false,
                            rdPdf: URL.createObjectURL(blob),
                        });
                    }
                }
            });
        }
        else {
            this.digest({
                enable: false,
            });
        }
    },
    /**
     * 转pdf
     */
    async '_pC'() {
        let pdf = this.get('pdf');
        let page = this.get('page');
        if (!pdf && page) {
            let m = mark(this, '_pA');
            try {
                let images = this.get('rdImages');
                if (!images) {
                    index_3.show('先转换为图片...');
                    await html2canvas_1();
                    images = await this['_ps']();
                }
                index_3.show('正在加载PDF插件...');
                await jspdf_1();
                index_3.show('正在生成PDF...');
                let width = const_1['gY'](page.width), height = const_1['gY'](page.height);
                let doc = new jspdf.jsPDF({
                    unit: 'px',
                    hotfixes: ['px_scaling'],
                    format: [width, width > height ? width + 1 : height],
                });
                this['_pB'] = doc;
                doc.setDocumentProperties({
                    title: index_4('gw'),
                    subject: '打印页面',
                    author: 'dingjz',
                    keywords: '打印、可视化、编辑器',
                    creator: location.host,
                });
                let total = images.length;
                let toPdf = index => {
                    index_5['_pa'](`生成进度：${index + 1} / ${total}`);
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
                index_5['_pb']();
                if (m()) {
                    index_3.show('转换PDF成功～', 2e3);
                    this.digest({
                        sf: 'pdf',
                        enable: false,
                        pdf: doc.output('bloburi'),
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
                enable: false,
            });
        }
    },
    /**
     * 用户在转换格式间切换时，前一个任务有可能未完成，需要标识为已取消
     */
    '_pD'() {
        index_3.hide();
        mark(this, '_pr');
        mark(this, '_pt');
        mark(this, '_pv');
        mark(this, '_pA');
        mark(this, '_py');
        index_5['_pb']();
    },
    /**
     * 切换转换格式
     * @param e 事件对象
     */
    '_pE<change>'(e) {
        this['_pD']();
        this.digest({
            enable: false,
        });
        this.set({
            sf: e.value,
        });
        if (e.value == 'image') {
            this['_pu']();
        }
        else if (e.value == 'pdf') {
            this['_pC']();
        }
        else if (e.value == 'rdImage') {
            this['_px']();
        }
        else if (e.value == 'rdPdf') {
            this['_pz']();
        }
        else {
            this.digest({
                enable: true,
            });
        }
    },
    '_pF<click>'() {
        window.open('//github.com/xinglie/report-designer/issues/49');
    },
    /**
     * rd服务设置
     */
    '_pG<click>'() {
        this.mxDialog("78/7a/setting", {
            width: 500,
        });
    },
    /**
     * rd服务的打印
     */
    '_pJ<click>'() {
        let m = mark(this, '_pH');
        index_3.show(`正在调用RDS打印服务...`);
        let page = this.get('page');
        let printer = index_6['_pI']();
        let data = {
            width: page.width,
            height: page.height,
            location: location.href,
            selector: 'div.rd-m1',
            printer,
            unit: this.get('unit'),
            stage: JSON.stringify(this.get('stage')),
        };
        let s = new service_1();
        s.save({
            name: '_id',
            url: config('rds') + 'print',
            '_hQ': JSON.stringify(data),
        }, (ex, bag) => {
            if (m()) {
                if (ex) {
                    index_3.hide();
                    this.alert(index_6['_pw'](ex));
                }
                else {
                    index_3.show('打印成功～', 2e3);
                }
            }
        });
    },
    '_pK<click>'() {
        let { params } = parseUrl(parent.location.href);
        console.log('参数', params, location.href, parent.location.href);
        window.open(DEBUG ? `./print-debug.html?id=${params.id}` : `./print.html?id=${params.id}`);
    },
    async '_pM<click>'() {
        let selectFormat = this.get('sf');
        let exportMark = mark(this, '_pL');
        try {
            await fs_1['_gY']();
        }
        catch (ex) {
            return this.alert(ex.message);
        }
        let fileName, fileContent, accept;
        index_3.show(index_4('gv'));
        if (selectFormat == 'web') {
            let htmlStyles = [], htmlPages = [];
            let domStyles = document.getElementsByTagName('style');
            for (let i = 0; i < domStyles.length; i++) {
                let s = domStyles[i].innerHTML.trim();
                if (s) {
                    htmlStyles.push(`<style>${s}</style>`);
                }
            }
            let domPages = document.querySelectorAll('.rd-m1');
            for (let i = 0; i < domPages.length; i++) {
                htmlPages.push(cleanHTML(domPages[i].outerHTML));
            }
            accept = ['.html'];
            fileName = `${index_4('gw')}-web.html`;
            fileContent = `<!DOCTYPE html><html><head><meta charset="utf-8" /><title>${index_4('gw')}-web</title>${htmlStyles.join('')}</head><body>${htmlPages.join('')}</body></html>`;
            try {
                if (exportMark()) {
                    await fs_1['_gZ'](fileName, fileContent, accept);
                    index_3.show(index_4('gx'), 3e3);
                }
            }
            catch (ex) {
                index_3.hide();
                if (exportMark() && ex.name != 'AbortError') {
                    this.alert(ex.message);
                }
            }
        }
        else if (selectFormat == 'pdf' && this['_pB']) {
            this['_pB'].save(`${index_4('gw')}.pdf`);
            index_3.show(index_4('gx'), 3e3);
        }
        else if (selectFormat == 'rdPdf' && this.get('rdPdf')) {
            let link = document.createElement('a');
            link.download = `${index_4('gw')}.pdf`;
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
        this['_po'](index_5['_pf'](data));
    },
    /**
     * 通过window派发render事件时，为rds提供的接口
     * @param e 渲染事件对象
     */
    '$win<render>'(e) {
        this['_po'](index_5['_pf'](e.json));
    },
    /**
     * 通过postMessage进行数据通讯
     * @param e 消息事件对象
     */
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.source != window) {
            //防止自己向自己postMessage
            e.source.postMessage('_hA', origin);
        }
        if (e.origin == origin && e.data && e.data != '_hA') {
            this['_po'](index_5['_pf'](e.data));
        }
    },
}).merge(index_1);

});