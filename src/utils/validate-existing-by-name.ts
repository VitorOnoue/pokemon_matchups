import { ValidationError } from "../errors/validation-error.js";

// this type allows you to pass a findManyByName function as a parameter
type FindManyByName<T> = (names: string[]) => Promise<T[]>; // a type that represents a function that receives an array of strings and return a T array promise

// this util function will run a findManyByName operation (type or move) and return an error if any is missing
export async function findManyByNameValidated<T extends { name: string }>(names: string[], findMany: FindManyByName<T>, label: string): Promise<T[]> {
    const foundItems = await findMany(names);
    if (names.length !== foundItems.length) {
        const foundNames = foundItems.map(item => item.name);
        const missingNames = names.filter((name) => !foundNames.includes(name));
        throw new ValidationError(`${label} not found: ${missingNames.join(", ")}`);
    }
    return foundItems;
}

// same for a singular item by name
type FindByName<T> = (name: string) => Promise<T>;

export async function findByNameValidated<T extends {name: string}>(name: string, find: FindByName<T>, label: string): Promise<T> {
    const foundItem = await find(name);
    if (!foundItem) {
        throw new ValidationError(`${label} ${name} not found`);
    }
    return foundItem;
}