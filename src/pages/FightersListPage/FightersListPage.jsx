import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx";
import PLink from "../../modules/Link/PLink.jsx";
import {fighters} from "../../data/fighter/fighters.jsx";
import "./FightersListPage.css";
import AlertPanel from "../../modules/AlertPanel/AlertPanel.jsx";
import ArchetypesPanel from "../../modules/ArchetypesPanel/ArchetypesPanel.jsx";
import glossary, {getGlossaryLink} from "../../data/glossary/glossary.jsx";

export default function FightersListPage() {
    return (
        <div>
            <Heading1 id="fighters">Personajes</Heading1>
            <Heading2 id="principles">Principios de diseño de personajes</Heading2>
            <p>
                Cada personaje es una <b>modulación del sistema base</b>. El sistema de combate no cambia para ningún
                personaje lo que varía es:
            </p>
            <ul>
                <li>Qué ataques tienen acceso y con qué propiedades</li>
                <li>Qué aderezos pueden generar y cómo</li>
                <li>Cómo se mueve y qué oportunidades tiene para iniciar combos</li>
                <li>Qué playstyle privilegia su moveset</li>
            </ul>

            <br></br>
            <hr></hr>
            <Heading2 id="archetypes">Arquetipos</Heading2>
            <p>
                Los arquetipos de personaje definen en términos generales el <i>game plan</i> o forma de uso de un
                personaje.
            </p>
            <ArchetypesPanel/>
            <Heading2 id="leyend">Leyenda</Heading2>
            <p>
                Los personajes tienen una serie de movimientos añadidos, en caso de que no, obtienen movimientos por
                defecto. Estos movimientos y estadísticas de personaje generan los datos necesarios de balance de sus
                estadísticas. Un resumen de ellas se muestra en el diagrama en red en cada una de las páginas.
            </p>
            <p>
                Los movimientos de los personajes y sus tiempos se muestran con listas de frames:
            </p>
            <ul>
                <li>Verde: <PLink href={getGlossaryLink(glossary.startup)}>startup</PLink></li>
                <li>Rojo: <PLink href={getGlossaryLink(glossary.activeFrames)}>activo</PLink></li>
                <li>Azul: <PLink href={getGlossaryLink(glossary.recoveryFrames)}>recuperación</PLink></li>
                <li>Gris: inactivo</li>
            </ul>
            <p>
                También muestran sus distintas estadísticas como el <b>daño</b>, <b>posición de bloqueo</b> o si el
                movimiento deja al personaje en <PLink href={getGlossaryLink(glossary.plusFrames)}>plus</PLink> o <PLink
                href={getGlossaryLink(glossary.minusOnBlock)}>minus</PLink>.
            </p>
            <AlertPanel>Los valores exactos de frames son materia de balance y se definen en fase de prototipo. El GDD
                establece la estructura; los números emergen del playtesting.</AlertPanel>
            {/*Esta alerta es intencional y no debe quitarse*/}
            <br></br>
            <hr></hr>
            <br></br>
            <Heading2 id="fighter-list">Roster completo</Heading2>
            <div className="fighters-list">
                {fighters.map(f => (
                    <PLink key={f.id} href={`${f.id}`}>
                        <div
                            style={{
                                height: "200px",
                                width: "200px",
                                aspect: "auto",
                            }}
                        >
                            {f.portraitArt}
                        </div>
                        {f.name}
                    </PLink>

                ))}
            </div>
        </div>
    );
}