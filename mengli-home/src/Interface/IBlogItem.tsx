import type { ReactNode } from "react";

export default interface IBlogItem {
  img?: ReactNode;
  title: string;
  description?: string;
  link: string;
  theme?: string;
  tags?: string[];
}
