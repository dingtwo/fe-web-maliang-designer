/*
    author:https://github.com/xinglie
*/
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import TableContentConsts from '../../provider/cell';
import TableProvider from '../../provider/table';
import Normal from '../normal';
let transformFields = [
  'width',
  'height',
  'paddingLeft',
  'paddingTop',
  'paddingBottom',
  'paddingRight',
  'textFontsize',
  'textLetterspacing',
  'inputFontsize',
  'inputLetterspacing',
  'dropdownFontsize',
  'dropdownLetterspacing',
];
export default Normal.extend({
  ctor() {
    this.set({
      view: '@:./dshow',
    });
  },
}).static({
  type: 'form-collect',
  as: Enum['@:{enum#as.hod}'], //容器元素特有的标识
  title: '@:{lang#elements.form.collect}',
  icon: '&#xe6ec;',
  '@:{modifier}': Enum['@:{enum#modifier.icon}'] | Enum['@:{enum#modifier.nomask}'],
  '@:{allowed.to.hod}': {
    //当前元素允许添加到的其它容器，这里只允许添加到设计区，不能添加到其它容器里
    root: 1,
  },
  '@:{move.props}': [
    {
      key: 'x',
      use: 'x',
    },
    {
      key: 'y',
      use: 'y',
    },
  ],
  '@:{update.props}'(props) {
    let {
      borderwidth: bw,
      rows,
      borderdeed,
      hideFoot,
      hideTotal,
      hideHead,
      hideLabel,
      excel,
      excelLeft,
      excelTop,
    } = props;
    TableProvider['@:{table.provider#add.ext.meta}'](props, true);
    let sizes = TableProvider['@:{table.provider#get.sizes}'](props);
    let height = 0,
      width = 0;
    for (let w of sizes['@:{col.widths}']) {
      width += w;
    }
    let heights = sizes['@:{row.heights}'];
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
      totalHeight = 0,
      footHeight = 0,
      headRows = 0,
      footRows = 0;
    for (let i = 0; i < total; i++) {
      let row = rows[i];
      let h = heights[i];
      if (row.label && !headHeight) {
        headEnd = height;
        headHeight = height;
      } else if (row.data && !labelHeight) {
        labelHeight = height - headHeight;
      } else if (!headEnd) {
        headRows++;
      } else if (totalHeight) {
        footRows++;
      }
      height += h;
      if (row.total) {
        bodyHeight = height - labelHeight - headHeight - h;
        totalHeight = h;
      } else if (totalHeight) {
        footHeight += h;
      }
    }
    //表格宽：所以列宽＋一个边框宽
    //表格高：所以行高＋一个边框宽
    let tableHeight, tableWidth;
    let oneBorder = Const['@:{const#to.unit}'](1);
    if (borderdeed == 'separate') {
      tableHeight = height + 2 * (sizes['@:{row.heights}'].length + 1) * oneBorder;
      tableWidth = width + 2 * (sizes['@:{col.widths}'].length + 1) * oneBorder;
      if (excel) {
        tableWidth += excelLeft + 2 * oneBorder;
        tableHeight += excelTop + 2 * oneBorder;
        headStart = excelTop + 6 * oneBorder;
      } else {
        headStart = 4 * oneBorder;
      }
      headHeight += 2 * (headRows - 1) * oneBorder;
      if (hideHead) {
        tableHeight -= headHeight + 2 * oneBorder;
        labelStart = headStart;
      } else {
        labelStart = headStart + headHeight + 2 * oneBorder;
      }
      if (hideLabel) {
        tableHeight -= labelHeight + 2 * oneBorder;
        bodyStart = labelStart;
      } else {
        bodyStart = labelStart + labelHeight;
      }
      bodyHeight += 2 * 2 * oneBorder;

      if (hideTotal) {
        tableHeight -= totalHeight + 2 * oneBorder;
        totalHeight = bodyHeight;
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

      headHeight -= 4 * oneBorder;
      labelHeight -= 4 * oneBorder;
      bodyHeight -= 4 * oneBorder;
      totalHeight -= 4 * oneBorder;
      footHeight -= 4 * oneBorder;
    } else {
      tableHeight = height + bw;
      tableWidth = width + bw;
      if (excel) {
        tableWidth += excelLeft;
        tableHeight += excelTop;
        headStart = excelTop + bw + oneBorder;
      } else {
        headStart = bw + oneBorder;
      }
      if (hideHead) {
        tableHeight -= headHeight;
        labelStart = headStart;
      } else {
        labelStart = headStart + headHeight;
        headHeight -= bw + 2 * oneBorder;
      }
      if (hideLabel) {
        tableHeight -= labelHeight;
        bodyStart = labelStart;
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
  },
  '@:{get.props}'(x, y) {
    let padding = Const['@:{const#to.unit}'](5);
    let defaultProps = {
      height: Const['@:{const#to.unit}'](35),
      width: Const['@:{const#to.unit}'](150),
      rowspan: 1,
      colspan: 1,
      paddingLeft: padding,
      paddingTop: padding,
      paddingRight: padding,
      paddingBottom: padding,
      bLeft: true,
      bTop: true,
      bRight: true,
      bBottom: true,
      hpos: 'flex-start',
      vpos: 'flex-start',
      alpha: 1,
    };
    let cellProps = {
      ...defaultProps,
      type: 'text',
      ...TableContentConsts.text,
    };
    cellProps.textFontsize = Const['@:{const#to.unit}'](cellProps.textFontsize);
    return {
      x: Const['@:{const#to.unit}'](x),
      y: Const['@:{const#to.unit}'](y),
      alpha: 1,
      borderwidth: Const['@:{const#to.unit}'](1),
      excel: true,
      excelLeft: Const['@:{const#to.unit}'](40),
      excelTop: Const['@:{const#to.unit}'](30),
      excelBackground: '#f6f6f6',
      excelForecolor: '#000000',
      bordercolor: '#000000',
      bordertype: 'solid',
      borderdeed: 'collapse',
      focusRow: -1,
      focusCol: -1,
      hideTotal: false,
      hideFoot: false,
      hideHead: false,
      hideLabel: false,
      help: 'github.com/xinglie/report-designer/issues/40',
      rows: [
        {
          head: true,
          cols: [
            {
              ...cellProps,
              elements: [],
            },
            {
              ...cellProps,
              elements: [],
            },
            {
              ...cellProps,
              elements: [],
            },
          ],
        },
        {
          label: true,
          cols: [
            {
              ...cellProps,
              elements: [],
            },
            {
              ...cellProps,
              elements: [],
            },
            {
              ...cellProps,
              elements: [],
            },
          ],
        },
        {
          data: true,
          cols: [
            {
              ...cellProps,
            },
            {
              ...cellProps,
            },
            {
              ...cellProps,
            },
          ],
        },
        {
          data: true,
          cols: [
            {
              ...cellProps,
            },
            {
              ...cellProps,
            },
            {
              ...cellProps,
            },
          ],
        },
        {
          total: true,
          cols: [
            {
              ...cellProps,
            },
            {
              ...cellProps,
            },
            {
              ...cellProps,
            },
          ],
        },
        {
          foot: true,
          cols: [
            {
              ...cellProps,
              elements: [],
            },
            {
              ...cellProps,
              elements: [],
            },
            {
              ...cellProps,
              elements: [],
            },
          ],
        },
      ],
      locked: false,
    };
  },
  props: [
    {
      key: 'rows',
      '@:{json.encode}'(dest, { rows }) {
        Transform['@:{transform#json.encode.cells}'](dest, rows, transformFields);
      },
      '@:{unit.convert}'({ rows }, toUnit) {
        Transform['@:{transform#unit.convert.cells}'](rows, toUnit, transformFields);
      },
      '@:{stage.scale}'(props, step, dest) {
        Transform['@:{transform#stage.scale.cells}'](props, step, transformFields, dest);
      },
    },
    {
      key: 'bind',
      json: 1,
    },
    {
      tip: '@:{lang#props.x}',
      type: Props['@:{eprops#number}'],
      key: 'x',
      '@:{is.scale.and.unit.field}': 1,
      step: Const['@:{const#unit.step}'],
      fixed: Const['@:{const#unit.fixed}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.y}',
      type: Props['@:{eprops#number}'],
      key: 'y',
      '@:{is.scale.and.unit.field}': 1,
      step: Const['@:{const#unit.step}'],
      fixed: Const['@:{const#unit.fixed}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.width}',
      key: 'width',
      '@:{is.scale.and.unit.field}': 1,
      read: Transform['@:{transform#to.show.value}'],
      type: Props['@:{eprops#label}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.height}',
      key: 'height',
      '@:{is.scale.and.unit.field}': 1,
      read: Transform['@:{transform#to.show.value}'],
      type: Props['@:{eprops#label}'],
      json: 1,
    } /*, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }*/,
    {
      tip: '@:{lang#props.cell.share}',
      type: Props['@:{eprops#table.cell.share}'],
      '@:{dock.top}': 1,
    },
    {
      type: Props['@:{eprops#spliter}'],
    },
    {
      tip: '@:{lang#props.alpha}',
      key: 'alpha',
      type: Props['@:{eprops#number}'],
      step: 0.1,
      fixed: 1,
      min: 0,
      max: 1,
      json: 1,
    },
    {
      tip: '@:{lang#props.border.width}',
      key: 'borderwidth',
      '@:{is.scale.and.unit.field}': 1,
      type: Props['@:{eprops#number}'],
      step: Const['@:{const#unit.step}'],
      fixed: Const['@:{const#unit.fixed}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      min: 0,
      max: () => Const['@:{const#to.unit}'](10),
      json: 1,
    },
    {
      tip: '@:{lang#props.border.type}',
      key: 'bordertype',
      type: Props['@:{eprops#dropdown}'],
      items: Const['@:{const#border.types}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.border.color}',
      key: 'bordercolor',
      type: Props['@:{eprops#color}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.table.cell.border.deed}',
      key: 'borderdeed',
      type: Props['@:{eprops#dropdown}'],
      items: [
        {
          text: '@:{lang#props.table.cell.border.collapse}',
          value: 'collapse',
        },
        {
          text: '@:{lang#props.table.cell.border.separate}',
          value: 'separate',
        },
      ],
      json: 1,
    },
    {
      type: Props['@:{eprops#spliter}'],
    },
    {
      tip: '@:{lang#props.hide.head}',
      key: 'hideHead',
      type: Props['@:{eprops#boolean}'],
      json: 1,
      write(v, props) {
        let { focusRow, rows } = props;
        TableProvider['@:{table.provider#add.ext.meta}'](props, true);
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
      },
    },
    {
      tip: '@:{lang#props.hide.label}',
      key: 'hideLabel',
      type: Props['@:{eprops#boolean}'],
      json: 1,
      write(v, props) {
        let { focusRow, rows } = props;
        TableProvider['@:{table.provider#add.ext.meta}'](props, true);
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
      },
    },
    {
      tip: '@:{lang#props.hide.total}',
      key: 'hideTotal',
      type: Props['@:{eprops#boolean}'],
      json: 1,
      write(v, props) {
        let { focusRow, rows } = props;
        TableProvider['@:{table.provider#add.ext.meta}'](props, true);
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
      },
    },
    {
      tip: '@:{lang#props.hide.foot}',
      key: 'hideFoot',
      type: Props['@:{eprops#boolean}'],
      json: 1,
      write(v, props) {
        let { focusRow, rows } = props;
        TableProvider['@:{table.provider#add.ext.meta}'](props, true);
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
      },
    },
    {
      type: Props['@:{eprops#spliter}'],
    },
    {
      tip: '@:{lang#props.excel.title}',
      type: Props['@:{eprops#boolean}'],
      key: 'excel',
      json: 1,
    },
    {
      tip: '@:{lang#props.excel.title.background}',
      type: Props['@:{eprops#color}'],
      key: 'excelBackground',
      json: 1,
      '@:{if.show}'(props) {
        return props.excel;
      },
    },
    {
      tip: '@:{lang#props.forecolor}',
      type: Props['@:{eprops#color}'],
      key: 'excelForecolor',
      json: 1,
      '@:{if.show}'(props) {
        return props.excel;
      },
    },
    {
      tip: '@:{lang#props.excel.title.top.height}',
      type: Props['@:{eprops#number}'],
      step: Const['@:{const#unit.step}'],
      fixed: Const['@:{const#unit.fixed}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      min: () => Const['@:{const#to.unit}'](20),
      '@:{is.scale.and.unit.field}': 1,
      key: 'excelTop',
      json: 1,
      '@:{if.show}'(props) {
        return props.excel;
      },
    },
    {
      tip: '@:{lang#props.excel.title.left.width}',
      type: Props['@:{eprops#number}'],
      step: Const['@:{const#unit.step}'],
      fixed: Const['@:{const#unit.fixed}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      min: () => Const['@:{const#to.unit}'](20),
      '@:{is.scale.and.unit.field}': 1,
      key: 'excelLeft',
      json: 1,
      '@:{if.show}'(props) {
        return props.excel;
      },
    },
    {
      type: Props['@:{eprops#spliter}'],
      '@:{if.show}'(props) {
        return props.focusRow > -1 && props.focusCol > -1;
      },
    },
    {
      tip: '@:{lang#props.cell.size}',
      type: Props['@:{eprops#table.cell.size}'],
      '@:{dock.top}': 1,
      //'@:{auto.height}': 1,
      '@:{if.show}'(props) {
        return props.focusRow > -1 && props.focusCol > -1;
      },
    },
    {
      tip: '@:{lang#props.table.cell.border}',
      type: Props['@:{eprops#table.cell.border}'],
      '@:{if.show}'(props) {
        return props.focusRow > -1 && props.focusCol > -1;
      },
    },
    {
      tip: '@:{lang#props.cell.operate}',
      type: Props['@:{eprops#form.collect.cell.operate}'],
      '@:{dock.top}': 1,
      '@:{if.show}'(props) {
        return props.focusRow > -1 && props.focusCol > -1;
      },
    },
    {
      type: Props['@:{eprops#spliter}'],
      '@:{if.show}'(props) {
        let { focusRow, focusCol, rows } = props;
        let show = false;
        if (focusCol > -1 && focusCol > -1) {
          show = true;
          let cell = rows[focusRow].cols[focusCol];
          if (cell && cell.elements && cell.elements.length) {
            show = false;
          }
        }
        return show;
      },
    },
    {
      type: Props['@:{eprops#form.collect.cell.content}'],
      '@:{if.show}'(props) {
        let { focusRow, focusCol, rows } = props;
        let show = false;
        if (focusCol > -1 && focusCol > -1) {
          show = true;
          let cell = rows[focusRow].cols[focusCol];
          if (cell && cell.elements && cell.elements.length) {
            show = false;
          }
        }
        return show;
      },
    },
    {
      type: Props['@:{eprops#spliter}'],
    },
    // {
    //   tip: '@:{lang#props.help}',
    //   type: Props['@:{eprops#link}'],
    //   key: 'help',
    // },
    {
      tip: '@:{lang#props.title}',
      key: 'ename',
      type: Props['@:{eprops#text.input}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.locked}',
      key: 'locked',
      type: Props['@:{eprops#boolean}'],
      free: true,
      json: 1,
    },
  ],
});
