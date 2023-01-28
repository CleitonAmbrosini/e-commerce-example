import Coupon from '../../src/domain/entities/Coupon';

describe('Coupon tests', () => {
  it('Should create a coupon', () => {
    expect(() => new Coupon('GET50', 50, new Date())).toBeDefined();
  });

  it('Should return true if coupon was expired', () => {
    const coupon = new Coupon('GET50', 50, new Date('2022-11-30T15:00:00'));
    expect(coupon.isExpired(new Date('2022-11-30T23:30:00'))).toBe(true);
  });

  it('Should return value with discount', () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const coupon = new Coupon('GET50', 50, date);
    expect(coupon.getDiscount(100)).toBe(50);
  });

  it('Should not return value with discount if coupon was expired', () => {
    const coupon = new Coupon('GET50', 50, new Date('2022-11-30T15:00:00'));
    expect(coupon.getDiscount(100)).toBe(0);
  });
});
