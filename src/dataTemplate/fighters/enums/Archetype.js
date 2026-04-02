/**
 * Arquetipos de personajes en el juego.
 * Cada arquetipo define un estilo de juego con sus características únicas.
 *
 * @typedef {Object} Archetype
 * @property {string} name - Nombre legible del arquetipo.
 * @property {string} description - Descripción del estilo de juego del arquetipo.
 */

/**
 * Objeto que contiene todos los arquetipos disponibles en el juego.
 * Cada propiedad es un arquetipo con un `name` y una `description`.
 * @type {Object.<string, Archetype>}
 * @readonly
 */
export const Archetype = Object.freeze({
    BALANCE: {
        name: "Balance",
        description: "Fácil de utilizar y sin desventajas obvias."
    },
    POWER: {
        name: "Power",
        description: "Golpea con fuerza al oponente antes de que tengan la oportunidad de recuperarse."
    },
    ZONING: {
        name: "Zoneador",
        description: "Su largo alcance le hace fuerte a largas distancias."
    },
    RUSHDOWN: {
        name: "Rushdown",
        description: "Abruma al oponente con presión rápida y contínua."
    },
    UNIQUE: {
        name: "Único",
        description: "Personaje con movimientos muy peculiares."
    },
    ONESHOT: {
        name: "One Shot",
        description: "Gran poder a la espera de una ventana."
    },
    GRAPPLER: {
        name: "Grappler",
        description: "Agarres fuertes a corta distancia."
    },
    PUPPET: {
        name: "Puppet",
        description: "Controla un segundo personaje o invoca ayudantes."
    },
    STANCE: {
        name: "Stance",
        description: "Cambia su estilo y movimientos disponibles según la pose."
    }
});