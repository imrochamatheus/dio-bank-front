import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { ILoginData } from "../../@types/login";
import { useLogin } from "../../Providers/LoginProvider";

const LoginForm: React.FC<{}> = () => {
  const { login } = useLogin();

  const handleSubmit: React.FormEventHandler = async (event): Promise<void> => {
    event.preventDefault();

    const { target: form } = event;
    const userData = Object.fromEntries(
      new FormData(form as HTMLFormElement).entries()
    ) as ILoginData;

    login(userData);
  };

  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Faça login agora mesmo!</Heading>
        <Text fontSize={"lg"} color={"gray.600"}>
          e aproveite todas as <Link color={"blue.400"}>vantagens</Link> ✌️
        </Text>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4} as="form" onSubmit={handleSubmit}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" required name="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" required name="password" />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Lembre de mim</Checkbox>

              <Link color={"blue.400"} as={RouterLink} to="/signup">
                Cadastrar-se
              </Link>
            </Stack>
            <Button
              type="submit"
              bg={"#68d592"}
              color={"white"}
              _hover={{
                bg: "#22c25f",
              }}
            >
              Entrar
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default LoginForm;
