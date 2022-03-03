import React, { useEffect } from "react";
import ItemCart from "../../molecules/ItemCart/ItemCart";
import { useSelector, useDispatch } from "react-redux";
import { Spin, message } from "antd";
import { getItems } from "./effects/actionCreators";
import "./style.scss";
import { Space } from "antd";

function ItemsList() {
  const items = useSelector((state) => state.itemsList.items);
  const { loading, ok, error } = useSelector(
    (state) => state.itemsList.requestStatus
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
        items.map((item) => {
          return <ItemCart key={item.name} item={item} />;
        })}
    </Space>
  );
}

export default ItemsList;
