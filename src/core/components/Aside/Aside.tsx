import { Box, Hide, Spacer, Text } from "@chakra-ui/react";
import Form from "../Form";

const Aside = () => {
  return (
    <>
      <Hide below="lg">
        <Box
          w="100%"
          m="0 20px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="gray.200"
        >
          <Spacer />
          <Text
            fontSize="3xl"
            fontWeight="300"
            color="gray.600"
            p="3"
            textShadow="0 0 2px #4A5568"
          >
            Noted App
          </Text>
          <Form />
        </Box>
      </Hide>
    </>
  );
};

export default Aside;
