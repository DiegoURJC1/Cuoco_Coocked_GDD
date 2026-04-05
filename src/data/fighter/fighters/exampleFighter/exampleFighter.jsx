import {Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {moveSetAlan} from "./exampleFighterMoves.jsx";
import {defaultMoveSet} from "../!defaultMoves/defaultMoveSet.jsx";



export const exampleFighter = new Fighter({
    name: "Alan",
    archetype: Archetype.BALANCE,
    description: (fighter) => (
        <>
            {fighter.name} es un cocinero novato pero con mucho ánimo.<br/>

        </>
    ),
    easyToUse: 5,
    source: Source.BASE_GAME,
    icon: "../../../public/fighters/icon/alan_icon.svg",
    fullArt: "../../../public/fighters/fullart/alan_fullart.png",
    portraitConfig: {
        x: 0.5,
        y: 0.2,
        zoom: 2
    },
});

