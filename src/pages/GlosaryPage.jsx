import {Heading1, Heading2} from "../modules/Heading/Heading.jsx"
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
            <Heading2 id="frames">Tipos de frames especiales</Heading2>
            <p>
                <b> - Startup </b>:  <br></br>
                <b> - Active </b>:  <br></br>
                <b> - Recovery </b>:  <br></br>
            </p>
        </>
    );
}
