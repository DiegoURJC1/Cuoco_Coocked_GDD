import {baseDefaultStats, Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";

export const fighterZombKingna = new Fighter({
    name: "Zomb Kingña",
    nickName: "El Todopoderoso Rey del Trópico",
    archetype: Archetype.PUPPET,
    description: (fighter) => (
        <>
            Jugar con la comida puede traer graves consecuencias...
            <br/>
            Tras escapar de su hogar y avistar tierra hay algo que queda bien claro...
            <br/>
            El Todopoderoso Rey del Trópico ha llegado para gobernar.
            <br/>
            <br/>
            Con un combate pesado basado en las invocaciones, deberá gestionar sus recursos para digerir vivos a sus enemigos.
            Deberá combinar distintos tipos de piñas para crear combinaciones adecuadas a sus necesidades y someter a los infieles ante su control.


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
    fullArt: "zombiPina_fullArt.jpeg",
    portraitConfig: {
        x: 0.6,
        y: 0,
        zoom: 1.2
    },
    baseStats: {
        health: baseDefaultStats.health * 1,
        walkSpeed: baseDefaultStats.walkSpeed * 1,
        runSpeed: baseDefaultStats.runSpeed * 1
    },
    //moveSet:
    manualRadarChart: [
        { label: "Fuerza", value: 50, max: 100 },
        { label: "Velocidad", value: 30, max: 100 },
        { label: "Dificultad", value: 65, max: 100 },
        { label: "Técnica", value: 75, max: 100 },
        { label: "Movilidad", value: 40, max: 100 },
        { label: "Defensa", value: 35, max: 100 },
    ]
});
