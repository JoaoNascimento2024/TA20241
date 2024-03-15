import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import NaoEncontrada from "./paginas/NaoEncontrada";
import Base from "./paginas/Base";
import Turma from "./paginas/Turma";


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>}>                                    
                    <Route index element={<Home/>}/> 
                    <Route path="/turmas" element={<Turma/>}/>               
                    <Route path="*" element={<NaoEncontrada/>}/>               
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
