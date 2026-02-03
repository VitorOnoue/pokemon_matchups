import express from 'express';

import { battleRouter } from './routers/battles.routes.js';
import { pokemonRouter } from './routers/pokemons.routes.js';
import { typeRouter } from './routers/types.routes.js';

const PORT = 8080;
const POSTGRES_URL = process.env.POSTGRES_URL;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(pokemonRouter);
app.use(typeRouter);
app.use(battleRouter);

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
})

const start = async () => {
    if (!POSTGRES_URL) {
        throw new Error('missing POSTGRES_URL');
    }
    try {
    } catch (err) {
        console.log(err);
    }
    app.listen(PORT, () => console.log(POSTGRES_URL, 'server up and running on port', PORT));
}

start();