import {UniversalMoveKey} from "./enums/UniversalMoveKey.js";
import {defaultMoveSet} from "../../../data/fighter/fighters/!defaultMoves/defaultMoveSet.jsx";
import {
    validateUniversalMove,
    validateNormalMove,
    validateSpecialMove,
    sortMoves, validateOverdriveMove
} from "./moveValidation.js";

export class MoveSet {
    /**
     * @typedef {Object} UniversalMoves
     * @property {Move} neutral_p
     * @property {Move} neutral_k
     * @property {Move} neutral_s
     * @property {Move} neutral_hs
     * @property {Move} neutral_d
     * @property {Move} neutral_r
     * @property {Move} down_p
     * @property {Move} down_k
     * @property {Move} down_s
     * @property {Move} down_hs
     * @property {Move} down_d
     * @property {Move} down_r
     * @property {Move} air_p
     * @property {Move} air_k
     * @property {Move} air_s
     * @property {Move} air_hs
     * @property {Move} air_d
     * @property {Move} air_r
     */

    /**
     * Movimientos universales indexados por clave.
     * @type {UniversalMoves}
     */
    #universal;

    /**
     * Movimientos normales.
     * @type {Move[]}
     */
    #normal;

    /**
     * Movimientos especiales.
     * @type {Move[]}
     */
    #special;

    /**
     * Movimientos overdrive.
     * @type {Move[]}
     */
    #overdrive;

    /**
     * @param {Object} [options]
     * @param {Partial<UniversalMoves>} [options.universal]
     *        Movimientos universales (parcial).
     *        Los no definidos se rellenan automáticamente con valores por defecto.
     * @param {Move[]} [options.normal=[]] Movimientos normales
     * @param {Move[]} [options.special=[]] Movimientos especiales
     * @param {Move[]} [options.overdrive=[]] Movimientos overdrive
     */
    constructor(options = {}) {
        const {
            universal = {},
            normal,
            special,
            overdrive
        } = options;

        const base = defaultMoveSet;

        // BUILD

        this.#universal = this.#mergeUniversal(universal, base);

        this.#normal = (Array.isArray(normal) && normal.length)
            ? [...normal]
            : [...(base.normal ?? [])];

        this.#special = (Array.isArray(special) && special.length)
            ? [...special]
            : [...(base.special ?? [])];

        this.#overdrive = (Array.isArray(overdrive) && overdrive.length)
            ? [...overdrive]
            : [...(base.overdrive ?? [])];


        // VALIDATION

        // universales
        Object.entries(this.#universal).forEach(([key, move]) => {
            if (!move) {
                console.warn(`❌ Universal ${key} está undefined`);
                return;
            }
            validateUniversalMove(key, move);
        });

        // listas
        this.#normal.forEach(move => {
            if (!move) return console.warn("❌ Normal undefined");
            validateNormalMove(move);
        });

        this.#special.forEach(move => {
            if (!move) return console.warn("❌ Special undefined");
            validateSpecialMove(move);
        });

        this.#overdrive.forEach(move => {
            if (!move) return console.warn("❌ Overdrive undefined");
            validateOverdriveMove(move);
        });

        // SORT

        this.#normal = sortMoves(this.#normal);
        this.#special = sortMoves(this.#special);
        this.#overdrive = sortMoves(this.#overdrive);
    }

    #mergeUniversal(universal, base) {
        const merged = {};

        for (const key of Object.values(UniversalMoveKey)) {
            merged[key] = universal[key] ?? base.universal[key];
        }

        return merged;
    }

    /**
     * @returns {UniversalMoves} Movimientos universales completos (incluye defaults)
     */
    get universal() { return this.#universal; }
    get normal() { return this.#normal; }
    get special() { return this.#special; }
    get overdrive() { return this.#overdrive; }
}