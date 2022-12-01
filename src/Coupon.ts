/* eslint-disable no-unused-vars */
export default class Coupon {
  constructor(
    readonly name: string,
    readonly percentage,
    readonly expiration,
  ) {}

  isExpired(date: Date): boolean {
    return date > this.expiration;
  }

  getDiscount(value: number): number {
    return value * (this.percentage / 100);
  }
}
