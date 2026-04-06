import { Input } from "../../input/enums/Input.js";
import { detectMotion } from "../../input/enums/detectMotion.js";
import { MoveState } from "./enums/MoveState.js";
import { MoveCategory } from "./enums/moveCategory.js";


// region Utils

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
        console.warn(
            `❌ [${context}] ${move.name} → Categoría incorrecta (${move.moveCategory}), debería ser ${expected}`
        );
    }
};

function countMotions(inputs) {
    let count = 0;

    for (let i = 0; i < inputs.length; i++) {
        const slice = inputs.slice(i);
        const motion = detectMotion(slice);

        if (motion) {
            count++;
            i += motion.length - 1; // saltar el motion detectado
        }
    }

    return count;
}

// endregion

// region Universal

export function validateUniversalMove(key, move) {
    const inputs = move.inputList;
    const directions = getDirections(inputs);
    const buttons = getButtons(inputs);

    const warn = (msg) => {
        console.warn(`❌ [Universal:${key}] ${move.name} → ${msg}`);
    };

    // categoría
    validateCategory(move, MoveCategory.UNIVERSAL, `Universal:${key}`);

    // botón correcto
    const expectedButton = key.split("_").pop().toUpperCase();

    if (!buttons.includes(expectedButton)) {
        warn(`Debe usar botón ${expectedButton}`);
    }

    // NEUTRAL
    if (key.startsWith("neutral")) {
        if (directions.length > 0) {
            warn("No debe tener direcciones");
        }

        if (move.state !== MoveState.STAND) {
            warn("Debe tener state STAND");
        }
    }

    // DOWN
    if (key.startsWith("down")) {
        if (!inputs.includes(Input.DOWN)) {
            warn("Debe incluir DOWN");
        }

        if (move.state !== MoveState.CROUCH) {
            warn("Debe tener state CROUCH");
        }

        if (directions.length !== 1) {
            warn("Debe tener solo una dirección (DOWN)");
        }
    }

    // AIR
    if (key.startsWith("air")) {
        if (directions.length > 0) {
            warn("No debe tener direcciones");
        }

        if (move.state !== MoveState.AIR) {
            warn("Debe tener state AIR");
        }
    }

    // validación global extra
    validateMoveConsistency(move);
}

// endregion

// region Normal

export function validateNormalMove(move) {
    const warn = (msg) => {
        console.warn(`⚠️ [Normal] ${move.name} → ${msg}`);
    };

    validateCategory(move, MoveCategory.NORMAL, "Normal");

    const inputs = move.inputList;
    const directions = getDirections(inputs);

    if (directions.length > 1) {
        warn("Solo puede tener una dirección");
    }

    if (hasMotion(inputs)) {
        warn("No puede tener motion input");
    }

    validateMoveConsistency(move);
}

// endregion

// region Special

export function validateSpecialMove(move) {
    const warn = (msg) => {
        console.warn(`🔥 [Special] ${move.name} → ${msg}`);
    };

    validateCategory(move, MoveCategory.SPECIAL, "Special");

    const inputs = move.inputList;
    const directions = getDirections(inputs);

    if (!hasMotion(inputs) && directions.length <= 1) {
        warn("Debe tener al menos un motion o varias direcciones");
    }

    validateMoveConsistency(move);
}

// endregion

// region Overdrive

export function validateOverdriveMove(move) {
    const warn = (msg) => {
        console.warn(`💀 [Overdrive] ${move.name} → ${msg}`);
    };

    validateCategory(move, MoveCategory.OVERDRIVE, "Overdrive");

    const inputs = move.inputList;

    const motions = countMotions(inputs);

    if (motions === 0) {
        warn("Debe tener al menos un motion");
    }

    validateMoveConsistency(move);
}

// endregion


// region Duplicate Inputs

function normalizeInput(move) {
    // Comparar el state para diferenciar moves con mismo input pero distinto estado
    return move.inputList.join("-") + `|${move.state}`;
}

export function validateDuplicateInputs(moveSet) {
    const map = new Map();

    const allMoves = [
        ...Object.values(moveSet.universal),
        ...moveSet.normal,
        ...moveSet.special,
        ...moveSet.overdrive
    ];

    allMoves.forEach(move => {
        if (!move) return;

        const key = normalizeInput(move);

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(move);
    });

    // detectar duplicados
    map.forEach((moves, inputKey) => {
        if (moves.length > 1) {
            console.warn(`🚨 Inputs duplicados [${inputKey}]`);

            moves.forEach(m => {
                console.warn(`   → ${m.name} (${m.moveCategory}, state=${m.state})`);
            });
        }
    });
}

// endregion

// region Consistency (GLOBAL)

export function validateMoveConsistency(move) {
    const warn = (msg) => {
        console.warn(`💥 [Consistency] ${move.name} → ${msg}`);
    };

    const motion = hasMotion(move.inputList);

    if (motion && move.moveCategory !== MoveCategory.SPECIAL && motion && move.moveCategory !== MoveCategory.OVERDRIVE) {
        warn("Tiene motion pero no es SPECIAL");
    }

    if (!motion && move.moveCategory === MoveCategory.SPECIAL) {
        warn("Es SPECIAL pero no tiene motion");
    }
}

// endregion

// region Sorting

const BUTTON_ORDER = [Input.P, Input.K, Input.S, Input.HS, Input.R, Input.D];

function getButtonPriority(move) {
    const btn = move.inputList.find(i => BUTTON_ORDER.includes(i));

    if (!btn) {
        console.warn(`⚠️ Move sin botón válido: ${move.name}`);
        return 999;
    }

    return BUTTON_ORDER.indexOf(btn);
}

function getComplexity(move) {
    return countDirections(move.inputList);
}

export function sortMoves(moves) {
    return [...moves].sort((a, b) => {
        const btnDiff = getButtonPriority(a) - getButtonPriority(b);
        if (btnDiff !== 0) return btnDiff;

        return getComplexity(a) - getComplexity(b);
    });
}

// endregion