import { Trans } from '@lingui/macro';
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  FlexProps,
} from '@theme-ui/components';
import { ReactNode } from 'react';
import * as ReactDom from 'react-dom';

import { useSimpleModal } from '~/hooks';

// border: solid ${({ theme }: { theme: Theme }) => theme.colors?.muted};
// border-radius: 3em;
interface StyledModalProps extends BoxProps {
  isOpen: boolean;
}

const Overlay = (props: FlexProps) => (
  <Flex
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, .7)',
    }}
  >
    {props.children}
  </Flex>
);

const StyledModal = ({ isOpen, ...props }: StyledModalProps) => (
  <Box
    sx={{
      border: 'thick',
      borderRadius: 'radius3',
      bg: 'white',
      color: 'text',
      position: 'fixed',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '1em 1em',
      width: '60vw',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    {props.children}
  </Box>
);

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
console.log(document.getElementById('portal'));
const portalDiv: HTMLElement = document.getElementById('portal')!;

export const SimpleModal = ({ children, title }: SimpleModalProps) => {
  const { isOpen, closeModal } = useSimpleModal();
  console.log(isOpen);
  if (isOpen) {
    return ReactDom.createPortal(
      <>
        <Overlay />
        <StyledModal
          // onBackgroundClick={closeModal}
          // onEscapeKeydown={closeModal}
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
      </>,
      portalDiv
    );
  }
  return <></>;
};
