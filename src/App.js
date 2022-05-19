import UserProvider from "./Componets/ContextProvider/UserProvider";
import { CrudApp } from "./Componets/Crud";

function App() {
  return (
    <>
    <UserProvider>
     <CrudApp/>
    </UserProvider>
    
    </>
  );
}

export default App;
