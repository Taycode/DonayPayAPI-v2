import dotenv from 'dotenv';
import * as http from 'http';
import App from './src/app';

dotenv.config();

const PORT = 8000;

const Server = {
  async start() {
    const app = await App.boot();
    const server = http.createServer(app);
    return server.listen(PORT);
  },
};

Server.start()
  .then(() => process.stdout.write(`Listening to server on http://localhost:${PORT}`));
