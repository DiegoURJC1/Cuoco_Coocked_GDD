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
                ¡La comida está mutando! Unos alimentos descontrolados están destruyendo nuestro planeta, para
                detenerlos necesitamos tu ayuda.
                <br/>
                <b>¡La ayuda de los Cuoco!
                </b>
            </p>
            <p>
                Elige un bando y enfréntate en una deliciosa batalla contra tus enemigos. De ti depende quién se
                coronará como Rey de la <b>Cadena Alimenticia.</b>
            </p>

            <Heading2 id="story-gamemoge-introduction">Introducción</Heading2>
            <p>
                Desde hace décadas el gran crecimiento demográfico está asfixiando a la población, y los recursos de
                nuestro planeta se han vuelto muy limitados. Aunque podamos crear edificios más altos, el espacio
                constituye un gran problema: cada vez hay menos, y la contaminación que provoca la humanidad está
                perjudicando gravemente a la calidad de la tierra.
            </p>

            <p>
                Para poder enfrentar la hambruna y el desabastecimiento, ya no es posible recurrir a los métodos
                tradicionales, por lo que se ha puesto el foco en la biotecnología, explotando lo que la genética
                nos había enseñado sobre la biologia con acciones que rozan lo inmoral. Sin embargo, la creciente
                situación de emergencia no nos dejaba otra opción.

            </p>

            <p>
                Gracias a este foco tecnológico, logramos desarrollar alimentos de gran calidad en muy poco tiempo y
                aumentar la eficiencia de la producción. Esto nos dio la esperanza de poder enfrentarnos a la
                crisis, pero… Todo tiene un precio. La manipulación del ADN y los nuevos químicos resultaron ser más
                inestables de lo que creíamos, y han acabado requiriendo procesos demasiado complejos para su uso
                efectivo. Esto desencadenó el inicio de un proceso: el "Despertar" de nuevos seres; abominaciones
                creadas por el hombre. Abominaciones… deliciosas.

            </p>
            <p>
                El inicio fue lento, pero el "Despertar" sólo daba señales de ir acelerándose. Ante la posibilidad
                de que el proceso se disparara en cualquier momento y con difícil previsión, la comunidad científica
                barajó varias opciones para extinguir la posible tragedia, sin dejar atrás la investigación de los
                métodos de producción. El “Eureka” que marcó la lucha contra este cataclismo fue crearnos a
                nosotros, los Cuoco, una nueva generación de Chefs preparada para luchar contra cualquier
                adversidad, gracias a un duro entrenamiento en las distintas artes del especiado, teoría avanzada
                del sabor, técnicas ancestrales evolutivas del corte.
            </p>
            <p>
                Yo soy uno de ellos.
            </p>

            <p><i>Y estoy harto. Harto de la mentalidad pija y conservadora de los incompetentes que se hacen llamar
                mis compañeros.
            </i></p>

            <p><i>
                Me niego a anclarme en esta cocina tan arcaica que defienden. Me da igual que las personas más ricas
                del mundo vayan a nuestro restaurante, porque sé que tienen miedo a abrir los ojos a este nuevo
                mundo lleno de sabores, texturas y experiencias únicas. ¡Ahora todo está a nuestro alcance! Tenemos
                el potencial de crearlo todo, pero estos patanes prefieren refugiarse en el miedo: dicen que el
                riesgo es muy alto, que los comensales prefieren comida menos "sintética", que no debemos de jugar
                más con la comida... ¡Ja! Mis tortillas.

            </i></p>
            <p><i>
                Esos mismos insulsos son los que piensan que me despidieron, pero siguen ocultándose de la verdad.
                Me da igual cuántos me digan que me equivoco, yo les abandoné. ¡Les abandoné! ¿Quién iba a soportar
                su cocina, plagada de carencias de ambición? ¡No saben la oportunidad que están dejando pasar!
            </i></p>

            <p><i>
                ¡Pero yo sí! ¡Les demostraré de lo que estoy hecho! ¡VOY A ENCONTRAR EL SABOR PERFECTO EN ESTE MUNDO
                TAN SABROSO!
            </i></p>

            <p><i>
                Y cuando lo haga… ¡VERÁN QUIÉN ES EL VERDADERO CUOCO!
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

        </>
    )
}