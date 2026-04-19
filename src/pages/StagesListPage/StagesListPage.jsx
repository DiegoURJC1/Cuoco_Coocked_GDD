import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx";
import PLink from "../../modules/Link/PLink.jsx";
import "../FightersListPage/FightersListPage.css";
import {stages} from "../../data/stage/stages.jsx";

export default function StagesListPage() {
    return (
        <div>
            <Heading1 id="stages">Escenarios</Heading1>
            <Heading2 id="corner-mechanics">Mecánicas de esquina</Heading2>
            <p>

            </p>
            <Heading2 id="scenary-list">Escenarios disponibles</Heading2>
            <p>
                Similar a la lista de fighters ("La despensa", "Cocina en hora punta",
                "El mercado"...)
            </p>
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