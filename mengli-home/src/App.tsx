import { message, notification } from "antd";
import "./App.css";
import backgroundImage from "./assets/168689.webp";
import { Layer } from "./Layer";
import WebBookView from "./WebLink/WebBookView";
import { FeedbackContext } from "./Context/Feedback";
import MouseFollowerRingLayer from "./Component/Layer/MouseFollowerRingLayer";
import FrostedGlassLayer from "./Component/Layer/FrostedGlassLayer";
import { RainBackgroundLayer } from "./Component/Layer/RainBackgroundLayer";
import { BackgroundImageLayer } from "./Component/Layer/BackgroundImageLayer";

function App() {
  const [messageApi, messageContextHolder] = message.useMessage();
  const [notificationApi, notificationContextHolder] =
    notification.useNotification();

  return (
    <>
      <Layer zIndex={100} id="FeedbackLayer" style={{ pointerEvents: "none" }}>
        {messageContextHolder}
        {notificationContextHolder}
      </Layer>
      <Layer zIndex={1} id="ComponentLayer">
        <FeedbackContext.Provider
          value={{
            api: {
              message: messageApi,
              notification: notificationApi,
            },
          }}
        >
          <WebBookView defaultWebBookId="start-book" />
        </FeedbackContext.Provider>
      </Layer>
      <Layer zIndex={-1} id="BackgroundLayer">
        <Layer zIndex={100} id="MouseFollowerLayer">
          <MouseFollowerRingLayer />
        </Layer>
        <Layer zIndex={50} id="FrostedGlassLayer">
          <FrostedGlassLayer />
        </Layer>
        <Layer zIndex={30} id="RainBackgroundLayer">
          <RainBackgroundLayer numDrops={100} />
        </Layer>
        {/* <GradientBackground /> */}
        <BackgroundImageLayer imgURL={backgroundImage} />
      </Layer>
    </>
  );
}

export default App;

