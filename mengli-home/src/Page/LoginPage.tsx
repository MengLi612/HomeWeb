import { useContext, useState } from "react";
import { WebBookContext } from "../Context/WebBookContext";
import { Button, Card, Flex, Input } from "antd";
import { Layer } from "../Layer";
import LeaveBlankSpace from "../CustomJSX/LeaveBlankSpace";
import { FeedbackContext } from "../Context/Feedback";

interface UserConfig {
  id: string;
  userName: string;
  password: string;
}

const userLoginData: UserConfig[] = [
  {
    id: "main",
    userName: "admin",
    password: "admin",
  },
  {
    id: "test",
    userName: "test",
    password: "test",
  },
];

export default function LoginPage() {
  const { setWebBookId } = useContext(WebBookContext);
  const [succeedLogin, setSucceedLogin] = useState(false);
  const { api } = useContext(FeedbackContext);

  const [loginInputData, setLoginInputData] = useState<UserConfig>({
    id: "",
    userName: "",
    password: "",
  });

  return (
    <>
      <Layer zIndex={2}>
        <Flex
          vertical={true}
          justify={"center"}
          align={"center"}
          style={{ height: "100%" }}
        >
          <Card title="登录">
            <Flex vertical={true} justify={"center"} align={"center"}>
              <Input
                placeholder="用户ID"
                onChange={(e) => {
                  setLoginInputData({
                    ...loginInputData,
                    userName: e.target.value,
                  });
                }}
              ></Input>
              <LeaveBlankSpace height={10}></LeaveBlankSpace>
              <Input.Password
                placeholder="请输入密码"
                count={{ show: true, max: 18 }}
                onChange={(e) => {
                  setLoginInputData({
                    ...loginInputData,
                    password: e.target.value,
                  });
                }}
              ></Input.Password>
              <LeaveBlankSpace height={30}></LeaveBlankSpace>
              <Button
                type="primary"
                style={{ width: "100px" }}
                onClick={() => {
                  if (
                    loginInputData.userName === "" ||
                    loginInputData.password === ""
                  ) {
                    api?.message.open({
                      type: "warning",
                      content: "用户名或密码不能为空",
                    });
                    return;
                  }
                  const data = userLoginData.find(
                    (item) => item.userName === loginInputData.userName
                  );
                  if (data) {
                    if (data.password === loginInputData.password) {
                      setSucceedLogin(true);
                      if (succeedLogin) {
                        api?.notification.info({
                          message: "登录成功",
                          description: `欢迎回来，${data.userName}`,
                          placement: "bottomRight",
                        });
                      }

                      setWebBookId("main-book");
                    } else {
                      api?.message.open({
                        type: "error",
                        content: "密码错误",
                      });
                      api?.notification.error({
                        message: "登录失败",
                        description: "密码错误，请重试",
                        placement: "bottomRight",
                      });
                    }
                  } else {
                    setLoginInputData({
                      ...loginInputData,
                      id: loginInputData.userName + loginInputData.password,
                    });
                    userLoginData.push(loginInputData);
                    api?.message.open({
                      type: "success",
                      content: "注册成功",
                    });
                  }
                }}
              >
                注册/登录
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Layer>
    </>
  );
}
