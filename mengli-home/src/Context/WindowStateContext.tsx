import { createContext } from "react";

interface WindowStateContextType {
  windowStateId: boolean;
  setWindowStateId: (windowStateId: boolean) => void;
}

export const WindowStateContext = createContext<WindowStateContextType>({
  windowStateId: false,
  setWindowStateId: () => {},
});
