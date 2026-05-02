import { Heading1, Heading2 } from "../../modules/Heading/Heading.jsx";
import PLink from "../../modules/Link/PLink.jsx";
import "./StagesListPage.css";
import { stages } from "../../data/stage/stages.jsx";

export default function StagesListPage() {
    return (
        <div>
            <Heading1 id="stages">Escenarios</Heading1>
            <Heading2 id="general-principles">Principios generales</Heading2>
            <p>
                Los escenarios de Cuoco Cooked son espacios gastronómicos que siguen el mismo lenguaje visual que los personajes: iluminados como
                fotografía de producto, coloridos y con detalle de texturas. No son fondos neutros, tienen presencia y pueden interactuar con el combate.
            </p>
            <ul>
                <li>El tamaño del escenario es de 2880x1080 píxeles (HD apaisado donde todo el contenido vertical cabe en 1080px y el contenido horizontal
                    representa vez y media una pantalla estandar).</li>
                <li>El corner aumenta la presión del atacante (sin salida de dash, escape solo por salto o reversals).</li>
                <li>El entorno tiene elementos interactivos, activables por ataques de distancia y AoE</li>
                <li>El escenario hace scroll horizontal, con limites visuales y de colisión</li>
            </ul>
            <p>
                <br></br>
                <hr></hr>
                <br></br>
            </p>
            <Heading2 id="all-stages">Escenarios propuestos</Heading2>
            <p>
                Conforme se avance en el desarrollo se añadirán nuevos escenarios sucesivamente en packs de al menos 3 nuevos entornos. Algunos
                de los que ya están diseñados son:
            </p>
            <ul>
                <li>
                    <b>La Despensa</b>: Estantes repletos de conservas, especias y botes de salsas. Luz de almacén cálida. El escenario
                    tiene multitud de elementos interactivos, activables por ataques de distancia y AoE, como estanterías de botes de diferentes
                    aderezos (aleatorios en cada diferente partida).
                </li>
                <li>
                    <b>La Cocina en Hora Punta</b>: Cocinas industriales con fuegos encendidos, vapor y superficies de acero. El escenario
                    tiene elementos interactivos que generan aderezo como quemadores encendidos que aplican "Quemado" en AOE.
                </li>
                <li>
                    <b>El Mercado</b>: Puesto de mercado con ingredientes apilados, iluminación de exterior mediterránea. El escenario
                    tiene elementos interactivos geneeradores de aderezos como montones de ingredientes que cambian conforme el spawn aleatorio de
                    los diferentes puestos entre diferentes partidas.
                </li>
                <li>
                    <b>El Estudio Fotográfico</b>: Sesión de food photography interrumpida. Fondos blancos, flashes, props gastronómicos.
                </li>
            </ul>
            <br></br>
            <hr></hr>
            <br></br>
            <Heading2 id="stages-list">Lista de escenarios</Heading2>
            <div className="stages-list">
                {stages.map(f => (
                    <PLink key={f.id} href={`/stages/${f.id}`}>
                        <div
                            style={{
                                height: "200px",
                                width: "200px",
                                aspect: "auto",
                            }}
                        >
                            {f.stageArt}
                        </div>
                        {f.name}
                    </PLink>

                ))}
            </div>
        </div>
    );
}