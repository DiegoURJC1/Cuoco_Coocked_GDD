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
                | **MVP**         | 4-6 personajes   | Cubriendo los arquetipos principales |
                | **Lanzamiento** | 8-12 personajes  | Roster completo con 1-2 humanos      |
                | **Post-launch** | DLC / temporadas | Por definir
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
