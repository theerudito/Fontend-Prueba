import styled from "styled-components";

export const Article = styled.article`
  .modal {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    margin: auto;
    display: none;
    justify-content: center;
    align-items: center;
  }

  .modal.is-open {
    display: flex;
  }
`;

export const DivContainer = styled.div`
  .modal-contanier {
    position: relative;
    min-width: 320px;
    max-width: 450px;
    min-height: 200px;
    min-height: 200px;
    overflow-y: auto;
    padding: 1rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: navajowhite;
  }
`;

export const ButtonClose = styled.button`
  border: none;
  border-radius: 50%;
  background-color: blueviolet;
  height: 25px;
  width: 25px;
  :hover {
    background-color: purple;
    color: white;
  }
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`;

export const ButtonSave = styled.button`
  background-color: blueviolet;
  color: black;
  border: none;
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  :hover {
    background-color: purple;
    color: white;
  }
`;
