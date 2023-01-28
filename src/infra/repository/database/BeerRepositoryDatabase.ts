/* eslint-disable no-unused-vars */
import Beer from '../../../domain/entities/Beer';
import BeerRepository from '../../../domain/repository/BeerRepository';
import ProductMeasurements from '../../../domain/entities/ProductMeasurements';
import Connection from '../../database/Connection';

export default class BeerRepositoryDatabase implements BeerRepository {
  constructor(readonly connection: Connection) {}

  async getItem(idItem: number): Promise<Beer> {
    const products = await this.connection.query(
      `${__dirname}/productsDB.json`,
      'utf-8',
    );
    const item = products.find((item: orderItems) => item.id === idItem);
    const beer = new Beer(
      item.id,
      item.brand,
      item.description,
      item.price,
      new ProductMeasurements(item.capacity, item.weight),
    );
    return beer;
  }
}

type orderItems = {
  id: number;
  quantity: number;
};
