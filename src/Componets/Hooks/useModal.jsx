import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const opeModal = () => {
    setIsOpen(true);
  };

  const closeMOdal = () => {
    setIsOpen(false);
  };

  return [isOpen, opeModal, closeMOdal];
};
