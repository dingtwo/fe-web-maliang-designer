/*
 * @Description:
 * @Author: zhanghao
 * @Date: 2022-05-25 12:12:53
 * @LastEditTime: 2023-06-21 16:07:52
 * @LastEditors: zhanghao
 */
let dest = '//test-img.freshfood.cn/20230621160453_underscore-umd-min.js';
let loadingList = [];
let state = 1;
let rejectMsg = 'can not load underscore library';
export default () => {
    return new Promise<void>((resolve, reject) => {
        if (state & 2) {
            if (window._) {
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
                    if (window._) {
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
