import { Splitter, Tree, Flex, Card, type TreeDataNode } from "antd";

const treeData: TreeDataNode[] = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
          {
            title: "leaf",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: "leaf",
            key: "0-0-1-0",
          },
        ],
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        children: [
          {
            title: "leaf",
            key: "0-0-2-0",
          },
          {
            title: "leaf",
            key: "0-0-2-1",
          },
        ],
      },
    ],
  },
];


export default function ComponentsPage() {
  return (
    <>

          <Splitter>
            <Splitter.Panel
              defaultSize={"30"}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <div style={{ height: "5px" }}></div>
              <Tree showLine treeData={treeData} />
            </Splitter.Panel>
            <Splitter.Panel
              defaultSize={"70"}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <Flex wrap>
                <Card style={{ width: "50%" }}></Card>
                <Card style={{ width: "50%" }}></Card>
                <Card style={{ width: "50%" }}></Card>
                <Card style={{ width: "50%" }}></Card>
                <Card style={{ width: "50%" }}></Card>
                <Card style={{ width: "50%" }}></Card>
                <Card style={{ width: "50%" }}></Card>
                <Card style={{ width: "50%" }}></Card>
                <Card style={{ width: "50%" }}></Card>
              </Flex>
            </Splitter.Panel>
          </Splitter>

    </>
  );
}
