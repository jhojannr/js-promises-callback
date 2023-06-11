import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */

export const asyncComponent = (element) => {
    const id = "5d86371fd55e2e2a30fe1ccb";

    console.log("Inicio de Componente");

    findHeroe(id)
        .then(console.log)
        .catch((error) => (element.innerHTML = error));

    console.log("Fin del Componente");
};

/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHeroe = async (id) => {
    const heroe = heroes.find((heroe) => heroe.id === id);
    return heroe.name;
};
