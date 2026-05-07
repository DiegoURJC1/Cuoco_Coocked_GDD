import {Source} from "./enums/Source.js";
import {MoveSet} from "./moves/MoveSet.jsx";

/**
 * Stats base.
 *
 * @typedef {Object} BaseStats
 * @property {number} health Salud máxima. Por defecto 100.
 * @property {number} walkSpeed Velocidad de caminar.
 * @property {number} runSpeed Velocidad de carrera.
 */


/**
 * Configuración del retrato basada en el fullArt.
 *
 * @typedef {Object} PortraitConfig
 * @property {number} x Centro horizontal (0–1)
 * @property {number} y Centro vertical (0–1)
 * @property {number} zoom Nivel de zoom (>1 acerca)
 */

/**
 * Ventajas y desventajas del luchador.
 *
 * @typedef {Object} ProsCons
 * @property {Array<JSX.Element|string|function>} pros Ventajas del personaje
 * @property {Array<JSX.Element|string|function>} cons Desventajas del personaje
 */

export const baseDefaultStats = {
    health: 400,
    walkSpeed: 50,
    runSpeed: 100
};

/**
 * Representa un luchador en el juego.
 */
export class Fighter {
    // region Variables

    #FULL_ART_PATH = `${import.meta.env.BASE_URL}fighters/fullArt/`;

    /**
     * ID del luchador.
     * @type {string}
     */
    #id;

    /**
     * Nombre del luchador.
     * @type {string}
     */
    #name;

    /**
     * Apodo del luchador.
     * @type {string}
     */
    #nickName;

    /**
     * Arquetipo del luchador.
     * @type {Object}
     */
    #archetype;

    /**
     * Descripción del luchador (puede contener JSX).
     * @type {JSX.Element|string}
     */
    #description;

    /**
     * Facilidad de uso del luchador.
     * Valor entre 0.5 y 5, en incrementos de 0.5.
     * @type {number}
     */
    #easyToUse;

    /**
     * Origen narrativo del personaje
     * @type {JSX.Element|string}
     */
    #narrativeOrigin;

    /**
     * Objeto con el texto de los pros y contras del luchador.
     * @type {ProsCons}
     */
    #prosCons;

    /**
     * Tipo de entidad del luchador (Food o Human).
     * @type {string}
     */
    #type;

    /**
     * Stats base del personaje como su salud o velocidad.
     * @type {{health: number, walkSpeed: number, runSpeed: number}}
     */
    #baseStats;

    /**
     * Fuente del luchador (Base Game/Season Pass).
     * @type {Object}
     */
    #source;

    /**
     * Conjunto de movimientos del luchador.
     * @type {MoveSet}
     */
    #moveSet;

    /**
     * Icono del luchador (URL o referencia).
     * @type {string|undefined}
     */
    #icon;

    /**
     * Arte completo del luchador.
     * @type {string}
     */
    #fullArt;

    /**
     * Configuración del retrato basada en el fullArt.
     * @type {PortraitConfig}
     */
    #portraitConfig;

    // endregion

    /**
     * Crea un nuevo luchador.
     *
     * @param {Object} options Opciones de inicialización del luchador.
     * @param {string} options.name Nombre del luchador.
     * @param {string} [options.nickName] Apodo del luchador.
     * @param {Object} options.archetype Arquetipo del luchador.
     * @param {string|Function|JSX.Element} options.description Descripción (puede ser función).
     * @param {number} [options.easyToUse=2.5] Facilidad de uso (0.5–5).
     * @param {string|Function|JSX.Element} [options.narrativeOrigin] Origen del luchador.
     * @param {ProsCons} [options.prosCons] Objeto con el texto de los pros y contras del luchador.
     * @param {string} [options.type] Tipo del luchador (Humano/Comida).
     * @param {MoveSet} [options.moveSet] Conjunto de movimientos. Si no se proporciona o es parcial,
     *         se completará automáticamente con movimientos por defecto.
     * @param {BaseStats} [options.baseStats] Stats básicos del personaje.
     * @param {Object} [options.source] Fuente del luchador.
     * @param {string} [options.icon|undefined] Icono del luchador.
     * @param {string} [options.fullArt|undefined] Arte completo del luchador.
     * @param {PortraitConfig} [options.portraitConfig|undefined] Configuración del retrato.
     */
    constructor({
                    name,
                    nickName,
                    archetype,
                    description,
                    easyToUse = 2.5,
                    narrativeOrigin,
                    prosCons = {pros: [], cons: []},
                    type,
                    baseStats = baseDefaultStats,
                    moveSet = new MoveSet(),
                    source = Source.BASE_GAME,
                    icon,
                    fullArt,
                    portraitConfig
                }) {
        this.#id = this.#generateIdFromName(name);
        this.#name = name;
        this.#nickName = nickName;
        this.#archetype = archetype;
        this.#description = typeof description === "function" ? description(this) : description;
        this.#easyToUse = this.#normalizeEasyToUse(easyToUse);
        this.#narrativeOrigin = typeof narrativeOrigin === "function" ? narrativeOrigin(this) : narrativeOrigin;
        this.#type = type;
        this.#baseStats = baseStats;
        if (!(moveSet instanceof MoveSet)) {
            throw new Error("moveSet must be an instance of MoveSet");
        }
        this.#moveSet = moveSet;
        this.#prosCons = {
            pros: (prosCons.pros ?? []).map(p =>
                typeof p === "function" ? p(this) : p
            ),
            cons: (prosCons.cons ?? []).map(c =>
                typeof c === "function" ? c(this) : c
            )
        };
        this.#source = source;
        this.#icon = icon;
        this.#fullArt = this.#FULL_ART_PATH + fullArt;
        this.#portraitConfig = portraitConfig;
    }

    // endregion

    // region Private functions

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

    /**
     * Normaliza `easyToUse` para que esté entre 0.5 y 5,
     * redondeado al múltiplo de 0.5 más cercano.
     * @private
     * @param {number} value Valor a normalizar
     * @returns {number} Valor normalizado
     */
    #normalizeEasyToUse(value) {
        const clamped = Math.min(Math.max(value, 0.5), 5);
        return Math.round(clamped * 2) / 2;
    }

    // endregion

    // region Getters
    /** @returns {string} ID generado del luchador para rutas */
    get id() {
        return this.#id;
    }

    /** @returns {string} Nombre del luchador */
    get name() {
        return this.#name;
    }

    /** @returns {string} Apodo del luchador */
    get nickName() {
        return this.#nickName;
    }

    /** @returns {Object} Arquetipo del luchador */
    get archetype() {
        return this.#archetype;
    }

    /** @returns {JSX.Element|string} Descripción del luchador */
    get description() {
        return this.#description;
    }

    /** @returns {number} Facilidad de uso (0.5 a 5) */
    get easyToUse() {
        return this.#easyToUse;
    }

    /** @returns {JSX.Element|string} Origen narrativo */
    get narrativeOrigin() {
        return this.#narrativeOrigin;
    }

    /** @returns {ProsCons} Ventajas y desventajas */
    get prosCons() {
        return this.#prosCons;
    }

    get type() {
        return this.#type;
    }

    /** @returns {BaseStats} Stats */
    get baseStats() {
        return this.#baseStats;
    }

    /** @returns {MoveSet} Conjunto de movimientos del luchador */
    get moveSet() {
        return this.#moveSet;
    }

    /** @returns {Object} Fuente del luchador */
    get source() {
        return this.#source;
    }

    /** @returns {string} Icono del luchador */
    get icon() {
        return this.#icon;
    }

    /** @returns {string} Arte completo del luchador */
    get fullArt() {
        return this.#fullArt;
    }

    get fullArtImg() {
        return (
            <img
                src={this.fullArt}
                style={{width: "100%", aspectRatio: "auto"}}
                alt={this.#name + "-full-art"}/>
        )
    }

    /** @returns {JSX.Element} Retrato del luchador */
    get portraitArt() {
        const {x, y, zoom} = this.#portraitConfig;

        return (
            <div
                style={{
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                }}
            >
                <img
                    src={this.fullArt}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",

                        transformOrigin: `${x * 100}% ${y * 100}%`,
                        transform: `scale(${zoom})`,
                    }}
                    alt={this.#name + "-portrait"}
                />
            </div>
        );
    }

    // endregion
}