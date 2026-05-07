import {Heading1, Heading2, Heading3} from "../modules/Heading/Heading.jsx";
import PLink from "../modules/Link/PLink.jsx";
import {routes} from "../routes/routes.js";
import {RangeText} from "../modules/ColoredText/ColoredText.jsx";
import {InlineIcon} from "../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../dataTemplate/input/InputSequence.jsx";
import {Input} from "../dataTemplate/input/enums/Input.js";
import glossary, {getGlossaryLink} from "../routes/glossary.jsx";

import RoundFlowDiagram from "../../public/diagrams/Round flow diagram.svg?react";

export default function DynamicsPage() {
    return (<>
        <Heading1 id="dynamics">Dinámicas</Heading1>
        <p>
            Las mecánicas de juego sirven a una serie de dinámicas cuyo objetivo es premiar la agresividad, la
            gestión de la pseudo aleatoriedad de los <PLink href={routes.dressings.path}>aderezos</PLink> y la alta
            movilidad.
        </p>
        <Heading2 id="match">Partida</Heading2>
        <p>
            La estructura interna de cada round sigue el siguiente esquema/diagrama de flujo para el jugador:
        </p>
        <div className="diagram">
            <RoundFlowDiagram/>
        </div>
        <Heading3 id="motion-inputs">Motion inputs</Heading3>
        <p>
            Los <PLink href={getGlossaryLink(glossary.motionInput)}>motion inputs</PLink> de los personajes para
            realizar ciertos movimientos son parte del balance del juego. Al contrario que los botones asignados a los
            distintos ataques, estas acciones no pueden cambiarse y quedan atadas a los movimientos de la palanca o la
            cruceta.
        </p>
        <p>
            Esto es vital para dos aspectos del juego, el <PLink href={routes.mechanics.block.id}>bloqueo</PLink> y
            la valoración de la recompensa riesgo.
        </p>
        <p>
            El <b>bloqueo</b> en sus distintos estados se hace siempre con la palanca hacia atrás <InlineIcon
            size={2}><InputSequence sequence={[Input.LEFT]}/></InlineIcon> o en una de sus diagonales. Esta mecánica
            genera situaciones según los ataques con motion inputs que tenga disponible el personaje. Movimientos
            que comiencen con la palanca en posiciones que no sean las del bloqueo como <InlineIcon
            size={2}><InputSequence sequence={[Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT]}/></InlineIcon> u otras
            como <InlineIcon
            size={2}><InputSequence
            sequence={[Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT]}/></InlineIcon> que
            intencionalmente generan instantes en los que el jugador debe dejar de bloquear para comenzar a realizar el
            movimiento. Otros como <InlineIcon
            size={2}><InputSequence
            sequence={[Input.LEFT, Input.RIGHT]}/></InlineIcon> o <InlineIcon
            size={2}><InputSequence
            sequence={[Input.LEFT, Input.DOWN_LEFT, Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT]}/></InlineIcon> son más
            seguros aposta al necesitar menos movimientos si se comienza desde una posición defensiva.
        </p>
        <p>
            El <b>riesgo/recompensa</b> resulta de la capacidad mecánica del jugador de realizar correctamente los
            movimientos que resultan ideales en cada situación sin fallar el motion input. Aunque dos ataque puedan
            golpear de tal forma que protegen el espacio aéreo del jugador y la más compleja sea claramente mejor porque
            sea igual de rápida en su animación, haga más daño o cubra más espacio, un movimiento <InlineIcon
            size={2}><InputSequence sequence={[Input.DOWN, Input.HS]}/></InlineIcon> no se puede fallar pero <InlineIcon
            size={2}><InputSequence
            sequence={[Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.HS]}/></InlineIcon> si.
        </p>

        <Heading3 id={routes.dynamics.path.id}>Botón Range</Heading3>
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
            href={routes.mechanics.guardbreak.path}>guard-break</PLink> que castiga gravemente a aquel que bloquea
            genera
            un gran incentivo y prisa en salir del estado de alto riesgo.
        </p>
        <Heading2 id="defense">Defensa</Heading2>
        <Heading3 id={routes.dynamics.breaker.id}>Breaker</Heading3>
        <p>
            El medidor Breaker debe usarse como un comodín
        </p>
    </>);
}