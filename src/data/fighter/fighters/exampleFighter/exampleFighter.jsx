import {Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";

export const exampleFighter = new Fighter({
    name: "Pancracio",
    nickName: "El panadero",
    archetype: Archetype.BALANCE,
    description: (fighter) => (
        <>
            {fighter.name} es un panadero novato pero con mucho ánimo. Su arma (y escudo) favorito es la primera barra de pan que
            hizo, la cual está tan dura como llena de orgullo. Su falta de práctica hace que todavía le cuesta ser
            agresivo con la masa, así no suele sacar cuchillo de cortar pan al combate, a no ser que su querida baguette
            no ha sido suficiente para defenderle.<br/>

        </>
    ),
    easyToUse: 5,
    narrativeOrigin:
        <>
            Panadería de la Toscana.
        </>,
    prosCons: {
        pros: [
            <> Estilo de juego pausado y ágil, con muchas oportunidades para optar a la defensa. Además, cuando queda poca vida, se desbloquea el uso del cuchillo, que permite actuar de forma más agresiva.</>
        ],
        cons: [
            <> Dispone de pocas herramientas para generar gran presión cuando dispone de mucha vida.</>,

        ]
    },
    type: FighterType.HUMAN,
    source: Source.BASE_GAME,
    icon: `${import.meta.env.BASE_URL}fighters/icon/alan_icon.svg`,
    fullArt: `${import.meta.env.BASE_URL}fighters/fullart/alan_fullart.png`,
    portraitConfig: {
        x: 0.5,
        y: 0.2,
        zoom: 2
    },
});

