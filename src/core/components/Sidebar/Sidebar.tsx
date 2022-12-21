import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { Note } from "../../api/invoks";

interface SidebarProps {
  notes: Note[];
}

const Sidebar = ({ notes }: SidebarProps) => {
  return (
    <>
      {notes?.map((note) => (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Link href="/panel/dashboard">{note.title}</Link>
        </Box>
      ))}
    </>
  );
};

export default Sidebar;
