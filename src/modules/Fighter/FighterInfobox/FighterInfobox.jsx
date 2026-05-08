import "./FighterInfobox.css";
import Stars from "../Star/Stars.jsx";

/**
 * @param {{ fighter: Fighter }} props
 */
export default function FighterInfobox({ fighter }) {
    return (
        <aside className="fighter-infobox">
            <div className="fighter-infobox__header">
                <div className="fighter-infobox__portrait">
                    <div className="fighter-infobox__portrait-default">
                        {fighter.portraitArt}
                    </div>

                    <div className="fighter-infobox__portrait-full">
                        {fighter.fullArtImg}
                    </div>
                </div>

                <div className="fighter-infobox__identity">
                    <h2>{fighter.name}</h2>

                    {fighter.nickName && (
                        <p className="fighter-infobox__nickname">
                            "{fighter.nickName}"
                        </p>
                    )}
                </div>
            </div>

            <div className="fighter-infobox__section">
                <h3>Información</h3>

                <div className="fighter-infobox__grid">
                    <InfoRow
                        label="Tipo"
                        value={fighter.type}
                    />

                    <InfoRow
                        label="Arquetipo"
                        value={fighter.archetype?.name ?? "—"}
                    />

                    <InfoRow
                        label="Origen"
                        value={fighter.source?.name ?? "—"}
                    />

                    <InfoRow
                        label="Dificultad"
                        value={
                            <div className="fighter-infobox__stars">
                                <Stars stars={fighter.easyToUse} />
                            </div>
                        }
                    />
                </div>
            </div>

            <div className="fighter-infobox__section">
                <h3>Stats Base</h3>

                <div className="fighter-infobox__stats">
                    <StatBar
                        label="Vida"
                        value={fighter.baseStats.health}
                        max={500}
                        color="#e74c3c"
                    />

                    <StatBar
                        label="Walk Speed"
                        value={fighter.baseStats.walkSpeed}
                        max={100}
                        color="#3498db"
                    />

                    <StatBar
                        label="Run Speed"
                        value={fighter.baseStats.runSpeed}
                        max={150}
                        color="#2ecc71"
                    />
                </div>
            </div>
        </aside>
    );
}

function InfoRow({ label, value }) {
    return (
        <>
            <span className="fighter-infobox__label">
                {label}
            </span>

            <span className="fighter-infobox__value">
                {value}
            </span>
        </>
    );
}

function StatBar({ label, value, max, color }) {
    const percentage = Math.min((value / max) * 100, 100);

    return (
        <div className="fighter-infobox__stat">
            <div className="fighter-infobox__stat-top">
                <span>{label}</span>
                <span>{value}</span>
            </div>

            <div className="fighter-infobox__bar">
                <div
                    className="fighter-infobox__bar-fill"
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: color
                    }}
                />
            </div>
        </div>
    );
}