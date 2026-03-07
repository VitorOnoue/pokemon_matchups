import { prisma } from "../database/prisma.js";
import { Prisma } from "@prisma/client";

export const findByName = async (name: string) => {
    const pokemon = await prisma.pokemon.findFirst({
        where: { name }
    });
    return pokemon;
}

export const create = async (data: Prisma.PokemonCreateInput) => {
    const newPokemon = await prisma.pokemon.create({
        data
    });
    return newPokemon;
}

export const update = async (id: number, data: Prisma.PokemonUpdateInput) => {
    const updatePokemon = await prisma.pokemon.update({
        where: { id },
        data
    });
    return updatePokemon;
}

export const remove = async (name: string) => {
    await prisma.pokemon.delete({
       where: { name } 
    });
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