import PLink from "../Link/PLink.jsx";
import {routes} from "../../routes/routes.js";

export function GlobalNav() {
    return (
        <div className="web-side-panel side-panel">
            <ul>
                <li><PLink href="/">Home</PLink></li>
                <li><PLink href={routes.story.path}>Historia</PLink></li>
                <li><PLink href={routes.mechanics.path}>Mecánicas</PLink></li>
                <li><PLink href={routes.dynamics.path}>Dinámicas</PLink></li>
                <li><PLink href={routes.dressings.path}>Aderezos</PLink></li>
                <li><PLink href={routes.fighters.path}>Fighters</PLink></li>
                <li><PLink href={routes.stages.path}>Escenarios</PLink></li>
                <li><PLink href={routes.gameModes.path}>Modos de juego</PLink></li>
                <li><PLink href={routes.appearance.path}>Apariencia</PLink></li>
                <li><PLink href={routes.interfaces.path}>Interfaces</PLink></li>
                <li><PLink href={routes.business.path}>Modelo de negocio</PLink></li>
                <li><PLink href={routes.glossary.path}>Glosario</PLink></li>
                {/*<<li><PLink href="/combat">Combate</PLink></li>*/}
                {/*<<li><PLink href="/test/links">Test Links</PLink></li>*/}
            </ul>
        </div>
    );
}