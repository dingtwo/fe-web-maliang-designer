/**
 * 填充页码器
 */
let preEndPage = 1;
let preIndex = undefined;

export default (newElement, newPage, inHod, pagers, currentPage, idIndex) => {
  if (preIndex !== idIndex) {
    preIndex = idIndex;
    preEndPage = currentPage;
  }

  pagers.push(newElement);
  newElement.props.ext._currentPage = currentPage + 1 - preEndPage;
  if (!inHod) {
    newPage.push(newElement);
  }

  return newElement.props.ext._currentPage;
};
