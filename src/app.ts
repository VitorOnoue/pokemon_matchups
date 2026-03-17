import express from 'express';

import { battleRouter } from './routers/battle.routes.js';
import { pokemonRouter } from './routers/pokemon.routes.js';
import { typeRouter } from './routers/type.routes.js';
import { moveRouter } from './routers/move.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { notFoundMiddleware } from './middlewares/not-found.middleware.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/type', typeRouter);
app.use('/move', moveRouter);
app.use('/pokemon', pokemonRouter);
app.use('/battle', battleRouter);

app.get("/health", (_, res) => {
    res.status(200).json({ status: "ok" });
})

app.use(notFoundMiddleware)

app.use(errorMiddleware);

export { app };