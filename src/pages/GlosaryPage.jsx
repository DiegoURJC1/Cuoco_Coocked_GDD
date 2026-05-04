import {Heading1, Heading2} from "../modules/Heading/Heading.jsx"
import {GlossaryTables} from "../modules/GlossaryTables/GlossaryTables.jsx";
import glossary from "../routes/glossary.jsx";
import {GlossaryCategory} from "../routes/glossary.jsx";

export default function GlosaryPage() {
    return (
        <>
            <Heading1 id="glosary">Glosario de términos</Heading1>

            <GlossaryTables glossary={glossary} glossaryCategory={GlossaryCategory}/>


            <Heading2 id="combatStates">Estados del personaje en combate</Heading2>
            <p>
                <b> - Neutral </b>: Sin compromisos, puede realizar cualquier acción <br></br>
                <b> - En ataque </b>: Realizando una acción ofensiva (con frames de startup, active y
                recovery) <br></br>
                <b> - Stun </b>: Recibiendo un golpe, en hitstun (no puede actuar) <br></br>
                <b> - Guardbreak </b>: Estado especial <br></br>
                <b> - Knockdown </b>: En el suelo, con ventana de okizeme para el rival <br></br>
                <b> - Okizeme </b> : Término japonés para describir las opciones de un atacante sobre su rival cuando
                este se encuentra en el suelo <br></br>
                <b> - Wakeup </b>: Levantándose del suelo, con opciones limitadas de reversals <br></br>
            </p>
            <Heading2 id="frames">Tipos de frames especiales</Heading2>
            <ul>
                <li><b>Startup </b>: Frames desde el input hasta el primer active frame</li>
                <li><b>Active </b>: Frames en los que el ataque tiene hitbox activa</li>
                <li><b>Recovery </b>: Frames tras el ataque antes de poder actuar</li>
                <li><b>Hitstun</b>: Frames que el rival no puede actuar tras recibir el golpe</li>
                <li><b>Blockstun</b>: Frames que el rival no puede actuar tras bloquear</li>
                <li><b>Advantage / Disadvantage</b>: Diferencia de frames entre atacante y defensor tras el impacto</li>
            </ul>
            <Heading2 id="archetypes">Arquetipos de luchadores</Heading2>
            <ul>
                <li><b>Rushdown </b>:</li>
                <li><b>Grappler </b>:</li>
                <li><b>Zonner </b>:</li>
            </ul>
            <Heading2 id="">Tipos de </Heading2>
            <b> - Parry </b>: <br></br>
            <b> - Bloqueo </b>: <br></br>
            <b> - Autocounter </b>: Tras realizar un Parry en el frame exacto el personaje realiza automáticamente
            un contraataque predefinido (animación fija y daño garantizado) <br></br>
            <Heading2 id="specialWords">Términos especiales</Heading2>
            <b> - Chip damage </b>: porcentaje reducido del daño base del ataque <br></br>
        </>
    );
}
