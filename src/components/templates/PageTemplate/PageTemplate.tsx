import React, { FC } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Row } from "antd";
import ItemsList from "../../organisms/ItemsList/ItemsList";
import "./style.scss";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const PageTemplate: FC = (props) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Link to="/" className="logo"></Link>

        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/peopleList/">Перcонажи из SW </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64, minHeight: "100%" }}
      >
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Row
          justify="space-between"
          className="site-layout-background"
          style={{ padding: 24, minHeight: "100%" }}
        >
          {props.children}
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2022 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default PageTemplate;
