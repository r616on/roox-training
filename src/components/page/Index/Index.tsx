import React, { FC } from "react";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import { Row, Col, Typography, Image } from "antd";
import "./style.scss";
import img from "./img/logo.jpg";

const Index: FC = () => {
  const { Title, Paragraph } = Typography;
  return (
    <PageTemplate>
      <Row justify="space-between">
        <Col span={12}>
          <Image className="index-img" src={img} alt="Image" />
        </Col>
        <Col span={10}>
          <Title>Hi!</Title>
          <Paragraph>
            Hello. My name is Roman. And this is a SWAPI-based tutorial project.
            Also used here are Ant Design, TS, React, Redux - Saga components.
            The project was created for educational purposes only.
          </Paragraph>
        </Col>
      </Row>
    </PageTemplate>
  );
};

export default Index;
