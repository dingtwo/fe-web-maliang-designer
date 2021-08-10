/**
 * 填充页码器
 */
export default (newElement, newPage, inHod, pagers, currentPage) => {
    pagers.push(newElement);
    newElement.props.ext._currentPage = currentPage + 1;
    if (!inHod) {
        newPage.push(newElement);
    }
};