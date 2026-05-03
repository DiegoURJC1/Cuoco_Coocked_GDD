import {Heading1, Heading2, Heading3} from "../modules/Heading/Heading.jsx"
import PLink from "../modules/Link/PLink.jsx";
import {routes} from "../routes/routes.js";

export default function GameModesPage() {
    return (
        <>
            <Heading1 id="game-modes">Modos de juego</Heading1>
            <Heading2 id="versus">Versus</Heading2>
            <p>
                El modo <b>Versus</b> permite a dos jugadores enfrentarse entre ellos en local multijugador.
            </p>
            <Heading2 id="training">Entrenamiento</Heading2>
            <p>
                El modo <b>Entrenamiento</b> permite a uno o dos jugadores entrar a una partida con modificadores
                particulares. Este tipo de modificadores tienen el objetivo de facilitar la experimentación del
                juego. Algunas modificaciones por defecto pueden ser:
                <ul>
                    <li>Tiempo infinito.</li>
                    <li>Recuperar la salud completa tras finalizar un combo o tras estar un tiempo sin recibir
                        daño.
                    </li>
                    <li>Medidores de recursos se rellenan al máximo tras consumirse para estar siempre disponibles.</li>
                </ul>
                Otras cosas que se pueden hacer es grabar secuencias de inputs para ser compartidas online, ser
                guardadas
                y reproducidas, aplicarlas al rival si es controlado por la máquina .
            </p>
            <Heading3 id="training-cpu">CPU de entrenamiento</Heading3>
            <p>
                Cuando solo un jugador entra al entrenamiento, el rival será controlado por la máquina.
                La máquina podrá tener distintos comportamientos accesibles desde el menú de pausa:
                <ul>
                    <li>Pasivo (Por defecto)</li>
                    <li>Agachado</li>
                    <li>Bloqueo [De pie, agachado, aleatorio, predecir]</li>
                    <li>Repetir ataque: repite un ataque determinado siempre que puede.</li>
                    <li>Repetir una secuencia de movimientos guardada.</li>
                </ul>
            </p>
            <Heading2 id="arcade">Arcade</Heading2>
            <p>
                El modo <b>Arcade</b> es un modo de juego de un solo jugador en el que, según el luchador que se elija,
                el jugador se enfrentará a una serie de retos y combates temáticos específicos al luchador elegido de la
                misma forma que en <PLink href={"https://www.ssbwiki.com/Classic_Mode_(SSBU)"}>Classic Mode</PLink> en
                Super Smash Bros Ultimate.
            </p>
            <Heading2 id="story">Historia</Heading2>
            <p>
                El modo <b>Historia</b> es un modo de juego de un jugador en el que tomas el papel de <b>Chef</b> en su aventura para descubrir nuevos sabores.
                Según progreses te encontrarás con distintos personajes del juego y podrás aprender más sobre sus orígenes y relaciones.
                Este modo mezcla una naración que te sumergira en el mundo del juego y una serie de desafíos complejos a medida que vayas dominando a los distintos personajes.
            </p>
            <p>
                Para un vistazo a la introducción del modo <b>Historia</b> diriganse al apartado de <PLink href={routes.story.path}>Historia</PLink>.


            </p>


        </>
    );
}
