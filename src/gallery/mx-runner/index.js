/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-runner/index",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("magix5");
let { toTry } = magix_1;
let setT = fn => setTimeout(fn, 16);
let cancelT = clearTimeout;
let setRAF = window.requestAnimationFrame || setT;
let cancelRAF = window.cancelAnimationFrame || cancelT;
let Now = Date.now;
let rafList = [], tList = [], rafTimerId, tTimerId;
let startRafWork = () => {
    if (!rafTimerId) {
        let run = () => {
            for (let i = 0, o, now; i < rafList.length; i++) {
                o = rafList[i];
                if (o.r) {
                    rafList.splice(i--, 1);
                }
                else {
                    now = Now();
                    if (now - o.n >= o.i) {
                        o.n = now;
                        toTry(o.f);
                    }
                }
            }
            if (!rafList.length) {
                cancelRAF(rafTimerId);
                rafTimerId = 0;
            }
            else {
                rafTimerId = setRAF(run);
            }
        };
        rafTimerId = setRAF(run);
    }
};
let startTimeoutWork = () => {
    if (!tTimerId) {
        let run = () => {
            for (let i = 0, o, now; i < tList.length; i++) {
                o = tList[i];
                if (o.r) {
                    tList.splice(i--, 1);
                }
                else {
                    now = Now();
                    if (now - o.n >= o.i) {
                        o.n = now;
                        toTry(o.f);
                    }
                }
            }
            if (!tList.length) {
                cancelT(tTimerId);
                tTimerId = 0;
            }
            else {
                tTimerId = setT(run);
            }
        };
        tTimerId = setT(run);
    }
};
module.exports= {
    '@:{task.add~rs}'(interval, fn) {
        rafList.push({
            i: interval || 15,
            f: fn,
            n: Now()
        });
        startRafWork();
    },
    '@:{task.remove~rs}'(fn) {
        for (let o, i = 0; i < rafList.length; i++) {
            o = rafList[i];
            if (!o.r && o.f == fn) {
                o.r = 1;
                o.f = '';
                break;
            }
        }
    },
    '@:{task.add.background~rs}'(interval, fn) {
        tList.push({
            i: interval || 15,
            f: fn,
            n: Now()
        });
        startTimeoutWork();
    },
    '@:{task.remove.background~rs}'(fn) {
        for (let o, i = 0; i < tList.length; i++) {
            o = tList[i];
            if (!o.r && o.f == fn) {
                o.r = 1;
                o.f = '';
                break;
            }
        }
    }
};

});