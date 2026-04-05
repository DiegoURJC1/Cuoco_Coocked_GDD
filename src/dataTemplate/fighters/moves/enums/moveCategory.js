/**
 * @readonly
 * @enum {string}
 * @description Categorías de movimientos de un personaje.
 * - `UNIVERSAL`: Movimiento disponible para todos los personajes.
 * - `NORMAL`: Movimiento estándar, se hacen con una dirección.
 * - `JUMP`: Movimiento aereo, debe estar en el aire para poderse realizar.
 * - `SPECIAL`: Movimiento especial con *motion input*.
 * - `OVERDRIVE`: Movimiento especial poderoso con requisitos adicionales o *motion input* complejo.
 */
export const MoveCategory = Object.freeze({
  UNIVERSAL: "universal",
  NORMAL: "normal",
  JUMP: "jump",
  SPECIAL: "special",
  OVERDRIVE: "overdrive",
});

