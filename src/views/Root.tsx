import { useState } from 'react';
import { Button, Flex, Heading, Image, Link, Text } from 'theme-ui';
import { ModalButton } from '../components/ModalButton';
import { useColor } from '../themes';
import { useTheme } from '../themes/useTheme';
import logo from './logo.svg';
import './Root.scss';
import { RootHeader } from './RootHeader';

export const Root = () => {
  const { switchTheme } = useTheme();
  const { switchColorMode } = useColor();

  const [count, setCount] = useState(0);
  return (
    <div className="Root">
      <RootHeader>
        <Image
          src={logo}
          className="Root-logo"
          alt="logo"
          sx={{
            height: '40vmin',
            pointerEvents: 'none',
          }}
        />
        <Heading as="h1">Hello Vite + React!</Heading>
        <Flex>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={() => switchTheme()}
          >
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
          Edit <code>Root.tsx</code> and save to test HMR updates.
        </Text>
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
      </RootHeader>
    </div>
  );
};
