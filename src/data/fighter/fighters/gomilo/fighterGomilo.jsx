import {baseDefaultStats, Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";

export const fighterGomilo = new Fighter({
    name: "Gomilo",
    nickName: "GumiGumilu",
    archetype: Archetype.BALANCE,
    description: (fighter) => (
        <>
            ¡Y en el lado derecho del ring!, ¡Con la destreza y la fuerza de un caballero y la velocidad de un luchador experto!, busca una nueva presa...
            ¡EL GRAN GO-MI-LOOOOOOOOO!
            <br/>
            Luchador diestro y equilibrado que, pese a ausencia de su brazo izquierdo, logra adaptarse a cualquier escenario con elementos de su entorno. Al ser golpeado puede perder su brazo, en ese caso todos sus movimientos
            se vuelven más ágiles y veloces, pero estará expuesto y no podrá pelear en sus mejores condiciones.
            <br/>
            Una vez encuentre una pieza adecuada significa que la cosa se pone seria. Dependiendo de que brazo obtenga gana distintas ventajas... ¡¡y un movimiento especial!!
        </>
    ),
    easyToUse: 3.5,
    narrativeOrigin:
        <>
            Origen
        </>,
    prosCons: {
        pros: [
            <>Versatil.</>,
            <>Adaptable.</>
        ],
        cons: [
            <>Expuesto a represalias.</>,
            <>Dependencia de Parry.</>,
        ]
    },
    type: FighterType.FOOD,
    source: Source.BASE_GAME,
    icon: "",
    fullArt: "gomilo_fullArt.png",
    portraitConfig: {
        x: 0.45,
        y: -0.1,
        zoom: 1.4
    },
    baseStats: {
        health: baseDefaultStats.health * 1.05,
        walkSpeed: baseDefaultStats.walkSpeed * 0.9,
        runSpeed: baseDefaultStats.runSpeed * 0.85
    },
    //moveSet:
    manualRadarChart: [
        { label: "Fuerza", value: 50, max: 100 },
        { label: "Velocidad", value: 75, max: 100 },
        { label: "Dificultad", value: 65, max: 100 },
        { label: "Técnica", value: 60, max: 100 },
        { label: "Movilidad", value: 70, max: 100 },
        { label: "Defensa", value: 65
            , max: 100 },
    ]
});
