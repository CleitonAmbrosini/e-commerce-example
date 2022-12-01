import Coupon from '../src/Coupon';
import Item from '../src/Item';
import Order from '../src/Order';

// description, price, height, width, depth and weight

describe('Order tests', () => {
  it('Should not create a order if CPF is invalid', () => {
    expect(() => new Order('253.318.570-10')).toThrowError(
      new Error('Invalid CPF.'),
    );
  });

  it('Should create a order with 3 itens', () => {
    const newOrder = new Order('073.711.920-95');
    const item1 = new Item('Ipa', 5.75, 20, 8, 9, 1);
    const item2 = new Item('Apa', 4.5, 18, 6, 8, 1.5);
    const item3 = new Item('Double Ipa', 7.4, 19, 9, 7, 2);
    newOrder.addItem(item1, 1);
    newOrder.addItem(item2, 2);
    newOrder.addItem(item3, 1);
    expect(newOrder.getItens()).toHaveLength(3);
  });

  describe('Discont tests', () => {
    it('Should apply discount in the total of order', () => {
      const discontCoupon = new Coupon(
        'GET5',
        5,
        new Date('2022-15-11T12:00:00'),
      );
      const newOrder = new Order('073.711.920-95');
      const item1 = new Item('Ipa', 24.52, 20, 8, 9, 1);
      const item2 = new Item('Apa', 27.23, 18, 6, 8, 1.5);
      const item3 = new Item('Double Ipa', 56, 19, 9, 7, 2);
      newOrder.addItem(item1, 1);
      newOrder.addItem(item2, 2);
      newOrder.addItem(item3, 1);
      newOrder.applyDiscount(discontCoupon);
      expect(newOrder.getTotal()).toBe(128.23);
    });

    it('Should not apply discount if coupon is expired', () => {
      const discontCoupon = new Coupon(
        'GET10',
        10,
        new Date('2022-01-11T12:00:00'),
      );
      const newOrder = new Order('073.711.920-95');
      const item1 = new Item('Ipa', 5.75, 20, 8, 9, 1);
      const item2 = new Item('Apa', 4.5, 18, 6, 8, 1.5);
      newOrder.addItem(item1, 1);
      newOrder.addItem(item2, 3);
      newOrder.applyDiscount(discontCoupon);
      expect(newOrder.getTotal()).toBe(19.25);
    });
  });

  describe('Add item tests', () => {
    it('Should not add item with negative quantity', () => {
      const newOrder = new Order('073.711.920-95');
      const item1 = new Item('Ipa', 24.52, 20, 8, 9, 1);
      newOrder.addItem(item1, 2);
      newOrder.addItem(item1, -5);
      expect(newOrder.getItens()).toHaveLength(1);
    });

    it('Should not add item if item already exist in the list', () => {
      const newOrder = new Order('073.711.920-95');
      const item1 = new Item('Ipa', 24.52, 20, 8, 9, 1);
      newOrder.addItem(item1, 2);
      newOrder.addItem(item1, 5);
      expect(newOrder.getItens()).toHaveLength(1);
    });
  });

  describe('Freight tests', () => {
    it('Should calculate the value of freight', () => {
      const newOrder = new Order('073.711.920-95');
      const item1 = new Item('Ipa', 24.52, 100, 30, 10, 3);
      const item2 = new Item('Apa', 24.52, 20, 15, 10, 1);
      newOrder.addItem(item1, 1);
      newOrder.addItem(item2, 1);
      expect(newOrder.getFreight()).toBe(39.99);
    });

    it('Should return the minimal value of freight', () => {
      const newOrder = new Order('073.711.920-95');
      const item2 = new Item('Apa', 24.52, 20, 15, 10, 1);
      newOrder.addItem(item2, 1);
      expect(newOrder.getFreight()).toBe(10);
    });
  });
});
