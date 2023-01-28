import FreightCalculator from '../../src/domain/entities/FreightCalculator';
import Beer from '../../src/domain/entities/Beer';
import ProductMeasurements from '../../src/domain/entities/ProductMeasurements';

describe('FreightCalculator tests', () => {
  it('Should calculate the value of freight', () => {
    const beer = new Beer(
      1,
      'IncubusBeer',
      'APA 10l',
      200,
      new ProductMeasurements(10000, 8000),
    );
    expect(FreightCalculator.getFreight(beer)).toBe(80);
  });

  it('Should return the minimal value of freight', () => {
    const beer = new Beer(
      1,
      'IncubusBeer',
      'APA 355ml',
      14.5,
      new ProductMeasurements(355, 600),
    );
    expect(FreightCalculator.getFreight(beer)).toBe(10);
  });
});
