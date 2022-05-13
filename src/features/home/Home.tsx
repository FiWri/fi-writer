import { keyframes } from '@emotion/react';
import { Trans } from '@lingui/macro';
import { Button, Flex, Heading, Image, Link, Text } from '@theme-ui/components';
import { Link as NavLink } from 'react-router-dom';

import { useColor, useLocale, useTheme } from '~/hooks';
import { routes } from '~/Router';

import { useModalContext } from './../../contexts/modalContext';
import logo from './fiwri.png';

const rotate = keyframes({
  from: { transform: 'scale(0.98)' },
  '50%': { transform: 'scale(1.02)' },
  to: { transform: 'scale(0.98)' },
});

export const Home = () => {
  const { switchTheme } = useTheme();
  const { switchColorMode } = useColor();
  const { switchLocale } = useLocale();
  const { openModal } = useModalContext();

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
        <Trans id="home.app-description">
          A PWA made for planning and writing interactive fictions!
        </Trans>
      </Text>
      <Flex className="routes-wrapper">
        <NavLink to={routes.STORY_VIEWER}>
          <Button data-testid="home.nav-story-viewer" type="button">
            Route: Story viewer
          </Button>
        </NavLink>
        <NavLink to={routes.STORY_WRITER}>
          <Button data-testid="home.nav-story-writer" type="button">
            Route: Story writer
          </Button>
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
