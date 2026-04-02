import {MotionType} from "./MotionType.js";

const motions = [
    ["63214789", { type: MotionType.FULL, dir: "6" }],
    ["21478963", { type: MotionType.FULL, dir: "4" }],
    ["14789632", { type: MotionType.FULL, dir: "6" }],
    ["78963214", { type: MotionType.FULL, dir: "6" }],

    ["41236", { type: MotionType.HALF, dir: "6" }],
    ["63214", { type: MotionType.HALF, dir: "4" }],

    ["623", { type: MotionType.Z, dir: "6" }],
    ["421", { type: MotionType.Z, dir: "4" }],

    ["236", { type: MotionType.QUARTER, dir: "6" }],
    ["214", { type: MotionType.QUARTER, dir: "4" }],
];

/**
 * Detecta motion en cualquier slice del array
 * @param {string[]|number[]} inputs
 * @returns null|{type:string, dir:string, length:number}
 */
export function detectMotion(inputs) {
    const str = inputs.join("");

    for (const [pattern, motion] of motions) {
        if (str.startsWith(pattern)) {
            return { ...motion, length: pattern.length }; // agregamos longitud del motion
        }
    }

    return null;
}