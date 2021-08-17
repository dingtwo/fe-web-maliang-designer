/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/service",["magix5"],(require,exports,module)=>{


let magix_1 = require("magix5");
let { Service, toUrl, config, guid } = magix_1;
/**
 * 提取错误和数据
 * @param response 响应数据
 * @param url 接口url
 * @returns 错误和数据
 */
let extractErrorAndData = ({ data: response, token }, url) => {
    let error;
    let data;
    if (response.status == 1 || response.code === 200000) {
        data = response.data;
    }
    else {
        console.log('异常信息', response.message);
        error = response.message || `接口${url}错误`;
    }
    return {
        '@:{error~rs}': error,
        '@:{data~rs}': data,
        '@:{token~rs}': token,
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
let reLogin = () => {
    /* 重新登陆 */
    let warning = false;
    if (!DEBUG) {
        window.location.href = `/?from=${encodeURIComponent(location.href)}`;
    }
};
/**
 * 使用fetch进行请求
 * @param sendUrl 请求地址
 * @param options 请求参数
 */
let send = (sendUrl, options) => {
    let token;
    try {
        token = JSON.parse(window.localStorage.getItem('login-token'));
    }
    catch (error) { }
    console.log('请求之前获取 token', token);
    if (token) {
        options.headers = {
            ...(options.headers || {}),
            'login-token': token,
        };
    }
    else {
        reLogin();
    }
    return fetch(sendUrl, options).then(async (res) => {
        if (res.ok) {
            return {
                data: await res.json(),
                token: res.headers.get('login-token'),
            };
        }
        throw Error('Network response error');
    });
};
/**
 * 与后端接口交互对象
 */
let RDService = Service.extend((bag, callback) => {
    let method = bag.get('@:{method~rs}') || 'GET';
    let query = bag.get('@:{query~rs}');
    let body = bag.get('@:{body~rs}');
    let url = bag.get('url');
    let token;
    try {
        token = JSON.parse(localStorage.getItem('login-token'));
    }
    catch (error) { }
    if (!token) {
        console.error('没有 token, 登录失效');
        reLogin();
    }
    let options = {
        method,
        // credentials: 'include',
        headers: {
            Accept: 'application/json',
            // 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Content-type': 'application/json;charset=utf-8',
            'login-token': token,
        },
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
    send(url, options)
        .then(res => {
        let { '@:{error~rs}': error, '@:{data~rs}': data, '@:{token~rs}': token, } = extractErrorAndData(res, url);
        console.log('响应', res);
        if (error) {
            callback({
                message: error,
            });
        }
        else {
            bag.set({
                data,
                token,
            });
            //setTimeout(callback, 5e3);
            callback();
        }
    })
        .catch(ex => {
        callback({ message: ex.message });
    });
});
/**
 * service中只有2个约定的key:name和cache
 * name必须配置，指示接口的名称
 * cache如果配置，则指示该接口缓存多长时间(ms为单位)
 * 其它均可以自定义设置
 */
RDService.add([
    {
        name: '@:{get.images~rs}',
        url: config('getImageUrl'),
        cache: 30 * 60 * 1000,
    },
    {
        name: '@:{get.fields~rs}',
        url: config('getFieldUrl'),
        cache: 30 * 60 * 1000,
    },
    {
        name: '@:{get.by.url~rs}',
        cache: 30 * 60 * 1000,
    },
    {
        name: '@:{get.templates~rs}',
        url: config('getTemplateUrl'),
        cache: 30 * 60 * 1000,
    },
    {
        name: '@:{save.content~rs}',
        url: config('saveContentUrl'),
        '@:{method~rs}': 'post',
    },
    {
        name: '@:{get.content~rs}',
        url: config('getContentUrl'),
    },
    {
        name: '@:{post.by.url~rs}',
        '@:{method~rs}': 'post',
    },
    {
        name: '@:{post.login~rs}',
        '@:{method~rs}': 'post',
        url: 'http://10.252.192.35:8000/ucenter/login/web',
    },
]);
RDService['@:{extract.error.and.data~rs}'] = extractErrorAndData;
module.exports= RDService;

});