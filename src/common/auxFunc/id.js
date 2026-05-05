/**
 * Genera un ID amigable para URL a partir de un nombre.
 * @param {string} name Nombre original
 * @returns {string} ID en minúsculas, sin acentos ni caracteres especiales
 */
export default function generateIdFromName(name) {
    return name
        .normalize("NFD")            // separa acentos
        .replace(/[\u0300-\u036f]/g, "") // quita acentos
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")  // quita caracteres no alfanuméricos
        .trim()
        .replace(/\s+/g, "-");       // espacios -> guiones
}