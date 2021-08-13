/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("printer/rds/index",[],(require,exports,module)=>{


let whites = {
    '127.0.0.1': 1,
    'localhost': 1
};
module.exports= {
    '@:{get.config~rs}'() {
        let config = {
            name: '',
            nc: 1,
            pt: 0,
            pl: 0,
            pr: 0,
            pb: 0,
            l: 'portrait',
            ts: false
        };
        try {
            let temp = JSON.parse(localStorage.getItem('rds.printer'));
            Object.assign(config, temp);
        }
        catch (_a) {
        }
        return config;
    },
    '@:{set.config~rs}'(config) {
        try {
            localStorage.setItem('rds.printer', JSON.stringify(config));
        }
        catch (_a) {
        }
    },
    '@:{format.ex.message~rs}'(ex) {
        let host = location.hostname; //.split('.').slice(-2).join('.');
        if (!whites[host]) {
            return host + '环境不支持RDS服务，进一步了解详情可以添加作者微信：qq84685009';
        }
        return `RDS服务异常[${ex.message || ex}]`;
    }
};

});