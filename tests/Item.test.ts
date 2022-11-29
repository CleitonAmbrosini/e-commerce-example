import Item from '../src/Item';

// description, price, height, width, depth and weight

describe('Item tests', () => {
  it('Should not create a item if some dimension is negative', () => {
    expect(() => new Item('Ipa', 24.52, 20, 8, -9, 1)).toThrowError(
      new Error('Invalid dimension.'),
    );
  });

  it('Should not create a item if weight is negative', () => {
    expect(() => new Item('Ipa', 24.52, 20, 8, 6, -1)).toThrowError(
      new Error('Invalid weight.'),
    );
  });
});
