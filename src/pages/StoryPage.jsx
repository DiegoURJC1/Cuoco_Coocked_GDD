import {Heading1, Heading2, Heading3} from "../modules/Heading/Heading.jsx";
import {fighterComilon} from "../data/fighter/fighters/comilon/fighterComilon.jsx";
import {fighterElChef} from "../data/fighter/fighters/elChef/fighterElChef.jsx";
import {fighterPeppemoldy} from "../data/fighter/fighters/peppemoldy/fighterPeppemoldy.jsx";
import {fighterGomilo} from "../data/fighter/fighters/gomilo/fighterGomilo.jsx";
import PLink from "../modules/Link/PLink.jsx";
import {routes} from "../routes/routes.js";
import {fighterZombKingna} from "../data/fighter/fighters/zombKingna/fighterZombKingna.jsx";

export default function StoryPage() {
    return (
        <>
            <Heading1 id="story-page">Historia</Heading1>
            <Heading2 id="synopsis">Sinopsis</Heading2>
            <p>
                ¡La comida está mutando!
                Unos alimentos descontrolados están destruyendo nuestro planeta, para detenerlos necesitamos tu ayuda.
                <br/>
                <b>¡La ayuda de los Couco!</b>
            </p>
            <p>
                Elige un bando y enfréntate en una deliciosa batalla contra tus enemigos.
                De ti depende quién se coronará como Rey de la <b>Cadena Alimenticia</b>
            </p>

            <Heading2 id="story-gamemoge-introduction">Introducción</Heading2>
            <p>
                Desde hace décadas el gran crecimiento demográfico está asfixiando a la población, los recursos de
                nuestro planeta son muy limitados. Aunque podamos crear edificios más altos, el suelo es un gran
                problema.
                Cada vez hay menos espacio y la contaminación que provoca la humanidad está perjudicando gravemente a la
                calidad de la tierra.
                <p>
                    Para poder enfrentar la hambruna y el desabastecimiento ya no podíamos recurrir a los métodos
                    tradicionales, debíamos poner nuestro foco en la biotecnología.
                    Debido a la creciente situación de emergencia tuvimos que dejar a un lado nuestra moral y explotar
                    lo que ya tenemos.
                </p>

                <p>
                    Logramos desarrollar alimentos de gran calidad en muy poco tiempo. Aumentamos la eficiencia de la
                    producción y al fin parece que podemos enfrentar la crisis pero, todo tiene un precio.
                    La manipulación del ADN y los nuevos químicos son demasiado inestables y requieren de procesos
                    demasiado complejos para su uso efectivo. Esto provocó el "Despertar" de nuevos seres, nuevas
                    abominaciones creadas por el hombre, deliciosas abominaciones…
                </p>
                <p>
                    Como el "Despertar" podía surgir en cualquier momento y era imposible de prever. La única forma de
                    contener la posible tragedia mientras se seguía investigando en métodos de producción fue crearnos a
                    nosotros, los Cuoco, la nueva generación de Chefs.
                </p>

                <p>
                    Los mejores Chefs teníamos que estar preparados para cualquier adversidad. Nos enseñaron las
                    distintas artes del especiado, teoría avanzada del sabor, técnicas ancestrales evolutivas del corte,
                    y más, mucho más, debíamos estar preparados ante todo.
                </p>
                <p><i>
                    Estoy harto de la mentalidad tan pija y conservadora de los incompetentes de mis compañeros. Me
                    niego a anclarme en esta cocina tan arcaica que defienden, me da igual que las personas más ricas
                    del
                    mundo vayan a nuestro restaurante, tienen miedo a descubrir, tienen miedo a ver el nuevo mundo...
                    Lleno de sabores, texturas y experiencias únicas. Todo está a nuestro alcance, podemos crearlo todo.
                    Pero dicen que el riesgo es muy alto y que los comensales prefieren comida menos "sintética"...
                    ja... mis tortillas.
                </i></p>
                <p><i>
                    Me despidieron… No… ¡NO! ¡YO LES DEJÉ, LES ABANDONÉ!, ¡NO ENTIENDEN LA OPORTUNIDAD QUE ESTÁN
                    DEJANDO PASAR!, ¡LES DEMOSTRARÉ LA COCINA DEL FUTURO!, ¡LES DEMOSTRARÉ DE QUÉ ESTOY HECHO!,
                    ¡VOY A ENCONTRAR EL SABOR PERFECTO EN ESTE MUNDO TAN SABROSO!
                </i></p>
                <br/>
                <Heading2 id="story-progression">Progresión</Heading2>
                <p>
                    La historia comienza con la premisa anterior. Un Gran Chef que se deja llevar por su visión
                    ambiciosa, lo que le anima a explorar el mundo lleno de nuevas experiencias inexploradas, siendo
                    esta la historia del <PLink
                    href={routes.fighters.path + "/" + fighterComilon.id}>{fighterComilon.name}</PLink>.
                </p>
                <p>
                    La historia carece de desenlace ya que necesita un nudo principal para justificar la acción. Se opta
                    por desarrollar y profundizar en distintos aspectos del mundo además de en sus personajes.
                </p>
                <Heading3 id="story-prologue">Prólogo</Heading3>
                <p>
                    En una cocina de restaurante, <b>{fighterComilon.name}</b> se revela contra su jefe
                    El Gran Chef <PLink
                    href={routes.fighters.path + "/" + fighterElChef.id}>{fighterElChef.name}</PLink> dando comienzo a
                    su escape en busca de nuevas formas de cocina.
                </p>
                <p>
                    Mediante diálogos en el combate se da a entender la relación
                    entre los oponentes y ciertos aspectos tanto de su personalidad como sus visiones del arte
                    culinario.
                </p>
                <Heading3 id="story-part-1">Capítulo 1: En los callejones</Heading3>
                <p>
                    Al salir del restaurante por la puerta trasera, <b>{fighterComilon.name}</b> golpea furioso todo
                    lo que se encuentra a su paso. Al golpear una papelera, una bolsa de basura sale volando contra la
                    pared y esta se alza contra el, la bolsa no era algo ordinario es
                    una comida mutante, es <PLink
                    href={routes.fighters.path + "/" + fighterPeppemoldy.id}>{fighterPeppemoldy.name}</PLink>.
                </p>

                <Heading3 id="story-part-2">Capítulo 2: Subidón de azúcar</Heading3>
                <p>
                    Tras derrotar a <b>{fighterPeppemoldy.name}</b> descubre las propiedades experimentales de la comida
                    mutante, sus
                    movimientos y aromas intensos. Lleno de adrenalina y emocionado por su primer
                    descubrimiento, <b>{fighterComilon.name}</b> recorre los callejones hasta llegar a los bajos fondos,
                    donde tienen lugar las peleas callejeras más pringosas. <br/>
                    <b>{fighterComilon.name}</b> logra entrar en un local escondido donde unas personas le ofrecen
                    dinero facil
                    si aguanta 3 minutos peleando con un amalgama muy peculiar. Decide aceptar y subirse al ring. Da
                    comienzo un combate entre <b>{fighterComilon.name}</b> y <b>{fighterGomilo.name}</b>.
                </p>
                <Heading2 id="story-fighters">Back Stories de personajes</Heading2>
                <Heading3 id="story-fighters-zombkingna">Zomb Kingna: El Todopoderoso Rey del Trópico</Heading3>
                <p>Página de personaje <PLink href={routes.fighters.path + "/" + fighterZombKingna.id}>aquí</PLink></p>
                <p>
                    Durante las primeras fases de investigación para mejorar la producción de los alimentos, el gobierno
                    de los Estómagos Urgidos decidió probar distintos químicos y técnicas de laboratorio de forma
                    masiva, para ello escogieron una isla tropical muy rica en variedad de vegetación y la rociaron con
                    estos compuestos para investigar su evolución a lo largo de los años.
                </p>
                <p>
                    Lo que no esperaban era que, a los pocos días, todas plantas “Despertaran” a la vez. La sensación
                    era agonizante. Infinidad de nuevos seres provocan una guerra sin igual. Aquel que logró someter al
                    resto debió ganar una gran batalla de resistencia, aquél debía alimentarse de sus enemigos para
                    volverse más fuerte. Aquel, nombrado el Todopoderoso Rey del trópico, fue Zomb Kingña.
                </p>
                <p>
                    Cuando los científicos regresaron para comenzar con sus investigaciones, se encontraron una isla
                    completamente destrozada, solo podían ver jugos y restos de plantas por todas partes. Concluyeron
                    que aún era muy pronto para empezar a utilizar estos compuestos, lo que no se dieron cuenta era que
                    habían creado la primera generación de mutantes.
                </p>
                <Heading3 id="story-fighters-gomilo">Gomilo</Heading3>
                <p>Página de personaje <PLink href={routes.fighters.path + "/" + fighterGomilo.id}>aquí</PLink></p>
                <p>
                    Desde tiempos pasados hay una tradición que siempre ha fascinado al hombre, acumular cosas…
                </p>
                <p>
                    La familia Gomez-nolas lleva años guardando chucherías que le regalaban a los niños en las fiestas y
                    eventos especiales. Esas golosinas nunca veían la luz, con los años caducaban sin que nadie se las
                    llegase a comer, pero aún así el montón no hacía nada más que crecer, hasta el punto que pasó lo
                    inevitable. Las tiraron...
                </p>
                <p>
                    Esas gominolas han sobrevivido distintas cribas, han superado grandes adversidades, ni el calor
                    extremo
                    ha podido con ellas. Llegaron a desarrollar cierta adicción a la autosuperación… ¡Necesitaban más!.
                    Su determinación logró lo impensable, por alguna razón lograron modificar su propia estructura
                    interna,
                    como si hubieran alterado su propio código. Todo con el objetivo de lograr algo grande, algo común
                    que
                    las uniera a todas. Una criatura imperfectamente perfecta. Capaz de ser un molde que trate de
                    refinarse
                    a sí mismo.
                </p>
                <p>
                    Aquel amalgama ahora busca en cada rincón las peleas más arduas para que le hierva el azúcar de
                    nuevo,
                    no por ser un temerario, sino para aprender y seguir adelante.
                </p>
            </p>
        </>
    )
}