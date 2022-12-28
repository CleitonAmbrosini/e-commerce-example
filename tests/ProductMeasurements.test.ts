import ProductMeasurements from '../src/ProductMeasurements';

describe('ProductMeasurements tests', () => {
  describe('Negative values tests', () => {
    it('Should not calculate if height is negative', () => {
      expect(() => new ProductMeasurements(-20, 8, 9, 1)).toThrowError(
        new Error('Invalid dimension.'),
      );
    });

    it('Should not calculate if width is negative', () => {
      expect(() => new ProductMeasurements(20, -8, 9, 1)).toThrowError(
        new Error('Invalid dimension.'),
      );
    });

    it('Should not calculate if depth is negative', () => {
      expect(() => new ProductMeasurements(20, 8, -9, 1)).toThrowError(
        new Error('Invalid dimension.'),
      );
    });

    it('Should not calculate if weight is negative', () => {
      expect(() => new ProductMeasurements(20, 8, 6, -1)).toThrowError(
        new Error('Invalid weight.'),
      );
    });
  });
});
