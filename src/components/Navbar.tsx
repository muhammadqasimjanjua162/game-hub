import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react/dist/types/components/avatar/namespace";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image boxSize={"60px"} src={logo} />
      <Text>Hello</Text>
    </HStack>
  );
};

export default Navbar;
