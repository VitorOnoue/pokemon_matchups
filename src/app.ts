import express from 'express';

import { battleRouter } from './routers/battle.routes.js';
import { pokemonRouter } from './routers/pokemon.routes.js';
import { typeRouter } from './routers/type.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(pokemonRouter);
app.use(typeRouter);
app.use(battleRouter);

app.get("/health", (_, res) => {
    res.status(200).json({ status: "ok" });
})

app.use(errorMiddleware);

export { app };