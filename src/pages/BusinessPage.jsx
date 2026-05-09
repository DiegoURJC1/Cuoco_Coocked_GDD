import {Heading1, Heading2} from "../modules/Heading/Heading.jsx"
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";

export default function BusinessPage() {
    return (
        <>
            <Heading1 id="business">Modelo de negocio</Heading1>

            <AlertPanel>TODO: cuando se definan las fases del proyecto, poner cantidad de personajes y de escenarios
                dentro de cada fase</AlertPanel>
            <p>
                En cuanto al presupuesto, iniciamos una recaudación en kickstarter para obtener datos con cifras
                realistas del número de interesados en el juego para buscar un publisher.
                Se ha estimado que se necesitarían unos 600.000€ para su lanzamiento en las plataformas
                (Steam, Epic Games Store, GoG, Nintendo Switch) y publicación de diferentes DLC o actualizaciones.
                El gráfico a continuación muestra las diferentes fases de producción en cuanto a objetivos superados
                en recaudación (en caso de no contar con un publisher):
            </p>

            <Heading2 id="roadmap">Roadmap</Heading2>
            <img style={{
                width: 'clamp(200px, 70%, 500px)',
                transformOrigin: 'center', // CamelCase y en un solo objeto
                display: 'block',           // Necesario para que el margen funcione
                margin: '0 auto'            // Para centrarla
            }} src={`${import.meta.env.BASE_URL}diagrams/tenedorRoadMapDiagram.png`}/>
            {/*base_url=public*/}

            <Heading2 id="elEquipo">El equipo</Heading2>

            <p>
                El equipo, formado por seis programadores y artistas, recibiría un presupuesto de 20.000€ por mes de
                trabajo para elaborar el proyecto. Se han tenido en cuenta los pagos a las diferentes plataformas para
                publicar el juego en ellas o adquerir los kits de desarrollador. De igual manera se ha realizado un
                pequeño estudio sobre la localización del videojuego, para presupuestar gastos en traducciones.

            </p>

            <Heading2 id="mvp">MVP inicial</Heading2>
            <p>
                Se prelanzará el juego con menos personajes (de cuatro a seis) y tres escenarios, con acceso exclusivo
                para los patrocinadores. EStos serán en su mayoría donantes de kickstarter con aportaciones mayores a
                20€.

            </p>
            <Heading2 id="lanzamiento">Lanzamiento y plataformas</Heading2>
            <p>
                El juego con 8-12 personajes y aproximadamente ocho escenarios se lanzará para Steam y Epic Games Store.
                Publicarlo en Steam costará al equipo 100€, que serán devueltos si llega a producir 1.000€. En Epic
                Games se cuenta con una comisión del 12% (a excepción del primer millón) y para recibir pago se necesitan
                ingresos anuales que superen los 100€.
                <br/>
                GOG es considerado por su ética DRM-Free, que hace al usuario del juego dueño del mismo al comprarlo.
                Aumentará su popularidad y dará buena imagen al equipo. Como contra, para publicarlo deben aceptar el
                juego. La comisión estimada es del 30%.
                <br/>
                Si las ganancias del juego crecen y llegan a los valores objetivos, se obtendrán dos kits de desarrollo
                por 500€ la unidad, para lanzarlo para la consola Nintendo Switch. De nuevo una comisión del 30%.
            </p>
            <Heading2 id="dlc">Mejoras y DLCs</Heading2>
            <p>
                Se han planteado diferentes expansiones del juego, pudiéndolas hacer coincidir con fechas clave del año.
                Una de las más representativas será "April foods", que hace referencia al día de los inocentes en países
                anglosajones (April fools). Constará de nuevos personajes, pero sobre todo nuevas mecánicas que resulten
                sorprendentes y absurdas (lo que acompaña al tono jocoso y ocurrente del juego).
                Otro objetivo necesario será el DLC de cinco escenarios nuevos.
                <br/>
                Además, se implementará un sistema de mods o modificadores, para que los jugadores y usuarios recurrentes
                puedan crear sus propias versiones del juego. Esto tiene un papel importante para la popularidad del juego
                en internet y conseguir una comunidad unida.
            </p>

            <Heading2 id="traducciones">Traducciones</Heading2>
            <p>
                El rango de precio general está en torno a los 0,06€-0,10€ por palabra. Consideramos que la
                traducción abarcará unas 9.000 palabras. Se establece un porcentaje del 25% para testing, lo que nos
                lleva a unos 1.350€ por idioma. Usaremos Lockpick para las traducicciones a inglés, portugués, alemán,
                chino, japonés, francés, italiano y ruso. En total se presupuestan 10.800€.
            </p>


            {/*base_url=public



            <Heading2 id="partners">Formas de colaborar</Heading2>
            <p>
                Diferentes tiers de donación y sus beneficios asociados
            </p>
            <Heading2 id="launch">Lanzamiento</Heading2>
            <p>
                Plataformas, fechas estimadas, tamaño roster, cantidad escenarios, modos incluidos ...
            </p>*/}
        </>
    );
}
