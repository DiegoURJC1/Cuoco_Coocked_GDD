import {Heading1, Heading2, Heading3} from "../modules/Heading/Heading.jsx"
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";
import {InlineIcon} from "../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../dataTemplate/input/InputSequence.jsx";
import {Input} from "../dataTemplate/input/enums/Input.js";

export default function DressingsPage() {
    return (
        <>
            <Heading1 id="dressings">Sistema de aderezos</Heading1>
            <Heading2 id="definition">¿Qué son los aderezos?</Heading2>

            <Heading3 id="general-description">Descripción general</Heading3>
            <p>
                Los Aderezos son el sistema de estados alterados de Cuoco Cooked. Funcionan como capa de complejidad
                adicional sobre el combate base, generando situaciones dinámicas, reversibles y temáticamente coherentes
                con el universo del juego.
            </p>
            <p>
                Pueden activarse o desactivarse en los parámetros personalizados de una partida.
            </p>

            <Heading3 id="system-principles">Principios del sistema</Heading3>
            <ul>
                <li>Son estados de <b>corta duración y alta rotación</b>: se prefieren muchas aplicaciones breves a
                    un único estado largo.
                </li>
                <li>Son información <b>global del sistema</b>: sus efectos son idénticos para todos los luchadores,
                    aunque el impacto varía según el playstyle de cada uno.
                </li>
                <li>Cada luchador tiene sus propios métodos de generación de aderezos, coherentes con su identidad
                    temática.
                </li>
                <li>En un matchup concreto, algunos aderezos pueden ser inaccesibles si ninguno de los dos
                    combatientes, ni el entorno tienen la capacidad de generarlos.
                </li>
                <li>Independientemente de cómo se generen aparece un reflejo visual único para cada aderezo sobre el
                    personaje (ejemplo la estrella de
                    Super Mario) y aparece el icono representativo bajo la barra de salud del mismo.
                </li>
            </ul>
            <br></br>
            <hr></hr>
            <Heading2 id="catalog">Catálogo completo de aderezos</Heading2>
            <AlertPanel>TODO: Añadir iconos de cada estado, similar a los de comandos input</AlertPanel>

            <Heading3 id="possitive-dressings">Aderezos positivos (<b>Buffs</b>)</Heading3>
            <ul>
                <li><b>Glaseado</b>: Absorbe 1 hit completo sin stun ni daño. Se consume a los 3 segundos o tras
                    absorber un hit. Ejemplos temáticos: Caramelo, miel, azucar caramelizada.
                </li>
                <li><b>Picante</b>: Aumenta el daño en ataques y reduce la resistencia al daño recibido. Se consume
                    a los 2 segundos. Ejemplos temáticos: Chile, sriracha, tabasco.
                </li>
                <li><b>Salsa Especiada</b>: Aumenta el rango en todos los ataques del personaje. Se representa con
                    visuales especiales que no deforman las animaciones del personaje. Se consume a los 2
                    segundos. Ejemplos temáticos: Romero, albahaca, tomillo.
                </li>
                <li><b>Fermentado</b>: Proporciona regeneración lenta de vida durante 3 segundos. Ejemplos
                    temáticos:
                    Kimchi, masa madre, miso.
                </li>
            </ul>

            <Heading3 id="negative-dressings">Aderezos negativos (<b>Debuffs</b>)</Heading3>
            <ul>
                <li><b>Pringoso</b>: Reduce la velocidad de movimiento durante 1,5 segundos. Ejemplos temáticos:
                    Caramelo quemado, jarabe.
                </li>
                <li><b>Mareado</b>: Inputs invertidos durante 2 segundos. Ejemplos temáticos: Alcohol, vinagre
                    fuerte.
                </li>
                <li><b>Saciado</b>: Sin posibilidad de dash ni salto 1,5 segundos. Ejemplos temáticos:
                    Sobrealimentación, salsa densa.
                </li>
                <li><b>Quemado</b>: Daño continuo leve (DoT) durante 5 segundos (mínimo 1, no puede hacer kill).
                    Ejemplos temáticos: Picante extremo, curry, brasa.
                </li>
            </ul>

            <br></br>
            <hr></hr>
            <Heading2 id="stacking">Reglas de duración y stacking</Heading2>
            <ul>
                <li>Cada personaje sólo puede tener <b>un único aderezo activo</b> en cada momento. Se puede aumentar en
                    los parámetros personalizados de una partida.
                </li>
                <li>Si se aplica un nuevo aderezo mientras uno está activo, el nuevo <b>cancela y sobreescribe</b>
                    al anterior inmediatamente.
                </li>
                <li>Esto último genera una posible <b>dinámica de uso reactivo</b> del sistema: un jugador puede
                    aplicarse un buff de forma deliberada para cancelar un debuff que acaba de recibir sin apenas
                    perjuicio si tiene los reflejos suficientes.
                </li>
                <li>Esta mecánica añade una capa de gestión táctica: cuándo aplicar un aderezo propio tiene tanto
                    peso como cuándo aplicárselo al rival.
                </li>
            </ul>
            <Heading3>Ejemplo de dinámica reactiva:</Heading3>
            <p>
                El rival lanza un ataque de área sobre la zona dónde te sitúas<br></br>
                └──► la estanteria que hay detras tuya se rompe, cayendote encima un botecito de vinagre<br></br>
                └──► aplica "Mareado" (inputs invertidos) a tu personaje<br></br>
                └──► Ejecutas una técnica que genera "Glaseado" (buff propio)<br></br>
                └──► Mareado queda cancelado instantaneamente y obtienes Glaseado<br></br>
                Glaseado activo (absorbe 1 hit)<br></br>
            </p>
            <br></br>
            <hr></hr>
            <Heading2 id="generation">¿Cómo se generan?</Heading2>
            <Heading3>Los aderezos se generan por dos vías:</Heading3>
            <ol>
                <li><b>Vía 1: Directa, por técnicas y combos del personaje:</b></li>
                Cada luchador tiene métodos propios de generación de aderezos, integrados en su moveset y coherentes
                con su temática.
                La aplicación de aderezo siempre está incorporada visualmente en la animación del personaje. Pueden
                ser:
                <ul>
                    <li><b>Por ataque especial directo:</b> El aderezo se aplica como efecto secundario de un ataque
                        específico.
                        Ejemplo: El Chef ejecuta <InlineIcon size={2}><InputSequence
                            sequence={[Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.R]}/></InlineIcon>
                        → lanza un bote de salsa picante → aplica "Quemado" al rival si impacta
                    </li>
                    <li><b>Por consecución de ataques:</b> El aderezo se aplica al completar una cadena específica
                        de ataques.
                        Ejemplo: Boloñesa ejecuta 3 o más ataques melee consecutivos completos → aplica
                        automáticamente su aderezo característico
                    </li>
                </ul>
                <br></br>
                <li><b>Vía 2: Indirecta, por elementos de entorno:</b></li>
                Los escenarios pueden contener elementos interactivos (botes de salsa, especias, ingredientes en
                estanterías) que generan aderezos al ser activados.
                Reglas de activación por entorno:
                <ul>
                    <li>Solo se activan con <b>ataques sin target específico</b>: ataques de distancia y especiales
                        que generen daño en área (AoE)
                    </li>
                    <li>Los ataques melee y grabs, al requerir contacto directo con el rival, no activan elementos
                        de entorno
                    </li>
                    <li>El efecto producido es <b>AOE</b>: afecta por posición, pudiendo impactar a ambos
                        luchadores, solo al atacante, solo al defensor, o a ninguno
                    </li>
                    <li>El jugador debe considerar la posición relativa antes de lanzar un ataque que pueda activar
                        el entorno
                    </li>
                    <p>
                        <b>Ejemplo:</b><br></br>
                        Personaje A lanza proyectil hacia el personaje B<br></br>
                        Personaje B está frente a una estantería de botes de "Salsa Especiada"<br></br>
                        └──► El proyectil alcanza la estantería<br></br>
                        └──► AOE de "Salsa Especiada"<br></br>
                        <ul>
                            Casos:
                            <li>A estaba muy cerca y B no se mueve: ambos reciben el aderezo</li>
                            <li>A estaba a una cierta distancia y B no se mueve: sólo B recibe el aderezo</li>
                            <li>A estaba muy cerca de la estantería y B se mueve: sólo A recibe el aderezo</li>
                            <li>A estaba a una cierta distancia y B se mueve: ninguno recibe el aderezo</li>
                        </ul>
                    </p>
                </ul>
            </ol>
        </>
    );
}
