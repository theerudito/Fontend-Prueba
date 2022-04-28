import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FormularioCrearCliente } from "./Fomulario/Formulario";
import { ApiRestData } from "./Helpers/ApiRest";
import { getallClients } from "./Helpers/Helpers";

import { useModal } from "./Hooks/useModal";
import { Modal } from "./Modal/Modal";
import {
  BotonCrear,
  BotonEliminar,
  ContenedorPrincipal,
  TH,
  THBODY,
  THEAD,
  TituloPrincipal,
} from "./Styles/Styles";

const url = "http://localhost:5000/clients";

export const CrudApp = () => {
  const [data, setData] = useState(ApiRestData);
  const [isOpenModalCrear, openModalCrear, closeModalCrear] = useModal(true);

  const GetDatas = async () => {
    let res = await getallClients();
    setData(res.data);
  };

  useEffect(() => {
    GetDatas();
  }, []);

  const deleteRegistre = async (id) => {
    await axios.delete(`${url}/${id}`);
    console.log("eliminando");
    GetDatas();
  };

  return (
    <ContenedorPrincipal>
      <TituloPrincipal>Crud Principal</TituloPrincipal>
      <div>
        <BotonCrear onClick={openModalCrear}>Create</BotonCrear>
      </div>

      <Modal isOpen={isOpenModalCrear} closeModal={closeModalCrear}>
        {/* <FormularioCrear /> */}
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
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn-sm btn-primary"
                    style={{ textDecoration: "none", borderRadius: "10px" }}
                  >
                    Editar
                  </Link>

                  <BotonEliminar onClick={() => deleteRegistre(item.id)}>
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
