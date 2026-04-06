import { Input } from "../../input/enums/Input.js";
import { detectMotion } from "../../input/enums/detectMotion.js";
import { MoveState } from "./enums/MoveState.js";
import { UniversalMoveKey } from "./enums/UniversalMoveKey.js";

// region Utils

const isDirection = (i) => /^[1-9]$/.test(i);

const isButton = (i) => !isDirection(i);

const getDirections = (inputs) => inputs.filter(isDirection);
const getButtons = (inputs) => inputs.filter(isButton);

const hasMotion = (inputs) => {
    for (let i = 0; i < inputs.length; i++) {
        const slice = inputs.slice(i);
        if (detectMotion(slice)) return true;
    }
    return false;
};

const countStraightDirections = (inputs) => getDirections(inputs).length;

// endregion


// region Validate Universal

export function validateUniversalMove(key, move) {
    const inputs = move.inputList;
    const directions = getDirections(inputs);
    const buttons = getButtons(inputs);

    const warn = (msg) => {
        console.warn(`❌ [Universal:${key}] ${move.name} → ${msg}`);
    };

    // Correct Button
    const expectedButton = key.split("_").pop().toUpperCase(); // P, K, S...

    if (!buttons.includes(expectedButton)) {
        warn(`Debe usar botón ${expectedButton}`);
    }

    // neutral
    if (key.startsWith("neutral")) {
        if (directions.length > 0) {
            warn("No debe tener direcciones");
        }

        if (move.state !== MoveState.STAND) {
            warn("Debe tener state STAND");
        }
    }

    // down
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

    // air
    if (key.startsWith("air")) {
        if (directions.length > 0) {
            warn("No debe tener direcciones");
        }

        if (move.state !== MoveState.AIR) {
            warn("Debe tener state AIR");
        }
    }
}

// endregion

// region Normal

export function validateNormalMove(move) {
    const inputs = move.inputList;
    const directions = getDirections(inputs);

    const warn = (msg) => {
        console.warn(`⚠️ [Normal] ${move.name} → ${msg}`);
    };

    if (directions.length > 1) {
        warn("Solo puede tener una dirección");
    }

    if (hasMotion(inputs)) {
        warn("No puede tener motion input");
    }
}

// endregion

// region Special

export function validateSpecialMove(move) {
    const inputs = move.inputList;

    const warn = (msg) => {
        console.warn(`🔥 [Special] ${move.name} → ${msg}`);
    };

    const directions = getDirections(inputs);

    if (!hasMotion(inputs) && directions.length <= 1) {
        warn("Debe tener al menos un motion o más de una dirección");
    }
}

// endregion

// region Moves order

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
    return move.inputList.filter(i => /^[1-9]$/.test(i)).length;
}

export function sortMoves(moves) {
    return [...moves].sort((a, b) => {
        const btnDiff = getButtonPriority(a) - getButtonPriority(b);
        if (btnDiff !== 0) return btnDiff;

        return getComplexity(a) - getComplexity(b);
    });
}

// endregion
