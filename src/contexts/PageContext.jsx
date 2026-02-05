import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageContext = createContext(null);

/**
 * Contexto que devuelve información sobre ciertos elementos de la
 * página destinados a la navegación.
 *
 *
 * @param {ReactNode} children - Contenido que utiliza el contexto `PageContext`.
 * @returns {React.JSX.Element}
 * @constructor
 */
export function PageProvider({ children }) {
    const location = useLocation();

    const [title, setTitle] = useState("");
    const [sections, setSections] = useState([]);
    const [activeSection, setActiveSection] = useState(null);

    // Reset cuando cambia de página
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTitle("");
        setSections([]);
        setActiveSection(null);
    }, [location.pathname]);

    const registerHeading = ({ level, id, text }) => {
        if (level === 1) {
            setTitle(text);
        } else {
            setSections(prev => {
                if (prev.find(s => s.id === id)) return prev;
                return [...prev, { id, level, text }];
            });
        }
    };

    /**
     * Registra un heading dentro del contexto.
     *
     * - Si el nivel es 1, se establece como título de la página
     * - Si el nivel es ≥ 2, se agrega a la lista de secciones
     * - Evita duplicados por `id`
     *
     * @param {Object} data
     * @param {number} data.level
     *        Nivel del heading (1 - 6).
     *
     * @param {string} data.id
     *        Id del heading.
     *
     * @param {React.ReactNode} data.text
     *        Texto del heading.
     */
    return (
        <PageContext.Provider value={{
            title, // Heading1
            sections, // Heading ≥ 2
            activeSection,
            setActiveSection,
            registerHeading
        }}>
            {children}
        </PageContext.Provider>
    );
}

export const usePage = () => useContext(PageContext);
