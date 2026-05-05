import {Move} from "../../../../dataTemplate/fighters/moves/Move.jsx";
import {MoveCategory} from "../../../../dataTemplate/fighters/moves/enums/moveCategory.js";
import {Input} from "../../../../dataTemplate/input/enums/Input.js";
import {createFrames} from "../../../../dataTemplate/fighters/moves/Frame.js";
import {FrameType} from "../../../../dataTemplate/fighters/moves/enums/frameType.js";
import {Stance} from "../../../../dataTemplate/fighters/enums/Stance.js";
import {MoveState} from "../../../../dataTemplate/fighters/moves/enums/MoveState.jsx";
import {baseDefaultStats} from "../../../../dataTemplate/fighters/Fighter.jsx";
import PLink from "../../../../modules/Link/PLink.jsx";
import glossary, {getGlossaryLink} from "../../../../routes/glossary.jsx";
import {InlineIcon} from "../../../../modules/InlineIcon/InlineIcon.jsx";
import {InputSequence} from "../../../../dataTemplate/input/InputSequence.jsx";
import {UniversalMoveKey} from "../../../../dataTemplate/fighters/moves/enums/UniversalMoveKey.js";
import {MoveSet} from "../../../../dataTemplate/fighters/moves/MoveSet.jsx";

export const MoveRegistry = {};

// region Universal
const moveNPunch = new Move({
    name: "Puñetazo",
    moveCategory: MoveCategory.UNIVERSAL,
    description: "Puñetazo frontal a la altura del pecho.",
    inputList: [Input.P],
    states: [
        {
            state: MoveState.STAND,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 6},
                {frameType: FrameType.ACTIVE, duration: 3},
                {frameType: FrameType.RECOVERY, duration: 6},
            ]),
            moveData: {
                damage: [baseDefaultStats.health * 0.03],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [3],
                invuln: false
            }
        },
    ]
});

const moveNKick = new Move({
    name: "Patada Baja",
    moveCategory: MoveCategory.UNIVERSAL,
    description: "Golpe al suelo con el pie. Golpea bajo pese a estar de pie.",
    inputList: [Input.K],
    states: [
        {
            state: MoveState.STAND,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 10},
                {frameType: FrameType.ACTIVE, duration: 9},
                {frameType: FrameType.RECOVERY, duration: 12},
            ]),
            moveData: {
                damage: [baseDefaultStats.health * 0.04],
                guard: [Stance.LOW],
                onBlock: [-7],
                invuln: false
            }
        }
    ]
});

const moveNSlash = new Move({
    name: "Slash de nevera",
    moveCategory: MoveCategory.UNIVERSAL,
    description: () => (

        <>
            <p>
                Agarra la nevera y la empuja con la parte superior hacia adelante como un ariete. Golpea ligeramente
                hacia abajo pero no puede knockear.
            </p>
            <p>
                Puede hacer <PLink href={getGlossaryLink(glossary.trueCombo)}>true combo</PLink> si sigue con
                <InlineIcon size={2}><InputSequence sequence={[Input.HS]}/></InlineIcon> o con <InlineIcon size={2}>
                <InputSequence sequence={[Input.DOWN, Input.HS]}/></InlineIcon>.
            </p>
        </>),
    inputList: [Input.S],
    states: [
        {
            state: MoveState.STAND,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 13},
                {frameType: FrameType.ACTIVE, duration: 5},
                {frameType: FrameType.RECOVERY, duration: 13},
            ]),
            moveData: {
                damage: [baseDefaultStats.health * 0.11],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [+1],
                invuln: false
            }
        }
    ]
});

const moveNHeavySlash = new Move({
    name: "Heavy Slash de nevera",
    moveCategory: MoveCategory.UNIVERSAL,
    description:
        <>
            <p>
                Planta la nevera verticalmente frente a él golpeando lo que tiene inmediatamente en frente.
            </p>
            <p>
                Puede continuarse con <InlineIcon size={2}><InputSequence
                sequence={[Input.HS]}/></InlineIcon> <b>An open door</b> para generar espacio.
            </p>
        </>,
    inputList: [Input.HS],
    states: [
        {
            state: MoveState.STAND,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 14},
                {frameType: FrameType.ACTIVE, duration: 6},
                {frameType: FrameType.RECOVERY, duration: 23},
            ]),
            moveData: {
                damage: [baseDefaultStats.health * 0.13],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [-10],
                invuln: false
            }
        }
    ]
});

const moveCSlash = new Move({
    name: "Es \"futil\"",
    moveCategory: MoveCategory.UNIVERSAL,
    description: <>
        Saca rápidamente un fuet de la nevera y golpea con el a la altura de los pies y lo descata al terminar.
    </>,
    inputList: [Input.DOWN, Input.S],
    states: [
        {
            state: MoveState.CROUCH,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 12},
                {frameType: FrameType.ACTIVE, duration: 6},
                {frameType: FrameType.RECOVERY, duration: 16},
            ]),
            moveData: {
                damage: [baseDefaultStats.health * 0.08],
                guard: [Stance.LOW],
                onBlock: [-4],
                invuln: false
            }
        }
    ]
});

const moveFridgeOverhead = new Move({
    name: "Despensa en arco",
    moveCategory: MoveCategory.UNIVERSAL,
    description: "Mueve con gran fuerza la nevera sobre su cabeza de forma recta en una hitbox pequeña.",
    inputList: [Input.DOWN, Input.HS],
    states: [
        {
            state: MoveState.CROUCH,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 27},
                {frameType: FrameType.ACTIVE, duration: 10},
                {frameType: FrameType.RECOVERY, duration: 42},
            ]),
            moveData: {
                damage: [baseDefaultStats.health * 0.09],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [-8],
                invuln: true
            }
        }
    ]
});


// endregion

// region Normal

const moveOpenDoorHeavySlash = new Move({
    name: "An open door",
    moveCategory: MoveCategory.UNIVERSAL,
    description:
        <>
            <p>
                Pulsa <InlineIcon
                size={2}><InputSequence sequence={[Input.HS]}/></InlineIcon> tras <b>{moveNHeavySlash.name}</b> para
                abrir la puerta de la
                nevera mientras el movimiento esté <PLink href={getGlossaryLink(glossary.activeFrames)}>activo</PLink>
                o al inicio de la <PLink href={getGlossaryLink(glossary.recoveryFrames)}>recuperación</PLink>.
            </p>

            <p>
                Este portazo echa al rival volando hacia atrás y produce <PLink
                href={getGlossaryLink(glossary.knockDown)}>knockdown.</PLink>
            </p>
            <p>
                Muy útil para crear distancia al final de una secuencia de ataques que acabe en <InlineIcon
                size={2}><InputSequence
                sequence={[Input.HS]}/></InlineIcon>.
            </p>
        </>,
    inputList: [Input.HS],
    states: [
        {
            state: MoveState.STAND,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 14},
                {frameType: FrameType.ACTIVE, duration: 6},
                {frameType: FrameType.RECOVERY, duration: 23},
            ]),
            moveData: {
                damage: [baseDefaultStats.health * 0.13],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [-10],
                invuln: false
            }
        }
    ]
});

const moveQuickCrusher = new Move({
    name: "Empujón",
    moveCategory: MoveCategory.NORMAL,
    description: "Placaje con la nevera al frente durante una carrera.",
    inputList: [Input.RIGHT, Input.HS],
    states: [
        {
            state: MoveState.RUN,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 17},
                {frameType: FrameType.ACTIVE, duration: 5},
                {frameType: FrameType.RECOVERY, duration: 22},
            ]),
            moveData: {
                damage: [baseDefaultStats.health * 0.09],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [-8],
                invuln: false
            }
        },
    ]
});


// endregion

// region Special
const fridgeTwirlStates = [
    {
        state: MoveState.STAND,
        frameList: createFrames([
            {frameType: FrameType.STARTUP, duration: 27},
            {frameType: FrameType.ACTIVE, duration: 10},
            {frameType: FrameType.RECOVERY, duration: 42},
        ]),
        moveData: {
            damage: [baseDefaultStats.health * 0.18],
            guard: [Stance.HIGH, Stance.LOW],
            onBlock: [+20],
            invuln: false
        }
    },
    {
        state: MoveState.AIR,
        frameList: createFrames([
            {frameType: FrameType.STARTUP, duration: 27},
            {frameType: FrameType.ACTIVE, duration: 10},
            {frameType: FrameType.RECOVERY, duration: 42},
        ]),
        moveData: {
            damage: [baseDefaultStats.health * 0.15],
            guard: [Stance.HIGH, Stance.LOW],
            onBlock: [-14],
            invuln: false
        }
    }
]

export const moveFridgeTwirl63214 = new Move({
    name: "Frindge twirl",
    moveCategory: MoveCategory.SPECIAL,
    description: "Mueve con gran fuerza la nevera de delante hacia atrás en un gran arco.",
    inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.HS],
    states: fridgeTwirlStates
});

const moveFridgeTwirl41236 = new Move({
    name: "Frindge twirl",
    moveCategory: MoveCategory.SPECIAL,
    description: "Mueve con gran fuerza la nevera de detrás hacia delante en un gran arco.",
    inputList: [Input.LEFT, Input.DOWN_LEFT, Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.HS],
    states: fridgeTwirlStates
});

const moveFridgeTwirl23698 = new Move({
    name: "Frindge twirl",
    moveCategory: MoveCategory.SPECIAL,
    description: "Mueve con gran fuerza la nevera de abajo hacia arriba en un gran arco delante suya.",
    inputList: [Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.UP_RIGHT, Input.UP, Input.HS],
    states: fridgeTwirlStates
});

const moveFridgeTwirl89632 = new Move({
    name: "Frindge twirl",
    moveCategory: MoveCategory.SPECIAL,
    description: "Mueve con gran fuerza la nevera de arriba hacia abajo en un gran arco delante suya.",
    inputList: [Input.UP, Input.UP_RIGHT, Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.HS],
    states: fridgeTwirlStates
});

const moveFridgeTwirl21478 = new Move({
    name: "Frindge twirl",
    moveCategory: MoveCategory.SPECIAL,
    description: "Mueve con gran fuerza la nevera de abajo hacia arriba en un gran arco detrás suya.",
    inputList: [Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.UP_LEFT, Input.UP, Input.HS],
    states: fridgeTwirlStates
});

const moveFridgeTwirl87412 = new Move({
    name: "Frindge twirl",
    moveCategory: MoveCategory.SPECIAL,
    description: "Mueve con gran fuerza la nevera de arriba hacia abajo en un gran arco delante suya.",
    inputList: [Input.UP, Input.UP_LEFT, Input.LEFT, Input.DOWN_LEFT, Input.DOWN, Input.HS],
    states: fridgeTwirlStates
});


// endregion

// region Overdrive

const moveOverdriveBolingFreezer = new Move({
    name: "Boiling Freezer",
    moveCategory: MoveCategory.NORMAL,
    description:
        <>
            <p>
                Golpea al suelo directamente delante elevando en el aire al rival si golpea. Si ha conectado, comienza
                una breve animación en el que sobrecalienta el sistema de refrigeración de la nevera y golpea al rival
                para justo después explotar.
            </p>

        </>,
    inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.RIGHT, Input.HS],
    states: [
        {
            state: MoveState.RUN,
            frameList: createFrames([
                {frameType: FrameType.STARTUP, duration: 11},
                {frameType: FrameType.ACTIVE, duration: 5},
                {frameType: FrameType.INACTIVE, duration: 3},
                {frameType: FrameType.ACTIVE, duration: 4},
                {frameType: FrameType.INACTIVE, duration: 1},
                {frameType: FrameType.ACTIVE, duration: 4},
                {frameType: FrameType.RECOVERY, duration: 47},
            ]),
            moveData: {
                damage: [baseDefaultStats.health * 0.01, baseDefaultStats.health * 0.08, baseDefaultStats.health * 0.22],
                guard: [Stance.HIGH, Stance.LOW],
                onBlock: [-33],
                invuln: true
            }
        },
    ]
});

// endregion

export const moveSetJohnGrinder = new MoveSet({
    universal: {
        [UniversalMoveKey.NEUTRAL_P]: moveNPunch,
        [UniversalMoveKey.NEUTRAL_K]: moveNKick,
        [UniversalMoveKey.NEUTRAL_S]: moveNSlash,
        [UniversalMoveKey.NEUTRAL_HS]: moveNHeavySlash,

        [UniversalMoveKey.DOWN_S]: moveCSlash,
        [UniversalMoveKey.DOWN_HS]: moveFridgeOverhead,
    },
    normal: [
        moveOpenDoorHeavySlash,
        moveQuickCrusher
    ],
    special: [
        moveFridgeTwirl63214,
        moveFridgeTwirl41236,
        moveFridgeTwirl23698,
        moveFridgeTwirl89632,
        moveFridgeTwirl21478,
        moveFridgeTwirl87412
    ],
    overdrive: [
        moveOverdriveBolingFreezer
    ]

});