import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routes/routes.js";

export default function DiagramNavigation() {
    const navigate = useNavigate();

    useEffect(() => {

        const diagramRoutes = Object.values(routes.interfaces.menuDiagram)
            .reduce((acc, item) => {
                acc[item.id] = item.path;
                return acc;
            }, {});

        function handleClick(event) {

            const node = event.target.closest(".flow-diagram-node");

            if (!node) return;

            const id = node.id;

            if (!id) return;

            const route = diagramRoutes[id];

            if (!route) return;

            navigate(route);
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };

    }, [navigate]);

    return null;
}