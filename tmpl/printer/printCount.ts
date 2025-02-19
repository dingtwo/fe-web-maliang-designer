/*
 * @Description: wms 打印计数
 * @Author: jiawei
 * @Date: 2021-10-11 18:30:12
 * @Last Modified by: jiawei
 * @Last Modified time: 2021-10-12 10:26:34
 */
import Magix from 'magix';
import { getHost } from '../provider/host';
import Service from '../designer/service';
import _ from '../provider/lodash.min';

let { parseUrl } = Magix;

/**
 * 订单号是否计划单号
 * @param orderCode 订单号
 * @returns
 */
const ifPlanOrder = (orderCode: string) => /(PS|ZS|ZT|BS)$/.test(orderCode.toUpperCase());

export const printCount = () => {
  let { params } = parseUrl(location.href);
  const { scene, orders, order, puppeteer, callbackData, callbackUrl } = params;
  const orderCode = orders || order;

  /**
   * 出库单和装车单需要计数
   * 马良自助打印: Number(puppeteer) === 1 不需要计数 , 因为计数是在跟客户端交互的时候触发的
   * */
  const needPrintScenes = ['1', '7'];
  console.log('判断orderCode-1111', orderCode)
  console.log('判断needPrintScenes.includes(scene)-2222', needPrintScenes.includes(scene) )
  console.log('判断puppeteer-3333', Number(puppeteer) === 1)
  if (!needPrintScenes.includes(scene) || !orderCode || Number(puppeteer) === 1) {
    return;
  }
  console.log('不回调测试-8888', !needPrintScenes.includes(scene) || !orderCode || Number(puppeteer) === 1)

  const service = new Service();
  const orderStr = decodeURIComponent(orderCode);

  const orderCodeList = _.split(orderStr, ',');

  let entryType = '4';
  if (ifPlanOrder(orderCodeList[0])) {
    entryType = '7';
  }

  let lastCallBackData = {};
  if (callbackData) {
    try {
      lastCallBackData = JSON.parse(decodeURIComponent(callbackData));
    } catch (error) {
      console.log("🚀 ~ file: printCount.ts:54 ~ printCount ~ error:", error, callbackData)

    }
  }

  let options: any = {name: '@:{print.count}'};

  if (callbackUrl) {
    const lastUrl = callbackUrl.indexOf('http') === 0 ? callbackUrl : `${getHost()}${callbackUrl}`;
    options = {
      url: lastUrl,
      '@:{method}': 'post',
    };
  }

  service.all(
    {
      ...options,
      '@:{body}': JSON.stringify({ orderCodes: orderCodeList, entryType, ...lastCallBackData }),
    },
    (err: { message: string }, bag) => {
      console.log('打印计数 err is', err);
      console.log('打印计数 bag is', bag);

      if (err) {
        console.log('打印计数接口调用失败', `${err.message}`);
      }
    },
  );
};
