import {fighters} from "../data/fighter/fighters.jsx";
import {Heading1} from "../modules/Heading/Heading.jsx";
import PLink from "../modules/Link/PLink.jsx";

export default function FightersListPage() {
    return (
        <div>
            <Heading1 id="fighters">Fighters</Heading1>
            <ul>
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
            </ul>
        </div>
    );
}