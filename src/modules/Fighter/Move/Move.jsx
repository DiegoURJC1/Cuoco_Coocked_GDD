import "./Move.css"
import {InputSequence} from "../../../data/input/InputSequence.jsx";
export default function Move({move, fighter = null}) {
    return (
        <div className="move-panel">
            <div className="name">{move.name}</div>
            <div className="frames-container">
                {move.frameList.map((f, index) => (
                    <div
                        key={index}
                        className="frame"
                        style={{ backgroundColor: f.color }}
                    >
                        {f.cancelWindow && (
                            <div
                                className="cancel-window"
                                style={{ backgroundColor: f.colorCancelWindow || "#ff0" }}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="move-data">
                Número de frames: {move.frameList?.length || 0}
            </div>
            <div className="move-data">

            </div>
            <div className="move-input">
                <InputSequence sequence={move.inputList} />
            </div>
            <div className="description">
                {typeof move.description === "function" ? move.description(fighter) : move.description}
            </div>
        </div>
    );
}