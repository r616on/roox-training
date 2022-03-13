import React from "react";
import "./style.scss";
import { Card } from "antd";
import { IPlanetCart } from "./interfaces";

const PlanetsCart: React.FC<IPlanetCart> = ({
  name,
  rotation_period,
  diameter,
  population,
}) => (
  <Card title={`Название: ${name}`} className="PlanetsCart">
    <ul>
      <li className="card_item">{`Период вращения: ${rotation_period}`}</li>
      <li className="card_item">{`Диаметр: ${diameter}`}</li>
      <li className="card_item">{`Население: ${population}`}</li>
    </ul>
  </Card>
);

export default PlanetsCart;
