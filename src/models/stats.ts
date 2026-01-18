import mongoose from 'mongoose';

const statsSchema = new mongoose.Schema({
    healthPoints: {
        type: Number,
        required: true
    },
    attack: {
        type: Number,
        required: true
    },
    defense: {
        type: Number,
        required: true
    },
    spAttack: {
        type: Number,
        required: true
    },
    spDefense: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    }
});

export default statsSchema;