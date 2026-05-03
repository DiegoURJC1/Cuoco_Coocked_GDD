import {Heading1, Heading2, Heading3} from "../../modules/Heading/Heading.jsx"
import AlertPanel from "../../modules/AlertPanel/AlertPanel.jsx";
import MusicPlayer from "../../modules/MusicPlayer/MusicPlayer.jsx";

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
                <li><b>Food styling como lenguaje visual base:</b>
                    Cada personaje parte de referencias reales de fotografía culinaria de alta gama. Los materiales
                    deben evocar apetito: gloss en las salsas, subsurface scattering en masas y carnes, vapor,
                    brillo
                    húmedo, texturas que parecen tocables. La iluminación de personajes en idle debe recordar a una
                    sesión fotográfica con iluminación de estudio.
                </li>
                <li><b>Saturación alta, contraste controlado:</b>
                    La paleta general es saturada y cálida, con excepciones frías para personajes temáticamente
                    opuestos (personajes basados en sushi, helados, etc.). Los efectos de golpe y las partículas de
                    los aderezos deben tener sus propios lenguajes cromáticos claramente diferenciados y
                    reconocibles
                    por el jugador.
                </li>
                <li><b>Materiales como carácter:</b>
                    La textura del material de cada personaje comunica su arquetipo:
                    <ul>
                        <li>Personajes densos y pesados (grappler): masas, carnes, texturas opacas</li>
                        <li>Personajes rápidos (rushdown): líquidos, salsas, elementos que se deforman</li>
                        <li>Personajes de distancia (zoner): elementos que se estiran, alargan o se proyectan</li>
                    </ul>
                </li>
                <li><b>Animaciones con física de alimento:</b>
                    Los movimientos deben tener bounce, drip y splash coherentes con su base gastronómica. Un golpe
                    de la Boloñesa no termina en el impacto — la salsa salpica, los fideos rebotan, hay inercia.
                </li>
                <li><b>Contraste de escala:</b>
                    Los personajes humanos son anatómicamente normales, visualmente grandes (personajes fuertes),
                    pero realistas en relación al entorno (escenarios).Lo cual contrasta fuertemente con los platos,
                    que son desproporcionadamente enormes, lo que genera un desequilibrio visual que refuerza lo
                    absurdo de la situación.
                </li>
                <li><b>Escenarios:</b>
                    Los escenarios son cocinas, despensas, mercados y espacios relacionados con la gastronomía.
                    Siguen el mismo principio de "food photography": bien iluminados, coloridos, con profundidad de
                    campo y elementos interactivos que participan en las mecánicas de combate (ver aderezos).
                    <AlertPanel>TODO: importante, linkar con aderezos</AlertPanel>
                </li>
            </ul>
            <Heading3 id="menus-and-screens">Menús y pantallas</Heading3>
            <ul>
                <li>Para la pantalla de selección de personaje usar fotos de la comida con nuestra estética.</li>
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
                Música de juego durante la partida.
            </p>
            <MusicPlayer fileList={[
                "mainThemeV3.ogg",
                "02 The Only Thing I Know For Real (Maniac Agenda Mix).flac",
                "1.12 Hellfire.mp3",
                "03 Symphony.flac",
                "02 Necessary Discrepancy.flac"
            ]}/>
        </>
    );
}
