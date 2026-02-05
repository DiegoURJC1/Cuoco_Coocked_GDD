import "./AlertPanel.css"
import Icon from "../../assets/icons/page/exclamation_alert.svg?react";
export default function AlertPanel({children}) {
    return (
        <div className="alert-panel">
            <Icon className="alert-icon"/>
            <div className="text">
                <div className="title">Alerta</div>
                {children}
            </div>

        </div>
    );
}