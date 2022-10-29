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
import { FormEvent } from "react";

export const handleSubmit = (event: FormEvent) => {
  event.preventDefault();

  alert("Seja bem vindo!");
};

const LoginForm = () => {
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
            <Input type="email" required />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" required />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Lembre de mim</Checkbox>
              <Link color={"blue.400"}>Esqueceu sua senha?</Link>
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
