/**
 * 模版预览时不同场景需要传不同的参数
 */
import { toUrl, parseUrl, config } from 'magix';
import { getEnv } from '../provider/host';
import { MesPreViewMock } from './mesPreviewMock';

const env = getEnv();

export class PreviewMock {
  scene: string;
  baseParams: any;
  mesMock: MesPreViewMock;

  constructor() {
    let { params } = parseUrl(location.href);
    const { scene } = params;
    this.scene = scene;

    this.mesMock = new MesPreViewMock({ scene, env });

    this.baseParams = {
      preview: 1,
      orders: this.mockOrder,
      scene: this.scene,
      templateId: params.id,
      v: config('version'),
    };
  }

  get mockOrder() {
            //  sql模板的预览时在数据源接口时候写死的数据, 并不是通过单号请求, 因此直接在sql数据源接口中,判断preview为1时,直接返回mock数据
    switch (this.scene) {
      case '1':
      case '7':
        return this.mockOrder1();
      case '13':
      case '14':
        return this.mockOrder13();
      case '16':
        return this.mockOrder16();
      case '18':
        return this.mockOrder18();
      case '19':
        return this.mockOrder19();
      case '9':
      case '10':
      case '12':
        this.mesMock.mesGetOrder();
      default:
        break;
    }
  }

  private mockOrder1() {
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

  // TODO: 生产的单子还得单独捞一下
  private mockOrder18() {
    switch (env) {
      case 'dev':
        return 'JH230213000003';
      case 'sit':
        return 'JH230209000009';
      case 'pre':
        return 'JH230221000008';
      case 'prod':
        return 'JH230221000008';
      default:
        break;
    }
  }
  // TODO: 生产的单子还得单独捞一下
  private mockOrder16() {
    switch (env) {
      case 'dev':
        return '101543';
      case 'sit':
        return '101543';
      case 'pre':
        return '101543';
      case 'prod':
        return '101543';
      default:
        break;
    }
  }

  private mockOrder19() {
    switch (env) {
      case 'dev':
        return 'BS230111000006';
      case 'sit':
        return 'LY230110000003';
      case 'pre':
        return 'LY230213000001';
      case 'prod':
        return 'LY230329000038';
      default:
        break;
    }
  }

  private mockOrder13() {
    switch (env) {
      case 'dev':
        return 'OM23032800000002PS';
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
      case '18':
        return this.mockParams18();
      case '19':
        return this.mockParams19();
      case '9':
      case '10':
      case '12':
        return this.mesMock.mesGetParams();
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

  private mockParams18() {
    return {
      orders: this.mockOrder18(),
      scene: 19,
      warehouseCode: 'W0A8',
    };
  }

  private mockParams19() {
    return {
      orders: this.mockOrder19(),
      scene: 19,
      warehouseCode: 'W0A8',
    };
  }
}
