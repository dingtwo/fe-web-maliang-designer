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
  type: 'batch-qrcode',
  title: '@:{lang#elements.qrcode}',
  icon: '&#xe61c;',
  '@:{modifier}':
    Enum['@:{enum#modifier.size}'] |
    Enum['@:{enum#modifier.rotate}'] |
    Enum['@:{enum#modifier.nomask}'] |
    Enum['@:{enum#modifier.sync.size}'],
  '@:{allowed.to.hod}': {
    //只允许放设计区
    root: 1,
  },
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
      rotate: 0,
      width: Const['@:{const#to.unit}'](150),
      hspace: Const['@:{const#to.unit}'](30),
      vspace: Const['@:{const#to.unit}'](30),
      tfs: Const['@:{const#to.unit}'](14),
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
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      '@:{is.scale.and.unit.field}': 1,
      json: 1,
    },
    {
      tip: '@:{lang#props.y}',
      type: Props['@:{eprops#number}'],
      key: 'y',
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
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
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
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
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
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
      tip: '@:{lang#props.h.space}',
      type: Props['@:{eprops#number}'],
      json: 1,
      key: 'hspace',
      min: 0,
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      '@:{is.scale.and.unit.field}': 1,
      max: () => Const['@:{const#to.unit}'](100),
    },
    {
      tip: '@:{lang#props.v.space}',
      type: Props['@:{eprops#number}'],
      json: 1,
      key: 'vspace',
      min: 0,
      fixed: Const['@:{const#unit.fixed}'],
      step: Const['@:{const#unit.step}'],
      read: Transform['@:{transform#to.show.value}'],
      write: Transform['@:{transform#to.real.value}'],
      '@:{is.scale.and.unit.field}': 1,
      max: () => Const['@:{const#to.unit}'](100),
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
