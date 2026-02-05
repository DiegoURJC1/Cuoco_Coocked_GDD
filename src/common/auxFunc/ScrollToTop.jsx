import {useLocation} from "react-router-dom";
import {useEffect, useRef} from "react";

/**
 * Gestiona el scroll al cambiar la URL
 *
 * Alterna entre scroll de tipo 'smooth' e 'instant'
 * según si se trata de un cambio en una página nueva
 * o en la actual.
 *
 * Cambio entre páginas:
 *
 * 'instant' si no se hace, el scroll se conserva entre páginas.
 *
 * Cambio entre secciones en una misma página:
 *
 * 'smooth'
 *
 * Cambio entre secciones de páginas distintas:
 *
 * 'instant' para cambiar de página y
 * 'smooth' para desplazar a la sección.
 *
 * @returns {null}
 * @constructor
 */
export default function ScrollToTop() {
    const {pathname, hash} = useLocation();
    const prevPathname = useRef(pathname);

    // Comprobar cambios en el PATH
    useEffect(() => {
        const samePage = prevPathname.current === pathname;

        if (samePage) {
            scrollToHash(hash);
            return;
        }

        scrollToTopInstant();
        scrollToHash(hash, {waitForRender: true});

        prevPathname.current = pathname;
    }, [pathname, hash]);

    return null;
}


function getIdFromHash(hash) {
    return hash ? hash.replace("#", "") : null;
}

function scrollToHash (hash, {waitForRender = false} = {}) {
    const id = getIdFromHash(hash);
    if (!id) return;

    const scroll = () => {
        const el = document.getElementById(id);
        el?.scrollIntoView({behavior: "smooth"});
    };

    return waitForRender ? requestAnimationFrame(scroll) : scroll();
}

function scrollToTopInstant() {
    window.scrollTo({top: 0, behavior: "instant"});
}