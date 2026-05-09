import {Stage} from "../../../dataTemplate/stage/Stage.jsx";
import {routes} from "../../../routes/routes.js";
import PLink from "../../../modules/Link/PLink.jsx";
import {fighterPeppemoldy} from "../../fighter/fighters/peppemoldy/fighterPeppemoldy.jsx";

export const StageBasurero = new Stage({
    name: "Basurero",
    description: () => (
        <>
        <p>
            La parte trasera de un restaurante abandonado. Ahora sólo lo habitan una cocinera fantasma que se cuela en
            la cocina para practicar. Éste sigue utilizando el basurero para deshacerse de los desechos de la cocina,
            pero como el restaurante ha salido de la ruta de los basureros, se queda acumulada. Esto lo hace uno de los
            callejones más fétidos de la ciudad. De hecho, se dice que el olor es tan intenso, que se rumorea que ha
            dado lugar a diversas mutaciones del mundo de la comida, como el misterioso <PLink href={`${routes.fighters.path}/${fighterPeppemoldy.id}`}>Peppemoldy</PLink>.
        </p>

        <p>
            Los jugadores pueden utilizar los cubos de basura y el toldo del antiguo restaurante para elevarse respecto a sus contrincantes, por lo que es
            el lugar perfecto para practicar los movimientos desde arriba. Además, también se puede hacer uso de las
            bolsas de basura para protegerse de ataques ajenos.
        </p>
        </>
    ),
    imageName: "basurero.png"
});