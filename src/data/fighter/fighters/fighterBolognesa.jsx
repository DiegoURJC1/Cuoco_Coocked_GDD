import { Fighter } from "../../../dataTemplate/fighters/Fighter.jsx";
import { Archetype } from "../../../dataTemplate/fighters/enums/./Archetype.js";
import {
  Source,
} from "../../../dataTemplate/fighters/enums/Source.js";
import { MoveCategory } from "../../../dataTemplate/fighters/moves/moveCategory.js";
import { Input } from "../../../dataTemplate/input/enums/Input.js";
import { FrameType } from "../../../dataTemplate/fighters/moves/frameType.js";
import { createFrames } from "../../../dataTemplate/fighters/moves/Frame.js";
import { InlineIcon } from "../../../modules/InlineIcon/InlineIcon.jsx";
import { InputIcon } from "../../../dataTemplate/input/InputIcon.jsx";

export const fighterBolognesa = new Fighter({
  name: "La Boloñesa",
  archetype: Archetype.RUSHDOWN,
  description: (fighter) => (
    <>
      <b>Descripción:</b> {fighter.name} es una masa
      viva de tagliatelle, ragú y albóndigas que se ha convencido a si misma de
      que el mundo le debe una disculpa. Presenta un aspecto impecable,
      brillante y bien presentada con una salsa de color bermellón y de actitud
      absolutamente intolerante. Su estilo de combate refleja su naturaleza:
      entra, no para y te deja cubierto de salsa antes de que puedas reaccionar.
      No es el personaje más técnico, pero sí el que más castiga la indecisión.
      <br></br>
      <br></br>
      Tiene un <b>contador</b> interno de ataques melé consecutivos.
      Este contador aumenta cada vez que conecta con exito un ataque cuerpo a cuerpo
      (incluyendo "Bola de cañón" y aéreos). Se reinicia si pasan 15 frames sin un
      ataque nuevo, si se conecta un ataque a distancia o un grab o si la Boloñesa
      recibe un golpe. Al llegar a 3 aplica automaticamente el aderezo pringoso al
      rival.
      <br/><br/>
    </>
  ),
  easyToUse: 1.5,

  source: Source.BASE_GAME,

  fullArt: "",
  portraitConfig: {
    x: 0,
    y: 0,
    zoom: 1,
  },
  moveList: [
    {
      name: "Manotazo de albóndiga",
      moveCategory: MoveCategory.NORMAL,
      description: () => (
        <>
          Una agrupación de pasta se alza y deja caer hacia adelante dando un
          fuerte golpe con una pequeña albóndiga. Rápido y de alcance muy corto.
        </>
      ),
      inputList: [Input.NEUTRAL, Input.L],
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
      name: "Gancho de Ragú",
      moveCategory: MoveCategory.NORMAL,
      description: (fighter) => (
        <>
          {fighter.name} concentra toda la masa en un uppercut ascendente. Puede
          servir de movimiento antiaereo de saltos bajos.
        </>
      ),
      inputList: [Input.NEUTRAL, Input.S],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 12,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 4,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 22,
        },
      ]),
      moveData: {
        damage: [25],
        guard: ["High"],
        onBlock: [-6],
        invuln: false,
      },
    },
    {
      name: "Barrido de fideos",
      moveCategory: MoveCategory.NORMAL,
      description: () => (
        <>Un fideo rapido barre los pies del rival. Golpe bajo.</>
      ),
      inputList: [Input.DOWN, Input.L],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 5,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 2,
        },

        {
          frameType: FrameType.INACTIVE,
          duration: 10,
        },
      ]),
      moveData: {
        damage: [8],
        guard: ["Low"],
        onBlock: [0],
        invuln: false,
      },
    },
    {
      name: "Gran barrido",
      moveCategory: MoveCategory.NORMAL,
      description: (fighter) => (
        <>
          {fighter.name} barre el suelo con una extensi´on densa de masa. Hit
          bajo, tumba al rival.
        </>
      ),
      inputList: [Input.DOWN, Input.S],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 13,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 5,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 24,
        },
      ]),
      moveData: {
        damage: [18],
        guard: ["Low"],
        onBlock: [-14],
        invuln: false,
      },
    },

    {
      name: "Ensartado de masa aérea",
      moveCategory: MoveCategory.JUMP,
      description: (fighter) => (
        <>{fighter.name} golpea hacia abajo con un fideo tenso durante el salto.</>
      ),
      inputList: [
        Input.L,
      ],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 5,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 4,
        },
      ]),
      moveData: {
        damage: [8],
        guard: ["High"],
        onBlock: [0],
        invuln: false,
      },
    },

    {
      name: "Plancha de pasta",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
          <>
            {fighter.name} se aplana en el aire y cae con todo su peso sobre el enemigo.
            Lento, legible, pero de gran daño.
          </>
      ),
      inputList: [Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.S],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 16,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 6,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 16,
        },
      ]),
      moveData: {
        damage: [33],
        guard: ["High"],
        onBlock: [-4],
        invuln: true,
      },
    },

    {
      name: "Extensión de fideos",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
          <>
            {fighter.name} extiende una porción de tagliatelle a distancia media.
          </>
      ),
      inputList: [Input.RIGHT, Input.R],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 14,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 6,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 20,
        },
      ]),
      moveData: {
        damage: [18],
        guard: ["High"],
        onBlock: [-4],
        invuln: false,
      },
    },

    {
      name: "Llave combinada",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
          <>
            {fighter.name} lanza una red de fideos que envuelve al rival.
          </>
      ),
      inputList: [Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.G],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 22,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 3,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 32,
        },
      ]),
      moveData: {
        damage: [45],
        guard: ["No"],
        onBlock: [0],
        invuln: true,
      },
    },

    {
      name: "Salpicadura de salsa",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
          <>
            {fighter.name} sacude su cuerpo y lanza un chorro de salsa hacia adelante. Aplica pringoso (aderezo).
          </>
      ),
      inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.R],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 18,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 8,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 24,
        },
      ]),
      moveData: {
        damage: [17],
        guard: ["Parry"],
        onBlock: [0],
        invuln: false,
      },
    },

    {
      name: "Bola de cañón",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
          <>
            {fighter.name} se envuelve a si misma en una bola de fideos y sale disparada en diagonal ascendente hacia el rival.
          </>
      ),
      inputList: [Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.S],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 10,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 5,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 20,
        },
      ]),
      moveData: {
        damage: [14],
        guard: ["High"],
        onBlock: [-2],
        invuln: false,
      },
    },

    {
      name: "Il grande condimento",
      moveCategory: MoveCategory.OVERDRIVE,
      description: (fighter) => (
          <>
            {fighter.name} inhala profundamente, se expande y realiza varias explosiones sucesivas.
            Fragmentos de salsa y albóndigas salpican un radio medio/grande. Gran daño AOE.
          </>
      ),
      inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT,
        Input.LEFT, Input.UP_LEFT, Input.UP, Input.UP_RIGHT, Input.S],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 8,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 12,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 12,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 6,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 8,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 3,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 5,
        },
      ]),
      moveData: {
        damage: [72],
        guard: ["High"],
        onBlock: [-18],
        invuln: true,
      },
    },
  ],
});
