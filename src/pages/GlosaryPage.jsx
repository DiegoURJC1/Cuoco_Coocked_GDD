import {Heading1, Heading2} from "../modules/Heading/Heading.jsx"
import {GlossaryTables} from "../modules/GlossaryTables/GlossaryTables.jsx";
import glossary, {GlossaryCategory} from "../routes/glossary.jsx";

export default function GlosaryPage() {
    return (
        <>
            <Heading1 id="glosary">Glosario de términos</Heading1>
            <GlossaryTables glossary={glossary} glossaryCategory={GlossaryCategory}/>
        </>
    );
}
