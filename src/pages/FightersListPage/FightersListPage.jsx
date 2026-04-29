import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx";
import PLink from "../../modules/Link/PLink.jsx";
import {fighters} from "../../data/fighter/fighters.jsx";
import "./FightersListPage.css";
import AlertPanel from "../../modules/AlertPanel/AlertPanel.jsx";

export default function FightersListPage() {
    return (
        <div>
            <Heading1 id="fighters">Personajes</Heading1>
            <Heading2 id="archetypes">Arquetipos</Heading2>
            <p>

            </p>
            <AlertPanel>Los valores exactos de frames son materia de balance y se definen en fase de prototipo. El GDD
                establece la estructura; los números emergen del playtesting.</AlertPanel>
            <Heading2 id="fighter-list">Roster completo</Heading2>
            <div className="fighters-list">
                {fighters.map(f => (
                    <PLink key={f.id} href={`/fighters/${f.id}`}>
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