import {Fighter} from "../../../dataTemplate/fighters/Fighter.jsx"
import {Archetype} from "../../../dataTemplate/fighters/enums/./Archetype.js";
import {createSeasonPass} from "../../../dataTemplate/fighters/enums/Source.js";
import {MoveCategory} from "../../../dataTemplate/fighters/moves/enums/moveCategory.js";
import {Input} from "../../../dataTemplate/input/enums/Input.js";
import {FrameType} from "../../../dataTemplate/fighters/moves/enums/frameType.js";
import {createFrames} from "../../../dataTemplate/fighters/moves/Frame.js";
import {InlineIcon} from "../../../modules/InlineIcon/InlineIcon.jsx";
import {InputIcon} from "../../../dataTemplate/input/InputIcon.jsx";
import {moveSetAlan} from "./exampleFighter/exampleFighterMoves.jsx";

export const testFighterNag = new Fighter({
    name: "Nagoriyuki",
    archetype: Archetype.ONESHOT,
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
})