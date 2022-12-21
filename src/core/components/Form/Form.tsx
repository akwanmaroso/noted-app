import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Textarea, useToast } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { addNote } from "../../api/invoks";
import { NoteContext } from "../../context/noteContext";

const Form = () => {
  const toast = useToast();

  const [content, setContent] = useState("");
  const { activeColor, setActiveColor, fetchNote } = useContext(NoteContext);

  const handleAddNote = () => {
    if (!content) {
      toast({
        title: "Error",
        description: "Please insert a note",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    addNote(content, activeColor)
      .then((res) => {
        console.log(res);
        toast({
          title: "Success",
          description: "a note has been added",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => console.error(err))
      .finally(async () => {
        setContent("");
        await fetchNote();
      });
  };

  return (
    <Box bg="white" p="3" rounded="xl" w="100%" boxShadow="lg">
      <Textarea
        fontWeight={300}
        w="100%"
        height="160px"
        bg="white"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter you note..."
        resize="none"
        border={0}
        focusBorderColor="white"
        spellCheck="false"
      />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px="16px"
        py="12px"
        fontSize="md"
      >
        <div>
          <Button
            onClick={() => setActiveColor("green.300")}
            colorScheme="whatsapp"
            borderRadius="100%"
            size="sm"
            mr="1"
            p="0"
          >
            {activeColor === "green.300" ? <CheckIcon /> : ""}
          </Button>
          <Button
            onClick={() => setActiveColor("blue.300")}
            colorScheme="linkedin"
            borderRadius="100%"
            size="sm"
            mr="1"
            p="0"
          >
            {activeColor === "blue.300" ? <CheckIcon /> : ""}
          </Button>
          <Button
            onClick={() => setActiveColor("orange.300")}
            colorScheme="yellow"
            borderRadius="100%"
            size="sm"
            mr="1"
            p="0"
          >
            {activeColor === "orange.300" ? <CheckIcon /> : ""}
          </Button>
          <Button
            onClick={() => setActiveColor("purple.300")}
            colorScheme="purple"
            borderRadius="100%"
            size="sm"
            mr="1"
            p="0"
          >
            {activeColor === "purple.300" ? <CheckIcon /> : ""}
          </Button>
          <Button
            onClick={() => setActiveColor("red.300")}
            colorScheme="red"
            borderRadius="100%"
            size="sm"
            mr="1"
            p="0"
          >
            {activeColor === "red.300" ? <CheckIcon /> : ""}
          </Button>
        </div>
        <div>
          <Button
            colorScheme="gray"
            fontWeight="500"
            color="gray.600"
            onClick={handleAddNote}
          >
            Add
          </Button>
        </div>
      </Box>
    </Box>
  );
};
export default Form;
