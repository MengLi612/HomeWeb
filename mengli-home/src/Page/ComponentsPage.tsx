import { DownOutlined } from "@ant-design/icons";
import { Splitter, Tree, Flex, type TreeDataNode } from "antd";
import { componentData } from "../Data/componentData";
import ComponentItem from "../Component/ComponentItem";
import List from "../Component/Type/List";
import { componentThemeData } from "../Data/componentThemeData";

const componentTreeItem: TreeDataNode[] = [];

for (let i = 0; i < componentThemeData.length; i++) {
  const children: TreeDataNode[] = [];
  for (let j = 0; j < componentData.length; j++) {
    if (componentData[j].theme === componentThemeData[i].value) {
      children.push({
        title: componentData[j].label,
        key: componentData[j].value,
      });
    }
  }
  componentTreeItem.push({
    title: componentThemeData[i].label,
    key: componentThemeData[i].value,
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
              treeData={componentTreeItem}
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
            <List itemsData={componentData} Component={ComponentItem}></List>
          </Flex>
        </Splitter.Panel>
      </Splitter>
    </>
  );
}
