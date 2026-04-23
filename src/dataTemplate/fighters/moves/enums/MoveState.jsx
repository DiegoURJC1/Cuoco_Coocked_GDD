import Stand from "../../../../assets/icons/moveState/Stand Icon.svg?react";
import Crouch from "../../../../assets/icons/moveState/Crouch Icon.svg?react";
import Air from "../../../../assets/icons/moveState/Air Icon.svg?react";
import Run from "../../../../assets/icons/moveState/Run Icon.svg?react";
import Knocked from "../../../../assets/icons/moveState/Knocked Icon.svg?react";

export const MoveState = Object.freeze({
    STAND: "stand",
    CROUCH: "crouch",
    KNOCKED: "knocked",
    AIR: "air",
    RUN: "run"
});

const style = {
    width: "auto",
    height: "100%",
    objectFit: "contain",
    display: "block",
};

export function getMoveStateIcon(moveState) {
    switch (moveState) {
        case MoveState.STAND:
            return (<Stand style={style}/>);
        case MoveState.CROUCH:
            return (<Crouch style={style}/>);
        case MoveState.AIR:
            return (<Air style={style}/>);
        case MoveState.RUN:
            return (<Run style={style}/>);
        case MoveState.KNOCKED:
            return (<Knocked style={style}/>);
    }
}