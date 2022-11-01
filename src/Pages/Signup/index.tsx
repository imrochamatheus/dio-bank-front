import * as React from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

import { IUser } from "../../@types/user";
import { addUser } from "../../api";

import { Link as RouterLink } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import Header from "../../components/header";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const SignupPage: React.FC<{}> = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler = async (event): Promise<void> => {
    event.preventDefault();

    const { target: form } = event;
    const formData = Object.fromEntries(
      new FormData(form as HTMLFormElement).entries()
    ) as IUser;

    const response = await addUser(formData);

    if (response.status === 201) {
      toast.success("Usuário cadastrado com sucesso");

      navigate("/");
    } else {
      toast.error("Não foi possível cadastrar o usuário");
    }
  };

  return (
    <Flex
      direction={"column"}
      minH={"100vh"}
      align={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Header />
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        mt={useBreakpointValue({
          base: "10px",
          md: "100px",
        })}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Inscreva-se
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            E fique por dentro de todas as novidades ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4} as="form" onSubmit={handleSubmit}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Nome</FormLabel>
                  <Input type="text" name="first_name" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Sobrenome</FormLabel>
                  <Input type="text" name="last_name" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  autoComplete="on"
                  name="password"
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#68d592"}
                color={"white"}
                _hover={{
                  bg: "#22c25f",
                }}
                type="submit"
              >
                Cadastrar
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Já possui cadastro?{" "}
                <Link color={"blue.400"} as={RouterLink} to="/">
                  Entrar
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignupPage;
