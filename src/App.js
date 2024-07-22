import React, { useEffect } from "react";
import { MainContainer } from "./components/MainContainer";
import { MantineProvider } from "@mantine/core";
import Video from "./assets/Background1.mp4";
import "./App.scss";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="container">
        <video
          className="video-background"
          autoPlay
          muted
          loop
          src={Video}
          type="video/mp4"
        ></video>
        <MainContainer />
      </div>
    </MantineProvider>
  );
}

export default App;
