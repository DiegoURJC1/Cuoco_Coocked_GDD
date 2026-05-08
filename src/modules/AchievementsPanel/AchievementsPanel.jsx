import "./AchievementsPanel.css";

export default function AchievementsPanel({ achievements }) {
    return (
        <table className="achievements-table">
            <tbody>
            {Object.entries(achievements).map(([key, achv]) => (
                <tr
                    key={key}
                    className={achv.hidden ? "hidden" : ""}
                >
                    <td className="achievement-name">
                        {achv.name}
                    </td>

                    <td className="achievement-text">
                        {achv.text}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}