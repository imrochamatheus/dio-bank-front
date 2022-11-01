import Header from "../../components/header";
import LoginForm from "../../components/loginForm";

import { Flex, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <>
      <Flex
        minHeight="100vh"
        direction="column"
        align={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Header />
        <Flex
          w={"100%"}
          align={"center"}
          justify="center"
          mt={useBreakpointValue({
            base: "10px",
            md: "100px",
          })}
        >
          <LoginForm />
        </Flex>
      </Flex>
    </>
  );
};

export default LoginPage;
