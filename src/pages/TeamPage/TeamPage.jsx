import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx";

export default function TeamPage() {
    return (
        <>
            <Heading1 id="team-page">Equipo de desarrollo</Heading1>
            <Heading2 id="members">Componentes</Heading2>
            <p>
                Seis alumnos de Fundamentos de la Jugabilidad son los programadores y artistas desarrolladores de
                Cuoco Cooked.

           </p>
                    <table>
    <tbody>
        <tr>
            <td><strong>Desarrollo web</strong></td>
            <td>Diego</td>
        </tr>
        <tr>
            <td><strong>Diseño de interfaces web</strong></td>
            <td>Diego, Paula</td>
        </tr>
        <tr>
            <td><strong>Diseño de personajes</strong></td>
            <td>Diego, Chus, Carla, Fernando</td>
        </tr>
        <tr>
            <td><strong>Diseño de escenarios y aderezos</strong></td>
            <td>Diego, Chus, Carla</td>
        </tr>
        <tr>
            <td><strong>Historia</strong></td>
            <td>Fernando</td>
        </tr>
        <tr>
            <td><strong>Diseño de interfaces del juego</strong></td>
            <td>Carla, Paula</td>
        </tr>
        <tr>
            <td><strong>Diseño y desarrollo de mecánicas</strong></td>
            <td>Chus</td>
        </tr>
        <tr>
            <td><strong>Música original</strong></td>
            <td>Carla</td>
        </tr>
        <tr>
            <td><strong>Tipografía original</strong></td>
            <td>Chus</td>
        </tr>
        <tr>
            <td><strong>Modelo de negocio</strong></td>
            <td>Fernando, Paula</td>
        </tr>
    </tbody>
</table>


            <img style={{
                width: 'clamp(200px, 130%, 500px)',
                transformOrigin: 'center', // CamelCase y en un solo objeto
                display: 'block',           // Necesario para que el margen funcione
                margin: '0 auto'            // Para centrarla
            }} src={`${import.meta.env.BASE_URL}GUI/Equipo.png`}/>
        </>
    )
}