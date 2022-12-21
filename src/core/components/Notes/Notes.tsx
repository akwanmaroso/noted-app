import { Box, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Note } from "../../api/invoks";
import { NoteContext } from "../../context/noteContext";
import ModalUp from "../Modal";
import styles from "./Notes.module.css";

const Notes = () => {
  const { notes, setCurrentNote } = useContext(NoteContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (note: Note) => {
    setCurrentNote(note);
    setIsOpen(true);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="row"
        pt="5"
      >
        {notes?.map((note) => (
          <Box
            key={note.id}
            w="300px"
            h="300px"
            m="5"
            p="6"
            bg={note.color}
            className={styles.box}
            onClick={() => handleOpenModal(note)}
            borderRadius="16"
            rounded="xl"
            boxShadow="xl"
            overflow="hidden"
            textOverflow="ellipsis"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Text
              className={styles.noteFont}
              color="gray.700"
              textShadow="0 0 1px #4A5568"
              p={1}
            >
              {note.content}
            </Text>
          </Box>
        ))}
      </Box>

      {isOpen && <ModalUp isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Notes;
