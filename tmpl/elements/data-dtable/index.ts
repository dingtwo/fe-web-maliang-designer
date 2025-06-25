/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import FormatProvider from '../../provider/format';
let format = FormatProvider['@:{format}'].bind(FormatProvider);
let firstToUppercase = str => {
  str += '';
  if (str.length) {
    return str[0].toUpperCase() + str.substring(1);
  }
  return str;
};

function getCellMeta(row, rowIndex, col, colIndex, list, cols) {
  // console.log("🚀 ~ getCellMeta ~ row, rowIndex, col, colIndex, list, cols:", row, rowIndex, col, colIndex, list, cols)
  // debugger;


  if (col.colspan > 1 || col.rowspan > 1) {
    return {
      colSpan: col.colspan,

      rowSpan: col.rowspan,
      width: col.width,
      height: col.height,
      isMerge: false,
    }
  }

  const bindKey = col.bindKey;
  const metaData = row.$$props?.[bindKey];
  let colSpan = 1;
  let rowSpan = 1;
  let width = col.width;
  let height = col.height;

  if (metaData){
    colSpan = metaData.colSpan;
    rowSpan = metaData.rowSpan;
  }

  if (colSpan > 1) {
    const colspanList = cols.slice(colIndex + 1, colIndex + colSpan);
    width += colspanList.map(item => item.width).reduce((a, b) => a + b, 0);
    // colspanList.forEach(item => {
    //   item.width = 0;
    // });
  }
  if (rowSpan > 1) {
    const rowspanList = list.slice(rowIndex + 1, rowIndex + rowSpan);
    height += rowspanList.map(item => item.height).reduce((a, b) => a + b, 0);
    // rowspanList.forEach(item => {
      //   item.height = 0;
      // });
    // 第一屏的最后一个大于colspan不能超过当前行数
    if(rowIndex + rowSpan > list.length){
      rowSpan = list.length - rowIndex;
    }
  }
  //第二屏的第一条colspan不能是0,也就是接着上一屏的colspan，得重新计算
  if (rowIndex === 0 && rowSpan === 0) {
    debugger
    let rowSpan0Count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].$$props?.[bindKey]?.rowSpan === 0) {
        rowSpan0Count++;
      } else {
        break;
      }
    }
    rowSpan = rowSpan0Count;
    // if (colSpan === 0) {
    //   colSpan = 1;
    // }
  }

  // col.colspan = colSpan;
  // col.rowspan = rowSpan;

  return {
    colSpan,
    rowSpan,
    width,
    height,
    isMerge: colSpan !== 1 || rowSpan !== 1,
  };
}
export default Magix.View.extend({
  tmpl: '@:index.html',
  init() {
    this.set({
      format,
      toPx: Const['@:{const#to.px}'],
      toUnit: Const['@:{const#to.unit}'],
      ftu: firstToUppercase,
      getCellMeta: getCellMeta,
    });
  },
  assign(data) {
    this.set(data);
  },
  render() {
    this.digest();
  },
});
