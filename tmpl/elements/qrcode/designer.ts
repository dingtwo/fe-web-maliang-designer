/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import Designer from '../normal';
let { config } = Magix;
export default Designer.extend({
  ctor() {
    this.set({
      view: '@:./dshow',
    });
  },
}).static({
  type: 'qrcode',
  title: '@:{lang#elements.qrcode}',
  icon: '&#xe61c;',
  '@:{modifier}':
    Enum['@:{enum#modifier.size}'] |
    Enum['@:{enum#modifier.rotate}'] |
    Enum['@:{enum#modifier.nomask}'] |
    Enum['@:{enum#modifier.sync.size}'],
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
  '@:{get.props}'(x, y) {
    return {
      height: Const['@:{const#to.unit}'](150),
      alpha: 1,
      x: Const['@:{const#to.unit}'](x),
      y: Const['@:{const#to.unit}'](y),
      tfs: Const['@:{const#to.unit}'](14),
      rotate: 0,
      width: Const['@:{const#to.unit}'](150),
      text: '',
      locked: false,
      help: 'github.com/xinglie/report-designer/issues/31',
      bind: {
        url: '',
        id: '',
        fields: [],
      },
    };
  },
  props: [
    {
      key: 'tfs',
      '@:{is.scale.and.unit.field}': 1,
    },
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
      min: () => Const['@:{const#to.unit}'](20),
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
      min: () => Const['@:{const#to.unit}'](20),
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
