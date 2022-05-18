import React, { useState } from "react";
import { useEffect } from "react";
import { FormEdit, FormularioCrearCliente } from "./Fomulario/Formulario";
import { ApiRestData } from "./Helpers/ApiRest";
import { deleteClient, getallClients, getByIdClient } from "./Helpers/Helpers";
import { useModal } from "./Hooks/useModal";
import { Modal } from "./Modal/Modal";
import {
  BotonCrear,
  BotonEditar,
  BotonEliminar,
  ContenedorPrincipal,
  TH,
  THBODY,
  THEAD,
  TituloPrincipal,
} from "./Styles/Styles";

export const CrudApp = () => {
  const [data, setData] = useState(ApiRestData);
  const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(true);
  const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(true);

  const GetDatas = async () => {
    let res = await getallClients();
    setData(res.data);
  };

  useEffect(() => {
    GetDatas();
  }, []);

  const deleteRegistre = async (id) => {
    await deleteClient(id);
    GetDatas();
  };

  const getByIdUser = async (id) => {
    const data = await getByIdClient(id);
    console.log(data);
    return data;
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
        <table className="table table-hover">
          <THEAD>
            <tr>
              <TH>ID</TH>
              <th>FirstName</th>
              <th>LastNane</th>
              <th>Direction</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </THEAD>
          <THBODY>
            {data.map((item, id) => (
              <tr key={id}>
                <td>{item.id} </td>
                <td>{item.firstName} </td>
                <td>{item.lastName} </td>
                <td>{item.direction} </td>
                <td>{item.phone} </td>
                <td>{item.email} </td>
                <td>
                  <BotonEditar
                    onClick={() => openModalEdit(getByIdUser(item.id))}
                  >
                    Editar
                  </BotonEditar>
                  <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
                    <FormEdit data={getByIdUser} />
                  </Modal>

                  <BotonEliminar onClick={() => deleteRegistre(item.id)}>
                    Delete
                  </BotonEliminar>
                </td>
              </tr>
            ))}
          </THBODY>
        </table>

        <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
          <FormEdit data={getByIdUser} />
        </Modal>
      </div>
    </ContenedorPrincipal>
  );
};
