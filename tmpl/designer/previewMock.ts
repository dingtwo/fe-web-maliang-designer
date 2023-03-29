/**
 * 模版预览时不同场景需要传不同的参数
 */
import { toUrl, parseUrl, config } from 'magix';
import { getEnv } from '../provider/host';

const env = getEnv();

export class PreviewMock {
  scene: string;
  baseParams: any;
  constructor() {
    let { params } = parseUrl(location.href);
    const { scene } = params;
    this.scene = scene;
    this.baseParams = {
      preview: 1,
      orders: this.mockOrder,
      scene: this.scene,
      templateId: params.id,
      v: config('version'),
    };
  }

  get mockOrder() {
    switch (this.scene) {
      case '1':
        return this.mockOrder1();
      case '13':
      case '14':
        return this.mockOrder13();
      default:
        break;
    }
  }

  private mockOrder1() {
    switch (env) {
      case 'dev':
        return 'OM21082600000129';
      case 'sit':
        return 'OM23032200000008PS';
      case 'pre':
        return 'OM23032200000033PS';
      case 'prod':
        return 'OM22060900004508PS';
      default:
        break;
    }
  }
  private mockOrder13() {
    switch (env) {
      case 'dev':
        return 'OM21082600000129PS';
      case 'sit':
        return 'OM23032200000008PS';
      case 'pre':
        return 'OM23032200000033PS';
      case 'prod':
        return 'OM22060900004508PS';
      default:
        break;
    }
  }

  get mockParams() {
    switch (this.scene) {
      case '1':
        return this.mockParams1();
      case '13':
      case '14':
        return this.mockParams13();
      default:
        return this.mockParams1();
    }
  }

  private mockParams1() {
    return this.baseParams;
  }

  private mockParams13() {
    return {
      ...this.baseParams,
      products: JSON.stringify([]),
    };
  }
}
