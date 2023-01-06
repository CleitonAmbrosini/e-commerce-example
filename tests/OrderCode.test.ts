import OrderCode from '../src/OrderCode';

describe('OrderCode tests', () => {
  it('Should return the order code', () => {
    const date = new Date('2022-12-25T15:03:00');
    const sequential = 1;
    const orderCode = new OrderCode(date, sequential);
    expect(orderCode.getCode()).toBe('202200000001');
  });
});
