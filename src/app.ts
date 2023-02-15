import express from "express";

export const App = {
    async boot() {
        const app = express();
        return app;
    }
};
