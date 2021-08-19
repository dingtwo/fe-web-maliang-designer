/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import BarcodeProvider from '../../provider/barcode';
import Designer from '../normal';
let { config } = Magix;
export default Designer.extend({
  ctor() {
    this.set({
      view: '@:./dshow',
    });
  },
}).static({
  type: 'barcode', //元素类型，程序识别使用，需要与文件夹同名
  title: '@:{lang#elements.barcode}', //元素显示的名称
  icon: '&#xe6c8;', //使用的icon
  //元素在设计器里，支持哪些修改操作。特指在设计区中能快捷修改的，非属性面板中的修改。
  '@:{modifier}':
    Enum['@:{enum#modifier.width}'] | //允许修改宽
    Enum['@:{enum#modifier.height}'] | //允许修改高
    Enum['@:{enum#modifier.rotate}'] | //允许旋转
    Enum['@:{enum#modifier.nomask}'], //是否使用一个di˝v盖在上面，默认使用一个div盖在元素上，主要是防止可设计元素内部的事件与设计器中的事件冲突
  //哪些属性参与移动，大部分元素只有x y参与移动，但对于svg元素，会有多个点参与移动
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
  //'@:{allowed.total.count}':3,
  //获取元素默认的属性
  '@:{get.props}'(x, y) {
    return {
      height: Const['@:{const#to.unit}'](80),
      alpha: 1,
      x: Const['@:{const#to.unit}'](x),
      y: Const['@:{const#to.unit}'](y),
      rotate: 0,
      width: Const['@:{const#to.unit}'](200),
      text: '',
      linewidth: 2,
      tfs: Const['@:{const#to.unit}'](14),
      color: '#000000',
      format: 'code128',
      showText: true,
      ow: 'github.com/lindell/JsBarcode',
      help: 'github.com/xinglie/report-designer/issues/31',
      locked: false,
      bind: {
        url: '',
        id: '',
        fields: [],
      },
    };
  },
  //属性面板中的控制列表
  props: [
    {
      key: 'tfs',
      '@:{is.scale.and.unit.field}': 1,
    },
    {
      tip: '@:{lang#props.x}', //名称
      type: Props['@:{eprops#number}'], //类型
      key: 'x', //属性中参与当前交互数据的key
      step: Const['@:{const#unit.step}'], //定义数值输入框按上下箭头时的步长
      fixed: Const['@:{const#unit.fixed}'], //定义数值输入框允许几位小数
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      '@:{is.scale.and.unit.field}': 1,
      json: 1, //最终从设计器获取数据时，是否序列化当前属性
    },
    {
      tip: '@:{lang#props.y}',
      type: Props['@:{eprops#number}'],
      key: 'y',
      step: Const['@:{const#unit.step}'],
      fixed: Const['@:{const#unit.fixed}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      '@:{is.scale.and.unit.field}': 1,
      json: 1,
    },
    {
      tip: '@:{lang#props.width}',
      type: Props['@:{eprops#number}'],
      key: 'width',
      min: () => Const['@:{const#to.unit}'](20),
      step: Const['@:{const#unit.step}'],
      fixed: Const['@:{const#unit.fixed}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      '@:{is.scale.and.unit.field}': 1,
      json: 1,
    },
    {
      tip: '@:{lang#props.height}',
      key: 'height',
      type: Props['@:{eprops#number}'],
      min: () => Const['@:{const#to.unit}'](20),
      step: Const['@:{const#unit.step}'],
      fixed: Const['@:{const#unit.fixed}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      '@:{is.scale.and.unit.field}': 1,
      json: 1,
    },
    {
      tip: '@:{lang#props.rotate}',
      type: Props['@:{eprops#number}'],
      key: 'rotate',
      min: -360,
      max: 360,
      json: 1,
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
      type: Props['@:{eprops#spliter}'],
      '@:{if.show}'(props) {
        return !props.bind.url;
      },
    },
    {
      tip: '@:{lang#props.text.content}',
      key: 'text',
      type: Props['@:{eprops#text.area}'],
      json: 1,
      '@:{if.show}'(props) {
        return !props.bind.url;
      },
    },
    {
      type: Props['@:{eprops#spliter}'],
      '@:{if.show}'(props) {
        return !props.text && config('getFieldUrl');
      },
    },
    {
      tip: '@:{lang#props.bind.fields}',
      key: 'bind',
      type: Props['@:{eprops#bind.field}'],
      json: 1,
      max: 1,
      '@:{if.show}'(props) {
        return !props.text && config('getFieldUrl');
      },
    },
    {
      type: Props['@:{eprops#spliter}'],
    },
    {
      tip: '@:{lang#props.barcode.format}',
      key: 'format',
      type: Props['@:{eprops#dropdown}'],
      items: BarcodeProvider['@:{types}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.show.text}',
      key: 'showText',
      type: Props['@:{eprops#boolean}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.line.color}',
      key: 'color',
      type: Props['@:{eprops#color}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.line.width}',
      key: 'linewidth',
      type: Props['@:{eprops#number}'],
      min: 1,
      max: 8,
      json: 1,
    },
    {
      type: Props['@:{eprops#spliter}'],
    },
    {
      tip: '@:{lang#props.official.website}',
      key: 'ow',
      type: Props['@:{eprops#link}'],
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
