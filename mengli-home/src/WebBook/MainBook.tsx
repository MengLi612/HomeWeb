import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { useState } from "react";
import { Layer } from "../Layer";
import PageMapper from "../WebLink/PageMapper";
import { PageContext } from "../Context/PageContext";
import MainBookMenu from "../Component/Menu/MainBookMenu";

export default function MainBook() {
  const [curPageId, setCurPageId] = useState("logging-page");

  return (
    <Layer zIndex={1}>
      <Layout
        style={{
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
        }}
      >
        <Header style={{ backgroundColor: "transparent", height: "auto" }}>
          <PageContext.Provider
            value={{ pageId: curPageId, setPageId: setCurPageId }}
          >
            <MainBookMenu />
          </PageContext.Provider>
        </Header>

        <Content
          style={{
            backgroundColor: "transparent",
            padding: "20px",
            flex: 1,
          }}
        >
          <PageContext.Provider
            value={{ pageId: curPageId, setPageId: setCurPageId }}
          >
            <PageMapper />
          </PageContext.Provider>
        </Content>

        <Footer
          style={{
            height: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.27)",
            textAlign: "center",
          }}
        >
          <div style={{ color: "white" }}>
            © 2023 Mengli Home. All rights reserved.
          </div>
        </Footer>
      </Layout>
    </Layer>
  );
}
