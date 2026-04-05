import {UniversalMoveKey} from "../../../../dataTemplate/fighters/moves/enums/UniversalMoveKey.js";
import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/enums/moveCategory.js";
import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/enums/frameType.js";
import {Stance} from "../../../../dataTemplate/fighters/enums/Stance.js";
import {MoveSet} from "../../../../dataTemplate/fighters/moves/MoveSet.jsx";

// ==================== NORMALES ====================

const moveManotazo = new Move({
    name: "Manotazo de albóndiga",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Una agrupación de pasta golpea con una albóndiga. Rápido y corto alcance.</>
    ),
    inputList: [Input.P],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 4},
        {frameType: FrameType.ACTIVE, duration: 2},
        {frameType: FrameType.RECOVERY, duration: 9},
    ]),
    moveData: {
        damage: [10],
        guard: [Stance.HIGH],
        onBlock: [-1],
        invuln: false
    }
});

const moveGancho = new Move({
    name: "Gancho de Ragú",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Uppercut ascendente de masa. Antiaéreo situacional.</>
    ),
    inputList: [Input.NEUTRAL, Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 12},
        {frameType: FrameType.ACTIVE, duration: 4},
        {frameType: FrameType.RECOVERY, duration: 22},
    ]),
    moveData: {
        damage: [25],
        guard: [Stance.HIGH],
        onBlock: [-6],
        invuln: false
    }
});

// ==================== AGACHADO ====================

const moveBarrido = new Move({
    name: "Barrido de fideos",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Barrido rápido bajo.</>
    ),
    inputList: [Input.DOWN, Input.L],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 5},
        {frameType: FrameType.ACTIVE, duration: 2},
        {frameType: FrameType.INACTIVE, duration: 10},
    ]),
    moveData: {
        damage: [8],
        guard: [Stance.LOW],
        onBlock: [0],
        invuln: false
    }
});

const moveGranBarrido = new Move({
    name: "Gran barrido",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Barrido pesado que tumba.</>
    ),
    inputList: [Input.DOWN, Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 13},
        {frameType: FrameType.ACTIVE, duration: 5},
        {frameType: FrameType.RECOVERY, duration: 24},
    ]),
    moveData: {
        damage: [18],
        guard: [Stance.LOW],
        onBlock: [-14],
        invuln: false
    }
});

// ==================== AÉREO ====================

const moveAereo = new Move({
    name: "Ensartado de masa aérea",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Golpe descendente en salto.</>
    ),
    inputList: [Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 5},
        {frameType: FrameType.ACTIVE, duration: 4},
    ]),
    moveData: {
        damage: [8],
        guard: [Stance.HIGH],
        onBlock: [0],
        invuln: false
    }
});

// ==================== ESPECIALES ====================

const movePlancha = new Move({
    name: "Plancha de pasta",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Caída pesada desde el aire. Alto daño.</>
    ),
    inputList: [Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 16},
        {frameType: FrameType.ACTIVE, duration: 6},
        {frameType: FrameType.RECOVERY, duration: 16},
    ]),
    moveData: {
        damage: [33],
        guard: [Stance.HIGH],
        onBlock: [-4],
        invuln: true
    }
});

const moveExtension = new Move({
    name: "Extensión de fideos",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Ataque a media distancia.</>
    ),
    inputList: [Input.RIGHT, Input.R],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 14},
        {frameType: FrameType.ACTIVE, duration: 6},
        {frameType: FrameType.RECOVERY, duration: 20},
    ]),
    moveData: {
        damage: [18],
        guard: [Stance.HIGH],
        onBlock: [-4],
        invuln: false
    }
});

const moveLlave = new Move({
    name: "Llave combinada",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Agarre con fideos.</>
    ),
    inputList: [Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.D],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 22},
        {frameType: FrameType.ACTIVE, duration: 3},
        {frameType: FrameType.RECOVERY, duration: 32},
    ]),
    moveData: {
        damage: [45],
        guard: [], // 👈 agarre, no bloqueable
        onBlock: [0],
        invuln: true
    }
});

const moveSalsa = new Move({
    name: "Salpicadura de salsa",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Proyectil de salsa que aplica estado.</>
    ),
    inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.R],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 18},
        {frameType: FrameType.ACTIVE, duration: 8},
        {frameType: FrameType.RECOVERY, duration: 24},
    ]),
    moveData: {
        damage: [17],
        guard: [Stance.HIGH],
        onBlock: [0],
        invuln: false
    }
});

const moveBola = new Move({
    name: "Bola de cañón",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Carga diagonal ascendente.</>
    ),
    inputList: [Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.S],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 10},
        {frameType: FrameType.ACTIVE, duration: 5},
        {frameType: FrameType.RECOVERY, duration: 20},
    ]),
    moveData: {
        damage: [14],
        guard: [Stance.HIGH],
        onBlock: [-2],
        invuln: false
    }
});

// ==================== OVERDRIVE ====================

const moveSuper = new Move({
    name: "Il grande condimento",
    moveCategory: MoveCategory.OVERDRIVE,
    description: (
        <>Explosión múltiple en área.</>
    ),
    inputList: [
        Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT,
        Input.LEFT, Input.UP_LEFT, Input.UP, Input.UP_RIGHT, Input.S
    ],
    frameList: createFrames([
        {frameType: FrameType.STARTUP, duration: 8},
        {frameType: FrameType.ACTIVE, duration: 12},
        {frameType: FrameType.INACTIVE, duration: 12},
        {frameType: FrameType.ACTIVE, duration: 6},
        {frameType: FrameType.INACTIVE, duration: 8},
        {frameType: FrameType.ACTIVE, duration: 3},
        {frameType: FrameType.RECOVERY, duration: 5},
    ]),
    moveData: {
        damage: [72],
        guard: [Stance.HIGH],
        onBlock: [-18],
        invuln: true
    }
});

// ==================== EXPORT ====================

export const bolognesaMoveSet = new MoveSet ({
    universal: {
        [UniversalMoveKey.NEUTRAL_P]: moveManotazo,
    },

    normal: [
        moveGancho,
        moveBarrido,
        moveGranBarrido,
        moveAereo
    ],

    special: [
        movePlancha,
        moveExtension,
        moveLlave,
        moveSalsa,
        moveBola
    ],

    overdrive: [
        moveSuper
    ]
});