import "./InlineIcon.css";

/**
 * Contenedor genérico para renderizar iconos inline con tamaño relativo en `em`.
 *
 * - Por defecto, el tamaño es `1em`.
 * - Puedes anidar cualquier icono (ButtonIcon, StickIcon, InputIcon, etc.).
 *
 * @param {Object} props - Props del componente.
 * @param {React.ReactNode} props.children - El icono a renderizar.
 * @param {number|string} [props.size=1] - Tamaño del icono en `em` (número) o valor CSS (string).
 * @param {string} [props.verticalAlign="middle"] - Alineación vertical del icono respecto al texto.
 * @returns {React.JSX.Element} Elemento `<span>` contenedor del icono.
 */
export function InlineIcon({ children, size = 1, verticalAlign = "middle", alignItems = "normal" }) {
    const style = {
        //display: "inline-block",
        width: "auto",
        height: typeof size === "number" ? `${size}em` : size,
        verticalAlign: verticalAlign, // para alinear con el texto, otra opción: "text-bottom" o "middle"
        alignItems: alignItems,
        marginLeft: "auto"
    };

    return <span className="inline-icon-wrapper" style={style}>{children}</span>;
}