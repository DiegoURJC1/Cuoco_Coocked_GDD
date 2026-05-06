import {routes} from "./routes.js";
import PLink from "../modules/Link/PLink.jsx";
import {InlineIcon} from "../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../dataTemplate/input/InputSequence.jsx";
import {Input} from "../dataTemplate/input/enums/Input.js";

export const GlossaryCategory = Object.freeze({
    MATCH_STATE: "Estado de la partida",
    PLAYER_STATE: "Estado del jugador",
    FRAME: "Fotogramas",
    OFFENSIVE: "Ofensivo",
    DEFENSE: "Defensa",
    INPUT: "Inputs",
});


const frameDataTerms = {
    startup: {
        name: "Startup",
        content: <>
            Fase inicial de un ataque, desde que se pulsa el botón hasta que el golpe puede conectar (estar <PLink
            href={getGlossaryLink({id: "active-frames"})}>activo</PLink>).
        </>,
        id: "startup",
        categories: [GlossaryCategory.FRAME]
    },
    activeFrames: {
        name: "Active Frames",
        content: <>
            Fotogramas en los que el ataque tiene "hitbox" y puede golpear al oponente.
        </>,
        id: "active-frames",
        categories: [GlossaryCategory.FRAME]
    },
    recoveryFrames: {
        name: "Recovery Frames",
        content: <>
            Fase final de un ataque donde el personaje recupera su postura. No se pueden realizar acciones y se
            es vulnerable.
        </>,
        id: "recovery-frames",
        categories: [GlossaryCategory.FRAME]
    }
};

const frameAdvantageTerms = {
    plusFrames: {
        name: "Plus on Block (+)",
        content:
            <>
                Situación en la que el atacante termina su animación de ataque y recuperación <b>antes</b> de que el
                defensor salga de su <i>blockstun</i>. Se dice que el atacante está "positivo". Es su turno de
                seguir presionando, ya que su siguiente ataque saldrá antes que cualquier respuesta del rival.
            </>,
        id: "plus-on-block",
        categories: [GlossaryCategory.FRAME]
    },
    minusOnBlock: {
        name: "Minus on Block (-)",
        content:
            <>
                Situación en la que el atacante termina su animación <b>después</b> de que el defensor se haya
                recuperado. El atacante está "negativo". En este estado, el defensor suele recuperar el "turno"
                para atacar, y si la desventaja es muy grande, puede ser castigado.
            </>,
        id: "minus-on-block",
        categories: [GlossaryCategory.FRAME]
    },
    safeOnBlock: {
        name: "Safe on Block",
        content:
            <>
                Un ataque es "seguro" cuando, a pesar de estar en negativo (<i>minus</i>), la desventaja es tan pequeña
                que el oponente no tiene ningún ataque lo suficientemente rápido para castigarlo antes de que pueda
                bloquear.
            </>,
        id: "safe-on-block",
        categories: [GlossaryCategory.DEFENSE, GlossaryCategory.FRAME]
    }
};

const stateTerms = {
    stunLock: {
        name: "Stun Lock",
        content:
            <>
                Estado de un personaje en el que no puede realizar acciones por estar aturdido.
            </>,
        id: "stun-lock",
        categories: [GlossaryCategory.PLAYER_STATE]
    },
    hitstun: {
        name: "Hitstun",
        content:
            <>
                Estado de incapacidad tras recibir un golpe. Si se recibe otro golpe en este estado, se forma un combo.
            </>,
        id: "hitstun",
        categories: [GlossaryCategory.PLAYER_STATE]
    },
    blockstun: {
        name: "Blockstun",
        content:
            <>
                Estado de incapacidad tras bloquear un ataque. El jugador debe esperar a que termine para actuar.
            </>,
        id: "blockstun",
        categories: [GlossaryCategory.DEFENSE]
    },
    wakeUp: {
        name: "Wake up",
        content:
            <>
                Animación automática de un personaje al levantarse del suelo tras un derribo (knockdown).
            </>,
        id: "wake-up",
        categories: [GlossaryCategory.PLAYER_STATE]
    },
    knockDown: {
        name: "Knock Down",
        content:
            <>
                Derribo que deja en el suelo en un estado que no permite realizar acciones. Los ataques pueden tener
                esta propiedad.
            </>,
        id: "knock-down",
        categories: [GlossaryCategory.PLAYER_STATE, GlossaryCategory.OFFENSIVE]
    }
};

const interactionTerms = {
    punish: {
        name: "Punish (Castigo)",
        content:
            <>
                Golpear al oponente mientras está en su fase de <i>recovery</i> tras haber fallado un ataque o haber
                usado un movimiento muy negativo en bloque. Un castigo es garantizado ya que el rival no puede bloquear.
            </>,
        id: "punish",
        categories: [GlossaryCategory.OFFENSIVE]
    },
    counterHit: {
        name: "Counter Hit",
        content:
            <>
                Golpear al oponente mientras este se encuentra en la fase de <i>startup</i> de su propio ataque.
                Suele otorgar beneficios adicionales como mayor daño, más <i>hitstun</i> o propiedades especiales de
                combo.
            </>,
        id: "counter-hit",
        categories: [GlossaryCategory.OFFENSIVE]
    }
};

const offensiveTerms = {
    chipDamage: {
        name: "Chip Damage",
        content:
            <>
                Del inglés (chip away) es una propiedad de un ataque para quitar pequeñas cantidades de daño con los
                golpes pese a que se bloquea. Ataques de tipo Overdrive hacen este tipo de daño cuando se bloquea.
            </>,
        id: "chip-damage",
        categories: [GlossaryCategory.OFFENSIVE]
    },
    meaty: {
        name: "Meaty",
        content:
            <>
                Atacar al oponente justo cuando se levanta (wake up) para que coincida con los fotogramas activos
                finales
                del golpe, ganando ventaja de frames.
            </>,
        id: "meaty",
        categories: [GlossaryCategory.OFFENSIVE]
    },
    overhead: {
        name: "Overhead",
        content:
            <>
                Ataque que debe ser bloqueado de pie. Si el oponente bloquea agachado, recibirá el golpe.
            </>,
        id: "overhead",
        categories: [GlossaryCategory.OFFENSIVE]
    },
    mixUp: {
        name: "Mix-up",
        content:
            <>
                Situación donde el atacante obliga al rival a adivinar entre varias opciones defensivas (ej:
                arriba/abajo o golpe/agarre).
            </>,
        id: "mix-up",
        categories: [GlossaryCategory.OFFENSIVE]
    }
};

const defensiveTerms = {
    parry: {
        name: "Parry",
        content:
            <>
                Movimiento de palanca hacia delante <InlineIcon size={2}><InputSequence
                sequence={[Input.RIGHT]}/></InlineIcon> en un margen de hasta 4 frames antes de recibir un ataque para
                anularlo completamente si se está en el suelo y el ataque es de frente u <b>overhead</b>. Ofrece ventaja
                por estar en frame positivo y no distanciar a los jugadores entre
                si.
                <br/>
                Si el ataque es en el suelo y es un golpe bajo o el jugador está en el aire el parry se hace con la
                palanca hacia abajo <InlineIcon size={2}><InputSequence
                sequence={[Input.DOWN]}/></InlineIcon>.
            </>
    },
    reversal: {
        name: "Reversal",
        content:
            <>
                Realizar un movimiento especial (generalmente invulnerable) en el primer fotograma posible tras salir de
                un estado de incapacidad.
            </>,
        id: "reversal",
        categories: [GlossaryCategory.DEFENSE]
    },
    tech: {
        name: "Tech",
        content:
            <>
                Acción de zafarse de un agarre o recuperarse rápidamente de una caída (Soft/Hard Knockdown).
            </>,
        id: "tech",
        categories: [GlossaryCategory.DEFENSE]
    }
};

const positioningTerms = {
    neutral: {
        name: "Neutral",
        content:
            <>
                Estado en el que ambos jugadores no se encuentran en condiciones claramente favorables o
                desfavorables para cada uno. Una partida empieza siempre en un estado <i>neutral</i>.
            </>,
        id: "neutral",
        categories: [GlossaryCategory.MATCH_STATE]
    },
    okizeme: {
        name: "Okizeme (Oki)",
        content:
            <>
                Palabra japonesa que define la situación de ventaja del atacante sobre un oponente que está en el suelo.
                El atacante puede preparar ataques (como un <i>Meaty</i>) o un <i>Mix-up</i> sabiendo exactamente
                cuándo y dónde se levantará el rival.
            </>,
        id: "okizeme",
        categories: [GlossaryCategory.OFFENSIVE, GlossaryCategory.MATCH_STATE]
    },
    cornerPressure: {
        name: "Corner Pressure",
        content:
            <>
                Situación en la que un jugador tiene al oponente contra la esquina (el límite del escenario).
                El defensor pierde la capacidad de retroceder, lo que facilita al atacante mantener su distancia ideal
                y aplicar <i>Mix-ups</i> más peligrosos.
            </>,
        id: "corner-pressure",
        categories: [GlossaryCategory.MATCH_STATE]
    },
    zoning: {
        name: "Zoning",
        content:
            <>
                Estrategia basada en mantener al oponente a una distancia específica, generalmente lejos,
                utilizando proyectiles o ataques de largo alcance para impedir que el rival inicie su ofensiva.
            </>,
        id: "zoning",
        categories: [GlossaryCategory.OFFENSIVE]
    }
};

const combo = {
    trueCombo: {
        name: "True Combo",
        content:
            <>
            Un combo verdadero es una combinación de ataques en el que en ningún momento el jugador rival sale del
            estado <PLink href={getGlossaryLink(stateTerms.hitstun)}>hit stun</PLink>.
            </>,
        id: "true-combo",
        categories: [GlossaryCategory.OFFENSIVE]
    }
}

const collisionTerms = {
    hitbox: {
        name: "Hitbox",
        content:
            <>
                Área invisible asociada a un ataque que determina dónde puede hacer daño. Si la
                <i>hitbox</i> de tu ataque entra en contacto con la <i>hurtbox</i> del oponente,
                el golpe conectará.
            </>,
        id: "hitbox",
        categories: [GlossaryCategory.FRAME]
    },
    hurtbox: {
        name: "Hurtbox",
        content:
            <>
                Área invisible que define el espacio que ocupa el cuerpo de tu personaje. Si una
                <i>hitbox</i> enemiga toca tu <i>hurtbox</i>, recibirás daño. Durante ciertos ataques,
                las <i>hurtboxes</i> pueden cambiar de forma o incluso desaparecer (invulnerabilidad).
            </>,
        id: "hurtbox",
        categories: [GlossaryCategory.FRAME]
    },
    proximityBlock: {
        name: "Proximity Guard",
        content:
            <>
                Mecánica que obliga al personaje a entrar en animación de bloqueo cuando una
                <i>hitbox</i> activa está cerca, incluso si el ataque aún no ha tocado su
                <i>hurtbox</i>. Esto impide que el defensor camine hacia atrás libremente.
            </>,
        id: "proximity-guard",
        categories: [GlossaryCategory.DEFENSE]
    },
    projectile: {
        name: "Projectile (Proyectil)",
        content:
            <>
                Un objeto o energía disparada que posee su propia <i>hitbox</i> y viaja de forma
                independiente al cuerpo del personaje. Es la herramienta principal del
                <PLink href={getGlossaryLink(positioningTerms.zoning)}>Zoning</PLink>.
            </>,
        id: "projectile",
        categories: [GlossaryCategory.OFFENSIVE]
    },
    invincibility: {
        name: "Invincibility (Invulnerabilidad)",
        content:
            <>
                Estado en el que las <i>hurtboxes</i> del personaje son ignoradas total o parcialmente
                por las <i>hitboxes</i> del rival. Común en movimientos tipo
                <PLink href={getGlossaryLink(defensiveTerms.reversal)}>Reversal</PLink>.
            </>,
        id: "invincibility",
        categories: [GlossaryCategory.DEFENSE]
    },
    clash: {
        name: "Clash (Choque)",
        content:
            <>
                Ocurre cuando las <i>hitboxes</i> de dos ataques activos chocan entre sí sin tocar
                las <i>hurtboxes</i> de los personajes. Dependiendo del juego, esto puede anular
                ambos ataques o generar un efecto visual especial.
            </>,
        id: "clash",
        categories: [GlossaryCategory.MATCH_STATE]
    }
};

const inputTerms = {
    inputBuffer: {
        name: "Input buffer",
        content:
            <>
                El Input Buffer es una lista interna que se actualiza constante mente con las pulsaciones de botones y
                movimientos de palancas.
                <br/>
                Esta lista también guarda el instante en el que se hace cada acción y tiene un limitador para los
                movimientos de palanca que impide la captura infinita de la posición de la palanca cuando se inclina en
                una cierta dirección.
                <br/>
                Esta lista es releida cada vez que cambia para comprobar si se cumplen las condiciones para realizar
                movimientos especiales.
                <br/>
                Los parámetros de medición del Input Buffer definen la dificultad o facilidad para realizar motion
                inputs.
            </>,
        id: "input-buffer",
        categories: [GlossaryCategory.INPUT]
    },
    motionInput: {
        name: "Motion Input",
        content:
            <>
                Acción física del jugador para realizar una cierta acción que exige una combinación de pulsación de
                botón y movimiento específico de palanca.
                <b/>
                El Input Buffer define la facilidad o dificultad para realizar uno exitosamente.
            </>,
        id: "motion-input",
        categories: [GlossaryCategory.INPUT]
    }
};


const glossary = {


    ...frameDataTerms,
    ...frameAdvantageTerms,
    ...stateTerms,
    ...interactionTerms,
    ...offensiveTerms,
    ...defensiveTerms,
    ...positioningTerms,
    ...combo,
    ...collisionTerms,
    ...inputTerms
};
// eslint-disable-next-line react-refresh/only-export-components
export default glossary;

// eslint-disable-next-line react-refresh/only-export-components
export function getGlossaryLink(glossaryElement) {
    let id = glossaryElement.id;
    return routes.glossary.path + "#" + id;
}
