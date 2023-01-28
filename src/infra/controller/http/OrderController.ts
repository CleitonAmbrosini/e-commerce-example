import Http from '../../http/Http';
import BeerRepositoryDatabase from '../../repository/database/BeerRepositoryDatabase';
import PreviewOrder from '../../../application/PreviewOrder';
import Connection from '../../database/Connection';

export default class OrderController {
  constructor(readonly http: Http, readonly connection: Connection) {
    http.on('post', '/orderPreview', function (params: any, body: any) {
      const itemRepository = new BeerRepositoryDatabase(connection);
      const previewOrder = new PreviewOrder(itemRepository);
      const output = previewOrder.execute(body);
      return output;
    });
  }
}
