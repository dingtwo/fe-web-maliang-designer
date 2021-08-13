/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/table",["5c"],(require,exports,module)=>{


let magix_1 = require("5c");
/**
 * 用于操作描述表格生成的数据对象，如
 * {
 *     rows:[{
 *          cols:[{rowspan:1,colspan:1},{rowspan:1,colspan:1}]
 *      },{
 *          cols:[{colspan:2}]
 *      }],
 *      focusRow:1,//当前聚焦在哪一行上
 * 　　　focusCol:2,//当前聚焦在哪一列上
 * }
 * 描述了2行2列的数据表格，其中第2行进行了列合并
 * 该对象用于操作上述数据，进行添加、删除、合并、拆分行、列、单元格等
 */
let { isArray } = magix_1;
let { abs, min, max } = Math;
let tags = ['head', 'label', 'data', 'total', 'foot'];
/**
 * 对新生成的行添加标签描述
 * @param toRow 添加到的行对象
 * @param fromRow 来源行对象
 * @returns 添加到的行对象
 */
let addTag = (toRow, fromRow) => {
    for (let tag of tags) {
        if (fromRow[tag]) {
            toRow[tag] = true;
        }
    }
    return toRow;
};
/**
 * 查找列合并的最大值
 * @param rows 行对象
 * @param colIndex 当前列
 * @param colMax 最大列
 * @returns
 */
let findMaxColspan = (rows, colIndex, colMax) => {
    let spanned = colMax;
    for (let row of rows) {
        for (let col of row.cols) {
            let end = col['_qj'] + col.colspan - 1;
            if (col['_qj'] <= colIndex &&
                end >= colIndex) {
                let s = end - colIndex;
                if (s < spanned) {
                    spanned = s;
                }
            }
        }
    }
    return spanned;
};
/**
 * 查找行合并的最大值
 * @param rows 行对象
 * @param rowIndex 当前行
 * @param rowMax 最大行
 * @returns
 */
let findMaxRowspan = (rows, rowIndex, rowMax) => {
    let spanned = rowMax;
    for (let row of rows) {
        for (let col of row.cols) {
            let end = col['_rh'] + col.rowspan - 1;
            if (col['_rh'] <= rowIndex &&
                end >= rowIndex) {
                let s = end - rowIndex;
                if (s < spanned) {
                    spanned = s;
                }
            }
        }
    }
    return spanned;
};
module.exports= {
    /**
     * 对表格对象添加扩展信息，方便在其它方法中使用
     * @param table 表格对象
     * @param canCheck 能否检查并使用已有的缓存信息
     * @returns 表格对象
     */
    'l2'(table, canCheck) {
        if (!canCheck ||
            (table['_pS'] == null ||
                table['_pT'] == null)) {
            let ri = 0, ci = 0, colSpanned = {}, rowSpanned = {}, { rows } = table, colMax = 0, rowMax = 0, rci = 0;
            for (let row of rows) {
                ci = 0;
                rci = 0;
                for (let cell of row.cols) {
                    while (colSpanned[ci] &&
                        rowSpanned[ci] &&
                        ri < rowSpanned[ci]) {
                        ci += colSpanned[ci];
                    }
                    //cell['@:{row.index}'] = ri;
                    cell['_oQ'] = rci++;
                    cell['_oP'] = ri;
                    cell['_rh'] = ri;
                    cell['_qj'] = ci;
                    if (cell.rowspan) {
                        rowSpanned[ci] = cell.rowspan + ri;
                        cell['_rg'] = ri + cell.rowspan - 1;
                    }
                    else {
                        cell['_rg'] = ri;
                    }
                    if (cell.colspan) {
                        colSpanned[ci] = cell.colspan;
                        ci += cell.colspan - 1;
                    }
                    cell['_qk'] = ci++;
                    if (ci > colMax) {
                        colMax = ci;
                    }
                }
                ri++;
                if (ri > rowMax) {
                    rowMax = ri;
                }
            }
            table['_pS'] = rowMax;
            table['_pT'] = colMax;
        }
        return table;
    },
    /**
     * 合并单元格
     * @param table 表格对象
     * @param to 向哪个方法合并 left top right bottom
     * @returns 表格对象
     */
    'l8'(table, to) {
        let { focusCol, focusRow, rows } = table, cells, syncHeight = 0, syncWidth = 0;
        if (to == 'left') {
            cells = [[focusRow, focusCol - 1], [focusRow, focusCol]];
            syncWidth = 1;
        }
        else if (to == 'right') {
            cells = [[focusRow, focusCol], [focusRow, focusCol + 1]];
            syncWidth = 1;
        }
        else {
            syncHeight = 1;
            let dest = rows[focusRow].cols[focusCol];
            let maxRowIndex = dest['_rg'] + 1;
            let maxColIndex = dest['_qk'];
            let find = 0;
            for (let rowIndex = 0; rowIndex <= maxRowIndex; rowIndex++) {
                for (let colIndex = 0; colIndex <= maxColIndex; colIndex++) {
                    let row = rows[rowIndex];
                    if (row) {
                        let cell = row.cols[colIndex];
                        if (cell &&
                            cell != dest) {
                            let realColIndex = cell['_oQ'];
                            if (cell['_qj'] == dest['_qj'] &&
                                cell['_qk'] == dest['_qk']) {
                                if (cell['_rg'] + 1 == dest['_rh']) {
                                    if (to == 'top') {
                                        cells = [[rowIndex, realColIndex], [focusRow, focusCol]];
                                        find = 1;
                                        break;
                                    }
                                }
                                else if (dest['_rg'] + 1 == cell['_rh']) {
                                    if (to == 'bottom') {
                                        cells = [[focusRow, focusCol], [rowIndex, realColIndex]];
                                        find = 1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                if (find) {
                    break;
                }
            }
        }
        let [first, second] = cells;
        table.focusRow = first[0];
        table.focusCol = first[1];
        let spannedCols = 0, spannedRows = 0, spannedMaxRowIndex = -1, spannedMaxColIndex = -1;
        for (let cell of cells) {
            let dest = rows[cell[0]].cols[cell[1]];
            let maxRowIndex = dest['_rg'];
            if (maxRowIndex > spannedMaxRowIndex) {
                spannedMaxRowIndex = maxRowIndex;
            }
            let maxColIndex = dest['_qk'];
            if (maxColIndex > spannedMaxColIndex) {
                spannedMaxColIndex = maxColIndex;
            }
        }
        let dest = rows[first[0]].cols[first[1]];
        let from = rows[second[0]].cols[second[1]];
        spannedRows = spannedMaxRowIndex - dest['_rh'] + 1;
        spannedCols = spannedMaxColIndex - dest['_qj'] + 1;
        if (syncWidth) {
            dest.width += from.width;
        }
        if (syncHeight) {
            dest.height += from.height;
        }
        if (isArray(dest.elements)) {
            dest.elements.push(...from.elements);
        }
        else if (!dest.bindKey &&
            from.bindKey) {
            dest.bindKey = from.bindKey;
            dest.bindName = from.bindName;
            dest.type = from.type;
        }
        dest.colspan = spannedCols;
        dest.rowspan = spannedRows;
        for (let i = cells.length - 1; i > 0; i--) {
            let c = cells[i];
            let row = rows[c[0]];
            row.cols.splice(c[1], 1);
        }
        let rowMax = table['_pS'];
        for (let i = rowMax; i--;) {
            let row = rows[i];
            if (!row.cols.length) {
                rows.splice(i, 1);
                rowMax--;
            }
        }
        for (let i = 0; i < rowMax; i++) {
            let s = findMaxRowspan(rows, i, rowMax);
            if (s > 0) {
                for (let j = 0; j <= i; j++) {
                    let trow = rows[j];
                    for (let col of trow.cols) {
                        let end = col['_rh'] + col.rowspan - 1;
                        if (col['_rh'] <= i &&
                            end >= i) {
                            col.rowspan -= s;
                        }
                    }
                }
                break;
            }
        }
        // for (let i = rows.length; i--;) {
        //     let row = rows[i];
        //     if (!row.cols.length) {
        //         rows.splice(i, 1);
        //     } else {
        //         let spannedMinRows = table['@:{row.max}'];
        //         for (let cell of row.cols) {
        //             if (cell.rowspan < spannedMinRows) {
        //                 spannedMinRows = cell.rowspan;
        //             }
        //         }
        //         spannedMinRows -= 1;
        //         if (spannedMinRows > 0) {
        //             for (let cell of row.cols) {
        //                 cell.rowspan -= spannedMinRows;
        //             }
        //         }
        //     }
        // }
        let colMax = table['_pT'];
        for (let i = 0; i < colMax; i++) {
            let s = findMaxColspan(rows, i, colMax);
            if (s > 0) {
                for (let row of rows) {
                    for (let col of row.cols) {
                        let end = col['_qj'] + col.colspan - 1;
                        if (col['_qj'] <= i &&
                            end >= i) {
                            col.colspan -= s;
                        }
                    }
                }
                break;
            }
        }
        return table;
    },
    /**
     * 拆分单元格
     * @param table 表格对象
     * @param h 是否水平拆分
     * @param cellProps 新拆分的单元格默认属性
     * @param minWidth 最小宽度
     * @param minHeight 最小高度
     */
    'l9'(table, h, cellProps, minWidth, minHeight) {
        let { focusRow, focusCol, rows } = table;
        let destRow = rows[focusRow];
        let dest = destRow.cols[focusCol];
        let sizes = this['l3'](table);
        if (h) {
            let addColspan, addWidth;
            if (dest.colspan > 1) {
                let right = (dest.colspan / 2) | 0;
                let left = dest.colspan - right;
                let rightWidth = 0; //findWidth(rows, dest['@:{end.col.index}'] - right, dest['@:{end.col.index}']);
                let rightEnd = dest['_qk'], rightStart = rightEnd - right + 1;
                for (let i = rightStart; i <= rightEnd; i++) {
                    rightWidth += sizes['_pU'][i];
                }
                dest.colspan = left;
                dest.width -= rightWidth;
                addColspan = right;
                addWidth = rightWidth;
            }
            else {
                let oldWidth = dest.width;
                let w = oldWidth / 2;
                if (w < minWidth) {
                    w = minWidth;
                }
                dest.width = w;
                addWidth = w;
                addColspan = 1;
                let diffWidth = 2 * w - oldWidth;
                for (let row of rows) {
                    for (let col of row.cols) {
                        if (col != dest &&
                            col['_qj'] <= dest['_qj'] && col['_qk'] >= dest['_qk']) {
                            col.colspan++;
                            col.width += diffWidth;
                        }
                    }
                }
            }
            let dc = {
                ...cellProps,
                elements: [],
                colspan: addColspan,
                rowspan: dest.rowspan,
                width: addWidth,
                height: dest.height,
            };
            destRow.cols.splice(focusCol + 1, 0, dc);
        }
        else {
            let addRowspan, addHeight;
            if (dest.rowspan > 1) {
                let bottom = (dest.rowspan / 2) | 0;
                let top = dest.rowspan - bottom;
                let bottomHeight = 0; // findHeight(rows, dest['@:{end.row.index}'] - bottom, dest['@:{end.row.index}']);
                let bottomEnd = dest['_rg'], bottomStart = bottomEnd - bottom + 1;
                for (let i = bottomStart; i <= bottomEnd; i++) {
                    bottomHeight += sizes['_pV'][i];
                }
                dest.rowspan = top;
                dest.height -= bottomHeight;
                addRowspan = bottom;
                addHeight = bottomHeight;
                destRow = rows[dest['_rh'] + top];
                let ci = 0;
                for (let c of destRow.cols) {
                    if (c['_qj'] > dest['_qj']) {
                        focusCol = ci;
                        break;
                    }
                    ci++;
                }
            }
            else {
                let oldHeight = dest.height;
                let h = oldHeight / 2;
                if (h < minHeight) {
                    h = minHeight;
                }
                dest.height = h;
                addHeight = h;
                addRowspan = 1;
                let diffHeight = 2 * h - oldHeight;
                for (let row of rows) {
                    for (let col of row.cols) {
                        if (col != dest &&
                            col['_rh'] <= dest['_rh'] && col['_rg'] >= dest['_rg']) {
                            col.rowspan++;
                            col.height += diffHeight;
                        }
                    }
                }
                rows.splice(dest['_rg'] + 1, 0, destRow = addTag({
                    cols: []
                }, destRow));
            }
            let dc = {
                ...cellProps,
                elements: [],
                colspan: dest.colspan,
                rowspan: addRowspan,
                width: dest.width,
                height: addHeight,
            };
            destRow.cols.splice(focusCol, 0, dc);
        }
    },
    /**
     * 添加行
     * @param table 表格对象
     * @param rowAt 添加到哪一行
     * @param cellProps 单元格默认属性
     * @param rowHeight 行高
     * @returns 表格对象
     */
    'l4'(table, rowAt, cellProps, rowHeight) {
        let skipCols = {};
        let { rows, focusRow, '_pT': colMax } = table;
        let currentRow = rows[focusRow];
        let sizes = this['l3'](table);
        for (let rowIndex = 0; rowIndex < rowAt; rowIndex++) {
            let row = rows[rowIndex];
            for (let cell of row.cols) {
                if (cell['_rg'] >= rowAt) {
                    cell.rowspan++;
                    cell.height += rowHeight;
                    let start = cell['_qj'], end = start + cell.colspan;
                    for (let i = start; i < end; i++) {
                        skipCols[i] = 1;
                    }
                }
            }
        }
        let newRow = {
            cols: []
        };
        if (currentRow) {
            addTag(newRow, currentRow);
        }
        for (let colIndex = 0; colIndex < colMax; colIndex++) {
            if (!skipCols[colIndex]) {
                let dest = {
                    ...cellProps,
                    elements: [],
                    width: sizes['_pU'][colIndex],
                    height: rowHeight,
                    rowspan: 1,
                    colspan: 1,
                };
                newRow.cols.push(dest);
            }
        }
        rows.splice(rowAt, 0, newRow);
        return table;
    },
    /**
     * 添加列
     * @param table 表格对象
     * @param colAt 添加到哪一列
     * @param cellProps 单元格默认属性
     * @param cellWidth 单元格宽度
     * @returns 表格对象
     */
    'l6'(table, colAt, cellProps, cellWidth) {
        let { rows } = table;
        let spannedCells = [], ri = 0;
        let sizes = this['l3'](table);
        for (let row of rows) {
            let cellsCount = row.cols.length;
            let insertColAt = cellsCount;
            for (let colIndex = 0; colIndex < cellsCount; colIndex++) {
                let cell = row.cols[colIndex];
                if (cell.rowspan > 1) {
                    spannedCells.push(cell);
                }
                if (cell['_qj'] < colAt &&
                    cell['_qk'] >= colAt) {
                    cell.colspan++;
                    cell.width += cellWidth;
                    insertColAt = -1;
                    break;
                }
                else if (cell['_qj'] >= colAt) {
                    insertColAt = colIndex;
                    break;
                }
            }
            for (let cell of spannedCells) {
                if (cell['_qj'] < colAt &&
                    cell['_qk'] >= colAt &&
                    cell['_rh'] < ri &&
                    cell['_rg'] >= ri) {
                    insertColAt = -1;
                    break;
                }
            }
            if (insertColAt != -1) {
                let dest = {
                    ...cellProps,
                    elements: [],
                    height: sizes['_pV'][ri],
                    width: cellWidth,
                    rowspan: 1,
                    colspan: 1,
                };
                row.cols.splice(insertColAt, 0, dest);
            }
            ri++;
        }
        return table;
    },
    /**
     * 删除表格行
     * @param table 表格对象
     * @param deletedRowIndex 删除哪一行
     * @returns 表格对象
     */
    'l5'(table, deletedRowIndex) {
        let { rows, focusRow, focusCol } = table;
        let rowRange;
        if (deletedRowIndex != null) {
            rowRange = [deletedRowIndex, deletedRowIndex];
        }
        else {
            let dest = rows[focusRow].cols[focusCol];
            rowRange = [dest['_rh'], dest['_rg']];
        }
        let movedCells = {}, hasMoved = 0;
        let removedRows = (rowRange[1] - rowRange[0] + 1);
        let nextRow = rows[rowRange[1] + 1];
        let halfDeleteRows = removedRows / 2;
        for (let rowIndex = rowRange[1]; rowIndex >= 0; rowIndex--) {
            let row = rows[rowIndex], singRowHeight = 0;
            for (let colIndex = row.cols.length; colIndex--;) {
                let cell = row.cols[colIndex];
                let cellStartColIndex = cell['_qj'];
                let cellEndRowIndex = cell['_rg'];
                let cellStartRowIndex = cell['_rh'];
                let spannedRows = cellEndRowIndex - cellStartRowIndex + 1;
                if (spannedRows == 1) {
                    singRowHeight = cell.height;
                }
                if (spannedRows > 1) {
                    let halfSpannedRows = spannedRows / 2;
                    let centerDiff = abs(rowRange[0] + halfDeleteRows - cellStartRowIndex - halfSpannedRows);
                    if (centerDiff < halfDeleteRows + halfSpannedRows) {
                        if (rowRange[0] == cell['_rh'] &&
                            (cell['_rg'] - cell['_rh']) >= removedRows) {
                            movedCells[cellStartColIndex] = cell;
                            hasMoved = 1;
                        }
                        if (!singRowHeight) {
                            for (let tempCI = colIndex; tempCI--;) {
                                let tCell = row.cols[tempCI];
                                if (tCell['_rg'] == tCell['_rh']) {
                                    singRowHeight = tCell.height;
                                    break;
                                }
                            }
                        }
                        let minEndRowIndex = min(cellEndRowIndex, rowRange[1]);
                        let maxStartRowIndex = max(rowRange[0], cellStartRowIndex);
                        let diffRows = minEndRowIndex - maxStartRowIndex + 1;
                        cell.rowspan -= diffRows;
                        cell.height -= singRowHeight * diffRows;
                    }
                }
            }
            if (rowIndex <= rowRange[1] &&
                rowIndex >= rowRange[0]) {
                rows.splice(rowIndex, 1);
            }
        }
        if (hasMoved) {
            let maxCol = table['_pT'];
            if (nextRow) {
                for (let colIndex = maxCol, lastCellIndex = nextRow.cols.length; colIndex--;) {
                    let movedCell = movedCells[colIndex];
                    if (movedCell) {
                        let insertIndex = 0;
                        for (let findIndex = lastCellIndex; findIndex--;) {
                            let cell = nextRow.cols[findIndex];
                            if (cell['_qj'] < colIndex) {
                                lastCellIndex = findIndex;
                                insertIndex = findIndex + 1;
                                break;
                            }
                        }
                        nextRow.cols.splice(insertIndex, 0, movedCell);
                    }
                }
            }
        }
        return table;
    },
    /**
     * 删除列
     * @param table 表格对象
     * @param deletedColStartIndex 删除单元格开始的列
     * @param deletedColEndIndex 删除单元格结束的列
     * @returns 表格对象
     */
    'l7'(table, deletedColStartIndex, deletedColEndIndex) {
        let { focusRow, focusCol, rows } = table;
        let colRange;
        let singleCellWidth = 0;
        if (deletedColStartIndex != null) {
            if (deletedColEndIndex == null) {
                deletedColEndIndex = deletedColStartIndex;
            }
            colRange = [deletedColStartIndex, deletedColEndIndex];
            let find;
            for (let row of rows) {
                for (let colIndex = row.cols.length; colIndex--;) {
                    let cell = row.cols[colIndex];
                    if (cell['_qj'] == deletedColStartIndex &&
                        cell['_qk'] == deletedColEndIndex) {
                        find = 1;
                        singleCellWidth = cell.width;
                        break;
                    }
                }
                if (find) {
                    break;
                }
            }
        }
        else {
            let row = rows[focusRow];
            let cellToDelete = row.cols[focusCol];
            colRange = [cellToDelete['_qj'],
                cellToDelete['_qk']];
            singleCellWidth = cellToDelete.width;
        }
        let deletedCols = colRange[1] - colRange[0] + 1;
        let halfCols = deletedCols / 2;
        for (let row of rows) {
            for (let colIndex = row.cols.length; colIndex--;) {
                let cell = row.cols[colIndex];
                let cellStartColIndex = cell['_qj'];
                let cellEndColIndex = cell['_qk'];
                if (cellStartColIndex >= colRange[0] &&
                    cellEndColIndex <= colRange[1]) {
                    row.cols.splice(colIndex, 1);
                }
                else if (cell.colspan > 1) {
                    let spannedCols = cellEndColIndex - cellStartColIndex + 1;
                    let halfSpannedCols = spannedCols / 2;
                    let centerDiff = abs(colRange[0] + halfCols - cellStartColIndex - halfSpannedCols);
                    if (centerDiff < halfCols + halfSpannedCols) {
                        let minEndColIndex = min(cellEndColIndex, colRange[1]);
                        let maxStartColIndex = max(colRange[0], cellStartColIndex);
                        let diffCols = minEndColIndex - maxStartColIndex + 1;
                        cell.colspan -= diffCols;
                        cell.width -= singleCellWidth;
                    }
                }
            }
        }
        return table;
    },
    /**
     * 获取表格行列尺寸
     * @param table 表格对象
     * @param refCell 参考的表格
     * @returns 表格对象
     */
    'l3'(table, refCell) {
        let colWidths = [], rowHeights = [];
        let { rows } = table;
        let usedRefCellWidth = false, usedRefCellHeight = false;
        for (let row of rows) {
            for (let col of row.cols) {
                if (col.colspan == 1) {
                    let colIndex = col['_qj'];
                    if (colWidths[colIndex] == null ||
                        (!usedRefCellWidth && col.width > colWidths[colIndex]) ||
                        refCell == col) {
                        usedRefCellWidth = usedRefCellWidth || refCell == col;
                        colWidths[colIndex] = col.width;
                    }
                }
                if (col.rowspan == 1) {
                    let rowIndex = col['_rh'];
                    if (rowHeights[rowIndex] == null ||
                        (!usedRefCellHeight && col.height > rowHeights[rowIndex]) ||
                        refCell == col) {
                        usedRefCellHeight = usedRefCellHeight || refCell == col;
                        rowHeights[rowIndex] = col.height;
                    }
                }
            }
        }
        for (let row of rows) {
            for (let col of row.cols) {
                if (col.colspan > 1) {
                    let findColsWidth = 0, findCols = 0;
                    let startCol = col['_qj'], endCol = startCol + col.colspan;
                    for (let i = startCol; i < endCol; i++) {
                        if (colWidths[i] != null && colWidths[i] >= 0) {
                            findColsWidth += colWidths[i];
                            findCols++;
                        }
                    }
                    if (findCols < col.colspan) {
                        let w = max(col.width - findColsWidth, 0) / (col.colspan - findCols);
                        for (let i = startCol; i < endCol; i++) {
                            if (colWidths[i] == null || colWidths[i] < 0) {
                                colWidths[i] = w;
                            }
                        }
                    }
                    else if ((findColsWidth < col.width && (!refCell || refCell == col) || (findColsWidth > col.width && refCell && refCell == col))) {
                        for (let i = startCol; i < endCol; i++) {
                            if (findColsWidth > 0) {
                                colWidths[i] = colWidths[i] / findColsWidth * col.width;
                            }
                            else {
                                colWidths[i] = col.width / col.colspan;
                            }
                        }
                    }
                }
                if (col.rowspan > 1) {
                    let findRowsHeight = 0, findRows = 0;
                    let startRow = col['_rh'], endRow = startRow + col.rowspan;
                    for (let i = startRow; i < endRow; i++) {
                        if (rowHeights[i] != null && rowHeights[i] >= 0) {
                            findRowsHeight += rowHeights[i];
                            findRows++;
                        }
                    }
                    if (findRows < col.rowspan) {
                        let h = max(0, col.height - findRowsHeight) / (col.rowspan - findRows);
                        for (let i = startRow; i < endRow; i++) {
                            if (rowHeights[i] == null || rowHeights[i] < 0) {
                                rowHeights[i] = h;
                            }
                        }
                    }
                    else if ((findRowsHeight < col.height && (!refCell || refCell == col)) || (findRowsHeight > col.height && refCell && col == refCell)) {
                        for (let i = startRow; i < endRow; i++) {
                            if (findRowsHeight > 0) {
                                rowHeights[i] = rowHeights[i] / findRowsHeight * col.height;
                            }
                            else {
                                rowHeights[i] = col.height / col.rowspan;
                            }
                        }
                    }
                }
            }
        }
        return {
            '_pU': colWidths,
            '_pV': rowHeights
        };
    },
    /**
     * 更新表格单元格尺寸
     * @param table 表格对象
     * @param refCell 参考表格
     */
    'm_'(table, refCell) {
        let sizes = this['l3'](table, refCell);
        let { rows } = table;
        for (let row of rows) {
            for (let col of row.cols) {
                let rowspan = col.rowspan || 1;
                let colspan = col.colspan || 1;
                let colStartIndex = col['_qj'], rowStartIndex = col['_rh'];
                let w = 0, h = 0;
                for (let i = colStartIndex + colspan - 1; i >= colStartIndex; i--) {
                    w += sizes['_pU'][i];
                }
                for (let i = rowStartIndex + rowspan - 1; i >= rowStartIndex; i--) {
                    h += sizes['_pV'][i];
                }
                col.width = w;
                col.height = h;
            }
        }
    }
};

});