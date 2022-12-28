/* eslint-disable no-unused-vars */

import ProductMeasurements from './ProductMeasurements';

export default class Item {
  constructor(
    readonly id: number,
    readonly description: string,
    readonly price: number,
    readonly productMeasurements: ProductMeasurements,
  ) {}

  getVolume(): number {
    return this.productMeasurements.getVolume();
  }

  getDensity(): number {
    return this.productMeasurements.getDensity();
  }

  getId() {
    return this.id;
  }
}
