import Pokemon from '../models/pokemon.js';
export const pokemonRepository = {
    findById(id) {
        return Pokemon.findById(id);
    },
    findByName(name) {
        return Pokemon.findOne({ name: name.toLowerCase() });
    }
};
//# sourceMappingURL=pokemon.repository.js.map