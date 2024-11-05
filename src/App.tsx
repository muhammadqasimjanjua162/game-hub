import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  // Control visibility of the "aside" section based on screen size
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // Mobile and tablet: nav and main in separate rows
        lg: `"nav nav" "aside main"`, // Large screens: nav in full row, aside and main in half-width columns
      }}
      templateColumns={{
        base: "1fr", // Single column for mobile and tablet
        lg: "1fr 1fr", // Two equal columns for large screens
      }}
      gap={4}
    >
      <GridItem area="nav" bg="red" colSpan={2}>
        <Navbar />
      </GridItem>

      {showAside && (
        <GridItem area="aside" bg="blue">
          Aside
        </GridItem>
      )}

      <GridItem area="main" bg="brown">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
