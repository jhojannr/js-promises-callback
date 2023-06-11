/**
 *
 * @param {HTMLDivElement} element
 */

export const environments = (element) => {
    const html = `
    Dev: ${import.meta.env.DEV} <br>
    Prod: ${import.meta.env.PROD} <br>
    KEY: ${import.meta.env.VITE_API_KEY} <br>
    URL: ${import.meta.env.VITE_BASE_URL} <br>
    `;
    element.innerHTML = html;
};
