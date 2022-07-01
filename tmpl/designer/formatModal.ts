/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Service from './service';

let { node, applyStyle, View, parseUrl } = Magix;

applyStyle('@:content.less');

const defaultFun = `/**
*
* @param data 打印接口返回的数据
* @param R ramda
* @param calc @csx/calc
* @param nzhCn @csx/calc nzhcn
* @param request 用于发起请求的方法，返回 promise，支持 post 请求，request(url, data)
* @param sync
* @returns 处理后的数据
*/
function (data, { R, calc, nzhcn, request, sync }) {
 console.log("data is", data);

 return data;
}
`;

export default View.extend({
  tmpl: '@:formatModal.html',
  init(data) {
    console.log(data.dialog);

    this['@:{dialog}'] = data.dialog;
    this['@:{itemData}'] = data.itemData;
    this['@:{get.formatFun}'](data.itemData);
    this['@:bodyData'] = defaultFun;
  },
  '@:{get.formatFun}'(itemData) {
    let { params } = parseUrl(location.href);

    const s = new Service();
    s.save(
      {
        name: '@:{get.format.fun}',
        '@:{body}': JSON.stringify({ templateId: params.id, dataSourceId: itemData.id }),
      },
      (
        ex: {
          message: string;
        },
        bag,
      ) => {
        const bodyData = bag.get('data', defaultFun);

        this.digest({
          body: bodyData,
          itemData: itemData,
        });

        this['@:bodyData'] = bodyData;
      },
    );
  },
  '@:{update.value}<cmchange>'(e) {
    this['@:bodyData'] = e.value.trim();
  },
  '@:{cancel}<click>'() {
    this['@:{dialog}'].close();
  },
  '@:{apply}<click>'() {
    this['@:{save}'](this['@:bodyData']);
    this['@:{dialog}'].close();
  },
  '@:{save}'(val) {
    let { params } = parseUrl(location.href);

    const s = new Service();
    s.save(
      {
        name: '@:{set.format.fun}',
        '@:{body}': JSON.stringify({
          templateId: params.id,
          dataSourceId: this['@:{itemData}'].id,
          formatFun: val,
        }),
      },
      (
        ex: {
          message: string;
        },
        bag,
      ) => {
        console.log(bag.get('data', ''));
      },
    );
  },
});
