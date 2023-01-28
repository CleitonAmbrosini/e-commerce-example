/* eslint-disable no-unused-vars */
export default class Coupon {
  constructor(
    readonly name: string,
    readonly percentage: number,
    readonly expireDate: Date,
  ) {}

  isExpired(date: Date): boolean {
    return date.getTime() > this.expireDate.getTime();
  }

  getDiscount(value: number): number {
    if (this.isExpired(new Date())) return 0;
    const finalValue = value * (this.percentage / 100);
    return parseFloat(finalValue.toFixed(2));
  }
}
