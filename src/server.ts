import { app } from "./app.js";
import { prisma } from "./database/prisma.js";

const PORT = 8080;
const POSTGRES_URL = process.env.POSTGRES_URL;

const start = async () => {
    if (!POSTGRES_URL) {
        throw new Error('missing POSTGRES_URL');
    }
    try {
        await prisma.$connect();
        app.listen(PORT, () => console.log(POSTGRES_URL, 'server up and running on port', PORT));
    } catch (err) {
        console.log(err);
    }
}

start();