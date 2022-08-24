import Magix from 'magix';
import Transform from '../../designer/transform';
import TableProvider from '../../provider/table';
let { Vframe, node, has, guid, delay, lowTaskFinale, isArray } = Magix;

/**
 * 哪些元素在分页时，使用y坐标进行判断
 * 大部分元素采用元素中间坐标进行判断，如果正好处在分页处，则切割
 * 而自动分页的元素不可以采用中间点，而采用元素的y坐标进行判断
 */
let UseYElements = {
  'data-coltable': 1,
  'data-dtable': 1,
  'data-rdtable': 1,
  'data-ftable': 1,
  'data-richtext': 1,
  video: 1,
};
/**
 * 独立不能分隔的元素
 */
let StandaloneElements = {
  xsheet: 1,
};

/**
 * 查找属于某个页码内的元素
 * @param page 页面对象，包含宽、高，背景色等
 * @param current 当前第几页
 * @param elements 设计区所有元素
 * @param oy y坐标的偏移量
 */
let findCurrentPageElements = (page, current, elements, oy) => {
  let filterElements = [];
  let { width, height } = page;
  let startY = current * height;
  let endY = startY + height;
  let pageRect = {
    x: 0,
    y: startY,
    width: width,
    height: height,
  };
  for (let e of elements) {
    let { props, type } = e;
    if (e.used && StandaloneElements[type]) {
      continue;
    }
    e.used = 1;
    if (type == 'hod-header' || type == 'hod-footer') {
      //页头页脚固定在一个分页的顶或底部
      if (type == 'hod-header') {
        props.y = current * height;
      } else {
        props.y = (current + 1) * height - props.height;
      }
      filterElements.push(e);
    } else {
      let { x, y, width, height, rotate } = props;
      y += oy;
      //如果元素采用y坐标，则查看当前分页是否包含该元素的y坐标
      if (has(UseYElements, type)) {
        if ((y >= startY && y <= endY) || (y < 0 && current == 0)) {
          filterElements.push(e);
        }
      } else {
        //采用矩形碰撞检测，碰撞后则在当前分页内
        //需要考虑矩形旋转的情况
        let newRect = Transform['@:{transform#rotate.rect}']({
          x,
          y,
          width,
          height,
          rotate,
        });
        let testRect = {
          x: newRect['@:{left}'],
          y: newRect['@:{top}'],
          width: newRect['@:{width}'],
          height: newRect['@:{height}'],
        };
        if (Transform['@:{transform#rect.intersect}'](testRect, pageRect)) {
          filterElements.push(e);
        }
      }
    }
  }
  return filterElements;
};
/**
 * 尝试从json字符串转对象
 * @param str 待转换的json字符串
 */
let tryParseJSON = str => {
  let result;
  try {
    result = JSON.parse(str);
  } catch (err) {
    console.error('解析远程 render json 失败', err);
  } finally {
    return result;
  }
};
let mountDisplayOfElementId = guid('_rd_mdt');
let mountDisplayOfElement = async (type, data) => {
  let container = node(mountDisplayOfElementId);
  if (!container) {
    container = document.createElement('div');
    container.className = '@:scoped.style:designer-root';
    container.style.cssText = 'position:fixed;left:-500cm;top:-500cm;pointer-events:none;opacity:0';
    //container.style.cssText = 'position:absolute;left:0cm;top:0cm;';
    container.id = mountDisplayOfElementId;
    document.body.appendChild(container);
  }
  let vfRoot = Vframe.root();
  vfRoot.unmount(container);
  vfRoot.mount(container, `@:../../elements/${type}/index`, data);
  for (;;) {
    if (container.childNodes.length) {
      break;
    }
    await delay(10);
  }
  await lowTaskFinale();
  return container;
};

let hidden = '@:scoped.style:none';
let tipMsg = msg => {
  let n = node('_rd_tip');
  let { classList } = n;
  if (classList.contains(hidden)) {
    classList.remove(hidden);
  }
  n.innerHTML = msg;
};

let hideMsg = () => {
  let n = node('_rd_tip');
  let { classList } = n;
  if (!classList.contains(hidden)) {
    classList.add(hidden);
  }
};

/**
 * 再次检查图片，在开着调试工具的时候，disable cahce 图片每次均会重新请求
 * @param root 根节点
 */
let doubleCheckImages = async (root: Element, tip = true) => {
  let images = root.getElementsByTagName('img');
  for (;;) {
    let hasAllReady = 1,
      readyCount = 0;
    for (let i = images.length; i--; ) {
      let img = images[i];
      if (img.complete) {
        readyCount++;
      } else {
        hasAllReady = 0;
      }
    }
    if (tip) {
      tipMsg(`图片完成进度：${readyCount} / ${images.length}`);
    }
    if (hasAllReady) {
      if (tip) {
        hideMsg();
      }
      break;
    }
    await delay(6);
  }
};
/**
 * 获取数据表格的删除列的信息
 * @param rows 设计器产出的数据表格的行对象
 * @param anchorData 参考的真实数据
 * @returns 删除信息
 */
let getDTableRemovedInfo = (rows, anchorData) => {
  let removedColIndexes = [];
  let removedColWidth = 0;
  let dataRowIndex = 0;
  // NOTICE: 没有先返回
  if (!anchorData) {
    return;
  }
  for (let row of rows) {
    if (row.data) {
      for (let i = row.cols.length; i--; ) {
        let col = row.cols[i];
        if (col.bindKey && anchorData[col.bindKey] == null) {
          // removedColIndexes.push(i);
          // removedColWidth += col.width;
        }
      }
      break;
    }
    // dataRowIndex++;
  }
  return {
    '@:{generic.recast.table#data.row.index}': dataRowIndex,
    '@:{generic.recast.table#removed.indexes}': removedColIndexes,
    '@:{generic.recast.table#removed.width}': removedColWidth,
  };
};
/**
 * 判断元素中是否有绑定的数据
 * @param elements 元素列表
 * @param anchorData 参考的真实数据
 * @returns 是否有绑定的数据
 */
let elementHasData = (elements, anchorData) => {
  if (elements && elements.length) {
    let findData;
    for (let { props } of elements) {
      if (props.bind && props.bind.fields && props.bind.fields.length) {
        let bindField = props.bind.fields[0];
        if (anchorData[bindField.id] != null) {
          findData = 1;
          break;
        }
      } else {
        findData = 1;
        break;
      }
    }
    return findData;
  }
  return 1;
};
/**
 * 获取自由表格的删除列的信息
 * @param rows 设计器产出的自由表格的行对象
 * @param anchorData 参考的真实数据
 * @returns 删除信息
 */
let getFTableRemovedInfo = (rows, anchorData) => {
  let removedColIndexes = [];
  let removedColWidth = 0;
  let dataRowIndex = 0;
  for (let row of rows) {
    if (row.data) {
      for (let i = row.cols.length; i--; ) {
        let col = row.cols[i];
        if (!elementHasData(col.elements, anchorData)) {
          removedColIndexes.push(i);
          removedColWidth += col.width;
        }
      }
      break;
    }
    dataRowIndex++;
  }
  return {
    '@:{generic.recast.table#data.row.index}': dataRowIndex,
    '@:{generic.recast.table#removed.indexes}': removedColIndexes,
    '@:{generic.recast.table#removed.width}': removedColWidth,
  };
};
export default {
  /**
   * 展示消息
   */
  '@:{show.msg}': tipMsg,
  /**
   * 隐藏消息
   */
  '@:{hide.msg}': hideMsg,
  /**
   * 渲染元素的展示层
   */
  '@:{mount.display.of.element}': mountDisplayOfElement,
  /**
   * 查询处于当前页面中的元素
   */
  '@:{find.current.page.elements}': findCurrentPageElements,
  /**
   * 二次检查图片
   */
  '@:{double.check.images}': doubleCheckImages,
  /**
   * 转换JSON
   */
  '@:{try.parse.json}': tryParseJSON,
  /**
   * 重新编排表格描述对象数据
   * @param table 表格描述对象
   * @param dataCenter 数据中心对象
   */
  '@:{recast.table.by.data}'(table, dataCenter) {
    let { props, type } = table;
    let { bind, rows, dynamicCols, avgDynamicColsWidth } = props;
    if (bind.url && dynamicCols && dataCenter[bind.url]) {
      let { '@:{error}': err, '@:{data}': list } = dataCenter[bind.url];
      if (!err) {
        let anchorData = isArray(list) ? list[0] : list;
        let info;
        if (type == 'data-dtable') {
          info = getDTableRemovedInfo(rows, anchorData);
        } else {
          info = getFTableRemovedInfo(rows, anchorData);
        }

        let removedColIndexes = info['@:{generic.recast.table#removed.indexes}'];
        let removedColWidth = info['@:{generic.recast.table#removed.width}'];
        let dataRowIndex = info['@:{generic.recast.table#data.row.index}'];
        props.focusRow = dataRowIndex;
        //附加单元格信息，方便删除
        TableProvider['@:{table.provider#add.ext.meta}'](props);
        for (let ri of removedColIndexes) {
          props.focusCol = ri;
          //根据focusRow及focusCol逻辑聚焦到某个单元格上，然后删除这个聚焦的格子所在的列
          TableProvider['@:{table.provider#delete.col}'](props);
          //删除后需要再次更新单元格元信息
          TableProvider['@:{table.provider#add.ext.meta}'](props);
        }
        if (avgDynamicColsWidth == 'none') {
          props.width -= removedColWidth;
        } else if (avgDynamicColsWidth == 'direct') {
          //采用直接均分的方式
          let restCols = props['@:{col.max}'];
          let singleColWidth = removedColWidth / restCols;
          for (let row of rows) {
            for (let col of row.cols) {
              let spannedCells = col.colspan;
              col.width += singleColWidth * spannedCells;
            }
          }
        } else {
          //以下是占比均分，根据剩余单元格的宽度在整体里的占比，对宽度按占比均分
          let sizes = TableProvider['@:{table.provider#get.sizes}'](props);
          let colWidths = sizes['@:{col.widths}'];
          let restTotalWidth = 0;
          for (let cw of colWidths) {
            restTotalWidth += cw;
          }
          for (let row of rows) {
            for (let col of row.cols) {
              col.width += (col.width / restTotalWidth) * removedColWidth;
            }
          }
        }
      }
    }
  },
};
