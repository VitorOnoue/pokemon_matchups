import Pokemon from '../models/pokemon.js';

export const pokemonRepository = {
    findById(id: string) {
        return Pokemon.findById(id);
    },
    findByName(name: string) {
        return Pokemon.findOne({ name: name.toLowerCase() });
    }
}