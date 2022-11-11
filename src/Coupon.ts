/* eslint-disable no-unused-vars */
export default class Coupon {
  constructor(
    readonly name: string,
    readonly percentage,
    readonly expiration,
  ) {}

  isExpired(): boolean {
    return new Date() > this.expiration;
  }

  getPercentage(): number {
    return this.percentage / 100;
  }
}
