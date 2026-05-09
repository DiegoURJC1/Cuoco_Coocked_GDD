import {Stage} from "../../../dataTemplate/stage/Stage.jsx";
import PLink from "../../../modules/Link/PLink.jsx";
import {routes} from "./../../../routes/routes.js";

export const StageTrainBar = new Stage({
    name: "Bar La Pelusa",
    description: () => (
        <>
            <p>
                La aclamada cadena de bar restaurantes <b>La Pelusa</b> ahora en movimiento.
            </p>
            <p>
                Este gran restaurante conocido por su limpieza y cuidado ahora disponible en una serie de
                trenes de alta gama para pasajeros. Disfruta de su comida y debida tanto en mesa como en barra.
                Esperemos que siga así de limpio mucho tiempo.
            </p>
            <p>
                La vista del escenario hace como si no existiese una de las paredes del vagón en el que ocurre la
                acción. Dejando el espacio horizontal del vagón como el terreno jugable. El techo es lo suficientemente
                alto como para que ningún personaje pueda chocarse con él. Las paredes del escenario son físicas al
                tratarse de los límites del propio tren con sus puertas.
            </p>
            <p>
                En este escenario es posible ver los distintos lugares por donde pasa el tren en el que está el bar
                restaurante.
                Cuando los modificadores están activados, varios mueves como las mesas, taburetes y sillas son elementos
                interactuables.
                Además, tanto las mesas como la barra pueden contener <PLink
                href={routes.dressings.path}>aderezos</PLink>. La intención es ofrecerlos en el centro
                del escenario y
                evitar ponerlos en los límites. Esto puede sugestionar al que lleva la delantera en el terreno a no
                presionar tanto en
                el límite del escenario y a aquel que consigue el centro un gran control que permita remontar.
            </p>
        </>
    ),
    imageName: "stageTrainBar.jpg"
});