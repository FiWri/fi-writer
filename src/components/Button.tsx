import styled from "styled-components";
import { Theme } from "../themes";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  theme: Theme;
}

export const Button = styled.button<ButtonProps>`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondary};
`;
