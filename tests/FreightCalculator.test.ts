import FreightCalculator from '../src/FreightCalculator';
import Item from '../src/Item';
import ProductMeasurements from '../src/ProductMeasurements';

describe('FreightCalculator tests', () => {
  it('Should calculate the value of freight', () => {
    const item2 = new Item(
      2,
      'Apa',
      24.52,
      new ProductMeasurements(15, 5, 15, 8),
    );
    expect(FreightCalculator.getFreight(item2)).toBe(80);
  });

  it('Should return the minimal value of freight', () => {
    const item2 = new Item(
      1,
      'Apa',
      24.52,
      new ProductMeasurements(20, 15, 10, 1),
    );
    expect(FreightCalculator.getFreight(item2)).toBe(10);
  });
});
