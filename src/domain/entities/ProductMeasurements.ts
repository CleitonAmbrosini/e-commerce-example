/* eslint-disable no-unused-vars */
export default class ProductMeasurements {
  constructor(readonly capacity: number, readonly weight: number) {
    if (this.capacity <= 0) throw new Error('Invalid capacity.');
    if (this.weight <= 0) throw new Error('Invalid weight.');
  }

  getDensity() {
    return (
      this.convertGramsToKilograms(this.weight) /
      this.convertMilliliterToCubicMeters(this.capacity)
    );
  }

  getVolume() {
    return this.convertMilliliterToCubicMeters(this.capacity);
  }

  private convertGramsToKilograms(value: number): number {
    return value / 1000;
  }

  private convertMilliliterToCubicMeters(value: number): number {
    return value / 100000;
  }
}
