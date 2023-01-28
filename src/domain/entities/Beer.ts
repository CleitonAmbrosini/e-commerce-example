/* eslint-disable no-unused-vars */

import ProductMeasurements from './ProductMeasurements';

export default class Beer {
  constructor(
    readonly id: number,
    readonly brand: string,
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

  getId(): number {
    return this.id;
  }
}
