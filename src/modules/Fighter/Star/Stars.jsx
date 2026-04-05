import Star from "../../../assets/icons/star/star.svg?react"
import HalfStar from "../../../assets/icons/star/star_half.svg?react"

export default function Stars({ stars = 2.5 }) {
    const isValid =
        typeof stars === "number" &&
        stars >= 0.5 &&
        stars <= 5 &&
        (stars * 10) % 5 === 0;

    if (!isValid) {
        return <span>input inválido</span>;
    }

    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 === 0.5;

    const starStyle = {
        width: "1em",
        height: "1em",
        flexShrink: 0, // 👈 importante
    };

    return (
        <div style={{ display: "flex", gap: "0.2em" }}>
            {Array.from({ length: fullStars }, (_, i) => (
                <Star key={`full-${i}`} style={starStyle} />
            ))}

            {hasHalfStar && <HalfStar style={starStyle} />}
        </div>
    );
}