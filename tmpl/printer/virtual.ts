/*
    author:https://github.com/xinglie
*/
import Magix, { guid } from 'magix';
import RDService from '../designer/service';
import Generic from './generic/index';
import ResourcesLoader from './generic/resource';
import FillBatch from './unit/batch';
import FillCommon from './unit/common';
import FillCellTable from './unit/data-celltable';
import FillColTable from './unit/data-coltable';
import FillDTable from './unit/data-dtable';
import FillFTable from './unit/data-ftable';
import FillRepeater from './unit/data-repeater';
import FillPager from './unit/pager';
import FillRichText from './unit/richtext';
import Const from '../designer/const';

let DataCenter = {};
let { State, View, lowTaskFinale,
    has, applyStyle,
    delay } = Magix;

applyStyle('@:./virtual.less');

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
//标签正则
let tagReg = /<[^>]+>/g;
//删除不必要的属性正则
let tagAttReg = /\s*(?:id|mx5-[a-z]+)\s*=\s*"[^"]+"/gi;
/**
 * 清理html中不需要的属性
 * @param html 源html
 */
let cleanHTML = (html: string) => {
    return html.replace(tagReg, m => m.replace(tagAttReg, ''));
};
export default View.extend({
    tmpl: '@:./virtual.html',
    render() {
        this.digest();
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
    async '@:{fill.page}'(elements, page, pages, pagers, ox, oy, footerHeight) {
        let logicCurrentPage = 0;
        let resLoader = this['@:{resources}'];
        let unit = this.get('unit');
        for (let e of elements) {
            if (e.type == 'data-dtable' ||
                e.type == 'data-ftable') {
                Generic['@:{recast.table.by.data}'](e, DataCenter);
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
            let pageElements = Generic['@:{find.current.page.elements}'](page, logicCurrentPage, elements, oy);
            logicCurrentPage++;
            let indexesCache = {};
            /**
             * 生成分页数据
             * @param elements 元素列表
             * @param page 页面对象
             * @param inHod 是否在容器里
             */
            let generatePage = async (elements, page, inHod?) => {
                let newPage = [];
                for (let i = 0; i < elements.length; i++) {
                    let e = elements[i];
                    let newElement = inHod ? e : {
                        type: e.type,
                        id: e.id,
                        props: Const['@:{const#clone}'](e.props)
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
                    if (e.type == 'pager') {//页码器
                        FillPager(newElement, newPage, inHod, pagers, pages.length);
                    } else if (e.type == 'data-coltable') {
                        //列表格
                        let last = indexesCache[i] || 0;
                        if (last != -1) {//如果未到最后一页，则继续填充
                            indexesCache[i] = FillColTable(DataCenter, newElement, last, page, footerHeight, newPage, inHod);
                        }
                    } else if (e.type == 'data-celltable') {
                        //单元格
                        if (inHod) {//在容器的情况下，始终填充第1条数据，这里可以根据需求进行调整
                            FillCellTable(DataCenter, resLoader, newElement, 0, newPage, inHod);
                        } else {
                            let last = indexesCache[i] || 0;
                            if (last != -1) {
                                indexesCache[i] = await FillCellTable(DataCenter, resLoader, newElement, last, newPage, inHod);
                            }
                        }
                    } else if (e.type == 'data-dtable' ||
                        e.type == 'data-rdtable') {
                        //数据表格
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await FillDTable(DataCenter, resLoader, newElement, last, page, footerHeight, unit, newPage, inHod);
                        }
                    } else if (e.type == 'batch-barcode' ||
                        e.type == 'batch-qrcode' ||
                        e.type == 'batch-text') {
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await FillBatch(DataCenter, newElement, last, page, footerHeight, newPage, inHod, unit);
                        }
                    } else if (e.type == 'data-repeater') {
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await FillRepeater(DataCenter, newElement, last, page, footerHeight, newPage, inHod);
                        }
                    } else if (e.type == 'data-ftable') {
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await FillFTable(DataCenter, resLoader, newElement, last, page, footerHeight, newPage, inHod, unit);
                        }
                    } else if (e.type == 'richtext' ||
                        e.type == 'data-richtext') {
                        let last = indexesCache[i] || 0;
                        if (last != -1) {
                            indexesCache[i] = await FillRichText(DataCenter, resLoader, newElement, last, page, footerHeight, unit, newPage);
                        }
                    } else if (e.props.bind) {//如果有绑定，则进行数据填充
                        FillCommon(DataCenter, resLoader, newElement, newPage, inHod);
                    } else {
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
                let newPage = await generatePage(pageElements, page);
                pages.push(newPage);
            } while (hasNextPage(pageElements, indexesCache));
        }
    },
    async '@:{get.html}'({ stage, data }, readyCallback) {
        for (let key in data) {
            let src = data[key];
            let {
                '@:{data}': apiData,
                '@:{error}': error
            } = RDService['@:{extract.error.and.data}'](src, key);
            DataCenter[key] = {
                '@:{error}': error,
                '@:{data}': apiData
            };
        }
        if (!stage) return;
        let { page, elements, unit } = stage;
        if (!page || !elements || !unit) return;
        let resourcesLoader = new ResourcesLoader();//资源加载收集器
        this['@:{resources}'] = resourcesLoader;
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
        this.set({
            page,
            unit
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
            '@:{global#stage.unit}': unit,
            '@:{global#stage.page.x.offset}': ox,
            '@:{global#stage.page.y.offset}': oy
        });
        let pages = [];//分页对象

        let pagers = [];//页码器对象，需要根据分页多少设置每个页码器的当前页码及总共页码
        let footerHeight = 0;//页脚高度
        /**
         * 处理数据绑定及添加id
         * @param elements 元素列表
         */
        let collectBindInfo = elements => {
            for (let e of elements) {
                //if (!e.id) {
                    e.id = guid('e');
                //}
                let { props, type } = e;
                resourcesLoader['@:{add}']('@:{script}', type);
                let { bind } = props;
                if (bind &&
                    !DataCenter[bind.url]) {
                    DataCenter[bind.url] = {//如果绑定了数据中心没有的数据
                        '@:{error}': `未提供${bind.url}的数据`
                    };
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
                if (type == 'hod-footer') {//页脚
                    footerHeight = props.height;
                } else if (type == 'barcode' ||
                    type == 'batch-barcode' ||
                    type == 'qrcode' ||
                    type == 'batch-qrcode' ||
                    type == 'fx' ||
                    type == 'formula' ||
                    type.startsWith('chart_')) {
                    //根据类型判断是否需要资源收集
                    if (type.startsWith('chart_')) {
                        type = 'echarts';
                    } else if (type == 'formula') {
                        type = 'mathjax';
                    } else if (type.startsWith('batch-')) {
                        type = type.substring(6);
                    }
                    resourcesLoader['@:{add}']('@:{provider}', type);
                }
            }
        };
        collectBindInfo(elements);

        await resourcesLoader['@:{load}']();
        //再进行分页处理
        await this['@:{fill.page}'](elements, page, pages, pagers, ox, oy, footerHeight);

        //设置页码器的总页数
        for (let pager of pagers) {
            pager.props.ext._totalPage = pages.length;
        }
        await this.digest({
            stage,
            pages,
        });
        await lowTaskFinale();//等待所有任务完成
        await delay(1000);
        await lowTaskFinale();//等待所有任务完成

        let htmlStyles = [],
            htmlPages = [];
        let domStyles = document.getElementsByTagName('style');
        for (let i = 0; i < domStyles.length; i++) {
            let s = domStyles[i].innerHTML.trim();
            if (s) {
                htmlStyles.push(`<style>${s}</style>`);
            }
        }
        let domPages = document.querySelectorAll('.@:./virtual.less:page');
        for (let i = 0; i < domPages.length; i++) {
            htmlPages.push(cleanHTML(domPages[i].outerHTML));
        }

        readyCallback({
            styles: htmlStyles,
            pages: htmlPages
        });
        // this.digest({//清空
        //     pages: null
        // });
    }
})