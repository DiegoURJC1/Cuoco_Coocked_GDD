import {UniversalMoveKey} from "../../../../dataTemplate/fighters/moves/enums/UniversalMoveKey.js";
import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/enums/moveCategory.js";
import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/enums/frameType.js";
import {Stance} from "../../../../dataTemplate/fighters/enums/Stance.js";
import {MoveState} from "../../../../dataTemplate/fighters/moves/enums/MoveState.jsx";

// Función helper para no repetir código en los fallbacks
const createDefaultMove = (name, input, state, alertText) => new Move({
    name: name,
    moveCategory: MoveCategory.UNIVERSAL,
    description: <div className="alert">{alertText}</div>,
    inputList: input,
    states: [{
        state: state,
        frameList: createFrames([
            { frameType: FrameType.STARTUP, duration: 2 },
            { frameType: FrameType.ACTIVE, duration: 2 },
            { frameType: FrameType.RECOVERY, duration: 2 },
        ]),
        moveData: {
            damage: [6],
            guard: [Stance.HIGH],
            onBlock: [-2],
            invuln: false
        }
    }]
});

export const defaultMoveSet = {
    universal: {
        // Neutral
        [UniversalMoveKey.NEUTRAL_P]: createDefaultMove("Puñetazo", [Input.P], MoveState.STAND, "Fallback Neutral P"),
        [UniversalMoveKey.NEUTRAL_K]: createDefaultMove("Patada", [Input.K], MoveState.STAND, "Fallback Neutral K"),
        [UniversalMoveKey.NEUTRAL_S]: createDefaultMove("Corte", [Input.S], MoveState.STAND, "Fallback Neutral S"),
        [UniversalMoveKey.NEUTRAL_HS]: createDefaultMove("Corte Fuerte", [Input.HS], MoveState.STAND, "Fallback Neutral HS"),
        [UniversalMoveKey.NEUTRAL_R]: createDefaultMove("Rango", [Input.R], MoveState.STAND, "Fallback Neutral R"),
        [UniversalMoveKey.NEUTRAL_D]: createDefaultMove("Dust", [Input.D], MoveState.STAND, "Fallback Neutral D"),

        // Down
        [UniversalMoveKey.DOWN_P]: createDefaultMove("P. Agachado", [Input.DOWN, Input.P], MoveState.CROUCH, "Fallback Down P"),
        [UniversalMoveKey.DOWN_K]: createDefaultMove("K. Agachado", [Input.DOWN, Input.K], MoveState.CROUCH, "Fallback Down K"),
        [UniversalMoveKey.DOWN_S]: createDefaultMove("S. Agachado", [Input.DOWN, Input.S], MoveState.CROUCH, "Fallback Down S"),
        [UniversalMoveKey.DOWN_HS]: createDefaultMove("HS. Agachado", [Input.DOWN, Input.HS], MoveState.CROUCH, "Fallback Down HS"),
        [UniversalMoveKey.DOWN_R]: createDefaultMove("R. Agachado", [Input.DOWN, Input.R], MoveState.CROUCH, "Fallback Down R"),
        [UniversalMoveKey.DOWN_D]: createDefaultMove("D. Agachado", [Input.DOWN, Input.D], MoveState.CROUCH, "Fallback Down D"),

        // Air
        [UniversalMoveKey.AIR_P]: createDefaultMove("P. Aéreo", [Input.P], MoveState.AIR, "Fallback Air P"),
        [UniversalMoveKey.AIR_K]: createDefaultMove("K. Aéreo", [Input.K], MoveState.AIR, "Fallback Air K"),
        [UniversalMoveKey.AIR_S]: createDefaultMove("S. Aéreo", [Input.S], MoveState.AIR, "Fallback Air S"),
        [UniversalMoveKey.AIR_HS]: createDefaultMove("HS. Aéreo", [Input.HS], MoveState.AIR, "Fallback Air HS"),
        [UniversalMoveKey.AIR_R]: createDefaultMove("R. Aéreo", [Input.R], MoveState.AIR, "Fallback Air R"),
        [UniversalMoveKey.AIR_D]: createDefaultMove("D. Aéreo", [Input.D], MoveState.AIR, "Fallback Air D"),
    },
    normal: [],
    special: [],
    overdrive: []
};