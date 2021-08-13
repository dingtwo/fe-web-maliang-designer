/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("7j/7m/data-coltable",["../../61/data-coltable/consts"],(require,exports,module)=>{


let consts_1 = require("../../61/data-coltable/consts");
let { floor } = Math;
/**
 * 填充列表格元素数据
 * @param table 列表格元素json描述对象
 * @param fromIndex 从第几页开始
 * @param page 页面对象
 * @param footerHeight 页脚高度
 */
module.exports= (dataCenter, table, fromIndex, page, footerHeight, newPage, inHod) => {
    if (!inHod) {
        newPage.push(table);
    }
    let { props } = table;
    let { bind, columns } = props;
    //let current = State.get('@:{global#stage.scale}');
    //如果有绑定的数据
    if (bind.fields &&
        bind.fields.length) {
        //根据绑定的字段，计算列表格总体宽度
        let width = 0;
        for (let field of bind.fields) {
            width += columns[field.id];
        }
        props.width = width + 1;
        //从数据中心拿数据
        let { '_nU': err, '_nV': list } = dataCenter[bind.url];
        if (err) {
            //如果数据出错，则设置出错皐　信息
            props.loadingHeight = consts_1["_p6"];
            bind._tip = err;
        }
        else {
            //根据坐标计算页面中剩余高度
            let restHeight = page.height - props.y - props.theadRowHeight - 1 - props.tfootSpacing - footerHeight;
            //计算剩余高度能放几条数据
            let rows = floor(restHeight / (props.tbodyRowHeight + 1));
            //如果1条数据也放不下，我们强制显示1条，避免死循环
            if (rows < 1)
                rows = 1;
            //计算结束数据的下标
            let end = rows + fromIndex;
            if (end > list.length) {
                end = list.length;
            }
            bind._data = list.slice(fromIndex, end);
            //根据结束数据的下标来判断是否还有剩余数据
            return end == list.length ? -1 : end;
        }
    }
    else {
        //如果未绑定数据，则宽度默认为初始宽度
        props.width = consts_1["_p5"];
    }
    //返回-1表明分页完毕
    return -1;
};

});