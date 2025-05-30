import {
  UserOutlined,
  SmileOutlined,
  GithubFilled,
  BilibiliFilled,
  GithubOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Col, Divider, Empty, Flex, Input, Popover, Row, Select, Tabs, Typography, Upload } from "antd";
import type { TabsProps } from "antd";
import { useContext, useEffect, useState } from "react";
import { Layer } from "../Layer";
import LeaveBlankSpace from "../CustomJSX/LeaveBlankSpace";
import { WindowStateContext } from "../Context/WindowStateContext";

interface BlogData {
  img?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  link: string;
  theme?: string;
  tags?: string[];
}

interface BlogItemProps {
  img?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  link: string;
  theme?: string;
  tags?: string[];
}

export function BlogComponent({ img, title, description, link, theme, tags }: BlogItemProps) {
  return (
    <>
      <div style={{}}>
        <Row>
          <Col style={{ aspectRatio: "1 / 1", alignItems: "center", justifyContent: "center" }}>{img}</Col>
          <LeaveBlankSpace width={20}></LeaveBlankSpace>
          <Col flex={1} style={{alignContent: "center"}}>
            <Flex vertical={true}>
              <a href={link}>{title}</a>
              {description}
              <Flex vertical={false} align="center">
                {theme}
                {tags}
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    </>
  );
}

const data: BlogData[] = [
  {
    img:<GithubOutlined style={{fontSize: "64px"}}/>,
    title: "Ant Design Title 1",
    description: "Ant Design Description 1",
    link: "/mengli-home/public/MDFile/test.md",
    theme: "Github",
    tags: ["React", "Ant Design", "UI"],
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

interface ComponentContainerProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;

  children?: React.ReactNode;
}

function ComponentContainer({
  className,
  id,
  style,
  children,
}: ComponentContainerProps) {
  return (
    <div className={className} id={id} style={style}>
      {children}
    </div>
  );
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
    ? data.filter((item) => item.theme === selectedTheme)
    : data;

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

function BlogAddCard() {
  const { setWindowStateId } = useContext(WindowStateContext);

  return <Card>
    <Row>
      <Col
        span={24}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Upload>
          <Button>点击上传（.md）</Button>
        </Upload>
      </Col>
    </Row>
    <Divider plain orientation="left" style={{ borderColor: "rgba(0, 0, 0, 0.5)" }}>属性</Divider>
    <Row justify={"center"} align={"middle"}>
      <Col span={4}>
        <Typography>标题</Typography>
      </Col>
      <Col span={20}>
        <Input placeholder={"默认为文件名称"}></Input>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Typography>Tags</Typography>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Select mode="multiple" style={{ width: "100%" }}></Select>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col
        span={24}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button onClick={() => {setWindowStateId(false)}}>
          添加
        </Button>
      </Col>
    </Row>
  </Card>;
}




type ListProps<T> = {
  itemsData: T[];
  Component: React.FC<T>;
};

export function List<T>({ itemsData, Component }: ListProps<T>) {
  return (
    <>
      <Flex vertical={true}>
        {itemsData.map((itemsData, index) => (
          <Component key={index} {...itemsData} />
        ))}
      </Flex>
    </>
  );
}
