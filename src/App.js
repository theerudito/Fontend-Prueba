import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CrudApp } from "./Componets/Crud";
import { Rutas } from "./Componets/Rutas";






function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={Rutas.home} element={<CrudApp/>} />
    </Routes>
    </BrowserRouter>
     
    
    </>
  );
}

export default App;
