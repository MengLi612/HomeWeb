import { GithubOutlined, CodeSandboxOutlined } from "@ant-design/icons";
import type { ITheme } from "../Interface/ITheme";

// 主题列表
export const blogThemeData: ITheme[] = [
  {
    icon: <GithubOutlined />,
    label: "Github",
    value: "Github",
  },
  {
    icon: <CodeSandboxOutlined />,
    label: "Unity",
    value: "Unity",
  },
];