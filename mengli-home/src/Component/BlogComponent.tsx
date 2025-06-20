import { Col, Flex, Row, Tag } from "antd";
import LeaveBlankSpace from "../CustomJSX/LeaveBlankSpace";
import type IBlogItem from "../Interface/IBlogItem";

export default function BlogComponent({
  img,
  title,
  description,
  link,
  theme,
  tags,
}: IBlogItem) {
  return (
    <>
      <div>
        <Row wrap={false} style={{ height: "80px" }}>
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
              <button style={{ border: "none", textAlign: "left", cursor: "pointer" }}>{`${title} 将跳转到${link}（暂未实现）`}</button>
              {description}
              <Flex vertical={false} align="center">
                <Tag color="rgba(255, 0, 144, 0.8)">{theme}</Tag>
                {tags?.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    </>
  );
}
