import {baseDefaultStats, Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";

export const fighterComilon = new Fighter({
    name: "Comilon",
    nickName: "Zamón",
    archetype: Archetype.BALANCE,
    description: (fighter) => (
        <>

        </>
    ),
    easyToUse: 4,
    narrativeOrigin:
        <>
            Origen
        </>,
    prosCons: {
        pros: [
            <>Texto 1.</>,
            <>Texto 2.</>
        ],
        cons: [
            <>Texto 1.</>
        ]
    },
    type: FighterType.FOOD,
    source: Source.BASE_GAME,
    icon: "",
    fullArt: "comilon_fullArt.jpeg",
    portraitConfig: {
        x: 0.2,
        y: 0.3,
        zoom: 1.4
    },
    baseStats: {
        health: baseDefaultStats.health * 1,
        walkSpeed: baseDefaultStats.walkSpeed * 1,
        runSpeed: baseDefaultStats.runSpeed * 1
    },
    //moveSet:
    manualRadarChart: [
        { label: "Fuerza", value: 100, max: 100 },
        { label: "Velocidad", value: 100, max: 100 },
        { label: "Dificultad", value: 100, max: 100 },
        { label: "Técnica", value: 100, max: 100 },
        { label: "Movilidad", value: 100, max: 100 },
        { label: "Defensa", value: 100, max: 100 },
    ]
});
