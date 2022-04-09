import { useState } from "react";
import { Button } from "../components/Button";
import { ModalButton } from "../components/ModalButton";
import "./Root.scss";
import logo from "./logo.svg";
import { RootHeader } from "./RootHeader";

interface RootProps extends React.HTMLProps<HTMLDivElement> {
  toggleTheme: () => void;
}
export const Root = ({ toggleTheme }: RootProps) => {
  const [count, setCount] = useState(0);
  return (
    <div className="Root">
      <RootHeader>
        <img src={logo} className="Root-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
          <Button type="button" onClick={() => toggleTheme()}>
            toggle theme
          </Button>
          <ModalButton />
        </p>
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
