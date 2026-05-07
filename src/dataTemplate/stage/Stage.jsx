export class Stage {
    /**
     * ID del escenario.
     * @type {string}
     */
    #id;
    /**
     * Nombre del escenario.
     * @type {string}
     */
    #name;

    /**
     * Descripción del luchador (puede contener JSX).
     * @type {JSX.Element|string}
     */
    #description;

    /**
     * Nombre del archivo del escenario.
     * @type {string}
     */
    #imagePath;

    #STAGE_PATH = `${import.meta.env.BASE_URL}stages/`
    constructor({name, description, imageName}) {
        this.#id = this.#generateIdFromName(name);
        this.#name = name;
        this.#description = typeof description === "function" ? description(this) : description;
        this.#imagePath = this.#STAGE_PATH + imageName;
    }

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

    /** @returns {string} ID generado del luchador para rutas */
    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    get imagePath() {
        return this.#imagePath;
    }

    get stageArt() {
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
                    src={this.#imagePath}
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                    }}
                    alt={this.#name + "-stage"}
                />
            </div>
        );
    }
}