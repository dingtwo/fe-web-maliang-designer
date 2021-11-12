/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import BarcodeProvider from '../../provider/barcode';
import TableContentConst from '../../provider/cell';
let { View, config, dispatch, mix } = Magix;
let PList = [
  {
    tip: '@:{lang#props.cell.content}',
    key: 'type',
    type: Props['@:{eprops#dropdown}'],
    items: [
      {
        text: '@:{lang#please.select}',
        value: '',
      },
      {
        text: '@:{lang#elements.text}',
        value: 'text',
      },
      {
        text: '@:{lang#elements.image}',
        value: 'image',
      },
      {
        text: '@:{lang#elements.barcode}',
        value: 'barcode',
      },
      {
        text: '@:{lang#elements.qrcode}',
        value: 'qrcode',
      },
    ],
  },
  {
    tip: '@:{lang#props.content.align}',
    type: Props['@:{eprops#align}'],
  },
  {
    tip: '@:{lang#props.paddint.top}',
    key: 'paddingTop',
    type: Props['@:{eprops#number}'],
    read: Transform['@:{transform#to.show.value}'],
    write: Transform['@:{transform#to.real.value}'],
    min: 0,
    fixed: Const['@:{const#unit.fixed}'],
    step: Const['@:{const#unit.step}'],
    max: () => Const['@:{const#to.unit}'](100),
  },
  {
    tip: '@:{lang#props.paddint.right}',
    key: 'paddingRight',
    type: Props['@:{eprops#number}'],
    read: Transform['@:{transform#to.show.value}'],
    write: Transform['@:{transform#to.real.value}'],
    min: 0,
    fixed: Const['@:{const#unit.fixed}'],
    step: Const['@:{const#unit.step}'],
    max: () => Const['@:{const#to.unit}'](100),
  },
  {
    tip: '@:{lang#props.paddint.bottom}',
    key: 'paddingBottom',
    type: Props['@:{eprops#number}'],
    read: Transform['@:{transform#to.show.value}'],
    write: Transform['@:{transform#to.real.value}'],
    min: 0,
    fixed: Const['@:{const#unit.fixed}'],
    step: Const['@:{const#unit.step}'],
    max: () => Const['@:{const#to.unit}'](100),
  },
  {
    tip: '@:{lang#props.paddint.left}',
    key: 'paddingLeft',
    type: Props['@:{eprops#number}'],
    read: Transform['@:{transform#to.show.value}'],
    write: Transform['@:{transform#to.real.value}'],
    min: 0,
    fixed: Const['@:{const#unit.fixed}'],
    step: Const['@:{const#unit.step}'],
    max: () => Const['@:{const#to.unit}'](100),
  },
  {
    tip: '@:{lang#props.alpha}',
    key: 'alpha',
    type: Props['@:{eprops#number}'],
    step: 0.1,
    fixed: 1,
    min: 0,
    max: 1,
  },
  {
    tip: '@:{lang#props.cell.background}',
    key: 'background',
    type: Props['@:{eprops#color}'],
    clear: true,
  },
  {
    tip: '@:{lang#props.text}',
    type: Props['@:{eprops#text.input}'],
    key: 'textContent',
    '@:{if.show}'(props) {
      return props.type == 'text' && !props.bindKey;
    },
  },
  {
    tip: '@:{lang#mx-gallery.text.auto.return}',
    type: Props['@:{eprops#boolean}'],
    key: 'textAutoReturn',
    '@:{if.show}'(props) {
      return props.type == 'text';
    },
  },
  {
    tip: '@:{lang#props.format}',
    type: Props['@:{eprops#format}'],
    key: 'textFormat',
    '@:{if.show}'(props) {
      return props.type == 'text' && props.bindKey;
    },
  },
  {
    tip: '@:{lang#props.font.size}',
    key: 'textFontsize',
    type: Props['@:{eprops#number}'],
    min: 0,
    fixed: Const['@:{const#unit.fixed}'],
    step: Const['@:{const#unit.step}'],
    read: Transform['@:{transform#to.show.value}'],
    write: Transform['@:{transform#to.real.value}'],
    '@:{if.show}'(props) {
      return props.type == 'text';
    },
  },
  {
    tip: '@:{lang#props.font.family}',
    key: 'textFontfamily',
    type: Props['@:{eprops#dropdown}'],
    items: Const['@:{const#font.family}'],
    '@:{if.show}'(props) {
      return props.type == 'text';
    },
  },
  {
    tip: '@:{lang#props.letter.spacing}',
    key: 'textLetterspacing',
    type: Props['@:{eprops#number}'],
    min: 0,
    fixed: Const['@:{const#unit.fixed}'],
    step: Const['@:{const#unit.step}'],
    read: Transform['@:{transform#to.show.value}'],
    write: Transform['@:{transform#to.real.value}'],
    '@:{if.show}'(props) {
      return props.type == 'text';
    },
  },
  {
    tip: '@:{lang#props.forecolor}',
    key: 'textForecolor',
    type: Props['@:{eprops#color}'],
    '@:{if.show}'(props) {
      return props.type == 'text';
    },
  },
  {
    tip: '@:{lang#props.font.style}',
    type: Props['@:{eprops#font.style}'],
    '@:{if.show}'(props) {
      return props.type == 'text';
    },
  },
  {
    tip: '@:{lang#props.image}',
    type: Props['@:{eprops#image}'],
    key: 'imageContent',
    '@:{if.show}'(props) {
      return props.type == 'image' && config('getImageUrl') && !props.bindKey;
    },
  },
  {
    tip: '@:{lang#props.rotate.x}',
    type: Props['@:{eprops#boolean}'],
    key: 'imageRotateX',
    '@:{if.show}'(props) {
      return props.type == 'image';
    },
  },
  {
    tip: '@:{lang#props.rotate.y}',
    type: Props['@:{eprops#boolean}'],
    key: 'imageRotateY',
    '@:{if.show}'(props) {
      return props.type == 'image';
    },
  } /*, {
    tip: '@:{lang#props.max.width}',
    type: Props["@:{eprops#number}"],
    key: 'imageMaxWidth',
    min: -1,
    '@:{if.show}'(props) {
        return props.type == 'image';
    }
}, {
    tip: '@:{lang#props.max.height}',
    type: Props["@:{eprops#number}"],
    key: 'imageMaxHeight',
    min: -1,
    '@:{if.show}'(props) {
        return props.type == 'image';
    }
}*/,
  {
    tip: '@:{lang#props.text.content}',
    type: Props['@:{eprops#text.area}'],
    key: 'barcodeContent',
    '@:{if.show}'(props) {
      return props.type == 'barcode' && !props.bindKey;
    },
  } /*, {
    tip: '@:{lang#props.width}',
    type: Props["@:{eprops#number}"],
    key: 'barcodeWidth',
    min: 0,
    '@:{if.show}'(props) {
        return props.type == 'barcode';
    }
}, {
    tip: '@:{lang#props.height}',
    key: 'barcodeHeight',
    type: Props["@:{eprops#number}"],
    min: 0,
    '@:{if.show}'(props) {
        return props.type == 'barcode';
    }
}*/,
  {
    tip: '@:{lang#props.barcode.format}',
    key: 'barcodeFormat',
    type: Props['@:{eprops#dropdown}'],
    items: BarcodeProvider['@:{types}'],
    '@:{if.show}'(props) {
      return props.type == 'barcode';
    },
  },
  {
    tip: '@:{lang#props.show.text}',
    key: 'barcodeShowText',
    type: Props['@:{eprops#boolean}'],
    '@:{if.show}'(props) {
      return props.type == 'barcode';
    },
  },
  {
    tip: '@:{lang#props.line.color}',
    key: 'barcodeColor',
    type: Props['@:{eprops#color}'],
    '@:{if.show}'(props) {
      return props.type == 'barcode';
    },
  },
  {
    tip: '@:{lang#props.line.width}',
    key: 'barcodeLineWidth',
    type: Props['@:{eprops#number}'],
    read: Transform['@:{transform#to.show.value}'],
    write: Transform['@:{transform#to.real.value}'],
    min: 1,
    max: 8,
    '@:{if.show}'(props) {
      return props.type == 'barcode';
    },
  },
  {
    tip: '@:{lang#props.text.content}',
    type: Props['@:{eprops#text.area}'],
    key: 'qrcodeContent',
    '@:{if.show}'(props) {
      return props.type == 'qrcode' && !props.bindKey;
    },
  } /*, {
    tip: '@:{lang#props.width}',
    type: Props["@:{eprops#number}"],
    key: 'qrcodeWidth',
    min: 0,
    '@:{if.show}'(props) {
        return props.type == 'qrcode';
    }
}, {
    tip: '@:{lang#props.height}',
    key: 'qrcodeHeight',
    type: Props["@:{eprops#number}"],
    min: 0,
    '@:{if.show}'(props) {
        return props.type == 'qrcode';
    }
}*/,
];
export default View.extend({
  tmpl: '@:./content.html',
  init() {
    this.set({
      list: PList,
      ptype: Props,
    });
  },
  assign(data) {
    let { props, disabled } = data;
    let { rows, focusRow, focusCol } = props;
    if (focusRow == -1) {
      focusRow = 0;
    }
    if (focusCol == -1) {
      focusCol = 0;
    }
    let cell = rows[focusRow].cols[focusCol];
    this.set({
      props,
      disabled,
      cell,
      rows,
      focusRow,
      focusCol,
    });
  },
  render() {
    this.digest();
  },
  '@:{update.prop}<input,change>'(e) {
    let cell = this.get('cell');
    let rows = this.get('rows');
    let { key, use, write, native } = e.params;
    if (use || native) {
      let v = native ? e.eventTarget[native] : e[use];
      if (write) {
        v = write(v, cell, e);
      }
      if (key == 'type') {
        let prev = cell[key];
        if (prev) {
          for (let p in cell) {
            if (p.startsWith(prev)) {
              delete cell[p];
            }
          }
        }
        let initial = TableContentConst[v];
        if (initial) {
          mix(cell, initial);
          if (cell.textFontsize) {
            cell.textFontsize = Const['@:{const#to.unit}'](cell.textFontsize);
          }
        }
      }
      if (key) {
        cell[key] = v;
      }
    }
    dispatch(this.root, 'change', {
      rows,
    });
  },
});
