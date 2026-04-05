import {Fighter} from "../../../dataTemplate/fighters/Fighter.jsx";
import {Archetype} from "../../../dataTemplate/fighters/enums/./Archetype.js";
import {Source} from "../../../dataTemplate/fighters/enums/Source.js";

export const fighterBolognesa = new Fighter({
    name: "La Boloñesa",
    archetype: Archetype.RUSHDOWN,
    description: (fighter) => (
        <>
            This is a <b>description</b> of {fighter.name} La Boloñesa es una masa
            viva de tagliatelle, ragú y albóndigas que se ha convencido a si misma de
            que el mundo le debe una disculpa. Presenta un aspecto impecable,
            brillante y bien presentada con una salsa de color bermellón y de actitud
            absolutamente intolerante. Su estilo de combate refleja su naturaleza:
            entra, no para y te deja cubierto de salsa antes de que puedas reaccionar.
            No es el personaje más técnico, pero sí el que más castiga la indecisión.
        </>
    ),
    easyToUse: 1.5,

    source: Source.BASE_GAME,

    fullArt: "",
    portraitConfig: {
        x: 0,
        y: 0,
        zoom: 1,
    }/*,
    moveSet: [
    {
      name: "Manotazo de albóndiga",
      moveCategory: MoveCategory.NORMAL,
      description: (fighter) => (
        <>Una agrupación de pasta se alza y deja caer hacia adelante dando un fuerte golpe con una pequeña albóndiga. Rápido y de alcance muy corto.</>
      ),
      inputList: [Input.RIGHT, Input.L],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 4,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 2,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 9,
        },
      ]),
      moveData: {
        damage: [10],
        guard: ["High"],
        onBlock: [-1],
        invuln: false,
      },
    },
    {
      name: "Tajo certero",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => <>{fighter.name} hace un tajo hacia delante.</>,
      inputList: [Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.HS],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 14,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 5,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 31,
        },
      ]),
      moveData: {
        damage: [25],
        guard: ["High"],
        onBlock: [-14],
        invuln: false,
      },
    },
    {
      name: "Te rajo",
      moveCategory: MoveCategory.OVERDRIVE,
      description: (fighter) => (
        <>{fighter.name} hace un rajazo hacia delante.</>
      ),
      inputList: [
        Input.DOWN,
        Input.DOWN_RIGHT,
        Input.RIGHT,
        Input.DOWN,
        Input.DOWN_RIGHT,
        Input.RIGHT,
        Input.HS,
      ],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 17,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 2,
        },

        {
          frameType: FrameType.INACTIVE,
          duration: 2,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 2,
        },
        {
          frameType: FrameType.INACTIVE,
          duration: 2,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 2,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 31,
        },
      ]),
      moveData: {
        damage: [25],
        guard: ["High"],
        onBlock: [-14],
        invuln: false,
      },
    },
    {
      name: "Te rajo",
      moveCategory: MoveCategory.OVERDRIVE,
      description: (fighter) => (
        <>
          {fighter.name} hace un rajazo hacia delante y duele mucho cuando da el{" "}
          <InlineIcon size={2}>
            <InputIcon inputs={Input.HS} />
          </InlineIcon>
          .
        </>
      ),
      inputList: [Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.K],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 27,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 13,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 21,
        },
      ]),
      moveData: {
        damage: [25],
        guard: ["High"],
        onBlock: [-14],
        invuln: false,
      },
    },

    {
      name: "Te rajo",
      moveCategory: MoveCategory.OVERDRIVE,
      description: (fighter) => (
        <>{fighter.name} hace un rajazo hacia delante.</>
      ),
      inputList: [
        Input.RIGHT,
        Input.RIGHT,
        Input.DOWN_RIGHT,
        Input.RIGHT,
        Input.DOWN,
        Input.DOWN_RIGHT,
        Input.K,
      ],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 27,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 13,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 21,
        },
      ]),
      moveData: {
        damage: [25],
        guard: ["High"],
        onBlock: [-14],
        invuln: false,
      },
    },
  ],*/,
});
