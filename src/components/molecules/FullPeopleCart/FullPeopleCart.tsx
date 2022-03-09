import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setId, getFullPeopleItem } from "./effects/actionCreators";
import "./style.scss";
import { Descriptions, Spin, message, Space } from "antd";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import { Typography } from "antd";

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
      <Space wrap style={{ justifyContent: "center", width: "100%" }}>
        {loading && <Spin size="large" tip="Loading..."></Spin>}
        {ok && (
          <>
            <Title>{item.name}</Title>
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
      </Space>
    </PageTemplate>
  );
};

export default FullPeopleCart;
