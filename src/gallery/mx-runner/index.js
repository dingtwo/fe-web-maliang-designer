/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/5b/index",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("51");
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
    '_gD'(interval, fn) {
        rafList.push({
            i: interval || 15,
            f: fn,
            n: Now()
        });
        startRafWork();
    },
    '_gC'(fn) {
        for (let o, i = 0; i < rafList.length; i++) {
            o = rafList[i];
            if (!o.r && o.f == fn) {
                o.r = 1;
                o.f = '';
                break;
            }
        }
    },
    '_hx'(interval, fn) {
        tList.push({
            i: interval || 15,
            f: fn,
            n: Now()
        });
        startTimeoutWork();
    },
    '_hu'(fn) {
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