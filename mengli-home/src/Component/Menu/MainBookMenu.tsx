import { useContext, useState } from "react";
import { PageContext } from "../../Context/PageContext";
import { Button, Flex, Menu } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";

export default function MainBookMenu() {
  const { setPageId } = useContext(PageContext);

  const [isHidden, setIsHidden] = useState(false);

  return (
    <Flex
      justify={"center"}
      align={"center"}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          transition: "all 0.3s ease",
          transform: isHidden ? "translateY(-120%)" : "translateY(0)",
          // height: isHidden ? "0px" : "auto",
        }}
      >
        <Menu mode="horizontal">
          <Menu.Item key="1" onClick={() => setPageId("main-page")}>
            主页
          </Menu.Item>
          <Menu.Item key="2" onClick={() => setPageId("blogs-page")}>
            博客
          </Menu.Item>
          <Menu.Item key="3" onClick={() => setPageId("components-page")}>
            组件
          </Menu.Item>
          <Menu.Item key="4" onClick={() => setPageId("logging-page")}>
            日志
          </Menu.Item>
        </Menu>
      </div>
      <div style={{ width: "20px" }}></div>
      <Button
        shape="circle"
        icon={
          <CaretUpOutlined
            style={{
              transition: "transform 0.3s ease",
              transform: isHidden
                ? "rotate(180deg) translateY(-50%)"
                : "rotate(0deg) translateY(0)",
            }}
          />
        }
        content="隐藏导航栏"
        onClick={() => setIsHidden(!isHidden)}
        style={{
          transition: "transform 0.3s ease",
          transform: isHidden ? "translateY(-100%)" : "translateY(0)",
        }}
      ></Button>
    </Flex>
  );
}
