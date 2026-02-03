import express from 'express';
import mongoose from 'mongoose';
import { battleRouter } from './routers/battles.routes.js';
import { pokemonRouter } from './routers/pokemons.routes.js';
import { typeRouter } from './routers/types.routes.js';
const PORT = 8080;
const MONGO_URL = process.env.MONGO_URL;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(pokemonRouter);
app.use(typeRouter);
app.use(battleRouter);
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});
const start = async () => {
    if (!MONGO_URL) {
        throw new Error('missing MONGO_URL');
    }
    try {
        await mongoose.connect(MONGO_URL);
    }
    catch (err) {
        console.log(err);
    }
    app.listen(PORT, () => console.log(MONGO_URL, 'server up and running on port', PORT));
};
start();
//# sourceMappingURL=main.js.map