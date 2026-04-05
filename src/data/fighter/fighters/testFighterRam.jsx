import {Fighter} from "../../../dataTemplate/fighters/Fighter.jsx"
import {Archetype} from "../../../dataTemplate/fighters/enums/./Archetype.js";
import {createSeasonPass} from "../../../dataTemplate/fighters/enums/Source.js";

export const testFighterRam = new Fighter({
    name: "Test Fighter",
    archetype: Archetype.BALANCE,
    description: (fighter) => (
        <>
            This is a <b>description</b> of {fighter.name}.
        </>
    ),
    easyToUse: 2.5,

    source: createSeasonPass(2),

    fullArt: "GGST_Ramlethal_Valentine_Portrait.png",
    portraitConfig: {
        x: 0.48,
        y: 0.04,
        zoom:5
    },
})