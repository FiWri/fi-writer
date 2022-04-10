/** @jsxImportSource theme-ui */

import { HTMLProps } from "react";

export const RootHeader: React.FC = (props: HTMLProps<HTMLDivElement>) => (
  <header
    {...props}
    sx={{
      bg: "background",
      color: "text",
      minHeight: "100vh",
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
    }}
  />
);
