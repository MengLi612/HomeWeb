import { Card, Row, Col, Upload, Button, Divider, Typography, Input, Select, Tag } from "antd";
import { useContext, useState } from "react";
import { FeedbackContext } from "../../Context/Feedback";
import { WindowStateContext } from "../../Context/WindowStateContext";
import { blogItemData } from "../../Data/blogItemData";
import { tagsData } from "../../Data/tagsData";
import type { BlogItemData } from "../BlogsPage";
import { blogThemeData } from "../../Data/blogThemeData";

export default function BlogAddCard() {
  const { setWindowStateId } = useContext(WindowStateContext);
  const { api } = useContext(FeedbackContext);

  const [blogAddData, setBlogAddData] = useState<BlogItemData>({
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
            // TODO: 需要功能实现
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
            options={blogThemeData}
            optionRender={(option) => <Tag>{option.data.label}</Tag>}
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
            options={tagsData}
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
                // TODO: 测试版本

                blogAddData.link = blogAddData.title + ".md";

                // api?.message.error("请先上传文件");
                // setWindowStateId(false);
                // return;
              }
              const findData = blogItemData.find(
                (item) => item.link === blogAddData.link
              );
              if (!findData) {
                blogItemData.push(blogAddData);
                api?.message.info("上传成功");
                setWindowStateId(false);
              } else {
                api?.message.error(`已存在同名博客${blogAddData.title}`);
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
