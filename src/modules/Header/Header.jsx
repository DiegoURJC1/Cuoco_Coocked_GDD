import {Link} from "react-router-dom";
import {usePage} from "../../contexts/PageContext.jsx";
import "./Header.css";
import HomeIcon from "../../assets/icons/page/home.svg?react"

/**
 * Módulo de cabecera.
 *
 * Muestra:
 * - `title` de {@link usePage|PageContext}.
 * - Navegación a la página inicial.
 * - Ajustes **[Por implementar]**.
 * @returns {React.JSX.Element} - Cabecera
 * @component
 */
export default function Header() {
    const {title} = usePage();

    return (
        <div className="header">
            <div className="page-title">{title}</div>
            <Link to="/" className="home-icon">
                <HomeIcon/>
            </Link>

        </div>
    );
}