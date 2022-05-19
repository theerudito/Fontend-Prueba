import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { userContext } from "./ContextProvider/UserProvider";
import { FormEdit, FormularioCrearCliente } from "./Fomulario/Formulario";

import { useModal } from "./Hooks/useModal";
import { Skeleton } from "./Loader/skeleton";
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
  ContainerLoader,
  LoaderImg,
  Profie,
  UserList,
  ContainerListUser,
  TitlesUser,
  TitlesUserUl,
  TitlesUserUl2,
} from "./Styles/Styles";

export const CrudApp = () => {
  const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(true);
  const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(true);
  const { user, getAllUser, getOneUser, deleteUser } = useContext(userContext);
  const [searh, setSeach] = useState("");
  const [loader] = useState(true);

  useEffect(() => {
    getAllUser();
  }, []);

  let result = !user
    ? user
    : user.filter(
        (data) =>
          data.firstName.toLowerCase().includes(searh.toLowerCase()) ||
          data.lastName.toLowerCase().includes(searh.toLowerCase()) ||
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

        <TitlesUserUl>
          <TitlesUser
            style={{
              marginRight: "auto",
              width: "20px",
              background: "red",
              display: "flex",
            }}
          >
            ID
          </TitlesUser>
          <TitlesUser>Avavar</TitlesUser>
          <TitlesUser>Name</TitlesUser>
          <TitlesUser>LastName</TitlesUser>
          <TitlesUser>Country</TitlesUser>
          <TitlesUser>Phone</TitlesUser>
          <TitlesUser>Email</TitlesUser>
          <TitlesUser>Actions</TitlesUser>
        </TitlesUserUl>

        {result.length > 0 ? (
          result.map((userData) => (
            <ContainerListUser key={userData.id}>
              <TitlesUserUl2>
                <div
                  style={{
                    marginRight: "auto",
                    width: "40px",
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <UserList>{userData.id}</UserList>
                </div>

                <div
                  style={{
                    marginRight: "auto",
                    width: "40px",
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Profie src={userData.pic} alt="pic" />
                </div>

                <div
                  style={{
                    marginRight: "auto",
                    width: "40px",
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <UserList>{userData.firstName}</UserList>
                </div>

                <div
                  style={{
                    marginRight: "auto",
                    width: "100px",
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <UserList>{userData.lastName}</UserList>
                </div>

                <div
                  style={{
                    marginRight: "auto",
                    width: "100px",
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <UserList>{userData.country}</UserList>
                </div>

                <div
                  style={{
                    marginRight: "auto",
                    width: "100px",
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <UserList>{userData.phone}</UserList>
                </div>

                <div
                  style={{
                    marginRight: "auto",
                    width: "150px",
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <UserList>{userData.email}</UserList>
                </div>

                <BotonEditar
                  onClick={() => openModalEdit(getOneUser(userData.id))}
                >
                  Editar
                </BotonEditar>

                <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
                  <FormEdit idUser={userData.id} dataUser={userData} />
                </Modal>

                <BotonEliminar onClick={() => deleteUser(userData.id)}>
                  Delete
                </BotonEliminar>
              </TitlesUserUl2>
            </ContainerListUser>
          ))
        ) : (
          <ContainerLoader>
            {loader && (
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Loaders%2Friple.svg?alt=media&token=eb96bd80-90ab-422c-8a28-e26f3753009f"
                alt="loager"
              />
            )}
          </ContainerLoader>
        )}
      </div>
    </ContenedorPrincipal>
  );
};

{
  /* <table className="table table-hover">
          <THEAD>
            <tr>
              <th>Avatar</th>
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
            {result.length > 0 ? (
              result.map((item, id) => (
                <tr key={id}>
                  <Profie src={item.pic} alt="pic" />
                  <td>{item.id} </td>
                  <td>{item.firstName}</td>
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
              ))
            ) : (
              <ContainerLoader>{loader && <Skeleton />}</ContainerLoader>
            )}
          </THBODY>
        </table> */
}
