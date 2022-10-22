import Item from '../src/Item';
import Order from '../src/Order';

describe('Order tests', () => {
  it('Should not create a order if CPF is invalid', () => {
    expect(() => new Order('253.318.570-10')).toThrowError(
      new Error('Invalid CPF'),
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

  it('Should apply discount in the total of order', () => {
    const newOrder = new Order('073.711.920-95');
    const item1 = new Item('Ipa', 5.75, 2);
    const item2 = new Item('Apa', 4.5, 3);
    const item3 = new Item('Double Ipa', 7.4, 4);
    newOrder.addItem(item1);
    newOrder.addItem(item2);
    newOrder.addItem(item3);
    newOrder.applyDiscountInPercentage(5);
    expect(newOrder.getTotal()).toBe(16.77);
  });
});
