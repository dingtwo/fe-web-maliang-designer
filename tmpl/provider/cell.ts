/**
 * 提供格子所需要的默认属性
 */
import Magix from 'magix';
let { guid } = Magix;
export default {
    '@:{default.width}': 300,
    '@:{default.height}': 100,
    '@:{min.width}': 20,
    '@:{min.height}': 20,
    text: {
        textLetterspacing: 0,
        textForecolor: '#000000',
        textFontsize: 14,
        textFontfamily: 'Microsoft YaHei',
        textStyleBold: false,
        textStyleUnderline: false,
        textStyleItalic: false,
        textStyleStrike: false,
        textAutoReturn: true,
        textContent: '',
        textFormat: ''
    },
    image: {
        // imageMaxWidth: -1,
        // imageMaxHeight: -1,
        imageContent: '',
    },
    barcode: {
        // barcodeWidth: 200,
        // barcodeHeight: 80,
        barcodeLineWidth: 2,
        barcodeColor: '#000000',
        barcodeFormat: 'code128',
        barcodeShowText: true,
        barcodeContent: ''
    },
    qrcode: {
        // qrcodeWidth: 150,
        // qrcodeHeight: 150,
        qrcodeContent: ''
    },
    input: {
        inputText: '',
        inputPlaceholder: '',
        inputMarkAs: '',
        inputClassName: '',
        inputName: '',
        inputMultiline: false,
        inputFontsize: 14,
        inputFontfamily: 'Microsoft YaHei',
        inputLetterspacing: 0,
        inputForecolor: '#000000',
        inputTextAlign: 'left'
    },
    dropdown: {
        dropdownName: guid('rd-dropdown-'),
        dropdownMarkAs: '',
        dropdownClassName: '',
        dropdownMultipleSelect: false,
        dropdownLetterspacing: 0,
        dropdownItems: [{
            text: '选项',
            disabled: false,
            checked: true,
            value: 'dropdown'
        }],
        dropdownForecolor: '#000000',
        dropdownFontsize: 14,
        dropdownFontfamily: 'Microsoft YaHei',
    }
};