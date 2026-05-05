/**
 * Representa un tipo de frame en el juego.
 *
 * @typedef {Object} Frame
 * @property {string} name - Identificador legible del frame.
 * @property {string} color - Color asociado al frame, en formato HEX, para visualización.
 */

/**
 * Tipos de frames principales en ataques o movimientos.
 * Cada frame tiene un `name` y un `color` para visualización en UI.
 * @type {Object.<string, Frame>}
 * @readonly
 */
export const FrameType = Object.freeze({
    STARTUP: {
        name: "startup",
        color: "#36b27d"
    },
    ACTIVE: {
        name: "active",
        color: "#fd5c5c"
    },
    INACTIVE: {
        name: "inactive",
        color: "#7f7f7f"
    },
    RECOVERY: {
        name: "recoveryFrames",
        color: "#0068b5"
    },
    SPECIAL_RECOVERY: {
        name: "special recoveryFrames",
        color: "#d968cd"
    }
});

/**
 * Tipos de frames especiales adicionales.
 * Usados para ataques con propiedades especiales.
 * @type {Object.<string, Frame>}
 * @readonly
 */
export const FrameSpecial = Object.freeze({
    PROJECTILE_ACTIVE: {
        name: "projectile active",
        color: "#fd0000"
    },
    CANCEL_WINDOW: {
        name: "cancel window",
        color: "#ccbd04"
    }
});