import { createContext } from "react";

interface ChangeBookContextType {
  webBookId: string;
  setWebBookId: (webBookId: string) => void;
}

export const WebBookContext = createContext<ChangeBookContextType>({
  webBookId: "start-book",
  setWebBookId: () => {},
});
