import Beer from '../../../domain/entities/Beer';
import ProductMeasurements from '../../../domain/entities/ProductMeasurements';

export default class ProductsInMemory {
  items: Array<Beer> = [];

  constructor() {
    this.items = [
      new Beer(
        1,
        'IncubusBeer',
        'APA 355ml',
        14.5,
        new ProductMeasurements(355, 600),
      ),
      new Beer(
        2,
        'GoodHop',
        'IPA 475ml',
        26.0,
        new ProductMeasurements(475, 700),
      ),
      new Beer(
        3,
        'MalOfGod',
        'RED ALE 355ml',
        28.9,
        new ProductMeasurements(355, 600),
      ),
    ];
  }

  getItems(): Array<Beer> {
    return this.items;
  }
}
