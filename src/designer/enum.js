/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/enum",[],(require,exports,module)=>{


/**
 * 枚举对象
 */
module.exports= {
    //角色类型
    '@:{enum#as.hod~rs}': 1,
    '@:{enum#as.data.hod~rs}': 2,
    '@:{enum#as.cells~rs}': 4,
    //对齐
    '@:{enum#align.coners~rs}': 1,
    '@:{enum#align.line.middles~rs}': 2,
    '@:{enum#align.centers~rs}': 2 << 1,
    //拖动对齐跟随元素
    '@:{enum#follow.align.grouped~rs}': 1,
    '@:{enum#follow.align.selected~rs}': 2,
    //修改器类型
    '@:{enum#modifier.icon~rs}': 1,
    '@:{enum#modifier.size~rs}': 2,
    '@:{enum#modifier.width~rs}': 2 << 1,
    '@:{enum#modifier.height~rs}': 2 << 2,
    '@:{enum#modifier.protate~rs}': 2 << 3,
    '@:{enum#modifier.rotate~rs}': 2 << 4,
    '@:{enum#modifier.nomask~rs}': 2 << 5,
    '@:{enum#modifier.text~rs}': 2 << 6,
    '@:{enum#modifier.dblclick~rs}': 2 << 7,
    '@:{enum#modifier.dheight~rs}': 2 << 8,
    '@:{enum#modifier.sync.size~rs}': 2 << 9,
    '@:{enum#modifier.selected.show.icon~rs}': 2 << 10, //选中显示icon
};

});