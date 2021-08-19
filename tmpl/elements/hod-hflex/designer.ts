/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import Box from '../../provider/cell';
import Normal from '../normal';
let transformFields = [
  'width',
  'height',
  'borderLeftWidth',
  'borderTopWidth',
  'borderBottomWidth',
  'borderRightWidth',
];
export default Normal.extend({
  ctor() {
    this.set({
      view: '@:./dshow',
    });
  },
}).static({
  type: 'hod-hflex',
  as: Enum['@:{enum#as.hod}'],
  title: '@:{lang#elements.h-flexbox}',
  icon: '&#xebd7;',
  '@:{modifier}': Enum['@:{enum#modifier.icon}'] | Enum['@:{enum#modifier.nomask}'],
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
  '@:{update.props}'(props) {
    let { rows } = props;
    let height = 0,
      width = 0;
    for (let row of rows) {
      let w = 0;
      for (let col of row.cols) {
        w += col.width;
      }
      if (w > width) {
        width = w;
      }
      height += row.height;
    }
    props.width = width;
    props.height = height;
    // if (old) {
    //     let newRotatedRect=Transform['@:{transform#rotate.rect}'](props);
    //     let n = newRotatedRect['@:{point}'][0];
    //     props.x += old.x - n.x;
    //     props.y += old.y - n.y;
    // }
  },
  '@:{get.props}'(x, y) {
    let borderWidth = Const['@:{const#to.unit}'](1);
    // let elementsMap = State.get<Report.StageElementCtrlMapObject>('@:{global#stage.elements.map}');
    // let textType = 'text';
    // let textCtrl = elementsMap[textType];
    // let textElement = {
    //     id: guid(textType),
    //     type: textType,
    //     ctrl: textCtrl,
    //     props: textCtrl['@:{get.props}'](10, 10)
    // };
    // textElement.props.text = 'abc';
    // textElement.props.ename = '文本';
    return {
      x: Const['@:{const#to.unit}'](x),
      y: Const['@:{const#to.unit}'](y),
      //rotate: 0,
      alpha: 1,
      focusRow: -1,
      focusCol: -1,
      help: '//github.com/xinglie/report-designer/issues/12',
      rows: [
        {
          height: Const['@:{const#to.unit}'](Box['@:{default.height}']),
          cols: [
            {
              width: Const['@:{const#to.unit}'](Box['@:{default.width}']),
              elements: [
                //textElement
              ],
              borderLeftStyle: 'solid',
              borderLeftWidth: borderWidth,
              borderLeftTopRadius: 0,
              borderRightTopRadius: 0,
              borderLeftBottomRadius: 0,
              borderRightBottomRadius: 0,
              borderLeftColor: '#000000',
              borderTopStyle: 'solid',
              borderTopWidth: borderWidth,
              borderTopColor: '#000000',
              borderRightStyle: 'solid',
              borderRightWidth: borderWidth,
              borderRightColor: '#000000',
              borderBottomStyle: 'solid',
              borderBottomWidth: borderWidth,
              borderBottomColor: '#000000',
            },
          ],
        },
      ],
      locked: false,
    };
  },
  props: [
    {
      key: 'rows',
      '@:{json.encode}'(dest, { rows }) {
        Transform['@:{transform#json.encode.cells}'](dest, rows, transformFields);
      },
      '@:{unit.convert}'({ rows }, toUnit) {
        Transform['@:{transform#unit.convert.cells}'](rows, toUnit, transformFields);
      },
      '@:{stage.scale}'(props, step, dest) {
        Transform['@:{transform#stage.scale.cells}'](props, step, transformFields, dest);
      },
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
      key: 'width',
      read: Transform['@:{transform#to.show.value}'],
      type: Props['@:{eprops#label}'],
      json: 1,
    },
    {
      tip: '@:{lang#props.height}',
      key: 'height',
      read: Transform['@:{transform#to.show.value}'],
      type: Props['@:{eprops#label}'],
      json: 1,
    } /*, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }*/,
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
        return props.focusRow != -1 && props.focusCol != -1;
      },
    },
    {
      tip: '@:{lang#props.cell.size}',
      type: Props['@:{eprops#h.cell.size}'],
      '@:{dock.top}': 1,
      '@:{if.show}'(props) {
        return props.focusRow != -1 && props.focusCol != -1;
      },
    },
    {
      tip: '@:{lang#props.cell.operate}',
      type: Props['@:{eprops#h.cell.operate}'],
      '@:{dock.top}': 1,
      '@:{if.show}'(props) {
        return props.focusRow != -1 && props.focusCol != -1;
      },
    },
    {
      type: Props['@:{eprops#cell.style}'],
      '@:{if.show}'(props) {
        return props.focusRow != -1 && props.focusCol != -1;
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
