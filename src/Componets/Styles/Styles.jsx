import styled from "styled-components";

export const ContenedorPrincipal = styled.div``;

export const TituloPrincipal = styled.p`
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;

export const BotonCrear = styled.button`
  border: none;
  border-radius: 10px;
  background-color: greenyellow;
  color: black;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: green;
    color: white;
  }
`;

export const BotonEditar = styled.button`
  background-color: #37cafb;
  color: black;
  border: none;
  border-radius: 10px;
  height: 25px;
  margin: auto;
  :hover {
    background-color: #587fd6;
    color: white;
  }
`;

export const BotonEliminar = styled.button`
  background-color: #fa210a;
  color: black;
  border: none;
  border-radius: 10px;
  margin-left: 20px;
  height: 25px;
  margin: auto;
  :hover {
    background-color: #fa0f0a;
    color: white;
  }
`;

export const Alerta = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: greenyellow;
  border-radius: 10px;
  width: 250px;
  margin-top: 20px;
`;

export const TituloAlert = styled.p`
  color: black;
  margin: auto;
`;

export const ContainerSeachInput = styled.div`
  margin-left: auto;
  width: 200px;
  margin-bottom: 10px;
  contain: auto;
`;

export const SeachInput = styled.input`
  background-color: white;
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
`;

export const ContainerLoader = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: auto;
`;

export const LoaderImg = styled.img`
  background: green;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: auto;
`;

export const Profie = styled.img`
  width: 30px;
  background-color: aquamarine;
  margin: 2px auto;
  display: flex;
  border-radius: 50%;
  border: solid 1px white;
  object-fit: contain;
  align-items: center;
  justify-content: center;
`;

export const UserList = styled.li`
  list-style: none;
  margin: auto;
  display: flex;
`;

export const TitlesUser = styled.li`
  color: white;
  margin: auto;
  list-style: none;
  display: flex;
`;

export const TitlesUserUl = styled.ul`
  margin: 2px auto;
  display: flex;
  background-color: purple;
  border: solid 1px black;
`;

export const TitlesUserUl2 = styled.ul`
  margin: 1px;
  display: flex;
  border: solid 1px black;
`;

export const ContainerID = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 50px;
  display: grid;
`;

export const ContainerAvatar = styled(ContainerID)`
  width: 50px;
  display: grid;
`;

export const ContainerFirstName = styled(ContainerID)`
  width: 100px;
  display: grid;
`;
export const ContainerLastName = styled(ContainerID)`
  width: 100px;
  display: grid;
`;

export const ContainerCountry = styled(ContainerID)`
  width: 150px;
  display: grid;
`;

export const ContainerPhone = styled(ContainerID)`
  width: 100px;
  display: grid;
`;

export const ContainerEmail = styled(ContainerID)`
  width: 200px;
  display: grid;
`;

export const ContainerActiones = styled.div`
  width: 140px;
  display: grid;
`;

export const ContainerTable = styled.div`
  background-color: gray;
  color: white;
  :hover {
    background-color: greenyellow;
    color: black;
  }
`;
