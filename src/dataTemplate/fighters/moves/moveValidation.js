import { Input } from "../../input/enums/Input.js";
import { detectMotion } from "../../input/enums/detectMotion.js";
import { MoveState } from "./enums/MoveState.jsx";
import { MoveCategory } from "./enums/moveCategory.js";

// region Utils (Se mantienen igual)
const VALID_BUTTONS = [Input.P, Input.K, Input.S, Input.HS, Input.R, Input.D];
const isDirection = (i) => /^[1-9]$/.test(i);
const getDirections = (inputs) => inputs.filter(isDirection);
const getButtons = (inputs) => inputs.filter(i => VALID_BUTTONS.includes(i));
const hasMotion = (inputs) => {
    for (let i = 0; i < inputs.length; i++) {
        const slice = inputs.slice(i);
        if (detectMotion(slice)) return true;
    }
    return false;
};
const countDirections = (inputs) => getDirections(inputs).length;

const validateCategory = (move, expected, context) => {
    if (move.moveCategory !== expected) {
        console.warn(`❌ [${context}] ${move.name} → Categoría incorrecta (${move.moveCategory}), debería ser ${expected}`);
    }
};

function countMotions(inputs) {
    let count = 0;
    for (let i = 0; i < inputs.length; i++) {
        const slice = inputs.slice(i);
        const motion = detectMotion(slice);
        if (motion) { count++; i += motion.length - 1; }
    }
    return count;
}
// endregion

// region Universal
export function validateUniversalMove(key, move) {
    const inputs = move.inputList;
    const directions = getDirections(inputs);
    const buttons = getButtons(inputs);

    const warn = (msg) => console.warn(`❌ [Universal:${key}] ${move.name} → ${msg}`);

    validateCategory(move, MoveCategory.UNIVERSAL, `Universal:${key}`);

    const expectedButton = key.split("_").pop().toUpperCase();
    if (!buttons.includes(expectedButton)) warn(`Debe usar botón ${expectedButton}`);

    // Validar cada estado dentro del Move
    move.states.forEach(s => {
        if (key.startsWith("neutral")) {
            if (directions.length > 0) warn("Neutral no debe tener direcciones");
            if (s.state !== MoveState.STAND) warn(`Estado ${s.state} incorrecto para Neutral (esperado STAND)`);
        }

        if (key.startsWith("down")) {
            if (!inputs.includes(Input.DOWN)) warn("Down debe incluir input DOWN");
            if (s.state !== MoveState.CROUCH) warn(`Estado ${s.state} incorrecto para Down (esperado CROUCH)`);
        }

        if (key.startsWith("air")) {
            if (s.state !== MoveState.AIR) warn(`Estado ${s.state} incorrecto para Air (esperado AIR)`);
        }
    });

    validateMoveConsistency(move);
}
// endregion

// region Normal, Special, Overdrive (Simplificados para usar iteración de estados)
export function validateNormalMove(move) {
    validateCategory(move, MoveCategory.NORMAL, "Normal");
    if (getDirections(move.inputList).length > 1) console.warn(`⚠️ [Normal] ${move.name} → Solo puede tener una dirección`);
    if (hasMotion(move.inputList)) console.warn(`⚠️ [Normal] ${move.name} → No puede tener motion input`);
    validateMoveConsistency(move);
}

export function validateSpecialMove(move) {
    validateCategory(move, MoveCategory.SPECIAL, "Special");
    const inputs = move.inputList;
    if (!hasMotion(inputs) && getDirections(inputs).length <= 1) {
        console.warn(`🔥 [Special] ${move.name} → Debe tener al menos un motion o varias direcciones`);
    }
    validateMoveConsistency(move);
}

export function validateOverdriveMove(move) {
    validateCategory(move, MoveCategory.OVERDRIVE, "Overdrive");
    if (countMotions(move.inputList) === 0) console.warn(`💀 [Overdrive] ${move.name} → Debe tener al menos un motion`);
    validateMoveConsistency(move);
}
// endregion

// region Duplicate Inputs
export function validateDuplicateInputs(moveSet) {
    const map = new Map();
    const allMoves = [
        ...Object.values(moveSet.universal),
        ...moveSet.normal,
        ...moveSet.special,
        ...moveSet.overdrive
    ].filter(Boolean);

    allMoves.forEach(move => {
        const inputStr = move.inputList.join("-");
        // Un move puede colisionar en varios estados
        move.states.forEach(s => {
            const key = `${inputStr}|${s.state}`;
            if (!map.has(key)) map.set(key, []);
            map.get(key).push({ name: move.name, cat: move.moveCategory });
        });
    });

    map.forEach((moves, inputKey) => {
        if (moves.length > 1) {
            console.warn(`🚨 Inputs duplicados detectados para el estado [${inputKey}]`);
            moves.forEach(m => console.warn(`   → ${m.name} (${m.cat})`));
        }
    });
}
// endregion

// region Consistency (GLOBAL)
export function validateMoveConsistency(move) {
    const motion = hasMotion(move.inputList);
    const cat = move.moveCategory;

    if (motion && cat !== MoveCategory.SPECIAL && cat !== MoveCategory.OVERDRIVE) {
        console.warn(`💥 [Consistency] ${move.name} → Tiene motion pero categoría es ${cat}`);
    }
    if (!motion && cat === MoveCategory.SPECIAL) {
        console.warn(`💥 [Consistency] ${move.name} → Es SPECIAL pero no tiene motion`);
    }

    // Nueva validación: Asegurar que hay al menos un estado
    if (!move.states || move.states.length === 0) {
        console.warn(`💥 [Consistency] ${move.name} → NO TIENE ESTADOS DEFINIDOS`);
    }
}
// endregion

// region Crouch
export function validateCrouchState(move) {
    if (!move.inputList || move.inputList.length === 0) return;

    const firstInput = move.inputList[0];
    const isDownInput = [Input.DOWN, Input.DOWN_LEFT, Input.DOWN_RIGHT].includes(firstInput);

    if (isDownInput && !detectMotion(move.inputList)) {
        move.states.forEach(s => {
            if (s.state !== MoveState.CROUCH) {
                console.warn(
                    `⚠️ [CrouchCheck] ${move.name} → Primer input es ${firstInput}, ` +
                    `pero el estado ${s.state} no es CROUCH.`
                );
            }
        });
    }
}
// endregion

// region Sorting (Se mantiene igual, operando sobre inputList)
const BUTTON_ORDER = [Input.P, Input.K, Input.S, Input.HS, Input.R, Input.D];
function getButtonPriority(move) {
    const btn = move.inputList.find(i => BUTTON_ORDER.includes(i));
    return btn ? BUTTON_ORDER.indexOf(btn) : 999;
}
export function sortMoves(moves) {
    return [...moves].sort((a, b) => {
        const btnDiff = getButtonPriority(a) - getButtonPriority(b);
        if (btnDiff !== 0) return btnDiff;
        return countDirections(a.inputList) - countDirections(b.inputList);
    });
}
// endregion