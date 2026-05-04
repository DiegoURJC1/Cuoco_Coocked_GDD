import {Heading1, Heading2, Heading3, Heading4} from "../modules/Heading/Heading.jsx";
import {Input} from "../dataTemplate/input/enums/Input.js";
import {InlineIcon} from "../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../dataTemplate/input/InputSequence.jsx";
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";
import {getMoveStateIcon, MoveState} from "../dataTemplate/fighters/moves/enums/MoveState.jsx";
import PLink from "../modules/Link/PLink.jsx";
import {routes} from "../routes/routes.js";
import InputStrengthDiagram from "../../public/diagrams/Input strength.svg?react";
import GeneralCombatDiagram from "../../public/diagrams/General combat diagram.svg?react";
import {BlockText, GrabText, MeleeText, RangeText} from "../modules/ColoredText/ColoredText.jsx";
import glossary, {getGlossaryLink} from "../routes/glossary.jsx";

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
            <p>
                La estructura interna de cada round sigue el siguiente esquema/diagrama de flujo:
            </p>
            <AlertPanel>TODO: crear esquema/diagrama</AlertPanel>
            <br></br>
            <pre>
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
                </pre>
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
            <br/>
            <Heading2 id="movement">Movimiento</Heading2>
            <p>
                Todos los movimientos de palanca se realizan en base a la posición relativa del
                jugador y su rival. Cuando estos cambian sus posiciones relativas, los movimientos de
                palanca cambian de orientación.
            </p>
            <p>Siempre se asume que el jugador está a la izquierda y su rival a la derecha.</p>
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
            <div className="diagram">
                <InputStrengthDiagram style={{width: 'clamp(200px, 50%, 100%)'}}/>
            </div>

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
            <Heading3 id="melee">Cuerpo a cuerpo (Melee)</Heading3>
            <p>
                Son aquellos ataques de contacto directo con rango corto, daño directo y alta frecuencia de uso.
                Representan el núcleo del rushdown y el motor principal de generación de combos en personajes cuerpo a
                cuerpo.
            </p>
            <Heading4 id="melee-properties">Propiedades generales</Heading4>
            <ul>
                <li>Rango: corto (requiere proximidad al rival)</li>
                <li>Daño: estándar</li>
                <li>Se cancela en especiales y supers</li>
                <li>Puede ejecutarse en standing, crouch y aire</li>
                <li>Es el tipo de ataque que el bloqueo neutraliza completamente</li>
            </ul>
            <Heading4 id="melee-examples-bolognesa">Ejemplo temático — Boloñesa:</Heading4>
            <p>
                Cada ataque melee lanza visualmente manchas de salsa. Si ejecuta una consecución de 3 o más ataques
                melee consecutivos completos, aplica el aderezo correspondiente de forma automática. La generación del
                aderezo está marcada visualmente en la animación (la salsa acumula presencia en pantalla antes de
                aplicarse y tras aplicarse aparece un pequeño icono bajo la barra de vida).
            </p>

            <Heading3 id="range">Range (Distancia)</Heading3>
            <p>
                Son aquellos ataques de proyectil o alcance extendido que sirven para control de espacio, zoning,
                presión a distancia. Son el tipo de ataque contra el que el Parry es efectivo y el Bloqueo genera chip
                damage.
            </p>
            <Heading4 id="range-properties">Propiedades generales</Heading4>
            <ul>
                <li>Rango: medio para los ataques de extensión y largo para los proyectiles</li>
                <li>Daño: variable (menor que melee en impacto directo, pero acumula chip en guardia)</li>
                <li>Puede activar elementos de entorno (ver sección 9.3)</li>
                <AlertPanel>TODO: importante enlazar con la parte donde se expliquen aderezos en entorno, quitar
                    (ver sección 9.3)</AlertPanel>
                <li>Puede ser neutralizado con Parry, ventana pequeña</li>
                <li>Bloquear un ataque de distancia genera chip damage y acumula stacks de guardbreak</li>
            </ul>
            <Heading4 id="range-categories">Dos categorías de ataques de distancia:</Heading4>
            <p>Debido a la naturaleza de la mayoría de los luchadores se diferencian dos tipos distintos de ataques
                a distancia:</p>
            <ul>
                <li>Proyectil: Sale del personaje y viaja hasta el rival</li>
                <li>Extensión: El personaje extiende parte de su cuerpo a mayor alcance</li>
            </ul>
            <Heading4 id="range-examples-chef">Ejemplo temático — El Chef</Heading4>
            <p>
                Ataque de distancia estándar: estocada con el tenedor gigante (extensión). Input especial (media luna +
                botón distancia): saca un bote de salsa picante y lanza un chorro (proyectil). Ambos son ataques de
                distancia, ambos son vulnerables al Parry, pero tienen propiedades diferentes (velocidad, hitbox,
                efectos
                secundarios).
            </p>
            <Heading3 id="grabs">Grabs (Agarres)</Heading3>
            <p>
                Ataques de agarre que ignoran completamente el sistema defensivo del rival. Son el punisher del jugador
                excesivamente defensivo o reactivo. Requieren proximidad y tienen startup visible.
            </p>
            <Heading4 id="grabs-explanation">Propiedades generales</Heading4>
            <ul>
                <li>Rango: muy corto (más que melee estándar, pero requieren contacto)</li>
                <li>El Bloqueo no los detiene</li>
                <li>El Parry no los detiene: un intento de Parry en el frame de un grab es tratado como si no hubiera
                    defensa
                </li>
                <li>Tienen startup más lento que los ataques melee, lo que los hace legibles con práctica</li>
                <li>Generan situaciones de okizeme favorables tras el knockdown</li>
            </ul>
            <Heading4 id="grab-types">Tipología de grabs</Heading4>
            <ul>
                <li>Grab estándar: Agarre directo con daño y knockdown</li>
                <li>Grab técnico o llave: Secuencia de inputs, mayor daño, posición específica</li>
                <li>Grab aéreo: Agarre similar al estándar, pero con el oponente en el aire</li>
            </ul>
            <Heading4 id="grab-examples-Bolognesa">Ejemplo temático — Boloñesa</Heading4>
            <p>
                El grab especial (media luna + botón grab) inicia una llave donde los fideos envuelven al rival.
                Animación larga, altamente legible, daño alto y posición post-grab favorable.
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <Heading2 id="defensive-system">Sistema defensivo</Heading2>
            <Heading3 id="macro-game-defense">Marco general</Heading3>
            <ul>
                <AlertPanel>TODO: se puede poner en formato tabla o esquema o dejarlo así</AlertPanel>
                <li>Bloqueo: Neutralización total de Melee. Chip damage de Distancia y acumula stacks de
                    guardbreak.
                    El Grab lo ignora.
                </li>
                <li>Parry: No aplicable a Melee. Neutralización total a Distancia y autocounter en el frame
                    exacto
                    a Distancia. El Grab lo ignora.
                </li>
                <li>Sin defensa: Daño completo en todos los casos.</li>
            </ul>
            <Heading3 id="block">Bloqueo</Heading3>
            <ul>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.LEFT]}/></InlineIcon>
                    Mantener atrás respecto al rival. Acción pasiva y accesible.
                </li>
            </ul>
            <Heading4 id="block-melee-counter">Contra Melee</Heading4>
            <ul>
                <li>Neutralización total del daño</li>
                <li>El personaje entra en blockstun durante X frames</li>
                <li>No genera stacks de guardbreak</li>
            </ul>
            <Heading4 id="block-range-counter">Contra Distancia</Heading4>
            <ul>
                <li>El personaje recibe chip damage</li>
                <li>Genera 1 stack de guardbreak</li>
                <li>A los 3 stacks consecutivos, se activa el estado Guardbreak</li>
                <li>Los stacks se resetean si el rival deja de presionar con ataques de distancia
                    durante
                    2 segundos o el defensor realizar con exito un Parry o ataque
                </li>
            </ul>
            <Heading4 id="block-grab-counter">Contra Grab</Heading4>
            <ul>
                <li>El bloqueo no se aplica. El grab se ejecuta como si no hubiera defensa.</li>
            </ul>
            <Heading3 id="parry">Parry</Heading3>
            <p>
                El Parry es una acción activa de alta habilidad que sólo funciona contra ataques de distancia.
                Además requiere de input preciso en la ventana de active frames del ataque entrante.
            </p>
            <ul>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.RIGHT]}/></InlineIcon>
                    En el momento exacto del impacto.
                </li>
            </ul>
            <Heading4 id="parry-explanation">Funcionamiento:</Heading4>
            <ul>
                <li>Ventana de activación: pequeña (pocos frames), sin margen de error generoso</li>
                <li>Si se ejecuta en el <b>frame exacto</b>: activa un autocounter con animación fija y
                    daño garantizado
                </li>
                <li>Si se ejecuta fuera del frame exacto, pero dentro de la ventana: anula el daño
                    entrante.
                </li>
                <li>Si se ejecuta fuera de la ventana: : no pasa nada (el personaje no está en animación
                    de parry, simplemente falla el timing)
                </li>
            </ul>
            <Heading4 id="parry-grab-counter">Contra Grab:</Heading4>
            <ul>
                <li>Un intento de Parry activo en el momento en que un grab conecta es tratado igual que
                    el bloqueo: el grab lo ignora completamente. El personaje queda atrapado.
                </li>
            </ul>
            <Heading4 id="design-notes">Notas de diseño</Heading4>
            <ul>
                <li>El autocounter del parry perfecto es un momento de alta recompensa, visualmente
                    marcado
                </li>
                <li>El riesgo de intentar parry contra un rival que mezcla (mixup) grab/distancia es la
                    razón por la que los grabs funcionan como punisher del jugador reactivo
                </li>
            </ul>
            <Heading3 id="guardbreak">Guardbreak</Heading3>
            <p>
                Estado especial activado por acumulación de 3 bloqueos consecutivos de ataques a distancia. Este
                estado funciona como penalización por un uso prolongado de una defensa incorrecta.
            </p>
            <Heading4 id="guardbreak-properties">Propiedades</Heading4>
            <ul>
                <li>Duración: entre 100-500 milisegundos (depende del cada personaje)</li>
                <li>Durante el estado: el personaje no puede realizar ningún input (pseudo-stun)</li>
                <li>El personaje queda completamente expuesto a cualquier ataque</li>
                <li>Visualmente marcado de forma clara (animación de "guardia rota" + efecto visual en
                    el personaje)
                </li>
                <li>Es el escenario de mayor peligro del sistema defensivo: el rival tiene una ventana
                    garantizada de presión sin respuesta posible
                </li>
            </ul>
            <br/>
            <hr></hr>
            <br/>
            <Heading2 id="combos">Combos y cancelaciones</Heading2>
            <Heading3 id="cancelTree">Árbol de cancelaciones</Heading3>
            <p>
                Las cancelaciones son la base de la generación de combos. Un movimiento puede cancelarse en otro si
                el árbol lo permite, interrumpiendo su animación de recovery para encadenar el siguiente ataque.
            </p>
            <AlertPanel>TODO: esquema/diagrama </AlertPanel>
            <pre>
                NORMAL (standing/crouch/aéreo)<br/>
                │<br/>
                └──► ESPECIAL<br/>
                │<br/>
                └──► SUPER<br/>
            </pre>
            <Heading4 id="general-rules">Reglas generales:</Heading4>
            <ul>
                <li>Los normales se cancelan en especiales <b>solo si han conectado</b> (en golpe o en bloqueo)
                </li>
                <li>Los especiales se cancelan en supers solo durante una ventana específica para cada
                    especial
                </li>
                <li>Los normales <b>no</b> se cancelan directamente en supers (salvo personajes con mecánica
                    especial)
                </li>
                <li>Los movimientos de distancia si son proyectil se pueden cancelar en otro de tipo extensión
                </li>
            </ul>
            <Heading3 id="chain-combo">Cadenas de normales</Heading3>
            <p>
                Dentro de los normales existe un sistema de cadena basado en jerarquía de fuerza de ataque:<br></br>
                Ataque Ligero → Ataque Medio → Ataque Fuerte<br></br>
            </p>
            <ul>
                <li>Un ataque ligero puede cancelarse en medio o fuerte</li>
                <li>Un ataque medio puede cancelarse en fuerte</li>
                <li>Un ataque fuerte <b>no</b> se cancela en otro normal (sí en especial)</li>
                <li>Los ataques en crouch siguen la misma jerarquía</li>
                <li>Los ataques aéreos también generan sus propias cadenas</li>
            </ul>
            <Heading3 id="combo-examples">Ejemplos de generación de combos y condiciones</Heading3>
            <Heading4 id="standar-combo">Combo estándar (ejemplo genérico)</Heading4>
            Ligero → Medio → Fuerte → Cancelar en Especial → (Cancelar en Super)
            <Heading4 id="combo-examples-bolognesa">Combo generador de aderezo (ejemplo Boloñesa):</Heading4>
            <pre>
                Melee x3 o más consecutivos completados<br/>
            │<br/>
            └──► Aplicación automática de aderezo<br/>
            (marcada visualmente en animación)<br/>
            </pre>
            <Heading4 id="combo-examples-chef">Combo con aderezo del Chef:</Heading4>
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
        </>
    );
}
