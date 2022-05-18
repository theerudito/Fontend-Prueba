import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./Componets/ContextProvider/UserProvider";
import { CrudApp } from "./Componets/Crud";
import { Edi } from "./Componets/Edi";
import { Rutas } from "./Componets/Rutas";


function App() {
  return (
    <>
    <UserProvider>
    <BrowserRouter>
    <Routes>
      <Route path={Rutas.home} element={<CrudApp/>} />
      <Route path={Rutas.edit} element={<Edi/>} />
    </Routes>
    </BrowserRouter>
    </UserProvider>
    
    </>
  );
}

export default App;
