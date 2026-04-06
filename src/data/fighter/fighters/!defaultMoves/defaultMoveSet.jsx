import {UniversalMoveKey} from "../../../../dataTemplate/fighters/moves/enums/UniversalMoveKey.js";
import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/enums/moveCategory.js";
import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/enums/frameType.js";
import {Stance} from "../../../../dataTemplate/fighters/enums/Stance.js";
import {MoveState} from "../../../../dataTemplate/fighters/moves/enums/MoveState.js";
// region Universal Moves
// region Neutral
const moveDefaultNeutralPunch = new Move(
    {
        name: "Puñetazo por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el puñetazo por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
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

const moveDefaultNeutralKick = new Move(
    {
        name: "Patada por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es la patada por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
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

const moveDefaultNeutralSlash = new Move(
    {
        name: "Golpe por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el golpe por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
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

const moveDefaultNeutralHeavySlash = new Move(
    {
        name: "Golpe fuerte por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el golpe fuerte por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
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

const moveDefaultNeutralRange = new Move(
    {
        name: "Golpe fuerte por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el a distancia por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
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

const moveDefaultNeutralDust = new Move(
    {
        name: "Golpe comodín por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el comodín por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
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
// endregion

// region Down
const moveDefaultDownPunch = new Move(
    {
        name: "Puñetazo agachado por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el puñetazo agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>
        ,
        state: MoveState.CROUCH,
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
                <div className="alert">Esta es la patada agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>,
        state: MoveState.CROUCH,
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
                <div className="alert">Este es el golpe agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>,
        state: MoveState.CROUCH,
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
                <div className="alert">Este es el golpe fuerte agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>,
        state: MoveState.CROUCH,
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
                <div className="alert">Este es el golpe a distancia agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>,
        state: MoveState.CROUCH,
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
                <div className="alert">Este es el comodín agachado por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>,
        state: MoveState.CROUCH,
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
// endregion

// region Aerial
const moveDefaultAirPunch = new Move(
    {
        name: "Puñetazo aéreo por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el puñetazo aéreo por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>
        ,
        state: MoveState.AIR,
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

const moveDefaultAirKick = new Move(
    {
        name: "Patada aéreo por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Esta es la patada aérea por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>,
        state: MoveState.AIR,
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

const moveDefaultAirSlash = new Move(
    {
        name: "Golpe aéreo por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el golpe aéreo por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>,
        state: MoveState.AIR,
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

const moveDefaultAirHeavySlash = new Move(
    {
        name: "Golpe fuerte aéreo por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el golpe fuerte aéreo por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>,
        state: MoveState.AIR,
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

const moveDefaultAirRange = new Move(
    {
        name: "Golpe fuerte aéreo por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el a distancia aéreo por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>,
        state: MoveState.AIR,
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

const moveDefaultAirDust = new Move(
    {
        name: "Golpe comodín aéreo por defecto",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                <div className="alert">Este es el comodín aéreo por defecto. A la espera de ser sustituido por un movimiento definitivo.</div>
            </>,
        state: MoveState.AIR,
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
// endregion
// endregion
export const defaultMoveSet ={
    universal: {
        [UniversalMoveKey.NEUTRAL_P]: moveDefaultNeutralPunch,
        [UniversalMoveKey.NEUTRAL_K]: moveDefaultNeutralKick,
        [UniversalMoveKey.NEUTRAL_S]: moveDefaultNeutralSlash,
        [UniversalMoveKey.NEUTRAL_HS]: moveDefaultNeutralHeavySlash,
        [UniversalMoveKey.NEUTRAL_R]: moveDefaultNeutralRange,
        [UniversalMoveKey.NEUTRAL_D]: moveDefaultNeutralDust,

        [UniversalMoveKey.DOWN_P]: moveDefaultDownPunch,
        [UniversalMoveKey.DOWN_K]: moveDefaultDownKick,
        [UniversalMoveKey.DOWN_S]: moveDefaultDownSlash,
        [UniversalMoveKey.DOWN_HS]: moveDefaultDownHeavySlash,
        [UniversalMoveKey.DOWN_R]: moveDefaultDownRange,
        [UniversalMoveKey.DOWN_D]: moveDefaultDownDust,

        [UniversalMoveKey.AIR_P]: moveDefaultAirPunch,
        [UniversalMoveKey.AIR_K]: moveDefaultAirKick,
        [UniversalMoveKey.AIR_S]: moveDefaultAirSlash,
        [UniversalMoveKey.AIR_HS]: moveDefaultAirHeavySlash,
        [UniversalMoveKey.AIR_R]: moveDefaultAirRange,
        [UniversalMoveKey.AIR_D]: moveDefaultAirDust,
    },

    normal: [
    ],

    special: [
    ],

    overdrive: [

    ]
}

