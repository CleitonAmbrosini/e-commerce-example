import Item from '../src/Item';
import ProductMeasurements from '../src/ProductMeasurements';

describe('Item tests', () => {
  const item = new Item(1, 'Ipa', 24.52, new ProductMeasurements(20, 8, 9, 1));

  it('Should create a item', () => {
    expect(item).toBeDefined();
  });

  it('Should return volume', () => {
    expect(item.getVolume()).toBe(0.0014);
  });

  it('Should return density', () => {
    expect(item.getDensity()).toBe(714);
  });

  it('Should return item id', () => {
    expect(item.getId()).toBe(1);
  });
});
