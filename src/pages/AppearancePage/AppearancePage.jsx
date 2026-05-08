import {Heading1, Heading2, Heading3} from "../../modules/Heading/Heading.jsx"
import MusicPlayer from "../../modules/MusicPlayer/MusicPlayer.jsx";
import PLink from "../../modules/Link/PLink.jsx";
import {routes} from "../../routes/routes.js";
import {fighterBolognesa} from "../../data/fighter/fighters/bolognesa/fighterBolognesa.jsx";
import "./AppearancePage.css";

export default function AppearancePage() {
    return (
        <>
            <Heading1 id="appearance">Apariencia</Heading1>
            <Heading2 id="visual">Identidad visual y dirección de arte</Heading2>
            <b>Cuoco Cooked</b> opera sobre una tensión visual deliberada: todo tiene el aspecto de querer ser consumido
            y disfrutado, pero el contexto es violento y absurdo. Esta contradicción no se resuelve se explota como
            motor de identidad.
            <br></br>
            <Heading3 id="art-direction">Principios de art direction</Heading3>
            <ul>
                <li><b>Food styling como lenguaje visual base: </b>
                    Cada personaje parte de referencias reales, ya sea por oficios culinarios o por platos reales.
                </li>
                <li><b>Saturación alta, contraste controlado: </b>
                    La paleta general es saturada y cálida, con excepciones frías para personajes temáticamente
                    opuestos (personajes basados en sushi, helados, etc.). Los efectos de golpe y las partículas de
                    los aderezos deben tener sus propios lenguajes cromáticos claramente diferenciados y
                    reconocibles por el jugador como efectos de polvo o cartóon para exagerar las acciones.
                    <br/>
                    Deben contrastar claramente con el escenario para mantenerse claros y seguir un estilo cartoon que
                    ayude a leer las siluetas y reducir la cantidad de colores y degradados.
                    <br/>
                    Ejemplos del estilo visual:
                </li>
                <br/>
                <div className="gallery">
                    <div className="gallery-item">
                        <img
                            src={`${import.meta.env.BASE_URL}artReferences/DNF_Duel_Reference.jpg`}
                            alt="Referencia 1"
                        />
                    </div>
                    <div className="gallery-item">
                        <img
                            src={`${import.meta.env.BASE_URL}artReferences/guilty-gear-strive-aba.jpg`}
                        />
                    </div>
                    <div className="gallery-item">
                        <img
                            src={`${import.meta.env.BASE_URL}artReferences/hifiRush.JPG`}
                            alt="Referencia 3"
                        />
                    </div>
                    <div className="gallery-item">
                        <img
                            src={`${import.meta.env.BASE_URL}artReferences/CupHead.JPG`}
                            alt="Referencia 4"
                        />
                    </div>
                    <div className="gallery-item">
                        <img
                            src={`${import.meta.env.BASE_URL}artReferences/GuiltyGearStrive_Reference.png`}
                            alt="Referencia 4"
                        />
                    </div>
                    <div className="gallery-item">
                        <img
                            src={`${import.meta.env.BASE_URL}artReferences/StudioGhibli.jpg`}
                            alt="Referencia 4"
                        />
                    </div>
                </div>

                <br/>
                <li><b>Materiales como carácter: </b>
                    La textura del material y de cada personaje comunica su arquetipo:
                    <ul>
                        <li>Personajes densos y pesados (grappler): masas, carnes, texturas opacas</li>
                        <li>Personajes rápidos (rushdown): líquidos, salsas, elementos que se deforman</li>
                        <li>Personajes de distancia (zoner): elementos que se estiran, alargan o se proyectan</li>
                    </ul>
                </li>
                <li><b>Animaciones con física de alimento: </b>
                    Los movimientos deben tener bounce, drip y splash coherentes con su base gastronómica.
                    Un golpe de <PLink href={routes.fighters.path + "/" + fighterBolognesa.id}>la Boloñesa</PLink> no
                    termina en el impacto - la salsa salpica, los fideos rebotan, hay inercia.
                </li>
                <li><b>Contraste de escala: </b>
                    Los personajes humanos son anatómicamente "normales", visualmente grandes (personajes fuertes),
                    pero realistas en relación al entorno (escenarios). Lo cual contrasta fuertemente con las comidas,
                    que no son necesariamente humanoides, lo que genera un desequilibrio visual que refuerza lo
                    absurdo de la situación.
                </li>
                <li><b>Escenarios: </b>
                    Los escenarios son cocinas, despensas, mercados y espacios relacionados con la gastronomía.
                    Todos ellos tienen elementos interactivos que participan en las mecánicas de combate de <PLink
                        href={routes.dressings.path}>aderezos</PLink>.
                </li>
            </ul>
            <Heading3 id="menus-and-screens">Menús y pantallas</Heading3>
            <ul>
                <li>Para la pantalla de selección de personaje usa elementos temáticos culinarios.</li>
                <li>Para las partes de los menús con opciones de texto usar como referente la carta de un restaurante
                    (ejemplo, el menú de pausa).
                </li>
            </ul>
            <Heading3 id="tone">Tono de humor</Heading3>
            <ul>
                <li><b>Absurdo desenfadado</b>: La premisa nunca se toma en serio a sí misma, pero el sistema de
                    combate sí es sólido y tiene profundidad real.
                </li>
                <li>La comedia emerge de la coherencia interna: un plato de boloñesa que te agarra con los fideos
                    es ridículo y al mismo tiempo tiene una lógica impecable dentro del universo.
                </li>
            </ul>
            <hr></hr>
            <Heading2 id="references">Referencias</Heading2>
            <Heading3 id="mechanicReferences">Referentes mecánicos</Heading3>
            <ul>
                <li>Street Fighter III: Sistema de parry con ventana pequeña y timing preciso</li>
                <li>Street Fighter 6: Estructura de triángulo ofensivo-defensivo, chip damage en guardia</li>
                <li>King of Fighters: Variedad de arquetipos de personaje dentro de un sistema coherente</li>
            </ul>
            <Heading3 id="visualReferences">Referentes estéticos</Heading3>
            <ul>
                <li>Guilty Gear Strive: Identidad visual fuerte y disruptiva como declaración de intenciones del
                    género
                </li>
                <li>Skullgirls: Personajes con identidad visual completamente original dentro del género</li>
                <li>Food photography / Instagram food styling: Iluminación, paleta, composición visual de personajes y
                    escenarios
                </li>
                <li>Studio Ghibli: Comida como objeto con carisma, textura y presencia</li>
                <li>Cuphead: Personajes con identidad fuerte derivada de su "material base"</li>
                <li>Hi-Fi Rush: Colores fuertes y vivos con estética comic marcada</li>
            </ul>
            <Heading2 id="music">Música</Heading2>
            <p>
                Se busca un tono musical con ritmo acelerado que compagine el ritmo de partidas rápidas de hasta 3
                rondas de hasta 99 segundos.

            </p>
            <p>
                Al igual que otros videojuegos. Se pretende usar temas con letras para los temas musicales de personajes
                que ayuden a presentarlos a ellos y sus motivaciones. Videojuegos dentro del género de peleas como
                <i> Guilty Gear</i> y fuera del género como <i>Metal Gear Rising Revengence</i>.
            </p>
            <p>
                Se ha desarrollado un tema original capaz de ser usado en multitud de partes del juego:
            </p>
            <ul>
                <li>Tema de selección de escenario y personajes.</li>
                <li>Tema de modo entrenamiento o modo arcade.</li>
            </ul>
            <MusicPlayer fileList={[
                "mainThemeV4.ogg",
                "02 The Only Thing I Know For Real (Maniac Agenda Mix).flac",
                "1.12 Hellfire.mp3",
                "03 Symphony.flac",
                "02 Necessary Discrepancy.flac"
            ]}/>
        </>
    );
}
