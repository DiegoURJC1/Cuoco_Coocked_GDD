export const routes = {
    home: {
        path: "/",
    },
    story: {
        path: "/story",
    },
    mechanics: {
        path: "/mechanics",
        cooking: {
            id: "cooking",
            path: "mechanics/cooking"
        }
    },
    dynamics: {
        path: "/dynamics",
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