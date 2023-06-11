import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */

export const callbacksComponent = (element) => {
    const id = "5d86371f2343e37870b91ef1";
    findHeroe(id, (error, heroe) => {
        if (error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = `El heroe es: ${heroe.name}`;
    });
};

/**
 *
 * @param {String} id
 * @param {(error: String | Null, heroe: Object)=>void} callback
 */
const findHeroe = (id, callback) => {
    const heroe = heroes.find((heroe) => heroe.id === id);
    if (!heroe) {
        callback(`Heroe con ID ${id} no existe`);
        return;
    }
    callback(null, heroe);
};
