import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import BasePageLayout from "./layouts/BasePageLayout/BasePageLayout.jsx";
import Combat from "./pages/Combat.jsx";
import ScrollToTop from "./common/auxFunc/ScrollToTop.jsx";
import {routes} from "./routes/routes.js";
// Estilos
import './styles/index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Páginas del documento */}
                <Route element={<BasePageLayout/>}>
                    <Route path={routes.home.path} element={<Home/>}/>
                    <Route path={routes.combat.path} element={<Combat/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
