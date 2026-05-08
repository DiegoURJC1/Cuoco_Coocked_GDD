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
        dressing: {
            id: "dressing",
            path: "/dynamics#dressing"
        },
    },
    dressings: {
        path: "/dressings",
        dressing: {
            glazed: {
                id: "glazed",
                path: "/dressings#glazed",
            },
            spicy: {
                id: "spicy",
                path: "/dressings#spicy",
            },
            specialSalad: {
                id: "special-salad",
                path: "/dressings#special-salad",
            },
            fermented: {
                id: "fermented",
                path: "/dressings#fermented",
            },
            sticky: {
                id: "sticky",
                path: "/dressings#sticky",
            },
            dizzy: {
                id: "dizzy",
                path: "/dressings#dizzy",
            },
            satiated: {
                id: "satiated",
                path: "/dressings#satiated",
            },
            burned: {
                id: "burned",
                path: "/dressings#burned",
            },
        }
    },
    gameModes: {
        path: "/game-modes",
        training: {
            id: "training",
            path: "/game-modes#training",
        },
        arcade: {
            id: "arcade",
            path: "/game-modes#arcade",
        },
        story: {
            id: "story",
            path: "/game-modes#story",
        }
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
        menuDiagram: {
            gameConnect: {
                id: "game-connect",
                path: "/interfaces#game-connect",
            },
            mainMenu: {
                id: "main-menu",
                path: "/interfaces#main-menu",
            },
            online: {
                id: "online",
                path: "/interfaces#online",
            },
            ranked: {
                id: "ranked",
                path: "/interfaces#ranked",
            },
            quickMatch: {
                id: "quick-match",
                path: "/interfaces#quick-match",
            },
            publicLobby: {
                id: "public-lobby",
                path: "/interfaces#public-lobby",
            },
            privateLobby: {
                id: "private-lobby",
                path: "/interfaces#private-lobby",
            },
            cata: {
                id: "cata",
                path: "/interfaces#cata",
            },
            training: {
                id: "training",
                path: "/interfaces#training",
            },
            missions: {
                id: "missions",
                path: "/interfaces#missions",
            },
            tutorial: {
                id: "tutorial",
                path: "/interfaces#tutorial",
            },
            combos: {
                id: "combos",
                path: "/interfaces#combos",
            },
            local: {
                id: "local",
                path: "/interfaces#local",
            },
            arcade: {
                id: "arcade",
                path: "/interfaces#arcade",
            },
            versus: {
                id: "versus",
                path: "/interfaces#versus",
            },
            survival: {
                id: "survival",
                path: "/interfaces#survival",
            },
            story: {
                id: "story",
                path: "/interfaces#story",
            },
            playStory: {
                id: "play-story",
                path: "/interfaces#play-story",
            },
            cuocoWorld: {
                id: "cuoco-world",
                path: "/interfaces#cuoco-world",
            },
            settings: {
                id: "settings",
                path: "/interfaces#settings",
            },
            store: {
                id: "store",
                path: "/interfaces#store",
            },
            exit: {
                id: "exit",
                path: "/interfaces#exit",
            },
        }
    }
};