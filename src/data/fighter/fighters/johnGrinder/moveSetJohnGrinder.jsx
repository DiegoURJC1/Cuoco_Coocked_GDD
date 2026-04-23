import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/enums/moveCategory.js";
import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/enums/frameType.js";
import {Stance} from "../../../../dataTemplate/fighters/enums/Stance.js";
import {MoveSet} from "../../../../dataTemplate/fighters/moves/MoveSet.jsx";
import {UniversalMoveKey} from "../../../../dataTemplate/fighters/moves/enums/UniversalMoveKey.js";
import {MoveState} from "../../../../dataTemplate/fighters/moves/enums/MoveState.jsx";

const moveNPunch = new Move({
    name: "Puñetazo",
    moveCategory: MoveCategory.UNIVERSAL,
    description: "Puñetazo frontal a la altura del pecho.",
    inputList: [Input.P],
    states: [
        {
            state: MoveState.STAND,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 6},
                {frameType: FrameType.ACTIVE, duration: 3},
                {frameType: FrameType.RECOVERY, duration: 6},
            ]),
            moveData: {
                damage: [10],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [3],
                invuln: false
            }
        },
    ]
});

const moveNKick = new Move({
    name: "Patada Baja",
    moveCategory: MoveCategory.UNIVERSAL,
    description: "Golpe al suelo con el pie. Golpea bajo.",
    inputList: [Input.K],
    states: [
        {
            state: MoveState.STAND,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 10},
                {frameType: FrameType.ACTIVE, duration: 9},
                {frameType: FrameType.RECOVERY, duration: 12},
            ]),
            moveData: {
                damage: [15],
                guard: [Stance.LOW],
                onBlock: [-7],
                invuln: false
            }
        }
    ]
});

const moveFridgeOverhead = new Move({
    name: "Despensa en arco",
    moveCategory: MoveCategory.UNIVERSAL,
    description: "Mueve con gran fuerza la nevera sobre su cabeza.",
    inputList: [Input.DOWN, Input.HS],
    states: [
        {
            state: MoveState.CROUCH,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 27},
                {frameType: FrameType.ACTIVE, duration: 10},
                {frameType: FrameType.RECOVERY, duration: 42},
            ]),
            moveData: {
                damage: [19],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [-8],
                invuln: true
            }
        }
    ]
});

const moveQuickCrusher = new Move({
    name: "Empujón",
    moveCategory: MoveCategory.NORMAL,
    description: "Placaje con la nevera al frente durante una carrera.",
    inputList: [Input.RIGHT, Input.HS],
    states: [
        {
            state: MoveState.RUN,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 17},
                {frameType: FrameType.ACTIVE, duration: 5},
                {frameType: FrameType.RECOVERY, duration: 22},
            ]),
            moveData: {
                damage: [12],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [-8],
                invuln: false
            }
        },
    ]
});


const moveFridgeTwirl = new Move({
    name: "Despensa va",
    moveCategory: MoveCategory.SPECIAL,
    description: "Mueve con gran fuerza la nevera sobre su cabeza.",
    inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.HS],
    states: [
        {
            state: MoveState.STAND,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 27},
                {frameType: FrameType.ACTIVE, duration: 10},
                {frameType: FrameType.RECOVERY, duration: 42},
            ]),
            moveData: {
                damage: [19],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [-8],
                invuln: false
            }
        },
        {
            state: MoveState.AIR,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 27},
                {frameType: FrameType.ACTIVE, duration: 10},
                {frameType: FrameType.RECOVERY, duration: 42},
            ]),
            moveData: {
                damage: [19],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [-6],
                invuln: false
            }
        }
    ]
});

export const moveSetJohnGrinder = new MoveSet({
    universal: {
        [UniversalMoveKey.NEUTRAL_P]: moveNPunch,
        [UniversalMoveKey.NEUTRAL_K]: moveNKick,
        [UniversalMoveKey.DOWN_HS]: moveFridgeOverhead,
    },
    normal: [
        moveQuickCrusher
    ],
    special: [moveFridgeTwirl
    ],
    overdrive: []

});