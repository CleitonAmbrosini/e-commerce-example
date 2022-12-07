/* eslint-disable no-unused-vars */

export default class Item {
  constructor(
    readonly id,
    readonly description: string,
    readonly price: number,
    readonly height,
    readonly width,
    readonly depth,
    readonly weight,
  ) {
    if (this.height <= 0 || this.width <= 0 || this.depth <= 0)
      throw new Error('Invalid dimension.');
    if (this.weight <= 0) throw new Error('Invalid weight.');
  }

  getVolume(): number {
    return (this.height / 100) * (this.width / 100) * (this.depth / 100);
  }

  getDensity(): number {
    return parseFloat((this.weight / this.getVolume()).toFixed());
  }

  getId() {
    return this.id;
  }
}
