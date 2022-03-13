import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Spin, message, Space } from "antd";

import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import { AppStoreType } from "../../../redux/interfaces";
import PaginationItem from "../../Atom/PaginationItem/PaginationItem";
import { ActionsPlanetsList } from "./effects/slice";
import { IPlanetCart } from "../../molecules/PlanetsCart/interfaces";
import PlanetsCart from "../../molecules/PlanetsCart/PlanetsCart";

const ItemsList: FC = () => {
  const { planets, page, total } = useSelector(
    (state: AppStoreType) => state.PlanetsList
  );
  const { loading, ok, error } = useSelector(
    (state: AppStoreType) => state.PlanetsList.requestStatus
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionsPlanetsList.getPlanets());
  }, [dispatch, page]);

  useEffect(() => {
    error && message.error("Ошибка загрузки данных");
  }, [error]);
  const ejectId = (str: string | undefined) => {
    return (
      str && str.replace("https://swapi.dev/api/planets/", "").replace("/", "")
    );
  };

  return (
    <PageTemplate>
      <PaginationItem
        className="Paginaton"
        page={page}
        setPage={ActionsPlanetsList.setPage}
        total={total}
      />

      <Space wrap style={{ justifyContent: "center", width: "100%" }}>
        {loading && (
          <Spin className="Spin" size="large" tip="Loading..."></Spin>
        )}
        {ok &&
          planets.map((item: IPlanetCart) => {
            return (
              <Link to={`/planets/${ejectId(item.url)}`} key={item.name}>
                <PlanetsCart {...item} />
              </Link>
            );
          })}
      </Space>
      <PaginationItem
        className="Paginaton"
        page={page}
        setPage={ActionsPlanetsList.setPage}
        total={total}
      />
    </PageTemplate>
  );
};

export default ItemsList;
