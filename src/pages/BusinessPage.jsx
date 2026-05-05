import {Heading1, Heading2} from "../modules/Heading/Heading.jsx"
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";
export default function BusinessPage() {
    return (
        <>
            <Heading1 id="business">Modelo de negocio</Heading1>
            <Heading2 id="mvp">MVP inicial</Heading2>
            <p>
                ## Roster objetivo
                <AlertPanel>TODO: cuando se definan las fases del proyecto, poner cantidad de personajes y de escenarios
                dentro de cada fase</AlertPanel>

                | Fase            | Personajes       | Notas                                |
                | --------------- | ---------------- | ------------------------------------ |
                | **MVP**         | 4-6 personajes   | Cubriendo los arquetipos principales |30000
                | **Lnzmnto Steam** | 8-12 personajes  | Roster completo con 1-2 humanos    |75100
                | **Traduc**      | chino, japo      | Por definir                          |77600
                | **GOG**         | drm free         | Por definir                          |87600
                | **mods,workshop** | coreano y portugués   | Por definir                   |132500
                | **epic games**      | arreglar parches, mantenmiento  | Por definir       |137500
                | **DLC april foods**      | mecáicas nuevas      | Por definir             |170000
                | **Switch**      |                  | Por definir                          |201000
                | **Play 4, Play 5**      | nuevosescenarios y aderezos    | Por definir    |286000
            </p>
            <Heading2 id="roadmap">Roadmap</Heading2>
            <p>
                Futuras expansiones asociadas a hitos económicos
            </p>
            <Heading2 id="partners">Formas de colaborar</Heading2>
            <p>
                Diferentes tiers de donación y sus beneficios asociados
            </p>
            <Heading2 id="launch">Lanzamiento</Heading2>
            <p>
                Plataformas, fechas estimadas, tamaño roster, cantidad escenarios, modos incluidos ...
            </p>
        </>
    );
}
