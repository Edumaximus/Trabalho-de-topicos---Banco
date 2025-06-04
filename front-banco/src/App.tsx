//import Header from "./components/Header";
import CadastrarTipos from "../src/components/pages/CadastrarTipos";
import ListarTipos from "../src/components/pages/ListarTipos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transacoes from "./components/pages/Transacoes";
//1 - Um componente SEMPRE deve começar com a primeira letra maiúscula
//2 - Todo componente DEVE ser uma função do JS
//3 - Todo deve retornar apenas UM elemento HTML
function App() {

return (
<div>
      <BrowserRouter>
              
            <Routes>
                  <Route path="/" element={<ListarTipos/>}/>
                  <Route path="/pages/ListarTipos" element={<ListarTipos/>}/>
                  <Route path="/pages/CadastrarTipos" element={<CadastrarTipos />}/>
                  <Route path="/pages/Transacoes" element={<Transacoes />}/>
                  
            </Routes>

      </BrowserRouter>
</div>
);
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado

export default App;