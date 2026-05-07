export const routes = {
    home: {
        path: "/",
    },
    story: {
        path: "/story",
    },
    mechanics: {
        path: "/mechanics",
        inputDiagram: {
            id: "input-diagram",
            path: "/mechanics#input-diagram"
        },
        inputStrengthDiagram: {
            id: "input-strength-diagram",
            path: "/mechanics#input-strength-diagram"
        },
        block: {
            id: "block",
            path: "/mechanics#block"
        },
        breaker: {
            id: "breaker",
            path: "/mechanics#breaker"
        },
        guardbreak: {
            id: "guardbreak",
            path: "/mechanics#guardbreak",
        },
        cooking: {
            id: "cooking",
            path: "/mechanics#cooking"
        },
    },
    dynamics: {
        path: "/dynamics",
        range: {
            id: "range",
            path: "/dynamics#range",
        },
        breaker: {
            id: "breaker",
            path: "/dynamics#breaker"
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