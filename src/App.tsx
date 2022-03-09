import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FullPeopleCart from "./components/molecules/FullPeopleCart/FullPeopleCart";
import ItemsList from "./components/organisms/ItemsList/ItemsList";
import Index from "./components/page/Index/Index";

function App() {
  return (
    <Routes>
      <Route path="/people/:id" element={<FullPeopleCart />} />
      <Route path="/peopleList/" element={<ItemsList />} />
      <Route path="/" element={<Index />} />
    </Routes>
  );
}

export default App;
