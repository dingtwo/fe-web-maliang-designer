/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import Designer from '../normal';
import Enum from '../../designer/enum';

let { config } = Magix;
export default Designer.extend({
  ctor() {
    this.set({
      view: '@:./dshow',
    });
  },
}).static({
  type: 'text',
  title: '@:{lang#elements.text}',
  icon: '&#xe6bc;',
  '@:{modifier}':
    Enum['@:{enum#modifier.width}'] |
    Enum['@:{enum#modifier.height}'] |
    Enum['@:{enum#modifier.rotate}'] |
    Enum['@:{enum#modifier.nomask}'] |
    Enum['@:{enum#modifier.text}'],
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
  '@:{can.show.text}'(props) {
    return !props.bind.url;
  },
  '@:{get.props}'(x, y) {
    return {
      background: '',
      height: Const['@:{const#to.unit}'](25),
      alpha: 1,
      text: '',
      //'@:{show.text}': 1,
      letterspacing: 0,
      autoReturn: false,
      x: Const['@:{const#to.unit}'](x),
      y: Const['@:{const#to.unit}'](y),
      rotate: 0,
      width: Const['@:{const#to.unit}'](200),
      forecolor: '#000000',
      fontsize: Const['@:{const#to.unit}'](14),
      fontfamily: 'Microsoft YaHei',
      locked: false,
      styleBold: false,
      styleUnderline: false,
      styleItalic: false,
      styleStrike: false,
      styleOverline: false,
      richtext: false,
      borderwidth: 0,
      bordercolor: '#000000',
      bordertype: 'solid',
      format: '',
      hpos: 'flex-start',
      vpos: 'flex-start',
      bind: {
        url: '',
        id: '',
        fields: [],
      },
      help: 'github.com/xinglie/report-designer/issues/31',
    };
  },
  props: [
    {
      tip: '@:{lang#props.x}',
      type: Props['@:{eprops#number}'],
      key: 'x',
      '@:{is.scale.and.unit.field}': 1,
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.y}',
      type: Props['@:{eprops#number}'],
      key: 'y',
      '@:{is.scale.and.unit.field}': 1,
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.width}',
      type: Props['@:{eprops#number}'],
      key: 'width',
      '@:{is.scale.and.unit.field}': 1,
      min: () => 0,
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.height}',
      key: 'height',
      '@:{is.scale.and.unit.field}': 1,
      type: Props['@:{eprops#number}'],
      min: () => 0,
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
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
      type: Props['@:{eprops#spliter}'],
      '@:{if.show}'(props) {
        return !props.bind.url;
      },
    },
    {
      tip: '@:{lang#props.text.content}',
      key: 'text',
      type: Props['@:{eprops#text.area}'],
      //'@:{dock.top}': 1,
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
      //'@:{dock.top}': 1,
      max: 1,
      '@:{if.show}'(props) {
        return !props.text && config('getFieldUrl');
      },
    },
    {
      tip: '@:{lang#props.format}',
      key: 'format',
      type: Props['@:{eprops#format}'],
      json: 1,
      '@:{if.show}'(props) {
        return props.bind.url;
      },
    },
    {
      type: Props['@:{eprops#spliter}'],
    },
    {
      tip: '@:{lang#mx-gallery.text.auto.return}',
      type: Props['@:{eprops#boolean}'],
      key: 'autoReturn',
      json: 1,
    },
    {
      tip: '@:{lang#props.richtext}',
      type: Props['@:{eprops#boolean}'],
      key: 'richtext',
      json: 1,
    },
    {
      tip: '@:{lang#props.font.size}',
      key: 'fontsize',
      type: Props['@:{eprops#number}'],
      min: 0,
      '@:{is.scale.and.unit.field}': 1,
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.font.family}',
      key: 'fontfamily',
      type: Props['@:{eprops#dropdown}'],
      items: Const['@:{const#font.family}'],
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
      tip: '@:{lang#props.letter.spacing}',
      key: 'letterspacing',
      type: Props['@:{eprops#number}'],
      min: 0,
      '@:{is.scale.and.unit.field}': 1,
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.background}',
      key: 'background',
      clear: true,
      alpha: true,
      type: Props['@:{eprops#color}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.forecolor}',
      key: 'forecolor',
      type: Props['@:{eprops#color}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.font.style}',
      type: Props['@:{eprops#font.style}'],
      '@:{json.encode}'(dest, props) {
        dest.styleBold = props.styleBold;
        dest.styleUnderline = props.styleUnderline;
        dest.styleItalic = props.styleItalic;
        dest.styleStrike = props.styleStrike;
        dest.styleOverline = props.styleOverline;
      },
    },
    {
      tip: '@:{lang#props.font.align}',
      type: Props['@:{eprops#align}'],
      '@:{json.encode}'(dest, props) {
        dest.hpos = props.hpos;
        dest.vpos = props.vpos;
      },
    },
    {
      type: Props['@:{eprops#spliter}'],
    },
    {
      tip: '@:{lang#props.border.width}',
      key: 'borderwidth',
      type: Props['@:{eprops#number}'],
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      min: 0,
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
