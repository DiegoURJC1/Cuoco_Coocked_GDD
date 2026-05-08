import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx";

export default function TeamPage() {
    return (
        <>
            <Heading1 id="team-page">Equipo de desarrollo</Heading1>
            <Heading2 id="members">Componentes</Heading2>
            <p>
                Seis alumnos de Fundamentos de la Jugabilidad son los programadores y artistas desarrolladores de
                Cuoco Cooked.

                Desarrollo web - Diego
                Diseño de interfaces web - Diego, Paula
                Diseño de personajes - Diego, Chus, Carla, Fernando
                Historia - Fernando
                Diseño de interfaces del juego - Carla, Paula
                Diseño y desarrollo de mecánicas -

            </p>
            <img style={{
                width: 'clamp(200px, 130%, 500px)',
                transformOrigin: 'center', // CamelCase y en un solo objeto
                display: 'block',           // Necesario para que el margen funcione
                margin: '0 auto'            // Para centrarla
            }} src={`${import.meta.env.BASE_URL}GUI/Equipo.png`}/>
        </>
    )
}