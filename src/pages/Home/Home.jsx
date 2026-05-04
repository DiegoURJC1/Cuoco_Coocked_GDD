import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx"

import "./Home.css";
import PLink from "../../modules/Link/PLink.jsx";
import {routes} from "../../routes/routes.js";

export default function Home() {
    return (
        <>
            <Heading1 id="home">Home</Heading1>
            <img src = "../../../public/cover/portadaConLogo.png" alt="Game Cover Art"/>
            <p className="claim">
                Con los puños en la masa
            </p>

            <Heading2 id="game-concept">Vision Statement</Heading2>
            <p>
                <b>Cuoco Cooked</b> es un juego de lucha 3D con movimiento 2D de vista lateral donde cada combatiente es
                un plato culinario que ha cobrado vida, mutado y decidido que tiene cosas que resolver a puñetazos.
                El roster mezcla creaciones gastronómicas con humanos lo suficientemente insensatos como para
                meterse por medio armado con utensilios de cocina y demasiada confianza en sí mismo.
            </p>
            <p>
                El juego abraza la contradicción visual como identidad. Los personajes tienen el aspecto apetecible
                y cuidado de una foto y al mismo tiempo se destrozan mutuamente con una violencia completamente absurda.
                Esa tensión entre lo delicioso y lo ridículo es el corazón estético del juego.
            </p>
            <p>
                Mecánicamente, <b>Cuoco Cooked</b> propone un sistema de combate de lectura y respuesta construido
                sobre un triángulo ofensivo claro (melee, distancia, agarres) y una defensa asimétrica que obliga
                al jugador a identificar qué tipo de ataque está recibiendo antes de poder neutralizarlo.
                Por encima de este núcleo, el <PLink href={routes.dressings.path}>sistema de Aderezos</PLink> introduce
                una capa de estados alterados (buffs y debuffs de corta duración y alta rotación) que emergen de las
                técnicas de cada luchador y del entorno mismo, generando situaciones caóticas, reversibles y
                narrativamente absurdas en cada combate.
                Al comentar como te ha ido la partida son normales frases como:
                "la boloñesa me estaba destrozando con albondigazos y no podía reaccionar,
                pero en un instante lancé un tenedor a la estantería,
                se le cayó la salsa brava por encima y ahí supe que me la iba a comer".
            </p>
            <p>
                <b>La fantasía del jugador es sentir que domina una cocina que se ha vuelto completamente loca.</b>
            </p>
            <Heading2 id="game-genre">Género</Heading2>
            <p>
                Fighting game clásico 2D hecho en 3D, vista lateral.
            </p>
            <p>
                Se trata de un juego de información perfecta en el que ambos rivales conocen toda la información de la
                partida.
            </p>
            <Heading2 id="game-platform">Plataforma</Heading2>
            <p>
                Arcade, Windows, Linux, PS5, XBox Game Pass.
            </p>
        </>
    );
}
