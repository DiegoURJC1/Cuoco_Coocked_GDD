import {Heading3} from "../../Heading/Heading.jsx";
import MovePanel from "./MovePanel.jsx";

export default function MoveSection({title, moves, fighter}) {
    if (!moves?.length) return null;

    return (
        <>
            <Heading3 id={"moves-" + title}>{title}</Heading3>
            {moves.map((move, i) => (
                <MovePanel key={`${title}-${i}`} move={move} fighter={fighter}/>
            ))}
        </>
    );
}