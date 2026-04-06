import {Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";
import {moveSetJohnGrinder} from "./moveSetJohnGrinder.jsx";
import {InlineIcon} from "../../../../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../../../../dataTemplate/input/InputSequence.jsx";

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
    narrativeOrigin:
        <>
            Jefe de cocina de un restaurante italiano de la Toscana.
        </>,
    prosCons: {
        pros: [
            <>Versatil tanto de cerca como a distancia media.</>,
            (fighter) => {
                return <>
                    Buen control con {fighter.moveSet.universal.down_hs.name}.
                </>;
            },
            (fighter) => {
                return <>
                    El input <InlineIcon size={2.5}><InputSequence sequence={fighter.moveSet.universal.down_hs.inputList}/></InlineIcon>
                    ayuda a mantenerse protegido mientras se realiza.
                </>;
            }
        ],
        cons: [
            <>Movimientos lentos y predecibles.</>,
            <>Dificultad para acortar las distancias.</>
        ]
    },
    type: FighterType.HUMAN,
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
    },
    moveSet: moveSetJohnGrinder,
});
