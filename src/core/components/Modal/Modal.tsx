import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Modal,
  Textarea,
  ModalFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { deleteNote, Note, updateNote } from "../../api/invoks";
import { NoteContext } from "../../context/noteContext";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const ModalUp = ({ isOpen, setIsOpen }: ModalProps) => {
  const toast = useToast();
  const { currentNote, fetchNote } = useContext(NoteContext);
  const [currentEditNote, setCurrentEditNote] = useState(currentNote.content);

  const handleDelete = () => {
    deleteNote(currentNote.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(async () => await fetchNote());

    setIsOpen(false);
    toast({
      title: "Success",
      description: "Successfully delete note",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    return;
  };

  const handleUpdate = () => {
    updateNote({ ...currentNote, content: currentEditNote })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(async () => await fetchNote());

    setIsOpen(false);
    toast({
      title: "Success",
      description: "Successfully update note",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    return;
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Note Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Textarea
            fontWeight="300"
            w="100%"
            h="160px"
            value={currentEditNote}
            onChange={(e) => setCurrentEditNote(e.target.value)}
            placeholder="Enter your note..."
            resize="none"
            focusBorderColor="none"
            spellCheck="false"
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            mr={3}
            fontWeight="300"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            colorScheme="green"
            fontWeight="300"
            isDisabled={
              currentNote.content !== currentEditNote && currentEditNote
                ? false
                : true
            }
            onClick={handleUpdate}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalUp;
