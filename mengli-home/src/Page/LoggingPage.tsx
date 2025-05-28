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
