import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/enums/moveCategory.js";
import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/enums/frameType.js";
import {Stance} from "../../../../dataTemplate/fighters/enums/Stance.js";
import {MoveSet} from "../../../../dataTemplate/fighters/moves/MoveSet.jsx";

// ==================== NORMALES ====================

const movePincho = new Move({
    name: "Pincho Rápido de Tenedor",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Ataque de alcance medio con buen control de espacio.</>
    ),
    inputList: [Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 6},
        {frameType: FrameType.ACTIVE, duration: 3},
        {frameType: FrameType.RECOVERY, duration: 11},
    ]),
    moveData: {
        damage: [10],
        guard: [Stance.HIGH],
        onBlock: [-1],
        invuln: false
    }
});

const moveCorte = new Move({
    name: "Corte de Cuchillo",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Corte diagonal con buena cobertura antiaérea.</>
    ),
    inputList: [Input.DOWN, Input.HS],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 9},
        {frameType: FrameType.ACTIVE, duration: 4},
        {frameType: FrameType.RECOVERY, duration: 16},
    ]),
    moveData: {
        damage: [25],
        guard: [Stance.HIGH],
        onBlock: [-2],
        invuln: false
    }
});

const moveSarten = new Move({
    name: "Golpe de Sartén",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Golpe pesado vertical. Alto daño.</>
    ),
    inputList: [Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 14},
        {frameType: FrameType.ACTIVE, duration: 5},
        {frameType: FrameType.RECOVERY, duration: 26},
    ]),
    moveData: {
        damage: [30],
        guard: [Stance.HIGH],
        onBlock: [-10],
        invuln: false
    }
});

// ==================== AGACHADO ====================

const movePinchazoBajo = new Move({
    name: "Pinchazo Bajo",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Ataque bajo con tenedor.</>
    ),
    inputList: [Input.DOWN, Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 6},
        {frameType: FrameType.ACTIVE, duration: 3},
        {frameType: FrameType.RECOVERY, duration: 12},
    ]),
    moveData: {
        damage: [8],
        guard: [Stance.LOW],
        onBlock: [0],
        invuln: false
    }
});

const moveBarrido = new Move({
    name: "Barrido de Cazo",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Barrido amplio que derriba.</>
    ),
    inputList: [Input.DOWN, Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 15},
        {frameType: FrameType.ACTIVE, duration: 6},
        {frameType: FrameType.RECOVERY, duration: 28},
    ]),
    moveData: {
        damage: [18],
        guard: [Stance.LOW],
        onBlock: [-12],
        invuln: false
    }
});

// ==================== AÉREOS ====================

const moveAereoPincho = new Move({
    name: "Pinchazo Aéreo",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Jump-in rápido con buen alcance.</>
    ),
    inputList: [Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 6},
        {frameType: FrameType.ACTIVE, duration: 5},
        {frameType: FrameType.RECOVERY, duration: 16},
    ]),
    moveData: {
        damage: [8],
        guard: [Stance.HIGH],
        onBlock: [1],
        invuln: false
    }
});

const moveAereoSarten = new Move({
    name: "Descenso de Sartén",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Ataque aéreo vertical de gran hitbox.</>
    ),
    inputList: [Input.HS],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 17},
        {frameType: FrameType.ACTIVE, duration: 8},
        {frameType: FrameType.RECOVERY, duration: 24},
    ]),
    moveData: {
        damage: [20],
        guard: [Stance.HIGH],
        onBlock: [-6],
        invuln: false
    }
});

// ==================== ESPECIALES ====================

const moveEstocada = new Move({
    name: "Estocada de Tenedor",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Herramienta principal de zoning.</>
    ),
    inputList: [Input.RIGHT, Input.R],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 12},
        {frameType: FrameType.ACTIVE, duration: 5},
        {frameType: FrameType.RECOVERY, duration: 18},
    ]),
    moveData: {
        damage: [18],
        guard: [Stance.HIGH],
        onBlock: [-3],
        invuln: false
    }
});

const movePicante = new Move({
    name: "Bote de Salsa Picante",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Proyectil que aplica quemado.</>
    ),
    inputList: [Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.R],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 18},
        {frameType: FrameType.ACTIVE, duration: 5},
        {frameType: FrameType.RECOVERY, duration: 22},
    ]),
    moveData: {
        damage: [12],
        guard: [Stance.HIGH],
        onBlock: [-5],
        invuln: false
    }
});

const moveMiel = new Move({
    name: "Bote de Miel",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Proyectil en arco que ralentiza.</>
    ),
    inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.R],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 20},
        {frameType: FrameType.ACTIVE, duration: 7},
        {frameType: FrameType.RECOVERY, duration: 24},
    ]),
    moveData: {
        damage: [10],
        guard: [Stance.HIGH],
        onBlock: [-4],
        invuln: false
    }
});

const moveVinagre = new Move({
    name: "Vinagre de la Casa",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Zona que aplica mareado.</>
    ),
    inputList: [Input.LEFT, Input.DOWN_LEFT, Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.R],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 22},
        {frameType: FrameType.ACTIVE, duration: 3},
        {frameType: FrameType.RECOVERY, duration: 20},
    ]),
    moveData: {
        damage: [14],
        guard: [Stance.LOW],
        onBlock: [-6],
        invuln: false
    }
});

const moveCorteMaestro = new Move({
    name: "Corte Maestro",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Antiaéreo que lanza al rival.</>
    ),
    inputList: [Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 7},
        {frameType: FrameType.ACTIVE, duration: 5},
        {frameType: FrameType.RECOVERY, duration: 30},
    ]),
    moveData: {
        damage: [22],
        guard: [Stance.LOW],
        onBlock: [-14],
        invuln: true
    }
});

const movePinza = new Move({
    name: "Pinza del Chef",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Agarre especial.</>
    ),
    inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 19},
        {frameType: FrameType.ACTIVE, duration: 4},
        {frameType: FrameType.RECOVERY, duration: 36},
    ]),
    moveData: {
        damage: [35],
        guard: [],
        onBlock: [0],
        invuln: false
    }
});

// ==================== OVERDRIVE ====================

const moveSuper = new Move({
    name: "Mise en Place",
    moveCategory: MoveCategory.OVERDRIVE,
    description: (
        <>Oleada de múltiples impactos con condimentos.</>
    ),
    inputList: [
        Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT,
        Input.UP_LEFT, Input.UP, Input.UP_RIGHT, Input.R
    ],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 17},
        {frameType: FrameType.ACTIVE, duration: 4},
        {frameType: FrameType.RECOVERY, duration: 15},
        {frameType: FrameType.ACTIVE, duration: 4},
        {frameType: FrameType.RECOVERY, duration: 15},
        {frameType: FrameType.ACTIVE, duration: 4},
        {frameType: FrameType.RECOVERY, duration: 22},
    ]),
    moveData: {
        damage: [65],
        guard: [Stance.HIGH],
        onBlock: [-8],
        invuln: true
    }
});

// ==================== EXPORT ====================

export const chefMoveSet = new MoveSet ({
    universal: {},

    normal: [
        movePincho,
        moveCorte,
        moveSarten,
        movePinchazoBajo,
        moveBarrido,
        moveAereoPincho,
        moveAereoSarten
    ],

    special: [
        moveEstocada,
        movePicante,
        moveMiel,
        moveVinagre,
        moveCorteMaestro,
        movePinza
    ],

    overdrive: [
        moveSuper
    ]
});