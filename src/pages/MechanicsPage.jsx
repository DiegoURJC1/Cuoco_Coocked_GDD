import {Heading1, Heading2, Heading3, Heading4} from "../modules/Heading/Heading.jsx";
import {Input} from "../dataTemplate/input/enums/Input.js";
import {InlineIcon} from "../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../dataTemplate/input/InputSequence.jsx";
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";
import {getMoveStateIcon, MoveState} from "../dataTemplate/fighters/moves/enums/MoveState.jsx";
import PLink from "../modules/Link/PLink.jsx";
import {routes} from "../routes/routes.js";
import ControllerInputs from "../../public/diagrams/Controller Inputs.svg?react";
import InputStrengthDiagram from "../../public/diagrams/Input strength.svg?react";
import GeneralCombatDiagram from "../../public/diagrams/General combat diagram.svg?react";
import {BlockText, GrabText, MeleeText, RangeText} from "../modules/ColoredText/ColoredText.jsx";
import glossary, {getGlossaryLink} from "../data/glossary/glossary.jsx";
import {InputIcon} from "../dataTemplate/input/InputIcon.jsx";

export default function MechanicsPage() {
    return (
        <>
            <Heading1 id="mechanics">Mecánicas y Sistemas</Heading1>
            <Heading2 id="core-loop">Core loop</Heading2>
            <p>
                <b>Cuoco Cooked</b> es un juego de lucha basado en rondas de 99 segundos, con una estructura básica "al
                mejor de 3", es decir, si uno de los dos contendientes gana dos rondas gana la partida.
                Para ganar una ronda hay dos vías:
            </p>
            <ol>
                <li>
                    Bajar la vida del oponente hasta 0, que a partir de ahora llamaremos <PLink
                    href="https://dictionary.cambridge.org/dictionary/english/cooked#:~:text=in%20serious%20trouble%20and%20unlikely%20to%20be%20able%20to%20return%20to%20a%20successful%20or%20strong%20position%3A">
                    <i>"COOCKED"</i></PLink> a modo de <i>"KO"</i>.
                </li>
                <li>
                    Tener más porcentaje de vida que el oponente al finalizar la ronda.
                </li>
            </ol>
            <p>
                Se plantea la posibilidad de que la vida represente algún aspecto del universo temático:
            </p>
            <ol type="a">
                <li>La cantidad de comida, por tanto conforme baja vida el luchador está siendo consumido/comido.</li>
                <li>Durabilidad, por el cual conforme baja la vida se estaría deteriorando, pasando de caducidad.</li>
            </ol>

            <Heading2 id="resources">Recursos</Heading2>
            <p>
                Todos los personajes tienen las siguientes barras de recursos.
            </p>
            <ul>
                <li><b>Salud</b>: indica la cantidad de salud del personaje.</li>
                <li><b>Breaker</b>: usable mientras el jugador es golpeado para quitarselo de encima cuando está
                    completa.
                </li>
                <li><b>Guard-Break</b>: se rellena al bloquear ataques y deja en <PLink
                    href={getGlossaryLink(glossary.stunLock)}>stun lock</PLink> cuando se llena.
                </li>
                <li><b>Overdrive</b>: barra que se rellena al golpear o bloquear que permite hacer los ataques más
                    fuertes.
                </li>
            </ul>

            <br/>
            <hr/>
            <Heading2 id="fundamentals">Fundamentos de juegos de peleas</Heading2>
            <p>
                Los juegos de pelea clásicos (2D y 2.5D) no son simples intercambios de golpes. Son sistemas complejos
                de <b>gestión de riesgos</b> y <b>anatomía de la animación</b>. Se rigen
                principalmente por dos pilares: la interacción tipo "Piedra, Papel o Tijera" y los principios de la
                animación.
            </p>
            <p>
                Cada movimiento en un juego como <i>Street Fighter</i> se divide en tres fases críticas. Entender esto
                es la diferencia entre "apretar botones" y jugar con estrategia.
            </p>
            <ul>
                <li>Startup: anticipación.</li>
                <li>Active: instantes en los que la acción se aplica.</li>
                <li>Recovery: vuelta a un estado neutral.</li>
            </ul>
            <p>
                Este pilar define cuando y cuanto tiempo un jugador se le puede hacer <PLink
                href={getGlossaryLink(glossary.punish)}>punish</PLink> y por cuanto tiempo por su <PLink
                href={getGlossaryLink(glossary.hitstun)}>hit stun</PLink>.
            </p>
            <p>
                Aquí es donde se encuentra la base de las animaciones. Se suele buscar que golpear
                resulte en que el agresor termine su animación de ataque antes de que el rival termine
                la suya de ser golpeado para premiar con la oportunidad de golpear otra vez antes de
                que el rival pueda responder por el <PLink href={getGlossaryLink(glossary.hitstun)}>hit stun</PLink>.
                Si el rival bloquea un ataque, en la mayoría de veces se busca premiar al defensor haciendo que su
                <PLink href={getGlossaryLink(glossary.blockstun)}>block stun</PLink> termine antes que la del rival.
            </p>
            <br/>
            <p>
                El <b>triángulo</b> de "piedra, papel o tijera" que se crea por las acciones
                de <MeleeText/>, <GrabText/> y <BlockText/> es un sistema intencionalmente imperfecto en el que ninguna
                opción es claramente superior a todas las demás.
            </p>
            <p>
                Este triángulo se apoya en el sistema de altura en el que los golpes pueden golpear de frente, por
                abajo u <PLink href={getGlossaryLink(glossary.overhead)}>overhead</PLink>. Los bloqueos tienen dos
                estados, agachados que cubren de golpes por abajo y de pie que cubren los de frente y los overhead.
            </p>
            <br/>
            <hr></hr>

            <Heading2 id={routes.mechanics.inputDiagram.id}>Input</Heading2>

            <p>
                Todos los movimientos de palanca se realizan en base a la posición relativa del
                jugador y su rival. Cuando estos cambian sus posiciones relativas, los movimientos de
                palanca cambian de orientación. Los que se hacían a la derecha, se harán a la izquierda.
            </p>
            <p>Siempre se asume que el jugador está a la izquierda y su rival a la derecha.</p>
            <Heading3 id="input">Controles</Heading3>
            <p>
                Los controles del juego tienen la siguiente distribución en un mando de juego convencional.
            </p>
            <div className="diagram">
                <ControllerInputs style={{width: 'clamp(200px, 80%, 100%)'}}/>
            </div>
            <Heading3 id="movement-basic">Movimientos básicos</Heading3>
            <table>
                <thead>
                <tr>
                    <th>Input</th>
                    <th>Descripción</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.NEUTRAL]}/></InlineIcon></td>
                    <td>Por defecto, el jugador está de pie y no se defiende.</td>
                </tr>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.RIGHT]}/></InlineIcon></td>
                    <td>Andar adelante, velocidad estándar.</td>
                </tr>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.LEFT]}/></InlineIcon></td>
                    <td>Andar atrás, velocidad estándar.</td>
                </tr>
                <tr>
                    <td>
                        <InlineIcon size={2}><InputSequence sequence={[Input.RIGHT, Input.RIGHT]}/></InlineIcon> /
                        <InlineIcon size={2}><InputSequence sequence={[Input.DASH]}/></InlineIcon>
                    </td>
                    <td>Dash adelante, invencibilidad parcial en startup. Si se mantiene la dirección el personaje
                        corre.
                    </td>
                </tr>
                <tr>
                    <td>
                        <InlineIcon size={2}><InputSequence sequence={[Input.LEFT, Input.LEFT]}/></InlineIcon> /
                        <InlineIcon size={2}><InputSequence sequence={[Input.DASH]}/></InlineIcon>
                    </td>
                    <td>Back dash, invencibilidad parcial en startup. Si se mantiene la dirección el personaje corre.
                    </td>
                </tr>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.DOWN]}/></InlineIcon></td>
                    <td>Agacharse, cambia hurtbox, accede a ataques agachado.</td>
                </tr>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.UP]}/></InlineIcon></td>
                    <td>Saltar, arco neutral.</td>
                </tr>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.UP_RIGHT]}/></InlineIcon></td>
                    <td>Saltar adelante, salto diagonal ofensivo.</td>
                </tr>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.UP_LEFT]}/></InlineIcon></td>
                    <td>Saltar atrás, salto diagonal defensivo / escape.</td>
                </tr>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.D]}/></InlineIcon></td>
                    <td>Ataque que siempre golpea a un personaje de pie.</td>
                </tr>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.RIGHT, Input.D]}/></InlineIcon></td>
                    <td>Agarre que lanza al rival hacia delante y le tira al suelo.</td>
                </tr>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.LEFT, Input.D]}/></InlineIcon></td>
                    <td>Agarre que lanza al rival hacia atrás y le tira al suelo.</td>
                </tr>
                <tr>
                    <td><InlineIcon size={2}><InputSequence sequence={[Input.DOWN, Input.D]}/></InlineIcon></td>
                    <td>Ataque que siempre golpea a un personaje agachado.</td>
                </tr>
                </tbody>
            </table>
            <Heading3 id="movement-jump">Características del salto</Heading3>
            <ul>
                <li>Arco fijo una vez iniciado, sin control aéreo extendido.</li>
                <li>Ataques aéreos disponibles.</li>
                <li>Los grabs terrestres solo alcanzan a personajes en aire si toca su <PLink
                    href={getGlossaryLink(glossary.hitbox)}>hitbox</PLink> principal.
                </li>
                <li>Se puede bloquear en el aire.</li>
                <li>Se puede agarrar en el aire.</li>
            </ul>
            <Heading3 id="dressing-restrictions">Restricciones por Aderezo</Heading3>
            <ul>
                <li><b>Saciado (debuff)</b>: elimina la capacidad de dash y salto durante su duración</li>
            </ul>
            <br/>
            <hr></hr>
            <br/>
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
            <table>
                <thead>
                <tr>
                    <th>Input</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <InlineIcon size={2}>
                            <InputSequence sequence={[Input.P]}/>
                        </InlineIcon>
                    </td>
                    <td>Punch</td>
                    <td>Ataques rápidos y débiles, generalmente con puños.</td>
                </tr>
                <tr>
                    <td>
                        <InlineIcon size={2}>
                            <InputSequence sequence={[Input.K]}/>
                        </InlineIcon>
                    </td>
                    <td>Kick</td>
                    <td>Ataques un poco más lentos que Punch pero algo más fuertes, con patadas.</td>
                </tr>
                <tr>
                    <td>
                        <InlineIcon size={2}>
                            <InputSequence sequence={[Input.S]}/>
                        </InlineIcon>
                    </td>
                    <td>Slash</td>
                    <td>Ataque básico.</td>
                </tr>
                <tr>
                    <td>
                        <InlineIcon size={2}>
                            <InputSequence sequence={[Input.HS]}/>
                        </InlineIcon>
                    </td>
                    <td>Heavy Slash</td>
                    <td>Ataque fuerte.</td>
                </tr>
                <tr>
                    <td>
                        <InlineIcon size={2}>
                            <InputSequence sequence={[Input.R]}/>
                        </InlineIcon>
                    </td>
                    <td>Range</td>
                    <td>Ataque a distancia.</td>
                </tr>
                <tr>
                    <td>
                        <InlineIcon size={2}>
                            <InputSequence sequence={[Input.D]}/>
                        </InlineIcon>
                    </td>
                    <td>Dust</td>
                    <td>
                        Ataque comodín normalmente usado para tirar al rival al suelo, agarrarle o superar su defensa.
                    </td>
                </tr>
                <tr>
                    <td>
                        <InlineIcon size={2}>
                            <InputSequence sequence={[Input.DASH]}/>
                        </InlineIcon>
                    </td>
                    <td>Dash</td>
                    <td>
                        Atajo de{" "}
                        <InlineIcon size={2}>
                            <InputSequence sequence={[Input.RIGHT, Input.RIGHT]}/>
                        </InlineIcon>{" "}
                        para hacer dashes de forma más rápida.
                    </td>
                </tr>
                <tr>
                    <td>
                        <InlineIcon size={2}>
                            <InputSequence sequence={[Input.TAUNT]}/>
                        </InlineIcon>
                    </td>
                    <td>Taunt</td>
                    <td>
                        Animación especial del personaje. Puede cancelarse con cualquier otro botón tras 2 segundos.
                    </td>
                </tr>
                </tbody>
            </table>
            <div id={routes.mechanics.inputStrengthDiagram.id} className="diagram">
                <img style={{width: 'clamp(200px, 50%, 500px)'}} src={`${import.meta.env.BASE_URL}diagrams/Input%20strength.svg`}/>
            </div>

            <p>
                Algunos personajes tienen a su disposición ataque mientras corren <InlineIcon
                size={2}>{getMoveStateIcon(MoveState.RUN)}</InlineIcon> o mientras están knoqueados en el
                suelo <InlineIcon size={2}>{getMoveStateIcon(MoveState.KNOCKED)}</InlineIcon>. Útiles para cortar
                distancias con el rival y para generar espacio y dar un respiro a aquél que esté en el suelo.
            </p>

            <Heading3 id="macro-game">Marco general</Heading3>
            <p>

                El sistema ofensivo se estructura en tres tipos de ataque con propiedades, alcances y funciones
                claramente diferenciadas. Esta división no es solo mecánica, tiene coherencia directa con la identidad
                temática de cada personaje.
            </p>
            <br/>
            <div className="diagram">
                <GeneralCombatDiagram style={{width: 'clamp(200px, 50%, 100%)'}}/>
            </div>

            <p>
                Estos ataques siguen el patrón de diseño de piedra/papel/tijeras ligeramente asimétrico.
                Siendo <BlockText/> la acción que más veces gana pero la que puede vencerle es la menos exitosa en
                general, <GrabText/>.
            </p>
            <ul>
                <li><MeleeText/> vence a <GrabText/>.</li>
                <li><RangeText/> domina a <MeleeText/> si la distancia hace que no pueda ser alcanzado y viceversa.</li>
                <li><RangeText/> vence a <GrabText/>.</li>
                <li><BlockText/> vence a todos menos a <GrabText/>.</li>
            </ul>
            <Heading3 id="melee">Melee (Cuerpo a cuerpo)</Heading3>
            <p>
                Son aquellos ataques de contacto directo con rango corto, daño directo y alta frecuencia de uso.
            </p>
            <p>
                Tiene las siguientes propiedades:
            </p>
            <ul>
                <li>Rango: corto (requiere proximidad al rival)</li>
                <li>Se cancela en especiales y supers.</li>
                <li>Puede ejecutarse en standing, crouch y aire.</li>
                <li>Es el tipo de ataque que el bloqueo neutraliza completamente.</li>
            </ul>
            <p><b>
                Ejemplo temático — Boloñesa
            </b></p>
            <p>
                Cada ataque melee lanza visualmente manchas de salsa. Si ejecuta una consecución de 3 o más ataques
                melee consecutivos completos, aplica el aderezo correspondiente de forma automática. La generación del
                aderezo está marcada visualmente en la animación (la salsa acumula presencia en pantalla antes de
                aplicarse y tras aplicarse aparece un pequeño icono bajo la barra de vida).
            </p>
            <Heading3 id="range">Range (Distancia)</Heading3>
            <p>
                Son aquellos ataques de proyectil o alcance extendido que sirven para control de espacio, zoning,
                presión a distancia. Son el tipo de ataque contra el que el Parry es efectivo y el Bloqueo genera
                <PLink href={getGlossaryLink(glossary.chipDamage)}>chip damage</PLink>.
            </p>
            <p><i>Leer sobre sus <PLink href={routes.dynamics.range.path}>dinámicas</PLink></i>.</p>
            <p>
                Tiene las siguientes propiedades:
            </p>
            <ul>
                <li>Rango: medio para los ataques de extensión y largo para los proyectiles generalmente.</li>
                <li>Daño: variable (menor que <InlineIcon size={2}><InputSequence sequence={[Input.HS]}/></InlineIcon>,
                    pero acumula <PLink href={getGlossaryLink(glossary.chipDamage)}>chip damage</PLink> al bloquear)
                </li>
                <li>Puede activar elementos de entorno (ver sección 9.3)</li>
                <AlertPanel>TODO: importante enlazar con la parte donde se expliquen aderezos en entorno, quitar
                    (ver sección 9.3)</AlertPanel>
                <li>Puede ser neutralizado con <PLink href={getGlossaryLink(glossary.parry)}>Parry</PLink>.
                </li>
                <li>Bloquear un ataque de distancia genera chip damage y acumula stacks de guardbreak.</li>
            </ul>
            <p>
                Debido a la naturaleza de la mayoría de los luchadores se diferencian dos tipos distintos de ataques
                a distancia:
            </p>
            <ul>
                <li>Proyectil: Sale del personaje y viaja hasta el rival.</li>
                <li>Extensión: El personaje extiende parte de su cuerpo a mayor alcance y por tanto su <PLink
                    href={getGlossaryLink(glossary.hurtbox)}>hurtbox</PLink> se extiende también.
                </li>
            </ul>
            <p><b>Ejemplo temático — El Chef</b></p>
            <p>
                Ataque de distancia estándar: estocada con el tenedor gigante (extensión). Input especial (media luna +
                botón distancia): saca un bote de salsa picante y lanza un chorro (proyectil). Ambos son ataques de
                distancia, ambos son vulnerables al Parry, pero tienen propiedades diferentes (velocidad, hitbox,
                efectos
                secundarios).
            </p>
            <Heading3 id="grabs">Grabs (Agarres)</Heading3>
            <p>
                Ataques de agarre que ignoran completamente el sistema defensivo del rival. Son la herramienta perfecta
                si el rival es
                excesivamente defensivo o reactivo. Requieren proximidad y tienen startup visible.
            </p>
            <p><b>Propiedades generales</b></p>
            <ul>
                <li>Rango: muy corto (más que melee estándar, pero requieren contacto).</li>
                <li>El Bloqueo no los detiene.</li>
                <li>Los <MeleeText/> tienen prioridad.</li>
                <li>Un <GrabText/> en el momento oportuno cancela el del rival y hace que ambos jugadores retrocedan
                    ligeramente.
                </li>
                <li>Generan situaciones de <PLink href={getGlossaryLink(glossary.okizeme)}>okizeme</PLink> favorables
                    tras el <PLink href={getGlossaryLink(glossary.knockDown)}>knock down</PLink>.
                </li>
            </ul>
            <p><b>Tipos de agarres</b></p>
            <ul>
                <li>Grab estándar: Agarre directo con daño y knockdown</li>
                <li>Command grab: Agarre que resulta de un <PLink href={getGlossaryLink(glossary.motionInput)}>motion
                    Input</PLink> de un personaje particular. No todos tienen uno.
                </li>
                <li>Grab aéreo: Agarre similar al estándar, pero con el jugador y el rival en el aire.</li>
            </ul>

            <p><b>Ejemplo temático — Boloñesa</b></p>
            <p>
                El grab especial <InlineIcon size={2}><InputSequence
                sequence={[Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.HS]}/></InlineIcon> inicia
                una llave donde los fideos envuelven al rival. Animación larga, altamente legible, daño alto y posición
                post-grab favorable.
            </p>
            <Heading3 id="motion-inputs">Motion inputs</Heading3>
            <p>
                Los <PLink href={getGlossaryLink(glossary.motionInput)}>motion inputs</PLink> son combinaciones de
                botones de ataque y movimientos de palanca que resultan en ataques específicos del personaje.
            </p>
            <p><b>Tipos de ataque</b></p>
            <table>
                <thead>
                <tr>
                    <th>Tipo de ataque</th>
                    <th>Requisito</th>
                    <th>Recurso</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Universal</td>
                    <td>Movimientos a los que todos los personajes tienen acceso. Estos se hacen solo con los botones de
                        ataque y por tanto no son <i>motion inputs</i>.
                    </td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Normal</td>
                    <td>Ataques acompañados de una dirección de palanca. Los ataques agachados
                        <InlineIcon size={2}>{getMoveStateIcon(MoveState.CROUCH)}</InlineIcon> no entran en esta
                        categoría.
                    </td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Super</td>
                    <td>Ataques acompañados de un movimiento de palanca sencillo como cuarto de círculo
                        <InlineIcon size={2}><InputIcon
                            inputs={[Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT]}/></InlineIcon>, en Z
                        <InlineIcon size={2}><InputIcon
                            inputs={[Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT]}/></InlineIcon>, o medio círculo
                        <InlineIcon size={2}><InputIcon
                            inputs={[Input.LEFT, Input.DOWN_LEFT, Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT]}/></InlineIcon>.
                    </td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Overdrive</td>
                    <td>Ataques acompañados de un movimiento de palanca complejo.</td>
                    <td>Barra Overdrive</td>
                </tr>
                </tbody>
            </table>
            <br></br>
            <hr></hr>
            <Heading2 id="defensive-system">Sistema defensivo</Heading2>
            <Heading3 id="macro-game-defense">Marco general</Heading3>
            <table>
                <thead>
                <tr>
                    <th>Estado</th>
                    <th>Efecto contra <MeleeText/></th>
                    <th>Efecto contra <RangeText/></th>
                    <th>Efecto contra <GrabText/></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Bloqueo</td>
                    <td>Neutralización total</td>
                    <td><PLink href={getGlossaryLink(glossary.chipDamage)}>Chip damage</PLink> y acumula stacks de
                        <PLink href={routes.mechanics.guardbreak.path}>guard-break</PLink>
                    </td>
                    <td>No lo bloquea</td>
                </tr>
                <tr>
                    <td>Parry</td>
                    <td>Deja en <PLink href={getGlossaryLink(glossary.plusFrames)}>ventaja de frames</PLink>.</td>
                    <td>Neutralización total y auto-counter en el frame exacto</td>
                    <td>No lo bloquea</td>
                </tr>
                <tr>
                    <td>Sin defensa</td>
                    <td>Daño completo</td>
                    <td>Daño completo</td>
                    <td>No lo bloquea</td>
                </tr>
                </tbody>
            </table>
            <Heading3 id={routes.mechanics.block.id}>Bloqueo</Heading3>
            <ul>
                <li>
                    Mantener atrás <InlineIcon size={2}><InputSequence sequence={[Input.LEFT]}/></InlineIcon> respecto
                    al rival en el suelo para proteger de ataques <PLink
                    href={getGlossaryLink(glossary.overhead)}>overhead</PLink> y ataques medios.
                </li>
                <li>
                    Mantener atrás <InlineIcon size={2}><InputSequence
                    sequence={[Input.DOWN_LEFT]}/></InlineIcon> respecto
                    al rival en el suelo para proteger de ataques bajos.
                </li>
                <li>
                    Mantener atrás <InlineIcon size={2}><InputSequence
                    sequence={[Input.UP_LEFT]}/></InlineIcon> respecto
                    al rival en el aire para proteger de todos los ataques.
                </li>
            </ul>
            <p><b>Contra <MeleeText/></b></p>
            <ul>
                <li>Neutralización total del daño</li>
                <li>El personaje entra en <PLink href={getGlossaryLink(glossary.blockstun)}>block stun</PLink> durante
                    X frames
                </li>
                <li>No genera stacks de <PLink href={routes.mechanics.guardbreak.path}>guard-break</PLink></li>
            </ul>
            <p><b>Contra <RangeText/></b></p>
            <ul>
                <li>El personaje recibe chip damage</li>
                <li>Rellena el medidor <PLink
                    href={routes.mechanics.guardbreak.path}>guard-break</PLink> en un 30%.
                </li>
                <li>Los stacks se resetean si el rival deja de presionar con ataques de distancia
                    durante 2 segundos o el defensor realizar con exito un Parry.
                </li>
            </ul>
            <Heading3 id={routes.mechanics.breaker.id}>Breaker</Heading3>
            <p>
                El medidor <b>Breaker</b> se utiliza para cancelar una cadena de combos del rival. Puede activarse en
                cualquier momento incluso durante <PLink href={getGlossaryLink(glossary.hitstun)}>hit stun</PLink> pero
                no durante <PLink href={routes.mechanics.guardbreak.path}>guard-break</PLink>. Al activarse el jugador
                se vuelve vulnerable mientras realiza una animación y vuelve a un estado de pie y empuja lejos al rival
                para dejarlo en un estado <PLink href={getGlossaryLink(glossary.neutral)}>neutral</PLink>.
            </p>
            <p>
                Comienza completo al comienzo de una partida y se rellena con el tiempo tras ser usado. El tiempo para
                rellenarse es 50 segundos. No se reinicia entre rondas.
            </p>
            <p>
                Se activa pulsando dos botones de ataque y DUST <InlineIcon
                size={2}><InputSequence sequence={[Input.P]}/></InlineIcon>/
                <InlineIcon size={2}><InputSequence sequence={[Input.K]}/></InlineIcon>/
                <InlineIcon size={2}><InputSequence sequence={[Input.S]}/></InlineIcon>/
                <InlineIcon size={2}><InputSequence sequence={[Input.HS]}/></InlineIcon>+
                <InlineIcon size={2}><InputSequence sequence={[Input.D]}/></InlineIcon>.
            </p>
            <p><i>Leer sobre sus <PLink href={routes.dynamics.breaker.path}>dinámicas</PLink></i>.</p>
            <Heading3 id="parry">Parry</Heading3>
            <p>
                El Parry es una acción activa de alta habilidad en el que un ataque queda completamente neutralizado si
                se mueve la palanca hacia el rival <InlineIcon size={2}><InputSequence
                sequence={[Input.RIGHT]}/></InlineIcon> en un margen de hasta 4 frames antes de que conecte el golpe
                rival.
            </p>
            <p>
                Si el jugador va a recibir un golpe bajo o en el aire, para hacer parry la palanca se debe mover hacia
                abajo <InlineIcon size={2}><InputSequence sequence={[Input.DOWN]}/></InlineIcon> con el mismo margen de
                frames de activación.
            </p>
            <Heading4 id="design-notes">Notas de diseño</Heading4>
            <ul>
                <li>El auto-counter del parry perfecto es un momento de alta recompensa, visualmente
                    marcado.
                </li>
                <li>El riesgo de intentar parry contra un rival que realiza <PLink
                    href={getGlossaryLink(glossary.mixUp)}>mix ups</PLink> es que la dirección de palanca usada en el
                    parry no coincida con la del ataque.
                </li>
            </ul>
            <Heading3 id={routes.mechanics.guardbreak.id}>Guard-break</Heading3>
            <p>
                Estado especial activado por acumulación de 3 bloqueos consecutivos de ataques <RangeText/> o por
                bloquear una gran cantidad de ataques <MeleeText/>.
                Este estado funciona como penalización por un uso prolongado de una defensa incorrecta o excesiva.
            </p>
            <p><b>Propiedades</b></p>
            <ul>
                <li>El medidor guard-break baja poco a poco con el tiempo si se bloquea y más rapido si no.</li>
                <li>Durante el estado: el personaje queda en <PLink href={getGlossaryLink(glossary.stunLock)}>stun
                    lock</PLink> y queda a merced del rival.
                </li>
                <li>Visualmente marcado de forma clara (animación de "guardia rota" + efecto visual en
                    el personaje y elementos particulares a cada personaje sobre su cabeza como estrellas o patitos de
                    goma).
                </li>
                <li>
                    Es el escenario de mayor peligro del sistema defensivo: el rival tiene una ventana
                    garantizada de presión sin respuesta posible
                </li>
                <li>
                    Tras llenarse y entrar en stun lock, se vacia y se vuelve a un estado normal tras unos instantes o
                    tras ser golpeado.
                </li>
            </ul>
            <br/>
            <hr></hr>
            <Heading2 id="combos">Combos y cancelaciones</Heading2>
            <Heading3 id="cancelTree">Árbol de cancelaciones</Heading3>
            <p>
                Las cancelaciones son la base de la generación de combos. Un movimiento puede cancelarse en otro si
                el árbol lo permite o el movimiento en particular está diseñado para cancelar en otro de forma natural,
                interrumpiendo su <PLink href={getGlossaryLink(glossary.recoveryFrames)}>animación de
                recovery</PLink> para encadenar el siguiente ataque.
            </p>
            <AlertPanel>TODO: esquema/diagrama </AlertPanel>
            <pre>
                UNIVERSAL<br/>
                │<br/>
                └──► NORMAL<br/>
                │<br/>
                └──► SPECIAL<br/>
                │<br/>
                └──► OVERDRIVE<br/>
            </pre>
            <Heading3 id="chain-combo">Cadenas de normales</Heading3>
            <p>
                Dentro de los normales existe un sistema de cadena basado en jerarquía de fuerza de ataque del <PLink
                href={routes.mechanics.inputStrengthDiagram.path}>diagrama</PLink>.
            </p>
            <ul>
                <li>Un ataque ligero puede cancelarse en medio o fuerte</li>
                <li>Un ataque medio puede cancelarse en fuerte</li>
                <li>Un ataque fuerte <b>no</b> se cancela en otro normal (sí en especial)</li>
                <li>Los ataques en crouch siguen la misma jerarquía</li>
                <li>Los ataques aéreos también generan sus propias cadenas</li>
            </ul>
            <Heading3 id="combo-examples">Ejemplos de generación de combos y condiciones</Heading3>
            <p><b>Combo estándar (ejemplo genérico)</b></p>
            <p>
                <InlineIcon size={2}><InputSequence sequence={[Input.P, Input.K, Input.S, Input.HS]}/></InlineIcon>→
                Cancelar en Special → (Cancelar en Overdrive).
            </p>
            <p><b>Combo generador de aderezo (ejemplo Boloñesa)</b></p>
            <pre>
                <MeleeText/> x3 o más consecutivos completados<br/>
            │<br/>
            └──► Aplicación automática de <PLink href={routes.dressings.path}>aderezo</PLink><br/>
            (marcada visualmente en animación)<br/>
            </pre>
            <p><b>Combo con aderezo del Chef</b></p>
            <pre>
                Input especial (<InlineIcon size={2}><InputSequence
                sequence={[Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.R]}/></InlineIcon>) <br/>

                │ <br/>
                └──► Proyectil de salsa → impacto → aderezo aplicado <br/>
            </pre>
            <AlertPanel>TODO: añadir parte de dinámicas o generar una página completa nueva con todas dinámicas
                juntas</AlertPanel>
            <p>
                **Dinámica estratégica generada:**
                El jugador defensor debe decidir si arriesga Parry para evitar acumular stacks, sabiendo que si el rival
                mixupea con grab, queda completamente expuesto. La gestión de este riesgo es el núcleo de la tensión
                defensiva del juego.
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
                </InlineIcon> y otro <InlineIcon size={2}><InputSequence
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
        </>
    );
}
