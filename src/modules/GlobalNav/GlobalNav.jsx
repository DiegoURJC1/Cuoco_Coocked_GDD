import PLink from "../Link/PLink.jsx";
import {routes} from "../../routes/routes.js";

export function GlobalNav() {
    return (
        <div className="web-side-panel side-panel">
            <ul>
                <li><PLink href="/">Home</PLink></li>
                <li><PLink href="/combat">Combate</PLink></li>
                <li><PLink href="/test/links">Test Links</PLink></li>
                <li><PLink href={routes.fighters.path}>Fighters</PLink></li>
                <li>Elem5</li>
                <li>Elem6</li>
            </ul>
        </div>
    );
}