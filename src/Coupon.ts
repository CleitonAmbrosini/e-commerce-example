/* eslint-disable no-unused-vars */
export default class Coupon {
  constructor(
    readonly name: string,
    readonly percentage: number,
    readonly expiration: Date,
  ) {}

  isExpired(date: Date): boolean {
    return date > this.expiration;
  }

  getDiscount(value: number): number {
    if (this.isExpired(new Date())) return 0;
    const finalValue = value * (this.percentage / 100);
    return parseFloat(finalValue.toFixed(2));
  }
}
