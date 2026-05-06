export const routes = {
    home: {
        path: "/",
    },
    story: {
        path: "/story",
    },
    mechanics: {
        path: "/mechanics",
        inputStrengthDiagram: {
            id: "input-strength-diagram",
            path: "/mechanics#input-strength-diagram"
        },
        cooking: {
            id: "cooking",
            path: "/mechanics#cooking"
        },
        guardbreak: {
            id: "guardbreak",
            path: "/mechanics#guardbreak",
        }
    },
    dynamics: {
        path: "/dynamics",
        range: {
            id: "range",
            path: "/dynamics#range",
        },
    },
    dressings: {
        path: "/dressings",

    },
    gameModes: {
        path: "/game-modes",
    },
    appearance: {
        path: "/appearance",
    },
    business: {
        path: "/business",
    },
    glossary: {
        path: "/glosary",
    },
    combat: {
        path: "/combat",
    },
    test: {
        path: "/test",
        links: "/test/links",
    },
    fighters: {
        path: "/fighters",
        id: "/fighters/:id"
    },
    stages: {
        path: "/stages",
        id: "/stages/:id"
    },
    interfaces: {
        path: "/interfaces",
    }
};