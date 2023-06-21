/*
 * @Description:
 * @Author: zhanghao
 * @Date: 2022-05-25 12:12:53
 * @LastEditTime: 2023-06-21 16:56:33
 * @LastEditors: zhanghao
 */
import Runner from '../gallery/mx-runner/index';
let loadingList = [];
let state = 1;
let rejectMsg = 'can not load luckysheet library';
// let base = 'https://cdn.jsdelivr.net/npm/luckysheet/dist/';
// let preloads = [
//     base + 'plugins/css/pluginsCss.css',
//     base + 'plugins/plugins.css',
//     base + 'css/luckysheet.css',
//     base + 'assets/iconfont/iconfont.css',
//     base + 'plugins/js/plugin.js'
// ];
let preloads = [
  'http://test-img.freshfood.cn/20230621163904_pluginsCss.css',
  'http://test-img.freshfood.cn/20230621163904_plugins.css',
  'http://test-img.freshfood.cn/20230621163903_luckysheet.css',
  'http://test-img.freshfood.cn/20230621163903_iconfont.css',
  'test-img.freshfood.cn/20230621163903_plugin.js'
]
// let main = base + 'luckysheet.umd.js';
let main = 'http://test-img.freshfood.cn/20230621163903_luckysheet.umd.js'
let loadResource = src => {
    return new Promise<void>(resolve => {
        let css = src.endsWith('css'),
            proxy;
        if (css) {
            proxy = document.createElement('link');
            proxy.href = src;
            proxy.rel = 'stylesheet';
            document.head.appendChild(proxy);
            let time = Date.now();
            let check = () => {
                let sheet = proxy.sheet;
                let isLoaded = 0;
                try {
                    if (sheet) {
                        isLoaded = 1;
                    }
                } catch {

                }
                if (Date.now() - time > 2e3) {
                    isLoaded = 1;
                }
                if (isLoaded) {
                    Runner["@:{task.remove}"](check);
                    resolve();
                }
            };
            Runner["@:{task.add}"](30, check);
        } else {
            let proxy = document.createElement('script');
            proxy.onload = proxy.onerror = () => {
                document.head.removeChild(proxy);
                resolve();
            };
            proxy.src = src;
            document.head.appendChild(proxy);
        }
    });
};
export default () => {
    return new Promise<void>((resolve, reject) => {
        if (state & 2) {
            if (window.luckysheet) {
                resolve();
            } else {
                reject(rejectMsg);
            }
        } else if (state & 4) {
            loadingList.push([resolve, reject]);
        } else {
            state |= 4;
            loadingList.push([resolve, reject]);
            let promises = [];
            for (let src of preloads) {
                promises.push(loadResource(src));
            }
            Promise.all(promises).then(() => loadResource(main)).then(() => {
                state |= 2;
                for (let [res, rej] of loadingList) {
                    if (window.luckysheet) {
                        res();
                    } else {
                        rej(rejectMsg);
                    }
                }
                loadingList.length = 0;
            }).catch(reject);
        }
    });
};
