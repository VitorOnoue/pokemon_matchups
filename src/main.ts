import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

const PORT = 8080;

const app = express();

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