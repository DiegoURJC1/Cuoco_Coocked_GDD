import {FrameType} from "./enums/frameType.js";
import {MoveState} from "./enums/MoveState.jsx";


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

    #id;

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
     * Estado adicional del movimiento
     * @type {Array<{state: string, frameList: Array, moveData: Object}>}
     */
    #states;

    /**
     * Secuencia de inputs que ejecuta el movimiento.
     * @type {string[]}
     */
    #inputList;

    // endregion

    // region Constructor
    /**
     * Crea un nuevo movimiento.
     *
     * @type {Move}
     * @property {string} name - Nombre del movimiento.
     * @property {MoveCategory} moveCategory - Categoría del movimiento (Special, Normal, etc.).
     * @property {React.ReactNode} description - Descripción del movimiento (puede usar JSX).
     * @property {Array<string>} inputList - Secuencia de inputs para ejecutar el movimiento.
     * @property {Array<Frame>} frameList - Lista de frames del movimiento.
     * @property {Object} states - Propiedades según el estado del movimiento.
     * @property {string} states.state
     * @property {Array<{type: Object, cancelWindow?: boolean, projectile?: boolean}>} states.frameList
     * @property {Object} states.moveData - Datos adicionales del movimiento.
     * @property {number[]} states.moveData.damage - Daño por golpe.
     * @property {string[]} states.moveData.guard - Guard de cada golpe ("High", "Low", etc.).
     * @property {number[]} states.moveData.onBlock - Frames de ventaja/desventaja al bloquear.
     * @property {boolean} states.moveData.invuln - Si el movimiento tiene invulnerabilidad.
     */
    constructor({ name, moveCategory, description, inputList, states = [] }) {
        this.#id = this.#generateIdFromName(name);
        this.#name = name;
        this.#moveCategory = moveCategory;
        this.#description = typeof description === "function" ? description(this) : description;
        this.#inputList = inputList;

        // Mapeamos los estados para asegurar que tengan la estructura correcta
        this.#states = states.map(s => ({
            state: s.state || MoveState.STAND,
            frameList: s.frameList || [],
            moveData: {
                damage: s.moveData?.damage || [0],
                guard: s.moveData?.guard || [],
                onBlock: s.moveData?.onBlock || [0],
                invuln: s.moveData?.invuln || false,
                ...s.moveData
            }
        }));
    }
    // endregion

    /**
     * Genera un ID amigable para URL a partir de un nombre.
     * @param {string} name Nombre original
     * @returns {string} ID en minúsculas, sin acentos ni caracteres especiales
     */
    #generateIdFromName(name) {
        return name
            .normalize("NFD")            // separa acentos
            .replace(/[\u0300-\u036f]/g, "") // quita acentos
            .toLowerCase()
            .replace(/[^a-z0-9 ]/g, "")  // quita caracteres no alfanuméricos
            .trim()
            .replace(/\s+/g, "-");       // espacios -> guiones
    }

    // region Frame Analysis
    /**
     * Cuenta los frames consecutivos de un tipo determinado.
     * Si hay secuencias partidas, devuelve un array de números.
     *
     * @param {Object} frameType FrameType a contar (ej. FrameType.STARTUP)
     * @param state
     * @returns {string} Formato ejemplo: "4(5)4"
     */
    getFrameSequence(frameType, state = MoveState.STAND) {
        const stateObj = this.#states.find(s => s.state === state);
        const frames = stateObj?.frameList || [];
        const seq = [];
        let count = 0;

        for (let i = 0; i < frames.length; i++) {
            if (frames[i].type === frameType) {
                count++;
            } else if (count > 0) {
                seq.push(count);
                count = 0;
            }
        }
        if (count > 0) seq.push(count);
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
     * Obtiene la secuencia de recoveryFrames frames.
     */
    getRecoverySequence() { return this.getFrameSequence(FrameType.RECOVERY); }
    // endregion


    // region Getters
    get id() { return this.#id; }
    get name() { return this.#name; }
    get moveCategory() { return this.#moveCategory; }
    get description() { return this.#description; }
    get inputList() { return this.#inputList; }
    get states() { return this.#states; }

    /** Helper para obtener el total de frames de un estado específico */
    getTotalFrames(stateIndex = 0) {
        return this.#states[stateIndex]?.frameList.length || 0;
    }
    // endregion
}