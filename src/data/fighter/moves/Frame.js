import {FrameSpecial} from "./frameType.js";

export class Frame {
    #frameType;
    #cancelWindow;
    #projectileActive;

    /**
     * @param {Object} frameType Uno de FrameType
     * @param {boolean} cancelWindow Si se puede cancelar en este frame
     * @param {boolean} projectileActive Si es un frame de proyectil activo
     */
    constructor({frameType, cancelWindow = false, projectileActive = false}) {
        this.#frameType = frameType;
        this.#cancelWindow = cancelWindow;
        this.#projectileActive = projectileActive;
    }

    get frameType() { return this.#frameType; }
    get cancelWindow() { return this.#cancelWindow; }
    get projectileActive() { return this.#projectileActive; }

    get color() { return this.#frameType.color; }
    get name() { return this.#frameType.name; }

    get colorCancelWindow() {
        return this.#cancelWindow ? FrameSpecial.CANCEL_WINDOW.color : null;
    }
    get nameCancelWindow() {
        return this.#cancelWindow ? FrameSpecial.CANCEL_WINDOW.name : null;
    }

    get colorProjectileActive() {
        return this.#projectileActive ? FrameSpecial.PROJECTILE_ACTIVE.color : null;
    }
    get nameProjectileActive() {
        return this.#projectileActive ? FrameSpecial.PROJECTILE_ACTIVE.name : null;
    }
}

export function createFrames(definitions) {
    const frames = [];

    definitions.forEach(def => {
        const {
            frameType,
            duration,
            cancelWindow = false,
            projectileActive = false
        } = def;

        for (let i = 0; i < duration; i++) {
            frames.push(new Frame({
                frameType,
                cancelWindow,
                projectileActive
            }));
        }
    });

    return frames;
}