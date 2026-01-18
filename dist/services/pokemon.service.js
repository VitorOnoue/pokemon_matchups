import { pokemonRepository } from '../repositories/pokemon.repository.js';
export const findByName = async (pokemonName) => {
    const result = await pokemonRepository.findByName(pokemonName);
    return result;
};
//# sourceMappingURL=pokemon.service.js.map