import React, { useState } from "react";
import Hotblud from "../Items/Hotblud";
import Supbluds from "../Items/Supbluds";
import Salatbluds from "../Items/Salatbluds";
import Zacbluds from "../Items/Zacbluds";

const Category = (props) => {
  const [shown, setIsShown] = useState(0);
  const hide = (event) => {
    setIsShown(0);
  };
  const show1 = (event) => {
    setIsShown(1);
  };
  const show2 = (event) => {
    setIsShown(2);
  };
  const show3 = (event) => {
    setIsShown(3);
  };
  const show4 = (event) => {
    setIsShown(4);
  };
  return (
    <div className="Category">
      {shown === 0 && (
        <>
          <div className="category-item" onClick={show1}>
            <div className="categ-image">
              <img src="./4.jpg" className="categ-image-img" />
            </div>
            <div className="cont-title">
              <div className="categ-title">Горячее</div>
            </div>
          </div>
          <div className="category-item" onClick={show2}>
            <div className="categ-image">
              <img src="./5.jpg" className="categ-image-img" />
            </div>
            <div className="cont-title">
              <div className="categ-title">Супы</div>
            </div>
          </div>
          <div className="category-item" onClick={show3}>
            <div className="categ-image">
              <img src="./6.jpg" className="categ-image-img" />
            </div>
            <div className="cont-title">
              <div className="categ-title">Салаты</div>
            </div>
          </div>
          <div className="category-item" onClick={show4}>
            <div className="categ-image">
              <img src="./7.jpg" className="categ-image-img" />
            </div>
            <div className="cont-title">
              <div className="categ-title">Закуски</div>
            </div>
          </div>
        </>
      )}
      {shown === 1 && <Hotblud resept={props.resept} hide={hide} />}
      {shown === 2 && <Supbluds resept={props.resept} hide={hide} />}
      {shown === 3 && <Salatbluds resept={props.resept} hide={hide} />}
      {shown === 4 && <Zacbluds resept={props.resept} hide={hide} />}
    </div>
  );
};

export default Category;
