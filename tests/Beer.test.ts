import Beer from '../src/Beer';
import ProductMeasurements from '../src/ProductMeasurements';

describe('Item tests', () => {
  const item = new Beer(
    1,
    'IncubusBeer',
    'APA 355ml',
    14.5,
    new ProductMeasurements(355, 600),
  );

  it('Should create a item', () => {
    expect(item).toBeDefined();
  });

  it('Should return volume in cubic meters', () => {
    expect(item.getVolume()).toBe(0.00355);
  });

  it('Should return density', () => {
    expect(item.getDensity()).toBe(169.01408450704224);
  });

  it('Should return item id', () => {
    expect(item.getId()).toBe(1);
  });
});
