import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx";
import PLink from "../../modules/Link/PLink.jsx";
import {fighters} from "../../data/fighter/fighters.jsx";
import "./FightersListPage.css";
import AlertPanel from "../../modules/AlertPanel/AlertPanel.jsx";
import ArchetypesPanel from "../../modules/ArchetypesPanel/ArchetypesPanel.jsx";

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
                Los arquetipos del género fighting (shoto, rushdown, zoner, grappler, poke, puppet) se expresan
                temáticamente a través del tipo de alimento que representa cada personaje.
            </p>
            <ArchetypesPanel/>
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