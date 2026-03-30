import {Heading1, Heading2, Heading3} from "../modules/Heading/Heading.jsx"
import PLink from "../modules/Link/PLink.jsx";
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";
export default function Home() {
    return (
        <>
            <Heading1 id="home">Home</Heading1>
            <Heading2 id="game-concept">Concepto de juego</Heading2>
            <p>
                Videojuego de peleas tradicional con motion inputs.
            </p>
            <Heading2 id="game-genre">Género</Heading2>
            <p>
                Fighting game 2D
            </p>
            <Heading2 id="game-platform">Plataforma</Heading2>
            <p>
                Arcade, Windows, Linux, PS5, XBox Game Pass.
            </p>


        </>
    );
}
