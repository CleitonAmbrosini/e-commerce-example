import PreviewOrder from '../../src/application/PreviewOrder';
import BeerRepositoryDatabase from '../../src/infra/repository/database/BeerRepositoryDatabase';
import FsAdapter from '../../src/infra/database/FsAdapter';

describe('PreviewOrder tests', () => {
  it('Should return a preview order price', async () => {
    const inputValues = {
      cpf: '471.418.290-08',
      orderItems: [
        { id: 1, quantity: 1 },
        { id: 2, quantity: 2 },
      ],
    };
    const connection = new FsAdapter();
    const beerRopository = new BeerRepositoryDatabase(connection);
    const previewOrder = new PreviewOrder(beerRopository);
    const orderPrice = await previewOrder.execute(inputValues);
    expect(orderPrice.total).toBe(104.5);
  });
});
