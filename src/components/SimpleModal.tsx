import { Trans } from '@lingui/macro';
import { ReactNode } from 'react';
import Modal from 'styled-react-modal';
import { BoxProps, Button, Flex, Heading, useThemeUI } from 'theme-ui';

import { useSimpleModal } from '~/hooks';
import { FiwriTheme } from '~/themes';

// border: solid ${({ theme }: { theme: Theme }) => theme.colors?.muted};
// border-radius: 3em;
const StyledModal = Modal.styled`
      border: ${({ theme }: { theme: FiwriTheme }) => theme.borders.thick};
      border-radius: ${({ theme }: { theme: FiwriTheme }) =>
        theme.radii.radius3};
      background-color: ${({ theme }: { theme: FiwriTheme }) =>
        theme.colors?.background};
      color: ${({ theme }: { theme: FiwriTheme }) => theme.colors?.text};
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 1em 1em;
      width: 60vw;
`;

const Content = (props: BoxProps) => (
  <Flex
    sx={{
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '20vh',
      maxHeight: '80vh',
      justifyContent: 'center',
      overflowY: 'scroll',
    }}
  >
    {props.children}
  </Flex>
);

interface SimpleModalProps {
  title?: string;
  children?: ReactNode;
}

export const SimpleModal = ({ children, title }: SimpleModalProps) => {
  const { isOpen, closeModal } = useSimpleModal();
  const { theme } = useThemeUI();

  return (
    <StyledModal
      theme={theme}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
      isOpen={isOpen}
    >
      {title && <Heading as="h2">{title}</Heading>}
      <Content>{children}</Content>
      <Flex sx={{ justifyContent: 'center', margin: '1em' }}>
        <Button onClick={closeModal}>
          <Trans id="modal.close">Close</Trans>
        </Button>
      </Flex>
    </StyledModal>
  );
};
