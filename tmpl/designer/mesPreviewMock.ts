export class MesPreViewMock {
  constructor({ scene, env }) {
    this.scene = scene;
    this.env = env;
  }

  baseParams = { locationCode: 'W053' };
  env: 'dev' | 'sit' | 'pre' | 'prod';
  scene: '9' | '10' | '12';

  mesGetOrder = () => {
    switch (this.scene) {
      case '9':
        return 'mes_bPlanByProduct';
      case '10':
        return this.getOrder10();
      case '12':
        return 'mes_mProductionPlan';
    }
  };

  getOrder10 = () => {
    switch (this.env) {
      case 'dev':
        return '100002,100360';
      case 'sit':
        return '100361,106287,10001';
      case 'pre':
        return '444444';
      case 'prod':
        return '123240,107415';
    }
  };

  mesGetParams = () => {
    switch (this.scene) {
      case '9':
        return {
          orders: 'mes_bPlanByProduct',
          scene: 9,
          locationCode: 'W053',
          planDate: '2023-04-01',
          wavesNumbers: '3',
        };
      case '10':
        return this.getParams10();
      case '12':
        return this.getParams12();
    }
  };

  getParams10 = () => {
    const baseParams = { scene: 10, locationCode: 'W053' };
    const orders = this.getOrder10();

    switch (this.env) {
      case 'dev':
        return {
          ...baseParams,
          planDate: '2023-04-01',
          wavesNumbers: '1',
          orders,
        };
      case 'sit':
        return {
          ...baseParams,
          planDate: '2023-04-01',
          wavesNumbers: '1',
          orders,
        };
      case 'pre':
        return {
          ...baseParams,
          planDate: '2023-04-01',
          wavesNumbers: '4',
          orders,
        };
      case 'prod':
        return {
          ...baseParams,
          locationCode: 'W080',
          planDate: '2023-04-01',
          wavesNumbers: '1',
          orders,
        };
    }
  };

  getParams12 = () => {
    const baseParams = { scene: 12, locationCode: 'W053', orders: 'mes_mProductionPlan' };

    switch (this.env) {
      case 'dev':
        return {
          ...baseParams,
          planDate: '2023-02-20',
        };
      case 'sit':
        return {
          ...baseParams,
          planDate: '2023-03-06',
        };
      case 'pre':
        return {
          ...baseParams,
          planDate: '2023-03-06',
        };
      case 'prod':
        return {
          ...baseParams,
          planDate: '2023-03-31',
        };
    }
  };
}
