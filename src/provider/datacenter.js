/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5g/datacenter",["51","../50/5k"],(require,exports,module)=>{


/**
 * 带缓存的数据中心，在设计区时，避免多个元素或同一个元素反复的请求某一个接口
 */
let magix_1 = require("51");
let service_1 = require("../50/5k");
let { Cache } = magix_1;
let DataCenter = new Cache(100, 40);
module.exports= api => {
    return new Promise(resolve => {
        let dest = DataCenter.get(api);
        if (!dest) {
            dest = {};
            DataCenter.set(api, dest);
        }
        if (dest['_pl']) {
            resolve(dest);
        }
        else if (dest['_pm']) {
            dest['_pm'].push(resolve);
        }
        else {
            dest['_pm'] = [resolve];
            let s = new service_1();
            s.all({
                name: '_ib',
                url: api
            }, (err, bag) => {
                let list = bag.get('data');
                dest['_h8'] = list;
                dest['_pl'] = 1;
                dest['_h7'] = err === null || err === void 0 ? void 0 : err.message;
                for (let resolve of dest['_pm']) {
                    resolve(dest);
                }
                delete dest['_pm'];
            });
        }
    });
};

});