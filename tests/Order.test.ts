import Coupon from '../src/Coupon';
import Beer from '../src/Beer';
import Order from '../src/Order';
import ProductMeasurements from '../src/ProductMeasurements';

describe('Order tests', () => {
  it('Should not create a order if CPF is invalid', () => {
    expect(() => new Order('253.318.570-10')).toThrowError(
      new Error('Invalid CPF.'),
    );
  });

  it('Should create a order with 3 items', () => {
    const newOrder = new Order('073.711.920-95');
    const beer1 = new Beer(
      1,
      'IncubusBeer',
      'APA 355ml',
      14.5,
      new ProductMeasurements(355, 600),
    );
    const beer2 = new Beer(
      2,
      'GoodHop',
      'IPA 475ml',
      26.0,
      new ProductMeasurements(475, 700),
    );
    const beer3 = new Beer(
      3,
      'MalOfGod',
      'RED ALE 355ml',
      28.9,
      new ProductMeasurements(355, 600),
    );
    newOrder.addItem(beer1, 1);
    newOrder.addItem(beer2, 1);
    newOrder.addItem(beer3, 1);
    expect(newOrder.getItens()).toHaveLength(3);
  });

  describe('Discont in final value tests', () => {
    it('Should apply discount in the total of order', () => {
      const discontCoupon = new Coupon(
        'GET5',
        5,
        new Date('2022-15-11T12:00:00'),
      );
      const newOrder = new Order('073.711.920-95');
      const beer1 = new Beer(
        1,
        'IncubusBeer',
        'APA 355ml',
        14.5,
        new ProductMeasurements(355, 600),
      );
      const beer2 = new Beer(
        2,
        'GoodHop',
        'IPA 475ml',
        26.0,
        new ProductMeasurements(475, 700),
      );
      const beer3 = new Beer(
        3,
        'MalOfGod',
        'RED ALE 355ml',
        28.9,
        new ProductMeasurements(355, 600),
      );
      newOrder.addItem(beer1, 1);
      newOrder.addItem(beer2, 1);
      newOrder.addItem(beer3, 1);
      newOrder.applyDiscount(discontCoupon);
      expect(newOrder.getTotal()).toBe(95.93);
    });

    it('Should not apply discount if coupon is expired', () => {
      const discontCoupon = new Coupon(
        'GET10',
        10,
        new Date('2022-01-11T12:00:00'),
      );
      const newOrder = new Order('073.711.920-95');
      const beer1 = new Beer(
        1,
        'IncubusBeer',
        'APA 355ml',
        14.5,
        new ProductMeasurements(355, 600),
      );
      const beer2 = new Beer(
        2,
        'GoodHop',
        'IPA 475ml',
        26.0,
        new ProductMeasurements(475, 700),
      );
      newOrder.addItem(beer1, 1);
      newOrder.addItem(beer2, 1);
      newOrder.applyDiscount(discontCoupon);
      expect(newOrder.getTotal()).toBe(60.5);
    });
  });

  describe('Add item tests', () => {
    it('Should not add item with negative quantity', () => {
      const newOrder = new Order('073.711.920-95');
      const beer1 = new Beer(
        1,
        'IncubusBeer',
        'APA 355ml',
        14.5,
        new ProductMeasurements(355, 600),
      );
      expect(() => newOrder.addItem(beer1, -5)).toThrowError(
        new Error('Quantity of the item cannot be negative.'),
      );
    });

    it('Should not add item if item already exist in the list', () => {
      const newOrder = new Order('073.711.920-95');
      const beer1 = new Beer(
        1,
        'IncubusBeer',
        'APA 355ml',
        14.5,
        new ProductMeasurements(355, 600),
      );
      newOrder.addItem(beer1, 2);
      expect(() => newOrder.addItem(beer1, 5)).toThrowError(
        new Error('Item already exists in the order.'),
      );
    });
  });
});
