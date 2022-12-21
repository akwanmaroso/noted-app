import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  return (
    <Box
      display="flex"
      m="30px auto"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      bg="white"
      rounded="xl"
      w="25%"
      minW="200px"
      boxShadow="lg"
    >
      <Box position="fixed" zIndex="1" bg="white" rounded="xl">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Search..."
            border="2px"
            focusBorderColor="white"
            fontWeight="300"
            spellCheck="false"
          />
        </InputGroup>
      </Box>
    </Box>
  );
};
export default Search;
