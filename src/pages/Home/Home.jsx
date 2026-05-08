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
            <Heading2 id="for-who">Público objetivo</Heading2>
            <p>
                El objetivo de este juego es crear un juego con una facilidad de entrada que sirva de punto medio entre
                los <i>platform fighter</i> como <PLink href={"https://www.smashbros.com/es_ES/"}>Super Smash
                Bros</PLink> y los juegos de peleas tradicionales como <PLink
                href={"https://www.streetfighter.com/6/es-es"}>Street Fighter</PLink>.
            </p>
            <p>
                Esto se busca con una serie de factores:
                <ul>
                    <li>Estética poco seria y exagerada.</li>
                    <li>Diseños extravagantes con <i>game plans</i> marcados.</li>
                    <li>Elementos semi-aleatorios con los <PLink href={routes.dressings.path}>aderezos</PLink> que
                        corten ligeramente la diferencia de habilidad entre jugadores experimentados y novatos.
                    </li>
                    <li>Elementos que elevan el <i>skill-floor</i> como <PLink
                        href={routes.mechanics.cooking.path}>cooking</PLink> y permitan a un jugador sin experiencia
                        conseguir resultados vistosos sin ser detrimental para el rival tanto si es novato como
                        experimentado.
                    </li>
                </ul>
            </p>
            <p>
                Pese a estos esfuerzos, sabemos que un público casual real nunca se quedará con este juego ya que
                requiere un cierto nivel de compromiso. Generos como los First Person Shootes tienen una gran extensión,
                unido a su simpleza mecánica que los puede reducir a <i>juegos de mirar</i>. Esto es contrario a la
                naturaleza de los juegos de pelea, no están extendidos y la pelea se reduce a agitar los brazos con la
                esperanza de ganar.
            </p>
            <p>
                No se espera un modo <i>entrenamiento</i> por nada. No se puede apelar a un público dedicado y a uno que
                no, ni juegos que se han propuesto tener un equilibrio entre accesibilidad y <i>novice ready</i>
                como <PLink href={"https://2xko.riotgames.com/es-es/"}>2XKO</PLink> lo han conseguido.
                Se busca agradar la experiencia de aquellos que estén dispuestos a probarlos y estudiarlos lo suficiente
                como para recordar sus mecánicas básicas o entender las dinámicas generales.
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
