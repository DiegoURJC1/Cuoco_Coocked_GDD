import {Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";

export const fighterPeppemoldy = new Fighter({
    name: "Peppemoldy",
    nickName: "Moldy Pep",
    archetype: Archetype.BALANCE,
    description: (fighter) => (
        <>
            No comerse el último trozo tiene consecuencias.
            {fighter.name} es el resultado de no comerse la última porción de la pizza.
            Tras cobrar vida tras un tiempo en la basura, fue en ese contenedor común donde
            encontró sus características gafas.
        </>
    ),
    easyToUse: 4,
    narrativeOrigin:
        <>
            Basura de un restaurante.
        </>,
    prosCons: {
        pros: [
            <>Versatil tanto de cerca como a distancia media.</>,
            <>Muy versátil en el aire.</>
        ],
        cons: [
            <>Lento en el suelo.</>
        ]
    },
    type: FighterType.FOOD,
    source: Source.BASE_GAME,
    icon: "",
    fullArt: `peppemoldy_fullArt_temp.png`,
    portraitConfig: {
        x: 0.6,
        y: 0,
        zoom: 1
    },
    baseStats: {
        health: 100,
        walkSpeed: 45,
        runSpeed: 85
    },
    //moveSet:
    manualRadarChart: [
        { label: "Fuerza", value: 30, max: 100 },
        { label: "Velocidad", value: 85, max: 100 },
        { label: "Dificultad", value: 60, max: 100 },
        { label: "Técnica", value: 75, max: 100 },
        { label: "Movilidad", value: 70, max: 100 },
        { label: "Defensa", value: 25, max: 100 },
    ]
});
