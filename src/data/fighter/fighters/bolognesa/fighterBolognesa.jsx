import {Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {bolognesaMoveSet} from "./moveSetBolognesa.jsx";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";

export const fighterBolognesa = new Fighter({
    name: "La Boloñesa",
    archetype: Archetype.RUSHDOWN,
    description: (fighter) => (
        <>
            This is a <b>description</b> of {fighter.name} La Boloñesa es una masa
            viva de tagliatelle, ragú y albóndigas que se ha convencido a si misma de
            que el mundo le debe una disculpa. Presenta un aspecto impecable,
            brillante y bien presentada con una salsa de color bermellón y de actitud
            absolutamente intolerante. Su estilo de combate refleja su naturaleza:
            entra, no para y te deja cubierto de salsa antes de que puedas reaccionar.
            No es el personaje más técnico, pero sí el que más castiga la indecisión.
        </>
    ),
    easyToUse: 3,
    type: FighterType.HUMAN,
    source: Source.BASE_GAME,
    fullArt: `la-bolognesa_fullArt.png`,
    portraitConfig: {
        x: 0.5,
        y: 0.2,
        zoom: 2
    },
    baseStats: {
        health: 100,
        walkSpeed: 55,
        runSpeed: 110
    },
    moveSet: bolognesaMoveSet,
    manualRadarChart: [
        { label: "Fuerza", value: 50, max: 100 },
        { label: "Velocidad", value: 75, max: 100 },
        { label: "Dificultad", value: 40, max: 100 },
        { label: "Técnica", value: 65, max: 100 },
        { label: "Movilidad", value: 70, max: 100 },
        { label: "Defensa", value: 30, max: 100 },
    ]
});
