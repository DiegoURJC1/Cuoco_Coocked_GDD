import {Heading1, Heading2} from "../modules/Heading/Heading.jsx"
import PLink from "../modules/Link/PLink.jsx";
import {exampleFighter} from "../data/fighter/fighters/exampleFighter/exampleFighter.jsx";
import {routes} from "../routes/routes.js";


export default function InterfacesPage() {
    return (
        <>
            <Heading1 id="interfaces">Interfaces</Heading1>
            <p>
                Esta página contiene todas las interfaces, tanto fuera como dentro del combate.
            </p>

            <Heading2 id="combat interface">Interfaz de combate</Heading2>
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
                En el caso de <PLink href={routes.fighters.path + "\\" + exampleFighter.id}>{exampleFighter.nickName}</PLink>, su
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

            <img src={`${import.meta.env.BASE_URL}interface/combatInterfaceInScene.png`} alt="Combat Interface In-Game"/>

        </>
    );
}
