import { Heading1, Heading2, Heading3 } from "../../modules/Heading/Heading.jsx";
import PLink from "../../modules/Link/PLink.jsx";
import { fighters } from "../../data/fighter/fighters.jsx";
import "./FightersListPage.css";
import AlertPanel from "../../modules/AlertPanel/AlertPanel.jsx";

export default function FightersListPage() {
    return (
        <div>
            <Heading1 id="fighters">Personajes</Heading1>
            <Heading2 id="principles">Principios de diseño de personajes</Heading2>
            <p>
                Cada personaje es una <b>modulación del sistema base</b>. El sistema de combate no cambia para ningún personaje lo que varía es:
                <ul>
                    <li>Qué ataques tienen acceso y con qué propiedades</li>
                    <li>Qué aderezos pueden generar y cómo</li>
                    <li>Cómo se mueve y qué oportunidades tiene para iniciar combos</li>
                    <li>Qué playstyle privilegia su moveset</li>
                </ul>
                <Heading3>Humanos en el roster</Heading3>
                El juego incluye pocos personajes humanos y con relación directa con la gastronomía (cocineros, críticos, etc.). Su presencia funciona como
                "excepción que confirma la regla": haciendo aún más absurdo el universo que les rodea.
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <Heading2 id="archetypes">Arquetipos</Heading2>
            <p>
                Los arquetipos del género fighting (shoto, rushdown, zoner, grappler, poke, puppet) se expresan temáticamente a través del tipo de alimento
                que representa cada personaje.
                <ul>
                    <li><b>Shoto:</b> equilibrado, un poco de todo, buenos en nada, malos en nada.</li>
                    <li><b>Grappler:</b> especialista en grabs, lentos, pesados, grandes, malos en movilidad.</li>
                    <li><b>Zoner:</b> especialista en ataques a distancia, mantener alejado y alejarse, malos en defensa.</li>
                    <li><b>Rushdown:</b> especialista en ataque, velocidad, combos consecutivos, glass cannon.</li>
                    <li><b>Poke/footsie:</b> especialista en distancia, mejor control, peor daño, buen mid-range.</li>
                    <li><b>Puppet:</b> crea minions, summons o elementos menores.</li>
                </ul>
            </p>
            <AlertPanel>Los valores exactos de frames son materia de balance y se definen en fase de prototipo. El GDD
                establece la estructura; los números emergen del playtesting.</AlertPanel>
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