/**
 * Representa un luchador en el juego.
 */
export class Fighter {
    // region Variables

    #FULL_ART_PATH = "/fighters/fullArt/"
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
     * Arquetipo del luchador.
     * @type {Object}
     */
    #archetype;

    /**
     * Descripción del luchador (puede contener JSX).
     * @type {JSX.Element}
     */
    #description;

    /**
     * Facilidad de uso del luchador.
     * Valor entre 0.5 y 5, en incrementos de 0.5.
     * @type {number}
     */
    #easyToUse;

    /**
     * Fuente del luchador (Base Game/Season Pass).
     * @type {Object}
     */
    #source;

    /**
     * Lista de comandos/movimientos del luchador.
     * @type {Array<Object>}
     */
    #moveList;

    /**
     * Icono del luchador (URL o referencia).
     * @type {string}
     */
    #icon;

    /**
     * Arte completo del luchador.
     * @type {string}
     */
    #fullArt;

    /**
     * Configuración del retrato basada en el fullArt.
     * Define qué parte de la imagen se muestra.
     *
     * @typedef {Object} PortraitConfig
     * @property {number} x Centro horizontal (0–1)
     * @property {number} y Centro vertical (0–1)
     * @property {number} zoom Nivel de zoom (>1 acerca)
     */
    /**
     * Configuración del retrato basada en el fullArt
     * @type {PortraitConfig}
     */
    #portraitConfig
    // endregion

    // region Constructor
    /**
     * Crea un nuevo luchador.
     *
     * @param {Object} options Opciones de inicialización del luchador.
     * @param {string} options.name Nombre del luchador.
     * @param {Object} options.archetype Arquetipo del luchador (ej. `Archetypes.BALANCE`).
     * @param {JSX.Element|Function|string} options.description Descripción del luchador (puede contener JSX).
     * @param {number} [options.easyToUse=2.5] Facilidad de uso, entre 0.5 y 5, en incrementos de 0.5.
     * @param {Array<Object>} [] Lista de comandos/movimientos.
     * @param {Object} [options.source] Fuente del luchador (ej. `Source.BASE_GAME` o `createSeasonPass(n)`).
     * @param {string} [options.icon] URL o referencia del icono.
     * @param {string} [options.fullArt] URL o referencia del arte completo.
     * @param {PortraitConfig} [options.portraitConfig]
     */
    constructor({
                    name,
                    archetype,
                    description,
                    easyToUse = 2.5,
                    moveList = [],
                    source,
                    icon,
                    fullArt,
                    portraitConfig
                }) {
        this.#id = this.#generateIdFromName(name);
        this.#name = name;
        this.#archetype = archetype;
        this.#description = typeof description === "function" ? description(this) : description;
        this.#easyToUse = this.#normalizeEasyToUse(easyToUse);
        this.#moveList = moveList;
        this.#source = source;
        this.#icon = icon;
        this.#fullArt = this.#FULL_ART_PATH + fullArt;
        this.#portraitConfig = portraitConfig;
    }

    // endregion

    // region Private functions

    /**
     * Genera un ID amigable para URLs a partir de un nombre.
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
            .replace(/\s+/g, "-");       // espacios → guiones
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

    /** @returns {Object} Arquetipo del luchador */
    get archetype() {
        return this.#archetype;
    }

    /** @returns {JSX.Element} Descripción del luchador */
    get description() {
        return this.#description;
    }

    /** @returns {number} Facilidad de uso (0.5 a 5) */
    get easyToUse() {
        return this.#easyToUse;
    }

    /** @returns {Array<Object>} Lista de comandos/movimientos */
    get moveList() {
        return this.#moveList;
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
                style={{ width: "100%", aspectRatio: "auto" }}
                alt={this.#name + "-full-art"}/>
        )
    }

    /** @returns {JSX.Element} Retrato del luchador */
    get portraitArt() {
        const { x, y, zoom } = this.#portraitConfig;

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