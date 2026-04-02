import Punch from "../../assets/icons/input/Punch Icon.svg?react";
import Kick from "../../assets/icons/input/Kick Icon.svg?react";
import Slash from "../../assets/icons/input/Slash Icon.svg?react";
import HeavySlash from "../../assets/icons/input/Heavy Slash Icon.svg?react";
import Dust from "../../assets/icons/input/Dust Icon.svg?react";
import Dash from "../../assets/icons/input/Dash Icon.svg?react";
import Taunt from "../../assets/icons/input/Taunt Icon.svg?react";
import {Input} from "./enums/Input.js";

/**
 * Mapa de botones de acción a sus iconos correspondientes.
 *
 * - **P**: Puño
 * - **K**: Patada
 * - **S**: Slash
 * - **HS**: Heavy Slash
 * - **D**: Dust
 * - **DASH**: Dash
 * - **TAUNT**: Taunt
 *
 * @readonly
 * @enum {React.ComponentType}
 */
const ButtonMap = {
    [Input.P]: Punch,
    [Input.K]: Kick,
    [Input.S]: Slash,
    [Input.HS]: HeavySlash,
    [Input.D]: Dust,
    [Input.DASH]: Dash,
    [Input.TAUNT]: Taunt,
};

/**
 * Componente que renderiza el icono de un botón de acción.
 *
 * @param {Object} props
 * @param {string} props.input - La clave del botón (P, K, S, HS, D, DASH, TAUNT)
 * @param {Object} [props.size] - Tamaño del icono
 * @returns {React.JSX.Element|null} El icono del botón o null si la clave no existe
 */
export function ButtonIcon({input, size = {width: "auto", height: "100%"}}) {
    const Comp = ButtonMap[input];
    if (!Comp) return null;

    const {width, height} = size;
    return <Comp style={{width, height}}/>;
}