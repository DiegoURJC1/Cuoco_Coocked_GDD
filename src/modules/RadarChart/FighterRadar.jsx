// fighterAnalyzer.js
import RadarChart from "./RadarChart.jsx";
import {FrameType} from "../../dataTemplate/fighters/moves/enums/frameType.js"

/**
 * Define las métricas disponibles para cualquier Fighter.
 * Cada función recibe un fighter y devuelve { value, max }.
 */
const fighterMetrics = {
    Fuerza: (fighter) => {
        const moves = [
            ...Object.values(fighter.moveSet.universal),
            ...fighter.moveSet.normal,
            ...fighter.moveSet.special,
            ...fighter.moveSet.overdrive,
        ].filter(Boolean);

        const damages = moves.flatMap(m => m.moveData?.damage ?? []);
        const value = damages.length ? damages.reduce((a, b) => a + b, 0) / damages.length : 0;
        const max = 20; // arbitrario
        return {value: Math.min(value, max), max};
    },

    Velocidad: (fighter) => {
        const moves = [
            ...Object.values(fighter.moveSet.universal),
            ...fighter.moveSet.normal,
            ...fighter.moveSet.special,
            ...fighter.moveSet.overdrive,
        ].filter(Boolean);

        // Menor startup = más rápido
        const startupCounts = moves.map(m => countFramesOfType(m, FrameType.STARTUP));
        const avgStartup = startupCounts.length
            ? startupCounts.reduce((a, b) => a + b, 0) / startupCounts.length
            : 10;

        const max = 2;
        const value = Math.max(0, 10 - avgStartup); // invertimos para que menos frames = más rápido
        return {value, max};
    },

    Dificultad: (fighter) => {
        const moves = [
            ...Object.values(fighter.moveSet.universal),
            ...fighter.moveSet.normal,
            ...fighter.moveSet.special,
            ...fighter.moveSet.overdrive,
        ].filter(Boolean);

        // Promedio de longitud de inputList
        const avgInputs = moves.length ? moves.reduce((acc, m) => acc + (m.inputList?.length ?? 0), 0) / moves.length : 1;
        const max = 4; // arbitrario
        return {value: Math.min(avgInputs, max), max};
    },

    Movilidad: (fighter) => {
        const {walkSpeed, runSpeed} = fighter.baseStats ?? {};
        const value = (walkSpeed ?? 0) * 0.6 + (runSpeed ?? 0) * 0.4;
        const max = 100;
        return {value: Math.min(value, max), max};
    },

    Defensa: (fighter) => {
        const moves = [
            ...Object.values(fighter.moveSet.universal),
            ...fighter.moveSet.normal,
            ...fighter.moveSet.special,
            ...fighter.moveSet.overdrive,
        ].filter(Boolean);

        // Promedio de ventaja en bloque y presencia de invulnerabilidad
        const blocks = moves.flatMap(m => m.moveData?.onBlock ?? []);
        const invulnCount = moves.filter(m => m.moveData?.invuln).length;
        const hp = fighter.baseStats.health;
        const value = ((blocks.length ? blocks.reduce((a, b) => a + b, 0) / blocks.length : 0) + hp + invulnCount * 2);
        const max = 150;
        return {value: Math.min(value, max), max};
    }
};

/**
 * Devuelve el número total de frames de un tipo específico en un movimiento.
 * @param {Move} move
 * @param {Object} frameType - FrameType, por ejemplo FrameType.STARTUP
 * @returns {number} Número de frames de ese tipo
 */
function countFramesOfType(move, frameType) {
    if (!move?.frameList) return 0;

    return move.frameList.reduce((acc, frame) => {
        // accede al getter frameType
        return acc + (frame.frameType?.name === frameType.name ? 1 : 0);
    }, 0);
}

/**
 * Genera datos listos para RadarChart a partir de un Fighter.
 * @param {Fighter} fighter
 * @param {Object} metricsMap - objeto de funciones de cálculo de stats
 * @returns {((*&{label: *})|{label: *, value: number, max: number}|undefined)[]}
 */
function analyzeFighter(fighter, metricsMap = fighterMetrics) {
    return Object.entries(metricsMap).map(([label, fn]) => {
        try {
            return {label, ...fn(fighter)};
        } catch (e) {
            console.error(`Error calculando ${label}:`, e);
            return {label, value: 0, max: 10};
        }
    });
}

/**
 * Devuelve un RadarChart ya renderizado con los datos del fighter.
 */
export function FighterRadar({fighter, metricsMap}) {
    const data = analyzeFighter(fighter, metricsMap);
    console.log("Data for " + fighter.name + ":\n");
    console.log(data);
    return <RadarChart data={data} size={350}/>;
}