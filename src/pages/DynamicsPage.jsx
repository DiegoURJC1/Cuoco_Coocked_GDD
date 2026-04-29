import {Heading1, Heading2} from "../modules/Heading/Heading.jsx";
import PLink from "../modules/Link/PLink.jsx";
import {routes} from "../routes/routes.js";

export default function DynamicsPage() {
    return (
        <>
            <Heading1 id="dynamics">Dinámicas</Heading1>
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
        </>
    );
}