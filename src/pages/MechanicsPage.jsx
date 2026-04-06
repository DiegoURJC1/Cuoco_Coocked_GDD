import {Heading1, Heading2} from "../modules/Heading/Heading.jsx"
export default function MechanicsPage() {
    return (
        <>
            <Heading1 id="mechanics">Mecánicas - Sistemas de combate</Heading1>
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
                La estructura interna de cada round sigue el siguiente esquema/diagrama de flujo: (*TODO: crear esquema/diagrama*)
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
            </p>
            <Heading2 id="movement">Movimiento</Heading2>
            <p>

            </p>
            <Heading2 id="offensive-system">Sistema ofensivo</Heading2>
            <p>

            </p>
            <Heading2 id="defensive-system">Sistema defensivo</Heading2>
            <p>

            </p>
            <Heading2 id="combos">Combos y cancelaciones</Heading2>
            <p>

            </p>
        </>
    );
}
