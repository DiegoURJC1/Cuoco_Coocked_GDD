import {Heading1, Heading2, Heading3} from "../modules/Heading/Heading.jsx";
import PLink from "../modules/Link/PLink.jsx";
import {routes} from "../routes/routes.js";
import {RangeText} from "../modules/ColoredText/ColoredText.jsx";
import {InlineIcon} from "../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../dataTemplate/input/InputSequence.jsx";
import {Input} from "../dataTemplate/input/enums/Input.js";
import glossary, {getGlossaryLink} from "../routes/glossary.jsx";

export default function DynamicsPage() {
    return (<>
        <Heading1 id="dynamics">Dinámicas</Heading1>
        <p>
            Las mecánicas de juego sirven a una serie de dinámicas cuyo objetivo es premiar la agresividad, la
            gestión de la pseudo aleatoriedad de los <PLink href={routes.dressings.path}>aderezos</PLink> y la alta
            movilidad.
        </p>
        <Heading2 id="motion-inputs">Motion inputs</Heading2>
        <p>
            Los <PLink href={getGlossaryLink(glossary.motionInput)}>motion inputs</PLink> de los personajes para
            realizar ciertos movimientos son parte del balance del juego. Al contrario que los botones asignados a los
            distintos ataques, estas acciones no pueden cambiarse y quedan atadas a los movimientos de la palanca o la
            cruceta.
        </p>
        <Heading2 id={routes.dynamics.path.id}>Botón Range</Heading2>
        <p>
            Ciertos juegos de pelea limitan los ataques a distancia a ciertos personajes cuyo objetivo es castigar
            al rival que pretende crear distancia e incentivarle a acercarse.
        </p>
        <p>
            El objetivo de añadir una opción <RangeText/> <InlineIcon size={2}><InputSequence
            sequence={[Input.R]}/></InlineIcon>
            dar la capacidad a ambos jugadores de castigarse mutuamente si están demasiado separados por el <PLink
            href={getGlossaryLink(glossary.chipDamage)}>chip damage</PLink> generado por todos los ataque <RangeText/>.
        </p>
        <p>
            La interacción especial de <RangeText/> con <PLink
            href={routes.mechanics.guardbreak.path}>guard-break</PLink> que castiga gravemente a aquel que bloquea genera
            un gran incentivo y prisa en salir del estado de alto riesgo.
        </p>
        <Heading2 id="defense">Defensa</Heading2>
        <Heading3 id={routes.dynamics.breaker.id}>Breaker</Heading3>
        <p>
            El medidor Breaker debe usarse como un comodín
        </p>
    </>);
}