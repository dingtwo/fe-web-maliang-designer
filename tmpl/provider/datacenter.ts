/**
 * 带缓存的数据中心，在设计区时，避免多个元素或同一个元素反复的请求某一个接口
 */
import Magix from 'magix';
import Service from '../designer/service';
let { Cache } = Magix;
let DataCenter = new Cache(100, 40);
export default api => {
    return new Promise<{
        '@:{data}': any
        '@:{error}': string
    }>(resolve => {
        let dest = DataCenter.get(api);
        if (!dest) {
            dest = {};
            DataCenter.set(api, dest);
        }
        if (dest['@:{loaded}']) {
            resolve(dest);
        } else if (dest['@:{loading}']) {
            dest['@:{loading}'].push(resolve);
        } else {
            dest['@:{loading}'] = [resolve];
            let s = new Service();
            s.all({
                name: '@:{get.by.url}',
                url: api
            }, (err: { message: string }, bag) => {
                let list = bag.get('data');
                dest['@:{data}'] = list;
                dest['@:{loaded}'] = 1;
                dest['@:{error}'] = err?.message;
                for (let resolve of dest['@:{loading}']) {
                    resolve(dest);
                }
                delete dest['@:{loading}'];
            });
        }
    });
};