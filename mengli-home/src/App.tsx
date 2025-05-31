import { message, notification } from "antd";
import "./App.css";
import backgroundImage from "./assets/168689.webp";
import { Layer } from "./Layer";
import WebBookView from "./WebLink/WebBookView";
import { FeedbackContext } from "./Context/Feedback";

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
        <BackgroundImage imgURL={backgroundImage} />
      </Layer>
    </>
  );
}

export default App;

function BackgroundImage({ imgURL }: { imgURL?: string }) {
  return (
    <img
      src={imgURL}
      alt="Background"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
}
