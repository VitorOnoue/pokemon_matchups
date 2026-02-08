import { prisma } from "../database/prisma.js";
import { CreatePokemonDTO } from "../dto/create-pokemon.dto.js";

export const findByName = async (name: string) => {
    const pokemon = await prisma.pokemon.findUnique({
        where: { name }
    });
    return pokemon;
}

export const create = async (pokemon: CreatePokemonDTO) => {
    const newPokemon = await prisma.pokemon.create({
        data: {
            number: pokemon.number,
            name: pokemon.name,
            hp: pokemon.hp,
            atk: pokemon.atk,
            spAtk: pokemon.spAtk,
            defense: pokemon.defense,
            spDefense: pokemon.spDefense,
            speed: pokemon.speed
        }
    });
    return newPokemon;
}

// model Pokemon {
//   // columns
//   id Int @id @default(autoincrement())
//   number Int @unique
//   name String @unique
//   hp Int
//   atk Int
//   spAtk Int @map("sp_attack")
//   defense Int @map("def")
//   spDefense Int @map("sp_def")
//   speed Int
  
//   // relations
//   types PokemonType[]
//   moves PokemonMove[]

//   @@map("pokemons")
// }