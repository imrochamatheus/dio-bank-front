import { ChakraProvider, theme } from "@chakra-ui/react";
import LoginPage from "./Pages/login";

export const App = () => (
  <ChakraProvider theme={theme}>
    <LoginPage />
  </ChakraProvider>
);
