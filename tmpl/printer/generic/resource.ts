//资源加载器，对于页面加载完成就需要转成图片或pdf的情况下，需要等待图片等资源就绪后才能转换
import Magix from 'magix';
let { use, isFunction,mix } = Magix;
let loadProvider = file => {
    return new Promise<void>(resolve => {
        use<Function>('@:../../provider/' + file, async (provider) => {
            if (isFunction(provider)) {
                await provider();
            } else if (isFunction(provider['@:{load.library}'])) {
                await provider['@:{load.library}']();
            }
            resolve();
        });
    });
};
let loadScript = file => {
    return new Promise(resolve => {
        use('@:../../elements/' + file + '/index', resolve);
    });
};
let loadImage = src => {
    return new Promise<void>(resolve => {
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
    this['@:{locker}'] = {};
    this['@:{queue}'] = [];
};
mix(ResourcesLoader.prototype, {
    /**
     * 添加资源
     * @param type 资源类型
     * @param src 资源地址
     */
    '@:{add}'(type, src) {
        let key = type + '~' + src;
        let locker = this['@:{locker}'];
        let queue = this['@:{queue}'];
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
    '@:{load}'() {
        /**
         * 根据不同的资源进行相应的加载，目前只有图片和第三方组件需要进行资源加载
         */
        let promises = [];
        let queue = this['@:{queue}'];
        for (let q of queue) {
            if (q.type == '@:{provider}') {
                promises.push(loadProvider(q.src));
            } else if (q.type == '@:{script}') {
                promises.push(loadScript(q.src));
            } else {
                promises.push(loadImage(q.src));
            }
        }
        return Promise.all(promises);
    }
});

export default ResourcesLoader;