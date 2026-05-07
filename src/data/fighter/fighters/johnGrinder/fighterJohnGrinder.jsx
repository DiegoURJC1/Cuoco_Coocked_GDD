import {baseDefaultStats, Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source} from "../../../../dataTemplate/fighters/enums/Source.js";
import {FighterType} from "../../../../dataTemplate/fighters/enums/FighterType.js";
import {moveCheckTheFridgeSpicy, moveFridgeTwirl63214, moveSetJohnGrinder} from "./moveSetJohnGrinder.jsx";
import {InlineIcon} from "../../../../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../../../../dataTemplate/input/InputSequence.jsx";
import PLink from "../../../../modules/Link/PLink.jsx";
import glossary, {getGlossaryLink} from "../../../../routes/glossary.jsx";

const name = "John Grinder";
export const fighterJohnGrinder = new Fighter({
    name: name,
    nickName: "Johnny Fresh",
    archetype: Archetype.POWER,
    description: (fighter) => (
        <>
            Más grande que una nevera. Por suerte, siempre lleva una para comparar.
            <br/>
            {fighter.name} es un carnicero local con una fuerza sobrehumana y usa una nevera consigo para defenderse.
            <br/>
            <p>
                Su movimiento estrella es <b>{moveFridgeTwirl63214.name}</b>, con el que mueve con gran fuerza su nevera
                en
                movimientos de palanca de medio círculo en cualquier dirección menos arriba que además pueden hacerse en
                el
                aire. Este movimiento es lento pero de mucho daño y es capaz de oprimir al rival a media distancia.
            </p>
            <p>
                Su otro movimiento notable es <b>{moveCheckTheFridgeSpicy.name}</b>, con él, saca alimentos de su nevera
                y da la oportunidad de aplicarlos a si mismo o al rival según cómo se golpee.
            </p>
        </>
    ),
    easyToUse: 3,
    narrativeOrigin:
        <>
            Jefe de una carnicería local. Lleva consigo una gran nevera y un corazón todavía más grande.
        </>,
    prosCons: {
        pros: [
            <>Versatil tanto de cerca como a distancia media.</>,
            (fighter) => {
                return <>
                    Buen control del espacio con <b>{fighter.moveSet.universal.down_hs.name}</b> para compensar la falta
                    de {moveFridgeTwirl63214.name} directamente encima.
                </>;
            },
            (fighter) => {
                return <>
                    El input <InlineIcon size={2.5}><InputSequence
                    sequence={fighter.moveSet.universal.down_hs.inputList}/></InlineIcon>
                    ayuda a mantenerse protegido mientras se realiza e impide que abusen de su espacio aéreo pese a que
                    carece de movilidad aérea.
                </>;
            },
            <><PLink href={getGlossaryLink(glossary.knockDown)}>Knokeos</PLink> consistentes gracias
                a <b>{moveFridgeTwirl63214.name}</b> que le permite reposicionarse a la distancia ideal para volver a
                conectar el golpe.
            </>

        ],
        cons: [
            <>Movimientos lentos y predecibles.</>,
            <>Dificultad para acortar las distancias.</>,
            <>Opciones defensivas escasas.</>,
            <>No tiene acción secundaria en el arie (ni dash aéreo ni doble salto).</>
        ]
    },
    type: FighterType.HUMAN,
    source: Source.BASE_GAME,
    icon: `${import.meta.env.BASE_URL}fighters/icon/alan_icon.svg`,
    fullArt: `${import.meta.env.BASE_URL}fighters/fullart/john-grinder_fullArt.png`,
    portraitConfig: {
        x: 0.6,
        y: 0,
        zoom: 5
    },
    baseStats: {
        health: baseDefaultStats.health * 1.2,
        walkSpeed: baseDefaultStats.walkSpeed * 0.8,
        runSpeed: baseDefaultStats.runSpeed * 0.8
    },
    moveSet: moveSetJohnGrinder,
});
