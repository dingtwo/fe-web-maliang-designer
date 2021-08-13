/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("provider/datacenter",["magix5","../designer/service"],(require,exports,module)=>{


/**
 * 带缓存的数据中心，在设计区时，避免多个元素或同一个元素反复的请求某一个接口
 */
let magix_1 = require("magix5");
let service_1 = require("../designer/service");
let { Cache } = magix_1;
let DataCenter = new Cache(100, 40);
module.exports= api => {
    return new Promise(resolve => {
        let dest = DataCenter.get(api);
        if (!dest) {
            dest = {};
            DataCenter.set(api, dest);
        }
        if (dest['@:{loaded~rs}']) {
            resolve(dest);
        }
        else if (dest['@:{loading~rs}']) {
            dest['@:{loading~rs}'].push(resolve);
        }
        else {
            dest['@:{loading~rs}'] = [resolve];
            let s = new service_1();
            s.all({
                name: '@:{get.by.url~rs}',
                url: api
            }, (err, bag) => {
                let list = bag.get('data');
                dest['@:{data~rs}'] = list;
                dest['@:{loaded~rs}'] = 1;
                dest['@:{error~rs}'] = err === null || err === void 0 ? void 0 : err.message;
                for (let resolve of dest['@:{loading~rs}']) {
                    resolve(dest);
                }
                delete dest['@:{loading~rs}'];
            });
        }
    });
};

});