import {UniversalMoveKey} from "../../../../dataTemplate/fighters/moves/enums/UniversalMoveKey.js";
import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/enums/moveCategory.js";
import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/enums/frameType.js";
import {Stance} from "../../../../dataTemplate/fighters/enums/Stance.js";
import {MoveSet} from "../../../../dataTemplate/fighters/moves/MoveSet.jsx";
import {MoveState} from "../../../../dataTemplate/fighters/moves/enums/MoveState.jsx";

// region Universal

// region Neutral
const moveManotazo = new Move({
    name: "Manotazo de albóndiga",
    moveCategory: MoveCategory.UNIVERSAL,
    description: (
        <>Una agrupación de pasta golpea con una albóndiga. Rápido y corto alcance.</>
    ),
    inputList: [Input.P],
    states: [{
        state: MoveState.STAND,
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
    }]
});
// endregion

// region Down
const moveBarrido = new Move({
    name: "Barrido de fideos",
    moveCategory: MoveCategory.UNIVERSAL,
    description: (
        <>Barrido rápido bajo.</>
    ),
    inputList: [Input.DOWN, Input.S],
    states: [{
        state: MoveState.CROUCH,
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
    }]
});

const moveGranBarrido = new Move({
    name: "Gran barrido",
    moveCategory: MoveCategory.UNIVERSAL,
    description: (
        <>Barrido pesado que tumba.</>
    ),
    inputList: [Input.DOWN, Input.HS],
    states: [{
        state: MoveState.CROUCH,
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
    }]
});
// endregion

// region Aerial
const moveAereo = new Move({
    name: "Ensartado de masa aérea",
    moveCategory: MoveCategory.UNIVERSAL,
    description: (
        <>Golpe descendente en salto.</>
    ),
    inputList: [Input.S],
    states: [{
        state: MoveState.AIR,
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
    }]
});
// endregion
// endregion


// region Normal
const moveGancho = new Move({
    name: "Gancho de Ragú",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Uppercut ascendente de masa. Antiaéreo situacional.</>
    ),
    inputList: [Input.RIGHT, Input.S],
    states: [{
        state: MoveState.STAND,
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
    }]
});

const moveExtension = new Move({
    name: "Extensión de fideos",
    moveCategory: MoveCategory.NORMAL,
    description: (
        <>Ataque a media distancia.</>
    ),
    inputList: [Input.RIGHT, Input.R],
    states: [{
        state: MoveState.STAND,
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
    }]
});
// endregion

// region Special
const movePlancha = new Move({
    name: "Plancha de pasta",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Caída pesada desde el aire. Alto daño.</>
    ),
    inputList: [Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.S],
    states: [{
        state: MoveState.STAND,
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
    }]
});

const moveLlave = new Move({
    name: "Llave combinada",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Agarre con fideos.</>
    ),
    inputList: [Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.D],
    states: [{
        state: MoveState.STAND,
        frameList: createFrames([
            {frameType: FrameType.STARTUP, duration: 22},
            {frameType: FrameType.ACTIVE, duration: 3},
            {frameType: FrameType.RECOVERY, duration: 32},
        ]),
        moveData: {
            damage: [45],
            guard: [], // esto es un agarre
            onBlock: [0],
            invuln: true
        }
    }]
});

const moveSalsa = new Move({
    name: "Salpicadura de salsa",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Proyectil de salsa que aplica estado.</>
    ),
    inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.R],
    states: [{
        state: MoveState.STAND,
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
    }]
});

const moveBola = new Move({
    name: "Bola de cañón",
    moveCategory: MoveCategory.SPECIAL,
    description: (
        <>Carga diagonal ascendente.</>
    ),
    inputList: [Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.S],
    states: [{
        state: MoveState.STAND,
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
    }]
});
// endregion

// region Overdrive
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
    states: [{
        state: MoveState.STAND,
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
    }]
});
// endregion

export const bolognesaMoveSet = new MoveSet({
    universal: {
        [UniversalMoveKey.NEUTRAL_P]: moveManotazo,
        //[UniversalMoveKey.NEUTRAL_K]:,
        //[UniversalMoveKey.NEUTRAL_S]:,
        //[UniversalMoveKey.NEUTRAL_HS]:,
        //[UniversalMoveKey.NEUTRAL_R]:,
        //[UniversalMoveKey.NEUTRAL_D]:,

        //[UniversalMoveKey.DOWN_P]:,
        //[UniversalMoveKey.DOWN_K]:,
        [UniversalMoveKey.DOWN_S]: moveBarrido,
        [UniversalMoveKey.DOWN_HS]: moveGranBarrido,
        //[UniversalMoveKey.DOWN_R]:,
        //[UniversalMoveKey.DOWN_D]:,

        //[UniversalMoveKey.AIR_P]:,
        //[UniversalMoveKey.AIR_K]:,
        [UniversalMoveKey.AIR_S]: moveAereo,
        //[UniversalMoveKey.AIR_HS]:,
        //[UniversalMoveKey.AIR_R]:,
        //[UniversalMoveKey.AIR_D]:,
    },

    normal: [
        moveGancho,
        moveExtension
    ],

    special: [
        movePlancha,
        moveLlave,
        moveSalsa,
        moveBola
    ],

    overdrive: [
        moveSuper
    ]
});