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
  TituloPrincipal,
  SeachInput,
  ContainerLoader,
  LoaderImg,
  Profie,
  UserList,
  TitlesUser,
  TitlesUserUl,
  TitlesUserUl2,
  ContainerID,
  ContainerAvatar,
  ContainerFirstName,
  ContainerLastName,
  ContainerCountry,
  ContainerPhone,
  ContainerEmail,
  ContainerActiones,
  ContainerTable,
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
          <ContainerID>
            <TitlesUser>ID</TitlesUser>
          </ContainerID>

          <ContainerAvatar>
            <TitlesUser>Avavar</TitlesUser>
          </ContainerAvatar>

          <ContainerFirstName>
            <TitlesUser>Name</TitlesUser>
          </ContainerFirstName>

          <ContainerLastName>
            <TitlesUser>LastName</TitlesUser>
          </ContainerLastName>

          <ContainerCountry>
            <TitlesUser>Country</TitlesUser>
          </ContainerCountry>

          <ContainerPhone>
            <TitlesUser>Phone</TitlesUser>
          </ContainerPhone>

          <ContainerEmail>
            <TitlesUser>Email</TitlesUser>
          </ContainerEmail>

          <ContainerActiones>
            <TitlesUser>Actions</TitlesUser>
          </ContainerActiones>
        </TitlesUserUl>

        {result.length > 0 ? (
          result.map((userData) => (
            <ContainerTable key={userData.id}>
              <TitlesUserUl2>
                <ContainerID>
                  <UserList>{userData.id}</UserList>
                </ContainerID>

                <ContainerAvatar>
                  <Profie src={userData.pic} alt="pic" />
                </ContainerAvatar>

                <ContainerFirstName>
                  <UserList>{userData.firstName}</UserList>
                </ContainerFirstName>

                <ContainerLastName>
                  <UserList>{userData.lastName}</UserList>
                </ContainerLastName>

                <ContainerCountry>
                  <UserList>{userData.country}</UserList>
                </ContainerCountry>

                <ContainerPhone>
                  <UserList>{userData.phone}</UserList>
                </ContainerPhone>

                <ContainerEmail>
                  <UserList>{userData.email}</UserList>
                </ContainerEmail>

                <BotonEditar
                  onClick={() => openModalEdit(getOneUser(userData.id))}
                >
                  Editar
                </BotonEditar>

                <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
                  <FormEdit idUser={userData.pic} dataUser={userData} />
                </Modal>

                <BotonEliminar onClick={() => deleteUser(userData.id)}>
                  Delete
                </BotonEliminar>
              </TitlesUserUl2>
            </ContainerTable>
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
