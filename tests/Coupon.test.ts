import Coupon from '../src/Coupon';

describe('Coupon tests', () => {
  it('Should create a coupon', () => {
    const coupon = new Coupon('GET50', 50, new Date());
    expect(coupon.getDiscount(100)).toBe(50);
  });

  it('Should return if coupon was expired', () => {
    const coupon = new Coupon('GET50', 50, new Date('2022-11-30T15:00:00'));
    expect(coupon.isExpired(new Date('2022-11-30T23:30:00'))).toBe(true);
  });
});
