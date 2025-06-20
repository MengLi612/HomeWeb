import type { MenuProps } from "antd";

type IMenuItem = Required<MenuProps>["items"][number];

export const menuItemData: IMenuItem[] = [
  {
    key: "main-page",
    label: "主页",
  },
  {
    key: "blogs-page",
    label: "博客",
  },
  {
    key: "components-page",
    label: "组件",
  },
  {
    key: "logging-page",
    label: "日志",
  },
];