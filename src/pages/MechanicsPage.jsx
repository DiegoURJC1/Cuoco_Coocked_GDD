import {Heading1, Heading2, Heading3, Heading4} from "../modules/Heading/Heading.jsx"
import {Input} from "../dataTemplate/input/enums/Input.js";
import {InlineIcon} from "../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../dataTemplate/input/InputSequence.jsx";
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";

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
            <p>
                Se plantea la posibilidad de que la vida represente algún aspecto del universo temático:
                <br></br>
                a) La cantidad de comida, por tanto conforme baja vida el luchador está siendo consumido/comido.
                <br></br>
                b) Durabilidad, por el cual conforme baja la vida se estaría deteriorando, pasando de caducidad.
            </p>
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
            <br></br>
            <hr/><hr/>
            <br></br>
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
            <br></br>
            <hr></hr>
            <br></br>
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
            <br></br>
            <hr></hr>
            <br></br>
            <Heading2 id="offensive-system">Sistema ofensivo</Heading2>
            <p>
                <Heading3>Marco general</Heading3>
                El sistema ofensivo se estructura en tres tipos de ataque con propiedades, alcances y funciones
                claramente diferenciadas. Esta división no es solo mecánica, tiene coherencia directa con la identidad
                temática de cada personaje.
            </p>
            <br></br>
            <AlertPanel>TODO: crear esquema/diagrama</AlertPanel>
            MELEE ──────────────► GRAB <br></br>
            ▲ │ <br></br>
            │ │ <br></br>
            └──── DISTANCIA ◄─────┘ <br></br>
            <br></br>
            <p>
                Estos ataques siguen el patrón de diseño de piedra/papel/tijeras donde cada uno gana a otro y pierde
                contra el tercero: <br></br>
                Melee vence a Grab en distancia/startup <br></br>
                Grab ignora toda defensa <br></br>
                Distancia supera el alcance de Melee <br></br>
            </p>
            <p>
                <Heading3 id="melee">Melee</Heading3>
                Son aquellos ataques de contacto directo con rango corto, daño directo y alta frecuencia de uso.
                Representan el núcleo del rushdown y el motor principal de generación de combos en personajes cuerpo a
                cuerpo.
                <Heading4>Propiedades generales:</Heading4>
                <ul>
                    <li>Rango: corto (requiere proximidad al rival)</li>
                    <li>Daño: estándar</li>
                    <li>Se cancela en especiales y supers</li>
                    <li>Puede ejecutarse en standing, crouch y aire</li>
                    <li>Es el tipo de ataque que el bloqueo neutraliza completamente</li>
                </ul>
                <br></br>
                <Heading4>Ejemplo temático — Boloñesa:</Heading4>
                <p>
                Cada ataque melee lanza visualmente manchas de salsa. Si ejecuta una consecución de 3 o más ataques
                melee consecutivos completos, aplica el aderezo correspondiente de forma automática. La generación del
                aderezo está marcada visualmente en la animación (la salsa acumula presencia en pantalla antes de
                aplicarse y tras aplicarse aparece un pequeño icono bajo la barra de vida).
                </p>
            </p>
            <p>
                <Heading3 id="range">Distancia</Heading3>
                Son aquellos ataques de proyectil o alcance extendido que sirven para control de espacio, zoning,
                presión a distancia. Son el tipo de ataque contra el que el Parry es efectivo y el Bloqueo genera chip
                damage.
                <br/><br/>
                <Heading4>Propiedades generales:</Heading4>
                <ul>
                    <li>Rango: medio para los ataques de extensión y largo para los proyectiles</li>
                    <li>Daño: variable (menor que melee en impacto directo, pero acumula chip en guardia)</li>
                    <li>Puede activar elementos de entorno (ver sección 9.3)</li>
                    <AlertPanel>TODO: importante enlazar con la parte donde se expliquen aderezos en entorno, quitar
                        (ver sección 9.3)</AlertPanel>
                    <li>Puede ser neutralizado con Parry, ventana pequeña</li>
                    <li>Bloquear un ataque de distancia genera chip damage y acumula stacks de guardbreak</li>
                </ul>
                <br></br>
                <Heading4>Dos categorías de ataques de distancia:</Heading4>
                <p>Debido a la naturaleza de la mayoría de los luchadores se diferencian dos tipos distintos de ataques
                a distancia:</p>
                    <ul>
                        <li>Proyectil: Sale del personaje y viaja hasta el rival</li>
                        <li>Extensión: El personaje extiende parte de su cuerpo a mayor alcance</li>
                    </ul>
                <br></br>
                <Heading4>Ejemplo temático — El Chef:</Heading4>
                <p>
                Ataque de distancia estándar: estocada con el tenedor gigante (extensión). Input especial (media luna +
                botón distancia): saca un bote de salsa picante y lanza un chorro (proyectil). Ambos son ataques de
                distancia, ambos son vulnerables al Parry, pero tienen propiedades diferentes (velocidad, hitbox, efectos
                secundarios).
                </p>
            </p>
            <p>
                <Heading3 id="grabs">Grabs / Agarres</Heading3>
                Ataques de agarre que ignoran completamente el sistema defensivo del rival. Son el punisher del jugador
                excesivamente defensivo o reactivo. Requieren proximidad y tienen startup visible.
                <br/><br/>
                <Heading4>Propiedades generales:</Heading4>
                <ul>
                    <li>Rango: muy corto (más que melee estándar, pero requieren contacto)</li>
                    <li>El Bloqueo no los detiene</li>
                    <li>El Parry no los detiene: un intento de Parry en el frame de un grab es tratado como si no hubiera
                        defensa</li>
                    <li>Tienen startup más lento que los ataques melee, lo que los hace legibles con práctica</li>
                    <li>Generan situaciones de okizeme favorables tras el knockdown</li>
                </ul>
                <Heading4>Tipología de grabs:</Heading4>
                <ul>
                    <li>Grab estándar: Agarre directo con daño y knockdown</li>
                    <li>Grab técnico o llave: Secuencia de inputs, mayor daño, posición específica</li>
                    <li>Grab aéreo: Agarre similar al estándar, pero con el oponente en el aire</li>
                </ul>
                <br></br>
                <Heading4>Ejemplo temático — Boloñesa:</Heading4>
                <p>
                El grab especial (media luna + botón grab) inicia una llave donde los fideos envuelven al rival.
                Animación larga, altamente legible, daño alto y posición post-grab favorable.
                </p>
            </p>
                <br></br>
                <hr></hr>
                <br></br>
            <p>
                <Heading2 id="defensive-system">Sistema defensivo</Heading2>
                <p>
                    <Heading3>Marco general</Heading3>
                    <ul>
                        <AlertPanel>TODO: se puede poner en formato tabla o esquema o dejarlo así</AlertPanel>
                        <li>Bloqueo: Neutralización total de Melee. Chip damage de Distancia y acumula stacks de guardbreak.
                        El Grab lo ignora.</li>
                        <li>Parry: No aplicable a Melee. Neutralización total a Distancia y autocounter en el frame exacto
                            a Distancia. El Grab lo ignora.</li>
                        <li>Sin defensa: Daño completo en todos los casos.</li>
                    </ul>
                    <p>
                        <Heading3 id="block">Bloqueo</Heading3>
                    <ul>
                        <li><InlineIcon size={2}><InputSequence sequence={[Input.LEFT]}/></InlineIcon>
                            Mantener atrás respecto al rival. Acción pasiva y accesible.</li>
                    </ul>
                        <br></br>
                        <Heading4>Contra Melee:</Heading4>
                        <p>
                            <ul>
                                <li>Neutralización total del daño</li>
                                <li>El personaje entra en blockstun durante X frames</li>
                                <li>No genera stacks de guardbreak</li>
                            </ul>
                        </p>
                        <br></br>
                        <Heading4>Contra Distancia:</Heading4>
                        <p>
                            <ul>
                                <li>El personaje recibe chip damage</li>
                                <li>Genera 1 stack de guardbreak</li>
                                <li>A los 3 stacks consecutivos, se activa el estado Guardbreak</li>
                                <li>Los stacks se resetean si el rival deja de presionar con ataques de distancia durante
                                2 segundos o el defensor realizar con exito un Parry o ataque</li>
                            </ul>
                        </p>
                        <br></br>
                        <Heading4>Contra Grab:</Heading4>
                        <p>
                            <ul>
                                <li>El bloqueo no se aplica. El grab se ejecuta como si no hubiera defensa.</li>
                            </ul>
                        </p>
                    </p>
                    <p>
                        <Heading3 id="parry">Parry</Heading3>
                        El Parry es una acción activa de alta habilidad que sólo funciona contra ataques de distancia.
                        Además requiere de input preciso en la ventana de active frames del ataque entrante.
                        <ul>
                            <li><InlineIcon size={2}><InputSequence sequence={[Input.RIGHT]}/></InlineIcon>
                                En el momento exacto del impacto.</li>
                        </ul>
                        <br></br>
                        <Heading4>Funcionamiento:</Heading4>
                        <p>
                        <ul>
                            <li>Ventana de activación: pequeña (pocos frames), sin margen de error generoso</li>
                            <li>Si se ejecuta en el <b>frame exacto</b>: activa un autocounter con animación fija y daño garantizado </li>
                            <li>Si se ejecuta fuera del frame exacto, pero dentro de la ventana: anula el daño entrante.</li>
                            <li>Si se ejecuta fuera de la ventana: : no pasa nada (el personaje no está en animación de parry, simplemente falla el timing)</li>
                        </ul>
                        </p>
                        <br></br>
                        <Heading4>Contra Grab:</Heading4>
                        <p>
                            <ul>
                                <li>Un intento de Parry activo en el momento en que un grab conecta es tratado igual que
                                    el bloqueo: el grab lo ignora completamente. El personaje queda atrapado.</li>
                            </ul>
                        </p>
                        <br></br>
                        <Heading4>Notas de diseño:</Heading4>
                        <p>
                            <ul>
                                <li>El autocounter del parry perfecto es un momento de alta recompensa, visualmente marcado</li>
                                <li>El riesgo de intentar parry contra un rival que mezcla (mixup) grab/distancia es la
                                    razón por la que los grabs funcionan como punisher del jugador reactivo</li>
                            </ul>
                        </p>
                    </p>
                    <p>
                        <Heading3 id="guardbreak">Guardbreak</Heading3>
                        Estado especial activado por acumulación de 3 bloqueos consecutivos de ataques a distancia. Este
                        estado funciona como penalización por un uso prolongado de una defensa incorrecta.
                        <br></br>
                        <Heading4>Propiedades</Heading4>
                        <p>
                            <ul>
                                <li>Duración: entre 100-500 milisegundos (depende del cada personaje)</li>
                                <li>Durante el estado: el personaje no puede realizar ningún input (pseudo-stun)</li>
                                <li>El personaje queda completamente expuesto a cualquier ataque</li>
                                <li>Visualmente marcado de forma clara (animación de "guardia rota" + efecto visual en el personaje)</li>
                                <li>Es el escenario de mayor peligro del sistema defensivo: el rival tiene una ventana
                                    garantizada de presión sin respuesta posible</li>
                            </ul>
                        </p>
                    </p>
                </p>
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <Heading2 id="combos">Combos y cancelaciones</Heading2>
            <p>
                <p>
                    <Heading3 id="cancelTree">Árbol de cancelaciones</Heading3>
                    Las cancelaciones son la base de la generación de combos. Un movimiento puede cancelarse en otro si
                    el árbol lo permite, interrumpiendo su animación de recovery para encadenar el siguiente ataque.
                </p>
                <AlertPanel>TODO: esquema/diagrama </AlertPanel>
                NORMAL (standing/crouch/aéreo)<br></br>
                │<br></br>
                └──► ESPECIAL<br></br>
                │<br></br>
                └──► SUPER<br></br>
                <p>
                    <Heading4>Reglas generales:</Heading4>
                    <ul>
                        <li>Los normales se cancelan en especiales <b>solo si han conectado</b> (en golpe o en bloqueo)</li>
                        <li>Los especiales se cancelan en supers solo durante una ventana específica para cada especial</li>
                        <li>Los normales <b>no</b> se cancelan directamente en supers (salvo personajes con mecánica especial)</li>
                        <li>Los movimientos de distancia si son proyectil se pueden cancelar en otro de tipo extensión</li>
                    </ul>
                </p>
                <p>
                    <Heading3 id="chainCombo">Cadenas de normales</Heading3>
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
                <p>
                    <Heading3 id="comboExamples">Ejemplos de generación de combos y condiciones</Heading3>
                <Heading4>Combo estándar (ejemplo genérico):</Heading4>
                Ligero → Medio → Fuerte → Cancelar en Especial → (Cancelar en Super)
                <Heading4>Combo generador de aderezo (ejemplo Boloñesa):</Heading4>
                Melee x3 o más consecutivos completados <br></br>
                │ <br></br>
                └──► Aplicación automática de aderezo <br></br>
                (marcada visualmente en animación)
                <Heading4>Combo con aderezo del Chef:</Heading4>
                Input especial (media luna + distancia) <br></br>
                │ <br></br>
                └──► Proyectil de salsa → impacto → aderezo aplicado <br></br>
                </p>
            </p>
            <AlertPanel>TODO: añadir parte de dinámicas o generar una página completa nueva con todas dinámicas juntas</AlertPanel>
            **Dinámica estratégica generada:**
            El jugador defensor debe decidir si arriesga Parry para evitar acumular stacks, sabiendo que si el rival mixupea con grab, queda completamente expuesto. La gestión de este riesgo es el núcleo de la tensión defensiva del juego.
        </>
    );
}
