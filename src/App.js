import React from "react";
import { MainContainer } from "./components/MainContainer";
import { MantineProvider } from "@mantine/core";
import Video from "./assets/Background1.mp4";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cardDataAction } from "./redux/reducers/CardDataReducer";

function App() {
  const dispatch = useDispatch();
  const cardData = useSelector((store) => store.cardData);
  dispatch(cardDataAction(["12313132"]));
  console.log(cardData);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
