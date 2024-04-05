import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import NaoEncontrada from "./paginas/NaoEncontrada";
import Base from "./paginas/Base";
import TurmaTabela from "./paginas/Cadastros/Turma/TurmaTabela";
import AlunoTabela from "./paginas/Cadastros/Aluno/AlunoTabela";


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>}>                                    
                    <Route index element={<Home/>}/> 
                    <Route path="/turmas" element={<TurmaTabela/>}/>               
                    <Route path="/alunos" element={<AlunoTabela/>}/> 
                    <Route path="*" element={<NaoEncontrada/>}/>               
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
