import React from "react";
import "./App.scss";
import { MainContainer } from "./components/MainContainer";
import { MantineProvider } from "@mantine/core";
// import "./src/components/CustomCard.scss";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainContainer />
    </MantineProvider>
  );
}

export default App;
