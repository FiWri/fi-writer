/** @jsxImportSource theme-ui */

import { useState } from "react";
import Modal from "styled-react-modal";
import { Button, Theme, useThemeUI } from "theme-ui";

const StyledModal = Modal.styled`
      align-items: center;
      background-color: ${({ theme }: { theme: Theme }) => theme.colors?.background};
      border: solid ${({ theme }: { theme: Theme }) => theme.colors?.muted};
      border-radius: 3em;
      box-sizing: content-box; // flex doesn't seem to take padding into account when calculating size for border-box
      color: ${({ theme }: { theme: Theme }) => theme.colors?.text};
      display: flex;
      height: 20em;
      justify-content: center;
      flex: 1 1 auto;
      flex-direction: column;
      max-width: 80vw;
      padding: 0.25em 0.5em;
      width: 20em;
`;

export const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useThemeUI();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Button onClick={toggleModal}>Click me</Button>
      <StyledModal theme={theme} isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
        <p>I am a modal!</p>
        <p
          sx={{
            overflowY: "scroll",
          }}
        >
          {JSON.stringify(theme, null, 2)}
        </p>
        <Button onClick={toggleModal}>Close me</Button>
      </StyledModal>
    </div>
  );
};
