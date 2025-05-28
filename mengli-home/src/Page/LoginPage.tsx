import { useContext } from "react";
import { WebBookContext } from "../Context/WebBookContext";
import { Button, Card, Flex, Input } from "antd";
import { Layer } from "../Layer";

export default function LoginPage() {
  const { setWebBookId } = useContext(WebBookContext);

  return (
    <Layer>
      <Flex
        vertical={true}
        justify={"center"}
        align={"center"}
        style={{ height: "100%" }}
      >
        <Card title="登录">
          <Flex vertical={true} justify={"center"} align={"center"}>
            <Input placeholder="用户ID"></Input>
            <div style={{ height: "10px" }}></div>
            <Input.Password placeholder="请输入密码"></Input.Password>
            <div style={{ height: "30px" }}></div>
            <Button
              type="primary"
              style={{ width: "50px" }}
              onClick={() => {
                setWebBookId("main-book");
              }}
            >
              登录
            </Button>
          </Flex>
        </Card>
      </Flex>
    </Layer>
  );
}
