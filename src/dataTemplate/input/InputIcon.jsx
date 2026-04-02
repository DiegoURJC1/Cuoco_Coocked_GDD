import { ButtonIcon } from "./ButtonIcon.jsx";
import { StickIcon } from "./StickIcon.jsx";
import { detectMotion } from "./enums/detectMotion.js";
import {LookDirection} from "./enums/LookDirection.js";

/**
 * Renderiza un input como icono.
 *
 * Este componente maneja tres casos:
 * 1. **Motion**: si `inputs` es un array que coincide con un motion input.
 * 2. **Direcciones individuales**: renderiza cada dirección como un `StickStraight`.
 * 3. **Botón**: si `inputs` es un string de botón renderiza usando `ButtonIcon`.
 *
 * @param {Object} props
 * @param {string|string[]|number[]} props.inputs - Input(s) a renderizar
 * @returns {React.JSX.Element|React.JSX.Element[]} El/los iconos correspondientes al input
 */
export function InputIcon({ inputs }) {
    // Motion input
    if (Array.isArray(inputs)) {
        const motion = detectMotion(inputs);

        if (motion) {
            return (
                <StickIcon
                    type={motion.type.toLowerCase()}
                    direction={motion.dir}
                    flip={motion.dir === LookDirection.LEFT}
                />
            );
        }
        // Fallback: array de direcciones individuales
        return inputs.map((i, idx) => (
            <StickIcon key={idx} type="straight" direction={i} />
        ));
    }

    // Dirección individual
    if (/^[1-9]$/.test(inputs)) {
        return <StickIcon type="straight" direction={inputs} />;
    }

    // Botón
    return <ButtonIcon input={inputs} />;
}