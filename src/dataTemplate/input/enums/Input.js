/**
 * Inputs de direcciones de palanca (numpad) y botones de acción.
 *
 * - **Direcciones**: usa la notación de numpad (1-9)
 * - **Botones**: usa su letra clave (P, K, etc.).
 *
 * @readonly
 * @enum {string}
 */
export const Input = Object.freeze({
    UP_LEFT: "7",
    UP: "8",
    UP_RIGHT: "9",
    LEFT: "4",
    NEUTRAL: "5",
    RIGHT: "6",
    DOWN_LEFT: "1",
    DOWN: "2",
    DOWN_RIGHT: "3",

    P: "P", //puño
    K: "K", //kick
    S: "S", //slash
    HS: "HS", //heavy slash
    D: "D", //dust
    R: "R", //range
    DASH: "DASH",
    TAUNT: "TAUNT",
});