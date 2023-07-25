let dest = '//test-img.freshfood.cn/20230621163902_function-plot.js';
let loadingList = [];
let state = 1;
let rejectMsg = 'can not load function-plot library';
export default () => {
    return new Promise<void>((resolve, reject) => {
        if (state & 2) {
            if (window.functionPlot) {
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
                    if (window.functionPlot) {
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
