import ProductMeasurements from '../src/ProductMeasurements';

describe('ProductMeasurements tests', () => {
  describe('Negative values tests', () => {
    it('Should not calculate if height is negative', () => {
      expect(() => new ProductMeasurements(-1, 600)).toThrowError(
        new Error('Invalid capacity.'),
      );
    });

    it('Should not calculate if width is negative', () => {
      expect(() => new ProductMeasurements(355, -8)).toThrowError(
        new Error('Invalid weight.'),
      );
    });
  });

  describe('Positives values tests', () => {
    it('Should return density', () => {
      const productMeasurements = new ProductMeasurements(355, 600);
      const density = parseFloat(productMeasurements.getDensity().toFixed(2));
      expect(density).toBe(169.01);
    });

    it('Should return volume in cubic meters', () => {
      const productMeasurements = new ProductMeasurements(355, 600);
      expect(productMeasurements.getVolume()).toBe(0.00355);
    });
  });
});
