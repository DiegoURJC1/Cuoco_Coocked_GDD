import {FrameType} from "./frameType.js";

/**
 * Representa un movimiento de un luchador.
 */
export class Move {
    // region Variables
    /**
     * Nombre del movimiento.
     * @type {string}
     */
    #name;

    /**
     * Categoría del movimiento (universal, simple, special, overdrive)
     * @type {string}
     */
    #moveCategory;

    /**
     * Descripción del movimiento (puede contener JSX)
     * @type {JSX.Element|string}
     */
    #description;

    /**
     * Secuencia de inputs que ejecuta el movimiento.
     * @type {string[]}
     */
    #inputList;

    /**
     * Lista de frames del movimiento.
     * Cada frame puede tener tipo, color, cancelWindow, projectile
     * @type {Array<{type: Object, cancelWindow?: boolean, projectile?: boolean}>}
     */
    #frameList;

    /**
     * Datos adicionales del movimiento.
     * @type {{damage: number[], guard: string|string[], onBlock: number[], invuln: boolean}}
     */
    #moveData;
    // endregion

    // region Constructor
    /**
     * Crea un nuevo movimiento.
     *
     * @param {string} name Nombre del movimiento.
     * @param {string} moveCategory Categoría (MoveCategory).
     * @param {JSX.Element|Function|string} description Descripción del movimiento.
     * @param {string[]} inputList Lista de inputs (Input).
     * @param {Array<{type: Object, cancelWindow?: boolean, projectile?: boolean}>} frameList Lista de frames.
     * @param {{damage: number[], guard: string|string[], onBlock: number[], invuln: boolean}} moveData Datos adicionales.
     */
    constructor(name, moveCategory, description, inputList, frameList, moveData) {
        this.#name = name;
        this.#moveCategory = moveCategory;
        this.#description = typeof description === "function" ? description(this) : description;
        this.#inputList = inputList;
        this.#frameList = frameList;
        this.#moveData = moveData;
    }
    // endregion

    // region Frame Analysis
    /**
     * Cuenta los frames consecutivos de un tipo determinado.
     * Si hay secuencias partidas, devuelve un array de números.
     *
     * @param {Object} frameType FrameType a contar (ej. FrameType.STARTUP)
     * @returns {string} Formato ejemplo: "4(5)4"
     */
    getFrameSequence(frameType) {
        const seq = [];
        let count = 0;
        for (let i = 0; i < this.#frameList.length; i++) {
            const frame = this.#frameList[i];
            if (frame.type === frameType) {
                count++;
            } else {
                if (count > 0) {
                    seq.push(count);
                    count = 0;
                }
            }
        }
        if (count > 0) seq.push(count);
        // convierte [4,5,4] → "4(5)4"
        return seq.map((v, i) => (i === 0 ? v : `(${v})`)).join('');
    }

    /**
     * Obtiene la secuencia de startup frames.
     */
    getStartupSequence() { return this.getFrameSequence(FrameType.STARTUP); }

    /**
     * Obtiene la secuencia de active frames.
     */
    getActiveSequence() { return this.getFrameSequence(FrameType.ACTIVE); }

    /**
     * Obtiene la secuencia de recovery frames.
     */
    getRecoverySequence() { return this.getFrameSequence(FrameType.RECOVERY); }
    // endregion


    // region Getters
    get name() { return this.#name; }
    get moveCategory() { return this.#moveCategory; }
    get description() { return this.#description; }
    get inputList() { return this.#inputList; }
    get frameList() { return this.#frameList; }
    get moveData() { return this.#moveData; }
    // endregion
}