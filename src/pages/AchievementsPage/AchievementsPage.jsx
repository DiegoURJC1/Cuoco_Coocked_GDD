import AchievementsPanel from "../../modules/AchievementsPanel/AchievementsPanel.jsx";
import achievements from "../../data/achievements/achievement.jsx";


export default function AchievementsPage() {
    return (
        <>
            <AchievementsPanel achievements={achievements}/>
        </>
    );
}