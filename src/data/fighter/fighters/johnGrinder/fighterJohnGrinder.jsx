import {Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";

export const fighterJohnGrinder = new Fighter({
    name: "John Grinder",
    nickName: "Johnny Fresh",
    archetype: Archetype.POWER,
    description: (fighter) => (
        <>
            {fighter.name} es más grande que una nevera. Por suerte, siempre lleva una para comparar.
        </>
    ),
    easyToUse: 3,
    source: Source.BASE_GAME,
    icon: "../../../public/fighters/icon/alan_icon.svg",
    fullArt: "../../../public/fighters/fullart/john-grinder_fullArt.png",
    portraitConfig: {
        x: 0.6,
        y: 0,
        zoom: 5
    },
    baseStats: {
        health: 120,
        walkSpeed: 40,
        runSpeed: 80
    }
});
