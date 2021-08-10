/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/datacenter",["4e","../4d/51"],(require,exports,module)=>{


/**
 * 带缓存的数据中心，在设计区时，避免多个元素或同一个元素反复的请求某一个接口
 */
let magix_1 = require("4e");
let service_1 = require("../4d/51");
let { Cache } = magix_1;
let DataCenter = new Cache(100, 40);
module.exports= api => {
    return new Promise(resolve => {
        let dest = DataCenter.get(api);
        if (!dest) {
            dest = {};
            DataCenter.set(api, dest);
        }
        if (dest['_mJ']) {
            resolve(dest);
        }
        else if (dest['_mK']) {
            dest['_mK'].push(resolve);
        }
        else {
            dest['_mK'] = [resolve];
            let s = new service_1();
            s.all({
                name: '_fA',
                url: api
            }, (err, bag) => {
                let list = bag.get('data');
                dest['_fx'] = list;
                dest['_mJ'] = 1;
                dest['_fw'] = err === null || err === void 0 ? void 0 : err.message;
                for (let resolve of dest['_mK']) {
                    resolve(dest);
                }
                delete dest['_mK'];
            });
        }
    });
};

});