import React, { useEffect } from "react";
import ItemCart from "../../molecules/ItemCart/ItemCart";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "./effects/actionCreators";
import "./style.scss";
import { Space } from "antd";

function ItemsList() {
  const items = useSelector((state) => state.itemsList.items);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((items) => {
        dispatch(setItems(items.results));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Space wrap style={{ justifyContent: "center" }}>
      {items.length > 0 &&
        items.map((item) => {
          return <ItemCart key={item.name} item={item} />;
        })}
    </Space>
  );
}

export default ItemsList;
