/* eslint-disable no-unused-vars */
export default class ProductMeasurements {
  constructor(
    readonly height: number,
    readonly width: number,
    readonly depth: number,
    readonly weight: number,
  ) {
    if (this.height <= 0 || this.width <= 0 || this.depth <= 0)
      throw new Error('Invalid dimension.');
    if (this.weight <= 0) throw new Error('Invalid weight.');
  }

  getVolume(): number {
    const volume =
      (this.height / 100) * (this.width / 100) * (this.depth / 100);

    return parseFloat(volume.toFixed(4));
  }

  getDensity(): number {
    return parseFloat((this.weight / this.getVolume()).toFixed());
  }
}
