/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import BarcodeProvider from '../../provider/barcode';
import TableContentConst from '../../provider/cell';
import TableProvider from '../../provider/table';
let { View, dispatch, config, mix } = Magix;
let PList = [{
    tip: '@:{lang#props.cell.content}',
    key: 'type',
    type: Props["@:{eprops#dropdown}"],
    items: [{
        text: '@:{lang#please.select}',
        value: ''
    }, {
        text: '@:{lang#elements.text}',
        value: 'text'
    }, {
        text: '@:{lang#elements.image}',
        value: 'image'
    }, {
        text: '@:{lang#elements.barcode}',
        value: 'barcode'
    }, {
        text: '@:{lang#elements.qrcode}',
        value: 'qrcode'
    }, {
        text: '@:{lang#elements.form.input}',
        value: 'input'
    }, {
        text: '@:{lang#elements.form.dropdown}',
        value: 'dropdown'
    }],
    omit: 1,
    '@:{if.show}'(cell, props) {
        let { focusRow, rows } = props;
        TableProvider["@:{table.provider#add.ext.meta}"](props, true);
        let ri = 0;
        let totalRowIndex = -1;
        for (let row of rows) {
            if (row.total) {
                totalRowIndex = ri;
            }
            ri++;
        }
        return focusRow != totalRowIndex;
    }
}, {
    tip: '@:{lang#props.cell.compute}',
    key: 'type',
    type: Props["@:{eprops#dropdown}"],
    items: [{
        text: '@:{lang#cell.static.text}',
        value: 'text'
    }, {
        text: '@:{lang#cell.sum}',
        value: 'sum'
    }, {
        text: '@:{lang#cell.avg}',
        value: 'avg'
    }, {
        text: '@:{lang#cell.custom}',
        value: 'custom'
    }],
    omit: 0,
    '@:{if.show}'(cell, props) {
        let { focusRow, rows } = props;
        TableProvider["@:{table.provider#add.ext.meta}"](props, true);
        let ri = 0;
        let totalRowIndex = -1;
        for (let row of rows) {
            if (row.total) {
                totalRowIndex = ri;
            }
            ri++;
        }
        return focusRow == totalRowIndex;
    }
}, {
    tip: '@:{lang#props.content.align}',
    type: Props["@:{eprops#align}"],
    '@:{if.show}'(cell) {
        return cell.type != 'input' && cell.type != 'dropdown';
    }
}, {
    tip: '@:{lang#props.text.align}',
    key: 'inputTextAlign',
    type: Props["@:{eprops#text.align}"],
    '@:{if.show}'(cell) {
        return cell.type == 'input'
    }
}, {
    tip: '@:{lang#props.paddint.top}',
    key: 'paddingTop',
    type: Props["@:{eprops#number}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    min: 0,
    fixed: Const["@:{const#unit.fixed}"],
    step: Const["@:{const#unit.step}"],
    max: () => Const["@:{const#to.unit}"](100)
}, {
    tip: '@:{lang#props.paddint.right}',
    key: 'paddingRight',
    type: Props["@:{eprops#number}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    min: 0,
    fixed: Const["@:{const#unit.fixed}"],
    step: Const["@:{const#unit.step}"],
    max: () => Const["@:{const#to.unit}"](100)
}, {
    tip: '@:{lang#props.paddint.bottom}',
    key: 'paddingBottom',
    type: Props["@:{eprops#number}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    min: 0,
    fixed: Const["@:{const#unit.fixed}"],
    step: Const["@:{const#unit.step}"],
    max: () => Const["@:{const#to.unit}"](100)
}, {
    tip: '@:{lang#props.paddint.left}',
    key: 'paddingLeft',
    type: Props["@:{eprops#number}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    min: 0,
    fixed: Const["@:{const#unit.fixed}"],
    step: Const["@:{const#unit.step}"],
    max: () => Const["@:{const#to.unit}"](100)
}, {
    tip: '@:{lang#props.alpha}',
    key: 'alpha',
    type: Props["@:{eprops#number}"],
    step: 0.1,
    fixed: 1,
    min: 0,
    max: 1
}, {
    tip: '@:{lang#props.cell.background}',
    key: 'background',
    type: Props["@:{eprops#color}"],
    clear: true,
}, {
    tip: '@:{lang#props.text}',
    type: Props["@:{eprops#text.input}"],
    key: 'textContent',
    '@:{if.show}'(cell, props) {
        TableProvider["@:{table.provider#add.ext.meta}"](props, true);
        return (cell.textFontsize != null) && cell.type == 'text';
    }
}, {
    tip: '@:{lang#props.format}',
    type: Props["@:{eprops#format}"],
    key: 'textFormat',
    '@:{if.show}'(cell, props) {
        //console.log(cell);
        let { focusRow, rows } = props;
        TableProvider["@:{table.provider#add.ext.meta}"](props, true);
        let ri = 0;
        let totalRowIndex = -1;
        for (let row of rows) {
            if (row.total) {
                totalRowIndex = ri;
                break;
            }
            ri++;
        }
        return (focusRow == totalRowIndex &&
            (cell.type == 'sum' ||
                cell.type == 'avg'))
    }
}, {
    tip: '@:{lang#props.format.fx}',
    type: Props["@:{eprops#format.fx}"],
    key: 'textFormat',
    '@:{if.show}'(cell) {
        return cell.type == 'custom';
    }
}, {
    tip: '@:{lang#props.font.size}',
    key: 'textFontsize',
    type: Props["@:{eprops#number}"],
    min: 0,
    fixed: Const["@:{const#unit.fixed}"],
    step: Const["@:{const#unit.step}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    '@:{if.show}'(props) {
        return props.textFontsize != null;
    }
}, {
    tip: '@:{lang#props.font.family}',
    key: 'textFontfamily',
    type: Props["@:{eprops#dropdown}"],
    items: Const["@:{const#font.family}"],
    '@:{if.show}'(props) {
        return props.textFontsize != null;
    }
}, {
    tip: '@:{lang#props.letter.spacing}',
    key: 'textLetterspacing',
    type: Props["@:{eprops#number}"],
    min: 0,
    fixed: Const["@:{const#unit.fixed}"],
    step: Const["@:{const#unit.step}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    '@:{if.show}'(props) {
        return props.textFontsize != null;
    }
}, {
    tip: '@:{lang#props.forecolor}',
    key: 'textForecolor',
    type: Props["@:{eprops#color}"],
    '@:{if.show}'(props) {
        return props.textFontsize != null;
    }
}, {
    tip: '@:{lang#props.font.style}',
    type: Props["@:{eprops#font.style}"],
    '@:{if.show}'(props) {
        return props.textFontsize != null;
    }
}, {
    tip: '@:{lang#props.image}',
    type: Props["@:{eprops#image}"],
    key: 'imageContent',
    '@:{if.show}'(cell) {
        return config('getImageUrl') && cell.type == 'image';
    }
}, {
    tip: '@:{lang#props.rotate.x}',
    type: Props["@:{eprops#boolean}"],
    key: 'imageRotateX',
    '@:{if.show}'(props) {
        return props.type == 'image';
    }
}, {
    tip: '@:{lang#props.rotate.y}',
    type: Props["@:{eprops#boolean}"],
    key: 'imageRotateY',
    '@:{if.show}'(props) {
        return props.type == 'image';
    }
}, {
    tip: '@:{lang#props.text.content}',
    type: Props["@:{eprops#text.area}"],
    key: 'barcodeContent',
    '@:{if.show}'(cell) {
        return cell.type == 'barcode';
    }
}, {
    tip: '@:{lang#props.barcode.format}',
    key: 'barcodeFormat',
    type: Props["@:{eprops#dropdown}"],
    items: BarcodeProvider["@:{types}"],
    '@:{if.show}'(props) {
        return props.type == 'barcode';
    }
}, {
    tip: '@:{lang#props.show.text}',
    key: 'barcodeShowText',
    type: Props["@:{eprops#boolean}"],
    '@:{if.show}'(props) {
        return props.type == 'barcode';
    }
}, {
    tip: '@:{lang#props.line.color}',
    key: 'barcodeColor',
    type: Props["@:{eprops#color}"],
    '@:{if.show}'(props) {
        return props.type == 'barcode';
    }
}, {
    tip: '@:{lang#props.line.width}',
    key: 'barcodeLineWidth',
    type: Props["@:{eprops#number}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    min: 1,
    max: 8,
    '@:{if.show}'(props) {
        return props.type == 'barcode';
    }
}, {
    tip: '@:{lang#props.text.content}',
    type: Props["@:{eprops#text.area}"],
    key: 'qrcodeContent',
    '@:{if.show}'(cell) {
        return cell.type == 'qrcode';
    }
}, {
    tip: '@:{lang#props.placeholder}',
    key: 'inputPlaceholder',
    type: Props["@:{eprops#text.input}"],
    '@:{if.show}'(props) {
        return props.type == 'input';
    }
}, {
    tip: '@:{lang#props.default.text}',
    key: 'inputText',
    type({ inputMultiline }) {
        return inputMultiline ? Props['@:{eprops#text.area}'] : Props["@:{eprops#text.input}"];
    },
    '@:{is.dynamic.type}': 1,
    '@:{if.show}'(props) {
        return props.type == 'input';
    }
}, {
    tip: '@:{lang#props.extend.mark}',
    key: 'inputMarkAs',
    type: Props["@:{eprops#text.input}"],
    '@:{if.show}'(props) {
        return props.type == 'input';
    }
}, {
    tip: '@:{lang#props.extend.class.name}',
    key: 'inputClassName',
    type: Props["@:{eprops#text.input}"],
    '@:{if.show}'(props) {
        return props.type == 'input';
    }
}, {
    tip: '@:{lang#props.element.name}',
    key: 'inputName',
    type: Props["@:{eprops#text.input}"],
    '@:{if.show}'(props) {
        return props.type == 'input';
    }
}, {
    tip: '@:{lang#props.multiline}',
    key: 'inputMultiline',
    type: Props["@:{eprops#boolean}"],
    '@:{if.show}'(cell) {
        return cell.type == 'input'
    }
}, {
    tip: '@:{lang#props.font.size}',
    key: 'inputFontsize',
    type: Props["@:{eprops#number}"],
    min: 0,
    fixed: Const["@:{const#unit.fixed}"],
    step: Const["@:{const#unit.step}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    '@:{if.show}'(props) {
        return props.type == 'input';
    }
}, {
    tip: '@:{lang#props.font.family}',
    key: 'inputFontfamily',
    type: Props["@:{eprops#dropdown}"],
    items: Const["@:{const#font.family}"],
    '@:{if.show}'(props) {
        return props.type == 'input';
    }
}, {
    tip: '@:{lang#props.letter.spacing}',
    key: 'inputLetterspacing',
    type: Props["@:{eprops#number}"],
    min: 0,
    fixed: Const["@:{const#unit.fixed}"],
    step: Const["@:{const#unit.step}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    '@:{if.show}'(props) {
        return props.type == 'input';
    }
}, {
    tip: '@:{lang#props.forecolor}',
    key: 'inputForecolor',
    type: Props["@:{eprops#color}"],
    '@:{if.show}'(props) {
        return props.type == 'input';
    }
}, {
    tip: '@:{lang#props.extend.mark}',
    key: 'dropdownMarkAs',
    type: Props["@:{eprops#text.input}"],
    '@:{if.show}'(props) {
        return props.type == 'dropdown';
    }
}, {
    tip: '@:{lang#props.extend.class.name}',
    key: 'dropdownClassName',
    type: Props["@:{eprops#text.input}"],
    '@:{if.show}'(props) {
        return props.type == 'dropdown';
    }
}, {
    tip: '@:{lang#props.element.name}',
    key: 'dropdownName',
    type: Props["@:{eprops#text.input}"],
    '@:{if.show}'(props) {
        return props.type == 'dropdown';
    }
}, {
    tip: '@:{lang#props.font.size}',
    key: 'dropdownFontsize',
    type: Props["@:{eprops#number}"],
    min: 0,
    fixed: Const["@:{const#unit.fixed}"],
    step: Const["@:{const#unit.step}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    '@:{if.show}'(props) {
        return props.type == 'dropdown';
    }
}, {
    tip: '@:{lang#props.font.family}',
    key: 'dropdownFontfamily',
    type: Props["@:{eprops#dropdown}"],
    items: Const["@:{const#font.family}"],
    '@:{if.show}'(props) {
        return props.type == 'dropdown';
    }
}, {
    tip: '@:{lang#props.letter.spacing}',
    key: 'dropdownLetterspacing',
    type: Props["@:{eprops#number}"],
    min: 0,
    fixed: Const["@:{const#unit.fixed}"],
    step: Const["@:{const#unit.step}"],
    read: Transform["@:{transform#to.show.value}"],
    write: Transform["@:{transform#to.real.value}"],
    '@:{if.show}'(props) {
        return props.type == 'dropdown';
    }
}, {
    tip: '@:{lang#props.forecolor}',
    key: 'dropdownForecolor',
    type: Props["@:{eprops#color}"],
    '@:{if.show}'(props) {
        return props.type == 'dropdown';
    }
}, {
    tip: '@:{lang#props.multile.selected}',
    key: 'dropdownMultipleSelect',
    type: Props["@:{eprops#boolean}"],
    '@:{if.show}'(cell) {
        return cell.type == 'dropdown'
    },
    write(v, props) {
        if (!v) {
            let { dropdownItems } = props;
            let findSelect;
            for (let e of dropdownItems) {
                if (e.checked) {
                    if (findSelect) {
                        e.checked = false;
                    } else {
                        findSelect = 1;
                    }
                }
            }
            if (!findSelect) {
                dropdownItems[0].checked = true;
            }
        }
        return v;
    }
}, {
    type: Props['@:{eprops#spliter}']
}, {
    key: 'dropdownItems',
    type: Props['@:{eprops#form.items}'],
    mutual(props) {
        return props.dropdownMultipleSelect;
    },
    '@:{if.show}'(props) {
        return props.type == 'dropdown';
    }
},];
export default View.extend({
    tmpl: '@:./content.html',
    init() {
        this.set({
            list: PList,
            ptype: Props
        });
    },
    assign(data) {
        let { props, disabled } = data;
        let { rows, focusRow, focusCol } = props;
        if (focusRow < 0) {
            focusRow = 0;
        }
        if (focusCol < 0) {
            focusCol = 0;
        }
        let cell = rows[focusRow].cols[focusCol];
        this.set({
            props,
            disabled,
            cell,
            rows,
            focusRow,
            focusCol
        });
    },
    render() {
        this.digest();
    },
    '@:{update.prop}<input,change>'(e) {
        let cell = this.get('cell');
        let rows = this.get('rows');
        let { key, use, write, native, omit } = e.params;
        if (use || native) {
            let v = native ? e.eventTarget[native] : e[use];
            if (write) {
                v = write(v, cell, e);
            }
            if (key == 'type') {
                let prev = cell[key];
                if (prev &&
                    omit) {
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
                if (v == 'custom' ||
                    prev == 'custom') {
                    cell.textFormat = '';
                }
            }
            if (key) {
                cell[key] = v;
            }
        }
        dispatch(this.root, 'change', {
            rows
        });
    }
});