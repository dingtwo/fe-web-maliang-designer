/**
 * 枚举对象
 */
export default {
    //角色类型
    '@:{enum#as.hod}': 1,//容器
    '@:{enum#as.data.hod}': 2,//数据绑定容器
    '@:{enum#as.cells}': 4,//带有单元格的元素
    //对齐
    '@:{enum#align.coners}': 1,//拐角
    '@:{enum#align.line.middles}': 2,//四条线的中间点
    '@:{enum#align.centers}': 2 << 1,//中间点
    //拖动对齐跟随元素
    '@:{enum#follow.align.grouped}': 1,//组合中的元素
    '@:{enum#follow.align.selected}': 2,//选中的元素
    //修改器类型
    '@:{enum#modifier.icon}': 1,//修改指示图标
    '@:{enum#modifier.size}': 2,//修改指示尺寸
    '@:{enum#modifier.width}': 2 << 1,//宽
    '@:{enum#modifier.height}': 2 << 2,//高
    '@:{enum#modifier.protate}': 2 << 3,//点旋转
    '@:{enum#modifier.rotate}': 2 << 4,//旋转
    '@:{enum#modifier.nomask}': 2 << 5,//无遮盖
    '@:{enum#modifier.text}': 2 << 6,//快捷文本输入
    '@:{enum#modifier.dblclick}': 2 << 7,//双击功能
    '@:{enum#modifier.dheight}': 2 << 8,//动态高度
    '@:{enum#modifier.sync.size}': 2 << 9,//修改元素的其中一个尺寸时(如宽)，同步另外的尺寸(如高)
    '@:{enum#modifier.selected.show.icon}': 2 << 10,//选中显示icon
};