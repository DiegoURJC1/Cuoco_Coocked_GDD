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

export const fighterElChef = new Fighter({
  name: "El Chef",
  archetype: Archetype.ZONER,
  description: () => (
    <>
      <b>Descripción:</b> Chef Maestro Rinaldo Accatino es la anomalía humana del roster,
      un cocinero de alta cocina con tres estrellas Michelin que actualmente trabaja como
      luchador profesional. Su chaquetilla blanca inmaculada va manchándose durante el combate
      como indicador ambiental. Porta un tenedor del tamaño de un tridente y un cinturón 
      repleto de botes de salsas, especias y condimentos.
      <br></br>
      <br></br>
      Su estilo de combate es el más exigente del roster a nivel conceptual. No tiene un gran
      volumen de ataques, lo que tiene es variedad de <b>aderezos</b> aplicables: quemado (DoT continuo), pringoso (reduce
      velocidad) y mareado (inputs invertidos).
      La curva de aprendizaje no está en los inputs sino en saber
      qué aderezo aplicar, cuándo, y anticipar cómo el rival va a reaccionar. Un jugador
      de El Chef mediocre lanza salsas aleatoriamente. Uno experto convierte cada aderezo en 
      el setup de su siguiente acción.
      <br/><br/>
    </>
  ),
  easyToUse: 2.0,

  source: Source.BASE_GAME,

  icon: "",
  fullArt: "",
  portraitConfig: {
    x: 0,
    y: 0,
    zoom: 1,
  },
  moveList: [
    // ==================== Normales ====================
    {
      name: "Pincho Rápido de Tenedor",
      moveCategory: MoveCategory.NORMAL,
      description: (fighter) => (
        <>
          {fighter.name} extiende el tenedor a media altura en un gesto breve y controlado.
          Alcance superior al de un ligero estándar. Seguro como poke de rango corto/medio.
        </>
      ),
      inputList: [Input.NEUTRAL, Input.R],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 6,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 3,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 11,
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
      name: "Corte de Cuchillo",
      moveCategory: MoveCategory.NORMAL,
      description: (fighter) => (
        <>
          {fighter.name} saca un cuchillo de cocina de tamaño desproporcionado y corta 
          en diagonal descendente a media altura. Buen daño, su hitbox diagonal cubre bien los saltos bajos del rival.
        </>
      ),
      inputList: [Input.NEUTRAL, Input.L],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 9,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 4,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 16,
        },
      ]),
      moveData: {
        damage: [25],
        guard: ["High"],
        onBlock: [-2],
        invuln: false,
      },
    },
    {
      name: "Golpe de Sartén",
      moveCategory: MoveCategory.NORMAL,
      description: (fighter) => (
        <>
          {fighter.name} levanta una sartén de hierro fundido con ambas manos y la 
          descarga verticalmente. Lento, contundente, aplasta. Daño muy alto, derriba al rival.
        </>
      ),
      inputList: [Input.NEUTRAL, Input.S],
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
          duration: 26,
        },
      ]),
      moveData: {
        damage: [30],
        guard: ["High"],
        onBlock: [-10],
        invuln: false,
      },
    },

    // ==================== Normales agachado ====================
    {
      name: "Pinchazo Bajo",
      moveCategory: MoveCategory.NORMAL,
      description: () => (
        <>
          Agachado, lanza el tenedor paralelo al suelo apuntando a los pies del rival. 
        </>
      ),
      inputList: [Input.DOWN, Input.L],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 6,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 3,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 12,
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
      name: "Barrido de Cazo",
      moveCategory: MoveCategory.NORMAL,
      description: (fighter) => (
        <>
          {fighter.name} hace girar la sartén horizontalmente a ras del suelo.
          Alcance amplio, golpe bajo, derriba. Knockdown garantizado si conecta.
        </>
      ),
      inputList: [Input.DOWN, Input.S],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 15,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 6,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 28,
        },
      ]),
      moveData: {
        damage: [18],
        guard: ["Low"],
        onBlock: [-12],
        invuln: false,
      },
    },

    // ==================== Normales saltando ====================
    {
      name: "Pinchazo Aéreo",
      moveCategory: MoveCategory.JUMP,
      description: (fighter) => (
        <>
          {fighter.name} clava el tenedor en diagonal desde el aire. Jump-in rápido
          con buena hitbox frontal. Alcance notable por el tenedor.
        </>
      ),
      inputList: [Input.L],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 6,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 5,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 16,
        },
      ]),
      moveData: {
        damage: [8],
        guard: ["High"],
        onBlock: [1],
        invuln: false,
      },
    },
    {
      name: "Descenso de Sartén",
      moveCategory: MoveCategory.JUMP,
      description: (fighter) => (
        <>
          {fighter.name} saca la sartén por encima de la cabeza y la clava hacia abajo. 
          Solo golpea hacia abajo. Ataque aéreo de área con hitbox muy grande verticalmente. 
          Lento y muy legible, pero si conecta envía al rival al suelo con un knockdown favorable.
        </>
      ),
      inputList: [Input.S],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 17,
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
        damage: [20],
        guard: ["High"],
        onBlock: [-6],
        invuln: false,
      },
    },

    // ==================== Especiales ====================
    {
      name: "Estocada de Tenedor",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
        <>
          {fighter.name} empuja el tenedor hacia adelante en una estocada rápida y precisa. 
          Es la herramienta de control de espacio que usa constantemente. Es fiable, pero predecible,
          aunque puede resultar difícil de gestionar si el rival no puede cerrar distancia.
        </>
      ),
      inputList: [Input.RIGHT, Input.R],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 12,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 5,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 18,
        },
      ]),
      moveData: {
        damage: [18],
        guard: ["High"],
        onBlock: [-3],
        invuln: false,
      },
    },
    {
      name: "Bote de Salsa Picante",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
        <>
          {fighter.name} sacude un bote de salsa picante del cinturón y lanza un chorro 
          recto hacia adelante. Aplica <b>quemado</b> (DoT leve continuo).
          El rival debe elegir: parryear (timing exigente),
          bloquear (chip + guardbreak), o evadir.
        </>
      ),
      inputList: [Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.R],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 18,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 5,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 22,
        },
      ]),
      moveData: {
        damage: [12],
        guard: ["High"],
        onBlock: [-5],
        invuln: false,
      },
    },
    {
      name: "Bote de Miel",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
        <>
          {fighter.name} lanza un bote de miel que cae en parábola. Trayectoria arqueada 
          hacia abajo, más lento en viaje. Aplica <b>pringoso</b> (-velocidad de movimiento).
          Ralentiza la aproximación del rival facilitando que el Chef mantenga
          su distancia óptima de control.
        </>
      ),
      inputList: [Input.RIGHT, Input.DOWN, Input.LEFT, Input.R],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 20,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 7,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 24,
        },
      ]),
      moveData: {
        damage: [10],
        guard: ["High"],
        onBlock: [-4],
        invuln: false,
      },
    },
    {
      name: "Vinagre de la Casa",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
        <>
          {fighter.name} estrella una botella de vinagre balsámico contra el suelo, 
          creando una nube ácida de corta duración frente a él. Aplica
          <b>mareado</b> (inputs invertidos). El debuff más disruptivo del Chef,
          cualquier rival que entre en ese espacio recibe el Mareado.
        </>
      ),
      inputList: [Input.LEFT,Input.DOWN_LEFT, Input.DOWN, Input.DOWN_RIGHT, Input.RIGHT, Input.R],
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
          duration: 20,
        },
      ]),
      moveData: {
        damage: [14],
        guard: ["Low"],
        onBlock: [-6],
        invuln: false,
      },
    },
    {
      name: "Corte Maestro",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
        <>
          {fighter.name} da un paso adelante y ejecuta un corte vertical ascendente
          con el cuchillo. Lanza al rival al aire y puede usarse como antiaéreo.
        </>
      ),
      inputList: [Input.RIGHT, Input.DOWN, Input.DOWN_RIGHT, Input.S],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 7,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 5,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 30,
        },
      ]),
      moveData: {
        damage: [22],
        guard: ["Low"],
        onBlock: [-14],
        invuln: true,
      },
    },
    {
      name: "Pinza del Chef",
      moveCategory: MoveCategory.SPECIAL,
      description: (fighter) => (
        <>
          {fighter.name} clava el tenedor gigante en el suelo frente a él, atrapando 
          al rival entre los dientes del utensilio si está en rango. El grab especial 
          del Chef.
        </>
      ),
      inputList: [Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT, Input.G],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 19,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 4,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 36,
        },
      ]),
      moveData: {
        damage: [35],
        guard: ["No"],
        onBlock: [0],
        invuln: false,
      },
    },

    // ==================== SUPER ====================
    {
      name: "Mise en Place",
      moveCategory: MoveCategory.OVERDRIVE,
      description: (fighter) => (
        <>
          {fighter.name} abre los brazos, y del cinturón caen simultáneamente TODOS 
          los botes de salsas que llevaba encima. Explotan en el suelo creando una 
          oleada de condimentos que avanza por el escenario.Una oleada de múltiples hits progresivos.
          Aplica <b>quemado</b> al final. Si no se esquiva gran daño total acumulado.
        </>
      ),
      inputList: [
        Input.RIGHT, Input.DOWN_RIGHT, Input.DOWN, Input.DOWN_LEFT, Input.LEFT,
        Input.UP_LEFT, Input.UP, Input.UP_RIGHT, Input.R
      ],
      frameList: createFrames([
        {
          frameType: FrameType.STARTUP,
          duration: 17,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 4,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 15,
        },
        {
          frameType: FrameType.ACTIVE,
          duration: 4,
        },
        {
          frameType: FrameType.RECOVERY,
          duration: 15,
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
        damage: [65],
        guard: ["High"],
        onBlock: [-8],
        invuln: true,
      },
    },
  ],
});