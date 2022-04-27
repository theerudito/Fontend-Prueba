import React from "react";
import "./estilos.css";
import { Article, ButtonClose, DivContainer } from "./Styles";

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Article
        className={`modal ${isOpen && "is-open"} item`}
        onClick={closeModal}
      >
        <DivContainer className="modal-container" onClick={handleModalClick}>
          {children}
          <ButtonClose onClick={closeModal} className="modal-close">
            X
          </ButtonClose>
        </DivContainer>
      </Article>
    </>
  );
};
