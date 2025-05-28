import {
  UserOutlined,
  SmileOutlined,
  GithubFilled,
  BilibiliFilled,
  GithubOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Flex, List, Tabs } from "antd";
import type { TabsProps } from "antd";
import { useEffect, useState } from "react";

interface BlogItem {
  img?: React.ReactNode;
  title: string;
  description: string;
  theme?: string;
  tag?: string[];
}

const data: BlogItem[] = [
  {
    title: "Ant Design Title 1",
    description: "Ant Design Description 1",
    theme: "Github",
    tag: ["React", "Ant Design", "UI"],
  },
  {
    title: "Ant Design Title 2",
    description: "Ant Design Description 2",
    theme: "Unity",
  },
  {
    title: "Ant Design Title 3",
    description: "Ant Design Description 3",
    theme: "Github",
  },
  {
    title: "Ant Design Title 4",
    description: "Ant Design Description 4",
    theme: "Github",
  },
  {
    title: "Ant Design Title 5",
    description: "Ant Design Description 5",
    theme: "Unity",
  },
  {
    title: "Ant Design Title 6",
    description: "Ant Design Description 6",
    theme: "Unity",
  },
  {
    title: "Ant Design Title 7",
    description: "Ant Design Description 7",
    theme: "Unity",
  },
];

const tabItems: TabsProps["items"] = [
  {
    key: "0",
    label: "ALL",
  },
  {
    key: "1",
    label: <GithubOutlined />,
  },
  {
    key: "2",
    label: <CodeSandboxOutlined />,
  },
];

interface BlankSpaceProps {
  height?: number;
  width?: number;
  children?: React.ReactNode;
}

function LeaveBlankSpace({
  height = 100,
  width = 0,
  children,
}: BlankSpaceProps) {
  return (
    <>
      <div className="blank-space" style={{ height: height, width: width }}>
        {children}
      </div>
    </>
  );
}

interface ComponentContainerProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  
  children?: React.ReactNode;
}

function ComponentContainer({ className, id, style, children }: ComponentContainerProps) {
  return (
    <div className={className} id={id} style={style}>
      {children}
    </div>
  );
}


export default function BlogsPage() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const [pageScale, setPageScale] = useState(0.1);


  useEffect(() => {
    const timer = setTimeout(() => {
      setPageScale(1);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const filteredDataFromTheme = selectedTheme
    ? data.filter((item) => item.theme === selectedTheme)
    : data;

  return (
    <>
      <div style={{ height: "100%", width: "100%", transition: "all 0.2s", transform: `scale(${pageScale})` }}>
        <LeaveBlankSpace height={120} />
        <Flex vertical={false} gap={10}>
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
                <GithubFilled style={{ color: "black", fontSize: "30px" }} />
                <BilibiliFilled
                  style={{
                    color: "rgba(255, 0, 144, 0.8)",
                    fontSize: "30px",
                  }}
                />
              </Flex>
            </Card>

            <Card title="工具栏" size="small">
              <Button>撰写新博客</Button>
            </Card>
          </Flex>

          <ComponentContainer
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
                  itemLayout="horizontal"
                  dataSource={filteredDataFromTheme}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Flex>
              <Tabs
                size="small"
                tabPosition="right"
                defaultActiveKey="0"
                items={tabItems}
                onChange={(key) => {
                  setSelectedTheme(
                    key === "0" ? null : key === "1" ? "Github" : "Unity"
                  );
                }}
              />
            </Flex>
          </ComponentContainer>
        </Flex>
      </div>
    </>
  );
}
