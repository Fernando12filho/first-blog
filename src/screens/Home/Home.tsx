import { Grid, GridItem } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Header } from "../../components/header/header";

export function Home() {
  return (
    <div>
      <Grid
        h="1000px"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={1}
      >
        <GridItem rowSpan={6} colSpan={1} bg="tomato" />
        <GridItem colSpan={4}  bg="blue.400" />
        <GridItem colSpan={4} rowSpan={5} bg="tomato" />
      </Grid>
    </div>
  );
}
