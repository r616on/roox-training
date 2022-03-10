import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setId, getFullPeopleItem } from "./effects/actionCreators";
import {
  Descriptions,
  Spin,
  message,
  Row,
  Button,
  Col,
  Typography,
} from "antd";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import "./style.scss";
import { AppStoreType } from "../../../redux/interfaces";

const FullPeopleCart: React.FC = () => {
  const params: any = useParams();
  const dispatch = useDispatch();
  const { item } = useSelector((state: AppStoreType) => state.FullPeople);
  const { loading, ok, error } = useSelector(
    (state: AppStoreType) => state.FullPeople.requestStatus
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
