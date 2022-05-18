import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { userContext } from "./ContextProvider/UserProvider";
import { FormEdit, FormularioCrearCliente } from "./Fomulario/Formulario";

import { useModal } from "./Hooks/useModal";
import { Modal } from "./Modal/Modal";
import {
  BotonCrear,
  BotonEditar,
  BotonEliminar,
  ContainerSeachInput,
  ContenedorPrincipal,
  TH,
  THBODY,
  THEAD,
  TituloPrincipal,
  SeachInput,
} from "./Styles/Styles";

export const CrudApp = () => {
  const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(true);
  const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(true);
  const { user, getAllUser, getOneUser, deleteUser } = useContext(userContext);
  const [searh, setSeach] = useState("");

  useEffect(() => {
    getAllUser();
  }, []);

  let result = !user
    ? user
    : user.filter(
        (data) =>
          data.firstName.toLowerCase().includes(searh.toLowerCase()) ||
          data.lastName.toLowerCase().includes(searh.toLowerCase())  ||
          data.country.toLowerCase().includes(searh.toLowerCase())
      );

  const seachUser = (e) => {
    setSeach(e.target.value);
  };

  return (
    <ContenedorPrincipal>
      <TituloPrincipal>Crud Principal</TituloPrincipal>
      <div>
        <BotonCrear onClick={openModalCreate}>Create</BotonCrear>
      </div>

      <Modal isOpen={isOpenModalCreate} closeModal={closeModalCreate}>
        <FormularioCrearCliente />
      </Modal>

      <div className="container">
        <ContainerSeachInput>
          <SeachInput
            type="text"
            placeholder="Search"
            value={searh}
            onChange={seachUser}
            className="container"
          />
        </ContainerSeachInput>
        <table className="table table-hover">
          <THEAD>
            <tr>
              <TH>ID</TH>
              <th>FirstName</th>
              <th>LastNane</th>
              <th>Country</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </THEAD>
          <THBODY>
            {result.map((item, id) => (
              <tr key={id}>
                <td>{item.id} </td>
                <td>{item.firstName} </td>
                <td>{item.lastName} </td>
                <td>{item.country} </td>
                <td>{item.phone} </td>
                <td>{item.email} </td>
                <td>
                  <BotonEditar
                    onClick={() => openModalEdit(getOneUser(item.id))}
                  >
                    Editar
                  </BotonEditar>

                  <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
                    <FormEdit idUser={id} dataUser={item} />
                  </Modal>

                  <BotonEliminar onClick={() => deleteUser(item.id)}>
                    Delete
                  </BotonEliminar>
                </td>
              </tr>
            ))}
          </THBODY>
        </table>
      </div>
    </ContenedorPrincipal>
  );
};
