import "./ColoredText.css";

export default function ColoredText({styles, children, className}) {
    return <span className={"colored-text" + " " + className} style={styles}>{children}</span>;
}


export function MeleeText() {
    return <ColoredText className="melee">Melee</ColoredText>
}

export function GrabText() {
    return <ColoredText className="grab">Grab</ColoredText>
}

export function RangeText() {
    return <ColoredText className="range">Range</ColoredText>
}

export function BlockText() {
    return <ColoredText className="block">Block</ColoredText>
}