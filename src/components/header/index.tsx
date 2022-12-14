import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Header: React.FC<{}> = () => {
  return (
    <Flex
      bg="tomato"
      width="100%"
      p={4}
      color="white"
      background="#22c25f"
      position="sticky"
      justifyContent="center"
    >
      <Box maxW="1200px" w="100%">
        <Text fontSize="3xl" fontWeight="bold" color="#ffffff">
          DioBank
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
