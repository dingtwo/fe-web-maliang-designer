/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("78/7b/pager",[],(require,exports,module)=>{


/**
 * 填充页码器
 */
module.exports= (newElement, newPage, inHod, pagers, currentPage) => {
    pagers.push(newElement);
    newElement.props.ext._currentPage = currentPage + 1;
    if (!inHod) {
        newPage.push(newElement);
    }
};

});