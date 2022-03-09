import React from "react";
import "./style.scss";
import { Card } from "antd";
import { IItemCart } from "./interface";

const ItemCart = ({ name, height, mass, birth_year, gender }: IItemCart) => (
  <Card title={`Имя: ${name}`} style={{ width: 250 }}>
    <ul>
      <li className="card_item">{`Рост: ${height}`}</li>
      <li className="card_item">{`Вес: ${mass}`}</li>
      <li className="card_item">{`Год рождения: ${birth_year}`}</li>
      <li className="card_item">{`Пол: ${gender}`}</li>
    </ul>
  </Card>
);

export default ItemCart;
