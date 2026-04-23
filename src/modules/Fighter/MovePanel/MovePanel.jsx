import "./MovePanel.css";
import { InputSequence } from "../../../dataTemplate/input/InputSequence.jsx";
import { getMoveStateIcon } from "../../../dataTemplate/fighters/moves/enums/MoveState.jsx";
import { InlineIcon } from "../../InlineIcon/InlineIcon.jsx";

export default function MovePanel({ move, fighter = null }) {
    return (
        <div className="move-panel">
            <div className="move-header">
                <div className="name">{move.name}</div>
                <div className="move-input">
                    <InputSequence sequence={move.inputList} />
                </div>
            </div>

            {move.states.map((stateData, idx) => (
                <div key={idx} className="state-section">
                    <div className="state-title">
                        <InlineIcon size={1.5}>{getMoveStateIcon(stateData.state)}</InlineIcon>
                        <div className="state-name">ESTADO: {stateData.state}</div>
                    </div>

                    <div className="frames-container">
                        {stateData.frameList.map((f, i) => (
                            <div key={i} className="frame" style={{ backgroundColor: f.color }} title={f.type?.name}>
                                {f.cancelWindow && <div className="cancel-window" />}
                            </div>
                        ))}
                    </div>

                    <div className="stats-grid">
                        <StatItem label="Daño" value={stateData.moveData.damage.join(' / ')} />
                        <StatItem label="Guard" value={Array.isArray(stateData.moveData.guard) ? stateData.moveData.guard.join(', ') : stateData.moveData.guard} />
                        <StatItem label="On Block" value={stateData.moveData.onBlock.map(n => (n > 0 ? `+${n}` : n)).join(' / ')} colorize />
                        <StatItem label="Total" value={`${stateData.frameList.length} f`} />
                        {stateData.moveData.invuln && <div className="stat-invuln">Invulnerable</div>}
                    </div>
                </div>
            ))}

            {move.description && (
                <div className="description">
                    {typeof move.description === "function" ? move.description(fighter) : move.description}
                </div>
            )}
        </div>
    );
}

function StatItem({ label, value, colorize = false }) {
    let colorClass = "";
    if (colorize) {
        const firstVal = parseInt(value);
        if (firstVal > 0) colorClass = "pos";
        else if (firstVal < 0) colorClass = "neg";
    }
    return (
        <div className="stat-item">
            <span className="stat-label">{label}:</span>
            <span className={`stat-value ${colorClass}`}>{value}</span>
        </div>
    );
}