import {Heading1, Heading2, Heading3} from "../modules/Heading/Heading.jsx";
import {Input} from "../dataTemplate/input/enums/Input.js";
import {InlineIcon} from "../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../dataTemplate/input/InputSequence.jsx";
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";
import {getMoveStateIcon, MoveState} from "../dataTemplate/fighters/moves/enums/MoveState.jsx";
import PLink from "../modules/Link/PLink.jsx";
import {routes} from "../routes/routes.js";

export default function MechanicsPage() {
    return (
        <>
            <Heading1 id="mechanics">Mecánicas y Sistemas</Heading1>
            <Heading2 id="core-loop">Core loop</Heading2>
            <p>
                <b>Cuoco Cooked</b> es un juego de lucha basado en rounds de 99 segundos, con una estructura básica "al
                mejor de 3", es decir, si uno de los dos contendientes gana dos rounds seguidos gana automáticamente el
                match. Si el primer round lo gana uno y el segundo lo gana el contrincante, se disputará un último round
                y saldrá ganador quien venza en este mismo. Para ganar un round hay dos vías:
            </p>
            <b>1.-</b> Bajar la vida del oponente hasta 0, que a partir de ahora llamaremos "COOCKED" a modo de "KO".
            <br></br>
            <b>2.-</b> Tener más vida que tu oponente al finalizar la cuenta atrás.
            <br></br>
            <div>
                La estructura interna de cada round sigue el siguiente esquema/diagrama de flujo:
                <AlertPanel>TODO: crear esquema/diagrama</AlertPanel>
                <br></br>
                INICIO DE ROUND <br></br>
                │ <br></br>
                ▼ <br></br>
                FASE NEUTRAL <br></br>
                (movimiento, control de espacio, lectura del rival) <br></br>
                │ <br></br>
                ├──► Ataque exitoso → presión / combo / aderezo aplicado <br></br>
                │ <br></br>
                ├──► Defensa exitosa (bloqueo/parry) → reseteo a neutral o contraataque <br></br>
                │ <br></br>
                └──► Error defensivo → daño / guardbreak / stun <br></br>
                │ <br></br>
                ▼ <br></br>
                CONDICIÓN DE VICTORIA <br></br>
                (vida del rival a cero) <br></br>
                │ <br></br>
                ▼ <br></br>
                FIN DE ROUND → siguiente round o fin de match <br></br>
            </div>

            <Heading2 id="fundamentals">Fundamentos de juegos de peleas</Heading2>
            <p>
                Los videojuegos de peleas se basan en dos aspectos básicos:
                <ul>
                    <li>Guessing (adivinar) de la misma forma que se hace en
                        piedra, papel o tijera.
                    </li>
                    <li>Principio de la animación: anticipación/acción/vuelta al estado base.</li>
                </ul>
                Estos dos sistemas rigen la inmensa mayoría de videojuegos de peleas tradicionales.
            </p>
            <p>
                Guessing funciona siempre que los sistemas de agresión y defensa tengan más de un estado
                y, cada acción agresiva o defensiva, no cubra todos los estados (de pie, agachado y por encima
                de la cabeza). O al menos que no lo haga sin consumir un recurso.
            </p>
            <p>
                La animación de los movimientos y acciones de los personajes determinan el balance
                del juego en gran medida. Todos los ataques suelen contar con tres estados:
            </p>
            <ul>
                <li>Anticipación: cuando el personaje sale del estado base (idle) hasta justo antes
                    de realizar la acción.
                </li>
                <li>Acción activa: cuando la acción que se está realizando está activa. Vease, en
                    un ataque, es cuando la <i>hitbox</i> está activa y puede golpear.
                </li>
                <li>Vuelta al idle: cuando el personaje deja de golpear y vuelve al estado base.</li>
            </ul>
            <p>
                Este ciclo no puede ser cancelado por el jugador que lo realiza de forma normal.
                Este sistema de animación se combina con la respuesta del rival. Tanto si recibe un
                golpe como si lo bloquea, ambos resultan en una animación.
            </p>
            <p>
                Aquí es donde se encuentra la base de las animaciones. Se suele buscar que golpear
                resulte en que el agresor termine su animación de ataque antes de que el rival termine
                la suya de ser golpeado para premiar con la oportunidad de golpear otra vez antes de
                que el rival pueda responder. Si el rival bloquea un ataque, en la mayoría de veces se
                busca premiar al defensor haciendo que su animación de bloqueo termine antes que la del
                rival.
            </p>

            <Heading2 id="movement">Movimiento</Heading2>
            <p>
                Todos los movimientos de palanca se realizan en base a la posición relativa del
                jugador y su rival. Cuando estos cambian sus posiciones relativas, los movimientos de
                palanca cambian de orientación.
            </p>
            <p>Siempre se asume que el jugador está a la izquierda y su rival a la derecha.</p>
            <Heading3 id="movement-basic">Movimientos básicos</Heading3>
            <ul>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.NEUTRAL]}/></InlineIcon>: Por defecto,
                    el jugador está de pie y no se defiende.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.RIGHT]}/></InlineIcon>: Andar adelante,
                    velocidad estándar
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.LEFT]}/></InlineIcon>: Andar atrás, velocidad
                    estándar
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.RIGHT, Input.RIGHT]}/></InlineIcon>/
                    <InlineIcon size={2}><InputSequence sequence={[Input.DASH]}/></InlineIcon>: Dash
                    adelante, invencibilidad parcial en startup. Si se mantiene la dirección el personaje corre.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.LEFT, Input.LEFT]}/></InlineIcon>/
                    <InlineIcon size={2}><InputSequence sequence={[Input.DASH]}/></InlineIcon>: Back dash,
                    invencibilidad parcial en startup. Si se mantiene la dirección el personaje corre.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.DOWN]}/></InlineIcon>: Agacharse, cambia
                    hurtbox, accede a ataques agachado.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.UP]}/></InlineIcon>: Saltar, arco neutral</li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.UP_RIGHT]}/></InlineIcon>: Saltar adelante,
                    salto diagonal ofensivo.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.UP_LEFT]}/></InlineIcon>: Saltar atrás, salto
                    diagonal defensivo / escape
                </li>
                <li> ↓→↑ : Salto bajo, salto más rápido, menor altura</li>
                {/* Diego: Tengo dudas sobre este input */}
                <li><InlineIcon size={2}><InputSequence sequence={[Input.D]}/></InlineIcon>: Ataque que siempre golpea a
                    un personaje de pie.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.RIGHT, Input.D]}/></InlineIcon>: Agarre que
                    lanza al rival hacia delante y le tira al suelo.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.LEFT, Input.D]}/></InlineIcon>: Agarre que
                    lanza al rival hacia atrás y le tira al suelo.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.DOWN, Input.D]}/></InlineIcon>: Ataque que
                    siempre golpea a
                    un personaje agachado.
                </li>
            </ul>
            <Heading3 id="movement-jump">Características del salto</Heading3>
            <ul>
                <li>Arco fijo una vez iniciado (sin control aéreo extendido)</li>
                <li>Ataques aéreos disponibles</li>
                <li>Vulnerable durante el ascenso a ataques antiaereos</li>
                <li>Los grabs terrestres no alcanzan a personajes en aire</li>
            </ul>

            <Heading3 id="dressing-restrictions">Restricciones por Aderezo</Heading3>
            <ul>
                <li><b>- Saciado (debuff) </b>: elimina la capacidad de dash y salto durante su duración</li>
            </ul>
            <Heading2 id="offensive-system">Sistema ofensivo</Heading2>
            <p>
                Todos los personajes tienen una serie de movimientos a su disposición. Todos ellos pueden ejecutarse
                de pie <InlineIcon size={2}>{getMoveStateIcon(MoveState.STAND)}</InlineIcon>,
                agachado <InlineIcon size={2}>{getMoveStateIcon(MoveState.CROUCH)}</InlineIcon> y
                en el aire <InlineIcon size={2}>{getMoveStateIcon(MoveState.AIR)}</InlineIcon>.
            </p>
            <p>
                Todos los personajes pueden atacar con los siguientes botones:
            </p>
            <ul>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.P]}/></InlineIcon>Punch: ataques rápidos y
                    débiles generalmente con puños.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.K]}/></InlineIcon>Kick: ataque un poco más
                    lentos que Punch pero algo más fuertes, generalmente con patadas.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.S]}/></InlineIcon>Slash: ataque básico.</li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.HS]}/></InlineIcon>Heavy Slash: ataque fuerte.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.R]}/></InlineIcon>Range: ataque a distancia.
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.D]}/></InlineIcon>Dust: ataque comodín
                    normalmente usado para tirar al rival al suelo, agarrarle o superar su defensa.
                </li>
            </ul>
            <p>
                Algunos personajes tienen a su disposición ataque mientras corren <InlineIcon
                size={2}>{getMoveStateIcon(MoveState.RUN)}</InlineIcon> o mientras están knoqueados en el
                suelo <InlineIcon size={2}>{getMoveStateIcon(MoveState.KNOCKED)}</InlineIcon>. Útiles para cortar
                distancias con el rival y para generar espacio y dar un respiro a aquél que esté en el suelo.
            </p>
            <Heading3 id={routes.mechanics.cooking.id}>Cooking</Heading3>
            <p>
                <b>Cooking</b> (llamado así intencionalmente por sus <PLink
                href={"https://www.diy.org/tools/gen-z-slang-dictionary/cooking"}>connotaciones modernas</PLink>) es un
                sistema de auto-combo. Este permite al jugador dar ataque consecutivos que conectan uno detrás con una
                combinación simple de botones sin necesidad de recordar y ejecutar la versión compleja. Puede ser
                activado o desactivado por el jugador en la selección de personaje y la
                elección será recordad y la por defecto la próxima vez.
            </p>
            <p>
                Un ejemplo podría ser <InlineIcon size={2}><InputSequence
                sequence={[Input.P, Input.K, Input.S, Input.HS]}/></InlineIcon> que manualmente sea
                <InlineIcon size={2}>
                    <InputSequence
                        sequence={[Input.P, Input.K, Input.S, Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.HS]}/>
                </InlineIcon> y otro  <InlineIcon size={2}><InputSequence
                sequence={[Input.P, Input.P, Input.P]}/></InlineIcon> que manualmente sea
                <InlineIcon size={2}>
                    <InputSequence
                        sequence={[Input.P, Input.K, Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.S]}/>
                </InlineIcon>.
            </p>
            <p>
                Aunque pueda ser útil, se espera que un jugador deje de usar este sistema con el tiempo en favor de
                tener más control sobre su ejecución. Para evitar que sea abusado por jugadores experimentados, las
                secuencias <i>cooking</i> pueden dejar pequeños huecos entre golpes que un rival puede aprovechar para
                hacer counter.
            </p>
            <p>
                Estas son algunas de las posibles secuencias:
            </p>
            <ul>
                <li>
                    <InlineIcon size={2}><InputSequence sequence={[Input.P, Input.P, Input.P]}/></InlineIcon>
                </li>
                <li>
                    <InlineIcon size={2}><InputSequence sequence={[Input.K, Input.K, Input.K]}/></InlineIcon>
                </li>
                <li>
                    <InlineIcon size={2}><InputSequence sequence={[Input.S, Input.S, Input.S]}/></InlineIcon>
                </li>
                <li>
                    <InlineIcon size={2}><InputSequence sequence={[Input.P, Input.K, Input.S, Input.HS]}/></InlineIcon>
                </li>
                <li>
                    <InlineIcon size={2}><InputSequence
                        sequence={[Input.P, Input.K, Input.S, Input.HS, Input.R]}/></InlineIcon>
                </li>
            </ul>
            <p>
                No todos los luchadores tendrán acceso a todos los auto-combos.
            </p>
            <Heading2 id="defensive-system">Sistema defensivo</Heading2>
            <p>

            </p>
            <Heading2 id="combos">Combos y cancelaciones</Heading2>
            <p>

            </p>
        </>
    )
        ;
}
