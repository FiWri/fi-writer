import { Trans } from '@lingui/macro';
import { Flex, Heading } from '@theme-ui/components';

export const NotFound = () => (
  <Flex
    sx={{
      bg: 'background',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
    }}
  >
    <Heading as="h1" sx={{ fontSize: '10em' }}>
      404
    </Heading>
    <Heading as="h2">
      <Trans id="404-not-found">
        The page you&apos;re trying to reach does not exist. Sorry about that!
      </Trans>
    </Heading>
  </Flex>
);
