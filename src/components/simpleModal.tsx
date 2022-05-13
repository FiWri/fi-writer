import { Trans } from '@lingui/macro';
import { ReactNode } from 'react';
import { Box, BoxProps, Button, Flex, Heading } from 'theme-ui';

import { useSimpleModal } from '~/hooks';

// border: solid ${({ theme }: { theme: Theme }) => theme.colors?.muted};
// border-radius: 3em;
interface StyledModalProps extends BoxProps {
  isOpen: boolean;
}
const StyledModal = ({ isOpen, ...props }: StyledModalProps) => (
  <Box
    sx={{
      border: 'thick',
      borderRadius: 'radius3',
      bg: 'background',
      color: 'text',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '1em 1em',
      width: '60vw',
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

export const SimpleModal = ({ children, title }: SimpleModalProps) => {
  const { isOpen, closeModal } = useSimpleModal();
  console.log(isOpen);
  if (isOpen) {
    return (
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
    );
  }
  return <></>;
};
