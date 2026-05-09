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
            Con un combate pesado basado en las invocaciones, deberá gestionar sus recursos para digerir vivos a sus enemigos, ¡¡lo que puede llegar a curarle!!.
            Deberá combinar distintos tipos de piñas para crear combinaciones adecuadas a sus necesidades y someter a los infieles ante su control.
            <br/>
            <br/>
            <b>Especial:</b><br/>
            Cierta probabilidad de generar <b>Piña Ácida</b>. Esta piña espera al momento oportuno para lanzarse al enemigo. Sus jugos internos succionan vida al enemigo y potencia al resto de piñas. (Deja al enemigo vulnerable a “Digestión”).
            <br/>
            <b>Digestión:</b> Ciertos ataques pueden digerir vivos a los enemigos, curando a Zomb Kingña y sus subordinados.


        </>
    ),
    easyToUse: 1.5,
    narrativeOrigin:
        <>
            Origen
        </>,
    prosCons: {
        pros: [
            <>Especialmente fuerte en peleas de desgaste. Su curación y habilidades se enfocan en un juego lento e intercambios de daño</>,
            <>Capacidad de abrumar al enemigo.</>
        ],
        cons: [
            <>Gestion de recursos compleja. Manejar las distintas piñas al mismo tiempo y beneficiarse de sus efectos es muy complejo</>,
            <>Vulnerable. Poca capacidad de movimiento. Depende en gran medida de los Parry.</>
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
        health: baseDefaultStats.health * 1.2,
        walkSpeed: baseDefaultStats.walkSpeed * 0.5,
        runSpeed: baseDefaultStats.runSpeed * 0.5
    },
    //moveSet:
    manualRadarChart: [
        { label: "Fuerza", value: 50, max: 100 },
        { label: "Velocidad", value: 30, max: 100 },
        { label: "Dificultad", value: 50, max: 100 },
        { label: "Técnica", value: 80, max: 100 },
        { label: "Movilidad", value: 35, max: 100 },
        { label: "Defensa", value: 60, max: 100 },
    ]
});
