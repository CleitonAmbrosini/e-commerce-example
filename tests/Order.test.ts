import Coupon from '../src/Coupon';
import Item from '../src/Item';
import Order from '../src/Order';

describe('Order tests', () => {
  it('Should not create a order if CPF is invalid', () => {
    expect(() => new Order('253.318.570-10')).toThrowError(
      new Error('Invalid CPF.'),
    );
  });

  it('Should create a order with 3 itens', () => {
    const newOrder = new Order('073.711.920-95');
    const item1 = new Item('Ipa', 5.75, 2);
    const item2 = new Item('Apa', 4.5, 3);
    const item3 = new Item('Double Ipa', 7.4, 4);
    newOrder.addItem(item1);
    newOrder.addItem(item2);
    newOrder.addItem(item3);
    expect(newOrder.getItens()).toHaveLength(3);
  });

  describe('Discont', () => {
    it('Should apply discount in the total of order', () => {
      const discontCoupon = new Coupon(
        'GET5',
        5,
        new Date('2022-15-11T12:00:00'),
      );
      const newOrder = new Order('073.711.920-95');
      const item1 = new Item('Ipa', 24.52, 2);
      const item2 = new Item('Apa', 27.23, 3);
      const item3 = new Item('Double Ipa', 56, 4);
      newOrder.addItem(item1);
      newOrder.addItem(item2);
      newOrder.addItem(item3);
      newOrder.applyDiscountInPercentage(discontCoupon);
      expect(newOrder.getTotal()).toBe(102.36);
    });

    it('Should not apply discount if coupon is expired', () => {
      const discontCoupon = new Coupon(
        'GET10',
        10,
        new Date('2022-01-11T12:00:00'),
      );
      const newOrder = new Order('073.711.920-95');
      const item1 = new Item('Ipa', 5.75, 2);
      const item2 = new Item('Apa', 4.5, 3);
      newOrder.addItem(item1);
      newOrder.addItem(item2);
      newOrder.applyDiscountInPercentage(discontCoupon);
      expect(newOrder.getTotal()).toBe(10.25);
    });
  });
});
