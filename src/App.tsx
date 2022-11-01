import { ChakraProvider, theme } from "@chakra-ui/react";
import LoginProvider from "./Providers/LoginProvider";
import RoutesComponent from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <ChakraProvider theme={theme}>
    <LoginProvider>
      <RoutesComponent />
    </LoginProvider>
    <ToastContainer />
  </ChakraProvider>
);
