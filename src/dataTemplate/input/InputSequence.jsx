import { InputIcon } from "./InputIcon.jsx";
import { detectMotion } from "./enums/detectMotion.js";

export function InputSequence({ sequence }) {
    const elements = [];
    let buffer = [];

    const flushBuffer = () => {
        let i = 0;

        while (i < buffer.length) {
            let motionDetected = false;

            // Intentamos detectar motions empezando con el slice más largo posible
            for (let size = buffer.length - i; size > 0; size--) {
                const slice = buffer.slice(i, i + size);
                const motion = detectMotion(slice);

                if (motion) {
                    // Si encontramos un motion válido, agregamos la longitud exacta
                    elements.push(slice.slice(0, motion.length));
                    i += motion.length;
                    motionDetected = true;
                    break;
                }
            }

            // Si no se detecta motion, mostramos input individual
            if (!motionDetected) {
                elements.push(buffer[i]);
                i++;
            }
        }

        buffer = [];
    };

    sequence.forEach((input) => {
        if (/^[1-9]$/.test(input)) {
            buffer.push(input);
        } else {
            flushBuffer();
            elements.push(input);
        }
    });
    console.log(elements)
    flushBuffer();

    return (
        <div className="input-sequence-container" style={{ display: "flex", gap: 6}}>
            {elements.map((item, i) => (
                <InputIcon key={i} inputs={item} />
            ))}
        </div>
    );
}