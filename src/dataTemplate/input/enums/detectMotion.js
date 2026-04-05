import {MotionType} from "./MotionType.js";
import {LookDirection} from "./LookDirection.js";

/**
 * Lista de secuencias de inputs reconocidas como "motions" (movimientos especiales de palanca).
 * Cada entrada contiene:
 * @type {Object} Motion
 * @property {string} type Tipo de movimiento (MotionType), ej: 'Z', 'QUARTER', 'HALF', 'FULL'.
 * @property {LookDirection} dir Dirección inicial del movimiento, RIGHT o LEFT.
 *
 * * @type {Array<[string, Motion]>}
 */
const motions = [
    ["63214789", { type: MotionType.FULL, dir: LookDirection.RIGHT }],
    ["41236987", { type: MotionType.FULL, dir: LookDirection.LEFT }],
    ["69874123", { type: MotionType.FULL, dir: LookDirection.RIGHT }],
    ["47896321", { type: MotionType.FULL, dir: LookDirection.LEFT }],

    ["41236", { type: MotionType.HALF, dir: LookDirection.RIGHT }],
    ["63214", { type: MotionType.HALF, dir: LookDirection.LEFT }],

    ["623", { type: MotionType.Z, dir: LookDirection.RIGHT }],
    ["421", { type: MotionType.Z, dir: LookDirection.LEFT }],

    ["236", { type: MotionType.QUARTER, dir: LookDirection.RIGHT }],
    ["214", { type: MotionType.QUARTER, dir: LookDirection.LEFT }],
];

/**
 * Detecta un motion dentro de un array de inputs tipo numpad.
 *
 * @param {string[]|number[]} inputs - Secuencia de direcciones (ej: ['2','3','6'] o [2,3,6])
 * @returns {*&{length: *}}
 *          Devuelve un objeto con:
 *          - `type`: tipo de motion detectado (MotionType)
 *          - `dir`: dirección inicial del motion (LookDirection)
 *          - `length`: longitud de la secuencia que coincide con el motion
 *          Retorna `null` si no se detecta ningún motion.
 */
export function detectMotion(inputs) {
    const str = inputs.join("");

    for (const [pattern, motion] of motions) {
        if (str.startsWith(pattern)) {
            return { ...motion, length: pattern.length };
        }
    }

    return null;
}