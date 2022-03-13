import React, { FC } from "react";
import "antd/dist/antd.css";
import { Layout, Row } from "antd";
import "./style.scss";
import { NavLink, Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const PageTemplate: FC = (props) => {
  return (
    <Layout className="Layout">
      <Header className="Header">
        <Link to="/" className="logo"></Link>
        <Row>
          <NavLink to="/peopleList/" className={"NavLink"}>
            Перcонажи из SW
          </NavLink>
          <NavLink to="/planets/" className={"NavLink"}>
            Планеты из SW
          </NavLink>
        </Row>
      </Header>
      <Content className="site-layout">
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Row justify="space-between" className="site-layout-background">
          {props.children}
        </Row>
      </Content>
      <Footer className="Footer">Ant Design ©2022 Created</Footer>
    </Layout>
  );
};

export default PageTemplate;
