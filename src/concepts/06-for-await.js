import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async (element) => {
    console.log("F");
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {
    const heroPromises = [];

    heroIds.forEach((id) => {
        heroPromises.push(getHeroAsync(id));
    });

    return heroPromises;
};

const getHeroAsync = async (id) => {
    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });

    return heroes.find((hero) => hero.id === id);
};
