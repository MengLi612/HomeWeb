import { createContext } from "react";

interface ChangePageContextType {
    pageId: string;
    setPageId: (pageId: string) => void;
}
    
export const PageContext = createContext<ChangePageContextType>({
    pageId: "main-page",
    setPageId: () => {},
});