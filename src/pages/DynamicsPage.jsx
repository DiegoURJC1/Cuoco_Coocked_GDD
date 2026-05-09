import {Heading1, Heading2, Heading3} from "../modules/Heading/Heading.jsx";
import PLink from "../modules/Link/PLink.jsx";
import {routes} from "../routes/routes.js";
import {RangeText} from "../modules/ColoredText/ColoredText.jsx";
import {InlineIcon} from "../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../dataTemplate/input/InputSequence.jsx";
import {Input} from "../dataTemplate/input/enums/Input.js";
import glossary, {getGlossaryLink} from "../data/glossary/glossary.jsx";

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
            la valoración de la riesgo/recompensa.
        </p>
        <p>
            El <b>bloqueo</b> en sus distintos estados se hace siempre con la palanca hacia atrás <InlineIcon
            size={2}><InputSequence sequence={[Input.LEFT]}/></InlineIcon> o en una de sus diagonales. Esta mecánica
            genera situaciones según los ataques con motion inputs que tenga disponible el personaje. Movimientos
            que comiencen con la palanca en posiciones que no sean las del bloqueo como <InlineIcon
            size={2}><InputSequence sequence={[Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT]}/></InlineIcon> u otras
            como <InlineIcon
            size={2}><InputSequence
            sequence={[Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT]}/></InlineIcon> intencionalmente
            generan instantes en los que el jugador debe dejar de bloquear para comenzar a realizar el
            movimiento. Otros como <InlineIcon
            size={2}><InputSequence
            sequence={[Input.LEFT, Input.RIGHT]}/></InlineIcon> o <InlineIcon
            size={2}><InputSequence
            sequence={[Input.LEFT, Input.DOWN_LEFT, Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT]}/></InlineIcon> son más
            seguros aposta al necesitar menos movimientos si se comienza desde una posición defensiva.
        </p>
        <p>
            El <b>riesgo/recompensa</b> resulta de la capacidad mecánica del jugador de realizar correctamente los
            movimientos que resultan ideales en cada situación teniendo en cuenta que pueda fallar el motion input.
            Aunque dos ataque puedan
            golpear de tal forma que protegen el espacio aéreo del jugador y la más compleja sea claramente mejor porque
            sea igual de rápida en su animación, haga más daño o cubra más espacio, un movimiento <InlineIcon
            size={2}><InputSequence sequence={[Input.DOWN, Input.HS]}/></InlineIcon> (usado generalmente para anti
            aéreos) no se puede fallar pero <InlineIcon
            size={2}><InputSequence
            sequence={[Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.HS]}/></InlineIcon> si.
        </p>
        <p>
            Además, todos los movimientos tienen valores que indican las ventajas <PLink
            href={getGlossaryLink(glossary.plusFrames)}>plus</PLink> o <PLink
            href={getGlossaryLink(glossary.minusOnBlock)}>minus</PLink>. Estas indican quién de los dos personajes será
            el primero en comenzar a realizar una acción.
        </p>

        <Heading3 id={routes.dynamics.path.id}>Botón Range</Heading3>
        <p>
            Ciertos juegos de pelea limitan los ataques a distancia a ciertos personajes cuyo objetivo es castigar
            al rival que pretende crear distancia e incentivarle a acercarse; aquí no, todos los personajes disponen de
            herramientas válidas si bien no todos se aprovechan de igual modo de las mismas.
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
            un gran incentivo y prisa en salir del estado de alto riesgo. Al mismo tiempo que se incrementa el riesgo
            por
            un mal uso del sistema defensivo o un uso abusivo del mismo, se fomenta un juego rápido beneficiando los
            reflejos con la incorporación del parry que no genera chip damage e incluso en su versión más perfecta
            genera
            un autoataque de retorno (sólo en el frame exacto).
        </p>
        <p>
            El jugador defensor debe decidir si arriesga Parry para evitar acumular stacks, sabiendo que si el rival
            mixupea con grab, queda completamente expuesto. La gestión de este riesgo es el núcleo de la tensión
            defensiva del juego.
        </p>
        <Heading3 id={routes.dynamics.breaker.id}>Breaker</Heading3>
        <p>
            El medidor Breaker debe usarse como un comodín, es una forma de “soft reset” de la partida cuando por alguna
            circunstancia has caído en una trampa de la que no puedas salir (secuencia pseudo infinita de daño
            recibido),
            fomentando que en todo momento haya un margen de esperanza para el jugador que va perdiendo.
        </p>
        <p>
            El tiempo de recarga debe ser lo suficientemente alto como para que prácticamente solo se pueda usar una vez
            por ronda de forma práctica. Si necesita 50 segundos de recarga, tiene que haberse usado de forma muy
            temprana para poder ser usada otra vez en la misma ronda.
        </p>
        <Heading3 id={routes.dynamics.dressing.id}>Aderezos</Heading3>
        <p>
            El sistema de aderezos genera por si mismo al menos dos dinámicas fundamentales en Cuoco Cooked:
        </p>
        <ul>
            <li>
                El entorno como generador natural de aderezos provoca una ventaja o desventaja competitiva en
                mantenerse dentro o fuera de una determinada zona a la vez que provoca la "limitación" subjetiva en
                determinados entornos de ciertas técnicas. Por ejemplo, en una de las estanterías del
                escenario <i>"despensa"</i> aparece un bote de glaseado, situarse en las proximidades o tratar de
                empujar al rival fuera de la zona de afección es una buena forma de aprovechar la situación.
                Y a la vez el rival tratará de no hacer ataques que activen el efecto salvo que esté seguro de que él
                mismo también se verá beneficiado.
            </li>
            <li>El propio funcionamiento del sistema (un único estado activo de corta duración) provoca también el
                uso y la rotación de los mismos.
                El uso intencional de una técnica sobre el entorno para descartar un aderezo esperando a que el próximo
                sea más beneficioso para ti que para el rival o adquirir un aderezo a propósito para eliminar la
                aplicación de otro que te resulte peor para una determinada situación son sólo algunos ejemplos de estas
                dinámicas.
            </li>
            <li>
                Elementos posicionales como estos pueden invitar a los jugadores a mantener una posición central en el
                escenario en lugar de acosar al jugador en los límites del escenario. Permitiendo más momentos de
                respiro y vuelta al <PLink href={getGlossaryLink(glossary.neutral)}>neutral</PLink>.
            </li>
        </ul>
    </>);
}