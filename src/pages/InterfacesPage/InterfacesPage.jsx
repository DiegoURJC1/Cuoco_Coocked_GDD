import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx"
import PLink from "../../modules/Link/PLink.jsx";
import {exampleFighter} from "../../data/fighter/fighters/exampleFighter/exampleFighter.jsx";
import {routes} from "../../routes/routes.js";
import MenuDiagram from "../../../public/diagrams/Menu diagram.svg?react"

import "./InterfacesPage.css";
import {useNavigate} from "react-router-dom";

export default function InterfacesPage() {
    const navigate = useNavigate();

    const diagramRoutes = Object.values(routes.interfaces.menuDiagram)
        .reduce((acc, item) => {
            acc[item.id] = item.path;
            return acc;
        }, {});

    function handleDiagramClick(event) {

        let el = event.target;

        while (el && !el.classList?.contains("flow-diagram-node")) {
            el = el.parentNode;
        }

        if (!el) return;

        const cleanId = el.id.replace("diagram-", "");

        const route = diagramRoutes[cleanId];

        if (!route) return;

        navigate(route);
    }

    return (
        <>
            <Heading1 id="interfaces">Interfaces</Heading1>
            <p>
                Esta página contiene todas las interfaces, tanto fuera como dentro del combate.
            </p>
            <Heading2 id="general-interface">Interfaz general</Heading2>
            <div className="diagram">
                <MenuDiagram style={{width: "70%"}} onClick={handleDiagramClick}/>
            </div>
            <p id={routes.interfaces.menuDiagram.gameConnect.id}><b>Intento de conexión al servidor</b></p>
            <p>
                Pantalla que muestra el intento de conexión al servidor remoto. Es preferible hacerlo al inicio una sola
                vez para evitar hacerlo a lo largo del juego y permitir elementos como popups o notificaciones de
                noticias que requieran de un servidor.
            </p>
            <p id={routes.interfaces.menuDiagram.mainMenu.id}><b>Menú principal</b></p>
            <p>
                El menú principal muestra los siguientes contenidos. Da opciones para jugar, ajustar, material
                adicional y noticias.
            </p>
            <ul>
                <li>
                    <b id={routes.interfaces.menuDiagram.online.id}>Online</b>
                    <p>
                        Acceso a todos los modos de juego en línea para enfrentarte a otros jugadores del mundo.
                    </p>
                    <ul>
                        <li>
                            <b id={routes.interfaces.menuDiagram.ranked.id}>Clasificatoria</b>
                            <p>
                                Combates competitivos donde se ganan o pierden puntos de rango según el rendimiento.
                                Ideal para medir las aptitudes de juego en un entorno competitivo.
                            </p>
                        </li>
                        <li>
                            <b id={routes.interfaces.menuDiagram.quickMatch.id}>Partida rápida</b>
                            <p>
                                Enfrentamientos rápidos contra jugadores de nivel similar sin afectar a la
                                clasificación.
                            </p>
                        </li>
                        <li>
                            <b id={routes.interfaces.menuDiagram.publicLobby.id}>Lobby público</b>
                            <p>
                                Salas abiertas donde se pueden ver, unir o retar a otros jugadores libremente.
                            </p>
                        </li>
                        <li>
                            <b id={routes.interfaces.menuDiagram.privateLobby.id}>Lobby privado</b>
                            <p>
                                Salas personalizadas creadas por jugadores con opción de limitar el acceso de otros
                                jugadores.
                            </p>
                        </li>
                    </ul>
                </li>

                <li>
                    <b id={routes.interfaces.menuDiagram.cata.id}>Cata</b>
                    <p>
                        Área de práctica y progresión donde se puede aprender, mejorar técnicas y completar desafíos del
                        juego. Llamado así por la cata culinaria y la <PLink
                        href={"https://es.wikipedia.org/wiki/Kata"}><i>kata</i></PLink>  de las artes marciales.
                    </p>
                    <ul>
                        <li>
                            <b id={routes.interfaces.menuDiagram.training.id}>Entrenamiento</b>
                            <p>
                                Modo libre para practicar combos, movimientos y estrategias contra la IA.
                            </p>
                            <p>
                                Leer más en la página de <PLink href={routes.gameModes.training.id}>modos de
                                juego</PLink>.
                            </p>
                        </li>
                        <li>
                            <b id={routes.interfaces.menuDiagram.missions.id}>Misiones</b>
                            <p>
                                Desafíos estructurados que enseñan mecánicas del juego y recompensan al jugador por
                                completarlos.
                            </p>
                        </li>
                        <li>
                            <b id={routes.interfaces.menuDiagram.tutorial.id}>Tutorial</b>
                            <p>
                                Introducción guiada que enseña los controles básicos y fundamentos del combate.
                            </p>
                        </li>
                        <li>
                            <b id={routes.interfaces.menuDiagram.combos.id}>Combos</b>
                            <p>
                                Sección dedicada a aprender y practicar secuencias de ataques avanzados.
                            </p>
                        </li>
                    </ul>
                </li>

                <li>
                    <b id={routes.interfaces.menuDiagram.local.id}>Local</b>
                    <p>
                        Modos de juego para disfrutar en la misma consola o dispositivo con otros jugadores.
                    </p>
                    <ul>
                        <li>
                            <b id={routes.interfaces.menuDiagram.arcade.id}>Arcade</b>
                            <p>
                                Modo clásico donde enfrentas una serie de combates contra la IA hasta llegar al jefe
                                final.
                            </p>
                            <p>Leer más en la página de <PLink href={routes.gameModes.arcade.id}>modos de juego</PLink>.
                            </p>
                        </li>
                        <li>
                            <b id={routes.interfaces.menuDiagram.versus.id}>Versus</b>
                            <p>
                                Combate directo entre dos jugadores en el mismo dispositivo o consola.
                            </p>
                        </li>
                        <li>
                            <b id={routes.interfaces.menuDiagram.survival.id}>Supervivencia</b>
                            <p>
                                Enfréntate a oleadas de oponentes consecutivos con una sola barra de vida o recursos
                                limitados.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <b id={routes.interfaces.menuDiagram.story.id}>Historia</b>
                    <p>
                        Modos de juego relacionados con el mundo del juego.
                    </p>
                    <ul>
                        <li>
                            <b id={routes.interfaces.menuDiagram.playStory.id}>Jugar historia</b>
                            <p>
                                Modo de juego en el que se muestra la narración de una historia del mundo de juego.
                            </p>
                            <p>Leer más en la página de <PLink href={routes.gameModes.story.id}>modos de juego</PLink>.
                            </p>
                        </li>
                        <li>
                            <b id={routes.interfaces.menuDiagram.cuocoWorld.id}>Mundo Cuoco</b>
                            <p>
                                Compilación de todos los elementos del mundo de juego dentro de la diégesis: lore,
                                personajes, afinidades, lugares, cronología, etc.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <b id={routes.interfaces.menuDiagram.settings.id}>Ajustes</b>
                    <p>
                        Configuración general del juego donde puedes ajustar controles, gráficos, audio y opciones de
                        accesibilidad.
                    </p>
                </li>

                <li>
                    <b id={routes.interfaces.menuDiagram.store.id}>Tienda</b>
                    <p>
                        Accede al catálogo de contenido adicional como personajes, skins, cosméticos y otros extras
                        desbloqueables o de pago.
                    </p>
                </li>

                <li>
                    <b id={routes.interfaces.menuDiagram.exit.id}>Salir</b>
                    <p>
                        Cierra el juego o vuelve al sistema operativo según la plataforma.
                    </p>
                </li>
            </ul>

            <Heading2 id="combat-interface">Interfaz de combate</Heading2>
            <p>
                La interfaz de combate sigue la temática general del juego, haciendo referencia a utensilios de
                cocina y a comida para lograr una estética cohesionada. Al iniciar cada combate, aparecerán dos
                tablas de madera en la parte superior de la pantalla, listas para reflejar el caos de la acción.
            </p>

            <img src={`${import.meta.env.BASE_URL}interface/combatInterface.png`} alt="Combat Interface"/>

            <p>
                En el rectángulo a la derecha de la tabla de cortar, aparecerá la cara del luchador. Su salud la
                refleja la barra superior dentro de la tabla, y sus puntos especiales, la barra inferior.
                Dichas barras cambiarán de estética dependiendo del luchador que aparezca en pantalla, reflejando
                la comida que representa o, en el caso de los cocineros, la que es su especialidad.
            </p>

            <p>
                En el caso de <PLink
                href={routes.fighters.path + "\\" + exampleFighter.id}>{exampleFighter.nickName}</PLink>, su
                salud estará dictada por una barra de pan, que se irá haciendo más
                pequeña cuanto más daño sufra. En el caso de la barra de movimientos <b>Overdrive</b>, quedan
                representados por un
                cuchillo de cortar pan, que se verá manchado por la sangre (o salsa) de su enemigo.
            </p>

            <p>
                Los círculos marrones son las ranuras sobre las que se pondrán los aderezos activos en cada jugador.
            </p>
            <p>
                Las manzanas representan las rondas y se quedarán comidas, solo con el corazón de la manzana, cuando se
                pierde una ronda. En el caso de las imágenes, se muestran 3 manzanas como ejemplo de una partida al meor
                de 5.
            </p>
            <p>
                Abajo se muestra un ejemplo de la disposición de la interfaz en el escenario de juego:
            </p>

            <img src={`${import.meta.env.BASE_URL}interface/combatInterfaceInScene.png`}
                 alt="Combat Interface In-Game"/>

        </>
    );
}
