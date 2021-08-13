/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("7j/7m/common",["5c"],(require,exports,module)=>{


let magix_1 = require("5c");
let { isArray } = magix_1;
/**
 * 填充普通元素数据
 * @param element 元素描述json对象
*/
module.exports= (dataCenter, resLoader, element, newPage, inHod) => {
    let { props } = element;
    let { bind } = props;
    if (bind.url &&
        !bind._tip &&
        !bind._data) {
        let { '_nU': err, '_nV': data } = dataCenter[bind.url];
        if (err) {
            bind._tip = err;
        }
        else {
            bind._data = data;
        }
    }
    if ( /*element.type == 'image' ||*/element.type == 'repeat') {
        let image = props.image;
        if (bind._data) {
            let src = bind._data;
            if (isArray(src)) {
                src = src[0];
            }
            let bindField = bind.fields[0];
            image = src[bindField.id];
        }
        resLoader['_rF']('_vC', image);
    }
    if (!inHod) {
        newPage.push(element);
    }
};

});