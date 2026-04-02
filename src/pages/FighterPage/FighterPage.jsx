import { useParams } from "react-router-dom";
import {Heading1} from "../../modules/Heading/Heading.jsx";
import Move from "../../modules/Fighter/Move/Move.jsx";
import "./FighterPage.css"
import {fighters} from "../../data/fighter/./fighters.jsx";

export default function FighterPage() {
    const { id } = useParams();
    const fighter = fighters.find(f => f.id === id);

    if (!fighter) return <p>Luchador no encontrado.</p>;
    console.log(fighter.fullArt);
    return (
        <>
            <Heading1 if="fighter-name">{fighter.name}</Heading1>
            <div>{fighter.description}</div>
            <p>Arquetipo: {fighter.archetype.name}</p>
            <p>Facilidad de uso: {fighter.easyToUse}</p>
            <div className="moves-panel-list">
                {fighter.moveList.map((move, index) => (
                    <Move key={index} move={move} fighter={fighter} />
                ))}
            </div>
            {fighter.fullArtImg}
        </>
    );
}