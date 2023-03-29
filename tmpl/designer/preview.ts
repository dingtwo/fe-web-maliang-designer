import { toUrl } from 'magix';
import { PreviewMock } from './previewMock';

let baseUrl = DEBUG ? './print-debug.html' : './print.html';
/**
 * 根据不同场景传递不同的预览参数
 * @returns 预览页面的 url
 */
export const getPreviewUrl = () => {
  let mock = new PreviewMock();
  return toUrl(baseUrl, mock.mockParams);
};
