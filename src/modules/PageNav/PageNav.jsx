import { usePage } from "../../contexts/PageContext.jsx";
import "./PageNav.css";
import PLink from "../Link/PLink.jsx";


/**
 * Módulo de navegación lateral automática basada en los encabezados `Heading`
 * registrados en {@link usePage|PageContext}.
 *
 * Este componente:
 * - Consume la lista de secciones `sections` del contexto de página.
 * - Genera enlaces ancla `#id` hacia cada encabezado.
 *
 * Flujo de datos:
 * - `Heading.jsx` registra cada encabezado mediante `registerHeading`.
 * - `PageContext` almacena los headings de nivel ≥ 2.
 * - `PageNav` renderiza la navegación con esos datos.
 *
 * Si no hay secciones registradas, el componente no se renderiza.
 *
 * @returns {React.JSX.Element|null} - Barra lateral de navegación de página.
 * @component
 */
export default function PageNav() {
    const { sections } = usePage();

    if (!sections.length) return null;

    return (
        <nav className="page-nav">
            <ul>
                {sections.map(section => (
                    <li key={section.id} className={`level-${section.level}`}>
                        <PLink href={`#${section.id}`}>
                            {section.text}
                        </PLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
