import {baseDefaultStats, Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";
import {InlineIcon} from "../../../../modules/InlineIcon/InlineIcon.jsx";
import {InputIcon} from "../../../../dataTemplate/input/InputIcon.jsx";
import {Input} from "../../../../dataTemplate/input/enums/Input.js";

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
            <br/>
            <br/>
            Es capaz de esconderse dentro de la bolsa momentaneamente para eliminar su aderezo actual y evitar cualquier
            daño. Si es golpeado durante este movimiento, contraataca automaticamente pero si no es atacado tardará en
            salir.
            <br/>
            <br/>
            Al contrario que la mayoría de personajes, {fighter.name} dispone de dos dashes <InlineIcon
            size={2}><InputIcon inputs={Input.DASH}/></InlineIcon> aéreos.
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
            <>Alta movilidad en el aire.</>,
            <>Su baja estatura puede evitar que sea golpeado por ataques que golpearían a la mayoría del plantel.</>
        ],
        cons: [
            <>Lento en el suelo.</>,
            <>Su baja salud y contrataque defensivo fácil de castigar fuerzan a mantener la presión para evitar dar
                oportunidades al rival que puedan suponer perder la ronda de forma muy rápida.</>
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
        health: baseDefaultStats.health * 0.6,
        walkSpeed: baseDefaultStats.walkSpeed * 2,
        runSpeed: baseDefaultStats.runSpeed * 1.8
    },
    //moveSet:
    manualRadarChart: [
        {label: "Fuerza", value: 30, max: 100},
        {label: "Velocidad", value: 85, max: 100},
        {label: "Dificultad", value: 60, max: 100},
        {label: "Técnica", value: 75, max: 100},
        {label: "Movilidad", value: 70, max: 100},
        {label: "Defensa", value: 25, max: 100},
    ]
});
