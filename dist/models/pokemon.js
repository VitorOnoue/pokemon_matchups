import mongoose from 'mongoose';
import statsSchema from './stats.js';
const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stats: {
        type: statsSchema,
        required: true
    },
    types: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'type'
        }
    ]
});
const Pokemon = mongoose.model('Pokemon', pokemonSchema);
export default Pokemon;
//# sourceMappingURL=pokemon.js.map