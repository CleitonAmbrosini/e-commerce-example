import Order from '../domain/entities/Order';
import BeerRepository from '../domain/repository/BeerRepository';

export default class PreviewOrder {
  // eslint-disable-next-line no-unused-vars
  constructor(readonly beerRopository: BeerRepository) {}

  async execute(input: Input): Promise<Output> {
    const order = new Order(input.cpf);
    for (const orderItem of input.orderItems) {
      const beer = await this.beerRopository.getItem(orderItem.id);
      if (beer) {
        order.addItem(beer, orderItem.quantity);
      }
    }
    return {
      total: order.getTotal(),
    };
  }
}

type Input = {
  cpf: string;
  orderItems: { id: number; quantity: number }[];
};

type Output = {
  total: number;
};
