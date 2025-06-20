import { useContext, useState } from "react";
import { PageContext } from "../../Context/PageContext";
import { Button, Flex, Menu } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";
import { menuItemData } from "../../Data/menuItemData";

export default function MainBookMenu() {
  const { pageId, setPageId } = useContext(PageContext);

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
        <Menu
          mode="horizontal"
          selectedKeys={[pageId]}
          items={menuItemData}
          onClick={(e) => {
            setPageId(e.key);
          }}
        />
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
