import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CrudApp } from "./Componets/Crud";
import { Edi } from "./Componets/Edi";
import { Rutas } from "./Componets/Rutas";






function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={Rutas.home} element={<CrudApp/>} />
      <Route path={Rutas.edit} element={<Edi/>} />
    </Routes>
    </BrowserRouter>
     
    
    </>
  );
}

export default App;
