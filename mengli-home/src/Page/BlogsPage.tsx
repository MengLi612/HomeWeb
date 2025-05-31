import {
  UserOutlined,
  SmileOutlined,
  GithubFilled,
  BilibiliFilled,
  GithubOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Empty,
  Flex,
  Input,
  Popover,
  Row,
  Select,
  Tabs,
  Tag,
  Typography,
  Upload,
} from "antd";
import type { TabsProps } from "antd";
import { useContext, useEffect, useState, type ReactNode } from "react";
import { Layer } from "../Layer";
import LeaveBlankSpace from "../CustomJSX/LeaveBlankSpace";
import { WindowStateContext } from "../Context/WindowStateContext";
import { FeedbackContext } from "./../Context/Feedback";

interface BlogData {
  img?: ReactNode;
  title: string;
  description?: string;
  link: string;
  theme?: string;
  tags?: string[];
}

interface BlogItemProps {
  img?: ReactNode;
  title: string;
  description?: string;
  link: string;
  theme?: string;
  tags?: string[];
}

export function BlogComponent({
  img,
  title,
  description,
  link,
  theme,
  tags,
}: BlogItemProps) {
  return (
    <>
      <div>
        <Row>
          <Col
            style={{
              aspectRatio: "1 / 1",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {img}
          </Col>
          <LeaveBlankSpace width={20}></LeaveBlankSpace>
          <Col flex={1} style={{ alignContent: "center" }}>
            <Flex vertical={true}>
              <a href={link}>{title}</a>
              {description}
              <Flex vertical={false} align="center">
                <Tag color="rgba(255, 0, 144, 0.8)">{theme}</Tag>
                {tags?.map((tags) => (
                  <Tag>{tags}</Tag>
                ))}
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
    img: <GithubOutlined style={{ fontSize: "64px" }} />,
    title: "Ant Design Title 1",
    description: "Ant Design Description 1",
    link: "/mengli-home/public/MDFile/test.md",
    theme: "Github",
    tags: ["React", "Ant Design", "UI"],
  },
];

interface TagType {
  value: string;
  label: string;
}

const tags: TagType[] = [
  {
    value: "React",
    label: "React",
  },
  {
    value: "Ant Design",
    label: "Ant Design",
  },
  {
    value: "UI",
    label: "UI",
  },
  {
    value: "Github",
    label: "Github",
  },
  {
    value: "Unity",
    label: "Unity",
  },
];

interface ThemeType {
  icon?: ReactNode;
  name: string;
}

const ThemeItem: ThemeType[] = [
  {
    icon: <GithubOutlined />,
    name: "Github",
  },
  {
    icon: <CodeSandboxOutlined />,
    name: "Unity",
  },
];

const tabItems: TabsProps["items"] = [
  {
    key: "0",
    label: "ALL",
  },
  {
    key: "1",
    label: ThemeItem[0].icon,
  },
  {
    key: "2",
    label: ThemeItem[1].icon,
  },
  {
    key: "3",
    label: "未分配",
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
  const { api } = useContext(FeedbackContext);

  const [blogAddData, setBlogAddData] = useState<BlogData>({
    img: "",
    title: "",
    description: "",
    link: "",
    theme: "",
    tags: [],
  });

  return (
    <Card style={{ maxWidth: "300px" }}>
      <Row>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Upload
            accept=".md"
            onChange={(e) => {
              if (e.file.status === "done") {
                setBlogAddData({ ...blogAddData, link: e.file.name });
              }
            }}
          >
            <Button>点击上传（.md）</Button>
          </Upload>
        </Col>
      </Row>
      <Divider
        plain
        orientation="left"
        style={{ borderColor: "rgba(0, 0, 0, 0.5)" }}
      >
        属性
      </Divider>
      <Row justify={"center"} align={"middle"}>
        <Col span={4}>
          <Typography>标题</Typography>
        </Col>
        <Col span={20}>
          <Input
            placeholder={"默认为文件名称"}
            onChange={(e) => {
              setBlogAddData({ ...blogAddData, title: e.target.value });
            }}
          ></Input>
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={4}>
          <Typography>主题</Typography>
        </Col>
        <Col span={20}>
          <Select
            placeholder={"未分配"}
            options={ThemeItem}
            optionRender={(option) => <div>{option.data.name}</div>}
            style={{ width: "100%" }}
            onChange={(e) => {
              setBlogAddData({ ...blogAddData, theme: e });
            }}
          ></Select>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Typography>Tags</Typography>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Select
            mode="multiple"
            options={tags}
            optionRender={(option) => <Tag>{option.data.label}</Tag>}
            style={{ width: "100%", maxWidth: "100%" }}
            onChange={(e) => {
              setBlogAddData({ ...blogAddData, tags: e });
            }}
          ></Select>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              if (blogAddData.link === "") {
                api?.message.error("请先上传文件");
                setWindowStateId(false);
                return;
              }
              const findData = data.find(
                (item) => item.link === blogAddData.link
              );
              if (!findData) {
                data.push(blogAddData);
                setWindowStateId(false);
              }
            }}
          >
            添加
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

type ListProps<T> = {
  itemsData: T[];
  Component: React.FC<T>;
};

export function List<T>({ itemsData, Component }: ListProps<T>) {
  return (
    <>
      {itemsData.map((itemsData, index) => (
        <Component key={index} {...itemsData} />
      ))}
    </>
  );
}
