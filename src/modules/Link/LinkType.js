/**
 * Tipos de enlace soportados por PLink.
 *
 * @readonly
 * @enum {string}
 *
 * @property {string} EXTERNAL - Enlace externo al proyecto.
 * @property {string} INTERNAL - Enlace a un elemento del proyecto.
 * @property {string} FILE - Enlace a un archivo en `/public`.
 */
export const LinkType = Object.freeze({
    EXTERNAL: "external",
    INTERNAL: "internal",
    FILE: "file",
});
