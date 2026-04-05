import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/moveCategory.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/frameType.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";
import {Stance} from "../../../../dataTemplate/fighters/enums/Stance.js";

// region Universal Moves
const movePunch = new Move(
    {
        name: "Puñetazo",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Puñetazo normal rápido.
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

const moveLowPunch = new Move(
    {
        name: "Puñetazo inferior",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Puñetazo normal rápido desde una posición agachada.
            </>
        ,
        inputList: [Input.DOWN, Input.P],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 4
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 2
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 3
            },

        ]),
        moveData: {
            damage: [3],
            guard: [Stance.LOW],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveKick = new Move(
    {
        name: "Patada",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Patada normal rápida.<br/>
                Cubre tanto de frente como ligeramente arriba.
            </>
        ,
        inputList: [Input.K],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 4
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 6
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 3
            },

        ]),
        moveData: {
            damage: [5],
            guard: [Stance.HIGH],
            onBlock: [-4],
            invuln: false
        }
    }
);

const moveLowKick = new Move(
    {
        name: "Patada tímida",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Patada normal desde el suelo.
            </>
        ,
        inputList: [Input.DOWN, Input.K],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 8
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 5
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 5
            },

        ]),
        moveData: {
            damage: [4],
            guard: [Stance.LOW],
            onBlock: [-4],
            invuln: false
        }
    }
);

const moveSlash = new Move(
    {
        name: "Golpe de sartén",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Golpe de sartén de arriba hacia abajo.
            </>
        ,
        inputList: [Input.S],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 15
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 18
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 9
            },

        ]),
        moveData: {
            damage: [8],
            guard: [Stance.HIGH],
            onBlock: [-7],
            invuln: false
        }
    }
);

const moveLowSlash = new Move(
    {
        name: "Pisa ratas",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Patadas rápidas desde el suelo.
            </>
        ,
        inputList: [Input.DOWN, Input.S],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 16
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 7
            },
            {
                frameType: FrameType.INACTIVE,
                duration: 6
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 7
            },
            {
                frameType: FrameType.INACTIVE,
                duration: 6
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 7
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 9
            },

        ]),
        moveData: {
            damage: [8, 8, 8],
            guard: [Stance.LOW],
            onBlock: [-6],
            invuln: false
        }
    }
);

const moveHeavySlash = new Move(
    {
        name: "Gran golpe de sartén",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Golpe de sartén de atrás hacia delante a la altura de la cabeza.<br/>
                Puede ser evitado al agacharse.
            </>
        ,
        inputList: [Input.HS],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 25
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 19
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 17
            },

        ]),
        moveData: {
            damage: [24],
            guard: [Stance.HIGH],
            onBlock: [-12],
            invuln: false
        }
    }
);

const moveLowHeavySlash = new Move(
    {
        name: "Tropiezo de sartén",
        moveCategory: MoveCategory.UNIVERSAL,
        description:
            <>
                Golpe de sartén en barrido.<br/>
                Si el golpe conecta, dejará al rival en el suelo.
            </>
        ,
        inputList: [Input.HS],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 14
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 14
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 37
            },

        ]),
        moveData: {
            damage: [23],
            guard: [Stance.LOW],
            onBlock: [-22],
            invuln: false
        }
    }
);

// endregion

// region Normal Moves
const moveForwardPunch = new Move(
    {
        name: "Puñetazo hacia delante",
        moveCategory: MoveCategory.NORMAL,
        description:
            <>
                Puñetazo con más alcance.
            </>
        ,
        inputList: [Input.RIGHT, Input.P],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 3
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 6
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 2
            },

        ]),
        moveData: {
            damage: [4],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }
);

const moveWideSlam = new Move(
    {
        name: "Puñetazo",
        moveCategory: MoveCategory.NORMAL,
        description:
            <>
                Sartenazo hacia delante.
            </>
        ,
        inputList: [Input.RIGHT, Input.HS],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 32
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 6
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 22
            },

        ]),
        moveData: {
            damage: [30],
            guard: [Stance.HIGH],
            onBlock: [-12],
            invuln: false
        }
    }
);

// endregion

// region Special Moves
const moveAntiAir = new Move(
    {
        name: "Puñetazo",
        moveCategory: MoveCategory.SPECIAL,
        description:
            <>
                Golpea con la sartén hacia arriba.
            </>
        ,
        inputList: [Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.HS],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 22
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 5
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 16
            },

        ]),
        moveData: {
            damage: [23],
            guard: [Stance.HIGH],
            onBlock: [-10],
            invuln: false
        }
    }
);

const moveVeggyThrow = new Move(
    {
        name: "Puñetazo",
        moveCategory: MoveCategory.SPECIAL,
        description:
            <>
                Lanza una verdura hacia delante.
            </>
        ,
        inputList: [Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.S],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 10
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 8
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 8
            },

        ]),
        moveData: {
            damage: [16],
            guard: [Stance.HIGH],
            onBlock: [-10],
            invuln: false
        }
    }
);

// endregion

// region Overdrive Moves
const movePanPrepare = new Move(
    {
        name: "Puñetazo",
        moveCategory: MoveCategory.OVERDRIVE,
        description: (fighter) => (
            <>
                {fighter.name} captura con una red al rival, calienta su sartén y le cocina brevemente.
            </>
        ),
        inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.RIGHT, Input.HS],
        frameList: createFrames([
            {
                frameType: FrameType.STARTUP,
                duration: 18
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 4
            },
            {
                frameType: FrameType.INACTIVE,
                duration: 8
            },
            {
                frameType: FrameType.ACTIVE,
                duration: 16
            },
            {
                frameType: FrameType.RECOVERY,
                duration: 17
            },

        ]),
        moveData: {
            damage: [3, 49],
            guard: [Stance.HIGH, Stance.LOW],
            onBlock: [-14],
            invuln: false
        }
    }
);

// endregion

export const moveList = [
    // Universal moves
    movePunch,
    moveKick,
    moveSlash,
    moveHeavySlash,

    moveLowPunch,
    moveLowKick,
    moveLowSlash,
    moveLowHeavySlash,

    // Normal moves
    moveForwardPunch,
    moveWideSlam,

    // Special moves
    moveVeggyThrow,
    moveAntiAir,

    // Overdrive move
    movePanPrepare
]