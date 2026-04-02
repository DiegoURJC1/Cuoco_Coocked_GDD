// components/inputs/ButtonIcon.jsx

import Punch from "../../assets/icons/input/Punch Icon.svg?react";
import Kick from "../../assets/icons/input/Kick Icon.svg?react";
import Slash from "../../assets/icons/input/Slash Icon.svg?react";
import HeavySlash from "../../assets/icons/input/Heavy Slash Icon.svg?react";
import Dust from "../../assets/icons/input/Dust Icon.svg?react";
import Dash from "../../assets/icons/input/Dash Icon.svg?react";
import Taunt from "../../assets/icons/input/Taunt Icon.svg?react";

const map = {
    P: Punch,
    K: Kick,
    S: Slash,
    HS: HeavySlash,
    D: Dust,
    DASH: Dash,
    TAUNT: Taunt,
};

export function ButtonIcon({ input, size = 32 }) {
    const Comp = map[input];
    if (!Comp) return null;

    return <Comp style={{ width: size, height: size }} />;
}