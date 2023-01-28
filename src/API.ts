/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import ExpressAdapter from './infra/http/ExpressAdapter';
import FsAdapter from './infra/database/FsAdapter';
import OrderController from './infra/controller/http/OrderController';

const http = new ExpressAdapter();
const connection = new FsAdapter();
new OrderController(http, connection);
http.listen(3000);
