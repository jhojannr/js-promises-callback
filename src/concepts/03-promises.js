/**
 *
 * @param {HTMLDivElement} element
 */

import { heroes } from "../data/heroes";

export const promComponent = (element) => {
    const renderHeroe = (heroe) => {
        element.innerHTML = heroe.name;
    };

    const renderError = (error) => {
        element.innerHTML = `<h3>${error}</h3>`;
    };

    const id1 = "5d86371f25a058e5b1c8a65e";
    const id2 = "5d86371f97c29d020f1e1f6d";
    findHeroe(id1)
        .then((superHeroe) => renderHeroe(superHeroe))
        .catch(renderError);
};

Promise.all([findHeroe(id1), findHeroe(id2)])
    .then(([heroe1, heroe2]) => renderError(heroe1, heroe2))
    .catch(renderError);

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHeroe = (id) => {
    return new Promise((resolve, reject) => {
        const heroe = heroes.find((heroe) => heroe.id === id);
        if (heroe) {
            resolve(heroe);
            return;
        }
        reject(`Heroe con ${id} no se encuentra`);
    });
};
