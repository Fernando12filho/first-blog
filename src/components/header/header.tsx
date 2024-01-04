import { Flex, Spacer, Center, Text,Image } from "@chakra-ui/react";
import './header.css'



export function Header() {
  return (
    <div className="Header">
      <Flex height= "108px" bg={"blue.900"}>
        <Center flex = "1">
          <Image 
           alt="logo"/>
        </Center>

        <Center flex = "3">
          <Text>Box 2</Text>
        </Center>

        <Center flex = "1">
          <Text>Box 3</Text>
        </Center>
      </Flex>
    </div>
  );
}
