import { Flex, Spacer, Center, Text,Image } from "@chakra-ui/react";
import logo from '../images/logoBW.svg';

export function Header() {
  return (
    <div className="Header">
      <Flex color="white"  height= "108px" >
        <Center flex = "1" bg="green.500">
          <Image 
            src={logo} alt="logo"/>
        </Center>

        <Center flex = "3"bg="blue.500">
          <Text>Box 2</Text>
        </Center>

        <Center flex = "1"bg="tomato">
          <Text>Box 3</Text>
        </Center>
      </Flex>
    </div>
  );
}
