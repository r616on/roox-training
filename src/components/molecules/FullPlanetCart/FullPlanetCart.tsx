import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import { actionsFullPlanetCart } from "./effects/slice";

const FullPlanetCart: React.FC = () => {
  const params: any = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state: AppStoreType) => state.FullPlanetCart.item);
  const { loading, ok, error } = useSelector(
    (state: AppStoreType) => state.FullPlanetCart.requestStatus
  );
  const { Title } = Typography;

  useEffect(() => {
    dispatch(actionsFullPlanetCart.setId(params.id));
    dispatch(actionsFullPlanetCart.getFullPlanetItem());
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
                <Link to="/planets/">
                  <Button type="primary">Назат</Button>
                </Link>
              </Col>
            </Row>

            <Descriptions bordered column={{ xs: 1, sm: 1, md: 1, lg: 2 }}>
              <Descriptions.Item label="Климат">
                {item.climate}
              </Descriptions.Item>
              <Descriptions.Item label="Диаметр">
                {item.diameter}
              </Descriptions.Item>
              <Descriptions.Item label="Гравитация">
                {item.gravity}
              </Descriptions.Item>
              <Descriptions.Item label="Орбитальный период">
                {item.orbital_period}
              </Descriptions.Item>
              <Descriptions.Item label="Население">
                {item.population}
              </Descriptions.Item>
              <Descriptions.Item label="Полный поворот">
                {item.rotation_period}
              </Descriptions.Item>
              <Descriptions.Item label="Есть ли вода">
                {item.surface_water}
              </Descriptions.Item>
              <Descriptions.Item label="хз">{item.terrain}</Descriptions.Item>
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

export default FullPlanetCart;
