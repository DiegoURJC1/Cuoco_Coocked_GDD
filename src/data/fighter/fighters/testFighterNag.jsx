import {Fighter} from "../Fighter.jsx"
import {Archetypes} from "../enums/Archetypes.js";
import {createSeasonPass} from "../enums/Source.js";
import {MoveCategory} from "../moves/moveCategory.js";
import {Input} from "../../input/enums/Input.js";
import {FrameType} from "../moves/frameType.js";
import {createFrames} from "../moves/Frame.js";

export const testFighterNag = new Fighter({
    name: "Nagoriyuki",
    archetype: Archetypes.ONESHOT,
    description: (fighter) => (
        <>
            This is a <b>description</b> of {fighter.name} He is a samurai vampire.
        </>
    ),
    easyToUse: 2.5,

    source: createSeasonPass(2),

    fullArt: "GGST_Nagoriyuki_Portrait.png",
    portraitConfig: {
        x: 0.5,
        y: 0,
        zoom: 4
    },
    moveList: [
        {
            name: "Upper cut",
            moveCategory: MoveCategory.SPECIAL,
            description: (fighter) => (
                <>
                    {fighter.name} hace un ataque hacia arriba.
                </>
            ),
            inputList: [Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.S],
            frameList: createFrames([
                {
                    frameType: FrameType.STARTUP,
                    duration: 8
                },
                {
                    frameType: FrameType.ACTIVE,
                    duration: 12
                },
                {
                    frameType: FrameType.RECOVERY,
                    duration: 12
                },

            ]),
            moveData: {
                damage: [15],
                guard: ["High"],
                onBlock: [-7],
                invuln: false
            }
        },
        {
            name: "Tajo certero",
            moveCategory: MoveCategory.SPECIAL,
            description: (fighter) => (
                <>
                    {fighter.name} hace un tajo hacia delante.
                </>
            ),
            inputList: [Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.HS],
            frameList: createFrames([
                {
                    frameType: FrameType.STARTUP,
                    duration: 14
                },
                {
                    frameType: FrameType.ACTIVE,
                    duration: 5
                },
                {
                    frameType: FrameType.RECOVERY,
                    duration: 31
                },

            ]),
            moveData: {
                damage: [25],
                guard: ["High"],
                onBlock: [-14],
                invuln: false
            }
        },
        {
            name: "Te rajo",
            moveCategory: MoveCategory.OVERDRIVE,
            description: (fighter) => (
                <>
                    {fighter.name} hace un rajazo hacia delante.
                </>
            ),
            inputList: [Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.HS],
            frameList: createFrames([
                {
                    frameType: FrameType.STARTUP,
                    duration: 17
                },
                {
                    frameType: FrameType.ACTIVE,
                    duration: 2
                },

                {
                    frameType: FrameType.INACTIVE,
                    duration: 2
                },
                {
                    frameType: FrameType.ACTIVE,
                    duration: 2
                },
                {
                    frameType: FrameType.INACTIVE,
                    duration: 2
                },
                {
                    frameType: FrameType.ACTIVE,
                    duration: 2
                },
                {
                    frameType: FrameType.RECOVERY,
                    duration: 31
                },

            ]),
            moveData: {
                damage: [25],
                guard: ["High"],
                onBlock: [-14],
                invuln: false
            }
        },
        {
            name: "Te rajo",
            moveCategory: MoveCategory.OVERDRIVE,
            description: (fighter) => (
                <>
                    {fighter.name} hace un rajazo hacia delante.
                </>
            ),
            inputList: [Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.K],
            frameList: createFrames([
                {
                    frameType: FrameType.STARTUP,
                    duration: 27
                },
                {
                    frameType: FrameType.ACTIVE,
                    duration: 13
                },
                {
                    frameType: FrameType.RECOVERY,
                    duration: 21
                },

            ]),
            moveData: {
                damage: [25],
                guard: ["High"],
                onBlock: [-14],
                invuln: false
            }
        },

        {
            name: "Te rajo",
            moveCategory: MoveCategory.OVERDRIVE,
            description: (fighter) => (
                <>
                    {fighter.name} hace un rajazo hacia delante.
                </>
            ),
            inputList: [Input.RIGHT, Input.RIGHT, Input.DOWN_RIGHT, Input.K],
            frameList: createFrames([
                {
                    frameType: FrameType.STARTUP,
                    duration: 27
                },
                {
                    frameType: FrameType.ACTIVE,
                    duration: 13
                },
                {
                    frameType: FrameType.RECOVERY,
                    duration: 21
                },

            ]),
            moveData: {
                damage: [25],
                guard: ["High"],
                onBlock: [-14],
                invuln: false
            }
        },
    ]
})