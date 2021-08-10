/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Props from '../../designer/props';
import Service from '../../designer/service';
import StageGeneric from '../../designer/stage-generic';
import Transform from '../../designer/transform';
import TableContentConsts from '../../provider/celltable';
import TableProvider from '../../provider/table';
import Normal from '../normal';
let { State, Cache, mark } = Magix;
let BaseDesigner = Normal.prototype;
let { max, floor } = Math;

let calcTableSize = (props, list?: object[], err?: { msg: string }) => {
    let { bind, rows, borderwidth,
        tfootSpacing,
        borderdeed,
        hideFoot,
        hideTotal,
        hideHead,
        hideLabel, y } = props;
    let scale = State.get('@:{global#stage.scale}');
    let oneBorder = Const['@:{const#to.unit}'](1);
    //debugger;
    if (bind.url) {
        if (err || !list) {
            bind._tip = err?.msg || '正在加载数据...';
        } else {
            let page = State.get('@:{global#stage.page}');
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let sizes = TableProvider["@:{table.provider#get.sizes}"](props);
            let heights = sizes["@:{row.heights}"];

            let rh = page.height * scale;
            let pageNumber = (y / rh) | 0;
            if (pageNumber < 0) {
                pageNumber = 0;
            }
            y -= pageNumber * rh;
            let ri = 0,
                labelRowIndex = -1,
                dataRowIndex = -1,
                totalRowIndex = -1,
                headRows = 0,
                footRows = 0;
            for (let row of rows) {
                if (row.label) {
                    labelRowIndex = ri;
                } else if (row.data) {
                    dataRowIndex = ri;
                } else if (row.total) {
                    totalRowIndex = ri;
                } else if (labelRowIndex == -1) {
                    headRows++;
                } else if (totalRowIndex != -1) {
                    footRows++;
                }
                ri++;
            }
            let totalHeight = hideTotal ? 0 : heights[totalRowIndex];
            let labelHeight = heights[labelRowIndex];
            let headHeight = 0;
            let contentHeight = heights[dataRowIndex];
            let footHeight = 0;
            for (let i = 0; i < heights.length; i++) {
                if (!hideHead &&
                    i < labelRowIndex) {//计算头占的高度
                    headHeight += heights[i];
                }
                if (i > totalRowIndex &&
                    !hideFoot) {//计算底占的高度
                    footHeight += heights[i];
                }
            }
            if (borderdeed == 'separate') {
                headHeight += 2 * headRows * oneBorder;
                footHeight += 2 * footRows * oneBorder;
                totalHeight += 2 * oneBorder;
                labelHeight += 2 * oneBorder;
                borderwidth = 2 * oneBorder;
                contentHeight += 2 * oneBorder;
            }
            if (hideLabel) {
                labelHeight = 0;
            }
            let restHeight = rh - y - headHeight - borderwidth - tfootSpacing - footHeight - totalHeight - labelHeight;
            let dataRows = floor(restHeight / contentHeight);
            if (dataRows < 2) dataRows = 2;
            if (Array.isArray(list)) {
                bind._data = list.slice(1, dataRows);
            } else {
                bind._data = [list];
            }
            bind._tip = '';
        }
    }
};
let apiDataCache = new Cache();
let scaleRowAndCols = (props, step, dest) => {
    let { rows } = props;
    for (let row of rows) {
        for (let col of row.cols) {
            col.width = col.width * step;
            col.height = col.height * step;
            col.paddingLeft *= step;
            col.paddingTop *= step;
            col.paddingRight *= step;
            col.paddingBottom *= step;
            if (col.textFontsize != null) {
                col.textFontsize *= step;
                col.textLetterspacing *= step;
            }/* else if (col.type == 'image') {
                col.imageMaxWidth *= step;
                col.imageMaxHeight *= step;
            } else if (col.type == 'barcode') {
                col.barcodeWidth *= step;
                col.barcodeHeight *= step;
            } else if (col.type == 'qrcode') {
                col.qrcodeWidth *= step;
                col.qrcodeHeight *= step;
            }*/
        }
    }
    if (dest) {
        dest.rows = rows;
    }
};
export default Normal.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
        let updateSize = () => {
            let element = this.get('element');
            this['@:{update}'](element);
        };
        State.on('@:{event#stage.page.change}', updateSize);
        this.on('destroy', () => {
            State.off('@:{event#stage.page.change}', updateSize);
        });
    },
    '@:{attach.data}'(element) {
        let { props } = element;
        let { bind } = props;
        if (bind.url) {
            let data = apiDataCache.get(bind.url);
            if (data) {
                calcTableSize(props, data.list, data.error);
                if (element.ctrl['@:{update.props}']) {
                    element.ctrl['@:{update.props}'](props);
                    State.fire('@:{event#stage.select.element.props.change}', {
                        '@:{ids}': {
                            [element.id]: 1
                        },
                        '@:{props}': {
                            '@:{focus}': 1
                        }
                    });
                }
            } else {
                calcTableSize(props);
                let m = mark(this, '@:{attach.data}');
                let s = new Service();
                s.all({
                    name: '@:{get.by.url}',
                    url: bind.url
                }, (err: { msg: string }, bag) => {
                    let list = bag.get('data', []);
                    apiDataCache.set(bind.url, {
                        list,
                        error: err
                    });
                    let element = this.get('element');
                    if (m()) {
                        calcTableSize(props, list, err);
                        if (element.ctrl['@:{update.props}']) {
                            element.ctrl['@:{update.props}'](props);
                            State.fire('@:{event#stage.select.element.props.change}', {
                                '@:{ids}': {
                                    [element.id]: 1
                                },
                                '@:{props}': {
                                    '@:{focus}': 1
                                }
                            });
                        }
                        this.digest({
                            element
                        });
                    }
                });
            }
        } else {
            if (element.ctrl['@:{update.props}']) {
                element.ctrl['@:{update.props}'](props);
                State.fire('@:{event#stage.select.element.props.change}', {
                    '@:{ids}': {
                        [element.id]: 1
                    },
                    '@:{props}': {
                        '@:{focus}': 1
                    }
                });
            }
        }
    },
    assign(data) {
        this['@:{attach.data}'](data.element);
        BaseDesigner.assign.call(this, data);
    },
    '@:{update}'(element) {
        this['@:{attach.data}'](element);
        BaseDesigner['@:{update}'].call(this, element);
    }
}).static({
    type: 'data-rdtable',
    as: '@:{element.as#hod}',
    title: '@:{lang#elements.data.rdtable}',
    icon: '&#xe674;',
    '@:{modifier}': {
        icon: 1,
        nomask: 1,
        dheight: 1
    },
    '@:{allowed.to.hod}': {
        root: 1
    },
    '@:{scale.props}': ['x', 'y', 'borderwidth', 'tfootSpacing', 'tipFontsize', scaleRowAndCols],
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{update.props}'(props) {
        let { borderwidth: bw,
            tfootSpacing,
            rows,
            borderdeed,
            hideFoot,
            hideTotal,
            bind,
            hideHead,
            hideLabel } = props;
        TableProvider["@:{table.provider#add.ext.meta}"](props, true);
        let sizes = TableProvider["@:{table.provider#get.sizes}"](props);
        let height = 0,
            width = 0;
        for (let w of sizes["@:{col.widths}"]) {
            width += w;
            //width += (w - trunc(w)) > 0 ? 1 : 0;
        }
        let heights = sizes["@:{row.heights}"];
        let total = heights.length;
        let headStart,
            headEnd,
            headHeight,
            labelStart,
            labelHeight,
            bodyStart,
            bodyHeight,
            totalStart,
            footStart,
            spacingStart,
            totalHeight = 0,
            footHeight = 0,
            spacingHeight = tfootSpacing,
            headRows = 0,
            footRows = 0,
            bodyRows = 2;
        for (let i = 0; i < total; i++) {
            let row = rows[i];
            let h = heights[i];
            if (row.label) {
                headEnd = height;
                headHeight = height;
            } else if (row.data) {
                labelHeight = (height - headHeight);
            } else if (!headEnd) {
                headRows++;
            } else if (totalHeight) {
                footRows++;
            }
            height += h;
            if (row.data) {
                if (bind.url &&
                    bind._data) {
                    bodyRows = bind._data.length;
                    let cHeight = h * bodyRows;
                    props.tipTop = height + cHeight / 2;
                    height += cHeight;
                } else {
                    props.tipTop = height + h;
                    height += bodyRows * h;
                }
                bodyHeight = (height - labelHeight - headHeight);
            } else if (row.total) {
                totalHeight = h;
            } else if (totalHeight) {
                footHeight += h;
            }
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        height += tfootSpacing;
        let oneBorder = Const['@:{const#to.unit}'](1);
        let tableHeight,
            tableWidth;
        if (borderdeed == 'separate') {
            tableHeight = height + 2 * (sizes["@:{row.heights}"].length + bodyRows + 1) * oneBorder;
            tableWidth = width + 2 * (sizes["@:{col.widths}"].length + 2) * oneBorder;
            headStart = 4 * oneBorder;
            headHeight += 2 * (headRows - 1) * oneBorder;
            if (hideHead) {
                tableHeight -= headHeight + 2 * oneBorder;
                labelStart = headStart;
                props.tipTop -= headHeight + oneBorder;
            } else {
                labelStart = headStart + headHeight + 2 * oneBorder;
            }
            if (hideLabel) {
                bodyStart = labelStart;
                tableHeight -= labelHeight + 2 * oneBorder;
                props.tipTop -= labelHeight + oneBorder;
            } else {
                bodyStart = labelStart + labelHeight;
            }

            bodyHeight += bodyRows * 2 * oneBorder;

            if (hideTotal) {
                tableHeight -= totalHeight + 2 * oneBorder;
                totalHeight = bodyHeight
                totalStart = bodyStart;
            } else {
                totalStart = bodyStart + bodyHeight + 2 * oneBorder;
            }

            footHeight += 2 * (footRows - 1) * oneBorder;
            if (hideFoot) {
                tableHeight -= footHeight + 2 * oneBorder;
                footStart = totalStart;
                footHeight = totalHeight;
            } else {
                footStart = totalStart + totalHeight + 2 * oneBorder;
            }
            spacingStart = footStart + footHeight;


            headHeight -= 4 * oneBorder;
            labelHeight -= 4 * oneBorder;
            bodyHeight -= 4 * oneBorder;
            totalHeight -= 4 * oneBorder;
            footHeight -= 4 * oneBorder;
        } else {
            tableHeight = height + bw;
            tableWidth = width + bw;
            headStart = bw + oneBorder;
            if (hideHead) {
                tableHeight -= headHeight;
                labelStart = headStart;
                props.tipTop -= headHeight;
            } else {
                labelStart = headStart + headHeight;
                headHeight -= bw + 2 * oneBorder;
            }
            if (hideLabel) {
                bodyStart = labelStart;
                tableHeight -= labelHeight;
                props.tipTop -= labelHeight
            } else {
                bodyStart = labelStart + labelHeight - 2 * oneBorder;
                labelHeight -= bw + 2 * oneBorder;
            }

            if (hideTotal) {
                tableHeight -= totalHeight;
                totalStart = bodyStart;
                totalHeight = bodyHeight;
            } else {
                totalStart = bodyStart + bodyHeight;
            }

            if (hideFoot) {
                tableHeight -= footHeight;
                footStart = totalStart;
                footHeight = totalHeight;
            } else {
                footStart = totalStart + totalHeight;
            }
            spacingStart = footStart + footHeight;
            bodyHeight -= bw + 2 * oneBorder;
            totalHeight -= bw + 2 * oneBorder;
            footHeight -= bw + 2 * oneBorder;
        }
        props.width = tableWidth;
        props.height = tableHeight;

        props.headStart = headStart;
        props.headHeight = headHeight;

        props.labelStart = labelStart;
        props.labelHeight = labelHeight;

        props.bodyStart = bodyStart;
        props.bodyHeight = bodyHeight;

        props.totalStart = totalStart;
        props.totalHeight = totalHeight;

        props.footStart = footStart;
        props.footHeight = footHeight;

        props.spacingStart = spacingStart;
        props.spacingHeight = max(spacingHeight, 0);
    },
    '@:{get.bind.info}'(props) {
        let { rows, bind } = props;
        let fields = [];
        for (let row of rows) {
            for (let col of row.cols) {
                if (col.bindKey) {
                    fields.push({
                        id: col.bindKey,
                        name: col.bindName
                    });
                }
            }
        }
        return {
            id: bind.id,
            fields
        };
    },
    '@:{get.props}'(x, y) {
        let defaultProps = {
            height: Const['@:{const#to.unit}'](30),
            width: Const['@:{const#to.unit}'](150),
            rowspan: 1,
            colspan: 1,
            paddingLeft: Const['@:{const#to.unit}'](5),
            paddingTop: Const['@:{const#to.unit}'](5),
            paddingRight: Const['@:{const#to.unit}'](5),
            paddingBottom: Const['@:{const#to.unit}'](5),
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true,
            hpos: 'flex-start',
            vpos: 'flex-start',
            alpha: 1
        };
        let cellProps = {
            ...defaultProps,
            type: 'text',
            ...TableContentConsts.text
        };
        cellProps.textFontsize = Const['@:{const#to.unit}'](cellProps.textFontsize);
        return {
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            //rotate: 0,
            alpha: 1,
            borderwidth: Const['@:{const#to.unit}'](1),
            bordercolor: '#000000',
            bordertype: 'solid',
            borderdeed: 'collapse',
            focusRow: -1,
            focusCol: -1,
            tipFontsize: Const['@:{const#to.unit}'](16),
            tfootSpacing: Const['@:{const#to.unit}'](30),
            hideTotal: false,
            hideFoot: false,
            hideHead: false,
            hideLabel: false,
            headFirst: true,
            footLast: true,
            bind: {
                url: '',
                id: ''
            },
            help: 'github.com/xinglie/report-designer/issues/26',
            rows: [{
                cols: [{
                    ...cellProps,
                    elements: []
                }, {
                    ...cellProps,
                    elements: []
                }, {
                    ...cellProps,
                    elements: []
                }]
            }, {
                label: true,
                cols: [{
                    ...cellProps,
                    elements: []
                }, {
                    ...cellProps,
                    elements: []
                }, {
                    ...cellProps,
                    elements: []
                }]
            }, {
                data: true,
                cols: [{
                    ...cellProps
                }, {
                    ...cellProps
                }, {
                    ...cellProps
                }]
            }, {
                total: true,
                cols: [{
                    ...cellProps
                }, {
                    ...cellProps
                }, {
                    ...cellProps
                }]
            }, {
                cols: [{
                    ...cellProps,
                    elements: []
                }, {
                    ...cellProps,
                    elements: []
                }, {
                    ...cellProps,
                    elements: []
                }]
            }],
            locked: false
        };
    },
    props: [{
        key: 'rows',
        json: 1,
        encode(dest, props) {
            let { rows } = props;
            let clonedRows = StageGeneric["@:{generic#clone}"](rows);
            for (let row of clonedRows) {
                for (let col of row.cols) {
                    col.width = Transform["@:{transform#to.show.value}"](col.width);
                    col.height = Transform["@:{transform#to.show.value}"](col.height);
                    col.paddingLeft = Transform["@:{transform#to.show.value}"](col.paddingLeft);
                    col.paddingTop = Transform["@:{transform#to.show.value}"](col.paddingTop);
                    col.paddingBottom = Transform["@:{transform#to.show.value}"](col.paddingBottom);
                    col.paddingRight = Transform["@:{transform#to.show.value}"](col.paddingRight);
                    if (col.textFontsize != null) {
                        col.textFontsize = Transform["@:{transform#to.show.value}"](col.textFontsize);
                        col.textLetterspacing = Transform["@:{transform#to.show.value}"](col.textLetterspacing);
                    } /*else if (col.type == 'image') {
                        col.imageMaxWidth = Transform["@:{transform#to.show.value}"](col.imageMaxWidth);;
                        col.imageMaxHeight = Transform["@:{transform#to.show.value}"](col.imageMaxHeight);;
                    } else if (col.type == 'barcode') {
                        col.barcodeWidth = Transform["@:{transform#to.show.value}"](col.barcodeWidth);;
                        col.barcodeHeight = Transform["@:{transform#to.show.value}"](col.barcodeHeight);;
                    } else if (col.type == 'qrcode') {
                        col.qrcodeWidth = Transform["@:{transform#to.show.value}"](col.qrcodeWidth);;
                        col.qrcodeHeight = Transform["@:{transform#to.show.value}"](col.qrcodeHeight);;
                    }*/
                }
            }
            dest.rows = clonedRows;
        },
    }, {
        key: 'bind',
        json: 1
    }, {
        tip: '@:{lang#props.x}',
        type: Props["@:{eprops#number}"],
        key: 'x',
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.y}',
        type: Props["@:{eprops#number}"],
        key: 'y',
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.width}',
        key: 'width',
        read: Transform["@:{transform#to.show.value}"],
        type: Props["@:{eprops#label}"],
        json: 1
    }, {
        tip: '@:{lang#props.height}',
        key: 'height',
        read: Transform["@:{transform#to.show.value}"],
        type: Props["@:{eprops#label}"],
        json: 1
    }/*, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }*/, {
        tip: '@:{lang#props.alpha}',
        key: 'alpha',
        type: Props["@:{eprops#number}"],
        step: 0.1,
        fixed: 1,
        min: 0,
        max: 1,
        json: 1
    }, {
        tip: '@:{lang#props.border.width}',
        key: 'borderwidth',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        min: 0,
        max: () => Const["@:{const#to.unit}"](10),
        json: 1
    }, {
        tip: '@:{lang#props.border.type}',
        key: 'bordertype',
        type: Props["@:{eprops#dropdown}"],
        items: Const['@:{const#border.types}'],
        json: 1
    }, {
        tip: '@:{lang#props.border.color}',
        key: 'bordercolor',
        type: Props["@:{eprops#color}"],
        json: 1
    }, {
        tip: '@:{lang#props.table.cell.border.deed}',
        key: 'borderdeed',
        type: Props["@:{eprops#dropdown}"],
        items: [{
            text: '@:{lang#props.table.cell.border.collapse}',
            value: 'collapse'
        }, {
            text: '@:{lang#props.table.cell.border.separate}',
            value: 'separate'
        }],
        json: 1
    }, {
        tip: '@:{lang#props.table.foot.spacing}',
        min: 0,
        key: 'tfootSpacing',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.head.first.page}',
        key: 'headFirst',
        type: Props["@:{eprops#boolean}"],
        json: 1
    }, {
        tip: '@:{lang#props.foot.last.page}',
        key: 'footLast',
        json: 1,
        type: Props["@:{eprops#boolean}"]
    }, {
        tip: '@:{lang#props.hide.head}',
        key: 'hideHead',
        type: Props["@:{eprops#boolean}"],
        json: 1,
        write(v, props) {
            let { focusRow, rows } = props;
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let ri = 0,
                labelRowIndex = -1;
            for (let row of rows) {
                if (row.label) {
                    labelRowIndex = ri;
                    break;
                }
                ri++;
            }
            if (focusRow < labelRowIndex) {
                props.focusRow = -1;
                props.focusCol = -1;
            }
            return v;
        }
    }, {
        tip: '@:{lang#props.hide.label}',
        key: 'hideLabel',
        type: Props['@:{eprops#boolean}'],
        json: 1,
        write(v, props) {
            let { focusRow, rows } = props;
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let ri = 0,
                labelRowIndex = -1;
            for (let row of rows) {
                if (row.label) {
                    labelRowIndex = ri;
                    break;
                }
                ri++;
            }
            if (focusRow == labelRowIndex) {
                props.focusRow = -1;
                props.focusCol = -1;
            }
            return v;
        }
    }, {
        tip: '@:{lang#props.hide.total}',
        key: 'hideTotal',
        type: Props["@:{eprops#boolean}"],
        json: 1,
        write(v, props) {
            let { focusRow, rows } = props;
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let ri = 0,
                totalRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    totalRowIndex = ri;
                    break;
                }
                ri++;
            }
            if (focusRow == totalRowIndex) {
                props.focusRow = -1;
                props.focusCol = -1;
            }
            return v;
        }
    }, {
        tip: '@:{lang#props.hide.foot}',
        key: 'hideFoot',
        type: Props["@:{eprops#boolean}"],
        json: 1,
        write(v, props) {
            let { focusRow, rows } = props;
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let ri = 0,
                totalRowIndex = -1;
            for (let row of rows) {
                if (row.total) {
                    totalRowIndex = ri;
                    break;
                }
                ri++;
            }
            if (focusRow > totalRowIndex) {
                props.focusRow = -1;
                props.focusCol = -1;
            }
            return v;
        }
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return props.focusRow > -1 && props.focusCol > -1;
        }
    }, {
        tip: '@:{lang#props.cell.size}',
        type: Props["@:{eprops#table.cell.size}"],
        '@:{dock.top}': 1,
        //'@:{auto.height}': 1,
        '@:{if.show}'(props) {
            return props.focusRow > -1 && props.focusCol > -1;
        }
    }, {
        tip: '@:{lang#props.table.cell.border}',
        type: Props["@:{eprops#table.cell.border}"],
        '@:{if.show}'(props) {
            return props.focusRow > -1 && props.focusCol > -1;
        }
    }, {
        tip: '@:{lang#props.cell.operate}',
        type: Props["@:{eprops#dtable.cell.operate}"],
        '@:{dock.top}': 1,
        '@:{if.show}'(props) {
            return props.focusRow > -1 && props.focusCol > -1;
        }
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            let { focusRow, focusCol, rows } = props;
            let show = false;
            if (focusCol > -1 &&
                focusCol > -1) {
                show = true;
                let cell = rows[focusRow].cols[focusCol];
                if (cell &&
                    cell.elements &&
                    cell.elements.length) {
                    show = false;
                }
            }
            return show;
        }
    }, {
        type: Props["@:{eprops#dtable.cell.content}"],
        '@:{if.show}'(props) {
            let { focusRow, focusCol, rows } = props;
            let show = false;
            if (focusCol > -1 &&
                focusCol > -1) {
                show = true;
                let cell = rows[focusRow].cols[focusCol];
                if (cell &&
                    cell.elements &&
                    cell.elements.length) {
                    show = false;
                }
            }
            return show;
        }
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.help}',
        type: Props["@:{eprops#link}"],
        key: 'help'
    }, {
        tip: '@:{lang#props.title}',
        key: 'ename',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.locked}',
        key: 'locked',
        type: Props["@:{eprops#boolean}"],
        free: true,
        json: 1
    }]
});