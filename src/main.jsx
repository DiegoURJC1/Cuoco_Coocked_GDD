import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import BasePageLayout from "./layouts/BasePageLayout/BasePageLayout.jsx";
import Combat from "./pages/Combat.jsx";
import ScrollToTop from "./common/auxFunc/ScrollToTop.jsx";
import {routes} from "./routes/routes.js";

import { Buffer } from 'buffer';
window.Buffer = Buffer;
import React from 'react';
import ReactDOM from 'react-dom/client';
// Estilos
import './styles/imports.css'
import TestLinks from "./pages/testPage/TestLinks.jsx";
import FightersListPage from "./pages/FightersListPage/FightersListPage.jsx";
import FighterPage from "./pages/FighterPage/FighterPage.jsx";
import MechanicsPage from "./pages/MechanicsPage.jsx";
import DressingsPage from "./pages/DressingsPage.jsx";
import GameModesPage from "./pages/GameModesPage.jsx";
import AppearancePage from "./pages/AppearancePage/AppearancePage.jsx";
import BusinessPage from "./pages/BusinessPage.jsx";
import GlosaryPage from "./pages/GlosaryPage.jsx";
import StagesListPage from "./pages/StagesListPage/StagesListPage.jsx";
import StagePage from "./pages/StagePage/StagePage.jsx";
import DynamicsPage from "./pages/DynamicsPage.jsx";
import StoryPage from "./pages/StoryPage.jsx";
import InterfacesPage from "./pages/InterfacesPage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="/Cuoco_Coocked_GDD">
            <ScrollToTop />
            <Routes>
                {/* Páginas del documento */}
                <Route element={<BasePageLayout/>}>
                    <Route path={routes.home.path} element={<Home/>}/>
                    <Route path={routes.story.path} element={<StoryPage/>}/>
                    <Route path={routes.mechanics.path} element={<MechanicsPage/>}/>
                    <Route path={routes.dynamics.path} element={<DynamicsPage/>}/>
                    <Route path={routes.dressings.path} element={<DressingsPage/>}/>
                    <Route path={routes.gameModes.path} element={<GameModesPage/>}/>
                    <Route path={routes.appearance.path} element={<AppearancePage/>}/>
                    <Route path={routes.business.path} element={<BusinessPage/>}/>
                    <Route path={routes.glossary.path} element={<GlosaryPage/>}/>
                    <Route path={routes.combat.path} element={<Combat/>}/>
                    <Route path={routes.test.path}>
                        <Route path={routes.test.links} element={<TestLinks/>}/>
                    </Route>
                    <Route path={routes.fighters.path} element={<FightersListPage/>}/>
                    <Route path={routes.fighters.id} element={<FighterPage/>} />
                    <Route path={routes.stages.path} element={<StagesListPage/>}/>
                    <Route path={routes.stages.id} element={<StagePage/>} />
                    <Route path={routes.interfaces.path} element={<InterfacesPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
