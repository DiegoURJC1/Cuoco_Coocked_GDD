import {useEffect, useRef} from "react";
import {usePage} from "../../contexts/PageContext.jsx";

import "./Heading.css";

/**
 * Módulo que encapsula `<h1>`, `<h2>`...
 *
 * Se utiliza en conjunto con {@link usePage|PageContext}  para registrar su información.
 *
 * El contexto `PageContext` lee el texto, Id y nivél de cada header para colocarlo
 * en los módulos.
 *
 * No usar {@Link Heading}. Usar {@link Heading1}, {@link Heading2},
 * {@link Heading3}... para un `Heading` determinado
 *
 * @example
 * ```jsx
 * <Heading1 id="home">Home</Heading1>
 * ```
 * @example
 * ```jsx
 * <Heading2 id="home-links">Enlaces</Heading2>
 * ```
 *
 * @param {number} level Nivel del header 1 - 6
 * @param {string} id Id del header **único**
 * @param {React.JSX.Element} children Texto del header
 *
 * @returns {React.JSX.Element}
 * @see {@link usePage} para información del contexto
 * @constructor
 */
function Heading({level = 1, id, children}) {
    const Tag = `h${level}`;
    const ref = useRef(null);
    const {registerHeading, setActiveSection} = usePage();

    useEffect(() => {
        registerHeading({
            level,
            id,
            text: children
        });

    }, [level, id, children, registerHeading, setActiveSection]);

    return (
        <Tag ref={ref} id={id}>
            {children}
        </Tag>
    );
}

/**
 * Componente que renderiza un `<h1>` y lo registra en el contexto `PageContext`.
 *
 * @param {Object} props Propiedades del componente
 * @param {string} props.id Id del header **único**
 * @param {React.ReactNode} props.children Contenido del header
 *
 * @returns {React.JSX.Element} Elemento `<h1>`
 *
 * @example
 * <Heading1 id="home">Home</Heading1>
 */
export const Heading1 = props => <Heading level={1} {...props} />;
export const Heading2 = props => <Heading level={2} {...props} />;
export const Heading3 = props => <Heading level={3} {...props} />;
export const Heading4 = props => <Heading level={4} {...props} />;
export const Heading5 = props => <Heading level={5} {...props} />;
export const Heading6 = props => <Heading level={6} {...props} />;