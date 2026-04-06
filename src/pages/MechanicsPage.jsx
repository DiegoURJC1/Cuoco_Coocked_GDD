import {Heading1, Heading2, Heading3} from "../modules/Heading/Heading.jsx"
import {Input} from "../dataTemplate/input/enums/Input.js";
import {InlineIcon} from "../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../dataTemplate/input/InputSequence.jsx";
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";

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
            <Heading2 id="movement">Movimiento</Heading2>

            <Heading3 id="movement-basic">Movimientos básicos</Heading3>
            <ul>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.RIGHT]}/></InlineIcon>: Andar adelante,
                    velocidad estándar
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.LEFT]}/></InlineIcon>: Andar atrás, velocidad
                    estándar
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.RIGHT, Input.RIGHT]}/></InlineIcon>/
                    <InlineIcon size={2}><InputSequence sequence={[Input.DASH]}/></InlineIcon>: Dash
                    adelante, corto, con frames de recuperación
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.LEFT, Input.LEFT]}/></InlineIcon>/
                    <InlineIcon size={2}><InputSequence sequence={[Input.DASH]}/></InlineIcon>: Backdash, invencibilidad
                    parcial en startup
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.DOWN]}/></InlineIcon>: Agacharse, cambia
                    hurtbox, accede a ataques agachado
                </li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.UP]}/></InlineIcon>: Saltar, arco neutral</li>
                <li><InlineIcon size={2}><InputSequence sequence={[Input.UP_RIGHT]}/></InlineIcon>: Saltar adelante,
                    salto diagonal ofensivo
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
            <hr></hr>


            <Heading3 id="dressing-restrictions">Restricciones por Aderezo</Heading3>
            <ul>
                <li><b>- Saciado (debuff) </b>: elimina la capacidad de dash y salto durante su duración</li>
            </ul>
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
