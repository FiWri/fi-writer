import { useState } from "react";
import { Button } from "theme-ui";
import { ModalButton } from "../components/ModalButton";
import { useTheme } from "../themes/useTheme";
import "./Root.scss";
import logo from "./Root/logo.svg";
import { RootHeader } from "./Root/RootHeader";

interface RootProps {
  switchTheme: () => void;
}
export const Root = () => {
  const { switchTheme } = useTheme();
  const [count, setCount] = useState(0);
  return (
    <div className="Root">
      <RootHeader>
        <img src={logo} className="Root-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
          <Button variant="secondary" type="button" onClick={() => switchTheme()}>
            switch theme
          </Button>
          <ModalButton />
        </div>
        <p>
          Edit <code>Root.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="Root-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {" | "}
          <a className="Root-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </RootHeader>
    </div>
  );
};
