import {routes} from "./routes.js";

export const GlossaryCategory = Object.freeze({
    MATCH_STATE: "Estado de la partida",
    PLAYER_STATE: "Estado del jugador",
    FRAME: "Fotogramas",
    AGGRESSION: "Agresión",
    DEFENSE: "Defensa",
    INPUT: "Inputs",
});

const glossary = {
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
    stunLock: {
        name: "Stun Lock",
        content:
            <>
                Estado de un personaje en el que no puede realizar acciones por estar aturdido.
            </>,
        id: "stun-lock",
        categories: [GlossaryCategory.PLAYER_STATE]
    },
    wakeUp: {
        wakeUp: "Wake up",
        content:
            <>
                Estado de un personaje que está en el suelo por haber sido knokeado y realiza su animación automática
                para ponerse de pie.
                La animación de levantarse hace al jugador invulnerable hasta que termine y pueda empezar a realizar
                acciones.
            </>
    },
    chipDamage: {
        name: "Chip Damage",
        content:
            <>
                Del inglés (chip away) es una propiedad de un ataque para quitar pequeñas cantidades de daño con los
                golpes pese a que se bloquea. Ataques de tipo Overdrive hacen este tipo de daño cuando se bloquea.
            </>,
        id: "chip-damage",
        categories: [GlossaryCategory.AGGRESSION]
    },
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
// eslint-disable-next-line react-refresh/only-export-components
export default glossary;

export function getGlossaryLink(glossaryElement) {
    let id = glossaryElement.id;
    return routes.glossary.path + "/" + id;
}
