import React, { useState } from "react";
import Navrec from "./Navrec";
import Navblud from "./Navblud";

const Aside = () => {
  const [selected1, setIsSelected1] = useState(true);
  const [selected2, setIsSelected2] = useState(false);
  const select1 = (event) => {
    setIsSelected1(true);
    setIsSelected2(false);
  };
  const select2 = (event) => {
    setIsSelected1(false);
    setIsSelected2(true);
  };
  return (
    <div className="Aside">
      <div className="contsearc">
        <div
          className={`recept${selected1 ? "-select" : "-noselect"}`}
          id="recept"
          onClick={select1}
        >
          Рецепты
        </div>
        <div
          className={`recept${selected2 ? "-select" : "-noselect"}`}
          onClick={select2}
        >
          Ингредиенты
        </div>
      </div>
      {selected1 && <Navrec />}
      {selected2 && <Navblud />}
    </div>
  );
};

export default Aside;
