import Header from "./components/Header";
import CadastrarTipos from "../src/components/pages/CadastrarTipos";
import ListarTipos from "../src/components/pages/ListarTipos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transacoes from "./components/pages/Transacoes";
import CadastrarContas from "./components/pages/CadastrarContas";
import ListarContas from "./components/pages/ListarContas";
//1 - Um componente SEMPRE deve começar com a primeira letra maiúscula
//2 - Todo componente DEVE ser uma função do JS
//3 - Todo deve retornar apenas UM elemento HTML
function App() {

return (
<div>
      <BrowserRouter>
      <Header />
              
            <Routes>
                  <Route path="/" element={<ListarContas/>}/>
                  <Route path="/pages/ListarTipos" element={<ListarTipos/>}/>
                  <Route path="/pages/CadastrarTipos" element={<CadastrarTipos />}/>
                  <Route path="/pages/Transacoes" element={<Transacoes />}/>
                  <Route path="/pages/CadastrarContas" element={<CadastrarContas />}/>
                  <Route path="/pages/ListarContas" element={<ListarContas />}/>
                  
            </Routes>

      </BrowserRouter>
</div>
);
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado

export default App;