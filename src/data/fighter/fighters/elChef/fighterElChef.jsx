import {baseDefaultStats, Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source,} from "../../../../dataTemplate/fighters/enums/Source.js";
import {chefMoveSet} from "./moveSetElChef.jsx";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";
import PLink from "../../../../modules/Link/PLink.jsx";
import {routes} from "../../../../routes/routes.js";

export const fighterElChef = new Fighter({
    name: "Rinaldo Accatino",
    nickName: "El Chef",
    archetype: Archetype.ZONER,
    description: () => (
        <>
            <b>Descripción:</b> Chef Maestro Rinaldo Accatino es una de las anomalías humanas del roster,
            un cocinero de alta cocina con tres estrellas Michelin que actualmente trabaja como
            luchador profesional. Su chaquetilla blanca inmaculada va manchándose durante el combate
            como indicador ambiental. Porta un tenedor del tamaño de un tridente y un cinturón
            repleto de botes de salsas, especias y condimentos.
            <br></br>
            <br></br>
            Su estilo de combate es el más exigente del roster a nivel conceptual. No tiene un gran
            volumen de ataques, lo que tiene es variedad de <PLink
            href={routes.dressings.path}>aderezos</PLink> aplicables: quemado (DoT continuo), pringoso
            (reduce velocidad) y mareado (inputs invertidos).
            La curva de aprendizaje no está en los inputs sino en saber
            qué aderezo aplicar, cuándo, y anticipar cómo el rival va a reaccionar. Un jugador
            de El Chef mediocre lanza salsas aleatoriamente. Uno experto convierte cada aderezo en
            el setup de su siguiente acción.
            <br/><br/>
            <br/><br/>
            Su mecánica principal pone en primer plano la mecánica original del juego. <b>Have a bite</b> le permite
            aplicar un aderezo a su tenedor. Cuando golpea al rival se lo aplica y se consume del tenedor, dejandolo sin
            aderezo.
        </>
    ),
    easyToUse: 2.0,
    prosCons: {
        pros: [
            <>
                Su tenedor defiende muy bien el espacio en distancias medias.
            </>,
            <>
                <b>Have a bite</b> le permite ciclar y aplicar sus aderezos disponibles desde una distancia segura.
            </>
        ],
        cons: [
            <>Su gran tenedor le dificulta defenderse cuando los enemigos están directamente delante de él.</>,
            <>Opciones defensivas dependientes del tenedor y su posición por su gran longitud.</>,
            <>Para aplicarse aderezos debe pincharse con el tenedor mientras tenga un aderezo lo cual quita un fragmento
                de salud.</>
        ]
    },
    type: FighterType.HUMAN,
    source: Source.BASE_GAME,
    narrativeOrigin: "",
    icon: "",
    fullArt: `el-chef_fullArt.png`,
    portraitConfig: {
        x: 0.4,
        y: -0.4,
        zoom: 1.5,
    },
    baseStats: {
        health: baseDefaultStats.health * 0.9,
        walkSpeed: baseDefaultStats.walkSpeed * 0.8,
        runSpeed: baseDefaultStats.runSpeed * 0.8
    },
    moveSet: chefMoveSet,
    manualRadarChart: [
        {label: "Fuerza", value: 50, max: 100},
        {label: "Velocidad", value: 50, max: 100},
        {label: "Dificultad", value: 95, max: 100},
        {label: "Técnica", value: 85, max: 100},
        {label: "Movilidad", value: 60, max: 100},
        {label: "Defensa", value: 40, max: 100},
    ]
});