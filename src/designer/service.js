/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/51",["4e"],(require,exports,module)=>{


let magix_1 = require("4e");
let { Service, toUrl, config, guid } = magix_1;
/**
 * 提取错误和数据
 * @param response 响应数据
 * @param url 接口url
 * @returns 错误和数据
 */
let extractErrorAndData = (response, url) => {
    let error;
    let data;
    if (response.status == 1) {
        data = response.data;
    }
    else {
        error = response.message || `接口${url}错误`;
    }
    return {
        '_fw': error,
        '_fx': data
    };
};
/**
 * 使用jsonp向后端请求
 * @param sendUrl 请求地址
 * @param options 请求参数
 * @param callbackKey 回调字符串
 */
// let jsonp = (sendUrl, options, callbackKey = 'callback') => {
//     let doc = document;
//     let head = doc.head;
//     return new Promise<any>((resolve, reject) => {
//         let script = doc.createElement('script');
//         let key = guid('script_');
//         window[key] = r => {
//             clean();
//             resolve(r);
//         };
//         let clean = () => {
//             delete window[key];
//             head.removeChild(script);
//         };
//         script.onerror = e => {
//             clean();
//             reject(Error(sendUrl + '[script error]'));
//         };
//         let body = options && options.body || {};
//         body[callbackKey] = key;
//         sendUrl = toUrl(sendUrl, body);
//         script.src = sendUrl;
//         head.appendChild(script);
//     });
// };
/**
 * 使用fetch进行请求
 * @param sendUrl 请求地址
 * @param options 请求参数
 */
let send = (sendUrl, options) => {
    return fetch(sendUrl, options).then(res => {
        if (res.ok) {
            return res.json();
        }
        throw Error('Network response error');
    });
};
/**
 * 与后端接口交互对象
 */
let RDService = Service.extend((bag, callback) => {
    let method = bag.get('_fy') || 'GET';
    let query = bag.get('_fh');
    let body = bag.get('_fg');
    let url = bag.get('url');
    let options = {
        method,
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        }
    };
    let version = DEBUG ? Date.now() : config('version');
    if (!query) {
        query = {};
    }
    query.v = version;
    /**
     * query放url里，body放请求的body里，某些后端严格区分取参数时，从body里还是request里面取
     */
    if (query) {
        url = toUrl(url, query);
    }
    if (body) {
        options.body = body;
    }
    //如果需要jsonp，则把上面的jsonp函数解除注释，在这里根据情况调用send或jsonp函数即可
    //对于jsonp，只有get方法，没有post方法，所以在jsonp里，会把body中的参数拼接到url里，超长会被截断，这里需要注意
    //所以优先使用fetch方法进行跨域请求
    send(url, options).then(res => {
        let { '_fw': error, '_fx': data } = extractErrorAndData(res, url);
        if (error) {
            callback({
                message: error
            });
        }
        else {
            bag.set({
                data
            });
            //setTimeout(callback, 5e3);
            callback();
        }
    }).catch(ex => {
        callback({ message: ex.message });
    });
});
/**
 * service中只有2个约定的key:name和cache
 * name必须配置，指示接口的名称
 * cache如果配置，则指示该接口缓存多长时间(ms为单位)
 * 其它均可以自定义设置
 */
RDService.add([{
        name: '_fz',
        url: config('getImageUrl'),
        cache: 30 * 60 * 1000
    }, {
        name: '_fq',
        url: config('getFieldUrl'),
        cache: 30 * 60 * 1000
    }, {
        name: '_fA',
        cache: 30 * 60 * 1000
    }, {
        name: '_er',
        url: config('getTemplateUrl'),
        cache: 30 * 60 * 1000
    }, {
        name: '_ff',
        url: config('saveContentUrl'),
        '_fy': 'post'
    }, {
        name: '_ft',
        url: config('getContentUrl')
    }, {
        name: '_fB',
        '_fy': 'post'
    }]);
RDService['_fC'] = extractErrorAndData;
module.exports= RDService;

});