import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import AppRoute from './routes';

export default class App {
  static async boot() {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    AppRoute(app);
    return app;
  }
}
