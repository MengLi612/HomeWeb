import { GithubOutlined, CodeSandboxOutlined } from "@ant-design/icons";
import type { BlogItemData } from "../Page/BlogsPage";

// 博客数据列表
export const blogItemData: BlogItemData[] = [
  {
    img: <GithubOutlined style={{ fontSize: "64px" }} />,
    title: "Test",
    description: "这是一个Github测试项",
    link: "test.md",
    theme: "Github",
    tags: ["React", "Ant Design", "UI"],
  },
  {
    img: <CodeSandboxOutlined style={{ fontSize: "64px" }} />,
    title: "Unity",
    description: "这是一个Unity测试项",
    link: "unity.md",
    theme: "Unity",
    tags: ["Unity", "游戏开发"],
  },
  {
    img: <GithubOutlined style={{ fontSize: "64px" }} />,
    title: "Github",
    description: "这是一个Github测试项",
    link: "github.md",
    theme: "Github",
    tags: ["React", "Ant Design", "UI"],
  },
  {
    img: <CodeSandboxOutlined style={{ fontSize: "64px" }} />,
    title: "Unity2",
    description: "这是另一个Unity测试项",
    link: "unity2.md",
    theme: "Unity",
    tags: ["Unity", "游戏开发"],
  },
  {
    title: "Test2",
    description: "这是一个未分配测试项",
    link: "test2.md",
    theme: "未分配",
    tags: ["React", "Ant Design", "UI"],
  },
];
