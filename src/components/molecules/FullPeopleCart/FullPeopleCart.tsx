import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setId, getFullPeopleItem } from "./effects/actionCreators";
import { Descriptions, Spin, message, Space, Row, Button, Col } from "antd";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import { Typography } from "antd";
import "./style.scss";

export type itemType = {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: number;
  gender: string;
};

const FullPeopleCart = () => {
  const params: any = useParams();
  const dispatch = useDispatch();
  const { item } = useSelector((state: any) => state.FullPeople);
  const { loading, ok, error } = useSelector(
    (state: any) => state.FullPeople.requestStatus
  );
  const { Title } = Typography;
  useEffect(() => {
    dispatch(setId(params.id));
    dispatch(getFullPeopleItem());
  }, [dispatch, params.id]);
  useEffect(() => {
    error && message.error("Ошибка загрузки данных");
  }, [error]);

  return (
    <PageTemplate>
      <Row wrap className="CustomsContainerCenter">
        {loading && <Spin size="large" tip="Loading..."></Spin>}
        {ok && (
          <>
            <Row align="middle" className="CustomsContainer">
              <Col span={12}>
                <Title>{item.name}</Title>
              </Col>
              <Col span={2}>
                <Link to="/peopleList/">
                  <Button type="primary">Назат</Button>
                </Link>
              </Col>
            </Row>

            <Descriptions bordered column={{ xs: 1, sm: 1, md: 1, lg: 2 }}>
              <Descriptions.Item label="Рост">{item.height}</Descriptions.Item>
              <Descriptions.Item label="Вес">{item.mass}</Descriptions.Item>
              <Descriptions.Item label="Цвет волос">
                {item.hair_color}
              </Descriptions.Item>
              <Descriptions.Item label="Цвет кожи">
                {item.skin_color}
              </Descriptions.Item>
              <Descriptions.Item label="Возраст">
                {item.birth_year}
              </Descriptions.Item>
              <Descriptions.Item label="Пол">{item.gender}</Descriptions.Item>
              <Descriptions.Item label="Мир">
                {item.homeworld}
              </Descriptions.Item>
              <Descriptions.Item label="Был в фильмах">
                {item.films}
              </Descriptions.Item>
              <Descriptions.Item label="Коабль">
                {item.starships}
              </Descriptions.Item>
              <Descriptions.Item label="Запись созданна">
                {item.created}
              </Descriptions.Item>
              <Descriptions.Item label="Запись редактированна">
                {item.edited}
              </Descriptions.Item>
            </Descriptions>
          </>
        )}
      </Row>
    </PageTemplate>
  );
};

export default FullPeopleCart;
