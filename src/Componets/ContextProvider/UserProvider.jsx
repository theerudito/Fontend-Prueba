import { createContext, useState } from "react";
import {
  DELETEClient,
  getAllClients,
  getByIdClient,
  PUTClient,
} from "../Helpers/Helpers";

const userContext = createContext();

//const inicialValues = [];

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const getAllUser = async () => {
    const users = await getAllClients();
    setUser(users);
  };

  const getOneUser = async (id) => {
    console.log(id)
    await getByIdClient(id);
  };

  const updateUser = async (id) => {
    await PUTClient(id);
  };

  const deleteUser = async (id) => {
    await DELETEClient(id);
    console.log("Deleted");
    getAllUser();
  };

  const data = {
    user,
    setUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
  };

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
};

export { userContext };
export default UserProvider;
