import React, { useEffect, FC } from "react";
import ItemCart from "../../molecules/ItemCart/ItemCart";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Spin, message, Space } from "antd";
import { getItems } from "./effects/actionCreators";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import { IItemCart } from "../../molecules/ItemCart/interfaces";
import { AppStoreType } from "../../../redux/interfaces";
import PaginationItem from "../../Atom/PaginationItem/PaginationItem";

const ItemsList: FC = () => {
  const { items, page } = useSelector((state: AppStoreType) => state.itemsList);
  const { loading, ok, error } = useSelector(
    (state: AppStoreType) => state.itemsList.requestStatus
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch, page]);

  useEffect(() => {
    error && message.error("Ошибка загрузки данных");
  }, [error]);
  const ejectId = (str: string | undefined) => {
    return (
      str && str.replace("https://swapi.dev/api/people/", "").replace("/", "")
    );
  };

  return (
    <PageTemplate>
      <PaginationItem className="Paginaton" />

      <Space wrap style={{ justifyContent: "center", width: "100%" }}>
        {loading && (
          <Spin className="Spin" size="large" tip="Loading..."></Spin>
        )}
        {ok &&
          items.map((item: IItemCart) => {
            return (
              <Link to={`/people/${ejectId(item.url)}`} key={item.name}>
                <ItemCart {...item} />
              </Link>
            );
          })}
      </Space>
      <PaginationItem className="Paginaton" />
    </PageTemplate>
  );
};

export default ItemsList;
