import {useParams} from "react-router-dom";
import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx";
import MovePanel from "../../modules/Fighter/MovePanel/MovePanel.jsx";
import "./FighterPage.css";
import {fighters} from "../../data/fighter/fighters.jsx";
import Stars from "../../modules/Fighter/Star/Stars.jsx";
import MoveSection from "../../modules/Fighter/MovePanel/MoveSection.jsx"
import {InlineIcon} from "../../modules/InlineIcon/InlineIcon.jsx";

export default function FighterPage() {
    const {id} = useParams();
    const fighter = fighters.find(f => f.id === id);

    if (!fighter) return <p>Luchador no encontrado.</p>;

    const moveSet = fighter.moveSet;

    if (!moveSet) return <p>Sin movimientos definidos.</p>;

    const orderedUniversal = [
        moveSet.universal.neutral_p,
        moveSet.universal.neutral_k,
        moveSet.universal.neutral_s,
        moveSet.universal.neutral_hs,
        moveSet.universal.neutral_r,
        moveSet.universal.neutral_d,

        moveSet.universal.down_p,
        moveSet.universal.down_k,
        moveSet.universal.down_s,
        moveSet.universal.down_hs,
        moveSet.universal.down_r,
        moveSet.universal.down_d,

        moveSet.universal.air_p,
        moveSet.universal.air_k,
        moveSet.universal.air_s,
        moveSet.universal.air_hs,
        moveSet.universal.air_r,
        moveSet.universal.air_d,
    ].filter(Boolean);
    {
        orderedUniversal.map((move, i) => (
            <MovePanel key={`u-${i}`} move={move} fighter={fighter}/>
        ))
    }

    return (
        <>
            <Heading1 id="fighter-name">{fighter.name}</Heading1>

            <div>{fighter.description}</div>

            <p>Arquetipo: {fighter.archetype.name}</p>
            <div>Facilidad de uso: <InlineIcon size={2}><Stars stars={fighter.easyToUse}/></InlineIcon></div>
            <div>Origen:<br/>{fighter.narrativeOrigin}</div>

            <Heading2 id="moves">Movimientos</Heading2>

            <div className="moves-panel-list">

                <MoveSection title="Universales" moves={orderedUniversal} fighter={fighter}/>
                <MoveSection title="Normales" moves={moveSet.normal} fighter={fighter}/>
                <MoveSection title="Especiales" moves={moveSet.special} fighter={fighter}/>
                <MoveSection title="Overdrives" moves={moveSet.overdrive} fighter={fighter}/>

            </div>

            {fighter.fullArtImg}
        </>
    );
}