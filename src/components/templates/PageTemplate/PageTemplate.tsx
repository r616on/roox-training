import React, { Fragment } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Row } from "antd";
import ItemsList from "../../organisms/ItemsList/ItemsList";
import "./style.scss";
const { Header, Content, Footer } = Layout;

function PageTemplate() {
  const { SubMenu } = Menu;
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Перонажи из SW</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Row
          justify="space-between"
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <ItemsList />
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default PageTemplate;
