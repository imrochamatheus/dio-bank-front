import * as React from "react";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "../../components/header";

interface IStorageUserData {
  name: string;
  email: string;
}

const Home: React.FC<{}> = () => {
  const [user, setUser] = React.useState<IStorageUserData>(
    {} as IStorageUserData
  );

  React.useEffect(() => {
    const user = localStorage.getItem("@user");

    if (user) setUser(JSON.parse(user));
  }, []);

  return (
    <>
      <Header />
      <Flex height="90vh" align={"center"} justifyContent="center">
        <Center py={6}>
          <Box
            width="350px"
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  {user.name}
                </Heading>
              </Stack>
            </Box>
          </Box>
        </Center>
      </Flex>
    </>
  );
};

export default Home;
