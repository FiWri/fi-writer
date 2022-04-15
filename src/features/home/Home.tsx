/** @jsxImportSource theme-ui */

import { keyframes } from '@emotion/react';
import { Link as NavLink } from 'react-router-dom';
import { Button, Flex, Heading, Image, Link, Text } from 'theme-ui';
import { ModalButton } from '../../components/ModalButton';
import { useColor, useTheme } from '../../themes';
import logo from './fiwri.png';

const rotate = keyframes({
  from: { transform: 'scale(0.98)' },
  '50%': { transform: 'scale(1.02)' },
  to: { transform: 'scale(0.98)' },
});

export const Home = () => {
  const { switchTheme } = useTheme();
  const { switchColorMode } = useColor();

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
      <Heading as="h1">This is FiWri!</Heading>
      <Text>A PWA made for planning and writing interactive fictions!</Text>
      <Flex className="routes-wrapper">
        <NavLink to="/story-viewer">
          <Button type="button">Story viewer</Button>
        </NavLink>
        <NavLink to="/story-writer">
          <Button type="button">Story writer</Button>
        </NavLink>
      </Flex>
      <Flex className="test-buttons">
        <Button type="button" onClick={() => switchTheme()}>
          switch theme
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => switchColorMode()}
        >
          switch color mode
        </Button>
        <ModalButton />
      </Flex>
      <Text>
        <Link
          className="Root-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
        {' | '}
        <Link
          className="Root-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </Link>
      </Text>
    </Flex>
  );
};
