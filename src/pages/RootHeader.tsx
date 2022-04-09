import styled from "styled-components";
import { Theme } from "../themes";

interface RootHeaderProps extends React.HTMLProps<HTMLButtonElement> {
  theme: Theme;
}

export const RootHeader = styled.header<RootHeaderProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
