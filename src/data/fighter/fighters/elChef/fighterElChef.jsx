import {Fighter} from "../../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../../dataTemplate/fighters/enums/Archetype.js";
import {Source,} from "../../../../dataTemplate/fighters/enums/Source.js";
import {chefMoveSet} from "./moveSetElChef.jsx";

export const fighterElChef = new Fighter({
    name: "El Chef",
    archetype: Archetype.ZONER,
    description: () => (
        <>
            <b>Descripción:</b> Chef Maestro Rinaldo Accatino es la anomalía humana del roster,
            un cocinero de alta cocina con tres estrellas Michelin que actualmente trabaja como
            luchador profesional. Su chaquetilla blanca inmaculada va manchándose durante el combate
            como indicador ambiental. Porta un tenedor del tamaño de un tridente y un cinturón
            repleto de botes de salsas, especias y condimentos.
            <br></br>
            <br></br>
            Su estilo de combate es el más exigente del roster a nivel conceptual. No tiene un gran
            volumen de ataques, lo que tiene es variedad de <b>aderezos</b> aplicables: quemado (DoT continuo), pringoso
            (reduce
            velocidad) y mareado (inputs invertidos).
            La curva de aprendizaje no está en los inputs sino en saber
            qué aderezo aplicar, cuándo, y anticipar cómo el rival va a reaccionar. Un jugador
            de El Chef mediocre lanza salsas aleatoriamente. Uno experto convierte cada aderezo en
            el setup de su siguiente acción.
            <br/><br/>
        </>
    ),
    easyToUse: 2.0,

    source: Source.BASE_GAME,

    icon: "",
    fullArt: "../../../public/fighters/fullart/el-chef_fullArt.png",
    portraitConfig: {
        x: 0.4,
        y: -0.4,
        zoom: 1.5,
    },
    moveSet: chefMoveSet
});