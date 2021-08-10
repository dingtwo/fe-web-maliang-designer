/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("6l/6o/data-celltable",[],(require,exports,module)=>{


/**
     * 填充单元格元素数据
     * @param table 单元格元素json描述对象
     * @param fromIndex 从第几页开始
     */
module.exports= (dataCenter, resLoader, table, fromIndex, newPage, inHod) => {
    if (!inHod) {
        newPage.push(table);
    }
    let { props } = table;
    let { bind, rows } = props;
    if (bind.url) {
        let { '_fw': err, '_fx': list } = dataCenter[bind.url];
        if (err) {
            bind._tip = err;
        }
        else {
            bind._data = list[fromIndex];
            for (let row of rows) {
                for (let col of row.cols) {
                    if (col.type == 'qrcode' ||
                        col.type == 'barcode') {
                        resLoader['_jh']('_mH', col.type);
                    }
                    //  else if (col.type == 'image' &&
                    //     col.bindKey) {
                    //     resLoader['@:{add}']('@:{image}', bind._data[col.bindKey]);
                    // }
                }
            }
            return fromIndex == list.length - 1 ? -1 : fromIndex + 1;
        }
    }
    return -1;
};

});