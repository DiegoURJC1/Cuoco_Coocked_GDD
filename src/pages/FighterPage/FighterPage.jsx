import {useParams} from "react-router-dom";
import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx";
import "./FighterPage.css";
import {fighters} from "../../data/fighter/fighters.jsx";
import MoveSection from "../../modules/Fighter/MovePanel/MoveSection.jsx"
import {FighterRadar} from "../../modules/RadarChart/FighterRadar.jsx";
import FighterInfobox from "../../modules/Fighter/FighterInfobox/FighterInfobox.jsx";

export default function FighterPage() {
    const {id} = useParams();
    const fighter = fighters.find(f => f.id === id);

    if (!fighter) return <p>Luchador no encontrado.</p>;
    const moveSet = fighter.moveSet;
    if (!moveSet) return <p>Sin movimientos definidos.</p>;

    // Criterio de orden establecido
    const UNIVERSAL_ORDER = [
        'neutral_p', 'neutral_k', 'neutral_s', 'neutral_hs', 'neutral_r', 'neutral_d',
        'down_p', 'down_k', 'down_s', 'down_hs', 'down_r', 'down_d',
        'air_p', 'air_k', 'air_s', 'air_hs', 'air_r', 'air_d'
    ];

    const orderedUniversal = UNIVERSAL_ORDER
        .map(key => moveSet.universal[key])
        .filter(Boolean);

    return (
        <div className="fighter-page">
            <FighterInfobox fighter={fighter} />
            <Heading1 id="fighter-name">{fighter.name}</Heading1>
            <Heading2 id="">Arte completo</Heading2>
            <div className="fighter-desc">{fighter.description}</div>
            <FighterRadar fighter={fighter} />
            <div className="fighter-proscons-table">
                <div className="fighter-proscons-column fighter-pros">
                    <div className="fighter-proscons-header">
                        ✔ Pros
                    </div>

                    <ul>
                        {fighter.prosCons.pros.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                </div>

                <div className="fighter-proscons-column fighter-cons">
                    <div className="fighter-proscons-header">
                        ✖ Cons
                    </div>

                    <ul>
                        {fighter.prosCons.cons.map((c, i) => (
                            <li key={i}>{c}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <Heading2 id="moves">Lista de Movimientos</Heading2>

            <div className="moves-panel-list">
                <MoveSection title="Universales" moves={orderedUniversal} fighter={fighter}/>
                <MoveSection title="Normales" moves={moveSet.normal} fighter={fighter}/>
                <MoveSection title="Especiales" moves={moveSet.special} fighter={fighter}/>
                <MoveSection title="Overdrives" moves={moveSet.overdrive} fighter={fighter}/>
            </div>

            <Heading2 id="full-art">Arte completo</Heading2>

            <div className="full-art-container">
                {fighter.fullArtImg}
            </div>
        </div>
    );
}