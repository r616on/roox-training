import React, { useEffect, FC } from "react";
import ItemCart from "../../molecules/ItemCart/ItemCart";
import { useSelector, useDispatch } from "react-redux";
import { Spin, message } from "antd";
import { itemType } from "../../molecules/ItemCart/ItemCart";
import { getItems } from "./effects/actionCreators";
import "./style.scss";
import { Space } from "antd";

const ItemsList: FC = () => {
  const items = useSelector((state: any) => state.itemsList.items);
  const { loading, ok, error } = useSelector(
    (state: any) => state.itemsList.requestStatus
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, []);

  useEffect(() => {
    error && message.error("Ошибка загрузки данных");
  }, [error]);

  return (
    <Space wrap style={{ justifyContent: "center", width: "100%" }}>
      {loading && <Spin size="large" tip="Loading..."></Spin>}

      {ok &&
        items.map((item: itemType) => {
          return <ItemCart key={item.name} item={item} />;
        })}
    </Space>
  );
};

export default ItemsList;
