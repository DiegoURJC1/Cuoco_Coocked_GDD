// Source.js

// tipos (opcionales pero útiles)
export const SourceType = Object.freeze({
    BASE_GAME: "BASE_GAME",
    SEASON_PASS: "SEASON_PASS"
});

// fuentes estáticas
export const Source = Object.freeze({
    BASE_GAME: Object.freeze({
        type: SourceType.BASE_GAME,
        name: "Juego base"
    })
});

// factory para season pass
export function createSeasonPass(number) {
    return Object.freeze({
        type: SourceType.SEASON_PASS,
        number,
        name: `Season Pass ${number}`
    });
}