import "./App.css";
import backgroundImage from "./assets/168689.webp";
import { Layer } from "./Layer";
import WebBookView from "./WebLink/WebBookView";

function App() {
  return (
    <>
      <WebBookView defaultWebBookId="start-book" />

      <Layer zIndex={-1}>
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
