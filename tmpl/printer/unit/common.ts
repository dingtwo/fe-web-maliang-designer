import Magix from 'magix';
let { isArray } = Magix;
/**
 * 填充普通元素数据
 * @param element 元素描述json对象
 */
export default (dataCenter, resLoader, element, newPage, inHod) => {
  let { props } = element;
  let { bind } = props;
  if (bind.url && !bind._tip && !bind._data && dataCenter[bind.url]) {
    let { '@:{error}': err, '@:{data}': data } = dataCenter[bind.url];
    if (err) {
      bind._tip = err;
    } else {
      bind._data = data;
    }
  }
  if (/*element.type == 'image' ||*/ element.type == 'repeat') {
    let image = props.image;
    if (bind._data) {
      let src = bind._data;
      if (isArray(src)) {
        src = src[0];
      }
      let bindField = bind.fields[0];
      image = src[bindField.id];
    }
    resLoader['@:{add}']('@:{image}', image);
  }
  if (!inHod) {
    newPage.push(element);
  }
};
