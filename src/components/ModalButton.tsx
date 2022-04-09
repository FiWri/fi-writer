import { useState } from "react";
import Modal from "styled-react-modal";
import { Theme } from "../themes";
import { Button } from "./Button";

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
`;

export const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Button onClick={toggleModal}>Click me</Button>
      <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
        <span>I am a modal!</span>
        <Button onClick={toggleModal}>Close me</Button>
      </StyledModal>
    </div>
  );
};
