import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx"

import "./Home.css";
import PLink from "../../modules/Link/PLink.jsx";
import {routes} from "../../routes/routes.js";
import AlertPanel from "../../modules/AlertPanel/AlertPanel.jsx";
import glossary, {getGlossaryLink} from "../../data/glossary/glossary.jsx";
import {GrabText, MeleeText, RangeText} from "../../modules/ColoredText/ColoredText.jsx";

export default function Home() {
    return (
        <>
            <Heading1 id="home">Home</Heading1>
            <div className="diagram">
                <img style={{maxHeight: "80vh",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block"}} src={`${import.meta.env.BASE_URL}cover/portadaConLogo.png`} alt="Game Cover Art"/>
            </div>

            <p className="claim">
                Con los puños en la masa
            </p>
            <AlertPanel>
                TODO: revisar que en todas las páginas cada referencia a inputs esté traducida a su correspondiente
                icono
            </AlertPanel>

            <Heading2 id="game-concept">Vision Statement</Heading2>
            <p>
                <b>Cuoco Cooked</b> es un juego de lucha 3D con movimiento 2D de vista lateral donde la comida se alza
                en contra de los comensales.
                Los platos culinarios han cobrado vida, mutado y decidido que tienen cosas que resolver a puñetazos.
                El roster mezcla creaciones gastronómicas con humanos lo suficientemente insensatos como para
                meterse por medio armado con utensilios de cocina y suficiente confianza en sí mismo.
            </p>
            <p>
                El juego utiliza los elementos mecánicos clásicos del género como los <PLink
                href={getGlossaryLink(glossary.motionInput)}>motion inputs</PLink> y una estética que equilibra el
                estilo cartoon de los personajes con un cierto extra de detalle en la comida.
                Se busca tensión entre lo delicioso y lo ridículo en el tono estético y narrativo del juego.
            </p>
            <p>
                Mecánicamente, <b>Cuoco Cooked</b> propone un sistema de combate clásico de lectura y respuesta
                construido
                sobre un triángulo ofensivo claro (<MeleeText/>, <RangeText/>, <GrabText/>) y una defensa asimétrica que
                obliga
                al jugador a identificar qué tipo de ataque está recibiendo y cual puede ser el siguiente para salir de
                una situación desventajosa.
            </p>
            <p>
                Por encima de este núcleo, el <PLink href={routes.dressings.path}>sistema de Aderezos</PLink> introduce
                una capa de estados alterados (buffs y debuffs de corta duración y alta rotación) que emergen de las
                técnicas de cada luchador y del entorno mismo, generando situaciones caóticas, reversibles y
                narrativamente absurdas en cada combate.
                Al comentar como te ha ido la partida son normales frases como:
                <i>"la boloñesa me estaba destrozando con albondigazos y no podía reaccionar,
                    pero en un instante lancé un tenedor a la estantería,
                    se le cayó la salsa brava por encima y ahí supe que me la iba a comer"</i>.
            </p>
            <p>
                La fantasía del jugador es la misma que la de los juegos de peleas de estilo anime (caracterizados por
                su ritmo rápido y exageración como BlazBlue o SkullGirls). Pero con un giro mecánico que itera en este
                estilo de juego y descargando la exigencia técnica.
            </p>
            <Heading2 id="game-genre">Género</Heading2>
            <p>
                Fighting game clásico 2D hecho en 3D, vista lateral con motion inputs.
            </p>
            <p>
                Se trata de un juego de información perfecta en el que ambos rivales conocen toda la información de la
                partida.
            </p>
            <Heading2 id="game-platform">Plataforma</Heading2>
            <p>
                Arcade, Windows, Linux, PS5, XBox Game Pass.
            </p>
            <AlertPanel>
                <p>
                    Las medidas de tiempo a lo largo de esta documentación asumen 60 fotogramas por
                    segundo.
                </p>
                <p>
                    Relevante en las siguientes páginas:
                </p>
                <ul>
                    <li><PLink href={routes.mechanics.path}>Mecánicas</PLink></li>
                    <li><PLink href={routes.dynamics.path}>Dinámicas</PLink></li>
                    <li><PLink href={routes.fighters.path}>Luchadores</PLink></li>
                </ul>
                {/*Esta alerta es intencional y no debe quitarse*/}
            </AlertPanel>
        </>
    );
}
