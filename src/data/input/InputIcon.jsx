import { ButtonIcon } from "./ButtonIcon";
import { StickIcon } from "./StickIcon";
import { detectMotion } from "./enums/detectMotion.js";

export function InputIcon({ inputs }) {
    if (Array.isArray(inputs)) {
        const motion = detectMotion(inputs);

        if (motion) {
            return (
                <StickIcon
                    type={motion.type.toLowerCase()}
                    direction={motion.dir}
                    flip={motion.dir === "4"}
                />
            );
        }
        // fallback: array de direcciones individuales
        return inputs.map((i, idx) => (
            <StickIcon key={idx} type="straight" direction={i} />
        ));
    }

// fallback: si es un solo número → dirección individual
    if (/^[1-9]$/.test(inputs)) {
        return <StickIcon type="straight" direction={inputs} />;
    }

    // Botón
    return <ButtonIcon input={inputs} />;
}