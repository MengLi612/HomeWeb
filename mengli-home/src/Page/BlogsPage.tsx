import {
  UserOutlined,
  SmileOutlined,
  GithubFilled,
  BilibiliFilled,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Empty,
  Flex,
  Popover,
  Tabs,
} from "antd";
import type { TabsProps } from "antd";
import { useEffect, useState, type ReactNode } from "react";
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

export default function BlogsPage() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const [pageScale, setPageScale] = useState(0.1);

  const [showAddBlogComponent, setShowAddBlogComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageScale(1);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

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
        <LeaveBlankSpace height={120} />
        <Flex vertical={false} gap={10} flex={1}>
          <Flex vertical={true} gap={10} >
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
                vertical={true}
                align="top"
                justify="left"
                style={{
                  height: "420px",
                  width: "100%",
                  overflowY: "auto",
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






