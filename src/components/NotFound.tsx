/** @jsxImportSource theme-ui */

import { Flex } from "theme-ui";

export const NotFound = () => (
  <Flex
    sx={{
      bg: "background",
      alignItems: "center",
      flexDirection: "column",
      height: "100%",
      width: "100%",
    }}
  >
    <h1 sx={{ fontSize: "10em" }}>404</h1>
    <h2>The page you&apos;re trying to reach does not exist. Sorry about that!</h2>
  </Flex>
);
