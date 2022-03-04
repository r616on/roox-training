import React from "react";
import "./style.scss";
import { Card } from "antd";

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

const ItemCart = (props: { item: itemType }) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = props.item;
  return (
    <Card title={`Имя: ${name}`} style={{ width: 250 }}>
      <ul>
        <li className="card_item">{`Рост: ${height}`}</li>
        <li className="card_item">{`Вес: ${mass}`}</li>
        <li className="card_item">{`Цвет волос: ${hair_color}`}</li>
        <li className="card_item">{`Цвет кожи: ${skin_color}`}</li>
        <li className="card_item">{`Цвет глаз: ${eye_color}`}</li>
        <li className="card_item">{`Год рождения: ${birth_year}`}</li>
        <li className="card_item">{`Пол: ${gender}`}</li>
      </ul>
    </Card>
  );
};

export default ItemCart;
