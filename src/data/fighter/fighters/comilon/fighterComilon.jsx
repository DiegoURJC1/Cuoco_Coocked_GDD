import {baseDefaultStats, Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";
import PLink from "../../../../modules/Link/PLink.jsx";
import {routes} from "../../../../routes/routes.js";

export const fighterComilon = new Fighter({
    name: "Comilón",
    nickName: "Zamón",
    archetype: Archetype.BALANCE,
    description: (fighter) => (
        <>
            (Personaje principal del <PLink href={routes.gameModes.arcade.path}>modo historia</PLink>).
            <br/>
            Ex-Chef experto entrenado como Cuoco con una visión clara del arte culinario, está estancado.
            Ahora viaja por el mundo buscando las comidas más extravagantes y atrevidas, experimentando con el "Despertar" con un
            único objetivo: Encontrar el sabor perfecto.
            <br/>
            <br/>
            Destaca por un combate frenético basado en abrumar a sus enemigos con ataques encadenados. Al iniciar el combate es lento y pesado, lo que
            aumenta su defensa pero reduce su ataque y velocidad e ataque pero, a medida que acierta ataques consecutivos, su estado de <b>Frenesí</b> aumenta
            lo que le permite moverse a gran velocidad y asestar ataques más veloces. Según aumenta el <b>Frenesí</b> se vuelve más vulnerable a los ataques.
            Cuando llega al máximo de <b>Frensí</b> entra en estado <b>Berserker</b>. Durante <b>Berserker</b> obtiene su máxima velocidad de ataque y movimiento,
            además de no poder ser derribado. Este estado dura unos pocos segundos y, una vez finalizado, se restablece el <b>Frenesí</b>.
            <br/>



        </>
    ),
    easyToUse: 4,
    narrativeOrigin:
        <>
            Origen
        </>,
    prosCons: {
        pros: [
            <>A medida que reciba daño mejora su defensa, lo que aumenta su supervivencia ante combos.</>,
            <>Capacidad de abrumar a su adversario. Espacialmente fuerte contra personajes lentos y pesados, que dependas de ataques poderosos.</>
        ],
        cons: [
            <>Recibir golpes le castiga mucho. Reduce su <b>Frenesí</b> y recibe más daño cuanto mayor sea este. </>,
            <>La gestión de <b>Frenesí</b> aumenta mucho su dificultad técnica. Debe controlar siempre su estado y evitar entrar en <b>Berserker</b> en el momento erróneo.</>

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
        health: baseDefaultStats.health * 0.75,
        walkSpeed: baseDefaultStats.walkSpeed * 0.8,
        runSpeed: baseDefaultStats.runSpeed * 0.9
    },
    //moveSet:
    manualRadarChart: [
        { label: "Fuerza", value: 30, max: 100 },
        { label: "Velocidad", value: 85, max: 100 },
        { label: "Dificultad", value: 35, max: 100 },
        { label: "Técnica", value: 75, max: 100 },
        { label: "Movilidad", value: 80, max: 100 },
        { label: "Defensa", value: 50, max: 100 },
    ]
});
