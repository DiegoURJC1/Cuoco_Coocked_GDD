import StickNeutral from "../../assets/icons/input/Stick Neutral Icon.svg?react";
import StickStraight from "../../assets/icons/input/Stick Straight Icon.svg?react";
import StickQuarter from "../../assets/icons/input/Stick Quarter Icon.svg?react";
import StickHalf from "../../assets/icons/input/Stick Half Icon.svg?react";
import StickZ from "../../assets/icons/input/Stick Z Icon.svg?react";
import StickCircle from "../../assets/icons/input/Stick Circle Icon.svg?react";
import {LookDirection} from "./enums/LookDirection.js";
import {MotionType} from "./enums/MotionType.js";

export function StickIcon({
                              type,
                              direction = LookDirection.RIGHT,
                              flip = false,
                              size = 32,
                          }) {
    const angle = numpadToAngle[direction] ?? 0;

    const style = {
        width: "auto",
        height: "100%",
        objectFit: "contain",
        display: "block",
        transform: `
      rotate(${angle}deg)
      ${flip ? "scaleX(-1)" : ""}
    `,
    };

    switch (type) {
        case "neutral":
            return <StickNeutral style={{width: size, height: size}}/>;

        case "straight":
            return <StickStraight style={style}/>;

        case MotionType.QUARTER:
            return <StickQuarter style={style}/>;

        case MotionType.HALF:
            return <StickHalf style={style}/>;

        case MotionType.Z:
            return <StickZ style={style}/>;

        case MotionType.FULL:
            return <StickCircle style={style}/>;

        default:
            return null;
    }
}

const numpadToAngle = {
    "6": 0,
    "3": 45,
    "2": 90,
    "1": 135,
    "4": 180,
    "7": 225,
    "8": 270,
    "9": 315,
};

//export const isLeft = (dir) => ["1", "4", "7"].includes(dir);
//export const isRight = (dir) => ["3", "6", "9"].includes(dir);

export const QCF = () => <StickIcon type="quarter" direction={LookDirection.RIGHT}/>;
export const QCB = () => <StickIcon type="quarter" direction={LookDirection.LEFT}/>;

export const DP = () => <StickIcon type="z" direction={LookDirection.RIGHT}/>;
export const RDP = () => <StickIcon type="z" direction={LookDirection.LEFT}/>;

export const HCF = () => <StickIcon type="half" direction={LookDirection.RIGHT}/>;
export const HCB = () => <StickIcon type="half" direction={LookDirection.LEFT}/>;