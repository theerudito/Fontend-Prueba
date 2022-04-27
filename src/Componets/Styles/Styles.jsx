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

  :hover {
    background-color: orange;
    color: black;
  }
`;

export const BotonEdit = styled.link`
  background-color: tomato;
  text-decoration: none;
  color: black;
  border: none;
  border-radius: 10px;
  color: white;

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
`
