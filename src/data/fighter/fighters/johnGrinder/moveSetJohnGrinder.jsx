import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/enums/moveCategory.js";
import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/enums/frameType.js";
import {Stance} from "../../../../dataTemplate/fighters/enums/Stance.js";
import {MoveSet} from "../../../../dataTemplate/fighters/moves/MoveSet.jsx";
import {UniversalMoveKey} from "../../../../dataTemplate/fighters/moves/enums/UniversalMoveKey.js";

const moveFridgeOverhead = new Move({
    name: "Despensa en arco",
    moveCategory: MoveCategory.UNIVERSAL,
    description: (
        <>Mueve con gran fuerza la nevera sobre su cabeza para cubrir su espacio aéreo.</>
    ),
    inputList: [Input.DOWN, Input.HS],
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
});

// endregion

export const moveSetJohnGrinder = new MoveSet({
    universal: {
        //[UniversalMoveKey.NEUTRAL_P]:,
        //[UniversalMoveKey.NEUTRAL_K]:,
        //[UniversalMoveKey.NEUTRAL_S]:,
        //[UniversalMoveKey.NEUTRAL_HS]:,
        //[UniversalMoveKey.NEUTRAL_R]:,
        //[UniversalMoveKey.NEUTRAL_D]:,

        //[UniversalMoveKey.DOWN_P]:,
        //[UniversalMoveKey.DOWN_K]:,
        //[UniversalMoveKey.DOWN_S]:,
        [UniversalMoveKey.DOWN_HS]: moveFridgeOverhead,
        //[UniversalMoveKey.DOWN_R]:,
        //[UniversalMoveKey.DOWN_D]:,

        //[UniversalMoveKey.AIR_P]:,
        //[UniversalMoveKey.AIR_K]:,
        //[UniversalMoveKey.AIR_S]:,
        //[UniversalMoveKey.AIR_HS]:,
        //[UniversalMoveKey.AIR_R]:,
        //[UniversalMoveKey.AIR_D]:,
    },

    normal: [
    ],

    special: [
    ],

    overdrive: [
    ]
});