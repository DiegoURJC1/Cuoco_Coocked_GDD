export const routes = {
    home: {
        path: "/",
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
    glosary: {
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
    }
};