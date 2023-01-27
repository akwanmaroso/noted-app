import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import Aside from "../core/components/Aside";
import Main from "../core/components/Main";
import Sidebar from "../core/components/Sidebar";
import { NoteContext } from "../core/context/noteContext";
import Layout from "../core/layouts/Layout";

function App() {
  const { fetchNote } = useContext(NoteContext);
  useEffect(() => {
    fetchNote()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <Sidebar>tes</Sidebar>
    </Box>
  );
}

export default App;
