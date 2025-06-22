import {
  UserOutlined,
  SmileOutlined,
  GithubFilled,
  BilibiliFilled,
} from "@ant-design/icons";
import { Avatar, Button, Card, Empty, Flex, Popover, Tabs } from "antd";
import type { TabsProps } from "antd";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Layer } from "../Layer";
import LeaveBlankSpace from "../CustomJSX/LeaveBlankSpace";
import { WindowStateContext } from "../Context/WindowStateContext";
import BlogComponent from "../Component/BlogComponent";
import { blogItemData } from "../Data/blogItemData";
import { blogThemeData } from "../Data/blogThemeData";
import BlogAddCard from "./small/BlogAddCard";
import List from "../Component/Type/List";
import BaseContainer from "../Component/BaseContainer";

export interface BlogItemData {
  img?: ReactNode;
  title: string;
  description?: string;
  link: string;
  theme?: string;
  tags?: string[];
}

// 根据 ThemeItem 创建 Tabs 的 items 列表
const tabItems: TabsProps["items"] = [];

for (let i = 0; i < blogThemeData.length + 2; i++) {
  // 添加一个 "ALL" 标签页
  if (i === 0) {
    tabItems.push({
      key: "0",
      label: "ALL",
    });
  } else if (i === blogThemeData.length + 1) {
    tabItems.push({
      key: i.toString(),
      label: "未分配",
    });
  } else {
    tabItems.push({
      key: i.toString(),
      label: blogThemeData[i - 1].icon || blogThemeData[i - 1].label,
    });
  }
}

type ScrollState = "expanding" | "scrolling";

export default function BlogsPage() {
  // 博客列表主题切换
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  // 动画效果：页面打开时的缩放状态
  const [pageScale, setPageScale] = useState(0.1);
  // 是否显示添加博客组件
  const [showAddBlogComponent, setShowAddBlogComponent] = useState(false);

  //#region 当上划滚动栏时，首先减少留白空间高度，直到达到最小值，然后开始滚动
  // 滚动状态，初始为 expanding
  const [scrollState, setScrollState] = useState<ScrollState>("expanding");
  // 留白空间高度，初始为 120px
  // 当滚动状态为 expanding 时，上划时留白空间高度会逐渐减少
  const leaveBlankSpaceMaxHeight = 120; // 留白空间的最大高度
  const [leaveBlankSpaceHeight, setLeaveBlankSpaceHeight] = useState(
    leaveBlankSpaceMaxHeight
  );
  const targetLength = useRef(0); // 用于记录滚动的总高度
  const animationRef = useRef<number | null>(null);
  const SPRING_SPEED = 0.1; // 留白空间高度减少的速度


  const scrollRef = useRef<HTMLDivElement>(null);

  //#endregion



  useEffect(() => {
    const timer = setTimeout(() => {
      setPageScale(1);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const animate = useCallback(() => {
    // 当120-leaveBlankSpaceHeight的值是留白空间高度减少的值，当减小的值小于targetLength时，会继续减少留白空间高度直到等于targetLength，并且像橡皮筋一样，差越大，速度越快
    const distance = leaveBlankSpaceMaxHeight - leaveBlankSpaceHeight;
    const delta = (distance - targetLength.current) * SPRING_SPEED;
    setLeaveBlankSpaceHeight((prevHeight) => {
      const newHeight = delta - prevHeight;
      if (newHeight <= 0) {
        cancelAnimationFrame(animationRef.current!);
        return 0; // 确保高度不会小于0
      }
      return newHeight;
    });
  }, [leaveBlankSpaceHeight, leaveBlankSpaceMaxHeight, SPRING_SPEED]);

  useEffect(() => {
    // 如果留白减少的高度小于scrollLength

    const handleScroll = (event: WheelEvent) => {
      if (scrollState === "expanding" && event.deltaY > 0) {
        targetLength.current += event.deltaY; // 累加滚动距离
        if (targetLength.current - leaveBlankSpaceHeight >= 0) {
          animationRef.current = requestAnimationFrame(animate);
        }
        if (leaveBlankSpaceHeight - targetLength.current <= 0) {
          setScrollState("scrolling");
        }
      }
      else if (scrollState === "scrolling" && event.deltaY < 0 && scrollRef.current?.scrollTop === 0) {
        setLeaveBlankSpaceHeight(leaveBlankSpaceMaxHeight);
        targetLength.current = 0; // 重置滚动距离
        setScrollState("expanding");
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollState, leaveBlankSpaceHeight, animate]);

  const filteredDataFromTheme = selectedTheme
    ? blogItemData.filter((item) => item.theme === selectedTheme)
    : blogItemData;

  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          transition: "all 0.2s",
          transform: `scale(${pageScale})`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {showAddBlogComponent && (
          <Layer
            zIndex={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(60, 75, 118, 0.25)",
            }}
          >
            <WindowStateContext.Provider
              value={{
                windowStateId: showAddBlogComponent,
                setWindowStateId: setShowAddBlogComponent,
              }}
            >
              <BlogAddCard />
            </WindowStateContext.Provider>
          </Layer>
        )}
        <LeaveBlankSpace
          height={leaveBlankSpaceHeight}
          style={{
            transition: "all 0.2s",
          }}
        />
        <Flex vertical={false} gap={10} flex={1} style={{ minHeight: 0 }}>
          <Flex vertical={true} gap={10}>
            <Card hoverable={true}>
              <Avatar
                shape="square"
                size={192}
                icon={<UserOutlined />}
              ></Avatar>
              <Flex vertical={false} justify="space-between">
                <SmileOutlined />
                <text>开心每一天</text>
              </Flex>
              <Flex
                vertical={true}
                align="center"
                justify="center"
                style={{ height: "50px" }}
              >
                <text>欢迎来到我的个人主页</text>
              </Flex>
              <Flex justify="center">
                <Popover
                  placement={"bottom"}
                  trigger={"hover"}
                  content="https://github.com/MengLi612/HomeWeb"
                >
                  <a
                    href="https://github.com/MengLi612/HomeWeb"
                    target="_blank"
                  >
                    <GithubFilled
                      style={{ color: "black", fontSize: "30px" }}
                    />
                  </a>
                </Popover>
                <BilibiliFilled
                  style={{
                    color: "rgba(255, 0, 144, 0.8)",
                    fontSize: "30px",
                  }}
                />
              </Flex>
            </Card>

            <Card title="工具栏" size="small">
              <Button
                onClick={() => {
                  setShowAddBlogComponent(true);
                }}
              >
                撰写新博客
              </Button>
            </Card>
          </Flex>

          <BaseContainer
            style={{
              flex: 1,
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            <Flex vertical={false} align="center" style={{ height: "100%" }}>
              <Flex
                ref={scrollRef}
                vertical={true}
                align="top"
                justify="left"
                style={{
                  height: "100%",
                  width: "100%",
                  overflowY: scrollState === "scrolling" ? "auto" : "hidden",
                  scrollbarWidth: "thin",
                  paddingLeft: "16px",
                }}
              >
                <List
                  itemsData={filteredDataFromTheme}
                  Component={BlogComponent}
                />
                <Empty />
              </Flex>
              <Tabs
                size="small"
                tabPosition="right"
                defaultActiveKey="0"
                items={tabItems}
                onChange={(key) => {
                  if (key === "0") {
                    setSelectedTheme(null);
                  } else if (key === (blogThemeData.length + 1).toString()) {
                    setSelectedTheme("未分配");
                  } else {
                    setSelectedTheme(blogThemeData[parseInt(key) - 1].label);
                  }
                }}
              />
            </Flex>
          </BaseContainer>
        </Flex>
      </div>
    </>
  );
}
