// components/inputs/StickIcon.jsx

import StickNeutral from "../../assets/icons/input/Stick Neutral Icon.svg?react";
import StickStraight from "../../assets/icons/input/Stick Straight Icon.svg?react";
import StickQuarter from "../../assets/icons/input/Stick Quarter Icon.svg?react";
import StickHalf from "../../assets/icons/input/Stick Half Icon.svg?react";
import StickZ from "../../assets/icons/input/Stick Z Icon.svg?react";
import StickCircle from "../../assets/icons/input/Stick Circle Icon.svg?react";

export function StickIcon({
                              type,
                              direction = "6",
                              flip = false,
                              size = 32,
                          }) {
    const angle = numpadToAngle[direction] ?? 0;

    const style = {
        width: "auto",
        height: "100%",
        transform: `
      rotate(${angle}deg)
      ${flip ? "scaleY(-1)" : ""}
    `,
    };

    switch (type) {
        case "neutral":
            return <StickNeutral style={{ width: size, height: size }} />;

        case "straight":
            return <StickStraight style={style} />;

        case "quarter":
            return <StickQuarter style={style} />;

        case "half":
            return <StickHalf style={style} />;

        case "z":
            return <StickZ style={style} />;

        case "circle":
            return <StickCircle style={{ width: size, height: size }} />;

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

export const QCF = () => <StickIcon type="quarter" direction="6" />;
export const QCB = () => <StickIcon type="quarter" direction="4" />;

export const DP = () => <StickIcon type="z" direction="6" />;
export const RDP = () => <StickIcon type="z" direction="4" />;

export const HCF = () => <StickIcon type="half" direction="6" />;
export const HCB = () => <StickIcon type="half" direction="4" />;