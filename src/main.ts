import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

import { battleRouter } from './routers/battles.routes.js';
import { pokemonRouter } from './routers/pokemons.routes.js';
import { typeRouter } from './routers/types.routes.js';

const PORT = 8080;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(pokemonRouter);
app.use(typeRouter);
app.use(battleRouter);

const start = async () => {
    if (!process.env.MONGO_URL) {
        throw new Error('missing MONGO_URL');
    }
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (err) {
        throw new Error('could not connect to the database');
    }
    app.listen(PORT, () => console.log('server up and running on port', PORT));
}

start();