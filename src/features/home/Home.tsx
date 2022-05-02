import { keyframes } from '@emotion/react';
import { Trans } from '@lingui/macro';
import { Link as NavLink } from 'react-router-dom';
import { Button, Flex, Heading, Image, Link, Text } from 'theme-ui';

import { SimpleModal } from '~/components';
import { useColor, useLocale, useSimpleModal, useTheme } from '~/hooks';
import { routes } from '~/Router';

import logo from './fiwri.png';

const rotate = keyframes({
  from: { transform: 'scale(0.98)' },
  '50%': { transform: 'scale(1.02)' },
  to: { transform: 'scale(0.98)' },
});

export const Home = () => {
  const { theme, switchTheme } = useTheme();
  const { switchColorMode } = useColor();
  const { switchLocale } = useLocale();
  const { openModal } = useSimpleModal();

  return (
    <Flex
      sx={{
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Image
        src={logo}
        className="fiwri-logo"
        alt="logo"
        sx={{
          animation: `${rotate} infinite 2s ease-in-out`,
          height: '40vmin',
          pointerEvents: 'none',
        }}
      />
      <Heading as="h1">
        <Trans>FiWri</Trans>
      </Heading>
      <Text>
        <Trans>A PWA made for planning and writing interactive fictions!</Trans>
      </Text>
      <Flex className="routes-wrapper">
        <NavLink to={routes.STORY_VIEWER}>
          <Button type="button">Route: Story viewer</Button>
        </NavLink>
        <NavLink to={routes.STORY_WRITER}>
          <Button type="button">Route: Story writer</Button>
        </NavLink>
      </Flex>
      <Flex className="test-buttons">
        <Button type="button" onClick={() => switchLocale()}>
          <Trans>switch language</Trans>
        </Button>
        <Button type="button" onClick={() => switchTheme()}>
          <Trans>switch theme</Trans>
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => switchColorMode()}
        >
          <Trans>switch color mode</Trans>
        </Button>
        <Button type="button" onClick={() => openModal()}>
          <Trans>open modal</Trans>
        </Button>
        <SimpleModal>{JSON.stringify(theme, undefined, 2)}</SimpleModal>
      </Flex>
      <Text>
        <Link
          className="Root-link"
          href="https://github.com/FiWri/fi-writer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans>Github</Trans>
        </Link>
      </Text>
    </Flex>
  );
};
