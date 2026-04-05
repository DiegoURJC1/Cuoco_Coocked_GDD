import React from "react";

const RadarChart = ({
                        data = [],
                        size = 300,
                        levels = 5, // círculos de fondo
                    }) => {
    const center = size / 2;
    const radius = size * 0.35;
    const total = data.length;

    // Convertir valor a porcentaje (0–1)
    const normalized = data.map((d) => ({
        ...d,
        value: Math.max(0, Math.min(1, d.value / d.max)),
    }));

    const angleSlice = (Math.PI * 2) / total;

    const getPoint = (value, i) => {
        const angle = i * angleSlice - Math.PI / 2;
        return {
            x: center + Math.cos(angle) * radius * value,
            y: center + Math.sin(angle) * radius * value,
        };
    };

    // Polígono principal
    const points = normalized
        .map((d, i) => {
            const p = getPoint(d.value, i);
            return `${p.x},${p.y}`;
        })
        .join(" ");

    return (
        <svg width={size} height={size}>
            {/* Círculos de fondo */}
            {[...Array(levels)].map((_, i) => {
                const r = radius * ((i + 1) / levels);
                return (
                    <circle
                        key={i}
                        cx={center}
                        cy={center}
                        r={r}
                        fill="none"
                        stroke="#ddd"
                    />
                );
            })}

            {/* Ejes */}
            {normalized.map((_, i) => {
                const p = getPoint(1, i);
                return (
                    <line
                        key={i}
                        x1={center}
                        y1={center}
                        x2={p.x}
                        y2={p.y}
                        stroke="#ccc"
                    />
                );
            })}

            {/* Etiquetas */}
            {normalized.map((d, i) => {
                const p = getPoint(1.15, i);
                return (
                    <text
                        key={i}
                        x={p.x}
                        y={p.y}
                        textAnchor="middle"
                        fontSize="12"
                        fill="white"
                    >
                        {d.label}
                    </text>
                );
            })}

            {/* Área */}
            <polygon
                points={points}
                fill="rgba(34, 197, 94, 0.4)"
                stroke="rgb(34, 197, 94)"
                strokeWidth="2"
            />

            {/* Puntos */}
            {normalized.map((d, i) => {
                const p = getPoint(d.value, i);
                return (
                    <circle
                        key={i}
                        cx={p.x}
                        cy={p.y}
                        r="4"
                        fill="rgb(34, 197, 94)"
                    />
                );
            })}
        </svg>
    );
};

export default RadarChart;