/**
 *
 * @param {HTMLDivElement} element
 */

export const promiseRaceComponent = (element) => {
    const renderValue = (value) => {
        element.innerHTML = value;
    };

    Promise.race([slowPromise(), midiumPromise(), fastPromise()]).then(renderValue);
};

const slowPromise = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Slow Promise");
        }, 2000);
    });

const midiumPromise = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Midium Promise");
        }, 1500);
    });

const fastPromise = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fast Promise");
        }, 1000);
    });
