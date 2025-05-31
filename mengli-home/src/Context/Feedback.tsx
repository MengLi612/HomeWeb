import type { MessageInstance } from "antd/es/message/interface";
import type { NotificationInstance } from "antd/es/notification/interface";
import { createContext } from "react";

interface FeedbackApiType {
  message: MessageInstance,
  notification: NotificationInstance
}


interface FeedbackContextType {
  api: FeedbackApiType | null;
}
    
export const FeedbackContext = createContext<FeedbackContextType>({
  api: null,
});