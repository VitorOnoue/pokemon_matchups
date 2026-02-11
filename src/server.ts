import { app } from "./app.js";
import { prisma } from "./database/prisma.js";

const PORT = 8080;

const start = async () => {
    try {
        app.listen(PORT, () => console.log('server up and running on port', PORT));
    } catch (err) {
        console.log(err);
    }
}

start();