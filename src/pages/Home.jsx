import {Heading1, Heading2, Heading3} from "../modules/Heading/Heading.jsx"
import PLink from "../modules/Link/PLink.jsx";
import AlertPanel from "../modules/AlertPanel/AlertPanel.jsx";
export default function Home() {
    return (
        <>
            <Heading1 id="home">Home</Heading1>
            <Heading2 id="1">
                Enlaces
            </Heading2>
            <ul>
                <li><PLink href="/combat">Combate</PLink></li>
            </ul>

            <Heading2 id={"testing"}>Test</Heading2>

            <Heading3 id={"testing-links"}>Links</Heading3>

            Navegar en misma página
            <br/>
            <PLink href="#3">cabecera con id='3'</PLink>
            <br/>
            Navegar en distinta página subsección concreta
            <br/>
            <PLink href="/combat#3">'/combat'</PLink>
            <br/>
            Archivo interno:
            <br/>
            <PLink href="vite.svg">vite.svg</PLink>
            <br/>
            Enlace externo:
            <br/>
            <PLink href="https://google.com">google</PLink>
            <br/>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <Heading2 id="2">
                Contenido
            </Heading2>
            <AlertPanel>Mi alerta<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.</AlertPanel>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <Heading3 id="3">
                Texto
            </Heading3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at atque, deserunt eligendi
                eveniet exercitationem explicabo fugit harum impedit incidunt itaque perspiciatis praesentium quae
                quaerat quis repudiandae vitae voluptatem!</p>
            <br/>

        </>
    );
}
