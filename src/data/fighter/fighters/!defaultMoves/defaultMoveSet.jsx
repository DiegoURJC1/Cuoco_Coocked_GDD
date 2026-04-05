import {UniversalMoveKey} from "../../../../dataTemplate/fighters/moves/enums/UniversalMoveKey.js";
import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/enums/moveCategory.js";
import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/enums/frameType.js";
import {Stance} from "../../../../dataTemplate/fighters/enums/Stance.js";

const moveDefaultPunch = new Move(
    {
        name: "Puñetazo por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es el puñetazo por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>
        ,
        inputList: [Input.P],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultKick = new Move(
    {
        name: "Patada por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es la patada por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>,
        inputList: [Input.K],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultSlash = new Move(
    {
        name: "Golpe por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es el golpe por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>,
        inputList: [Input.S],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultHeavySlash = new Move(
    {
        name: "Golpe fuerte por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es el golpe fuerte por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>,
        inputList: [Input.HS],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultRange = new Move(
    {
        name: "Golpe fuerte por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es el a distancia por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>,
        inputList: [Input.R],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultDust = new Move(
    {
        name: "Golpe comodín por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es el comodín por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>,
        inputList: [Input.D],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultDownPunch = new Move(
    {
        name: "Puñetazo agachado por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es el puñetazo agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>
        ,
        inputList: [Input.DOWN, Input.P],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultDownKick = new Move(
    {
        name: "Patada agachado por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Esta es la patada agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>,
        inputList: [Input.DOWN, Input.K],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultDownSlash = new Move(
    {
        name: "Golpe agachado por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es el golpe agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>,
        inputList: [Input.DOWN, Input.S],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultDownHeavySlash = new Move(
    {
        name: "Golpe fuerte agachado por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es el golpe fuerte agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>,
        inputList: [Input.DOWN, Input.HS],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultDownRange = new Move(
    {
        name: "Golpe a distancia agachado por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es el golpe a distancia agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>,
        inputList: [Input.DOWN, Input.R],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveDefaultDownDust = new Move(
    {
        name: "Golpe comodín agachado por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Este es el comodín agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.
            </>,
        inputList: [Input.DOWN, Input.D],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 2
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },
        ]),
        moveData: {
            damage: [3],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

export const defaultMoveSet ={
    universal: {
        [UniversalMoveKey.NEUTRAL_P]: moveDefaultPunch,
        [UniversalMoveKey.NEUTRAL_K]: moveDefaultKick,
        [UniversalMoveKey.NEUTRAL_S]: moveDefaultSlash,
        [UniversalMoveKey.NEUTRAL_HS]: moveDefaultHeavySlash,
        [UniversalMoveKey.NEUTRAL_R]: moveDefaultRange,
        [UniversalMoveKey.NEUTRAL_D]: moveDefaultDust,

        [UniversalMoveKey.DOWN_P]: moveDefaultDownPunch,
        [UniversalMoveKey.DOWN_K]: moveDefaultDownKick,
        [UniversalMoveKey.DOWN_S]: moveDefaultDownSlash,
        [UniversalMoveKey.DOWN_HS]: moveDefaultDownHeavySlash,
        [UniversalMoveKey.DOWN_R]: moveDefaultDownRange,
        [UniversalMoveKey.DOWN_D]: moveDefaultDownDust,
    },

    normal: [
    ],

    special: [
    ],

    overdrive: [

    ]
}

