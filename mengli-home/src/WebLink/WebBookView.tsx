import { useState } from "react";
import { WebBookContext } from "../Context/WebBookContext";
import type WebBookViewProps from "../Interface/WebBookViewProps";
import MainBook from "../WebBook/MainBook";
import StartBook from "../WebBook/StartBook";

export default function WebBookView({ defaultWebBookId }: WebBookViewProps) {
  const [curBookId, setCurBookId] = useState(defaultWebBookId);

  switch (curBookId) {
    case "start-book":
      return (
        <>
          <WebBookContext.Provider
            value={{ webBookId: curBookId, setWebBookId: setCurBookId }}
          >
            <StartBook />
          </WebBookContext.Provider>
        </>
      );
    case "main-book":
      return (
        <>
          <WebBookContext.Provider
            value={{ webBookId: curBookId, setWebBookId: setCurBookId }}
          >
            <MainBook />
          </WebBookContext.Provider>
        </>
      );

    default:
      break;
  }
}
