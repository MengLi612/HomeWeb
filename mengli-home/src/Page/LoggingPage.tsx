import { Flex, Splitter, Timeline } from "antd";
import { loggingData } from "../Data/loggingData";


export default function LoggingPage() {
  return (
    <>
      <Flex vertical={false} style={{ height: "100%", width: "100%" }}>
        <Splitter style={{ height: "100%" }}>
          <Splitter.Panel
            defaultSize={"20"}
            collapsible
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.27)",
              marginRight: "5px",
              borderRadius: "10px",
            }}
          >
            <Splitter layout="vertical" style={{ height: "100%" }}>
              <Splitter.Panel
                defaultSize={"70"}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.27)",
                  marginBottom: "5px",
                  borderRadius: "10px",
                }}
              >
                用于展示锚点，点击锚点跳转到对应日志
              </Splitter.Panel>
              <Splitter.Panel
                collapsible
                defaultSize={"30"}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.27)",
                  marginTop: "5px",
                  borderRadius: "10px",
                }}
              >
                用于展示标签，点击标签显示包含该标签的日志
              </Splitter.Panel>
            </Splitter>
          </Splitter.Panel>
          <Splitter.Panel
            defaultSize={"80"}
            collapsible
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.27)",
              borderRadius: "3px",
              marginLeft: "5px",
              scrollbarWidth: "none",
            }}
          >
            <div style={{ height: "50px" }}></div>
            <Timeline mode="left" items={loggingData} reverse pending="Recording..." style={{ position: "relative", left: "-400px" }} />
          </Splitter.Panel>
        </Splitter>
      </Flex>
    </>
  );
}
