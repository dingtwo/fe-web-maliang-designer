let dest = '//img.freshfood.cn/JsBarcode.all.js';
let loadingList = [];
let state = 1;
let rejectMsg = 'can not load barcode library';
export default {
    '@:{types}': [{ value: 'CODE128', text: 'CODE128' },//条形码类型
    { value: 'CODE128A', text: 'CODE128A' },
    { value: 'CODE128B', text: 'CODE128B' },
    { value: 'CODE128C', text: 'CODE128C' },
    { value: 'CODE39', text: 'CODE39' },
    { value: 'EAN2', text: 'EAN2' },
    { value: 'EAN5', text: 'EAN5' },
    { value: 'EAN8', text: 'EAN8' },
    { value: 'EAN13', text: 'EAN13' },
    { value: 'ITF', text: 'ITF' },
    { value: 'ITF14', text: 'ITF14' },
    { value: 'MSI', text: 'MSI' },
    { value: 'MSI10', text: 'MSI10' },
    { value: 'MSI11', text: 'MSI11' },
    { value: 'MSI1010', text: 'MSI1010' },
    { value: 'MSI1110', text: 'MSI1110' },
    { value: 'UPC', text: 'UPC' },
    { value: 'UPCE', text: 'UPCE' },
    { value: 'upce', text: 'UPC-E' },
    { value: 'codabar', text: 'codabar' },
    { value: 'pharmacode', text: 'pharmacode' },
    { value: 'GenericBarcode', text: 'GenericBarcode' }],
    '@:{load.library}'() {
        return new Promise<void>((resolve, reject) => {
            if (state & 2) {
                if (window.JsBarcode) {
                    resolve();
                } else {
                    reject(rejectMsg);
                }
            } else if (state & 4) {
                loadingList.push([resolve, reject]);
            } else {
                state |= 4;
                loadingList.push([resolve, reject]);
                let script = document.createElement('script');
                script.src = dest;
                script.onload = script.onerror = () => {
                    document.head.removeChild(script);
                    state |= 2;
                    for (let [res, rej] of loadingList) {
                        if (window.JsBarcode) {
                            res();
                        } else {
                            rej(rejectMsg);
                        }
                    }
                    loadingList.length = 0;
                };
                document.head.appendChild(script);
            }
        });
    }
};
