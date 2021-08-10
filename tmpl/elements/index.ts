import Magix from 'magix';
import Const from '../designer/const';
import Enum from '../designer/enum';
import I18n from '../i18n/index';
import Barcode from './barcode/designer';
import BatchBarcode from './batch-barcode/designer';
import BatchQrcode from './batch-qrcode/designer';
import BatchText from './batch-text/designer';
import Calendar from './calendar/designer';
import ChartBar from './chart-bar/designer';
import ChartLine from './chart-line/designer';
import ChartMeter from './chart-meter/designer';
import ChartPie from './chart-pie/designer';
import Circle from './circle/designer';
import Clock from './clock/designer';
import DataCellTable from './data-celltable/designer';
import DataColTable from './data-coltable/designer';
import DataDTable from './data-dtable/designer';
import DataFTable from './data-ftable/designer';
import DataRepeater from './data-repeater/designer';
import DataRichText from './data-richtext/designer';
import FormCheckbox from './form-checkbox/designer';
import FormCollect from './form-collect/designer';
import FormDropdown from './form-dropdown/designer';
import FormInput from './form-input/designer';
import FormRadio from './form-radio/designer';
import Formula from './formula/designer';
import Fx from './fx/designer';
import HodFooter from './hod-footer/designer';
import HodHeader from './hod-header/designer';
import HodHFlex from './hod-hflex/designer';
import HodTable from './hod-table/designer';
import HodVFlex from './hod-vflex/designer';
import RDHTML from './html/designer';
import XImage from './image/designer';
import Line from './line/designer';
import LSBorderBG from './ls-border-bg/designer';
import LSBorderCSS2 from './ls-border-css2/designer';
import LSBorderCSS4 from './ls-border-css4/designer';
import LSImage from './ls-image/designer';
import XMap from './map/designer';
import Page from './page/designer';
import Pager from './pager/designer';
import Progressbar from './progressbar/designer';
import QRCode from './qrcode/designer';
import Rect from './rect/designer';
import Repeat from './repeat/designer';
import Richtext from './richtext/designer';
import Rod from './rod/designer';
import XText from './text/designer';
import Todo from './todo/designer';
import XVideo from './video/designer';
import XSheet from './xsheet/designer';
let { toMap, applyStyle, State, guid, has, isFunction, mix } = Magix;
let Groups = [{//对应header.html里面的可使用的元素
    icon: '&#xe61d;',
    title: '基础',
    subs: [{
        ctrl: Line
    }, {
        ctrl: Rect
    }, {
        ctrl: Circle
    }, {
        ctrl: Rod
    }, {
        ctrl: Clock
    }]
}, {
    spliter: true
}, {
    ctrl: XText
}, {
    ctrl: XImage
}, {
    ctrl: Repeat
}, {
    ctrl: QRCode
}, {
    ctrl: Barcode
}, {
    spliter: true
}, {
    icon: '&#xe622;',
    title: '容器',
    subs: [{
        ctrl: HodTable
    }, {
        ctrl: HodHFlex
    }, {
        ctrl: HodVFlex
    }, {
        ctrl: HodHeader
    }, {
        ctrl: HodFooter
    }]
}, {
    icon: '&#xe745;',
    title: '数据',
    subs: [{
        ctrl: DataColTable
    }, {
        ctrl: DataCellTable
    }, {
        ctrl: DataDTable
    }, {
        ctrl: Richtext
    }, {
        ctrl: DataRichText
    }, {
        ctrl: Pager
    }, {
        ctrl: ChartLine
    }, {
        ctrl: ChartMeter
    }, {
        ctrl: ChartBar
    }, {
        ctrl: ChartPie
    }, {
        ctrl: XVideo
    }, {
        ctrl: XMap
    }, {
        ctrl: Progressbar
    }, {
        ctrl: XSheet
    }, {
        ctrl: FormCollect
    }, {
        ctrl: FormInput
    }, {
        ctrl: FormRadio
    }, {
        ctrl: FormCheckbox
    }, {
        ctrl: FormDropdown
    }, {
        ctrl: Todo
    }, {
        ctrl: Formula
    }, {
        ctrl: Fx
    }, {
        ctrl: BatchBarcode
    }, {
        ctrl: BatchQrcode
    }, {
        ctrl: BatchText
    }, {
        ctrl: DataRepeater
    }, {
        ctrl: DataFTable
    }, {
        ctrl: Calendar
    }, {
        ctrl: RDHTML
    }]
}, {
    icon: '&#xe658;',
    title: '大屏',
    image: true,
    subs: [{
        ctrl: LSImage,
        image: './images/header_1_thumb.png',
        title: '标题1',
        props() {
            return {
                ename: '标题1',
                image: './images/header_1.png',
                width: Const['@:{const#to.unit}'](1400),
                height: Const['@:{const#to.unit}'](90)
            }
        }
    }, /*{
        ctrl: LSBorder,
        image: './images/border_1_thumb.png',
        title: '边框1',
        props() {
            return {
                ename: '边框1',
                image: 'url(./images/border_1.png) 35 52 35 52 fill',
                borderWidth: '35px 52px',
                width: Const['@:{const#to.unit}'](400),
                minWidth: Const['@:{const#to.unit}'](110),
                height: Const['@:{const#to.unit}'](200),
                minHeight: Const['@:{const#to.unit}'](70),
            };
        }
    },*/ {
        ctrl: LSBorderBG,
        image: './images/border_1_thumb.png',
        title: '边框1',
        props() {
            return {
                ename: '边框1',
                image: './images/border_1.png',
                width: Const['@:{const#to.unit}'](400),
                height: Const['@:{const#to.unit}'](200)
            };
        }
    }, {
        ctrl: LSImage,
        image: './images/header_2.png',
        title: '标题2',
        props() {
            return {
                ename: '标题2',
                image: './images/header_2.png',
                width: Const['@:{const#to.unit}'](358),
                height: Const['@:{const#to.unit}'](28)
            }
        }
    }, {
        ctrl: LSBorderCSS2,
        image: './images/border_2_thumb.png',
        title: '边框2'
    }, {
        ctrl: LSImage,
        image: './images/header_3.png',
        title: '标题3',
        props() {
            return {
                ename: '标题3',
                image: './images/header_3.png',
                width: Const['@:{const#to.unit}'](442),
                height: Const['@:{const#to.unit}'](18)
            }
        }
    }, {
        ctrl: LSImage,
        image: './images/header_4_thumb.png',
        title: '标题4',
        props() {
            return {
                ename: '标题4',
                image: './images/header_4.png',
                width: Const['@:{const#to.unit}'](960),
                height: Const['@:{const#to.unit}'](53)
            }
        }
    }, {
        ctrl: LSBorderCSS4,
        image: './images/border_4_thumb.png',
        title: '边框4'
    },]
}];
/**
 * 由所有元素type组成的对象
 */
let Elements: Report.StageElementCtrl[] = [
];
for (let g of Groups) {
    if (g.ctrl) {
        Elements.push(g.ctrl);
    } else if (g.subs) {
        for (let s of g.subs) {
            Elements.push(s.ctrl);
        }
    }
}
let ElementsMap: Report.StageElementCtrlMapObject = toMap(Elements, 'type');
applyStyle('@:./index.less');
State.set({
    '@:{global#stage.elements.map}': ElementsMap,
    '@:{global#stage.page.ctrl}': Page
});
export default {
    /**
     * 获取所有可用的元素分组
     */
    '@:{element.manager#element.list}'() {
        return Groups;
    },
    /**
     * 获取以type为key的所有元素对象
     */
    '@:{element.manager#elements.map}'() {
        return ElementsMap;
    },
    /**
     * 根据json还原成设计区需要的数据对象
     * @param elements json对象
     * @param fillProps 是否填充属性
     */
    '@:{element.manager#by.json}'(elements: Report.StageElement[],
        page: Report.StagePage,
        fillProps?: boolean | number) {
        let map = {};
        let props = [];
        let flowConnectors = [];
        let flowProvider = State.get<Report.ProviderOfFlow>('@:{global#provider.of.flow}');
        let scale = State.get<number>('@:{global#stage.scale}');
        let idMap: Report.StringMapObject = {};
        let getNewId = (id: string): string => {//根据旧id生成新id
            if (!idMap[id]) {
                idMap[id] = guid('rde_');
            }
            return idMap[id];
        };
        let walk = es => {
            if (es) {
                for (let e of es) {
                    let ctrl = ElementsMap[e.type];
                    if (!ctrl) {
                        throw new Error('can not find:' + e.type);
                    }
                    e.ctrl = ctrl;
                    if (fillProps) {//填充属性，设计区需要的属性比序列化后的属性多
                        let oldProps = e.props;
                        let newProps = ctrl['@:{get.props}'](0, 0);//先获取所有属性
                        e.props = mix(newProps, oldProps);//再把json中的属性覆盖到新属性上
                        if (page.readonly) {//如果page只读，则所有元素只读
                            e.props.readonly = true;
                        }
                        //如果有流程图且是连接线，则处理连接的id
                        if (flowProvider &&
                            flowProvider['@:{flow.provider#is.connector}'](e)) {
                            newProps.linkFromId = getNewId(newProps.linkFromId);
                            newProps.linkToId = getNewId(newProps.linkToId);
                            flowConnectors.push([ctrl, e.props]);
                        } else if (ctrl['@:{update.props}']) {//计算属性
                            props.push([ctrl, e.props]);
                        }

                        //根据当前设计区进行缩放
                        for (let s of ctrl.props) {
                            if (isFunction(s['@:{stage.scale}'])) {
                                s['@:{stage.scale}'](e.props, scale);
                            } else if (s['@:{is.scale.and.unit.field}']) {
                                e.props[s.key] *= scale;
                            }
                        }
                        //增加元素面板的名称
                        if (!has(e.props, 'ename')) {
                            e.props.ename = I18n(ctrl.title);
                        }
                        e.id = getNewId(e.id);
                    }
                    map[e.id] = e;
                    //处理容器
                    if (ctrl.as & Enum['@:{enum#as.hod}']) {
                        for (let row of e.props.rows) {
                            for (let col of row.cols) {
                                if (col.elements) {
                                    walk(col.elements);
                                }
                            }
                        }
                    }
                }
            }
        };
        walk(elements);
        props.push(...flowConnectors);
        return {
            '@:{emanager#elements}': elements,
            '@:{emanager#map}': map,
            '@:{emanager#props}': props,
            '@:{emanager#id.map}': idMap
        };
    }
};