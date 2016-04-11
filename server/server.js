import path from 'path';
import express from 'express';
import router from './config/router';

class Server {
  constructor() {
    this.app = express();
  }
  init() {
    console.log('Initializing server...');

    this.app.use('/bundles', express.static(path.join(__dirname, '..', 'public', 'bundles')));
    this.app.use('/', router);

    this.app.listen(8080, () => {
      console.log('Server listening on port 8080');
    });
  }
}

export default new Server();
