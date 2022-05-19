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
  background-color: tomato;
  color: black;
  border: none;
  border-radius: 10px;
  color: white;
 height: 35px;
  :hover {
    background-color: orange;
    color: black;
  }
`;

export const BotonEliminar = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 10px;
  margin-left: 20px;
  height: 35px;
  :hover {
    background-color: rebeccapurple;
    color: black;
  }
`;

export const THEAD = styled.thead`
  background-color: purple;
  color: white;
`;

export const TH = styled.th`
  background-color: purple;
`;

export const THBODY = styled.tbody`
  background-color: gray;
  color: white;
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
  width: 35px;
  background-color: aquamarine;
  margin: 2px auto;
  display: flex;
  border-radius: 50%;
  border: solid 1px white;
  object-fit: contain;
`;

export const ContainerListUser = styled.div`
  background-color: gray;
  color: white;
  :hover {
    background-color: greenyellow;
    color: black;
  }
`;

export const UserList = styled.li`
  list-style: none;
  display: flex;
`;

export const TitlesUser = styled.li`
 color: white;
  margin: auto;
  list-style: none;
  display: flex;
`;

export const TitlesUserUl = styled.ul`
  background-color: none ;
  margin: 2px auto;
  display: flex;
  background-color: purple;
`;

export const TitlesUserUl2 = styled.ul`
  background-color: none ;
  margin: 2px auto;
  display: flex;
`;
