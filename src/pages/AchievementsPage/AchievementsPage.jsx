import AchievementsPanel from "../../modules/AchievementsPanel/AchievementsPanel.jsx";
import achievements from "../../data/achievements/achievement.jsx";
import {Heading1, Heading2} from "../../modules/Heading/Heading.jsx";


export default function AchievementsPage() {
    return (
        <>
            <Heading1 id="achievements-page">Logros</Heading1>
            <Heading2 id="achievements-description">Información</Heading2>
            <p>
                Los logros de juego deben incentivar a los jugadores a probar distintos aspectos del juego. Aquellos que
                sean más avanzados o secretos no deben mostrarse de primeras.
            </p>
            <Heading2 id="achievements-list">Lista de logos</Heading2>
            <p>
                Pasa el ratón por encima para ver los logros ocultos.
            </p>
            <AchievementsPanel achievements={achievements}/>
        </>
    );
}