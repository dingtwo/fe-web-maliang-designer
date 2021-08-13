/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/datacenter",["5c","../5b/5v"],(require,exports,module)=>{


/**
 * 带缓存的数据中心，在设计区时，避免多个元素或同一个元素反复的请求某一个接口
 */
let magix_1 = require("5c");
let service_1 = require("../5b/5v");
let { Cache } = magix_1;
let DataCenter = new Cache(100, 40);
module.exports= api => {
    return new Promise(resolve => {
        let dest = DataCenter.get(api);
        if (!dest) {
            dest = {};
            DataCenter.set(api, dest);
        }
        if (dest['_u7']) {
            resolve(dest);
        }
        else if (dest['_u8']) {
            dest['_u8'].push(resolve);
        }
        else {
            dest['_u8'] = [resolve];
            let s = new service_1();
            s.all({
                name: '_nY',
                url: api
            }, (err, bag) => {
                let list = bag.get('data');
                dest['_nV'] = list;
                dest['_u7'] = 1;
                dest['_nU'] = err === null || err === void 0 ? void 0 : err.message;
                for (let resolve of dest['_u8']) {
                    resolve(dest);
                }
                delete dest['_u8'];
            });
        }
    });
};

});