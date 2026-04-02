import {Outlet} from "react-router-dom";
import Header from "../../modules/Header/Header.jsx";
import {PageProvider} from "../../contexts/PageContext.jsx";
import PageNav from "../../modules/PageNav/PageNav.jsx";

// Estilos
import "./BasePageLayout.css";
import {GlobalNav} from "../../modules/GlobalNav/GlobalNav.jsx";

/**
 * Plantilla de página básica con {@link Header|cabecera},
 * {@link PageNav|barra de navegación de la página} y
 * barra de páginas principales.
 *
 * @example
 * ```jsx
 * <Route element={<BasePageLayout/>}>
 *   <Route path="/" element={<Home/>}/>
 *   <Route path="/combat" element={<Combat/>}/>
 * </Route>
 * ```
 *
 * @returns {React.JSX.Element} - Página con la plantilla
 *
 * @see {@link Outlet}
 * @constructor
 */
export default function BasePageLayout() {
    return (
        <>
            <PageProvider>
                <Header/>
                <div className="base-page-layout">
                    <GlobalNav/>
                    <main className="page-content">
                        <Outlet/>
                    </main>
                    <div className="page-nav-panel side-panel">
                        <PageNav/>
                    </div>
                </div>
            </PageProvider>
        </>
    );
}
