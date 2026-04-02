import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/moveCategory.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/frameType.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";

const movePunch = new Move(
    {
        name: "Puñetazo",
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
            guard: ["High"],
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
            guard: ["High"],
            onBlock: [-12],
            invuln: false
        }
    }
);

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
            guard: ["High"],
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
            guard: ["High"],
            onBlock: [-10],
            invuln: false
        }
    }
);

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
            damage: [3,49],
            guard: ["High"],
            onBlock: [-14],
            invuln: false
        }
    }
);

export const moveList = [
    movePunch,
    moveWideSlam,
    moveVeggyThrow,
    moveAntiAir,
    movePanPrepare
]