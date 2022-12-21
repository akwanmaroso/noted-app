import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import Aside from "../components/Aside/Aside";

interface LayoutProps {
  mainChildren: ReactElement | ReactNode;
  sideChildren: ReactElement | ReactNode;
}
export default function Layout({ mainChildren, sideChildren }: LayoutProps) {
  return (
    <Flex
      w={["100vw"]}
      h="100vh"
      display="flex"
      justifyContent="center"
      direction={["column", "column", "column", "row"]}
      bg="gray.200"
      p="0"
      overflow="hidden"
    >
      <Box
        w={["100%", "100%", "100%", "30%"]}
        display="flex"
        alignItems="center"
        borderRight="1px solid #A0AEC0"
      >
        {sideChildren}
      </Box>
      <Box w={["100%", "100%", "100%", "70%"]} h="100%" overflow="auto">
        {mainChildren}
      </Box>
    </Flex>
  );
}
