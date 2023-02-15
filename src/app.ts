import express from 'express';

export default class App {
  static async boot() {
    const app = express();
    return app;
  }
}
