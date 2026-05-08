import "./ArchetypesPanel.css";
import {Archetype} from "../../dataTemplate/fighters/enums/Archetype.js";

const archetypeColors = {
    BALANCE: "#d1d1d1",
    POWER: "#D94B3D",
    ZONER: "#3D7ED9",
    RUSHDOWN: "#D93DAE",
    UNIQUE: "#9B59B6",
    ONESHOT: "#F1C40F",
    GRAPPLER: "#E67E22",
    PUPPET: "#2ECC71",
    STANCE: "#1ABC9C",
};

export default function ArchetypesPanel() {
    return (
        <table className="archetype-table">
            <tbody>
            {Object.entries(Archetype).map(([key, arch]) => (
                <tr key={key}>
                    <td className="archetype-name-cell">
                            <span
                                className="archetype-badge"
                                style={{
                                    backgroundColor: archetypeColors[key] || "#444",
                                }}
                            >
                                {arch.name}
                            </span>
                    </td>

                    <td className="archetype-description">
                        {arch.description}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}