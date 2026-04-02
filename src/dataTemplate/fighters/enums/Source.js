/**
 * Enum de tipos de fuente de contenido.
 * @readonly
 * @enum {string}
 */
export const SourceType = Object.freeze({
    /** Contenido incluido en el juego base */
    BASE_GAME: "BASE_GAME",

    /** Contenido desbloqueable mediante Season Pass */
    SEASON_PASS: "SEASON_PASS"
});

/**
 * Fuentes predefinidas de contenido.
 * @readonly
 * @enum {Object}
 */
export const Source = Object.freeze({
    /** Información de la fuente correspondiente al juego base */
    BASE_GAME: Object.freeze({
        /** Tipo de la fuente */
        type: SourceType.BASE_GAME,
        /** Nombre legible de la fuente */
        name: "Juego base"
    })
});

/**
 * Crea un objeto de fuente para un Season Pass específico.
 *
 * @param {number} number - Número del Season Pass.
 * @returns {Object} Objeto congelado que representa el Season Pass.
 * @property {string} type - Tipo de fuente (`SourceType.SEASON_PASS`).
 * @property {number} number - Número del Season Pass.
 * @property {string} name - Nombre legible del Season Pass.
 *
 * @example
 * const sp1 = createSeasonPass(1);
 * console.log(sp1.name); // "Season Pass 1"
 */
export function createSeasonPass(number) {
    return Object.freeze({
        type: SourceType.SEASON_PASS,
        number,
        name: `Season Pass ${number}`
    });
}