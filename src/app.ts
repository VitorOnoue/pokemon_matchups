import express from 'express';

import { battleRouter } from './routers/battles.routes.js';
import { pokemonRouter } from './routers/pokemons.routes.js';
import { typeRouter } from './routers/types.routes.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(pokemonRouter);
app.use(typeRouter);
app.use(battleRouter);

app.get("/health", (_, res) => {
    res.status(200).json({ status: "ok" });
})

export { app };