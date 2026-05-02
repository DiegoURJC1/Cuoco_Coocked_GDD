import { Heading1, Heading2 } from "../modules/Heading/Heading.jsx"
export default function GlosaryPage() {
    return (
        <>
            <Heading1 id="glosary">Glosario de términos</Heading1>
            <Heading2 id="combatStates">Estados del personaje en combate</Heading2>
            <p>
                <b> - Neutral </b>: Sin compromisos, puede realizar cualquier acción <br></br>
                <b> - En ataque </b>: Realizando una acción ofensiva (con frames de startup, active y recovery) <br></br>
                <b> - Stun </b>: Recibiendo un golpe, en hitstun (no puede actuar) <br></br>
                <b> - Guardbreak </b>: Estado especial <br></br>
                <b> - Knockdown </b>: En el suelo, con ventana de okizeme para el rival <br></br>
                <b> - Okizeme </b> : Término japonés para describir las opciones de un atacante sobre su rival cuando este se encuentra en el suelo  <br></br>
                <b> - Wakeup </b>: Levantándose del suelo, con opciones limitadas de reversals <br></br>
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <Heading2 id="frames">Tipos de frames especiales</Heading2>
            <p>
                <ul>
                    <li><b>Startup </b>: Frames desde el input hasta el primer active frame</li>
                    <li><b>Active </b>: Frames en los que el ataque tiene hitbox activa y puede conectar</li>
                    <li><b>Recovery </b>: Frames tras el ataque antes de poder actuar</li>
                    <li><b>Hitstun</b>: Frames que el rival no puede actuar tras recibir el golpe</li>
                    <li><b>Blockstun</b>: Frames que el rival no puede actuar tras bloquear un ataque</li>
                    <li><b>Advantage / Disadvantage</b>: Diferencia de frames entre atacante y defensor tras el impacto</li>
                    <li><b>Guardbreak</b>: Estado de pseudo-stun activado tras 3 bloqueos consecutivos de ataques a distancia</li>
                </ul>
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <Heading2 id="archetypes">Arquetipos de luchadores</Heading2>
            <p>
                <ul>
                    <li><b>Shoto:</b> equilibrado, un poco de todo, buenos en nada, malos en nada.</li>
                    <li><b>Grappler:</b> especialista en grabs, lentos, pesados, grandes, malos en movilidad.</li>
                    <li><b>Zoner:</b> especialista en ataques a distancia, mantener alejado y alejarse, malos en defensa.</li>
                    <li><b>Rushdown:</b> especialista en ataque, velocidad, combos consecutivos, glass cannon.</li>
                    <li><b>Poke/footsie:</b> especialista en distancia, mejor control, peor daño, buen mid-range.</li>
                    <li><b>Puppet:</b> crea minions, summons o elementos menores.</li>
                </ul>
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <Heading2 id="actions">Tipos de acciones</Heading2>
            <p>
                <ul>
                    <li><b>Parry</b>: Defensa activa de timing preciso contra ataques de distancia</li>
                    <li><b>Bloqueo </b>: Defensa activa que reduce el daño del ataque melee</li>
                    <li><b>Autocounter </b>: Tras realizar un Parry en el frame exacto el personaje realiza automáticamente
                        un contraataque predefinido (animación fija y daño garantizado)</li>
                    <li><b>Reversal</b>: Acción ofensiva ejecutada en el primer frame disponible tras un estado de stun o wakeup</li>
                </ul>
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <Heading2 id="specialWords">Términos especiales</Heading2>
            <p>
                <ul>
                    <li><b>Aderezo </b>: Estado alterado (buff o debuff) del sistema propio de Cuoco Cooked</li>
                    <li><b>Chip damage </b>: porcentaje reducido del daño base del ataque incluso al bloquear correctamente</li>
                    <li><b>AOE (Area of Effect) </b>: Daño o ataque que afecta por área, sin target específico </li>
                    <li><b>DoT (Damage over Time)</b>: Daño continuo aplicado durante un período de tiempo</li>
                    <li><b>Mixup</b>: Estrategia que combina opciones con respuestas defensivas distintas para confundir al rival</li>
                    <li><b>Okizeme</b>: Situación de presión sobre el rival mientras se levanta del suelo</li>
                    <li><b>Zoning</b>: Estrategia de control de espacio mediante ataques de distancia</li>
                </ul>
            </p>
        </>
    );
}
