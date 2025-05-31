import { DownOutlined } from "@ant-design/icons";
import { Splitter, Tree, Flex, type TreeDataNode, Tag } from "antd";
import { List } from "./BlogsPage";

interface ComponentThemeType {
  value: string;
  label: string;
}

const theme: ComponentThemeType[] = [
  {
    value: "数据显示",
    label: "数据显示",
  },
  {
    value: "布局",
    label: "布局",
  },
];

interface ComponentsItemType {
  value: string;
  label: string;
  theme: string;
  tags: string[];
}

const components: ComponentsItemType[] = [
  {
    value: "CodeBox",
    label: "CodeBox",
    theme: "数据显示",
    tags: ["附加组件", "数据显示", "Code"],
  },
  {
    value: "List",
    label: "List",
    theme: "布局",
    tags: ["常规组件", "多项", "数据显示"],
  },
  {
    value: "CodeBox",
    label: "CodeBox",
    theme: "数据显示",
    tags: ["附加组件"],
  },
  {
    value: "CodeBox",
    label: "CodeBox",
    theme: "数据显示",
    tags: ["附加组件"],
  },
];

function ComponentItem({ label, tags }: ComponentsItemType) {
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        borderRadius: "5px",
        border: "1px solid black",
      }}
    >
      <h3>{label}</h3>
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  );
}

const treeData: TreeDataNode[] = [];

for (let i = 0; i < theme.length; i++) {
  const children: TreeDataNode[] = [];
  for (let j = 0; j < components.length; j++) {
    if (components[j].theme === theme[i].value) {
      children.push({
        title: components[j].label,
        key: components[j].value,
      });
    }
  }
  treeData.push({
    title: theme[i].label,
    key: theme[i].value,
    children: children,
  });
}

export default function ComponentsPage() {
  return (
    <>
      <Splitter>
        <Splitter.Panel
          defaultSize={"30"}
          collapsible
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          <div
            style={{
              margin: "15px",
            }}
          >
            <Tree
              showLine
              switcherIcon={<DownOutlined />}
              treeData={treeData}
            />
          </div>
        </Splitter.Panel>
        <Splitter.Panel
          defaultSize={"70"}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          <Flex
            vertical={false}
            wrap
            align="center"
            justify="space-evenly"
            style={{ gap: "30px 0", width: "100%" }}
          >
            <List itemsData={components} Component={ComponentItem}></List>
          </Flex>
        </Splitter.Panel>
      </Splitter>
    </>
  );
}
