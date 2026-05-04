import {Link, useLocation} from "react-router-dom";
import {LinkType} from "./LinkType.js";
import "./PLink.css";
/**
 * Expresión regular para detectar enlaces a archivos estáticos.
 *
 * Los archivos enlazados deben existir en la carpeta /public
 * para que el navegador pueda acceder a ellos directamente.
 */
const FILE_REGEX = /\.(pdf|jpg|jpeg|png|gif|svg|mp4|webm|mp3|wav|zip)$/i;

/**
 * Componente de enlace universal.
 *
 * Vincula a:
 *  - Navegación interna entre rutas
 *  - Navegación a secciones mediante hash `#id`
 *  - Enlaces externos
 *  - Enlaces a archivos estáticos del proyecto
 *
 * **IMPORTANTE:**
 *
 * Los enlaces internos (incluidos los hashes) usan `Link` de React Router
 * para garantizar que el cambio de URL dispare correctamente los efectos
 * dependientes de `useLocation` (por ejemplo, scroll suave entre secciones).
 *
 *
 * @param {Object} props
 * @param {ReactNode|JSX.Element|string} props.children
 *        Contenido del enlace.
 *
 * @param {string} props.href
 *        Destino del enlace:
 *        - "/ruta"        -> ruta interna
 *        - "/ruta#hash"   -> ruta + sección
 *        - "#hash"        -> sección actual
 *        - "https://..."  -> enlace externo
 *        - "/archivo.ext" -> archivo en /public
 *
 * @param {string} props.[className=""]
 *        Clases CSS adicionales.
 *
 * @param {boolean} props.[download=false]
 *        Fuerza la descarga en enlaces a archivos.
 */
export default function PLink(
    {
        children,
        href,
        className = "",
        download = false,
    }) {
    const {hash} = useLocation();

    const linkType = getLinkType(href);

    // Enlaces externos y archivos internos estáticos en /public
    if (linkType !== LinkType.INTERNAL) {
        return (
            <a
                className={`link ${className}`}
                href={href}
                target="_blank"
                rel={linkType === LinkType.EXTERNAL ? "noopener noreferrer" : undefined}
                download={linkType === LinkType.FILE ? download : undefined}
            >
                {children}
            </a>
        );
    }

    // rutas internas con React Router
    return (
        <Link className={`link ${className}`} to={href} onClick={handleSameHashClick(href, hash)}>
            {children}
        </Link>
    );
}

/**
 * Determina el tipo de enlace a partir de su `href`.
 *
 * @param {string} href - Enlace al que navegar.
 * @returns {string} - Uno de los valores de {@link LinkType}.
 */
function getLinkType(href) {
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return LinkType.EXTERNAL;
    } else if (FILE_REGEX.test(href)) {
        return LinkType.FILE;
    } else {
        return LinkType.INTERNAL;
    }
}

/**
 * Fuerza el desplazamiento suave (*smooth scroll*) cuando se hace clic
 * en un enlace que apunta al **mismo hash actualmente activo**.
 *
 * Esto es necesario porque React Router **no dispara navegación**
 * cuando la URL no cambia, por lo que el scroll no se ejecuta
 * automáticamente.
 *
 * @example
 * ```text
 * URL actual:  /home#characters
 * Clic en:    /home#characters
 * Resultado:   smooth scroll hasta la sección #characters
 * ```
 *
 * @example
 * ```jsx
 * <Link
 *   to={href}
 *   onClick={handleSameHashClick(href, hash)}
 * />
 * ```
 *
 * @param {string} href - Enlace a una página del proyecto.
 * @param {string} currentHash - Sección actual del URL.
 * @returns {(function(*): void)|*} - Handler del evento `onClick`
 * que fuerza _`smooth` scroll_ a una sección de página.
 */
const handleSameHashClick = (href, currentHash) => () => {
    const targetId = href.includes("#") ? href.split("#").pop() : null;
    const currentId = currentHash.replace("#", "");

    if (targetId && targetId === currentId) {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }
};
