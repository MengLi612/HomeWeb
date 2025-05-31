import { Flex, Splitter, Timeline, Typography } from "antd";
import type { ReactNode } from "react";

interface TimeItem {
  color?: string;
  dot?: ReactNode;
  label: ReactNode;
  children: ReactNode;
  position?: "left" | "right";
}

const data: TimeItem[] = [
  {
    label: <div id="2025-05-25">2025-05-25</div>,
    children: (
      <>
        <Typography>在 CDR 中完成相应网站设计</Typography>
        <Typography>编程大致实现网站界面结构</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-05-26">2025-05-26</div>,
    children: (
      <>
        <Typography>初步善网站设计</Typography>
        <Typography>进行网站功能设计和重构项目文件结构</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-05-27">2025-05-27</div>,
    children: (
      <>
        <Typography>网站博客页的细化和功能完善</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-05-28">2025-05-28</div>,
    children: (
      <>
        <Typography>网站主页面的细化和功能完善</Typography>
        <Typography>添加气泡按钮的外观和效果（初步）</Typography>
        <Typography>添加网站博客页面打开时的动画效果（暂定）</Typography>
        <Typography>优化顶部菜单的隐藏动画效果（暂定）</Typography>
        <Typography>项目启用git进行版本控制，并创建Github仓库</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-05-30">2025-05-30</div>,
    children: (
      <>
        <Typography>细化博客页的博客列表，移除占位用测试数据</Typography>
        <Typography>弃用antd的List，使用自定义List JSX</Typography>
        <Typography>
          实现工具栏“撰写新博客”的功能实现，添加“添加博客”的面板（初步）
        </Typography>
        <Typography>为个人面板下Github图标添加连接和气泡卡片</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-05-30">2025-05-30</div>,
    children: (
      <>
        <Typography>实现登录页的相关功能</Typography>
        <Typography>添加网站的反馈信息功能，整理网站层级</Typography>
        <Typography>
          细化组件页，添加相关数据以及根据数据显示组件（初步）
        </Typography>
        <Typography>优化一些其他的功能</Typography>
      </>
    ),
  },
];


export default function LoggingPage() {
  return (
    <>
      <Flex vertical={false} style={{ height: "100%", width: "100%" }}>
        <Splitter style={{ height: "100%" }}>
          <Splitter.Panel
            defaultSize={"20"}
            collapsible
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.27)",
              marginRight: "5px",
              borderRadius: "10px",
            }}
          >
            <Splitter layout="vertical" style={{ height: "100%" }}>
              <Splitter.Panel
                defaultSize={"70"}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.27)",
                  marginBottom: "5px",
                  borderRadius: "10px",
                }}
              >
                用于展示锚点，点击锚点跳转到对应日志
              </Splitter.Panel>
              <Splitter.Panel
                collapsible
                defaultSize={"30"}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.27)",
                  marginTop: "5px",
                  borderRadius: "10px",
                }}
              >
                用于展示标签，点击标签显示包含该标签的日志
              </Splitter.Panel>
            </Splitter>
          </Splitter.Panel>
          <Splitter.Panel
            defaultSize={"80"}
            collapsible
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.27)",
              borderRadius: "3px",
              marginLeft: "5px",
              scrollbarWidth: "none",
            }}
          >
            <div style={{ height: "50px" }}></div>
            <Timeline mode="left" items={data} reverse pending="Recording..." />
          </Splitter.Panel>
        </Splitter>
      </Flex>
    </>
  );
}
