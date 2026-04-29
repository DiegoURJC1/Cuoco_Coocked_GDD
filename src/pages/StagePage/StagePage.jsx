import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx";
import {useParams} from "react-router-dom";
import {stages} from "../../data/stage/stages.jsx";

export default function StagePage() {
    const {id} = useParams();
    const stage = stages.find(f => f.id === id);

    if (!stage) return <p>Escenario no encontrado.</p>;
    return (
        <>
            <Heading1 id="stage-name">{stage.name}</Heading1>
            <Heading2 id="stage-description">Descripción</Heading2>
            <p>{stage.description}</p>
            <Heading2 id="stage-image">Imagen</Heading2>
            {stage.stageArt}
        </>
    );
}