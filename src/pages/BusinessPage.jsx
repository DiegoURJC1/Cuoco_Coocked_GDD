import {Heading1, Heading2} from "../modules/Heading/Heading.jsx"
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";

export default function BusinessPage() {
    return (
        <>
            <Heading1 id="business">Modelo de negocio</Heading1>
            <Heading2 id="mvp">MVP inicial</Heading2>
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
            <img style={{
                width: 'clamp(200px, 70%, 500px)',
                transformOrigin: 'center', // CamelCase y en un solo objeto
                display: 'block',           // Necesario para que el margen funcione
                margin: '0 auto'            // Para centrarla
            }} src={`${import.meta.env.BASE_URL}diagrams/tenedorRoadMapDiagram.png`}/>
            {/*base_url=public*/}
            <p>
                El equipo, formado por seis programadores y artistas, recibiría un presupuesto de 20.000€ euros al
                mes para trabajar en el proyecto. Se han tenido en cuenta los pagos a las diferentes plataformas para
                publicar el juego en ellas o adquerir los kits de desarrollador. De igual manera se ha realizado un
                pequeño estudio sobre la localización del videojuego, para presupuestar gastos en traducciones.
                El rango de precio general está en torno a los 0,06€-0,10€ por palabra. Consideramos que la
                traducción abarcará unas 9.000 palabras. Se establece un porcentaje del 25% para testing, lo que nos
                lleva a unos 1.350 € por idioma. Usaremos Lockpick para las traducicciones a inglés, portugués, alemán,
                chino, japonés, francés, italiano y ruso. En total se presupuestan 10.800€.
            </p>


            {/*base_url=public

            <Heading2 id="roadmap">Roadmap</Heading2>
            <p>
                Futuras expansiones asociadas a hitos económicos
            </p>
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
