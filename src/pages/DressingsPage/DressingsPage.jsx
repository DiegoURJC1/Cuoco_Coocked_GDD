import {Heading1, Heading2, Heading3} from "../../modules/Heading/Heading.jsx"
import {InlineIcon} from "../../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../../dataTemplate/input/InputSequence.jsx";
import {Input} from "../../dataTemplate/input/enums/Input.js";

import Fermentado from "../../assets/icons/dressing/Fermentado.svg?react";
import Glaseado from "../../assets/icons/dressing/Glaseado.svg?react";
import Mareado from "../../assets/icons/dressing/Mareado.svg?react";
import Picante from "../../assets/icons/dressing/Picante.svg?react";
import Pringoso from "../../assets/icons/dressing/Pringoso.svg?react";
import Quemado from "../../assets/icons/dressing/Quemado.svg?react";
import Saciado from "../../assets/icons/dressing/Saciado.svg?react";
import SalsaEspecial from "../../assets/icons/dressing/Salsa Especiada.svg?react";

import "./DressingsPage.css";
import {routes} from "../../routes/routes.js";

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

            <Heading3 id="possitive-dressings">Aderezos positivos (<b>Buffs</b>)</Heading3>
            <table>
                <tbody>
                <tr id={routes.dressings.dressing.glazed.id}>
                    <td className="dressing-icon"><Glaseado/></td>
                    <td>Glaseado</td>
                    <td>Absorbe 1 hit completo sin stun ni daño. Se consume a los 3 segundos o tras
                        absorber un hit. Ejemplos temáticos: Caramelo, miel, azúcar caramelizada.
                    </td>
                </tr>
                <tr id={routes.dressings.dressing.spicy.id}>
                    <td className="dressing-icon"><Picante/></td>
                    <td>Picante</td>
                    <td>Aumenta el daño en ataques y reduce la resistencia al daño recibido. Se consume
                        a los 2 segundos. Ejemplos temáticos: Chile, sriracha, tabasco.
                    </td>
                </tr>
                <tr id={routes.dressings.dressing.specialSalad.id}>
                    <td className="dressing-icon"><SalsaEspecial/></td>
                    <td>Salsa Especiada</td>
                    <td>Aumenta el rango en todos los ataques del personaje. Se representa con
                        visuales especiales que no deforman las animaciones del personaje. Se consume a los 2
                        segundos. Ejemplos temáticos: Romero, albahaca, tomillo.
                    </td>
                </tr>
                <tr id={routes.dressings.dressing.fermented.id}>
                    <td className="dressing-icon"><Fermentado/></td>
                    <td>Fermentado</td>
                    <td>Proporciona regeneración lenta de vida durante 3 segundos. Ejemplos
                        temáticos:
                        Kimchi, masa madre, miso.
                    </td>
                </tr>
                </tbody>
            </table>

            <Heading3 id="negative-dressings">Aderezos negativos (<b>Debuffs</b>)</Heading3>
            <table>
                <tbody>
                <tr id={routes.dressings.dressing.sticky.id}>
                    <td className="dressing-icon"><Pringoso/></td>
                    <td>Pringoso</td>
                    <td>Reduce la velocidad de movimiento durante 1,5 segundos. Ejemplos temáticos:
                        Caramelo quemado, jarabe.
                    </td>
                </tr>
                <tr id={routes.dressings.dressing.dizzy.id}>
                    <td className="dressing-icon"><Mareado/></td>
                    <td>Mareado</td>
                    <td>Inputs invertidos durante 2 segundos. Ejemplos temáticos: Alcohol, vinagre
                        fuerte.
                    </td>
                </tr>
                <tr id={routes.dressings.dressing.satiated.id}>
                    <td className="dressing-icon"><Saciado/></td>
                    <td>Saciado</td>
                    <td>Sin posibilidad de dash ni salto 1,5 segundos. Ejemplos temáticos:
                        Sobrealimentación, salsa densa.
                    </td>
                </tr>
                <tr id={routes.dressings.dressing.burned.id}>
                    <td className="dressing-icon"><Quemado/></td>
                    <td>Quemado</td>
                    <td>Daño continuo leve (DoT) durante 5 segundos (mínimo 1, no puede hacer kill).
                        Ejemplos temáticos: Picante extremo, curry, brasa.
                    </td>
                </tr>
                </tbody>
            </table>

            <br></br>
            <hr></hr>
            <Heading2 id="stacking">Reglas de duración y stacking</Heading2>
            <ul>
                <li>Cada personaje sólo puede tener <b>un único aderezo activo</b> en cada momento. Se puede aumentar en
                    los parámetros personalizados de una partida.
                </li>
                <li>Si se aplica un nuevo aderezo mientras uno está activo, el nuevo <b>cancela y sobreescribe </b>
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
            <p><b>Ejemplo de dinámica reactiva</b></p>
            <p>
                El rival lanza un ataque de área sobre la zona dónde te sitúas:<br></br>
                └──► La estanteria que hay detras tuya se rompe, cayendote encima un botecito de vinagre.<br></br>
                └──► Aplica "Mareado" (inputs invertidos) a tu personaje.<br></br>
                └──► Ejecutas una técnica que genera "Glaseado" (buff propio).<br></br>
                └──► Mareado queda cancelado instantaneamente y obtienes Glaseado.<br></br>
                Glaseado activo (absorbe 1 hit)<br></br>
            </p>
            <br></br>
            <hr></hr>
            <Heading2 id="generation">¿Cómo se generan?</Heading2>
            <p><b>Los aderezos se generan por dos vías</b></p>
            <p>
                <b>Vía 1: Directa, por técnicas y combos del personaje</b><br/>
                Cada luchador tiene métodos propios de generación de aderezos, integrados en su moveset y coherentes
                con su temática.
                La aplicación de aderezo siempre está incorporada visualmente en la animación del personaje. Pueden
                ser:
            </p>
            <ul>
                <li><b>Por ataque especial directo:</b> El aderezo se aplica como efecto secundario de un ataque
                    específico.
                    Ejemplo: El Chef ejecuta <InlineIcon size={2}><InputSequence
                        sequence={[Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.R]}/></InlineIcon>, lanza un bote de
                    salsa picante → aplica "Quemado" al rival si impacta
                </li>
                <li><b>Por consecución de ataques:</b> El aderezo se aplica al completar una cadena específica
                    de ataques.
                    Ejemplo: Boloñesa ejecuta 3 o más ataques melee consecutivos completos → aplica
                    automáticamente su aderezo característico
                </li>
            </ul>
            <p><b>Vía 2: Indirecta, por elementos de entorno</b></p>
            <p>
                Los escenarios pueden contener elementos interactivos (botes de salsa, especias, ingredientes en
                estanterías) que generan aderezos al ser activados.
                Reglas de activación por entorno:
            </p>

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
            </ul>
            <p>
                <b>Ejemplo:</b><br/>
                Personaje A lanza proyectil hacia el personaje B<br/>
                Personaje B está frente a una estantería de botes de "Salsa Especiada".<br/>
                └──► El proyectil alcanza la estantería.<br/>
                └──► AOE de "Salsa Especiada".<br/>
            </p>
            <ul>
                Casos:
                <li>A estaba muy cerca y B no se mueve: ambos reciben el aderezo</li>
                <li>A estaba a una cierta distancia y B no se mueve: sólo B recibe el aderezo</li>
                <li>A estaba muy cerca de la estantería y B se mueve: sólo A recibe el aderezo</li>
                <li>A estaba a una cierta distancia y B se mueve: ninguno recibe el aderezo</li>
            </ul>
        </>
    );
}
