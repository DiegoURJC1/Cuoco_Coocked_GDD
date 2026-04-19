import {Stage} from "../../../dataTemplate/stage/Stage.jsx";
import {Archetype} from "../../../dataTemplate/fighters/enums/Archetype.js";

export const StageBasurero = new Stage({
    name: "Basurero",
    description: () => (
        <>
            La parte trasera de un restaurante. El ruido de la cocina ahoga cualquier ruido
            de lo que ocurre en su parte trasera. Es aquí donde se tira toda la comida del restaurante al
            final del día.
        </>
    ),
    imageName: "basurero.png"
});