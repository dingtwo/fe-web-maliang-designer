/**
 * 模版预览时不同场景需要传不同的参数
 */
import { toUrl, parseUrl, config } from 'magix';
import { getEnv } from '../provider/host';

const env = getEnv();
let baseUrl = DEBUG ? '/print-debug.html' : '/print.html';
const testOrderCode = env === 'prod' ? 'OM22060900004508PS' : 'OM21082600000129';

/**
 * 根据不同场景传递不同的预览参数
 * @returns 预览页面的 url
 */
export const getPreviewUrl = () => {
  let { params } = parseUrl(location.href);
  const baseParams = {
    preview: 1,
    orders: testOrderCode,
    scene: params.scene,
    templateId: params.id,
    v: config('version'),
  };
  const { scene } = params;
  switch (scene) {
    case '13':
    case '14':
      return toUrl(baseUrl, {
        ...baseParams,
        products: JSON.stringify([]),
      });

    default:
      return toUrl(baseUrl, baseParams);
  }
};
