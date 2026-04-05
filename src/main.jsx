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
import TestLinks from "./pages/testPage/TestLinks.jsx";
import FightersListPage from "./pages/FightersListPage.jsx";
import FighterPage from "./pages/FighterPage/FighterPage.jsx";
import Mechanics from "./pages/Mechanics.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Páginas del documento */}
                <Route element={<BasePageLayout/>}>
                    <Route path={routes.home.path} element={<Home/>}/>
                    <Route path={routes.mechanics.path} element={<Mechanics/>}/>
                    <Route path={routes.combat.path} element={<Combat/>}/>
                    <Route path={routes.test.path}>
                        <Route path={routes.test.links} element={<TestLinks/>}/>
                    </Route>
                    <Route path={routes.fighters.path} element={<FightersListPage/>}/>
                    <Route path={routes.fighters.id} element={<FighterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
