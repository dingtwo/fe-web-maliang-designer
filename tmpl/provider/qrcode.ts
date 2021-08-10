let dest = '//unpkg.com/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js';
let loadingList = [];
let state = 1;
let rejectMsg = 'can not load qrcode library';
export default () => {
    return new Promise<void>((resolve, reject) => {
        if (state & 2) {
            if (window.QRCode) {
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
                    if (window.QRCode) {
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
};