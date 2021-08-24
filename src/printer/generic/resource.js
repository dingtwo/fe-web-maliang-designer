/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("78/79/resource",["51"],(require,exports,module)=>{


//资源加载器，对于页面加载完成就需要转成图片或pdf的情况下，需要等待图片等资源就绪后才能转换
let magix_1 = require("51");
let { use, isFunction, mix } = magix_1;
let loadProvider = file => {
    return new Promise(resolve => {
        use("5g/" + file, async (provider) => {
            if (isFunction(provider)) {
                await provider();
            }
            else if (isFunction(provider['_jP'])) {
                await provider['_jP']();
            }
            resolve();
        });
    });
};
let loadScript = file => {
    return new Promise(resolve => {
        use("5m/" + file + '/index', resolve);
    });
};
let loadImage = src => {
    return new Promise(resolve => {
        let img = new Image();
        img.onload = img.onerror = () => {
            resolve();
        };
        img.src = src;
        if (img.complete) {
            resolve();
        }
    });
};
let ResourcesLoader = function () {
    this['_ph'] = {};
    this['_pi'] = [];
};
mix(ResourcesLoader.prototype, {
    /**
     * 添加资源
     * @param type 资源类型
     * @param src 资源地址
     */
    '_lU'(type, src) {
        let key = type + '~' + src;
        let locker = this['_ph'];
        let queue = this['_pi'];
        //同一类型的资源只需要加载一次，所以进行锁定判断
        if (locker[key] != 1) {
            locker[key] = 1;
            queue.push({
                type,
                src
            });
        }
    },
    /**
     * 加载资源
     */
    '_g5'() {
        /**
         * 根据不同的资源进行相应的加载，目前只有图片和第三方组件需要进行资源加载
         */
        let promises = [];
        let queue = this['_pi'];
        for (let q of queue) {
            if (q.type == '_pj') {
                promises.push(loadProvider(q.src));
            }
            else if (q.type == '_pk') {
                promises.push(loadScript(q.src));
            }
            else {
                promises.push(loadImage(q.src));
            }
        }
        return Promise.all(promises);
    }
});
module.exports= ResourcesLoader;

});